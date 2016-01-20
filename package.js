Package.describe({
  summary: 'Helpers for Testing Space Flux Stores.',
  name: 'space:testing-flux',
  version: '0.1.0',
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
    'space:base@3.1.1',
    'space:flux@0.6.1',
    'space:testing@2.0.1',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'source/stores-bdd-api.coffee'
  ]);

});

Package.onTest(function(api) {

  api.use([
    'coffeescript',
    'check',
    'mongo',
    'underscore',
    'space:testing',
    'space:flux@0.6.1',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ]);

});
