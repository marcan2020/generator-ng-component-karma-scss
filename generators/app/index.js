'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('ng-component-karma-scss') + ' generator!'
    ));

    var prompts = [{
      type: 'text',
      name: 'componentName',
      message: 'Component Name',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    let name = this.props.componentName;

    let context = {
        file_name: name,
        component_name: name.charAt(0).toUpperCase() + name.slice(1)
    };

    this.fs.copyTpl(
      this.templatePath('test.component.ts'),
      this.destinationPath(name + '.component.ts'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('test.component.html'),
      this.destinationPath(name + '.component.html'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('test.component.spec.ts'),
      this.destinationPath(name + '.component.spec.ts'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('test.component.scss'),
      this.destinationPath(name + '.component.scss'),
      context
    );

    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath('index.ts'),
      context
    );

  }
});
