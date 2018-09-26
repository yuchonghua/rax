#!/usr/bin/env node
'use strict';
const program = require('commander');
const optionsAttachToEnv = require('../src/config/optionsAttachToEnv');

program
  .option('--target <target>', '设置目标转换类型 ali/wx', /^(ali|wx)$/i, 'ali')
  .option('--output <output>', '设置转换后的文件夹名', 'dist')
  .action((cmd) => {
    optionsAttachToEnv(cmd);
    require('../src/watch')();
  });

program.parse(process.argv);
