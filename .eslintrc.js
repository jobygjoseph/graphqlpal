module.exports = {
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    restParams: true,
    spread: true,
    templateStrings: true
  },
  env: {
    es6: true,
    mocha: true,
    node: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
};
