module.exports = {
  siteAuthor: '',
  siteTitle: 'Institute for Community Inclusion',
  siteShortTitle: 'ICI',
  siteDescription: 'For over 40 years, the Institute for Community Inclusion (ICI) has worked to ensure that people with disabilities have the same opportunity to dream big, and make their dreams a fully included, integrated, and welcomed reality.',
  siteShortDescription: '',
  siteKeywords: 'comma, separated, list', // Replace this with your SEO keywords
  siteUrl: 'http://localhost:8000',
  pathPrefix: '/',
  siteLanguage: 'en',
  get copyright() {
    return `Copyright \u00A9 ${new Date().getFullYear()} ${this.siteAuthor}`;
  }, // Returns copyright string with year of last build
}
