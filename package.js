Package.describe({
  summary: 'Helpers for Testing Space Flux Stores.',
  name: 'space:testing-flux',
  version: '1.0.0',
  git: 'https://github.com/meteor-space/testing-flux.git',
  debugOnly: true
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'coffeescript',
    'underscore',
    'reactive-var',
    'reactive-dict',
    'tracker',
    'check',
    'ecmascript',
    'space:base@4.0.0',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'source/allow-to-ignore-some-struct-types.js',
    'source/stores-bdd-api.coffee'
  ], 'client');

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'mongo',
    'underscore',
    'space:testing@3.0.1',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ]);

});
