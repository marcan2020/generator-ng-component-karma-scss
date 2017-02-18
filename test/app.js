'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ng-component-karma-scss:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({componentName: 'test'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'test.component.ts',
      'test.component.html',
      'test.component.scss',
      'test.component.spec.ts',
      'index.ts'
    ]);
  });
});
