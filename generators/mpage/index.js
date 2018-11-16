const chalk = require('chalk');
const yosay = require('yosay');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
        console.log(args)
        console.log(opts)
    }
    initializing() {
        this.argument('mpage', { type: String, required: true });
    }
    prompting() {}

    writing() {
        let list = [
            ['src/modules/index/_index.js', `src/modules/${this.options.mpage}/${this.options.mpage}.js`],
            ['src/modules/index/_index.vue', `src/modules/${this.options.mpage}/${this.options.mpage}.vue`],
            ['src/modules/index/index.html', `src/modules/${this.options.mpage}/${this.options.mpage}.html`],
        ]
        list.forEach(item => {
            let fromFile = item[0];
            let toFile = item[1];
            this.fs.copyTpl(
                this.templatePath(fromFile),
                this.destinationPath(toFile),
                // 将配置参数带过去
                { mpage: this.options.mpage }
            );
        })
    }
    install() {}

    end() {
        this.log(yosay(`Now the ${chalk.green('mutil page')} is ready!`))
    }
};
