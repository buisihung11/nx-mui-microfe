# Introduction

This folder will be used to create a custom NX Generator. The default structure is:

```
<template-folder-name>
  ├── README.md
  ├── <template-folder-name-generator>
  ├── <code-generator-folder>

```

The `README.md` file is the file that will be displayed when the user runs the command `nx workspace-generator <template-folder-name>`. This file should contain the instructions on how to use the generator.

The `<template-folder-name-generator>` is the folder that will contain the generator code. This folder should contain the `index.ts` file that will be the entry point for the generator.

The `<code-generator-folder>` is the folder that will contain the code that will be used to generate the files.
