# click-book

story telling in the browser with animation in js


### process-images.sh

Even if they are tiny, bash scripts a great in optimizing personal workflow. To give an example, the following sript unzips svg files and pretties them into xml just in one go:

```
#!/bin/bash

set -e

# 1. unzip
unzip $1 -d tmp

# 2. prettify and rename
pushd tmp
ls *.svg | sed 's/[^0-9]*\([0-9]*\.svg\)/cat "&" | \..\/node_modules\/.bin\/pretty-xml > ..\/images\/\1/' | sh
popd
rm -rf tmp
```
#### This is how it works:
A handy script always starts with the shebang, in this case `#!/bin/bash`.
Without the shebang, every time it's up to the user to chose an interpreter. 
`#!` tells the kernel to use an interpreter for this file, 
right here it's bash, given in the path `/bin/bash`. For now `$PATH` as environment variabe is out of scope, 
that's why the script has to be located in one directory next to the zip file and the program has to be executed 
with `./scriptname.sh name-of-zip-file`.

To follow the lines in this example, `set -e` makes sure that the script will stop, if one of the following commands fails. 

`unzip` is another program, but can also be used as a command. It does what it says, unzipping files. 
`$n` sets the number of accepted parameters. This program will only accept
one paramter (`$1`). The conditional expression `-d` proofs, if the given file name exits and is a directory.  
All these magic happens in the currently created directory `tmp`. 

The `pushd` command saves the current working directory in memory. 

The next line does a lot. Let's sort it out step by step:
`ls *.svg` lists all directory content to stout that is an svg file. To ignore the rest of the file name, `*` is needed.
All the svg files are piped (`|`) from stout to stin of `sed` (stream editor).

[sed](https://en.wikipedia.org/wiki/Sed#Mode_of_operation) is a Unix utility that parses and transforms text.
The following example shows a typical use of sed for substitution:
`sed 's/regexp/replacement/' inputFileName > outputFileName`
The `s` stands for substitute. The [regular expression](https://en.wikipedia.org/wiki/Regular_expression) to be searched is placed 
after the first delimiting `/`, here `[^0-9]*\(0-9)*\.svg\)`. The replacement follows the second `/`, here `/cat "&" | \..\/node_modules\/.bin\/.bin\/pretty-xml > ..\/images\/images\/1/`. In this case, the replacement includes a redirection to stout, but for now let's 
take a closer look to the regular expression.
Imagine there is a file name that needs to be renamed. The given file name is "bla1Blup.svg", but the new name should be 1.svg, which means 
that all the letters before ".svg" must be found and thrown away. That's exactly what `[^0-9]*\(0-9)*\.svg\)` is saying. 


The `popd` command returns to the path at the top of directory stack.
At least, the tmp directory will be removed to start again with a fresh and clean tmp directory next time, 
when a zip file needs to be unzipped and prettified.
