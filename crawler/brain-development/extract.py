#!/usr/bin/env python

import os

import pandas as pd

curdir = os.path.abspath(os.curdir)
ixi_path = os.path.join(curdir, 'ixi', 'ixi.csv')
# Get the IXI demographics.
ixi = 'http://biomedic.doc.ic.ac.uk/brain-development/downloads/IXI/IXI.xls'
csv = pd.read_excel(ixi)
csv.to_csv(ixi_path, index=False)