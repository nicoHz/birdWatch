#!/bin/bash

#set -e

# 1. unzip
unzip $1 -d tmp

# 2. prettify and rename
# Taken from http://stackoverflow.com/questions/2372719/using-sed-to-mass-rename-files
pushd tmp
ls *.svg | sed 's/[^0-9]*\([0-9]*\.svg\)/cat "&" | \..\/node_modules\/.bin\/pretty-xml > ..\/images\/\1/' | sh
popd
rm -rf tmp
