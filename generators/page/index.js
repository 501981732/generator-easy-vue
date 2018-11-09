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
    this.argument('page', { type: String, required: true });
  }
  prompting() {}
 
  writing() {
    this.fs.copyTpl(
      this.templatePath('src/pages/demo.vue'),
      this.destinationPath('src/pages/' + this.options.page + '.vue'),
      { page: this.options.page }
    );
    this.fs.copyTpl(
      this.templatePath('src/router/index.js'),
      this.destinationPath('src/router/index.js'),
      { page: this.options.page }
    );
  }
  install() {}

  end() {
        this.log(yosay(`Now the page ${chalk.green(this.options.page)} is ready!`))
  }
};