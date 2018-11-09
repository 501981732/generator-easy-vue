const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }
  initializing() {
    this.argument('publicPath', { type: String, required: true });
  }
  prompting() {}
 
  writing() {
    this.fs.copyTpl(
      this.templatePath('config/index.js'),
      this.destinationPath('config/index.js'),
      { publicPath: this.options.publicPath }
    );
  }
  install() {}

  end() {
        this.log(yosay(`Now the ${chalk.green(this.options.publicPath)} is ready!`))
  }
};