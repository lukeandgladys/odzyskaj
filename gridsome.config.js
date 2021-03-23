// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'odzyskaj.net',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Lesson',
        path: './content/infos/**/*.md',
      }
    }
  ],
  templates: {
    Lesson: '/:title'
  }
}
