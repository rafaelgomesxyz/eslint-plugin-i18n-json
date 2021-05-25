const path = require('path');

module.exports = {
  root: true, // since this example folder is embedded into the project. just ignore this.
  extends: [
    'plugin:@rafaelgomesxyz/i18n-json/recommended'
  ],
  rules: {
    '@rafaelgomesxyz/i18n-json/sorted-keys': [2, {
      sortFunctionPath: path.resolve('./custom-sort')
    }]
  }
}
