'use strict'
const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const camelCase = require('camelcase')

const getPrompts = require('./prompts')
const getPackageJson = require('./package')

module.exports = class extends Generator {
  initializing() {
    this.props = {
      defaults: {
        gitName: this.user.git.name(),
        gitEmail: this.user.git.email(),
      },
    }
  }

  prompting() {
    this.log(yosay(`Welcome to the wondrous ${chalk.red('tsc')} generator!`))

    return this.prompt(getPrompts(this.props.defaults)).then(props => {
      this.props = {
        ...props,
        packageNameCamelCase: camelCase(props.packageName),
      }
    })
  }

  writing() {
    this.destinationRoot(this.props.packageName)

    const templates = [
      'src/index.test.ts',
      'src/index.ts',
      '.gitignore',
      '.travis.yml',
      'jest.config.js',
      'LICENCE',
      'prettier.config.js',
      'readme.md',
      'tsconfig.json',
      'tsconfig.prod.json',
      'tslint.json',
    ]

    templates.forEach(template =>
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(template),
        this.props
      )
    )

    const packageJson = getPackageJson(this.props)
    this.fs.writeJSON(this.destinationPath('package.json'), packageJson)
  }

  install() {
    const devDependencies = [
      '@types/jest',
      '@types/node',
      'husky',
      'jest',
      'lint-staged',
      'nodemon',
      'np',
      'npm-run-all',
      'prettier',
      'rimraf',
      'ts-jest',
      'ts-node',
      'tslint',
      'tslint-config-airbnb',
      'tslint-config-prettier',
      'typescript',
    ]

    this.log()
    this.log(`${chalk.green('git')} init`)
    this.spawnCommandSync('git', ['init'])

    this.log()
    this.log(`${chalk.green('installing')} dependencies`)
    this.yarnInstall(devDependencies, { dev: true })
  }
}
