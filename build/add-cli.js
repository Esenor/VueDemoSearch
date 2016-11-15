const commandLineArgs = require('command-line-args');
var fs = require('fs');
var logSymbols = require('log-symbols');
const options = commandLineArgs([
  { name: 'type', alias: 't'},
  { name: 'name', alias: 'n'}
])
if (typeof options.name !== 'string' || typeof options.type !== 'string') {
  console.error(logSymbols.error, '  Error in command: example: -t|--type `path` -n|--name `name`' );
  return 1;
} else {
  var getHtmlFormatedName = function (name) {
    name = name.replace('`', '');
    name = name.replace('\'', '');
    name = name.replace('"', '');
    return name;
  }
  options.name = getHtmlFormatedName(options.name);
  console.log(logSymbols.info, '  Formated name: ' + options.name);
  const cpFile = require('cp-file');
  const camelCase = require('camelcase');
  var getFileName = function (name) {
    name = camelCase(options.name)
    name = name.replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
    return name;
  }
  fs.stat('src/' + options.type + '/' + getFileName(options.name) + '.vue', function(err, stat) {
    if(err == null) {
      console.log(logSymbols.error, '  File already exists in src/' + options.type + '/' + getFileName(options.name) + '.vue');
      console.log(' ');
      return 1;
    } else if(err.code == 'ENOENT') {
      // file vue
      cpFile('build/sample/component.template.vue', 'src/' + options.type + '/' + getFileName(options.name) + '.vue').then(() => {
        console.log(logSymbols.success, '  VueJs file created src/' + options.type + '/' + getFileName(options.name) + '.vue');
        var replace = require("replace");
        const decamelize = require('decamelize');
        console.log(logSymbols.success, '  Replace {%minName%} with ' + decamelize(options.name, '-') + ' in ./src/' + options.type + '/' + getFileName(options.name) + '.vue');
        replace({
          regex: "{%minName%}",
          replacement: decamelize(options.name, '-'),
          paths: ['./src/' + options.type + '/' + getFileName(options.name) + '.vue'],
          recursive: true,
          silent: true,
        });
        console.log(logSymbols.success, '  Replace {%htmlName%} with ' + getFileName(options.name) + ' in ./src/' + options.type + '/' + getFileName(options.name) + '.vue');
        replace({
          regex: "{%htmlName%}",
          replacement: getFileName(options.name),
          paths: ['./src/' + options.type + '/' + getFileName(options.name) + '.vue'],
          recursive: true,
          silent: true,
        });
      });
      // test unit
      cpFile('build/sample/component.spec.js', 'test/unit/specs/' + getFileName(options.name) + '.spec.js').then(() => {
        console.log(logSymbols.success, '  Test Spec file created with default test in test/unit/specs/' + getFileName(options.name) + '.vue');
        console.log(logSymbols.warning, '  You have to change the default Spec test file');
        var replace = require("replace");
        console.log(logSymbols.success, '  Replace {%htmlName%} with ' + getFileName(options.name) + ' in ./test/unit/specs/' + getFileName(options.name) + '.spec.js');
        replace({
          regex: "{%htmlName%}",
          replacement: getFileName(options.name),
          paths: ['./test/unit/specs/' + getFileName(options.name) + '.spec.js'],
          recursive: true,
          silent: true,
        });
        console.log(logSymbols.success, '  Replace {%path%} with ' + options.type + ' in ./test/unit/specs/' + getFileName(options.name) + '.spec.js');
        replace({
          regex: "{%path%}",
          replacement: options.type,
          paths: ['./test/unit/specs/' + getFileName(options.name) + '.spec.js'],
          recursive: true,
          silent: true,
        });
        console.log('');
      });
    }
  });
}
