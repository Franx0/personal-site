#!/bin/bash

command=$@

# Checks npm package installation
npm_status=$(bash -lc "npm cache verify")

if [[ $npm_status =~ 'success' ]]; then
  bash -lc "echo 'Up to date with npm'"
else
  bash -lc "npm cache clean --force && npm install -g webpack && npm install"
fi

bash -lc "${command}"
