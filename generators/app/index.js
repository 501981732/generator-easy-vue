'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const util = require('util');

/**
 * 生命周期
 *prompting - 接收用户输入阶段
 *configuring - 保存配置信息和文件
 *default - 自定义功能函数名称，如 method1
 *writing - 生成项目目录结构阶段
 *conflicts - 统一处理冲突，如要生成的文件已经存在是否覆盖等处理
 *install - 安装依赖阶段
 *end - 生成器结束阶段
 */
module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red('easy-vue')} generator! ${chalk.red('多功能搬砖器')}`)
    );

    const prompts = [{
      name: 'projectName', // 用户输入项标识，在获取用户输入值的时候用到
      message: 'your project name?', //给用户提示的信息
      // default: this.appname // 默认值
      default: path.basename(process.cwd()) // 默认值
    }, {
      type: 'text',
      name: 'author',
      message: 'Your name',
      default: this.user.git.name()
    }, {
      type: 'input',
      name: 'email',
      message: 'Your email',
      default: this.user.git.email()
    }, {
      name: 'reset',
      type: 'list',
      message: 'Choose a way  to reset your css',
      choices: [{
        name: 'reset.css',
        value: 'reset.css',
        checked: true
      }, {
        name: 'normalize.css',
        value: 'normalize.css'
      }, {
        name: 'none',
        value: 'none'
      }]
    }, {
      name: 'cssPrepeocessor',
      type: 'list',
      message: 'Choose a CSS preprocessor',
      choices: [{
        name: 'less',
        value: 'less',
        checked: true
      }, {
        name: 'sass',
        value: 'scss'
      }]
    },{
      name: 'layout',
      type: 'list',
      message: 'Choose a layout scheme if you need a M project',
      choices: [{
        name: 'rem',
        value: 'rem',
        checked: true
      }, {
        name: 'vw',
        value: 'vw'
      },{
        name: 'none',
        value: 'none'
      }]
    },{
        type: 'confirm', // 非必填 默认text ‘confirm’ 是选择输入‘YES/NO’
        name: 'skeleton',
        message: 'Do you need a initialized skeleton ?',
        default: true
      },{
        type: 'confirm', // 非必填 默认text ‘confirm’ 是选择输入‘YES/NO’
        name: 'vuex',
        message: 'Do you need a initialized vuex ?',
        default: true
      },{
        type: 'text', // 非必填 默认text ‘confirm’ 是选择输入‘YES/NO’
        name: 'imagePublicPath',
        message: 'Do you need a imagePublicPath ?',
        store: true
      },{
        type: 'input', // 非必填 默认text ‘confirm’ 是选择输入‘YES/NO’
        name: 'publicPath',
        message: 'Do you need a assetsPublicPath ?',
        store: true
      }, {
      name: 'installationMethod',
      type: 'list',
      message: 'Choose a way to install the package:',
      choices: [{
        name: 'npm',
        value: 'npm',
        checked: true
      }, {
        name: 'yarn',
        value: 'yarn'
      }, {
        name: 'bower',
        value: 'bower'
      },{
        name: 'no I install packages by myself',
        value: 'no'
      }]
    }, ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.xxx;
      this.props = props;
    });
  }

  writing() {
    // this.templatePath 返回template目录下文件的地址
    // this.destinationPath 指定加工完成后文件的存放地址 一般指项目目录
    // this.fs.copy 把文件从一个目录复制到另一个目录，一般是从template目录复制到你所指定的项目目录，用于固定文件和可选文件（根据用户选择）
    // this.fs.copyTpl：和上面的函数作用一样，不过会事先经过模板引擎的处理，一般用来根据用户输入处理加工文件
    let target = [
      //需要加工的文件使用数组
      'build/build.js',
      'build/check-versions.js',
      'build/utils.js',
      'build/logo.png',
      'build/vue-loader.conf.js',
      'build/webpack.base.conf.js',
      'build/webpack.dev.conf.js',
      'build/webpack.prod.conf.js',
      'config/dev.env.js',
      'config/prod.env.js',
      'src/assets/css/common.css',
      'src/assets/js/.gitkeep',
      'src/assets/img/.gitkeep',
      'src/assets/logo.png',
      'src/components/global.js',
      'src/config',
      'src/mixins/.gitkeep',
      'src/plugins/',
      'src/router/',
      'src/utils/',
      'src/App.vue',
      'static/.gitkeep',
      '.babelrc',
      '.editorconfig',
      '.gitignore',
      'README.md',
      'yarn.lock',
      'package-lock.json'
    ]

    // fix linux 添加隐藏文件
    target = [...target,
      ['_package.json', 'package.json'],
      ['src/_main.js', 'src/main.js'],
      ['_postcssrc.js', '.postcssrc.js'],
      ['config/_index.js', 'config/index.js'],
      ['_index.html', 'index.html'],
      ['src/components/_x-alert.vue', 'src/components/x-alert.vue'],
      ['src/pages/_HelloWorld.vue', 'src/pages/HelloWorld.vue'],
    ]
    // 是否添加单元测试
    // this.props.test && target.push('test/index.spec.js')
    this.props.reset == 'reset.css' && target.push('src/assets/css/reset.css')
    this.props.reset == 'normalize.css' && target.push('src/assets/css/normalize.css')
    this.props.layout == 'vw' && target.push('src/components/vwDemo.vue')
    this.props.vuex  && target.push('src/store')
    this.props.skeleton && target.push('build/webpack.skeleton.conf.js',
        'src/components/skeleton.vue',
        'src/skeleton.entry.js',
        'skeleton.js')
    target.forEach(item => {
      let toFile, fromFile;
      if (Array.isArray(item)) {
        fromFile = item[0];
        toFile = item[1];
        this.fs.copyTpl(
          this.templatePath(fromFile),
          this.destinationPath(toFile),
          // 将配置参数带过去
          this.props
        );
      } else {
        fromFile = item;
        toFile = item;
        this.fs.copy(
          this.templatePath(fromFile),
          this.destinationPath(toFile),
          this.props
        );
      }
    })
  }
  install() {
    switch (this.props.installationMethod) {
      case 'npm':
        this.npmInstall();
        break;
      case 'yarn':
        this.yarnInstall();
        break;
      case 'bower':
        this.bowerInstall();
        break;
      default:
        break;
    }

  }
  end() {
    this.log(yosay(`${chalk.green('Now do something ')}${chalk.blue(' whatever you want!!')} `))
  }
};
