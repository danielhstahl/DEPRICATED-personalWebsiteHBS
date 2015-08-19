Handlebars.registerHelper('tex', function(inline, options) {
  //console.log(inline);
  if(!options){
    options=inline;
    inline=false;
  }
  return katex.renderToString(options.fn(), { displayMode: inline });
});
