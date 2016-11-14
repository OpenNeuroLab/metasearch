import pandas as pd
df = pd.read_csv('phenotype.csv')
def drop_dot_zero(val):
    val_str = str(val)
    if '.0' in val_str:
        return val_str[:-2]
    return val_str
pid = df.participant_id.apply(drop_dot_zero)
df.participant_id = pid
df_mri = pd.read_csv('../../crawler/clean-csv/all.csv', dtype=str)
df_unique = df.drop_duplicates()
T1urls = df_mri.T1url.values.tolist()
def find_mri(row):
    for mr in T1urls:
        if all([str(row[val]).lower() in mr.lower() for val in ['project', 'participant_id']]):
            T1urls.remove(mr)
            return mr
    return None

T1urls = df_mri.T1url.values.tolist()
MRIs = df_unique.apply(find_mri, axis=1)
df_unique['MRIs'] = MRIs
hasMRI = MRIs.apply(lambda x: 'no' if x is None else 'yes')
df_unique['MRI'] = hasMRI
df_unique.to_csv('phenotype_mri.csv', index=False)
