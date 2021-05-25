const path = require('path');

module.exports = {
  root: true, // since this example folder is embedded into the project. just ignore this.
  extends: [
    'plugin:@rafaelgomesxyz/i18n-json/recommended'
  ],
  rules: {
    '@rafaelgomesxyz/i18n-json/valid-message-syntax': [2, {
      syntax: path.resolve('./custom-message-syntax')
    }]
  }
}
