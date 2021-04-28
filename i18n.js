module.exports = {
  defaultLocale: 'en',
  locales: ['en', 'pl', 'ru'],
  pages: {
    '*': ['header', 'footer', 'sidebar', 'layout'],
    '/': ['common', 'hero', 'project-card', 'projects'],
  },
};
