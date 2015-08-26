var socket = io();
var chart = ""; /*"global" chart variable*/
/*begin site structure */
var siteObj = [/*{
  content: [{
    header: "Productivity",
    text: "productivity"
  }, {
    header: "Data Management",
    text: "dataManagement"
  }, {
    header: "Mathematical Modeling",
    text: "mathematicalModeling"
  }],
  route: "home",
  displayName: "Home"
}, */{
  content: [{
    header: "Summary",
    text: "summary"
  }, {
    header: "Skills",
    text: "skills"
  }, {
    header: "Analytics",
    text: "analytics"
  }, {
    header: "Model Risk",
    text: "modelRisk"
  }],
  route: "home",
  displayName: "Home"
}, {
  content: [{
    header: "Credit Risk",
    text: "CreditRiskPaper",
    researchUrl: '/assets/pdf/CreditRiskPaper.pdf'
  }],
  route: "research",
  displayName: "Research"
},{
  content: [{
    header: "Projects",
    text: "projects",
    projects: [{
      route: "projects/creditRisk",
      src: "assets/images/creditRisk.jpg",
      name:"Credit Risk",
      colMd: 4,
      content: [{
        text: "inputProject",
        researchUrl: '/assets/pdf/CreditRiskPaper.pdf',
        input: [{
          label: "Number of Assets",
          placeholder: "100000",
          id: "n",
          description: "Number of assets in the credit portfolio"
        }, {
          label: "Time Horizon",
          placeholder: "1",
          id: "t",
          description: "Time horizon of the distribution of credit loss"
        }, {
          label: "X0",
          placeholder: "1",
          id: "X0",
          description: "Initial value of systemic variable diffusion process"
        }, {
          label: "Systemic Drift",
          placeholder: ".1",
          id: "alpha",
          description: "The drift of the systemic variable diffusion process"
        }, {
          label: "Systemic Volatility",
          placeholder: ".3",
          id: "sigma",
          description: "The volatility of the systemic variable diffusion process"
        }, {
          label: "Portfolio Return",
          placeholder: ".05",
          id: "alph",
          description: "Return of the portfolio in the absence of losses"
        }, {
          label: "q",
          placeholder: ".05",
          id: "q",
          description: "A 'proxy' for the probability of a liquidity crisis"
        }, {
          label: "lambda",
          placeholder: ".05",
          id: "lambda",
          description: "A 'proxy' for the severity of a liquidity crisis (roughly the percent of the portfolio lost in the event)"
        }, {
          label: "Number of steps in X",
          placeholder: "1024",
          id: "h",
          description: "The number of discrete steps in the loss domain"
        }, {
          label: "Number of steps in U",
          placeholder: "128",
          id: "k",
          description: "The number of discrete steps in the complex domain"
        }],
        chartId: "creditRisk",
        hasOptions: false,
        submitId: "projects/creditRisk"
      }]
    }, {
      route: "projects/operationalRisk",
      src: "assets/images/operationalRisk.jpg",
      colMd: 4,
      name:"Operational Risk",
      content: [{
        text: "inputProject",
        input: [{
          label: "Time Horizon",
          placeholder: "1",
          id: "t",
          description:"Time horizon of the distribution of operational loss"
        }, {
          label: "Mean reversion of frequency",
          placeholder: ".4",
          id: "a",
          description: "The speed of mean reversion of the stochastic time process"
        }, {
          label: "Volatility of frequency",
          placeholder: ".4",
          id: "sigma",
          description: "The volatility of the stochastic time process"
        }, {
          label: "Level of frequency",
          placeholder: "100",
          id: "lambda",
          description: "The long run expectation of frequency"
        }, {
          label: "Shape parameter of severity",
          placeholder: "100",
          id: "c",
          description: "Shape parameter of the Gamma severity distribution"
        }, {
          label: "Scale parameter of severity",
          placeholder: "5",
          id: "d",
          description: "Scale parameter of the Gamma severity distribution"
        }, {
          label: "Correlation",
          placeholder: ".5",
          id: "delta",
          description: "While not strictly the correlation between jumps and time, this parameter is between [0, 1] and dictates the extent of the relationship between jumps and time."
        }, {
          label: "Initial value of time",
          placeholder: "1",
          id: "v0",
          description: "Initial value of the stochastic time process"
        }, {
          label: "Steps in ODE",
          placeholder: "128",
          id: "n",
          description: "The number of steps to compute the numerical solution of the ODE."
        }, {
          label: "Steps in X",
          placeholder: "1024",
          id: "k",
          description: "The number of discrete steps in the operational loss domain."
        }, {
          label: "Steps in U",
          placeholder: "256",
          id: "l",
          description: "The number of discrete steps in the complex domain."
        }],
        chartId: "operationalRisk",
        hasOptions: false,
        submitId: "projects/operationalRisk"
      }]
    }, {
      route: "projects/firstHittingTime",
      src: "assets/images/stock-price.jpg",
      colMd: 4,
      name:"First Hitting Time",
      content: [{
        text: "inputProject",
        input: [{
          label: "Value To Hit",
          placeholder: "5",
          id: "m",
          description:"The value which the process is to hit."
        }, {
          label: "alpha",
          placeholder: ".1",
          id: "alpha",
          description: "The drift of the process"
        }, {
          label: "sigma",
          placeholder: ".3",
          id: "sigma",
          description: "The 'volatility' of the process"
        }, {
          label: "delta",
          placeholder: ".8",
          id: "delta",
          description: "The exponent of the process for 'stochastic' volatility"
        }, {
          label: "Steps in U",
          placeholder: "256",
          id: "n",
          description: "Steps in the complex domain"
        }, {
          label: "Steps in T",
          placeholder: "512",
          id: "k",
          description: "Steps in the probability domain"
        }, {
          label: "Steps in X",
          placeholder: "300",
          id: "l",
          description: "Steps in the numerical solution of the ODE"
        }],
        chartId: "firstHittingTime",
        hasOptions: true,
        submitId: "projects/firstHittingTime" /*this is used for communitcateing with server*/

      }]
    }],


  }],
  route: "projects",
  displayName: "Projects"
}];

/* end site structure */

/* begin define handlebars*/
Handlebars.partials = Handlebars.templates;
var template = Handlebars.templates['textAreas'];
var sidebarTemplate = Handlebars.templates['sidebar'];
var stockTemplate = Handlebars.templates['stock'];
var selectionTemplate = Handlebars.templates['createSelection'];
var modal = Handlebars.templates['modal'];

$('#sidebar-wrapper').html(sidebarTemplate({
  data: siteObj
}));
/*end handlebars */


/*create site*/
var trackRecords={};
iterate(siteObj);
function iterate(val) {
  var n = val.length;
  for (var i = 0; i < n; i++) {
    var record = val[i];
    createContent(record);
    var subRecord = record.content;
    var m = subRecord.length;
    for (var j = 0; j < m; j++) {
      if (subRecord[j][record.route]) { /*if additional pages defined through route*/
        iterate(subRecord[j][record.route]);
      }
    }
  }
}
function createContent(record) {
  Path.map("#/" + record.route).to(function() {
    var $mainText = $('#mainText');
    $mainText.html("");
    trackRecords[record.route]=record;
    var subRecord = record.content;
    var m = subRecord.length;
    for (var j = 0; j < m; j++) {
      var html = template(subRecord[j]);
      $mainText.append(html);
    }
    traverseDom();
  });
}
/*end create site */

/*begin utility functions */

function traverseDom() { /*gets any stock value and age*/
  $('.stock').each(function() {
    var $element = $(this);
    var ticker = $element.attr('id');
    getStock(ticker, $element);
  });
  $('#age').html(getAge());

  function getAge() {
    var birthday = new Date("4/10/1989");
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); /* miliseconds from epoch*/
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

function getStock(stock, element) { /*get stock values from name*/
  $.ajax({
    url:'http://finance.google.com/finance/info?client=ig&q='+stock+'&callback=?',
    method:'get',
    dataType:'html',
    success: function(data) {
      data = data.replace(/\//g, "");
      data = JSON.parse(data)[0];
      console.log(data);
      var objForTemplate = {
        symbol: data.t,
        price: data.l,
        change: data.c,
        up: data.c.substring(0, 1) !== '-'
      }
      var html = stockTemplate(objForTemplate);
      element.prepend(html);
    },
    error:function(data, st, err){
      console.log(err);
    }
  });
    /*url: '/stock',
    method: 'post',
    data: JSON.stringify({
      stock: stock
    }),
    contentType: 'application/json',
    success: function(data) {
      data = data.replace(/\//g, "");
      data = JSON.parse(data)[0];
      var objForTemplate = {
        symbol: data.t,
        price: data.l,
        change: data.c,
        up: data.c.substring(0, 1) !== '-'
      }
      var html = stockTemplate(objForTemplate);
      element.prepend(html);
    }*/

  //});

}
/*end utility functions */

/*begin routes */
Path.root("#/home");
Path.listen();
/*end routes */

/*begin events */


$('body').click(function(e){ //handle sidebar events
  if(e.target.className.indexOf('toggleSidebar')>-1){
    $('#wrapper').toggleClass('toggled');
  }
  else{
    $('#wrapper').removeClass('toggled');
  }
});
$('#mainText').on('click', '#execute', function(e) { /*if project "Submit" is clicked*/
  var attributes = {};
  $('.projectInput').each(function() {
    var $ths = $(this);
    var id = $ths.attr('id');
    attributes[id] = $ths.val();
    var nbr = Number(attributes[id]);
    if (!attributes[id]) {
      attributes[id] = Number($ths.attr('placeholder'));
    } else {
      attributes[id] = nbr;
    }
  });
  var currentLocation=Path.routes.current;
  var route=currentLocation.substring(2); //remove "/#"
  var expressRoute=route.split("/");

  socket.emit(expressRoute[0], {
    file: expressRoute[1],
    attributes: attributes
  });
  console.log(trackRecords[route].content[0]);
  var mdl = modal({
    text: 'chart',//'creditRiskResearch'
    hasOptions:trackRecords[route].content[0].hasOptions
  });
  var modalHtml=$(mdl)[2];
  var $modal=$(modalHtml);
  $modal.modal('show');
  $modal.on('hidden.bs.modal', function(){
    $modal.remove();
  });
});
socket.on('update', function(data) {
  $('#progressBar').css("width", data);
});
socket.on('result', function(data) {
  chart = "";
  $('#progressBar').css("width", '0%');
  $('.progress').addClass('hidden');
  if (data.y) { /*then no "options"*/
    createChart(data);
  } else { /*has options, show on screen*/
    var options = Object.keys(data);
    var $select = $('#selection');
    options.sort();
    $select.html(selectionTemplate({
      keys: options
    })); /*select a chart*/
    $select.on('click', '.selectSeries', function(e) {
      e.preventDefault();
      console.log("got here");
      handleSeriesClick(data, this);
    });
  }
});

$('#mainText').on('click', '#projectHelp', function(e) {
  var currentLocation=Path.routes.current;
  var currLocArray=currentLocation.split("/");
  var route=currentLocation.substring(2);
  currentLocation=currLocArray[currLocArray.length-1];
  console.log(trackRecords[route].content[0]);
  /*var mdl = modal({

    text: currentLocation+'Research',//'creditRiskResearch'
    input:trackRecords[route].content[0].input
  });*/
  trackRecords[route].content[0].text=currentLocation+'Research'; //change route
  var mdl = modal(trackRecords[route].content[0]);
  trackRecords[route].content[0].text=currentLocation; //change back
  //console.log($(mdl)[2]);
  $modal=$($(mdl)[2]);
  $modal.modal('show');
  $modal.on('hidden.bs.modal', function(){
    $modal.remove();
  });
});

/*end event handling */

/*chart functions */

function createChart(data) {
  if (isNaN(data.y[0]) || Math.abs(data.y[0]) > 100) { /*something bad happened in the algorithm...*/
    console.log("problem!");
  } else {
    var n = data.x.length;
    var nMin = 0;
    var nMax = n - 1;
    var yMin = data.yMax * .003; /*since otherwise long lead in, lead out*/
    while (data.y[nMin] < yMin) {
      nMin++;
    }
    while (data.y[nMax] < yMin) {
      nMax--;
    }
    var xAxis = data.x.slice(nMin, nMax + 1);
    var yAxis = data.y.slice(nMin, nMax + 1);
    //$('#chartist').empty();
    chart = new Highcharts.Chart({
      chart: {
        type: 'spline',
        renderTo: 'chartist',
        zoomType: 'x'
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: xAxis,
        labels: {
          formatter: function() {
            return Highcharts.numberFormat(this.value, 2, ".", ",");
          }
        }
      },
      yAxis: {
        min: 0
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        spline: {
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 4
            }
          },
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        name: 'density',
        data: yAxis
      }]
    });
  }
}

function handleSeriesClick(data, self) {
  var attr = $(self);
  var remove = false;
  if (attr.hasClass('active')) {
    remove = true;
    attr.removeClass('active');
  } else {
    attr.addClass('active');
  }
  var value = attr.text();
  if (remove) {
    var numSeries = chart.series.length;
    console.log(chart.series);
    for (var i = 0; i < numSeries; i++) {
      if (chart.series[i].name === value) { /*inefficient, but until the series gets a hashmap...*/
        chart.series[i].remove();
        break;
      }
    }
  } else {
    if (chart) {
      chart.addSeries({
        name: value,
        data: data[value].y
      });
    } else {
      createChart(data[value]);
    }
  }
}
/*end chart functions */
