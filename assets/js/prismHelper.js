Handlebars.registerHelper('prism', function(language, options) { //language can be "javascript", etc
  return Prism.highlight(options.fn(), Prism.languages[language]);
});
