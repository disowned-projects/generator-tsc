module.exports = ({ githubUsername = '', gitName = '', gitEmail = '' }) => [
  {
    name: 'packageName',
    message: 'Package name:',
  },

  {
    name: 'description',
    message: 'Description:',
  },
  {
    name: 'keywords',
    message: 'Comma-seperated list of keywords:',
    filter: keywords => keywords.split(',').map(s => s.trim()),
  },
  {
    name: 'githubUsername',
    message: 'What is your Github username?',
    default: githubUsername,
    store: true,
  },
  {
    name: 'repoUrl',
    message: 'Repository Url:',
    default: d =>
      d.githubUsername
        ? `https://github.com/${d.githubUsername}/${d.packageName}`
        : '',
  },
  {
    name: 'authorName',
    message: 'What is your fullname?',
    default: gitName,
    store: true,
  },
  {
    name: 'authorUrl',
    message: 'What is your personal site URL?',
    validate: url => {
      if (!url) return true
      if (/^(http|https):\/\/+[\www\d]+\.[\w]+(\/[\w\d]+)?/.test(url)) {
        return true
      }
      return `Invalid URL: ${url}`
    },
    store: true,
  },
  {
    name: 'authorEmail',
    message: 'What is your personal email address?',
    validate: email => {
      if (!email) return true
      if (
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          email
        )
      ) {
        return true
      }
      return 'Invalid Email address.'
    },
    store: true,
    default: gitEmail,
  },
]
