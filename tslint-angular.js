const path = require("path");

module.exports = {
  extends: path.join(path.dirname("./tslint.js")),
  rulesDirectory: [
    path.join(path.dirname(require.resolve('codelyzer')), './')
  ],
  rules: {
    "no-var-requires": true,

    "directive-selector": false,
    "component-selector": false,
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": false,
    "no-input-rename": false,
    "no-output-rename": false,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": false,
    "directive-class-suffix": false,
    "no-access-missing-member": false,
    "templates-use-public": true,
    "invoke-injectable": true
  }
};
