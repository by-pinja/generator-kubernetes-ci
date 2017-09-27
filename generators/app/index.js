'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wicked ' + chalk.red('@protacon/kubernetes-ci') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Project name?',
      default: this.appname.replace(/\s/g, "-")
    },
    {
      type: 'input',
      name: 'namespace',
      message: 'Kubernetest namespace (in test environment)?',
      default: this.appname.replace(/\s/g, "-")
    },
    {
      type: 'input',
      name: 'branch',
      message: 'Current branch in git?',
      default: 'master'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile'), {
        projectName: this.props.projectName,
        namespace: this.props.namespace
      });

    this.fs.copyTpl(
      this.templatePath('Jenkinsfile'),
      this.destinationPath('Jenkinsfile'), {
        projectName: this.props.projectName,
        namespace: this.props.namespace
      });

    this.fs.copyTpl(
      this.templatePath('k8s/k8s.yaml'),
      this.destinationPath('k8s/' + this.props.branch + '.yaml'), {
        projectName: this.props.projectName,
        namespace: this.props.namespace,
        branch: this.props.branch
      });

    this.fs.copy(
      this.templatePath('nginx.conf'),
      this.destinationPath('nginx.conf')
    );

    this.fs.copy(
      this.templatePath('nginx.conf'),
      this.destinationPath('nginx.conf')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );

    this.fs.copy(
      this.templatePath('exampleApp/index.html'),
      this.destinationPath('exampleApp/index.html')
    );
  }

  install() {
  }
};
