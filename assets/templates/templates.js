(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['CreditRiskPaper'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href='"
    + this.escapeExpression(((helper = (helper = helpers.researchUrl || (depth0 != null ? depth0.researchUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"researchUrl","hash":{},"data":data}) : helper)))
    + "'>Upcoming Publication in December edition Journal of Credit Risk </a>\n";
},"useData":true});
templates['analytics'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Audit Analytics provides data services to Audit Services to facilitate audit testing.  These data services involve creating visualizations to make the underlying data accessible and actionable to Audit Services, automating audit testing, and providing self-service tools for auditors to dynamically explore the data.  Audit provides a unique opportunity for analyzing data.  Audit's mandate is to independently access bank data sources in order to provide assurance around the bank's processes.  Hence all the bank's data is available for Audit Analytics to mine.  These data sources can be as diverse as system access data (for example, using active directory), portfolio data at the loan level, and transactional data for wires.\n";
},"useData":true});
templates['chart'] = template({"1":function(depth0,helpers,partials,data) {
    return "    <div id='chartist' class='col-md-8'>\n\n    </div>\n    <div id='selection' class='col-md-4'>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <div id='chartist'>\n\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class='progress'>\n  <div id=\"progressBar\" class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"></div>\n</div>\n<div class='row'>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasOptions : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['createSelection'] = template({"1":function(depth0,helpers,partials,data) {
    return "      <a class='selectSeries list-group-item' rol='menuitem' tabindex='-1' href='#'>"
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<label>\n  X-Values</label>\n<div style='height: 370px;overflow: auto;'>\n  <div class='list-group'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.keys : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"useData":true});
templates['creditRiskResearch'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li>"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + " </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class='txt'>\n  This project is a basic implementation of my credit risk model.  The full details can be found in my <a href='"
    + this.escapeExpression(((helper = (helper = helpers.researchUrl || (depth0 != null ? depth0.researchUrl : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"researchUrl","hash":{},"data":data}) : helper)))
    + "'>publication</a> in the Journal of Credit Risk.  The main innovations are the fast numerical implementation to compute the distribution and semi-endogenous liquidity risk.\n</div>\n<div class='txt'>\n  The parameters have the following interpretation:\n  <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n</div>\n";
},"useData":true});
templates['dataManagement'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "The purpose of data is to deliver information to humans in an actionable form. This purpose implies data availability, data integrity, and data connectivity.  To help achieve this purpose, I have self-imposed the following criteria:\r<ul>\r<li>Every data table that I create will have a primary key.  </li>\r<li>In the nearly universal case that more than one table is required to maintain efficient and normalized data, every pertinent table will have at least one foreign key. </li>\r</ul>\r\r\nThis purpose also precludes humans from ever altering, viewing, or touching data at any granular level.  Humans were not intended to accurately and efficiently process data.\r\n";
},"useData":true});
templates['firstHittingTimeResearch'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li>"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + " </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "X_t";
},"5":function(depth0,helpers,partials,data) {
    return "m";
},"7":function(depth0,helpers,partials,data) {
    return "\\tau_m ";
},"9":function(depth0,helpers,partials,data) {
    return "X";
},"11":function(depth0,helpers,partials,data) {
    return "\\phi(u)={E}\\left[e^{uiX}\\right]=\\int_\\Omega e^{uiX} d{P}(\\omega)=\\int_{R} e^{uix} f(x) dx";
},"13":function(depth0,helpers,partials,data) {
    return "f(x)";
},"15":function(depth0,helpers,partials,data) {
    return "\\frac{1}{2\\pi} \\int_{R} e^{-iux} \\phi(u) du = f(x) ";
},"17":function(depth0,helpers,partials,data) {
    return "\\mu";
},"19":function(depth0,helpers,partials,data) {
    return " \\sigma^2 ";
},"21":function(depth0,helpers,partials,data) {
    return "f(x)=\\frac{1}{\\sqrt{2\\pi} \\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}";
},"23":function(depth0,helpers,partials,data) {
    return "\\phi(u)= e^{u \\mu i - \\frac{\\sigma^2 u ^2}{2}}";
},"25":function(depth0,helpers,partials,data) {
    return "\\phi(u)";
},"27":function(depth0,helpers,partials,data) {
    return "\\frac{1}{2\\pi} \\int_{R} e^{-iux} e^{u \\mu i - \\frac{\\sigma^2 u^2}{2}} du ";
},"29":function(depth0,helpers,partials,data) {
    return "=\\frac{1}{2\\pi} \\int_{R} e^{ui (\\mu-x) - \\frac{\\sigma^2 u^2}{2}} du ";
},"31":function(depth0,helpers,partials,data) {
    return "=\\frac{1}{2\\pi}\n  \\int_{R} e^{- \\frac{\\sigma^2}{2}\\left(u-\\frac{(\\mu-x)i}{\\sigma^2}\\right)^2 -\\frac{1}{2\\sigma^2}(\\mu-x)^2 } du ";
},"33":function(depth0,helpers,partials,data) {
    return "=\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2 } \\int_{R} \\frac{1}{\\sqrt{2\\pi}}e^{- \\frac{z^2}{2} } \\frac{dz}{\\sigma}\n  ";
},"35":function(depth0,helpers,partials,data) {
    return "z=\\sigma\\left(u-\\frac{(\\mu-x)i}{\\sigma^2}\\right)";
},"37":function(depth0,helpers,partials,data) {
    return "dz=\\sigma du";
},"39":function(depth0,helpers,partials,data) {
    return "=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2 } \\int_{R} \\frac{1}{\\sqrt{2\\pi}}e^{- \\frac{z^2}{2} } dz ";
},"41":function(depth0,helpers,partials,data) {
    return "=\\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{1}{2\\sigma^2}(x-\\mu)^2\n  } ";
},"43":function(depth0,helpers,partials,data) {
    return " dX=\\alpha(X_t, t)dt+\\sigma(X_t, t)dW_t ";
},"45":function(depth0,helpers,partials,data) {
    return "X_0";
},"47":function(depth0,helpers,partials,data) {
    return " {E}[g(X_\\tau)]=g(X_0)+{E}\\left[\\int_0 ^ \\tau {A}g dt \\right]";
},"49":function(depth0,helpers,partials,data) {
    return " {A}=\\alpha(x, t)\\frac{\\partial }{\\partial x} + \\sigma^2(x, t) \\frac{1}{2} \\frac{\\partial^2}{\\partial x^2}";
},"51":function(depth0,helpers,partials,data) {
    return " X_t";
},"53":function(depth0,helpers,partials,data) {
    return " \\tau ";
},"55":function(depth0,helpers,partials,data) {
    return "\\tau";
},"57":function(depth0,helpers,partials,data) {
    return "\\tau_m";
},"59":function(depth0,helpers,partials,data) {
    return "\\phi(u)={E}\\left[e^{ui\\tau}\\right]";
},"61":function(depth0,helpers,partials,data) {
    return " g(X_t)=e^{uit}h(X_t)";
},"63":function(depth0,helpers,partials,data) {
    return "\\phi(u)={E}[e^{ui\\tau_m}]=h(X_0)+\\int_0 ^ {\\tau_m} \\left({A}h+uih\\right) dt";
},"65":function(depth0,helpers,partials,data) {
    return " h(X_\\tau)=h(m)=1 ";
},"67":function(depth0,helpers,partials,data) {
    return " \\phi(u) ";
},"69":function(depth0,helpers,partials,data) {
    return " {A}\\phi+ui\\phi=0";
},"71":function(depth0,helpers,partials,data) {
    return "\\phi(m)=1 ";
},"73":function(depth0,helpers,partials,data) {
    return "x \\in (0,m)";
},"75":function(depth0,helpers,partials,data) {
    return "u";
},"77":function(depth0,helpers,partials,data) {
    return "O(l * n)";
},"79":function(depth0,helpers,partials,data) {
    return "l";
},"81":function(depth0,helpers,partials,data) {
    return "n";
},"83":function(depth0,helpers,partials,data) {
    return "x";
},"85":function(depth0,helpers,partials,data) {
    return "dX=\\alpha X dt+\\sigma X^{\\delta} dW_t ";
},"87":function(depth0,helpers,partials,data) {
    return " \\begin{bmatrix}\\alpha x \\frac{\\partial \\phi}{\\partial x} +\\frac{x^{2\\delta}\\sigma^2}{2} \\frac{\\partial^2 \\phi}{\\partial x ^2}+ui\\phi=0\\\\ \\phi(m)=1 \\end{bmatrix}\n  ";
},"89":function(depth0,helpers,partials,data) {
    return "j=1,...n-1 ";
},"91":function(depth0,helpers,partials,data) {
    return " \\begin{bmatrix} x \\approx x_0+\\Delta x j =x_j\\\\ \\frac{\\partial \\phi}{\\partial x} \\approx \\frac{\\phi(x_0+\\Delta x (j+1))-\\phi(x_0+\\Delta x (j-1))}{2\\Delta\n  x} = \\frac{\\phi_{j+1}-\\phi_{j-1}}{2\\Delta x} \\\\ \\frac{\\partial^2 \\phi}{\\partial x ^2} \\approx \\frac{\\phi(x_0+\\Delta x (j+1))-2\\phi(x_0+\\Delta x j)+\\phi(x_0+\\Delta x (j-1))}{(\\Delta x)^2} =\\frac{\\phi_{j+1}-2\\phi_j+\\phi_{j-1} }{(\\Delta x) ^2}\\end{bmatrix}\n  ";
},"93":function(depth0,helpers,partials,data) {
    return "\\alpha x_j \\frac{\\phi_{j+1}-\\phi_{j-1}}{2\\Delta x} +\\frac{x_j ^{2\\delta}\\sigma^2}{2} \\frac{\\phi_{j+1}-2\\phi_j+\\phi_{j-1} }{(\\Delta x) ^2}+ui\\phi_j=0";
},"95":function(depth0,helpers,partials,data) {
    return " \\begin{bmatrix} \\left(\\frac{x_j ^{2\\delta} \\sigma^2}{2(\\Delta x)^2}+\\frac{\\alpha x_j}{2\\Delta x}\\right)\\phi_{j+1}=b_j \\phi_{j+1}\\\\ \\left(ui-\\frac{x_j ^{2\\delta} \\sigma^2}{(\\Delta x)^2}\\right)\\phi_{j}=a_j \\phi_{j}\\\\ \\left(\\frac{x_j ^{2\\delta}\n  \\sigma^2}{2(\\Delta x)^2}-\\frac{\\alpha x_j}{2\\Delta x}\\right)\\phi_{j-1}=c_j \\phi_{j-1} \\end{bmatrix}  ";
},"97":function(depth0,helpers,partials,data) {
    return " \\begin{bmatrix} a_1 & b_1 & 0 & \\ldots \\\\ c_2 & a_2 & b_2\n  & \\ldots \\\\ 0 & c_3 & a_3 & \\ddots \\\\ \\vdots & \\vdots & \\ddots & \\ddots \\end{bmatrix} \\begin{bmatrix} \\phi_1 \\\\ \\phi_2 \\\\ \\phi_2 \\\\ \\vdots \\end{bmatrix} ";
},"99":function(depth0,helpers,partials,data) {
    return " \\phi_0=0,\\phi_n=1 ";
},"101":function(depth0,helpers,partials,data) {
    return "\\begin{bmatrix}  0 \\\\ \\vdots \\\\ 0 \\\\ -b_{n-1} \\end{bmatrix}";
},"103":function(depth0,helpers,partials,data) {
    return "O(n) ";
},"105":function(depth0,helpers,partials,data) {
    return "function thomas(a, b, c, psi){ //a, b, c, psi are vectors, a is complex //if b.length=a.length or c.length=a.length, only first n-1 records are used\n  var n=a.length; //get number of records on diagonal\n  for(var i=1; i<n; i++){//forward loop\n    var gamHat= math.divide(c[i-1], a[i-1]);\n    a[i]=math.add(a[i], math.multiply(-b[i-1],gamHat));\n    psi[i]=math.add(psi[i], math.multiply(-psi[i-1], gamHat));\n  }\n  var phi=new Array(n+2); //the solution\n  phi[n]=math.divide(psi[n-1], a[n-1]);\n  phi[0]=0; //boundaries\n  phi[n+1]=1;//boundaries\n  for(var i=(n-2); i>-1; i--){ //backward loop\n    phi[i+1]=math.divide(math.add(psi[i], math.multiply(-b[i], phi[i+2])), a[i]);\n    phi[i+2]=math.re(phi[i+2]); //only keep real part\n  }\n  phi[1]=math.re(phi[1]); //only keep real part\n  return phi;\n}\n";
},"107":function(depth0,helpers,partials,data) {
    return "function ode(n, alpha, sigma, mu, delta, m){ //number of discrete steps, drift, volatility, complex term, CEV parameter, barrier.\n  var dx=m/(n-1); //the domain is [0, m] since a CEV process is always positive.\n  var a=new Array(n-2);//first and last are boundary conditions\n  var b=new Array(n-2);//first and last are boundary conditions var c=new Array(n-2);//first and last are boundary conditions\n  var psi=new Array(n-2);//first and last are boundary conditions\n  var sigs=(sigma*sigma)/(dx*dx);\n  for(var i=0; i<(n-2); i++){ //first and last are boundary conditions\n    a[i]=math.subtract(math.complex(0, mu),\n    math.pow(dx*(i+1), 2*delta)*sigs);\n    b[i]=math.pow(dx*(i+1), 2*delta)*.5*sigs+.5*alpha*(i+1);\n    c[i]=math.pow(dx*(i+2), 2*delta)*.5*sigs-.5*alpha*(i+2); //note that x_{j+1} instead of x_j\n    psi[i]=0;\n  }\n  psi[n-3]=-b[n-3]; //boundary condition\n  var phi=thomas(a, b, c, psi); //solve equation return phi;\n}\n";
},"109":function(depth0,helpers,partials,data) {
    return "O(nlk)";
},"111":function(depth0,helpers,partials,data) {
    return "k";
},"113":function(depth0,helpers,partials,data) {
    return "128";
},"115":function(depth0,helpers,partials,data) {
    return "function FangOosterlee(options){ //l is the number of u discretions, k is number of t-discretions, n is the discretions in the ODE solution, m is the hitting value, alpha is the drift of dX, delta is the powerof X (a value of one corresponds to B-S), and sigma is the volatility\n  var n=options['n'];\n  var k=options['k'];\n  var l=options['l'];\n  var m=options['m'];\n  var alpha=options['alpha'];\n  var delta=options['delta'];\n  var sigma=options['sigma'];\n  var X0=m*.2;//hardcoded X0 for the sake of determining the size of t-space. This is not suitable for production! var exVal=math.abs(math.log(m/X0)/(alpha-.5*sigma*sigma)); //expected value of tau when delta=1, used for determining size of t-space\n  var std=math.sqrt(math.abs((math.log(m/X0)*sigma*sigma)/(math.pow(alpha-.5*sigma*sigma, 3)))); //standard deviation of tau when delta=1, used for determining size of t-space var xMax=exVal+5*std; //a range for t-space...production code would use chebyshev's inequality to compute the range instead of an arbitrary \"5\"\n  var lam=xMax/(k-1);//\"dt\"\n  var dx=m/(n-1); //\"dx\"\n  var du=Math.PI/xMax; //discrete u\n  var cp=2/xMax;\n  var phi=[];//array of arrays...\n  var initial=ode(n, alpha, sigma, 0, delta,m); //get solution of ODE for each u...this is not included in for loop since we need to multiply by .5\n  for(var i=0;i<n; i++){\n    initial[i]=initial[i]*.5;\n  }\n  var denominator=n+l-1;\n  phi.push(initial);\n  for(var i=1;i<l;i++){\n    var updateRatio=(i*100)/denominator;\n    self.postMessage({update: updateRatio+'%'}); //since this is a long running task, this is called asynchronously and posts updates of progress to the original thread\n    phi.push(ode(n, alpha, sigma, i*du, delta, m)); //get solution of ODE for each u\n  }\n  var soFar=i;\n  var data={};\n  for(var h=0; h<n;h++){\n    var updateRatio=((soFar+h)*100)/denominator;\n    self.postMessage({update: updateRatio+'%'});\n    var key=Math.round(dx*h*10000)/10000.0;\n    key=key.toString();\n    data[key]=[];\n    var ySeries=[];\n    var xSeries=[];\n    for(var i=0; i<k;i++){ //iterate over \"t\" discretions var y=0;\n      for(var j=0; j<n; j++){\n        y=y+phi[j][h]*math.cos(du*j*lam*i)*cp;\n      }\n      ySeries.push(y);\n      xSeries.push(i*lam);\n    }\n    data[key]={Time: xSeries, Values: ySeries}; //put data in a manner that is easily readable\n  }\n  self.postMessage( {result:data});\n}\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class='txt'>\n  This describes how to numerically compute the density of the first hitting time of a CEV process.\n</div>\n<div class='txt'>\n  The parameters have the following interpretation:\n  <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n</div>\n\n<div class='title lead'>\n  <h2>Introduction</h2>\n</div>\n<div class='txt'>\n  In a continuous setting, the \"first hitting time\" of a process is defined as the first time a process ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is equal to a level ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". If the process is random, the first hitting time (denoted ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ") is also random. With few exceptions, the density of the first hitting time of even a single dimensional Stochastic Differential Equation (SDE) is not explicitly known. However, finding the distribution numerically is not computationally difficult. The technique involves the characteristic function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". The next section explains characteristic functions and their use with a simple example.\n</div>\n\n\n<div class='title lead'>\n  <h2>Characteristic functions explained</h2>\n</div>\n<div class='txt'>\n  The characteristic function of a random variable ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is defined as "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " The last equality assumes that the random variable ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " has a density\n  function ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". By Fourier's inversion theorem, "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class='subTitle lead'>\n  <h3>Simple Example</h3>\n</div>\n\n\n<div class='txt'>\n  The density of a normal random variable with mean ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "and variance ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "is "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " The characteristic function is "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " To demonstrate\n  the Fourier inversion theorem, we will invert ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " to recover ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(31, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(33, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(35, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(37, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(39, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(41, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n\n\n<div class='title lead'>\n  <h2>First Hitting Time</h2>\n</div>\n<div class='txt'>\n  In what follows, the driving process is ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " which solves the SDE ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(43, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " with initial value ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(45, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". This is the most general process in a diffusion setting.\n</div>\n\n<div class='subTitle lead'>\n  <h3>Dynkan's Formula</h3>\n</div>\n<div class='txt'>\n  Dynkan's formula states the following: "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(47, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(49, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  is the generator of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(51, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(53, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is a stopping time with respect the filtration generated by the Brownian motion.\n</div>\n\n<div class='subTitle lead'>\n  <h3>Finding the Characteristic Function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(55, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "</h3>\n</div>\n<div class='txt'>\n\n\n  The characteristic function of a random variable ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(57, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " can be numerically inverted to recover the density. Recalling that the characteristic function is defined as "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(59, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " and letting ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(61, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ",\n  then by Dynkan's formula we have "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(63, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " With ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(65, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(67, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is then the solution to the ODE "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(69, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " With terminal condition\n  ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(71, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". This ODE can be efficiently solved numerically (eg, by using finite difference methods) and then numerically inverted to obtain the density function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(55, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". Discretizing the ODE and solving it numerically is has linear complexity\n  as will be shown below. Solving the ODE in this way yields the approximate solution for ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(73, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ", but only for a single value of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(75, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". Therefore the ODE must be solved multiple times in order to obtain the characteristic function for each discretized\n  ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(75, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". Fortunately once the matrix of values is obtained the density function can be recovered for each discretized ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(73, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". The total complexity for computing the matrix is ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(77, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(79, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the number of steps in ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(75, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(81, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  is the number of steps in ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(83, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".\n</div>\n\n<div class='subTitle lead'>\n  <h3>Simple Example</h3>\n</div>\n<div class='txt'>\n  For simplicity, let ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(85, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". This corresponds with the CEV model for stock price movements and is chosen due to being a relatively simple but interesting case: there are no analytic solutions to the distribution of the\n  first hitting time. The ODE that solves the characteristic function is "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(87, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Using finite difference methods, the equation is discretized as follows (for ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(89, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "): "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(91, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Substituting these into the ODE, the result is the following: "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(93, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Grouping all the like terms,\n  "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(95, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " This can be represented by the following tri-diagonal matrix equation: "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(97, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " With ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(99, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ". To incorporate these boundary conditions, the\n  solution of the matrix equation is "
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(101, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " Since this matrix is tri-diagonal, it can be solved in ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(103, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " operations using the Thomas algorithm. The following code shows the Thomas algorithm in javascript:\n\n  <pre><code class=\"txt\">\n"
    + ((stack1 = (helpers.prism || (depth0 && depth0.prism) || alias1).call(depth0,"javascript",{"name":"prism","hash":{},"fn":this.program(105, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </code></pre>\n\n  This function numerically computes the ODE.\n  <pre><code class=\"txt\">\n"
    + ((stack1 = (helpers.prism || (depth0 && depth0.prism) || alias1).call(depth0,"javascript",{"name":"prism","hash":{},"fn":this.program(107, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </code></pre>\n\n\n  Oosterlee and Fang (2008) proposed a novel method to price European options for a very diverse set of asset models. This method relies on inverting the characteristic function of the underlying log price; and prices options with many strikes simultaneously.\n  Along the way they demonstrated the surprising accuracy of the method in computing the probability density from the characteristic function. Since the authors’ main goal was to price options they spent minimal time on this result. Two key characteristics\n  of this algorithm are the separate computations of the ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(83, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(75, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " domains and the exponential convergence of the algorithm. The method that the authors devised only requires ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(109, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " operations to compute the density where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(111, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the number\n  of steps in the ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(55, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " domain and due to the excellent convergence properties ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(79, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " does not typically have to be larger than ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(113, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ".\n\n  <pre ><code class='txt'>\n"
    + ((stack1 = (helpers.prism || (depth0 && depth0.prism) || alias1).call(depth0,"javascript",{"name":"prism","hash":{},"fn":this.program(115, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </code>\n  </pre>\n\n</div>\n";
},"useData":true});
templates['inputProject'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <div class=\"form-group col-md-4 col-sm-6\">\n      <label for='"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\n      <input type='text' id='"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "' class='form-control projectInput' placeholder='"
    + alias3(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "'></input>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class='row'>\n  <div style='margin-top:40px;'>\n\n  </div>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<button id='execute' data-route='"
    + this.escapeExpression(((helper = (helper = helpers.submitId || (depth0 != null ? depth0.submitId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"submitId","hash":{},"data":data}) : helper)))
    + "' class='btn btn-primary'>Execute</button>\n<button id='projectHelp' class='btn btn-warning pull-right'>Explanation</button>\n";
},"useData":true});
templates['mathematicalModeling'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "The purpose of a model is to interpret data for human consumption to facilitate superior decision making.  Increasing complexity of the stochastic data generating process requires mathematical sophistication, while providing results in a timely, understandable, and applicable manner.  Thus a model must be computationally efficient, it must have informative output, and it must be reliable.  As with data, I have self-imposed the following constraints in creating a model:\r<ul>\r<li> The model must be parsimonious</li>\r<li> The model must, whenever practicable, have a semi-analytical solution (to the point that efficient methods of solutions can achieved)</li>\r<li> The model must be repeatable.</li>\r<li> The model either must be have a GUI or be embedded within a data flow. </li>\r</ul>\r\n";
},"useData":true});
templates['modal'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!-- Modal -->\n<div class=\"modal fade\" id=\"newModal\" tabindex=\"-1\" role=\"dialog\" ><!--aria-labelledby=\"myModalLabel\">-->\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <!--<h4 class=\"modal-title\" id=\"myModalLabel\">"
    + this.escapeExpression(((helper = (helper = helpers.queryId || (depth0 != null ? depth0.queryId : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"queryId","hash":{},"data":data}) : helper)))
    + "</h4>-->\n      </div>\n      <div class=\"modal-body\">\n        <div class='verticalScroll'>\n            <div class=''>\n"
    + ((stack1 = this.invokePartial(helpers.lookup.call(depth0,depth0,"text",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"                ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "             </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n      </div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['modelRisk'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "In addition to data acquisition and data visualization, Audit Analytics also audits model risk management.  Similar to the data element of Audit Analytics' purpose, auditing MRMD allows Audit Analytics to be exposed to every model at the bank.  The diverse mathematical techniques and the variety of ways in which models meet business needs provides constant learning opportunities.  \n";
},"useData":true});
templates['operationalRiskResearch'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "      <li>"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + ": "
    + alias2(alias1((depth0 != null ? depth0.description : depth0), depth0))
    + " </li>\n";
},"3":function(depth0,helpers,partials,data) {
    return "[0, t]";
},"5":function(depth0,helpers,partials,data) {
    return "N_t";
},"7":function(depth0,helpers,partials,data) {
    return "X_t=\\sum_{j=1} ^ {N_t} L_j";
},"9":function(depth0,helpers,partials,data) {
    return "L_j";
},"11":function(depth0,helpers,partials,data) {
    return "j";
},"13":function(depth0,helpers,partials,data) {
    return "X_t";
},"15":function(depth0,helpers,partials,data) {
    return "L";
},"17":function(depth0,helpers,partials,data) {
    return "c,\\, d)";
},"19":function(depth0,helpers,partials,data) {
    return "\\lambda d\\mu";
},"21":function(depth0,helpers,partials,data) {
    return "\\lambda";
},"23":function(depth0,helpers,partials,data) {
    return "d\\mu";
},"25":function(depth0,helpers,partials,data) {
    return "{E}[e^{uiX_t}]=e^{t \\int_{R} (e^{iuL}-1) \\lambda d\\mu}=e^{\\lambda t \\left({E}\\left[e^{iuL_j}\\right]-1\\right)}";
},"27":function(depth0,helpers,partials,data) {
    return "t";
},"29":function(depth0,helpers,partials,data) {
    return "\\tau";
},"31":function(depth0,helpers,partials,data) {
    return "{E}[e^{uiX_\\tau}]=\\phi_\\tau \\left(\\lambda \\left({E}\\left[e^{iuL_j}\\right]-1\\right)\\right)";
},"33":function(depth0,helpers,partials,data) {
    return "\\phi_\\tau";
},"35":function(depth0,helpers,partials,data) {
    return "X_{\\tau}";
},"37":function(depth0,helpers,partials,data) {
    return "\\tau=\\int_0 ^ t v(s)ds";
},"39":function(depth0,helpers,partials,data) {
    return "v_t=v_0+\\int_0 ^t a(1-\\delta \\lambda {E}[L_j]-v_s)ds+\\sigma \\int_0 ^ t \\sqrt{v_s} dW_s +\\delta \\sum_{j=1} ^ {N_\\tau} L_j ";
},"41":function(depth0,helpers,partials,data) {
    return "v_t=v_0+\\int_0 ^t a(\\bar{b}-v_s)ds+\\sigma \\int_0 ^ t \\sqrt{v_s} dW_s +\\delta \\sum_{j=1} ^ {N_\\tau} L_j ";
},"43":function(depth0,helpers,partials,data) {
    return "N_\\tau";
},"45":function(depth0,helpers,partials,data) {
    return "v_t";
},"47":function(depth0,helpers,partials,data) {
    return "v";
},"49":function(depth0,helpers,partials,data) {
    return "X_\\tau";
},"51":function(depth0,helpers,partials,data) {
    return "{E}[e^{uiX_\\tau}]={E}\\left[e^{uiX_\\tau+ \\tau \\lambda  \\left({E}\\left[e^{iuL}\\right]-1\\right)- \\tau \\left({E}\\left[e^{iuL}\\right]-1\\right)}\\right]";
},"53":function(depth0,helpers,partials,data) {
    return "={E}^V \\left[e^{\\tau \\lambda {E}\\left[e^{iuL}-1\\right]}\\right]";
},"55":function(depth0,helpers,partials,data) {
    return "{P}^V";
},"57":function(depth0,helpers,partials,data) {
    return "\\eta_\\tau=e^{uiX_\\tau- \\tau\\lambda \\left({E}\\left[e^{iuL}\\right]-1\\right)}";
},"59":function(depth0,helpers,partials,data) {
    return "\\eta_t";
},"61":function(depth0,helpers,partials,data) {
    return "Y_t";
},"63":function(depth0,helpers,partials,data) {
    return "\\eta_\\tau=e^{uiX_t- t\\lambda \\left({E}\\left[e^{iuL}\\right]-1\\right)}";
},"65":function(depth0,helpers,partials,data) {
    return "\\eta_\\tau d{P}";
},"67":function(depth0,helpers,partials,data) {
    return "e^{uiL}\\lambda d\\mu";
},"69":function(depth0,helpers,partials,data) {
    return "v_t=v_0+\\int_0 ^t a(\\bar{b}-v_s)ds+\\sigma \\int_0 ^ t \\sqrt{v_s} dW_s +\\delta \\sum_{j=1} ^ {\\hat{N}_\\tau} \\hat{L}_j ";
},"71":function(depth0,helpers,partials,data) {
    return "{E} \\left[e^{-\\rho\\int_0 ^ {T} v_s ds}\\right]=e^{\\alpha(0, T)+\\beta(0, T)v_0}";
},"73":function(depth0,helpers,partials,data) {
    return "\\alpha,\\,\\beta";
},"75":function(depth0,helpers,partials,data) {
    return "\\begin{cases}\n\\frac{\\partial \\beta}{\\partial t}=a \\beta+\\rho-\\frac{1}{2} \\sigma^2 \\beta^2-\\int_{R^+} \\left(e^{\\delta \\beta L}-1\\right)\\lambda e^{uiL} d\\mu & \\beta(T, T)=0\\\\\n\\frac{\\partial \\alpha}{\\partial t}=-a\\bar{b} \\beta & \\alpha(T, T)=0\n\\end{cases} ";
},"77":function(depth0,helpers,partials,data) {
    return "\\rho=\\lambda(1-{E}[e^{uiL}])";
},"79":function(depth0,helpers,partials,data) {
    return "\\begin{cases}\n\\frac{\\partial \\beta}{\\partial t}=a \\beta+\\lambda-\\lambda{E}[e^{(ui+\\delta \\beta)L}]-\\frac{1}{2} \\sigma^2 \\beta^2 & \\beta(T, T)=0\\\\\n\\frac{\\partial \\alpha}{\\partial t}=-a\\bar{b} \\beta & \\alpha(T, T)=0\n\\end{cases} ";
},"81":function(depth0,helpers,partials,data) {
    return "\\begin{cases}\n\\beta_{j+1}=\\beta_j -\\Delta t \\left(a\\beta_j+\\lambda-\\lambda{E}[e^{(ui+\\delta \\beta)L}]-\\frac{1}{2} \\sigma^2 \\beta_j^2 \\right)& \\beta_0=0\\\\\n\\alpha_{j+1}=\\alpha_j+\\Delta t a\\bar{b} \\beta_j & \\alpha_0=0\n\n\\end{cases}\n";
},"83":function(depth0,helpers,partials,data) {
    return "\\Delta t=t/n";
},"85":function(depth0,helpers,partials,data) {
    return "n";
},"87":function(depth0,helpers,partials,data) {
    return "[0,\\,t]";
},"89":function(depth0,helpers,partials,data) {
    return "u";
},"91":function(depth0,helpers,partials,data) {
    return "e^{\\beta_n v_0+\\alpha_n}";
},"93":function(depth0,helpers,partials,data) {
    return "m";
},"95":function(depth0,helpers,partials,data) {
    return "t_i \\in [0, t]";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class='txt'>\n  This project is a basic implementation of my operational risk model.\n</div>\n<div class='txt'>\n  The parameters have the following interpretation:\n  <ul>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n  </ul>\n</div>\n<div class='txt'>\n  <h2> Model Description</h2>\n\nStandard LDA modeling of operational risk assumes that the frequency and severity of operational loss events are independent. I propose a model that treats the operational risk loss variable as a compound Poisson process.  By using Carr and Wu's concept of a ``leverage neutral'' measure I obtain a semi-closed form solution for the characteristic function of the loss distribution while retaining the following key features: the frequency distribution is auto-correlated and the frequency distribution and severity distributions are correlated.  The standard LDA model is recovered as a special case of the model.\n\nConsider a business with operational loss events.  The random variable that counts the number of loss events in a time period ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  The total loss from these loss events is ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is a strictly positive random variable which denotes the dollar loss from loss event ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  Since ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is stochastic, ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is a compound Poisson jump process.  Intuitively, loss events arrive as a ``stream'' instead of at a point in time, with no two events occurring simultaneously.  For the remainder of this paper the distribution of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is assumed to be a Gamma-distributed random variable with parameters ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  This distribution is not a required feature and is used for simplicity.  In principal any positive distribution with analytic characteristic function and density may be used.\n\nA Poisson jump process is characterized by the product ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " controls the frequency of jumps and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the density of the jump size.  This is made clear by the characteristic function of a compound Poisson jump process:\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\nFrom the characteristic function it is clear that if ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is itself random (for notational convenience, ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ") and independent of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " that the extended characteristic function would be\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(31, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nWhere ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(33, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the moment generating function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".\n\nA general specification of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " that admits a (semi) analytic moment generating function is the affine jump-diffusion of Duffie et al (2000). In this paper, ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " will be driven by a particular form of this general jump-diffusion. However, the independence assumption between ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(29, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is dropped.  This leads to a model that has increased tail risk to account for dependencies between the frequency and severity distributions.  The goal is to find a semi analytic characteristic function for ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(35, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".\n<h2> Jump Specification</h2>\n\nThe jump-diffusion is specified as\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(37, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(39, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(41, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nNote that ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(43, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the time changed counting process ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " and that the long run expected value of the ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(45, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is one.  Hence the stochastic time is an unbiased estimator of real time.  Note also that since ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is strictly positive that ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(47, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is positive.\n\nThis jump-diffusion process for ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(47, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " provides an autocorrelated frequency of jumps (``clumps'' of jumps) and correlation between the jump size and the frequency of jumps through the jumps' effect on the level of the process ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(47, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  Hence this specification fully incorporates correlation between jump size and frequency of jumps and frequency of jumps with itself.  Since there is clear correlation between the jump size and jump frequency, the equation for the laplace transform can no longer be directly applied.  However, Carr and Wu (2004) showed that by using the ``leverage neutral'' measure that the characteristic function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(49, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " retains analytic tractability under this specification.\n<h2>Semi-analytic solution </h2>\nThe characteristic function of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(49, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(51, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(53, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nWhere ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(55, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the measure induced by ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(57, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  Note that ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(59, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the complex-valued Escher transform.\n\nIt is a well known result (eg,  Papapantolean 2008) that the parameters of a Levy process are altered under the Esscher transform as follows:\n\nLet ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(61, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " be a compound Poisson process characterized by ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  Define the Esscher transform by\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(63, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nThen under the probability measure ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(65, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ", ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(61, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is a compound Poisson process characterized by ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(67, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\nUnder this new measure, the dynamics of ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(47, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " are as follows:\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(69, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\nBy Duffie et al (2000), for affine processes like ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(45, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ", the following statement holds:\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(71, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\nWhere ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(73, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " satisfy\n\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(75, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\nIn this case, ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(77, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  The system of ODEs thus reads\n\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(79, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n<h2>Numerical Implementation</h2>\n\nThe ODEs can be numerically solved.  A very basic scheme is Euler's finite difference solution, which results in the following difference equations which are iteratively solved:\n\n"
    + ((stack1 = (helpers.tex || (depth0 && depth0.tex) || alias1).call(depth0,true,{"name":"tex","hash":{},"fn":this.program(81, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "Here ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(83, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " where ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(85, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " is the number of discretions in ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(87, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  The solution (for a given ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(89, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ") is ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(91, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += ".  This system of ODEs must be solved for each discrete ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(89, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " in the complex domain.\n\nA more sophisticated technique is to use the Runge-Kutta algorithm to solve the ODE.  This algorithm has the same numerical complexity as Euler's scheme but with significantly better convergence properties.  Solving for these ODEs for each discrete ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(89, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " results in an ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(85, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " by ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(93, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += " matrix of solutions for each discrete ";
  stack1 = ((helper = (helper = helpers.tex || (depth0 != null ? depth0.tex : depth0)) != null ? helper : alias1),(options={"name":"tex","hash":{},"fn":this.program(95, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.tex) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ".  Hence the solution to the ODEs can be reused for multiple time intervals.\n\n</div>\n";
},"useData":true});
templates['productivity'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "  People are naturally creative thinkers.  Many mundane and repetitive tasks are delegated to humans in the corporate world.  These are the tasks at which computers are superior.  My passion is to realize productivity enhancements through the proper design of workflows so that the workload is optimally divided between man and machine.  A happy byproduct of such an optimization is a technically superior, critically engaged workforce. \n";
},"useData":true});
templates['projects'] = template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=this.escapeExpression, alias2=this.lambda;

  return "<div class=\"col-xs-12 col-md-"
    + alias1(((helper = (helper = helpers.colMd || (depth0 != null ? depth0.colMd : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"colMd","hash":{},"data":data}) : helper)))
    + " col-sm-6\" >\n\n  <a href=\"#/"
    + alias1(alias2((depth0 != null ? depth0.route : depth0), depth0))
    + "\" class=\"thumbnail card\" style=\"background-image:url("
    + alias1(alias2((depth0 != null ? depth0.src : depth0), depth0))
    + ")\">\n    <div class='opaque'>\n      <p>\n        "
    + alias1(alias2((depth0 != null ? depth0.name : depth0), depth0))
    + "\n      </p>\n   </div>\n    <!--<img src=\""
    + alias1(alias2((depth0 != null ? depth0.src : depth0), depth0))
    + "\">-->\n  </a>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
templates['sidebar'] = template({"1":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "    <li>\n      <a href='#/"
    + alias2(alias1((depth0 != null ? depth0.route : depth0), depth0))
    + "' class='item'>"
    + alias2(alias1((depth0 != null ? depth0.displayName : depth0), depth0))
    + "</a>\n    </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class='sidebar-nav txt'>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['skills'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>\n  I have created applications in Java, C++, Python, and HTML/Javascript.  Some of these applications are available on  <a href=\"#/projects\">this site</a> while others are available on my <a href=\"https://github.com/phillyfan1138/\"> github</a> page.  These applications range from an <a href=\"https://github.com/phillyfan1138/TreeClass\">automatic recombining tree class for any single dimensional stochastic differential equation</a> to creating an <a href=\"https://github.com/phillyfan1138/DuneClient\">interface</a> between <a href=\"http://emby.media/\">emby</a> and the <a href=\"http://www.dune-hd-usa.com/\">Dune Media Player</a>.\n</p>\n<p>\nI have extensive experience in designing and creating databases in SQL Server.  At my previous job I created a data warehouse which captured and retained all loan data.  This enabled more advanced analytics including seasoning analysis and time to default analysis.  Additionally, the availability of this data enabled economic capital and ALLL calculations to be computed in seconds instead of the days of data gathering that previously was required.  In my current position, I am designing, implementing, and tracking our workflow around data tests.  To this end I have created an extensive infrastructure with dozens of normalized and interlinked tables.  This enables automated workflows, automated documentation generation, and clever visualizations showing the inter-relationships between all the tables.\n</p>\n<p>\nAt my previous job I created the ALLL and economic capital models.  The economic capital model used <a href=\"http://arxiv.org/pdf/0708.2542.pdf\">Euler's </a> method to push economic capital to each loan in the portfolio.  Each of these models had a GUI which allowed non-technical users to price loans and analyze risk.\n</p>\n<p>\nAdditionally I have a working knowledge of SAS, VBA, and VB.net.\n</p>\n";
},"useData":true});
templates['stock'] = template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <span class='stockChange stockUp'> "
    + this.escapeExpression(((helper = (helper = helpers.change || (depth0 != null ? depth0.change : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"change","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <span class='stockChange stockDown'> "
    + this.escapeExpression(((helper = (helper = helpers.change || (depth0 != null ? depth0.change : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"change","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<span class=\"stockSymbol\">"
    + alias3(((helper = (helper = helpers.symbol || (depth0 != null ? depth0.symbol : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"symbol","hash":{},"data":data}) : helper)))
    + "</span>\n<span class='stockPrice'>"
    + alias3(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.up : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
templates['summary'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "I work for BB&T (<span class='stock' id='NYSE:BBT'></span>) in Audit Analytics.  I have a masters degree in mathematical finance from the University of North Carolina Charlotte.  Previously I worked as a model developer and risk analyst at Uwharrie Capital Corp (<span class='stock' id='OTCMKTS:UWHR'></span>); a small community bank outside Charlotte, NC.  I am <span id='age'></span> years old, married to a wonderful woman, and currently residing in Winston Salem, NC.\n";
},"useData":true});
templates['textAreas'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"text container\">\n  <h2>"
    + this.escapeExpression(((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"header","hash":{},"data":data}) : helper)))
    + "</h2>\n  <div class='txt'>\n"
    + ((stack1 = this.invokePartial(helpers.lookup.call(depth0,depth0,"text",{"name":"lookup","hash":{},"data":data}),depth0,{"data":data,"indent":"    ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "  </div>\n</div>\n";
},"usePartial":true,"useData":true});
})();
