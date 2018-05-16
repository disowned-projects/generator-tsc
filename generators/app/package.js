module.exports = ({
  packageName,
  description = '',
  keywords = [],
  authorName,
  authorEmail,
  authorUrl,
  repoUrl,
}) => {
  const packageJson = {
    name: packageName,
    description,
    version: '0.0.0',
    main: 'dist/index.js',
    types: 'dist/index.d.ts',
    license: 'MIT',
    files: ['dist/'],

    scripts: {
      build: 'tsc -p tsconfig.prod.json',
      start: 'node dist',
      dev: "nodemon -w 'src' -e 'ts'  -x 'clear && ts-node src' -q",
      format: "prettier --write 'src/**/*.ts'",
      lint: "tslint -p . -c tslint.json 'src/**/*.ts'",
      test: 'jest',
      prebuild: 'rimraf dist',
      version: 'npm-run-all --parallel lint build --aggregate-output',
      release: 'np',
      precommit: 'lint-staged',
    },
    'lint-staged': {
      '*.ts': ['prettier --write ', 'tslint -p . -c tslint.json ', 'git add'],
    },
  }

  if (keywords.length > 0) {
    packageJson.keywords = keywords
  }

  if (authorEmail || authorUrl || authorName) {
    packageJson.author = {}
  }
  if (authorName) {
    packageJson.author.name = authorName
  }
  if (authorEmail) {
    packageJson.author.email = authorEmail
  }
  if (authorUrl) {
    packageJson.author.url = authorUrl
  }

  if (repoUrl) {
    packageJson.repository = repoUrl
  }

  return packageJson
}
