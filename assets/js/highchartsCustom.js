! function() {
  function t() {
    var t, e, i = arguments,
      n = {},
      s = function(t, e) {
        var i, n;
        "object" != typeof t && (t = {});
        for (n in e) e.hasOwnProperty(n) && (t[n] = (i = e[n]) && "object" == typeof i && "[object Array]" !== Object.prototype.toString.call(i) && "renderTo" !== n && "number" != typeof i.nodeType ? s(t[n] || {}, i) : e[n]);
        return t
      };
    for (!0 === i[0] && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; e > t; t++) n = s(n, i[t]);
    return n
  }

  function e(t, e) {
    return parseInt(t, e || 10)
  }

  function i(t) {
    return "string" == typeof t
  }

  function n(t) {
    return t && "object" == typeof t
  }

  function s(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }

  function o(t) {
    return "number" == typeof t
  }

  function r(t) {
    return oe.log(t) / oe.LN10
  }

  function a(t) {
    return oe.pow(10, t)
  }

  function h(t, e) {
    for (var i = t.length; i--;)
      if (t[i] === e) {
        t.splice(i, 1);
        break
      }
  }

  function l(t) {
    return t !== I && null !== t
  }

  function c(t, e, s) {
    var o, r;
    if (i(e)) l(s) ? t.setAttribute(e, s) : t && t.getAttribute && (r = t.getAttribute(e));
    else if (l(e) && n(e))
      for (o in e) t.setAttribute(o, e[o]);
    return r
  }

  function d(t) {
    return s(t) ? t : [t]
  }

  function p(t, e) {
    ye && !we && e && e.opacity !== I && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), Oe(t.style, e)
  }

  function u(t, e, i, n, s) {
    return t = ne.createElement(t), e && Oe(t, e), s && p(t, {
      padding: 0,
      border: "none",
      margin: 0
    }), i && p(t, i), n && n.appendChild(t), t
  }

  function g(t, e) {
    var i = function() {
      return I
    };
    return i.prototype = new t, Oe(i.prototype, e), i
  }

  function f(t, e) {
    return Array((e || 2) + 1 - String(t).length).join(0) + t
  }

  function m(t, e) {
    return /%$/.test(t) ? e * parseFloat(t) / 100 : parseFloat(t)
  }

  function x(t) {
    return 6e4 * (Y && Y(t) || G || 0)
  }

  function y(t, e) {
    for (var i, n, s, o, r, a = "{", h = !1, l = []; - 1 !== (a = t.indexOf(a));) {
      if (i = t.slice(0, a), h) {
        for (n = i.split(":"), s = n.shift().split("."), r = s.length, i = e, o = 0; r > o; o++) i = i[s[o]];
        n.length && (n = n.join(":"), s = /\.([0-9])/, o = R.lang, r = void 0, /f$/.test(n) ? (r = (r = n.match(s)) ? r[1] : -1, null !== i && (i = ie.numberFormat(i, r, o.decimalPoint, -1 < n.indexOf(",") ? o.thousandsSep : ""))) : i = H(n, i))
      }
      l.push(i), t = t.slice(a + 1), a = (h = !h) ? "}" : "{"
    }
    return l.push(t), l.join("")
  }

  function v(t, e, i, n, s) {
    var o, r = t;
    for (i = Be(i, 1), o = t / i, e || (e = [1, 2, 2.5, 5, 10], !1 === n && (1 === i ? e = [1, 2, 5, 10] : .1 >= i && (e = [1 / i]))), n = 0; n < e.length && (r = e[n], !(s && r * i >= t || !s && o <= (e[n] + (e[n + 1] || e[n])) / 2)); n++);
    return r * i
  }

  function b(t, e) {
    var i, n, s = t.length;
    for (n = 0; s > n; n++) t[n].ss_i = n;
    for (t.sort(function(t, n) {
        return i = e(t, n), 0 === i ? t.ss_i - n.ss_i : i
      }), n = 0; s > n; n++) delete t[n].ss_i
  }

  function k(t) {
    for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
    return i
  }

  function w(t) {
    for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
    return i
  }

  function S(t, e) {
    for (var i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i]
  }

  function T(t) {
    B || (B = u("div")), t && B.appendChild(t), B.innerHTML = ""
  }

  function A(t, e) {
    var i = "Highcharts error #" + t + ": www.highcharts.com/errors/" + t;
    if (e) throw i;
    se.console && console.log(i)
  }

  function P(t, e) {
    return parseFloat(t.toPrecision(e || 14))
  }

  function C(t, e) {
    e.renderer.globalAnimation = Be(t, e.animation)
  }

  function L() {
    var t = R.global,
      e = t.useUTC,
      i = e ? "getUTC" : "get",
      n = e ? "setUTC" : "set";
    F = t.Date || window.Date, G = e && t.timezoneOffset, Y = e && t.getTimezoneOffset, X = function(t, i, n, s, o, r) {
      var a;
      return e ? (a = F.UTC.apply(0, arguments), a += x(a)) : a = new F(t, i, Be(n, 1), Be(s, 0), Be(o, 0), Be(r, 0)).getTime(), a
    }, N = i + "Minutes", _ = i + "Hours", V = i + "Day", j = i + "Date", U = i + "Month", K = i + "FullYear", $ = n + "Milliseconds", Z = n + "Seconds", q = n + "Minutes", J = n + "Hours", Q = n + "Date", te = n + "Month", ee = n + "FullYear"
  }

  function M() {}

  function D(t, e, i, n) {
    this.axis = t, this.pos = e, this.type = i || "", this.isNew = !0, i || n || this.addLabel()
  }

  function z(t, e, i, n, s) {
    var o = t.chart.inverted;
    this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = s, this.alignOptions = {
      align: e.align || (o ? i ? "left" : "right" : "center"),
      verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
      y: Be(e.y, o ? 4 : i ? 14 : -6),
      x: Be(e.x, o ? i ? -6 : 6 : 0)
    }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
  }
  var I, O, B, R, H, E, W, F, X, G, Y, N, _, V, j, U, K, $, Z, q, J, Q, te, ee, ie, ne = document,
    se = window,
    oe = Math,
    re = oe.round,
    ae = oe.floor,
    he = oe.ceil,
    le = oe.max,
    ce = oe.min,
    de = oe.abs,
    pe = oe.cos,
    ue = oe.sin,
    ge = oe.PI,
    fe = 2 * ge / 360,
    me = navigator.userAgent,
    xe = se.opera,
    ye = /(msie|trident)/i.test(me) && !xe,
    ve = /AppleWebKit/.test(me),
    be = /Firefox/.test(me),
    ke = /(Mobile|Android|Windows Phone)/.test(me),
    we = !!ne.createElementNS && !!ne.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
    Se = be && 4 > parseInt(me.split("Firefox/")[1], 10),
    Te = !we && !ye && !!ne.createElement("canvas").getContext,
    Ae = {},
    Pe = 0,
    Ce = function() {
      return I
    },
    Le = [],
    Me = 0,
    De = /^[0-9]+$/,
    ze = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
    Ie = {};
  ie = se.Highcharts = se.Highcharts ? A(16, !0) : {}, ie.seriesTypes = Ie;
  var Oe = ie.extend = function(t, e) {
      var i;
      t || (t = {});
      for (i in e) t[i] = e[i];
      return t
    },
    Be = ie.pick = function() {
      var t, e, i = arguments,
        n = i.length;
      for (t = 0; n > t; t++)
        if (e = i[t], e !== I && null !== e) return e
    },
    Re = ie.wrap = function(t, e, i) {
      var n = t[e];
      t[e] = function() {
        var t = Array.prototype.slice.call(arguments);
        return t.unshift(n), i.apply(this, t)
      }
    };
  H = function(t, e, i) {
      if (!l(e) || isNaN(e)) return R.lang.invalidDate || "";
      t = Be(t, "%Y-%m-%d %H:%M:%S");
      var n, s = new F(e - x(e)),
        o = s[_](),
        r = s[V](),
        a = s[j](),
        h = s[U](),
        c = s[K](),
        d = R.lang,
        p = d.weekdays,
        s = Oe({
          a: p[r].substr(0, 3),
          A: p[r],
          d: f(a),
          e: a,
          w: r,
          b: d.shortMonths[h],
          B: d.months[h],
          m: f(h + 1),
          y: c.toString().substr(2, 2),
          Y: c,
          H: f(o),
          k: o,
          I: f(o % 12 || 12),
          l: o % 12 || 12,
          M: f(s[N]()),
          p: 12 > o ? "AM" : "PM",
          P: 12 > o ? "am" : "pm",
          S: f(s.getSeconds()),
          L: f(re(e % 1e3), 3)
        }, ie.dateFormats);
      for (n in s)
        for (; - 1 !== t.indexOf("%" + n);) t = t.replace("%" + n, "function" == typeof s[n] ? s[n](e) : s[n]);
      return i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
    }, W = {
      millisecond: 1,
      second: 1e3,
      minute: 6e4,
      hour: 36e5,
      day: 864e5,
      week: 6048e5,
      month: 24192e5,
      year: 314496e5
    }, ie.numberFormat = function(t, i, n, s) {
      var o = R.lang;
      t = +t || 0;
      var r = -1 === i ? ce((t.toString().split(".")[1] || "").length, 20) : isNaN(i = de(i)) ? 2 : i;
      i = void 0 === n ? o.decimalPoint : n, s = void 0 === s ? o.thousandsSep : s, o = 0 > t ? "-" : "", n = String(e(t = de(t).toFixed(r)));
      var a = 3 < n.length ? n.length % 3 : 0;
      return o + (a ? n.substr(0, a) + s : "") + n.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + s) + (r ? i + de(t - n).toFixed(r).slice(2) : "")
    }, E = {
      init: function(t, e, i) {
        e = e || "";
        var n, s = t.shift,
          o = -1 < e.indexOf("C"),
          r = o ? 7 : 3;
        e = e.split(" "), i = [].concat(i);
        var a, h, l = function(t) {
          for (n = t.length; n--;) "M" === t[n] && t.splice(n + 1, 0, t[n + 1], t[n + 2], t[n + 1], t[n + 2])
        };
        if (o && (l(e), l(i)), t.isArea && (a = e.splice(e.length - 6, 6), h = i.splice(i.length - 6, 6)), s <= i.length / r && e.length === i.length)
          for (; s--;) i = [].concat(i).splice(0, r).concat(i);
        if (t.shift = 0, e.length)
          for (t = i.length; e.length < t;) s = [].concat(e).splice(e.length - r, r), o && (s[r - 6] = s[r - 2], s[r - 5] = s[r - 1]), e = e.concat(s);
        return a && (e = e.concat(a), i = i.concat(h)), [e, i]
      },
      step: function(t, e, i, n) {
        var s = [],
          o = t.length;
        if (1 === i) s = n;
        else if (o === e.length && 1 > i)
          for (; o--;) n = parseFloat(t[o]), s[o] = isNaN(n) ? t[o] : i * parseFloat(e[o] - n) + n;
        else s = e;
        return s
      }
    },
    function(t) {
      se.HighchartsAdapter = se.HighchartsAdapter || t && {
        init: function(e) {
          var n = t.fx;
          t.extend(t.easing, {
            easeOutQuad: function(t, e, i, n, s) {
              return -n * (e /= s) * (e - 2) + i
            }
          }), t.each(["cur", "_default", "width", "height", "opacity"], function(e, i) {
            var s, o = n.step;
            "cur" === i ? o = n.prototype : "_default" === i && t.Tween && (o = t.Tween.propHooks[i], i = "set"), (s = o[i]) && (o[i] = function(t) {
              var n;
              return t = e ? t : this, "align" !== t.prop ? (n = t.elem, n.attr ? n.attr(t.prop, "cur" === i ? I : t.now) : s.apply(this, arguments)) : void 0
            })
          }), Re(t.cssHooks.opacity, "get", function(t, e, i) {
            return e.attr ? e.opacity || 0 : t.call(this, e, i)
          }), this.addAnimSetter("d", function(t) {
            var i, n = t.elem;
            t.started || (i = e.init(n, n.d, n.toD), t.start = i[0], t.end = i[1], t.started = !0), n.attr("d", e.step(t.start, t.end, t.pos, n.toD))
          }), this.each = Array.prototype.forEach ? function(t, e) {
            return Array.prototype.forEach.call(t, e)
          } : function(t, e) {
            var i, n = t.length;
            for (i = 0; n > i; i++)
              if (!1 === e.call(t[i], t[i], i, t)) return i
          }, t.fn.highcharts = function() {
            var t, e, n = "Chart",
              s = arguments;
            return this[0] && (i(s[0]) && (n = s[0], s = Array.prototype.slice.call(s, 1)), t = s[0], t !== I && (t.chart = t.chart || {}, t.chart.renderTo = this[0], new ie[n](t, s[1]), e = this), t === I && (e = Le[c(this[0], "data-highcharts-chart")])), e
          }
        },
        addAnimSetter: function(e, i) {
          t.Tween ? t.Tween.propHooks[e] = {
            set: i
          } : t.fx.step[e] = i
        },
        getScript: t.getScript,
        inArray: t.inArray,
        adapterRun: function(e, i) {
          return t(e)[i]()
        },
        grep: t.grep,
        map: function(t, e) {
          for (var i = [], n = 0, s = t.length; s > n; n++) i[n] = e.call(t[n], t[n], n, t);
          return i
        },
        offset: function(e) {
          return t(e).offset()
        },
        addEvent: function(e, i, n) {
          t(e).bind(i, n)
        },
        removeEvent: function(e, i, n) {
          var s = ne.removeEventListener ? "removeEventListener" : "detachEvent";
          ne[s] && e && !e[s] && (e[s] = function() {}), t(e).unbind(i, n)
        },
        fireEvent: function(e, i, n, s) {
          var o, r = t.Event(i),
            a = "detached" + i;
          !ye && n && (delete n.layerX, delete n.layerY, delete n.returnValue), Oe(r, n), e[i] && (e[a] = e[i], e[i] = null), t.each(["preventDefault", "stopPropagation"], function(t, e) {
            var i = r[e];
            r[e] = function() {
              try {
                i.call(r)
              } catch (t) {
                "preventDefault" === e && (o = !0)
              }
            }
          }), t(e).trigger(r), e[a] && (e[i] = e[a], e[a] = null), !s || r.isDefaultPrevented() || o || s(r)
        },
        washMouseEvent: function(t) {
          var e = t.originalEvent || t;
          return e.pageX === I && (e.pageX = t.pageX, e.pageY = t.pageY), e
        },
        animate: function(e, i, n) {
          var s = t(e);
          e.style || (e.style = {}), i.d && (e.toD = i.d, i.d = 1), s.stop(), i.opacity !== I && e.attr && (i.opacity += "px"), e.hasAnim = 1, s.animate(i, n)
        },
        stop: function(e) {
          e.hasAnim && t(e).stop()
        }
      }
    }(se.jQuery);
  var He = se.HighchartsAdapter,
    Ee = He || {};
  He && He.init.call(He, E);
  var We = Ee.adapterRun,
    Fe = Ee.inArray,
    Xe = ie.each = Ee.each,
    Ge = Ee.grep,
    Ye = Ee.offset,
    Ne = Ee.map,
    _e = Ee.addEvent,
    Ve = Ee.removeEvent,
    je = Ee.fireEvent,
    Ue = Ee.washMouseEvent,
    Ke = Ee.animate,
    $e = Ee.stop;
  R = {
    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
    lang: {
      loading: "Loading...",
      months: "January February March April May June July August September October November December".split(" "),
      shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
      weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
      decimalPoint: ".",
      numericSymbols: "kMGTPE".split(""),
      resetZoom: "Reset zoom",
      resetZoomTitle: "Reset zoom level 1:1",
      thousandsSep: " "
    },
    global: {
      useUTC: !0,
      canvasToolsURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.1.8/modules/canvas-tools.js",
      VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@//Highstock 2.1.8/gfx/vml-radial-gradient.png"
    },
    chart: {
      borderColor: "#4572A7",
      borderRadius: 0,
      defaultSeriesType: "line",
      ignoreHiddenSeries: !0,
      spacing: [10, 10, 15, 10],
      backgroundColor: "#FFFFFF",
      plotBorderColor: "#C0C0C0",
      resetZoomButton: {
        theme: {
          zIndex: 20
        },
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      }
    },
    title: {
      text: "Chart title",
      align: "center",
      margin: 15,
      style: {
        color: "#333333",
        fontSize: "18px"
      }
    },
    subtitle: {
      text: "",
      align: "center",
      style: {
        color: "#555555"
      }
    },
    plotOptions: {
      line: {
        allowPointSelect: !1,
        showCheckbox: !1,
        animation: {
          duration: 1e3
        },
        events: {},
        lineWidth: 2,
        marker: {
          lineWidth: 0,
          radius: 4,
          lineColor: "#FFFFFF",
          states: {
            hover: {
              enabled: !0,
              lineWidthPlus: 1,
              radiusPlus: 2
            },
            select: {
              fillColor: "#FFFFFF",
              lineColor: "#000000",
              lineWidth: 2
            }
          }
        },
        point: {
          events: {}
        },
        dataLabels: {
          align: "center",
          formatter: function() {
            return null === this.y ? "" : ie.numberFormat(this.y, -1)
          },
          style: {
            color: "contrast",
            fontSize: "11px",
            fontWeight: "bold",
            textShadow: "0 0 6px contrast, 0 0 3px contrast"
          },
          verticalAlign: "bottom",
          x: 0,
          y: 0,
          padding: 5
        },
        cropThreshold: 300,
        pointRange: 0,
        states: {
          hover: {
            lineWidthPlus: 1,
            marker: {},
            halo: {
              size: 10,
              opacity: .25
            }
          },
          select: {
            marker: {}
          }
        },
        stickyTracking: !0,
        turboThreshold: 1e3
      }
    },
    labels: {
      style: {
        position: "absolute",
        color: "#3E576F"
      }
    },
    legend: {
      enabled: !0,
      align: "center",
      layout: "horizontal",
      labelFormatter: function() {
        return this._id
      },
      borderColor: "#909090",
      borderRadius: 0,
      navigation: {
        activeColor: "#274b6d",
        inactiveColor: "#CCC"
      },
      shadow: !1,
      itemStyle: {
        color: "#333333",
        fontSize: "12px",
        fontWeight: "bold"
      },
      itemHoverStyle: {
        color: "#000"
      },
      itemHiddenStyle: {
        color: "#CCC"
      },
      itemCheckboxStyle: {
        position: "absolute",
        width: "13px",
        height: "13px"
      },
      symbolPadding: 5,
      verticalAlign: "bottom",
      x: 0,
      y: 0,
      title: {
        style: {
          fontWeight: "bold"
        }
      }
    },
    loading: {
      labelStyle: {
        fontWeight: "bold",
        position: "relative",
        top: "45%"
      },
      style: {
        position: "absolute",
        backgroundColor: "white",
        opacity: .5,
        textAlign: "center"
      }
    },
    tooltip: {
      enabled: !0,
      animation: we,
      backgroundColor: "rgba(249, 249, 249, .85)",
      borderWidth: 1,
      borderRadius: 3,
      dateTimeLabelFormats: {
        millisecond: "%A, %b %e, %H:%M:%S.%L",
        second: "%A, %b %e, %H:%M:%S",
        minute: "%A, %b %e, %H:%M",
        hour: "%A, %b %e, %H:%M",
        day: "%A, %b %e, %Y",
        week: "Week from %A, %b %e, %Y",
        month: "%B %Y",
        year: "%Y"
      },
      footerFormat: "",
      headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
      pointFormat: '<span style="color:{point.color}">●</span> {series._id}: <b>{point.y}</b><br/>',
      shadow: !0,
      snap: ke ? 25 : 10,
      style: {
        color: "#333333",
        cursor: "default",
        fontSize: "12px",
        padding: "8px",
        whiteSpace: "nowrap"
      }
    },
    credits: {
      enabled: !0,
      text: "Highcharts.com",
      href: "http://www.highcharts.com",
      position: {
        align: "right",
        x: -10,
        verticalAlign: "bottom",
        y: -5
      },
      style: {
        cursor: "pointer",
        color: "#909090",
        fontSize: "9px"
      }
    }
  };
  var Ze = R.plotOptions,
    qe = Ze.line;
  L();
  var Je = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
    Qe = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
    ti = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
    ei = function(i) {
      var n, s, r = [];
      return function(t) {
        t && t.stops ? s = Ne(t.stops, function(t) {
          return ei(t[1])
        }) : (n = Je.exec(t)) ? r = [e(n[1]), e(n[2]), e(n[3]), parseFloat(n[4], 10)] : (n = Qe.exec(t)) ? r = [e(n[1], 16), e(n[2], 16), e(n[3], 16), 1] : (n = ti.exec(t)) && (r = [e(n[1]), e(n[2]), e(n[3]), 1])
      }(i), {
        get: function(e) {
          var n;
          return s ? (n = t(i), n.stops = [].concat(n.stops), Xe(s, function(t, i) {
            n.stops[i] = [n.stops[i][0], t.get(e)]
          })) : n = r && !isNaN(r[0]) ? "rgb" === e ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === e ? r[3] : "rgba(" + r.join(",") + ")" : i, n
        },
        brighten: function(t) {
          if (s) Xe(s, function(e) {
            e.brighten(t)
          });
          else if (o(t) && 0 !== t) {
            var i;
            for (i = 0; 3 > i; i++) r[i] += e(255 * t), 0 > r[i] && (r[i] = 0), 255 < r[i] && (r[i] = 255)
          }
          return this
        },
        rgba: r,
        setOpacity: function(t) {
          return r[3] = t, this
        },
        raw: i
      }
    };
  M.prototype = {
    opacity: 1,
    textProps: "fontSize fontWeight fontFamily fontStyle color lineHeight width textDecoration textOverflow textShadow".split(" "),
    init: function(t, e) {
      this.element = "span" === e ? u(e) : ne.createElementNS("http://www.w3.org/2000/svg", e), this.renderer = t
    },
    animate: function(e, i, n) {
      return i = Be(i, this.renderer.globalAnimation, !0), $e(this), i ? (i = t(i, {}), n && (i.complete = n), Ke(this, e, i)) : this.attr(e, null, n), this
    },
    colorGradient: function(e, i, n) {
      var o, r, a, h, c, d, p, u, g, f, m = this.renderer,
        x = [];
      if (e.linearGradient ? r = "linearGradient" : e.radialGradient && (r = "radialGradient"), r) {
        a = e[r], h = m.gradients, d = e.stops, g = n.radialReference, s(a) && (e[r] = a = {
          x1: a[0],
          y1: a[1],
          x2: a[2],
          y2: a[3],
          gradientUnits: "userSpaceOnUse"
        }), "radialGradient" === r && g && !l(a.gradientUnits) && (a = t(a, {
          cx: g[0] - g[2] / 2 + a.cx * g[2],
          cy: g[1] - g[2] / 2 + a.cy * g[2],
          r: a.r * g[2],
          gradientUnits: "userSpaceOnUse"
        }));
        for (f in a) "id" !== f && x.push(f, a[f]);
        for (f in d) x.push(d[f]);
        x = x.join(","), h[x] ? e = h[x].attr("id") : (a.id = e = "highcharts-" + Pe++, h[x] = c = m.createElement(r).attr(a).add(m.defs), c.stops = [], Xe(d, function(t) {
          0 === t[1].indexOf("rgba") ? (o = ei(t[1]), p = o.get("rgb"), u = o.get("a")) : (p = t[1], u = 1), t = m.createElement("stop").attr({
            offset: t[0],
            "stop-color": p,
            "stop-opacity": u
          }).add(c), c.stops.push(t)
        })), n.setAttribute(i, "url(" + m.url + "#" + e + ")")
      }
    },
    applyTextShadow: function(t) {
      var i, n = this.element,
        s = -1 !== t.indexOf("contrast"),
        o = {},
        r = this.renderer.forExport || n.style.textShadow !== I && !ye;
      s && (o.textShadow = t = t.replace(/contrast/g, this.renderer.getContrast(n.style.fill))), ve && (o.textRendering = "geometricPrecision"), r ? p(n, o) : (this.fakeTS = !0, this.ySetter = this.xSetter, i = [].slice.call(n.getElementsByTagName("tspan")), Xe(t.split(/\s?,\s?/g), function(t) {
        var s, o, r = n.firstChild;
        t = t.split(" "), s = t[t.length - 1], (o = t[t.length - 2]) && Xe(i, function(t, i) {
          var a;
          0 === i && (t.setAttribute("x", n.getAttribute("x")), i = n.getAttribute("y"), t.setAttribute("y", i || 0), null === i && n.setAttribute("y", 0)), a = t.cloneNode(1), c(a, {
            "class": "highcharts-text-shadow",
            fill: s,
            stroke: s,
            "stroke-opacity": 1 / le(e(o), 3),
            "stroke-width": o,
            "stroke-linejoin": "round"
          }), n.insertBefore(a, r)
        })
      }))
    },
    attr: function(t, e, i) {
      var n, s, o, r = this.element,
        a = this;
      if ("string" == typeof t && e !== I && (n = t, t = {}, t[n] = e), "string" == typeof t) a = (this[t + "Getter"] || this._defaultGetter).call(this, t, r);
      else {
        for (n in t) e = t[n], o = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (s || (this.symbolAttr(t), s = !0), o = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), o || (this[n + "Setter"] || this._defaultSetter).call(this, e, n, r), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, e);
        this.doTransform && (this.updateTransform(), this.doTransform = !1)
      }
      return i && i(), a
    },
    updateShadows: function(t, e) {
      for (var i = this.shadows, n = i.length; n--;) i[n].setAttribute(t, "height" === t ? le(e - (i[n].cutHeight || 0), 0) : "d" === t ? this.d : e)
    },
    addClass: function(t) {
      var e = this.element,
        i = c(e, "class") || "";
      return -1 === i.indexOf(t) && c(e, "class", i + " " + t), this
    },
    symbolAttr: function(t) {
      var e = this;
      Xe("x y r start end width height innerR anchorX anchorY".split(" "), function(i) {
        e[i] = Be(t[i], e[i])
      }), e.attr({
        d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
      })
    },
    clip: function(t) {
      return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
    },
    crisp: function(t) {
      var e, i, n = {},
        s = t.strokeWidth || this.strokeWidth || 0;
      i = re(s) % 2 / 2, t.x = ae(t.x || this.x || 0) + i, t.y = ae(t.y || this.y || 0) + i, t.width = ae((t.width || this.width || 0) - 2 * i), t.height = ae((t.height || this.height || 0) - 2 * i), t.strokeWidth = s;
      for (e in t) this[e] !== t[e] && (this[e] = n[e] = t[e]);
      return n
    },
    css: function(t) {
      var i, n, s = this.styles,
        o = {},
        r = this.element,
        a = "";
      if (i = !s, t && t.color && (t.fill = t.color), s)
        for (n in t) t[n] !== s[n] && (o[n] = t[n], i = !0);
      if (i) {
        if (i = this.textWidth = t && t.width && "text" === r.nodeName.toLowerCase() && e(t.width) || this.textWidth, s && (t = Oe(s, o)), this.styles = t, i && (Te || !we && this.renderer.forExport) && delete t.width, ye && !we) p(this.element, t);
        else {
          s = function(t, e) {
            return "-" + e.toLowerCase()
          };
          for (n in t) a += n.replace(/([A-Z])/g, s) + ":" + t[n] + ";";
          c(r, "style", a)
        }
        i && this.added && this.renderer.buildText(this)
      }
      return this
    },
    on: function(t, e) {
      var i = this,
        n = i.element;
      return O && "click" === t ? (n.ontouchstart = function(t) {
        i.touchEventFired = F.now(), t.preventDefault(), e.call(n, t)
      }, n.onclick = function(t) {
        (-1 === me.indexOf("Android") || 1100 < F.now() - (i.touchEventFired || 0)) && e.call(n, t)
      }) : n["on" + t] = e, this
    },
    setRadialReference: function(t) {
      return this.element.radialReference = t, this
    },
    translate: function(t, e) {
      return this.attr({
        translateX: t,
        translateY: e
      })
    },
    invert: function() {
      return this.inverted = !0, this.updateTransform(), this
    },
    updateTransform: function() {
      var t = this.translateX || 0,
        e = this.translateY || 0,
        i = this.scaleX,
        n = this.scaleY,
        s = this.inverted,
        o = this.rotation,
        r = this.element;
      s && (t += this.attr("width"), e += this.attr("height")), t = ["translate(" + t + "," + e + ")"], s ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (r.getAttribute("x") || 0) + " " + (r.getAttribute("y") || 0) + ")"), (l(i) || l(n)) && t.push("scale(" + Be(i, 1) + " " + Be(n, 1) + ")"), t.length && r.setAttribute("transform", t.join(" "))
    },
    toFront: function() {
      var t = this.element;
      return t.parentNode.appendChild(t), this
    },
    align: function(t, e, n) {
      var s, o, r, a, l = {};
      return o = this.renderer, r = o.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!n || i(n)) && (this.alignTo = s = n || "renderer", h(r, this), r.push(this), n = null)) : (t = this.alignOptions, e = this.alignByTranslate, s = this.alignTo), n = Be(n, o[s], o), s = t.align, o = t.verticalAlign, r = (n.x || 0) + (t.x || 0), a = (n.y || 0) + (t.y || 0), ("right" === s || "center" === s) && (r += (n.width - (t.width || 0)) / {
        right: 1,
        center: 2
      }[s]), l[e ? "translateX" : "x"] = re(r), ("bottom" === o || "middle" === o) && (a += (n.height - (t.height || 0)) / ({
        bottom: 1,
        middle: 2
      }[o] || 1)), l[e ? "translateY" : "y"] = re(a), this[this.placed ? "animate" : "attr"](l), this.placed = !0, this.alignAttr = l, this
    },
    getBBox: function(t) {
      var e, i, n = this.renderer,
        s = this.rotation,
        o = this.element,
        r = this.styles,
        a = s * fe;
      i = this.textStr;
      var h, l, c, d = o.style;
      if (i !== I && (c = ["", s || 0, r && r.fontSize, o.style.width].join(), c = "" === i || De.test(i) ? "num:" + i.toString().length + c : i + c), c && !t && (e = n.cache[c]), !e) {
        if ("http://www.w3.org/2000/svg" === o.namespaceURI || n.forExport) {
          try {
            l = this.fakeTS && function(t) {
              Xe(o.querySelectorAll(".highcharts-text-shadow"), function(e) {
                e.style.display = t
              })
            }, be && d.textShadow ? (h = d.textShadow, d.textShadow = "") : l && l("none"), e = o.getBBox ? Oe({}, o.getBBox()) : {
              width: o.offsetWidth,
              height: o.offsetHeight
            }, h ? d.textShadow = h : l && l("")
          } catch (p) {}(!e || 0 > e.width) && (e = {
            width: 0,
            height: 0
          })
        } else e = this.htmlGetBBox();
        n.isSVG && (t = e.width, i = e.height, ye && r && "11px" === r.fontSize && "16.9" === i.toPrecision(3) && (e.height = i = 14), s && (e.width = de(i * ue(a)) + de(t * pe(a)), e.height = de(i * pe(a)) + de(t * ue(a)))), c && (n.cache[c] = e)
      }
      return e
    },
    show: function(t) {
      return this.attr({
        visibility: t ? "inherit" : "visible"
      })
    },
    hide: function() {
      return this.attr({
        visibility: "hidden"
      })
    },
    fadeOut: function(t) {
      var e = this;
      e.animate({
        opacity: 0
      }, {
        duration: t || 150,
        complete: function() {
          e.attr({
            y: -9999
          })
        }
      })
    },
    add: function(t) {
      var e, i = this.renderer,
        n = this.element;
      return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
    },
    safeRemoveChild: function(t) {
      var e = t.parentNode;
      e && e.removeChild(t)
    },
    destroy: function() {
      var t, e, i = this,
        n = i.element || {},
        s = i.shadows,
        o = i.renderer.isSVG && "SPAN" === n.nodeName && i.parentGroup;
      if (n.onclick = n.onmouseout = n.onmouseover = n.onmousemove = n.point = null, $e(i), i.clipPath && (i.clipPath = i.clipPath.destroy()), i.stops) {
        for (e = 0; e < i.stops.length; e++) i.stops[e] = i.stops[e].destroy();
        i.stops = null
      }
      for (i.safeRemoveChild(n), s && Xe(s, function(t) {
          i.safeRemoveChild(t)
        }); o && o.div && 0 === o.div.childNodes.length;) n = o.parentGroup, i.safeRemoveChild(o.div), delete o.div, o = n;
      i.alignTo && h(i.renderer.alignedObjects, i);
      for (t in i) delete i[t];
      return null
    },
    shadow: function(t, e, i) {
      var n, s, o, r, a, h, l = [],
        d = this.element;
      if (t) {
        for (r = Be(t.width, 3), a = (t.opacity || .15) / r, h = this.parentInverted ? "(-1,-1)" : "(" + Be(t.offsetX, 1) + ", " + Be(t.offsetY, 1) + ")", n = 1; r >= n; n++) s = d.cloneNode(0), o = 2 * r + 1 - 2 * n, c(s, {
          isShadow: "true",
          stroke: t.color || "black",
          "stroke-opacity": a * n,
          "stroke-width": o,
          transform: "translate" + h,
          fill: "none"
        }), i && (c(s, "height", le(c(s, "height") - o, 0)), s.cutHeight = o), e ? e.element.appendChild(s) : d.parentNode.insertBefore(s, d), l.push(s);
        this.shadows = l
      }
      return this
    },
    xGetter: function(t) {
      return "circle" === this.element.nodeName && (t = {
        x: "cx",
        y: "cy"
      }[t] || t), this._defaultGetter(t)
    },
    _defaultGetter: function(t) {
      return t = Be(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
    },
    dSetter: function(t, e, i) {
      t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
    },
    dashstyleSetter: function(t) {
      var i;
      if (t = t && t.toLowerCase()) {
        for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), i = t.length; i--;) t[i] = e(t[i]) * this["stroke-width"];
        t = t.join(",").replace("NaN", "none"), this.element.setAttribute("stroke-dasharray", t)
      }
    },
    alignSetter: function(t) {
      this.element.setAttribute("text-anchor", {
        left: "start",
        center: "middle",
        right: "end"
      }[t])
    },
    opacitySetter: function(t, e, i) {
      this[e] = t, i.setAttribute(e, t)
    },
    titleSetter: function(t) {
      var e = this.element.getElementsByTagName("title")[0];
      e || (e = ne.createElementNS("http://www.w3.org/2000/svg", "title"), this.element.appendChild(e)), e.appendChild(ne.createTextNode(String(Be(t), "").replace(/<[^>]*>/g, "")))
    },
    textSetter: function(t) {
      t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
    },
    fillSetter: function(t, e, i) {
      "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
    },
    visibilitySetter: function(t, e, i) {
      "inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
    },
    zIndexSetter: function(t, i) {
      var n, s, o, r = this.renderer,
        a = this.parentGroup,
        r = (a || r).element || r.box,
        h = this.element;
      n = this.added;
      var d;
      if (l(t) && (h.setAttribute(i, t), t = +t, this[i] === t && (n = !1), this[i] = t), n) {
        for ((t = this.zIndex) && a && (a.handleZ = !0), a = r.childNodes, d = 0; d < a.length && !o; d++) n = a[d], s = c(n, "zIndex"), n !== h && (e(s) > t || !l(t) && l(s)) && (r.insertBefore(h, n), o = !0);
        o || r.appendChild(h)
      }
      return o
    },
    _defaultSetter: function(t, e, i) {
      i.setAttribute(e, t)
    }
  }, M.prototype.yGetter = M.prototype.xGetter, M.prototype.translateXSetter = M.prototype.translateYSetter = M.prototype.rotationSetter = M.prototype.verticalAlignSetter = M.prototype.scaleXSetter = M.prototype.scaleYSetter = function(t, e) {
    this[e] = t, this.doTransform = !0
  }, M.prototype["stroke-widthSetter"] = M.prototype.strokeSetter = function(t, e, i) {
    this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], M.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
  };
  var ii = function() {
    this.init.apply(this, arguments)
  };
  ii.prototype = {
    Element: M,
    init: function(t, e, i, n, s) {
      var o, r = location;
      n = this.createElement("svg").attr({
        version: "1.1"
      }).css(this.getStyle(n)), o = n.element, t.appendChild(o), -1 === t.innerHTML.indexOf("xmlns") && c(o, "xmlns", "http://www.w3.org/2000/svg"), this.isSVG = !0, this.box = o, this.boxWrapper = n, this.alignedObjects = [], this.url = (be || ve) && ne.getElementsByTagName("base").length ? r.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(ne.createTextNode("Created with Highcharts 4.1.8 /Highstock 2.1.8")), this.defs = this.createElement("defs").add(), this.forExport = s, this.gradients = {}, this.cache = {}, this.setSize(e, i, !1);
      var a;
      be && t.getBoundingClientRect && (this.subPixelFix = e = function() {
        p(t, {
          left: 0,
          top: 0
        }), a = t.getBoundingClientRect(), p(t, {
          left: he(a.left) - a.left + "px",
          top: he(a.top) - a.top + "px"
        })
      }, e(), _e(se, "resize", e))
    },
    getStyle: function(t) {
      return this.style = Oe({
        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
        fontSize: "12px"
      }, t)
    },
    isHidden: function() {
      return !this.boxWrapper.getBBox().width
    },
    destroy: function() {
      var t = this.defs;
      return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), S(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.subPixelFix && Ve(se, "resize", this.subPixelFix), this.alignedObjects = null
    },
    createElement: function(t) {
      var e = new this.Element;
      return e.init(this, t), e
    },
    draw: function() {},
    buildText: function(t) {
      for (var i, n, s = t.element, o = this, r = o.forExport, a = Be(t.textStr, "").toString(), h = -1 !== a.indexOf("<"), l = s.childNodes, d = c(s, "x"), u = t.styles, g = t.textWidth, f = u && u.lineHeight, m = u && u.textShadow, x = u && "ellipsis" === u.textOverflow, y = l.length, v = g && !t.added && this.box, b = function(t) {
          return f ? e(f) : o.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : u && u.fontSize || o.style.fontSize || 12, t).h
        }, k = function(t) {
          return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }; y--;) s.removeChild(l[y]);
      h || m || x || -1 !== a.indexOf(" ") ? (i = /<.*style="([^"]+)".*>/, n = /<.*href="(http[^"]+)".*>/, v && v.appendChild(s), a = h ? a.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [a], "" === a[a.length - 1] && a.pop(), Xe(a, function(e, a) {
        var h, l = 0;
        e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), h = e.split("|||"), Xe(h, function(e) {
          if ("" !== e || 1 === h.length) {
            var f, m = {},
              y = ne.createElementNS("http://www.w3.org/2000/svg", "tspan");
            if (i.test(e) && (f = e.match(i)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), c(y, "style", f)), n.test(e) && !r && (c(y, "onclick", 'location.href="' + e.match(n)[1] + '"'), p(y, {
                cursor: "pointer"
              })), e = k(e.replace(/<(.|\n)*?>/g, "") || " "), " " !== e) {
              if (y.appendChild(ne.createTextNode(e)), l ? m.dx = 0 : a && null !== d && (m.x = d), c(y, m), s.appendChild(y), !l && a && (!we && r && p(y, {
                  display: "block"
                }), c(y, "dy", b(y))), g) {
                for (var v, w, S, m = e.replace(/([^\^])-/g, "$1- ").split(" "), T = 1 < h.length || a || 1 < m.length && "nowrap" !== u.whiteSpace, A = [], P = b(y), C = 1, L = t.rotation, M = e, D = M.length;
                  (T || x) && (m.length || A.length);) t.rotation = 0, v = t.getBBox(!0), S = v.width, !we && o.forExport && (S = o.measureSpanWidth(y.firstChild.data, t.styles)), v = S > g, void 0 === w && (w = v), x && w ? (D /= 2, "" === M || !v && .5 > D ? m = [] : (v && (w = !0), M = e.substring(0, M.length + (v ? -1 : 1) * he(D)), m = [M + (g > 3 ? "…" : "")], y.removeChild(y.firstChild))) : v && 1 !== m.length ? (y.removeChild(y.firstChild), A.unshift(m.pop())) : (m = A, A = [], m.length && (C++, y = ne.createElementNS("http://www.w3.org/2000/svg", "tspan"), c(y, {
                  dy: P,
                  x: d
                }), f && c(y, "style", f), s.appendChild(y)), S > g && (g = S)), m.length && y.appendChild(ne.createTextNode(m.join(" ").replace(/- /g, "-")));
                w && t.attr("title", t.textStr), t.rotation = L
              }
              l++
            }
          }
        })
      }), v && v.removeChild(s), m && t.applyTextShadow && t.applyTextShadow(m)) : s.appendChild(ne.createTextNode(k(a)))
    },
    getContrast: function(t) {
      return t = ei(t).rgba, 384 < t[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
    },
    button: function(e, i, n, s, o, r, a, h, l) {
      var c, d, p, u, g, f, m = this.label(e, i, n, l, null, null, null, null, "button"),
        x = 0;
      return e = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      }, o = t({
        "stroke-width": 1,
        stroke: "#CCCCCC",
        fill: {
          linearGradient: e,
          stops: [
            [0, "#FEFEFE"],
            [1, "#F6F6F6"]
          ]
        },
        r: 2,
        padding: 5,
        style: {
          color: "black"
        }
      }, o), p = o.style, delete o.style, r = t(o, {
        stroke: "#68A",
        fill: {
          linearGradient: e,
          stops: [
            [0, "#FFF"],
            [1, "#ACF"]
          ]
        }
      }, r), u = r.style, delete r.style, a = t(o, {
        stroke: "#68A",
        fill: {
          linearGradient: e,
          stops: [
            [0, "#9BD"],
            [1, "#CDF"]
          ]
        }
      }, a), g = a.style, delete a.style, h = t(o, {
        style: {
          color: "#CCC"
        }
      }, h), f = h.style, delete h.style, _e(m.element, ye ? "mouseover" : "mouseenter", function() {
        3 !== x && m.attr(r).css(u)
      }), _e(m.element, ye ? "mouseout" : "mouseleave", function() {
        3 !== x && (c = [o, r, a][x], d = [p, u, g][x], m.attr(c).css(d))
      }), m.setState = function(t) {
        (m.state = x = t) ? 2 === t ? m.attr(a).css(g) : 3 === t && m.attr(h).css(f): m.attr(o).css(p)
      }, m.on("click", function(t) {
        3 !== x && s.call(m, t)
      }).attr(o).css(Oe({
        cursor: "default"
      }, p))
    },
    crispLine: function(t, e) {
      return t[1] === t[4] && (t[1] = t[4] = re(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = re(t[2]) + e % 2 / 2), t
    },
    path: function(t) {
      var e = {
        fill: "none"
      };
      return s(t) ? e.d = t : n(t) && Oe(e, t), this.createElement("path").attr(e)
    },
    circle: function(t, e, i) {
      return t = n(t) ? t : {
        x: t,
        y: e,
        r: i
      }, e = this.createElement("circle"), e.xSetter = function(t) {
        this.element.setAttribute("cx", t)
      }, e.ySetter = function(t) {
        this.element.setAttribute("cy", t)
      }, e.attr(t)
    },
    arc: function(t, e, i, s, o, r) {
      return n(t) && (e = t.y, i = t.r, s = t.innerR, o = t.start, r = t.end, t = t.x), t = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
        innerR: s || 0,
        start: o || 0,
        end: r || 0
      }), t.r = i, t
    },
    rect: function(t, e, i, s, o, r) {
      o = n(t) ? t.r : o;
      var a = this.createElement("rect");
      return t = n(t) ? t : t === I ? {} : {
        x: t,
        y: e,
        width: le(i, 0),
        height: le(s, 0)
      }, r !== I && (t.strokeWidth = r, t = a.crisp(t)), o && (t.r = o), a.rSetter = function(t) {
        c(this.element, {
          rx: t,
          ry: t
        })
      }, a.attr(t)
    },
    setSize: function(t, e, i) {
      var n = this.alignedObjects,
        s = n.length;
      for (this.width = t, this.height = e, this.boxWrapper[Be(i, !0) ? "animate" : "attr"]({
          width: t,
          height: e
        }); s--;) n[s].align()
    },
    g: function(t) {
      var e = this.createElement("g");
      return l(t) ? e.attr({
        "class": "highcharts-" + t
      }) : e
    },
    image: function(t, e, i, n, s) {
      var o = {
        preserveAspectRatio: "none"
      };
      return 1 < arguments.length && Oe(o, {
        x: e,
        y: i,
        width: n,
        height: s
      }), o = this.createElement("image").attr(o), o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o
    },
    symbol: function(t, e, i, n, s, o) {
      var r, a, h, l = this.symbols[t],
        l = l && l(re(e), re(i), n, s, o),
        c = /^url\((.*?)\)$/;
      return l ? (r = this.path(l), Oe(r, {
        symbolName: t,
        x: e,
        y: i,
        width: n,
        height: s
      }), o && Oe(r, o)) : c.test(t) && (h = function(t, e) {
        t.element && (t.attr({
          width: e[0],
          height: e[1]
        }), t.alignByTranslate || t.translate(re((n - e[0]) / 2), re((s - e[1]) / 2)))
      }, a = t.match(c)[1], t = Ae[a] || o && o.width && o.height && [o.width, o.height], r = this.image(a).attr({
        x: e,
        y: i
      }), r.isImg = !0, t ? h(r, t) : (r.attr({
        width: 0,
        height: 0
      }), u("img", {
        onload: function() {
          h(r, Ae[a] = [this.width, this.height])
        },
        src: a
      }))), r
    },
    symbols: {
      circle: function(t, e, i, n) {
        var s = .166 * i;
        return ["M", t + i / 2, e, "C", t + i + s, e, t + i + s, e + n, t + i / 2, e + n, "C", t - s, e + n, t - s, e, t + i / 2, e, "Z"]
      },
      square: function(t, e, i, n) {
        return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
      },
      triangle: function(t, e, i, n) {
        return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
      },
      "triangle-down": function(t, e, i, n) {
        return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
      },
      diamond: function(t, e, i, n) {
        return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
      },
      arc: function(t, e, i, n, s) {
        var o = s.start;
        i = s.r || i || n;
        var r = s.end - .001;
        n = s.innerR;
        var a = s.open,
          h = pe(o),
          l = ue(o),
          c = pe(r),
          r = ue(r);
        return s = s.end - o < ge ? 0 : 1, ["M", t + i * h, e + i * l, "A", i, i, 0, s, 1, t + i * c, e + i * r, a ? "M" : "L", t + n * c, e + n * r, "A", n, n, 0, s, 0, t + n * h, e + n * l, a ? "" : "Z"]
      },
      callout: function(t, e, i, n, s) {
        var o = ce(s && s.r || 0, i, n),
          r = o + 6,
          a = s && s.anchorX;
        s = s && s.anchorY;
        var h;
        return h = ["M", t + o, e, "L", t + i - o, e, "C", t + i, e, t + i, e, t + i, e + o, "L", t + i, e + n - o, "C", t + i, e + n, t + i, e + n, t + i - o, e + n, "L", t + o, e + n, "C", t, e + n, t, e + n, t, e + n - o, "L", t, e + o, "C", t, e, t, e, t + o, e], a && a > i && s > e + r && e + n - r > s ? h.splice(13, 3, "L", t + i, s - 6, t + i + 6, s, t + i, s + 6, t + i, e + n - o) : a && 0 > a && s > e + r && e + n - r > s ? h.splice(33, 3, "L", t, s + 6, t - 6, s, t, s - 6, t, e + o) : s && s > n && a > t + r && t + i - r > a ? h.splice(23, 3, "L", a + 6, e + n, a, e + n + 6, a - 6, e + n, t + o, e + n) : s && 0 > s && a > t + r && t + i - r > a && h.splice(3, 3, "L", a - 6, e, a, e - 6, a + 6, e, i - o, e), h
      }
    },
    clipRect: function(t, e, i, n) {
      var s = "highcharts-" + Pe++,
        o = this.createElement("clipPath").attr({
          id: s
        }).add(this.defs);
      return t = this.rect(t, e, i, n, 0).add(o), t.id = s, t.clipPath = o, t.count = 0, t
    },
    text: function(t, e, i, n) {
      var s = Te || !we && this.forExport,
        o = {};
      return n && !this.forExport ? this.html(t, e, i) : (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), (t || 0 === t) && (o.text = t), t = this.createElement("text").attr(o), s && t.css({
        position: "absolute"
      }), n || (t.xSetter = function(t, e, i) {
        var n, s, o = i.getElementsByTagName("tspan"),
          r = i.getAttribute(e);
        for (s = 0; s < o.length; s++) n = o[s], n.getAttribute(e) === r && n.setAttribute(e, t);
        i.setAttribute(e, t)
      }), t)
    },
    fontMetrics: function(t, i) {
      var n, s;
      return t = t || this.style.fontSize, i && se.getComputedStyle && (i = i.element || i, t = (n = se.getComputedStyle(i, "")) && n.fontSize), t = /px/.test(t) ? e(t) : /em/.test(t) ? 12 * parseFloat(t) : 12, n = 24 > t ? t + 3 : re(1.2 * t), s = re(.8 * n), {
        h: n,
        b: s,
        f: t
      }
    },
    rotCorr: function(t, e, i) {
      var n = t;
      return e && i && (n = le(n * pe(e * fe), 4)), {
        x: -t / 3 * ue(e * fe),
        y: n
      }
    },
    label: function(e, i, n, s, o, r, a, h, c) {
      function d() {
        var t, e;
        t = T.element.style, f = (void 0 === m || void 0 === x || S.styles.textAlign) && l(T.textStr) && T.getBBox(), S.width = (m || f.width || 0) + 2 * P + C, S.height = (x || f.height || 0) + 2 * P, b = P + w.fontMetrics(t && t.fontSize, T).b, k && (g || (t = re(-A * P) + L, e = (h ? -b : 0) + L, S.box = g = s ? w.symbol(s, t, e, S.width, S.height, D) : w.rect(t, e, S.width, S.height, 0, D["stroke-width"]), g.isImg || g.attr("fill", "none"), g.add(S)), g.isImg || g.attr(Oe({
          width: re(S.width),
          height: re(S.height)
        }, D)), D = null)
      }

      function p() {
        var t, e = S.styles,
          e = e && e.textAlign,
          i = C + P * (1 - A);
        t = h ? 0 : b, l(m) && f && ("center" === e || "right" === e) && (i += {
          center: .5,
          right: 1
        }[e] * (m - f.width)), (i !== T.x || t !== T.y) && (T.attr("x", i), t !== I && T.attr("y", t)), T.x = i, T.y = t
      }

      function u(t, e) {
        g ? g.attr(t, e) : D[t] = e
      }
      var g, f, m, x, y, v, b, k, w = this,
        S = w.g(c),
        T = w.text("", 0, 0, a).attr({
          zIndex: 1
        }),
        A = 0,
        P = 3,
        C = 0,
        L = 0,
        D = {};
      S.onAdd = function() {
        T.add(S), S.attr({
          text: e || 0 === e ? e : "",
          x: i,
          y: n
        }), g && l(o) && S.attr({
          anchorX: o,
          anchorY: r
        })
      }, S.widthSetter = function(t) {
        m = t
      }, S.heightSetter = function(t) {
        x = t
      }, S.paddingSetter = function(t) {
        l(t) && t !== P && (P = S.padding = t, p())
      }, S.paddingLeftSetter = function(t) {
        l(t) && t !== C && (C = t, p())
      }, S.alignSetter = function(t) {
        A = {
          left: 0,
          center: .5,
          right: 1
        }[t]
      }, S.textSetter = function(t) {
        t !== I && T.textSetter(t), d(), p()
      }, S["stroke-widthSetter"] = function(t, e) {
        t && (k = !0), L = t % 2 / 2, u(e, t)
      }, S.strokeSetter = S.fillSetter = S.rSetter = function(t, e) {
        "fill" === e && t && (k = !0), u(e, t)
      }, S.anchorXSetter = function(t, e) {
        o = t, u(e, re(t) - L - y)
      }, S.anchorYSetter = function(t, e) {
        r = t, u(e, t - v)
      }, S.xSetter = function(t) {
        S.x = t, A && (t -= A * ((m || f.width) + P)), y = re(t), S.attr("translateX", y)
      }, S.ySetter = function(t) {
        v = S.y = re(t), S.attr("translateY", v)
      };
      var z = S.css;
      return Oe(S, {
        css: function(e) {
          if (e) {
            var i = {};
            e = t(e), Xe(S.textProps, function(t) {
              e[t] !== I && (i[t] = e[t], delete e[t])
            }), T.css(i)
          }
          return z.call(S, e)
        },
        getBBox: function() {
          return {
            width: f.width + 2 * P,
            height: f.height + 2 * P,
            x: f.x - P,
            y: f.y - P
          }
        },
        shadow: function(t) {
          return g && g.shadow(t), S
        },
        destroy: function() {
          Ve(S.element, "mouseenter"), Ve(S.element, "mouseleave"), T && (T = T.destroy()), g && (g = g.destroy()), M.prototype.destroy.call(S), S = w = d = p = u = null
        }
      })
    }
  }, Oe(M.prototype, {
    htmlCss: function(t) {
      var e = this.element;
      return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = Oe(this.styles, t), p(this.element, t), this
    },
    htmlGetBBox: function() {
      var t = this.element;
      return "text" === t.nodeName && (t.style.position = "absolute"), {
        x: t.offsetLeft,
        y: t.offsetTop,
        width: t.offsetWidth,
        height: t.offsetHeight
      }
    },
    htmlUpdateTransform: function() {
      if (this.added) {
        var t = this.renderer,
          i = this.element,
          n = this.translateX || 0,
          s = this.translateY || 0,
          o = this.x || 0,
          r = this.y || 0,
          a = this.textAlign || "left",
          h = {
            left: 0,
            center: .5,
            right: 1
          }[a],
          c = this.shadows,
          d = this.styles;
        if (p(i, {
            marginLeft: n,
            marginTop: s
          }), c && Xe(c, function(t) {
            p(t, {
              marginLeft: n + 1,
              marginTop: s + 1
            })
          }), this.inverted && Xe(i.childNodes, function(e) {
            t.invertChild(e, i)
          }), "SPAN" === i.tagName) {
          var u, g = this.rotation,
            f = e(this.textWidth),
            m = [g, a, i.innerHTML, this.textWidth, this.textAlign].join();
          m !== this.cTT && (u = t.fontMetrics(i.style.fontSize).b, l(g) && this.setSpanRotation(g, h, u), c = Be(this.elemWidth, i.offsetWidth), c > f && /[ \-]/.test(i.textContent || i.innerText) && (p(i, {
            width: f + "px",
            display: "block",
            whiteSpace: d && d.whiteSpace || "normal"
          }), c = f), this.getSpanCorrection(c, u, h, g, a)), p(i, {
            left: o + (this.xCorr || 0) + "px",
            top: r + (this.yCorr || 0) + "px"
          }), ve && (u = i.offsetHeight), this.cTT = m
        }
      } else this.alignOnAdd = !0
    },
    setSpanRotation: function(t, e, i) {
      var n = {},
        s = ye ? "-ms-transform" : ve ? "-webkit-transform" : be ? "MozTransform" : xe ? "-o-transform" : "";
      n[s] = n.transform = "rotate(" + t + "deg)", n[s + (be ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px", p(this.element, n)
    },
    getSpanCorrection: function(t, e, i) {
      this.xCorr = -t * i, this.yCorr = -e
    }
  }), Oe(ii.prototype, {
    html: function(t, e, i) {
      var n = this.createElement("span"),
        s = n.element,
        o = n.renderer;
      return n.textSetter = function(t) {
        t !== s.innerHTML && delete this.bBox, s.innerHTML = this.textStr = t, n.htmlUpdateTransform()
      }, n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function(t, e) {
        "align" === e && (e = "textAlign"), n[e] = t, n.htmlUpdateTransform()
      }, n.attr({
        text: t,
        x: re(e),
        y: re(i)
      }).css({
        position: "absolute",
        fontFamily: this.style.fontFamily,
        fontSize: this.style.fontSize
      }), s.style.whiteSpace = "nowrap", n.css = n.htmlCss, o.isSVG && (n.add = function(t) {
        var e, i = o.box.parentNode,
          r = [];
        if (this.parentGroup = t) {
          if (e = t.div, !e) {
            for (; t;) r.push(t), t = t.parentGroup;
            Xe(r.reverse(), function(t) {
              var n, s = c(t.element, "class");
              s && (s = {
                className: s
              }), e = t.div = t.div || u("div", s, {
                position: "absolute",
                left: (t.translateX || 0) + "px",
                top: (t.translateY || 0) + "px"
              }, e || i), n = e.style, Oe(t, {
                translateXSetter: function(e, i) {
                  n.left = e + "px", t[i] = e, t.doTransform = !0
                },
                translateYSetter: function(e, i) {
                  n.top = e + "px", t[i] = e, t.doTransform = !0
                }
              }), Re(t, "visibilitySetter", function(t, e, i, s) {
                t.call(this, e, i, s), n[i] = e
              })
            })
          }
        } else e = i;
        return e.appendChild(s), n.added = !0, n.alignOnAdd && n.htmlUpdateTransform(), n
      }), n
    }
  }), D.prototype = {
    addLabel: function() {
      var e, i = this.axis,
        n = i.options,
        s = i.chart,
        o = i.categories,
        r = i.names,
        h = this.pos,
        c = n.labels,
        d = i.tickPositions,
        p = h === d[0],
        u = h === d[d.length - 1],
        r = o ? Be(o[h], r[h], h) : h,
        o = this.label,
        d = d.info;
      i.isDatetimeAxis && d && (e = n.dateTimeLabelFormats[d.higherRanks[h] || d.unitName]), this.isFirst = p, this.isLast = u, n = i.labelFormatter.call({
        axis: i,
        chart: s,
        isFirst: p,
        isLast: u,
        dateTimeLabelFormat: e,
        value: i.isLog ? P(a(r)) : r
      }), l(o) ? o && o.attr({
        text: n
      }) : (this.labelLength = (this.label = o = l(n) && c.enabled ? s.renderer.text(n, 0, 0, c.useHTML).css(t(c.style)).add(i.labelGroup) : null) && o.getBBox().width, this.rotation = 0)
    },
    getLabelSize: function() {
      return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
    },
    handleOverflow: function(t) {
      var e, i = this.axis,
        n = t.x,
        s = i.chart.chartWidth,
        o = i.chart.spacing,
        r = Be(i.labelLeft, ce(i.pos, o[3])),
        o = Be(i.labelRight, le(i.pos + i.len, s - o[1])),
        a = this.label,
        h = this.rotation,
        l = {
          left: 0,
          center: .5,
          right: 1
        }[i.labelAlign],
        c = a.getBBox().width,
        d = i.slotWidth,
        p = 1,
        u = {};
      h ? 0 > h && r > n - l * c ? e = re(n / pe(h * fe) - r) : h > 0 && n + l * c > o && (e = re((s - n) / pe(h * fe))) : (s = n + (1 - l) * c, r > n - l * c ? d = t.x + d * (1 - l) - r : s > o && (d = o - t.x + d * l, p = -1), d = ce(i.slotWidth, d), d < i.slotWidth && "center" === i.labelAlign && (t.x += p * (i.slotWidth - d - l * (i.slotWidth - ce(c, d)))), (c > d || i.autoRotation && a.styles.width) && (e = d)), e && (u.width = e, i.options.labels.style.textOverflow || (u.textOverflow = "ellipsis"), a.css(u))
    },
    getPosition: function(t, e, i, n) {
      var s = this.axis,
        o = s.chart,
        r = n && o.oldChartHeight || o.chartHeight;
      return {
        x: t ? s.translate(e + i, null, null, n) + s.transB : s.left + s.offset + (s.opposite ? (n && o.oldChartWidth || o.chartWidth) - s.right - s.left : 0),
        y: t ? r - s.bottom + s.offset - (s.opposite ? s.height : 0) : r - s.translate(e + i, null, null, n) - s.transB
      }
    },
    getLabelPosition: function(t, e, i, n, s, o, r, a) {
      var h = this.axis,
        l = h.transA,
        c = h.reversed,
        d = h.staggerLines,
        p = h.tickRotCorr || {
          x: 0,
          y: 0
        };
      return i = Be(s.y, p.y + (2 === h.side ? 8 : -(i.getBBox().height / 2))), t = t + s.x + p.x - (o && n ? o * l * (c ? -1 : 1) : 0), e = e + i - (o && !n ? o * l * (c ? 1 : -1) : 0), d && (e += r / (a || 1) % d * (h.labelOffset / d)), {
        x: t,
        y: re(e)
      }
    },
    getMarkPath: function(t, e, i, n, s, o) {
      return o.crispLine(["M", t, e, "L", t + (s ? 0 : -i), e + (s ? i : 0)], n)
    },
    render: function(t, e, i) {
      var n = this.axis,
        s = n.options,
        o = n.chart.renderer,
        r = n.horiz,
        a = this.type,
        h = this.label,
        l = this.pos,
        c = s.labels,
        d = this.gridLine,
        p = a ? a + "Grid" : "grid",
        u = a ? a + "Tick" : "tick",
        g = s[p + "LineWidth"],
        f = s[p + "LineColor"],
        m = s[p + "LineDashStyle"],
        x = s[u + "Length"],
        p = Be(s[u + "Width"], !a && n.isXAxis ? 1 : 0),
        y = s[u + "Color"],
        v = s[u + "Position"],
        u = this.mark,
        b = c.step,
        k = !0,
        w = n.tickmarkOffset,
        S = this.getPosition(r, l, w, e),
        T = S.x,
        S = S.y,
        A = r && T === n.pos + n.len || !r && S === n.pos ? -1 : 1;
      i = Be(i, 1), this.isActive = !0, g && (l = n.getPlotLinePath(l + w, g * A, e, !0), d === I && (d = {
        stroke: f,
        "stroke-width": g
      }, m && (d.dashstyle = m), a || (d.zIndex = 1), e && (d.opacity = 0), this.gridLine = d = g ? o.path(l).attr(d).add(n.gridGroup) : null), !e && d && l) && d[this.isNew ? "attr" : "animate"]({
        d: l,
        opacity: i
      }), p && x && ("inside" === v && (x = -x), n.opposite && (x = -x), a = this.getMarkPath(T, S, x, p * A, r, o), u ? u.animate({
        d: a,
        opacity: i
      }) : this.mark = o.path(a).attr({
        stroke: y,
        "stroke-width": p,
        opacity: i
      }).add(n.axisGroup)), h && !isNaN(T) && (h.xy = S = this.getLabelPosition(T, S, h, r, c, w, t, b), this.isFirst && !this.isLast && !Be(s.showFirstLabel, 1) || this.isLast && !this.isFirst && !Be(s.showLastLabel, 1) ? k = !1 : !r || n.isRadial || c.step || c.rotation || e || 0 === i || this.handleOverflow(S), b && t % b && (k = !1), k && !isNaN(S.y) ? (S.opacity = i, h[this.isNew ? "attr" : "animate"](S), this.isNew = !1) : h.attr("y", -9999))
    },
    destroy: function() {
      S(this, this.axis)
    }
  }, ie.PlotLineOrBand = function(t, e) {
    this.axis = t, e && (this.options = e, this.id = e.id)
  }, ie.PlotLineOrBand.prototype = {
    render: function() {
      var e, i = this,
        n = i.axis,
        s = n.horiz,
        o = i.options,
        a = o.label,
        h = i.label,
        c = o.width,
        d = o.to,
        p = o.from,
        u = l(p) && l(d),
        g = o.value,
        f = o.dashStyle,
        m = i.svgElem,
        x = [],
        y = o.color,
        v = o.zIndex,
        b = o.events,
        S = {},
        T = n.chart.renderer;
      if (n.isLog && (p = r(p), d = r(d), g = r(g)), c) x = n.getPlotLinePath(g, c), S = {
        stroke: y,
        "stroke-width": c
      }, f && (S.dashstyle = f);
      else {
        if (!u) return;
        x = n.getPlotBandPath(p, d, o), y && (S.fill = y), o.borderWidth && (S.stroke = o.borderColor, S["stroke-width"] = o.borderWidth)
      }
      if (l(v) && (S.zIndex = v), m) x ? m.animate({
        d: x
      }, null, m.onGetPath) : (m.hide(), m.onGetPath = function() {
        m.show()
      }, h && (i.label = h = h.destroy()));
      else if (x && x.length && (i.svgElem = m = T.path(x).attr(S).add(), b))
        for (e in o = function(t) {
            m.on(t, function(e) {
              b[t].apply(i, [e])
            })
          }, b) o(e);
      return a && l(a.text) && x && x.length && 0 < n.width && 0 < n.height ? (a = t({
        align: s && u && "center",
        x: s ? !u && 4 : 10,
        verticalAlign: !s && u && "middle",
        y: s ? u ? 16 : 10 : u ? 6 : -4,
        rotation: s && !u && 90
      }, a), h || (S = {
        align: a.textAlign || a.align,
        rotation: a.rotation
      }, l(v) && (S.zIndex = v), i.label = h = T.text(a.text, 0, 0, a.useHTML).attr(S).css(a.style).add()), n = [x[1], x[4], u ? x[6] : x[1]], u = [x[2], x[5], u ? x[7] : x[2]], x = k(n), s = k(u), h.align(a, !1, {
        x: x,
        y: s,
        width: w(n) - x,
        height: w(u) - s
      }), h.show()) : h && h.hide(), i
    },
    destroy: function() {
      h(this.axis.plotLinesAndBands, this), delete this.axis, S(this)
    }
  };
  var ni = ie.Axis = function() {
    this.init.apply(this, arguments)
  };
  ni.prototype = {
    defaultOptions: {
      dateTimeLabelFormats: {
        millisecond: "%H:%M:%S.%L",
        second: "%H:%M:%S",
        minute: "%H:%M",
        hour: "%H:%M",
        day: "%e. %b",
        week: "%e. %b",
        month: "%b '%y",
        year: "%Y"
      },
      endOnTick: !1,
      gridLineColor: "#D8D8D8",
      labels: {
        enabled: !0,
        style: {
          color: "#606060",
          cursor: "default",
          fontSize: "11px"
        },
        x: 0,
        y: 15
      },
      lineColor: "#C0D0E0",
      lineWidth: 1,
      minPadding: .01,
      maxPadding: .01,
      minorGridLineColor: "#E0E0E0",
      minorGridLineWidth: 1,
      minorTickColor: "#A0A0A0",
      minorTickLength: 2,
      minorTickPosition: "outside",
      startOfWeek: 1,
      startOnTick: !1,
      tickColor: "#C0D0E0",
      tickLength: 10,
      tickmarkPlacement: "between",
      tickPixelInterval: 100,
      tickPosition: "outside",
      title: {
        align: "middle",
        style: {
          color: "#707070"
        }
      },
      type: "linear"
    },
    defaultYAxisOptions: {
      endOnTick: !0,
      gridLineWidth: 1,
      tickPixelInterval: 72,
      showLastLabel: !0,
      labels: {
        x: -8,
        y: 3
      },
      lineWidth: 0,
      maxPadding: .05,
      minPadding: .05,
      startOnTick: !0,
      title: {
        rotation: 270,
        text: "Values"
      },
      stackLabels: {
        enabled: !1,
        formatter: function() {
          return ie.numberFormat(this.total, -1)
        },
        style: t(Ze.line.dataLabels.style, {
          color: "#000000"
        })
      }
    },
    defaultLeftAxisOptions: {
      labels: {
        x: -15,
        y: null
      },
      title: {
        rotation: 270
      }
    },
    defaultRightAxisOptions: {
      labels: {
        x: 15,
        y: null
      },
      title: {
        rotation: 90
      }
    },
    defaultBottomAxisOptions: {
      labels: {
        autoRotation: [-45],
        x: 0,
        y: null
      },
      title: {
        rotation: 0
      }
    },
    defaultTopAxisOptions: {
      labels: {
        autoRotation: [-45],
        x: 0,
        y: -15
      },
      title: {
        rotation: 0
      }
    },
    init: function(t, e) {
      var i = e.isX;
      this.chart = t, this.horiz = t.inverted ? !i : i, this.coll = (this.isXAxis = i) ? "xAxis" : "yAxis", this.opposite = e.opposite, this.side = e.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
      var n = this.options,
        s = n.type;
      this.labelFormatter = n.labels.formatter || this.defaultLabelFormatter, this.userOptions = e, this.minPixelPadding = 0, this.reversed = n.reversed, this.zoomEnabled = !1 !== n.zoomEnabled, this.categories = n.categories || "category" === s, this.names = this.names || [], this.isLog = "logarithmic" === s, this.isDatetimeAxis = "datetime" === s, this.isLinked = l(n.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = n.minRange || n.maxZoom, this.range = n.range, this.offset = n.offset || 0, this.stacks = {}, this.oldStacks = {}, this.stacksTouched = 0, this.min = this.max = null, this.crosshair = Be(n.crosshair, d(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
      var o, n = this.options.events; - 1 === Fe(this, t.axes) && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), t[this.coll].push(this)), this.series = this.series || [], t.inverted && i && this.reversed === I && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
      for (o in n) _e(this, o, n[o]);
      this.isLog && (this.val2lin = r, this.lin2val = a)
    },
    setOptions: function(e) {
      this.options = t(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], t(R[this.coll], e))
    },
    defaultLabelFormatter: function() {
      var t, e = this.axis,
        i = this.value,
        n = e.categories,
        s = this.dateTimeLabelFormat,
        o = R.lang.numericSymbols,
        r = o && o.length,
        a = e.options.labels.format,
        e = e.isLog ? i : e.tickInterval;
      if (a) t = y(a, this);
      else if (n) t = i;
      else if (s) t = H(s, i);
      else if (r && e >= 1e3)
        for (; r-- && t === I;) n = Math.pow(1e3, r + 1), e >= n && 0 === 10 * i % n && null !== o[r] && (t = ie.numberFormat(i / n, -1) + o[r]);
      return t === I && (t = 1e4 <= de(i) ? ie.numberFormat(i, -1) : ie.numberFormat(i, -1, I, "")), t
    },
    getSeriesExtremes: function() {
      var t = this,
        e = t.chart;
      t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.ignoreMinPadding = t.ignoreMaxPadding = null, t.buildStacks && t.buildStacks(), Xe(t.series, function(i) {
        if (i.visible || !e.options.chart.ignoreHiddenSeries) {
          var n;
          n = i.options.threshold;
          var s;
          t.hasVisibleSeries = !0, t.isLog && 0 >= n && (n = null), t.isXAxis ? (n = i.xData, n.length && (t.dataMin = ce(Be(t.dataMin, n[0]), k(n)), t.dataMax = le(Be(t.dataMax, n[0]), w(n)))) : (i.getExtremes(), s = i.dataMax, i = i.dataMin, l(i) && l(s) && (t.dataMin = ce(Be(t.dataMin, i), i), t.dataMax = le(Be(t.dataMax, s), s)), l(n) && (t.dataMin >= n ? (t.dataMin = n, t.ignoreMinPadding = !0) : t.dataMax < n && (t.dataMax = n, t.ignoreMaxPadding = !0)))
        }
      })
    },
    translate: function(t, e, i, n, s, r) {
      var a = this.linkedParent || this,
        h = 1,
        l = 0,
        c = n ? a.oldTransA : a.transA;
      n = n ? a.oldMin : a.min;
      var d = a.minPixelPadding;
      return s = (a.doPostTranslate || a.isLog && s) && a.lin2val, c || (c = a.transA), i && (h *= -1, l = a.len), a.reversed && (h *= -1, l -= h * (a.sector || a.len)), e ? (t = t * h + l - d, t = t / c + n, s && (t = a.lin2val(t))) : (s && (t = a.val2lin(t)), "between" === r && (r = .5), t = h * (t - n) * c + l + h * d + (o(r) ? c * r * a.pointRange : 0)), t
    },
    toPixels: function(t, e) {
      return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
    },
    toValue: function(t, e) {
      return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
    },
    getPlotLinePath: function(t, e, i, n, s) {
      var o, r, a, h = this.chart,
        l = this.left,
        c = this.top,
        d = i && h.oldChartHeight || h.chartHeight,
        p = i && h.oldChartWidth || h.chartWidth;
      o = this.transB;
      var u = function(t, e, i) {
        return (e > t || t > i) && (n ? t = ce(le(e, t), i) : a = !0), t
      };
      return s = Be(s, this.translate(t, null, null, i)), t = i = re(s + o), o = r = re(d - s - o), isNaN(s) ? a = !0 : this.horiz ? (o = c, r = d - this.bottom, t = i = u(t, l, l + this.width)) : (t = l, i = p - this.right, o = r = u(o, c, c + this.height)), a && !n ? null : h.renderer.crispLine(["M", t, o, "L", i, r], e || 1)
    },
    getLinearTickPositions: function(t, e, i) {
      var n, s = P(ae(e / t) * t),
        r = P(he(i / t) * t),
        a = [];
      if (e === i && o(e)) return [e];
      for (e = s; r >= e && (a.push(e), e = P(e + t), e !== n);) n = e;
      return a
    },
    getMinorTickPositions: function() {
      var t, e = this.options,
        i = this.tickPositions,
        n = this.minorTickInterval,
        s = [],
        o = this.pointRangePadding || 0;
      t = this.min - o;
      var o = this.max + o,
        r = o - t;
      if (r && r / n < this.len / 3)
        if (this.isLog)
          for (o = i.length, t = 1; o > t; t++) s = s.concat(this.getLogTickPositions(n, i[t - 1], i[t], !0));
        else if (this.isDatetimeAxis && "auto" === e.minorTickInterval) s = s.concat(this.getTimeTicks(this.normalizeTimeTickInterval(n), t, o, e.startOfWeek));
      else
        for (i = t + (i[0] - t) % n; o >= i; i += n) s.push(i);
      return 0 !== s.length && this.trimTicks(s, e.startOnTick, e.endOnTick), s
    },
    adjustForMinRange: function() {
      var t, e, i, n, s, o, r = this.options,
        a = this.min,
        h = this.max,
        c = this.dataMax - this.dataMin >= this.minRange;
      if (this.isXAxis && this.minRange === I && !this.isLog && (l(r.min) || l(r.max) ? this.minRange = null : (Xe(this.series, function(t) {
          for (s = t.xData, i = o = t.xIncrement ? 1 : s.length - 1; i > 0; i--) n = s[i] - s[i - 1], (e === I || e > n) && (e = n)
        }), this.minRange = ce(5 * e, this.dataMax - this.dataMin))), h - a < this.minRange) {
        var d = this.minRange;
        t = (d - h + a) / 2, t = [a - t, Be(r.min, a - t)], c && (t[2] = this.dataMin), a = w(t), h = [a + d, Be(r.max, a + d)], c && (h[2] = this.dataMax), h = k(h), d > h - a && (t[0] = h - d, t[1] = Be(r.min, h - d), a = w(t))
      }
      this.min = a, this.max = h
    },
    setAxisTranslation: function(t) {
      var e, n = this,
        s = n.max - n.min,
        o = n.axisPointRange || 0,
        r = 0,
        a = 0,
        h = n.linkedParent,
        c = !!n.categories,
        d = n.transA,
        p = n.isXAxis;
      (p || c || o) && (h ? (r = h.minPointOffset, a = h.pointRangePadding) : Xe(n.series, function(t) {
        var h = c ? 1 : p ? t.pointRange : n.axisPointRange || 0,
          d = t.options.pointPlacement,
          u = t.closestPointRange;
        h > s && (h = 0), o = le(o, h), n.single || (r = le(r, i(d) ? 0 : h / 2), a = le(a, "on" === d ? 0 : h)), !t.noSharedTooltip && l(u) && (e = l(e) ? ce(e, u) : u)
      }), h = n.ordinalSlope && e ? n.ordinalSlope / e : 1, n.minPointOffset = r *= h, n.pointRangePadding = a *= h, n.pointRange = ce(o, s), p && (n.closestPointRange = e)), t && (n.oldTransA = d), n.translationSlope = n.transA = d = n.len / (s + a || 1), n.transB = n.horiz ? n.left : n.bottom, n.minPixelPadding = d * r
    },
    minFromRange: function() {
      return this.max - this.range
    },
    setTickInterval: function(t) {
      var e = this,
        i = e.chart,
        n = e.options,
        s = e.isLog,
        a = e.isDatetimeAxis,
        h = e.isXAxis,
        c = e.isLinked,
        d = n.maxPadding,
        p = n.minPadding,
        u = n.tickInterval,
        g = n.tickPixelInterval,
        f = e.categories;
      a || f || c || this.getTickAmount(), c ? (e.linkedParent = i[e.coll][n.linkedTo], i = e.linkedParent.getExtremes(), e.min = Be(i.min, i.dataMin), e.max = Be(i.max, i.dataMax), n.type !== e.linkedParent.options.type && A(11, 1)) : (e.min = Be(e.userMin, n.min, e.dataMin), e.max = Be(e.userMax, n.max, e.dataMax)), s && (!t && 0 >= ce(e.min, Be(e.dataMin, e.min)) && A(10, 1), e.min = P(r(e.min), 15), e.max = P(r(e.max), 15)), e.range && l(e.max) && (e.userMin = e.min = le(e.min, e.minFromRange()), e.userMax = e.max, e.range = null), e.beforePadding && e.beforePadding(), e.adjustForMinRange(), !(f || e.axisPointRange || e.usePercentage || c) && l(e.min) && l(e.max) && (i = e.max - e.min) && (l(n.min) || l(e.userMin) || !p || !(0 > e.dataMin) && e.ignoreMinPadding || (e.min -= i * p), l(n.max) || l(e.userMax) || !d || !(0 < e.dataMax) && e.ignoreMaxPadding || (e.max += i * d)), o(n.floor) && (e.min = le(e.min, n.floor)), o(n.ceiling) && (e.max = ce(e.max, n.ceiling)), e.tickInterval = e.min === e.max || void 0 === e.min || void 0 === e.max ? 1 : c && !u && g === e.linkedParent.options.tickPixelInterval ? u = e.linkedParent.tickInterval : Be(u, this.tickAmount ? (e.max - e.min) / le(this.tickAmount - 1, 1) : void 0, f ? 1 : (e.max - e.min) * g / le(e.len, g)), h && !t && Xe(e.series, function(t) {
        t.processData(e.min !== e.oldMin || e.max !== e.oldMax)
      }), e.setAxisTranslation(!0), e.beforeSetTickPositions && e.beforeSetTickPositions(), e.postProcessTickInterval && (e.tickInterval = e.postProcessTickInterval(e.tickInterval)), e.pointRange && (e.tickInterval = le(e.pointRange, e.tickInterval)), t = Be(n.minTickInterval, e.isDatetimeAxis && e.closestPointRange), !u && e.tickInterval < t && (e.tickInterval = t), a || s || u || (e.tickInterval = v(e.tickInterval, null, oe.pow(10, ae(oe.log(e.tickInterval) / oe.LN10)), Be(n.allowDecimals, !(.5 < e.tickInterval && 5 > e.tickInterval && 1e3 < e.max && 9999 > e.max)), !!this.tickAmount)), !this.tickAmount && this.len && (e.tickInterval = e.unsquish()), this.setTickPositions()
    },
    setTickPositions: function() {
      var t, e, i = this.options,
        n = i.tickPositions,
        s = i.tickPositioner,
        o = i.startOnTick,
        r = i.endOnTick;
      this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : i.minorTickInterval, this.tickPositions = t = n && n.slice(), !t && (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, s && (s = s.apply(this, [this.min, this.max]))) && (this.tickPositions = t = s), this.isLinked || (this.trimTicks(t, o, r), this.min === this.max && l(this.min) && !this.tickAmount && (e = !0, this.min -= .5, this.max += .5), this.single = e, n || s || this.adjustTickAmount())
    },
    trimTicks: function(t, e, i) {
      var n = t[0],
        s = t[t.length - 1],
        o = this.minPointOffset || 0;
      e ? this.min = n : this.min - o > n && t.shift(), i ? this.max = s : this.max + o < s && t.pop(), 0 === t.length && l(n) && t.push((s + n) / 2)
    },
    getTickAmount: function() {
      var t, e = {},
        i = this.options,
        n = i.tickAmount,
        s = i.tickPixelInterval;
      !l(i.tickInterval) && this.len < s && !this.isRadial && !this.isLog && i.startOnTick && i.endOnTick && (n = 2), n || !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || (Xe(this.chart[this.coll], function(i) {
        var n = i.options,
          s = i.horiz,
          n = [s ? n.left : n.top, s ? n.width : n.height, n.pane].join();
        e[n] ? i.series.length && (t = !0) : e[n] = 1
      }), t && (n = he(this.len / s) + 1)), 4 > n && (this.finalTickAmt = n, n = 5), this.tickAmount = n
    },
    adjustTickAmount: function() {
      var t = this.tickInterval,
        e = this.tickPositions,
        i = this.tickAmount,
        n = this.finalTickAmt,
        s = e && e.length;
      if (i > s) {
        for (; e.length < i;) e.push(P(e[e.length - 1] + t));
        this.transA *= (s - 1) / (i - 1), this.max = e[e.length - 1]
      } else s > i && (this.tickInterval *= 2, this.setTickPositions());
      if (l(n)) {
        for (t = i = e.length; t--;)(3 === n && 1 === t % 2 || 2 >= n && t > 0 && i - 1 > t) && e.splice(t, 1);
        this.finalTickAmt = I
      }
    },
    setScale: function() {
      var t, e;
      this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, Xe(this.series, function(e) {
        (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
      }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
    },
    setExtremes: function(t, e, i, n, s) {
      var o = this,
        r = o.chart;
      i = Be(i, !0), Xe(o.series, function(t) {
        delete t.kdTree
      }), s = Oe(s, {
        min: t,
        max: e
      }), je(o, "setExtremes", s, function() {
        o.userMin = t, o.userMax = e, o.eventArgs = s, i && r.redraw(n)
      })
    },
    zoom: function(t, e) {
      var i = this.dataMin,
        n = this.dataMax,
        s = this.options,
        o = ce(i, Be(s.min, i)),
        s = le(n, Be(s.max, n));
      return this.allowZoomOutside || (l(i) && o >= t && (t = o), l(n) && e >= s && (e = s)), this.displayBtn = t !== I || e !== I, this.setExtremes(t, e, !1, I, {
        trigger: "zoom"
      }), !0
    },
    setAxisSize: function() {
      var t = this.chart,
        e = this.options,
        i = e.offsetLeft || 0,
        n = this.horiz,
        s = Be(e.width, t.plotWidth - i + (e.offsetRight || 0)),
        o = Be(e.height, t.plotHeight),
        r = Be(e.top, t.plotTop),
        e = Be(e.left, t.plotLeft + i),
        i = /%$/;
      i.test(o) && (o = parseFloat(o) / 100 * t.plotHeight), i.test(r) && (r = parseFloat(r) / 100 * t.plotHeight + t.plotTop), this.left = e, this.top = r, this.width = s, this.height = o, this.bottom = t.chartHeight - o - r, this.right = t.chartWidth - s - e, this.len = le(n ? s : o, 0), this.pos = n ? e : r
    },
    getExtremes: function() {
      var t = this.isLog;
      return {
        min: t ? P(a(this.min)) : this.min,
        max: t ? P(a(this.max)) : this.max,
        dataMin: this.dataMin,
        dataMax: this.dataMax,
        userMin: this.userMin,
        userMax: this.userMax
      }
    },
    getThreshold: function(t) {
      var e = this.isLog,
        i = e ? a(this.min) : this.min,
        e = e ? a(this.max) : this.max;
      return null === t ? t = 0 > e ? e : i : i > t ? t = i : t > e && (t = e), this.translate(t, 0, 1, 0, 1)
    },
    autoLabelAlign: function(t) {
      return t = (Be(t, 0) - 90 * this.side + 720) % 360, t > 15 && 165 > t ? "right" : t > 195 && 345 > t ? "left" : "center"
    },
    unsquish: function() {
      var t, e, i, n = this.ticks,
        s = this.options.labels,
        o = this.horiz,
        r = this.tickInterval,
        a = r,
        h = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / r),
        c = s.rotation,
        d = this.chart.renderer.fontMetrics(s.style.fontSize, n[0] && n[0].label),
        p = Number.MAX_VALUE,
        u = function(t) {
          return t /= h || 1, t = t > 1 ? he(t) : 1, t * r
        };
      return o ? (i = l(c) ? [c] : h < Be(s.autoRotationLimit, 80) && !s.staggerLines && !s.step && s.autoRotation) && Xe(i, function(i) {
        var n;
        (i === c || i && i >= -90 && 90 >= i) && (e = u(de(d.h / ue(fe * i))), n = e + de(i / 360), p > n && (p = n, t = i, a = e))
      }) : s.step || (a = u(d.h)), this.autoRotation = i, this.labelRotation = t, a
    },
    renderUnsquish: function() {
      var e, n = this.chart,
        s = n.renderer,
        o = this.tickPositions,
        r = this.ticks,
        a = this.options.labels,
        h = this.horiz,
        l = n.margin,
        c = this.categories ? o.length : o.length - 1,
        d = this.slotWidth = h && !a.step && !a.rotation && (this.staggerLines || 1) * n.plotWidth / c || !h && (l[3] && l[3] - n.spacing[3] || .33 * n.chartWidth),
        p = le(1, re(d - 2 * (a.padding || 5))),
        u = {},
        l = s.fontMetrics(a.style.fontSize, r[0] && r[0].label),
        c = a.style.textOverflow,
        g = 0;
      if (i(a.rotation) || (u.rotation = a.rotation || 0), this.autoRotation) Xe(o, function(t) {
        (t = r[t]) && t.labelLength > g && (g = t.labelLength)
      }), g > p && g > l.h ? u.rotation = this.labelRotation : this.labelRotation = 0;
      else if (d && (e = {
          width: p + "px"
        }, !c))
        for (e.textOverflow = "clip", d = o.length; !h && d--;) p = o[d], (p = r[p].label) && ("ellipsis" === p.styles.textOverflow && p.css({
          textOverflow: "clip"
        }), p.getBBox().height > this.len / o.length - (l.h - l.f) && (p.specCss = {
          textOverflow: "ellipsis"
        }));
      u.rotation && (e = {
        width: (g > .5 * n.chartHeight ? .33 * n.chartHeight : n.chartHeight) + "px"
      }, c || (e.textOverflow = "ellipsis")), this.labelAlign = u.align = a.align || this.autoLabelAlign(this.labelRotation), Xe(o, function(i) {
        var n = (i = r[i]) && i.label;
        n && (e && n.css(t(e, n.specCss)), delete n.specCss, n.attr(u), i.rotation = u.rotation)
      }), this.tickRotCorr = s.rotCorr(l.b, this.labelRotation || 0, 2 === this.side)
    },
    hasData: function() {
      return this.hasVisibleSeries || l(this.min) && l(this.max) && !!this.tickPositions
    },
    getOffset: function() {
      var t, e, i, n, s = this,
        o = s.chart,
        r = o.renderer,
        a = s.options,
        h = s.tickPositions,
        c = s.ticks,
        d = s.horiz,
        p = s.side,
        u = o.inverted ? [1, 0, 3, 2][p] : p,
        g = 0,
        f = 0,
        m = a.title,
        x = a.labels,
        y = 0,
        v = o.axisOffset,
        o = o.clipOffset,
        b = [-1, 1, 1, -1][p];
      if (t = s.hasData(), s.showAxis = e = t || Be(a.showEmpty, !0), s.staggerLines = s.horiz && x.staggerLines, s.axisGroup || (s.gridGroup = r.g("grid").attr({
          zIndex: a.gridZIndex || 1
        }).add(), s.axisGroup = r.g("axis").attr({
          zIndex: a.zIndex || 2
        }).add(), s.labelGroup = r.g("axis-labels").attr({
          zIndex: x.zIndex || 7
        }).addClass("highcharts-" + s.coll.toLowerCase() + "-labels").add()), t || s.isLinked) Xe(h, function(t) {
        c[t] ? c[t].addLabel() : c[t] = new D(s, t)
      }), s.renderUnsquish(), Xe(h, function(t) {
        (0 === p || 2 === p || {
          1: "left",
          3: "right"
        }[p] === s.labelAlign) && (y = le(c[t].getLabelSize(), y))
      }), s.staggerLines && (y *= s.staggerLines, s.labelOffset = y);
      else
        for (n in c) c[n].destroy(), delete c[n];
      m && m.text && !1 !== m.enabled && (s.axisTitle || (s.axisTitle = r.text(m.text, 0, 0, m.useHTML).attr({
        zIndex: 7,
        rotation: m.rotation || 0,
        align: m.textAlign || {
          low: "left",
          middle: "center",
          high: "right"
        }[m.align]
      }).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(m.style).add(s.axisGroup), s.axisTitle.isNew = !0), e && (g = s.axisTitle.getBBox()[d ? "height" : "width"], i = m.offset, f = l(i) ? 0 : Be(m.margin, d ? 5 : 10)), s.axisTitle[e ? "show" : "hide"]()), s.offset = b * Be(a.offset, v[p]), s.tickRotCorr = s.tickRotCorr || {
        x: 0,
        y: 0
      }, r = 2 === p ? s.tickRotCorr.y : 0, d = y + f + (y && b * (d ? Be(x.y, s.tickRotCorr.y + 8) : x.x) - r), s.axisTitleMargin = Be(i, d), v[p] = le(v[p], s.axisTitleMargin + g + b * s.offset, d), a = a.offset ? 0 : 2 * ae(a.lineWidth / 2), o[u] = le(o[u], a)
    },
    getLinePath: function(t) {
      var e = this.chart,
        i = this.opposite,
        n = this.offset,
        s = this.horiz,
        o = this.left + (i ? this.width : 0) + n,
        n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
      return i && (t *= -1), e.renderer.crispLine(["M", s ? this.left : o, s ? n : this.top, "L", s ? e.chartWidth - this.right : o, s ? n : e.chartHeight - this.bottom], t)
    },
    getTitlePosition: function() {
      var t = this.horiz,
        i = this.left,
        n = this.top,
        s = this.len,
        o = this.options.title,
        r = t ? i : n,
        a = this.opposite,
        h = this.offset,
        l = o.x || 0,
        c = o.y || 0,
        d = e(o.style.fontSize || 12),
        s = {
          low: r + (t ? 0 : s),
          middle: r + s / 2,
          high: r + (t ? s : 0)
        }[o.align],
        i = (t ? n + this.height : i) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? d : 0);
      return {
        x: t ? s + l : i + (a ? this.width : 0) + h + l,
        y: t ? i + c - (a ? this.height : 0) + h : s + c
      }
    },
    render: function() {
      var t, e, i, n = this,
        s = n.chart,
        o = s.renderer,
        r = n.options,
        h = n.isLog,
        c = n.isLinked,
        d = n.tickPositions,
        p = n.axisTitle,
        u = n.ticks,
        g = n.minorTicks,
        f = n.alternateBands,
        m = r.stackLabels,
        x = r.alternateGridColor,
        y = n.tickmarkOffset,
        v = r.lineWidth,
        b = s.hasRendered && l(n.oldMin) && !isNaN(n.oldMin),
        k = n.showAxis,
        w = o.globalAnimation;
      n.labelEdge.length = 0, n.overlap = !1, Xe([u, g, f], function(t) {
        for (var e in t) t[e].isActive = !1
      }), (n.hasData() || c) && (n.minorTickInterval && !n.categories && Xe(n.getMinorTickPositions(), function(t) {
        g[t] || (g[t] = new D(n, t, "minor")), b && g[t].isNew && g[t].render(null, !0), g[t].render(null, !1, 1)
      }), d.length && (Xe(d, function(t, e) {
        (!c || t >= n.min && t <= n.max) && (u[t] || (u[t] = new D(n, t)), b && u[t].isNew && u[t].render(e, !0, .1), u[t].render(e))
      }), y && (0 === n.min || n.single) && (u[-1] || (u[-1] = new D(n, -1, null, !0)), u[-1].render(-1))), x && Xe(d, function(t, s) {
        0 === s % 2 && t < n.max && (f[t] || (f[t] = new ie.PlotLineOrBand(n)), e = t + y, i = d[s + 1] !== I ? d[s + 1] + y : n.max, f[t].options = {
          from: h ? a(e) : e,
          to: h ? a(i) : i,
          color: x
        }, f[t].render(), f[t].isActive = !0)
      }), n._addedPlotLB || (Xe((r.plotLines || []).concat(r.plotBands || []), function(t) {
        n.addPlotBandOrLine(t)
      }), n._addedPlotLB = !0)), Xe([u, g, f], function(t) {
        var e, i, n = [],
          o = w ? w.duration || 500 : 0,
          r = function() {
            for (i = n.length; i--;) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]])
          };
        for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e));
        t !== f && s.hasRendered && o ? o && setTimeout(r, o) : r()
      }), v && (t = n.getLinePath(v), n.axisLine ? n.axisLine.animate({
        d: t
      }) : n.axisLine = o.path(t).attr({
        stroke: r.lineColor,
        "stroke-width": v,
        zIndex: 7
      }).add(n.axisGroup), n.axisLine[k ? "show" : "hide"]()), p && k && (p[p.isNew ? "attr" : "animate"](n.getTitlePosition()), p.isNew = !1), m && m.enabled && n.renderStackTotals(), n.isDirty = !1
    },
    redraw: function() {
      this.render(), Xe(this.plotLinesAndBands, function(t) {
        t.render()
      }), Xe(this.series, function(t) {
        t.isDirty = !0
      })
    },
    destroy: function(t) {
      var e, i = this,
        n = i.stacks,
        s = i.plotLinesAndBands;
      t || Ve(i);
      for (e in n) S(n[e]), n[e] = null;
      for (Xe([i.ticks, i.minorTicks, i.alternateBands], function(t) {
          S(t)
        }), t = s.length; t--;) s[t].destroy();
      Xe("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(t) {
        i[t] && (i[t] = i[t].destroy())
      }), this.cross && this.cross.destroy()
    },
    drawCrosshair: function(t, e) {
      var i, n = this.crosshair,
        s = n.animation;
      !this.crosshair || !1 === (l(e) || !Be(this.crosshair.snap, !0)) || e && e.series && e.series[this.coll] !== this ? this.hideCrosshair() : (Be(n.snap, !0) ? l(e) && (i = this.isXAxis ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : Be(e.stackY, e.y)) || null : this.getPlotLinePath(null, null, null, null, i) || null, null === i ? this.hideCrosshair() : this.cross ? this.cross.attr({
        visibility: "visible"
      })[s ? "animate" : "attr"]({
        d: i
      }, s) : (s = this.categories && !this.isRadial, s = {
        "stroke-width": n.width || (s ? this.transA : 1),
        stroke: n.color || (s ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
        zIndex: n.zIndex || 2
      }, n.dashStyle && (s.dashstyle = n.dashStyle), this.cross = this.chart.renderer.path(i).attr(s).add()))
    },
    hideCrosshair: function() {
      this.cross && this.cross.hide()
    }
  }, Oe(ni.prototype, {
    getPlotBandPath: function(t, e) {
      var i = this.getPlotLinePath(e, null, null, !0),
        n = this.getPlotLinePath(t, null, null, !0);
      return n && i && n.toString() !== i.toString() ? n.push(i[4], i[5], i[1], i[2]) : n = null, n
    },
    addPlotBand: function(t) {
      return this.addPlotBandOrLine(t, "plotBands")
    },
    addPlotLine: function(t) {
      return this.addPlotBandOrLine(t, "plotLines")
    },
    addPlotBandOrLine: function(t, e) {
      var i = new ie.PlotLineOrBand(this, t).render(),
        n = this.userOptions;
      return i && (e && (n[e] = n[e] || [], n[e].push(t)), this.plotLinesAndBands.push(i)), i
    },
    removePlotBandOrLine: function(t) {
      for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, s = e.length; s--;) e[s].id === t && e[s].destroy();
      Xe([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function(e) {
        for (s = e.length; s--;) e[s].id === t && h(e, e[s])
      })
    }
  }), ni.prototype.getTimeTicks = function(t, e, i, n) {
    var s, o = [],
      r = {},
      a = R.global.useUTC,
      h = new F(e - x(e)),
      c = t.unitRange,
      d = t.count;
    if (l(e)) {
      h[$](c >= W.second ? 0 : d * ae(h.getMilliseconds() / d)), c >= W.second && h[Z](c >= W.minute ? 0 : d * ae(h.getSeconds() / d)), c >= W.minute && h[q](c >= W.hour ? 0 : d * ae(h[N]() / d)), c >= W.hour && h[J](c >= W.day ? 0 : d * ae(h[_]() / d)), c >= W.day && h[Q](c >= W.month ? 1 : d * ae(h[j]() / d)), c >= W.month && (h[te](c >= W.year ? 0 : d * ae(h[U]() / d)), s = h[K]()), c >= W.year && h[ee](s - s % d), c === W.week && h[Q](h[j]() - h[V]() + Be(n, 1)), e = 1, (G || Y) && (h = h.getTime(), h = new F(h + x(h))), s = h[K](), n = h.getTime();
      for (var p = h[U](), u = h[j](), g = (W.day + (a ? x(h) : 6e4 * h.getTimezoneOffset())) % W.day; i > n;) o.push(n), n = c === W.year ? X(s + e * d, 0) : c === W.month ? X(s, p + e * d) : a || c !== W.day && c !== W.week ? n + c * d : X(s, p, u + e * d * (c === W.day ? 1 : 7)), e++;
      o.push(n), Xe(Ge(o, function(t) {
        return c <= W.hour && t % W.day === g
      }), function(t) {
        r[t] = "day"
      })
    }
    return o.info = Oe(t, {
      higherRanks: r,
      totalRange: c * d
    }), o
  }, ni.prototype.normalizeTimeTickInterval = function(t, e) {
    var i, n = e || [
        ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
        ["second", [1, 2, 5, 10, 15, 30]],
        ["minute", [1, 2, 5, 10, 15, 30]],
        ["hour", [1, 2, 3, 4, 6, 8, 12]],
        ["day", [1, 2]],
        ["week", [1, 2]],
        ["month", [1, 2, 3, 4, 6]],
        ["year", null]
      ],
      s = n[n.length - 1],
      o = W[s[0]],
      r = s[1];
    for (i = 0; i < n.length && (s = n[i], o = W[s[0]], r = s[1], !(n[i + 1] && t <= (o * r[r.length - 1] + W[n[i + 1][0]]) / 2)); i++);
    return o === W.year && 5 * o > t && (r = [1, 2, 5]), n = v(t / o, r, "year" === s[0] ? le(oe.pow(10, ae(oe.log(t / o) / oe.LN10)), 1) : 1), {
      unitRange: o,
      count: n,
      unitName: s[0]
    }
  };
  var si = ie.Tooltip = function() {
    this.init.apply(this, arguments)
  };
  si.prototype = {
    init: function(t, i) {
      var n = i.borderWidth,
        s = i.style,
        o = e(s.padding);
      this.chart = t, this.options = i, this.crosshairs = [], this.now = {
        x: 0,
        y: 0
      }, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, i.shape || "callout", null, null, i.useHTML, null, "tooltip").attr({
        padding: o,
        fill: i.backgroundColor,
        "stroke-width": n,
        r: i.borderRadius,
        zIndex: 8
      }).css(s).css({
        padding: 0
      }).add().attr({
        y: -9999
      }), Te || this.label.shadow(i.shadow), this.shared = i.shared
    },
    destroy: function() {
      this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
    },
    move: function(t, e, i, n) {
      var s = this,
        o = s.now,
        r = !1 !== s.options.animation && !s.isHidden && (1 < de(t - o.x) || 1 < de(e - o.y)),
        a = s.followPointer || 1 < s.len;
      Oe(o, {
        x: r ? (2 * o.x + t) / 3 : t,
        y: r ? (o.y + e) / 2 : e,
        anchorX: a ? I : r ? (2 * o.anchorX + i) / 3 : i,
        anchorY: a ? I : r ? (o.anchorY + n) / 2 : n
      }), s.label.attr(o), r && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
        s && s.move(t, e, i, n)
      }, 32))
    },
    hide: function(t) {
      var e = this;
      clearTimeout(this.hideTimer), this.isHidden || (this.hideTimer = setTimeout(function() {
        e.label.fadeOut(), e.isHidden = !0
      }, Be(t, this.options.hideDelay, 500)))
    },
    getAnchor: function(t, e) {
      var i, n, s, o = this.chart,
        r = o.inverted,
        a = o.plotTop,
        h = o.plotLeft,
        l = 0,
        c = 0;
      return t = d(t), i = t[0].tooltipPos, this.followPointer && e && (e.chartX === I && (e = o.pointer.normalize(e)), i = [e.chartX - o.plotLeft, e.chartY - a]), i || (Xe(t, function(t) {
        n = t.series.yAxis, s = t.series.xAxis, l += t.plotX + (!r && s ? s.left - h : 0), c += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && n ? n.top - a : 0)
      }), l /= t.length, c /= t.length, i = [r ? o.plotWidth - c : l, this.shared && !r && 1 < t.length && e ? e.chartY - a : r ? o.plotHeight - l : c]), Ne(i, re)
    },
    getPosition: function(t, e, i) {
      var n, s = this.chart,
        o = this.distance,
        r = {},
        a = i.h || 0,
        h = ["y", s.chartHeight, e, i.plotY + s.plotTop, s.plotTop, s.plotTop + s.plotHeight],
        l = ["x", s.chartWidth, t, i.plotX + s.plotLeft, s.plotLeft, s.plotLeft + s.plotWidth],
        c = Be(i.ttBelow, s.inverted && !i.negative || !s.inverted && i.negative),
        d = function(t, e, i, n, s, h) {
          var l = n - o > i,
            d = e > n + o + i,
            p = n - o - i;
          if (n += o, c && d) r[t] = n;
          else if (!c && l) r[t] = p;
          else if (l) r[t] = ce(h - i, 0 > p - a ? p : p - a);
          else {
            if (!d) return !1;
            r[t] = le(s, n + a + i > e ? n : n + a)
          }
        },
        p = function(t, e, i, n) {
          return o > n || n > e - o ? !1 : void(r[t] = i / 2 > n ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2)
        },
        u = function(t) {
          var e = h;
          h = l, l = e, n = t
        },
        g = function() {
          !1 !== d.apply(0, h) ? !1 !== p.apply(0, l) || n || (u(!0), g()) : n ? r.x = r.y = 0 : (u(!0), g())
        };
      return (s.inverted || 1 < this.len) && u(), g(), r
    },
    defaultFormatter: function(t) {
      var e, i = this.points || d(this);
      return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e.join("")
    },
    refresh: function(t, e) {
      var i, n, s, o, r = this.chart,
        a = this.label,
        h = this.options,
        l = {},
        c = [];
      o = h.formatter || this.defaultFormatter;
      var p, l = r.hoverPoints,
        u = this.shared;
      clearTimeout(this.hideTimer), this.followPointer = d(t)[0].series.tooltipOptions.followPointer, s = this.getAnchor(t, e), i = s[0], n = s[1], !u || t.series && t.series.noSharedTooltip ? l = t.getLabelConfig() : (r.hoverPoints = t, l && Xe(l, function(t) {
        t.setState()
      }), Xe(t, function(t) {
        t.setState("hover"), c.push(t.getLabelConfig())
      }), l = {
        x: t[0].category,
        y: t[0].y
      }, l.points = c, this.len = c.length, t = t[0]), o = o.call(l, this), l = t.series, this.distance = Be(l.tooltipOptions.distance, 16), !1 === o ? this.hide() : (this.isHidden && ($e(a), a.attr("opacity", 1).show()), a.attr({
        text: o
      }), p = h.borderColor || t.color || l.color || "#606060", a.attr({
        stroke: p
      }), this.updatePosition({
        plotX: i,
        plotY: n,
        negative: t.negative,
        ttBelow: t.ttBelow,
        h: s[2] || 0
      }), this.isHidden = !1), je(r, "tooltipRefresh", {
        text: o,
        x: i + r.plotLeft,
        y: n + r.plotTop,
        borderColor: p
      })
    },
    updatePosition: function(t) {
      var e = this.chart,
        i = this.label,
        i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
      this.move(re(i.x), re(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
    },
    getXDateFormat: function(t, e, i) {
      var n;
      e = e.dateTimeLabelFormats;
      var s, o, r = i && i.closestPointRange,
        a = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
        h = "millisecond";
      if (r) {
        o = H("%m-%d %H:%M:%S.%L", t.x);
        for (s in W) {
          if (r === W.week && +H("%w", t.x) === i.options.startOfWeek && "00:00:00.000" === o.substr(6)) {
            s = "week";
            break
          }
          if (W[s] > r) {
            s = h;
            break
          }
          if (a[s] && o.substr(a[s]) !== "01-01 00:00:00.000".substr(a[s])) break;
          "week" !== s && (h = s)
        }
        s && (n = e[s])
      } else n = e.day;
      return n || e.year
    },
    tooltipFooterHeaderFormatter: function(t, e) {
      var i = e ? "footer" : "header",
        n = t.series,
        s = n.tooltipOptions,
        r = s.xDateFormat,
        a = n.xAxis,
        h = a && "datetime" === a.options.type && o(t.key),
        i = s[i + "Format"];
      return h && !r && (r = this.getXDateFormat(t, s, a)), h && r && (i = i.replace("{point.key}", "{point.key:" + r + "}")), y(i, {
        point: t,
        series: n
      })
    },
    bodyFormatter: function(t) {
      return Ne(t, function(t) {
        var e = t.series.tooltipOptions;
        return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
      })
    }
  };
  var oi;
  O = ne.documentElement.ontouchstart !== I;
  var ri = ie.Pointer = function(t, e) {
    this.init(t, e)
  };
  ri.prototype = {
    init: function(t, e) {
      var i, n = e.chart,
        s = n.events,
        o = Te ? "" : n.zoomType,
        n = t.inverted;
      this.options = e, this.chart = t, this.zoomX = i = /x/.test(o), this.zoomY = o = /y/.test(o), this.zoomHor = i && !n || o && n, this.zoomVert = o && !n || i && n, this.hasZoom = i || o, this.runChartClick = s && !!s.click, this.pinchDown = [], this.lastValidTouch = {}, ie.Tooltip && e.tooltip.enabled && (t.tooltip = new si(t, e.tooltip), this.followTouchMove = Be(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
    },
    normalize: function(t, e) {
      var i, n;
      return t = t || window.event, t = Ue(t), t.target || (t.target = t.srcElement), n = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = Ye(this.chart.container)), n.pageX === I ? (i = le(t.x, t.clientX - e.left), n = t.y) : (i = n.pageX - e.left, n = n.pageY - e.top), Oe(t, {
        chartX: re(i),
        chartY: re(n)
      })
    },
    getCoordinates: function(t) {
      var e = {
        xAxis: [],
        yAxis: []
      };
      return Xe(this.chart.axes, function(i) {
        e[i.isXAxis ? "xAxis" : "yAxis"].push({
          axis: i,
          value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
        })
      }), e
    },
    runPointActions: function(t) {
      var e, i, n, s, o, r = this.chart,
        a = r.series,
        h = r.tooltip,
        l = h ? h.shared : !1,
        c = r.hoverPoint,
        d = r.hoverSeries,
        p = r.chartWidth,
        u = [];
      if (!l && !d)
        for (e = 0; e < a.length; e++)(a[e].directTouch || !a[e].options.stickyTracking) && (a = []);
      if (!l && d && d.directTouch && c ? s = c : (Xe(a, function(e) {
          i = e.noSharedTooltip && l, n = !l && e.directTouch, e.visible && !i && !n && Be(e.options.enableMouseTracking, !0) && (o = e.searchPoint(t, !i && 1 === e.kdDimensions)) && u.push(o)
        }), Xe(u, function(t) {
          t && "number" == typeof t.dist && t.dist < p && (p = t.dist, s = t)
        })), s && (s !== this.prevKDPoint || h && h.isHidden)) {
        if (l && !s.series.noSharedTooltip) {
          for (e = u.length; e--;)(u[e].clientX !== s.clientX || u[e].series.noSharedTooltip) && u.splice(e, 1);
          u.length && h && h.refresh(u, t), Xe(u, function(e) {
            e.onMouseOver(t, e !== (d && d.directTouch && c || s))
          })
        } else h && h.refresh(s, t), d && d.directTouch || s.onMouseOver(t);
        this.prevKDPoint = s
      } else a = d && d.tooltipOptions.followPointer, h && a && !h.isHidden && (a = h.getAnchor([{}], t), h.updatePosition({
        plotX: a[0],
        plotY: a[1]
      }));
      h && !this._onDocumentMouseMove && (this._onDocumentMouseMove = function(t) {
        Le[oi] && Le[oi].pointer.onDocumentMouseMove(t)
      }, _e(ne, "mousemove", this._onDocumentMouseMove)), Xe(r.axes, function(e) {
        e.drawCrosshair(t, Be(s, c))
      })
    },
    reset: function(t, e) {
      var i = this.chart,
        n = i.hoverSeries,
        s = i.hoverPoint,
        o = i.hoverPoints,
        r = i.tooltip,
        a = r && r.shared ? o : s;
      (t = t && r && a) && d(a)[0].plotX === I && (t = !1), t ? (r.refresh(a), s && (s.setState(s.state, !0), Xe(i.axes, function(t) {
        Be(t.options.crosshair && t.options.crosshair.snap, !0) ? t.drawCrosshair(null, s) : t.hideCrosshair()
      }))) : (s && s.onMouseOut(), o && Xe(o, function(t) {
        t.setState()
      }), n && n.onMouseOut(), r && r.hide(e), this._onDocumentMouseMove && (Ve(ne, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null), Xe(i.axes, function(t) {
        t.hideCrosshair()
      }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
    },
    scaleGroups: function(t, e) {
      var i, n = this.chart;
      Xe(n.series, function(s) {
        i = t || s.getPlotBox(), s.xAxis && s.xAxis.zoomEnabled && (s.group.attr(i), s.markerGroup && (s.markerGroup.attr(i), s.markerGroup.clip(e ? n.clipRect : null)), s.dataLabelsGroup && s.dataLabelsGroup.attr(i))
      }), n.clipRect.attr(e || n.clipBox)
    },
    dragStart: function(t) {
      var e = this.chart;
      e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
    },
    drag: function(t) {
      var e, i = this.chart,
        n = i.options.chart,
        s = t.chartX,
        o = t.chartY,
        r = this.zoomHor,
        a = this.zoomVert,
        h = i.plotLeft,
        l = i.plotTop,
        c = i.plotWidth,
        d = i.plotHeight,
        p = this.selectionMarker,
        u = this.mouseDownX,
        g = this.mouseDownY,
        f = n.panKey && t[n.panKey + "Key"];
      p && p.touch || (h > s ? s = h : s > h + c && (s = h + c), l > o ? o = l : o > l + d && (o = l + d), this.hasDragged = Math.sqrt(Math.pow(u - s, 2) + Math.pow(g - o, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(u - h, g - l), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !f && !p && (this.selectionMarker = p = i.renderer.rect(h, l, r ? 1 : c, a ? 1 : d, 0).attr({
        fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
        zIndex: 7
      }).add()), p && r && (s -= u, p.attr({
        width: de(s),
        x: (s > 0 ? 0 : s) + u
      })), p && a && (s = o - g, p.attr({
        height: de(s),
        y: (s > 0 ? 0 : s) + g
      })), e && !p && n.panning && i.pan(t, n.panning)))
    },
    drop: function(t) {
      var e = this,
        i = this.chart,
        n = this.hasPinched;
      if (this.selectionMarker) {
        var s, o = {
            xAxis: [],
            yAxis: [],
            originalEvent: t.originalEvent || t
          },
          r = this.selectionMarker,
          a = r.attr ? r.attr("x") : r.x,
          h = r.attr ? r.attr("y") : r.y,
          c = r.attr ? r.attr("width") : r.width,
          d = r.attr ? r.attr("height") : r.height;
        (this.hasDragged || n) && (Xe(i.axes, function(i) {
          if (i.zoomEnabled && l(i.min) && (n || e[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[i.coll]])) {
            var r = i.horiz,
              p = "touchend" === t.type ? i.minPixelPadding : 0,
              u = i.toValue((r ? a : h) + p),
              r = i.toValue((r ? a + c : h + d) - p);
            o[i.coll].push({
              axis: i,
              min: ce(u, r),
              max: le(u, r)
            }), s = !0
          }
        }), s && je(i, "selection", o, function(t) {
          i.zoom(Oe(t, n ? {
            animation: !1
          } : null))
        })), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
      }
      i && (p(i.container, {
        cursor: i._cursor
      }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
    },
    onContainerMouseDown: function(t) {
      t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
    },
    onDocumentMouseUp: function(t) {
      Le[oi] && Le[oi].pointer.drop(t)
    },
    onDocumentMouseMove: function(t) {
      var e = this.chart,
        i = this.chartPosition;
      t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
    },
    onContainerMouseLeave: function() {
      var t = Le[oi];
      t && (t.pointer.reset(), t.pointer.chartPosition = null)
    },
    onContainerMouseMove: function(t) {
      var e = this.chart;
      oi = e.index, t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
    },
    inClass: function(t, e) {
      for (var i; t;) {
        if (i = c(t, "class")) {
          if (-1 !== i.indexOf(e)) return !0;
          if (-1 !== i.indexOf("highcharts-container")) return !1
        }
        t = t.parentNode
      }
    },
    onTrackerMouseOut: function(t) {
      var e = this.chart.hoverSeries,
        i = (t = t.relatedTarget || t.toElement) && t.point && t.point.series;
      !e || e.options.stickyTracking || this.inClass(t, "highcharts-tooltip") || i === e || e.onMouseOut()
    },
    onContainerClick: function(t) {
      var e = this.chart,
        i = e.hoverPoint,
        n = e.plotLeft,
        s = e.plotTop;
      t = this.normalize(t), t.originalEvent = t, e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (je(i.series, "click", Oe(t, {
        point: i
      })), e.hoverPoint && i.firePointEvent("click", t)) : (Oe(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - s) && je(e, "click", t)))
    },
    setDOMEvents: function() {
      var t = this,
        e = t.chart.container;
      e.onmousedown = function(e) {
        t.onContainerMouseDown(e)
      }, e.onmousemove = function(e) {
        t.onContainerMouseMove(e)
      }, e.onclick = function(e) {
        t.onContainerClick(e)
      }, _e(e, "mouseleave", t.onContainerMouseLeave), 1 === Me && _e(ne, "mouseup", t.onDocumentMouseUp), O && (e.ontouchstart = function(e) {
        t.onContainerTouchStart(e)
      }, e.ontouchmove = function(e) {
        t.onContainerTouchMove(e)
      }, 1 === Me && _e(ne, "touchend", t.onDocumentTouchEnd))
    },
    destroy: function() {
      var t;
      Ve(this.chart.container, "mouseleave", this.onContainerMouseLeave), Me || (Ve(ne, "mouseup", this.onDocumentMouseUp), Ve(ne, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
      for (t in this) this[t] = null
    }
  }, Oe(ie.Pointer.prototype, {
    pinchTranslate: function(t, e, i, n, s, o) {
      (this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, n, s, o), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, n, s, o)
    },
    pinchTranslateDirection: function(t, e, i, n, s, o, r, a) {
      var h, l, c, d = this.chart,
        p = t ? "x" : "y",
        u = t ? "X" : "Y",
        g = "chart" + u,
        f = t ? "width" : "height",
        m = d["plot" + (t ? "Left" : "Top")],
        x = a || 1,
        y = d.inverted,
        v = d.bounds[t ? "h" : "v"],
        b = 1 === e.length,
        k = e[0][g],
        w = i[0][g],
        S = !b && e[1][g],
        T = !b && i[1][g];
      i = function() {
        !b && 20 < de(k - S) && (x = a || de(w - T) / de(k - S)), l = (m - w) / x + k, h = d["plot" + (t ? "Width" : "Height")] / x
      }, i(), e = l, e < v.min ? (e = v.min, c = !0) : e + h > v.max && (e = v.max - h, c = !0), c ? (w -= .8 * (w - r[p][0]), b || (T -= .8 * (T - r[p][1])), i()) : r[p] = [w, T], y || (o[p] = l - m, o[f] = h), o = y ? 1 / x : x, s[f] = h, s[p] = e, n[y ? t ? "scaleY" : "scaleX" : "scale" + u] = x, n["translate" + u] = o * m + (w - o * k)
    },
    pinch: function(t) {
      var e = this,
        i = e.chart,
        n = e.pinchDown,
        s = t.touches,
        o = s.length,
        r = e.lastValidTouch,
        a = e.hasZoom,
        h = e.selectionMarker,
        l = {},
        c = 1 === o && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
        d = {};
      o > 1 && (e.initiated = !0), a && e.initiated && !c && t.preventDefault(), Ne(s, function(t) {
        return e.normalize(t)
      }), "touchstart" === t.type ? (Xe(s, function(t, e) {
        n[e] = {
          chartX: t.chartX,
          chartY: t.chartY
        }
      }), r.x = [n[0].chartX, n[1] && n[1].chartX], r.y = [n[0].chartY, n[1] && n[1].chartY], Xe(i.axes, function(t) {
        if (t.zoomEnabled) {
          var e = i.bounds[t.horiz ? "h" : "v"],
            n = t.minPixelPadding,
            s = t.toPixels(Be(t.options.min, t.dataMin)),
            o = t.toPixels(Be(t.options.max, t.dataMax)),
            r = ce(s, o),
            s = le(s, o);
          e.min = ce(t.pos, r - n), e.max = le(t.pos + t.len, s + n)
        }
      }), e.res = !0) : n.length && (h || (e.selectionMarker = h = Oe({
        destroy: Ce,
        touch: !0
      }, i.plotBox)), e.pinchTranslate(n, s, l, h, d, r), e.hasPinched = a, e.scaleGroups(l, d), !a && e.followTouchMove && 1 === o ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
    },
    touch: function(t, e) {
      var i = this.chart;
      oi = i.index, 1 === t.touches.length ? (t = this.normalize(t), i.isInsidePlot(t.chartX - i.plotLeft, t.chartY - i.plotTop) && !i.openMenu ? (e && this.runPointActions(t), this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
    },
    onContainerTouchStart: function(t) {
      this.touch(t, !0)
    },
    onContainerTouchMove: function(t) {
      this.touch(t)
    },
    onDocumentTouchEnd: function(t) {
      Le[oi] && Le[oi].pointer.drop(t)
    }
  });
  var ai = ie.Legend = function(t, e) {
    this.init(t, e)
  };
  ai.prototype = {
    init: function(e, i) {
      var n = this,
        s = i.itemStyle,
        o = i.itemMarginTop || 0;
      this.options = i, i.enabled && (n.itemStyle = s, n.itemHiddenStyle = t(s, i.itemHiddenStyle), n.itemMarginTop = o, n.padding = s = Be(i.padding, 8), n.initialItemX = s, n.initialItemY = s - 5, n.maxItemWidth = 0, n.chart = e, n.itemHeight = 0, n.symbolWidth = Be(i.symbolWidth, 16), n.pages = [], n.render(), _e(n.chart, "endResize", function() {
        n.positionCheckboxes()
      }))
    },
    colorizeItem: function(t, e) {
      var i, n = this.options,
        s = t.legendItem,
        o = t.legendLine,
        r = t.legendSymbol,
        a = this.itemHiddenStyle.color,
        n = e ? n.itemStyle.color : a,
        h = e ? t.legendColor || t.color || "#CCC" : a,
        a = t.options && t.options.marker,
        l = {
          fill: h
        };
      if (s && s.css({
          fill: n,
          color: n
        }), o && o.attr({
          stroke: h
        }), r) {
        if (a && r.isMarker)
          for (i in l.stroke = h, a = t.convertAttribs(a)) s = a[i], s !== I && (l[i] = s);
        r.attr(l)
      }
    },
    positionItem: function(t) {
      var e = this.options,
        i = e.symbolPadding,
        e = !e.rtl,
        n = t._legendItemPos,
        s = n[0],
        n = n[1],
        o = t.checkbox;
      (t = t.legendGroup) && t.element && t.translate(e ? s : this.legendWidth - s - 2 * i - 4, n), o && (o.x = s, o.y = n)
    },
    destroyItem: function(t) {
      var e = t.checkbox;
      Xe(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
        t[e] && (t[e] = t[e].destroy())
      }), e && T(t.checkbox)
    },
    destroy: function() {
      var t = this.group,
        e = this.box;
      e && (this.box = e.destroy()), t && (this.group = t.destroy())
    },
    positionCheckboxes: function(t) {
      var e, i = this.group.alignAttr,
        n = this.clipHeight || this.legendHeight;
      i && (e = i.translateY, Xe(this.allItems, function(s) {
        var o, r = s.checkbox;
        r && (o = e + r.y + (t || 0) + 3, p(r, {
          left: i.translateX + s.checkboxOffset + r.x - 20 + "px",
          top: o + "px",
          display: o > e - 6 && e + n - 6 > o ? "" : "none"
        }))
      }))
    },
    renderTitle: function() {
      var t = this.padding,
        e = this.options.title,
        i = 0;
      e.text && (this.title || (this.title = this.chart.renderer.label(e.text, t - 3, t - 4, null, null, null, null, null, "legend-title").attr({
        zIndex: 1
      }).css(e.style).add(this.group)), t = this.title.getBBox(), i = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
        translateY: i
      })), this.titleHeight = i
    },
    setText: function(t) {
      var e = this.options;
      t.legendItem.attr({
        text: e.labelFormat ? y(e.labelFormat, t) : e.labelFormatter.call(t)
      })
    },
    renderItem: function(e) {
      var i = this.chart,
        n = i.renderer,
        s = this.options,
        o = "horizontal" === s.layout,
        r = this.symbolWidth,
        a = s.symbolPadding,
        h = this.itemStyle,
        l = this.itemHiddenStyle,
        c = this.padding,
        d = o ? Be(s.itemDistance, 20) : 0,
        p = !s.rtl,
        u = s.width,
        g = s.itemMarginBottom || 0,
        f = this.itemMarginTop,
        m = this.initialItemX,
        x = e.legendItem,
        y = e.series && e.series.drawLegendSymbol ? e.series : e,
        v = y.options,
        v = this.createCheckboxForItem && v && v.showCheckbox,
        b = s.useHTML;
      x || (e.legendGroup = n.g("legend-item").attr({
        zIndex: 1
      }).add(this.scrollGroup), e.legendItem = x = n.text("", p ? r + a : -a, this.baseline || 0, b).css(t(e.visible ? h : l)).attr({
        align: p ? "left" : "right",
        zIndex: 2
      }).add(e.legendGroup), this.baseline || (this.fontMetrics = n.fontMetrics(h.fontSize, x), this.baseline = this.fontMetrics.f + 3 + f, x.attr("y", this.baseline)), y.drawLegendSymbol(this, e), this.setItemEvents && this.setItemEvents(e, x, b, h, l), this.colorizeItem(e, e.visible), v && this.createCheckboxForItem(e)), this.setText(e), n = x.getBBox(), r = e.checkboxOffset = s.itemWidth || e.legendItemWidth || r + a + n.width + d + (v ? 20 : 0), this.itemHeight = a = re(e.legendItemHeight || n.height), o && this.itemX - m + r > (u || i.chartWidth - 2 * c - m - s.x) && (this.itemX = m, this.itemY += f + this.lastLineHeight + g, this.lastLineHeight = 0), this.maxItemWidth = le(this.maxItemWidth, r), this.lastItemY = f + this.itemY + g, this.lastLineHeight = le(a, this.lastLineHeight), e._legendItemPos = [this.itemX, this.itemY], o ? this.itemX += r : (this.itemY += f + a + g, this.lastLineHeight = a), this.offsetWidth = u || le((o ? this.itemX - m - d : r) + c, this.offsetWidth)
    },
    getAllItems: function() {
      var t = [];
      return Xe(this.chart.series, function(e) {
        var i = e.options;
        Be(i.showInLegend, l(i.linkedTo) ? !1 : I, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
      }), t
    },
    adjustMargins: function(t, e) {
      var i = this.chart,
        n = this.options,
        s = n.align.charAt(0) + n.verticalAlign.charAt(0) + n.layout.charAt(0);
      this.display && !n.floating && Xe([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(o, r) {
        o.test(s) && !l(t[r]) && (i[ze[r]] = le(i[ze[r]], i.legend[(r + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][r] * n[r % 2 ? "x" : "y"] + Be(n.margin, 12) + e[r]))
      })
    },
    render: function() {
      var t, e, i, n, s = this,
        o = s.chart,
        r = o.renderer,
        a = s.group,
        h = s.box,
        l = s.options,
        c = s.padding,
        d = l.borderWidth,
        p = l.backgroundColor;
      s.itemX = s.initialItemX, s.itemY = s.initialItemY, s.offsetWidth = 0, s.lastItemY = 0, a || (s.group = a = r.g("legend").attr({
        zIndex: 7
      }).add(), s.contentGroup = r.g().attr({
        zIndex: 1
      }).add(a), s.scrollGroup = r.g().add(s.contentGroup)), s.renderTitle(), t = s.getAllItems(), b(t, function(t, e) {
        return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
      }), l.reversed && t.reverse(), s.allItems = t, s.display = e = !!t.length, s.lastLineHeight = 0, Xe(t, function(t) {
        s.renderItem(t)
      }), i = (l.width || s.offsetWidth) + c, n = s.lastItemY + s.lastLineHeight + s.titleHeight, n = s.handleOverflow(n), n += c, (d || p) && (h ? i > 0 && n > 0 && (h[h.isNew ? "attr" : "animate"](h.crisp({
        width: i,
        height: n
      })), h.isNew = !1) : (s.box = h = r.rect(0, 0, i, n, l.borderRadius, d || 0).attr({
        stroke: l.borderColor,
        "stroke-width": d || 0,
        fill: p || "none"
      }).add(a).shadow(l.shadow), h.isNew = !0), h[e ? "show" : "hide"]()), s.legendWidth = i, s.legendHeight = n, Xe(t, function(t) {
        s.positionItem(t)
      }), e && a.align(Oe({
        width: i,
        height: n
      }, l), !0, "spacingBox"), o.isResizing || this.positionCheckboxes()
    },
    handleOverflow: function(t) {
      var e, i, n = this,
        s = this.chart,
        o = s.renderer,
        r = this.options,
        a = r.y,
        a = s.spacingBox.height + ("top" === r.verticalAlign ? -a : a) - this.padding,
        h = r.maxHeight,
        l = this.clipRect,
        c = r.navigation,
        d = Be(c.animation, !0),
        p = c.arrowSize || 12,
        u = this.nav,
        g = this.pages,
        f = this.padding,
        m = this.allItems,
        x = function(t) {
          l.attr({
            height: t
          }), n.contentGroup.div && (n.contentGroup.div.style.clip = "rect(" + f + "px,9999px," + (f + t) + "px,0)")
        };
      return "horizontal" === r.layout && (a /= 2), h && (a = ce(a, h)), g.length = 0, t > a ? (this.clipHeight = e = le(a - 20 - this.titleHeight - f, 0), this.currentPage = Be(this.currentPage, 1), this.fullHeight = t, Xe(m, function(t, n) {
        var s = t._legendItemPos[1],
          o = re(t.legendItem.getBBox().height),
          r = g.length;
        (!r || s - g[r - 1] > e && (i || s) !== g[r - 1]) && (g.push(i || s), r++), n === m.length - 1 && s + o - g[r - 1] > e && g.push(s), s !== i && (i = s)
      }), l || (l = n.clipRect = o.clipRect(0, f, 9999, 0), n.contentGroup.clip(l)), x(e), u || (this.nav = u = o.g().attr({
        zIndex: 1
      }).add(this.group), this.up = o.symbol("triangle", 0, 0, p, p).on("click", function() {
        n.scroll(-1, d)
      }).add(u), this.pager = o.text("", 15, 10).css(c.style).add(u), this.down = o.symbol("triangle-down", 0, 0, p, p).on("click", function() {
        n.scroll(1, d)
      }).add(u)), n.scroll(0), t = a) : u && (x(s.chartHeight), u.hide(), this.scrollGroup.attr({
        translateY: 1
      }), this.clipHeight = 0), t
    },
    scroll: function(t, e) {
      var i = this.pages,
        n = i.length,
        s = this.currentPage + t,
        o = this.clipHeight,
        r = this.options.navigation,
        a = r.activeColor,
        r = r.inactiveColor,
        h = this.pager,
        l = this.padding;
      s > n && (s = n), s > 0 && (e !== I && C(e, this.chart), this.nav.attr({
        translateX: l,
        translateY: o + this.padding + 7 + this.titleHeight,
        visibility: "visible"
      }), this.up.attr({
        fill: 1 === s ? r : a
      }).css({
        cursor: 1 === s ? "default" : "pointer"
      }), h.attr({
        text: s + "/" + n
      }), this.down.attr({
        x: 18 + this.pager.getBBox().width,
        fill: s === n ? r : a
      }).css({
        cursor: s === n ? "default" : "pointer"
      }), i = -i[s - 1] + this.initialItemY, this.scrollGroup.animate({
        translateY: i
      }), this.currentPage = s, this.positionCheckboxes(i))
    }
  };
  var hi = ie.LegendSymbolMixin = {
    drawRectangle: function(t, e) {
      var i = t.options.symbolHeight || t.fontMetrics.f;
      e.legendSymbol = this.chart.renderer.rect(0, t.baseline - i + 1, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
        zIndex: 3
      }).add(e.legendGroup)
    },
    drawLineMarker: function(t) {
      var e, i = this.options,
        n = i.marker;
      e = t.symbolWidth;
      var s = this.chart.renderer,
        o = this.legendGroup;
      t = t.baseline - re(.3 * t.fontMetrics.b);
      var r;
      i.lineWidth && (r = {
        "stroke-width": i.lineWidth
      }, i.dashStyle && (r.dashstyle = i.dashStyle), this.legendLine = s.path(["M", 0, t, "L", e, t]).attr(r).add(o)), n && !1 !== n.enabled && (i = n.radius, this.legendSymbol = e = s.symbol(this.symbol, e / 2 - i, t - i, 2 * i, 2 * i).add(o), e.isMarker = !0)
    }
  };
  (/Trident\/7\.0/.test(me) || be) && Re(ai.prototype, "positionItem", function(t, e) {
    var i = this,
      n = function() {
        e._legendItemPos && t.call(i, e)
      };
    n(), setTimeout(n)
  });
  var li = ie.Chart = function() {
    this.init.apply(this, arguments)
  };
  li.prototype = {
    callbacks: [],
    init: function(e, i) {
      var n, s = e.series;
      e.series = null, n = t(R, e), n.series = e.series = s, this.userOptions = e, s = n.chart, this.margin = this.splashArray("margin", s), this.spacing = this.splashArray("spacing", s);
      var o = s.events;
      this.bounds = {
        h: {},
        v: {}
      }, this.callback = i, this.isResizing = 0, this.options = n, this.axes = [], this.series = [], this.hasCartesianSeries = s.showAxes;
      var r, a = this;
      if (a.index = Le.length, Le.push(a), Me++, !1 !== s.reflow && _e(a, "load", function() {
          a.initReflow()
        }), o)
        for (r in o) _e(a, r, o[r]);
      a.xAxis = [], a.yAxis = [], a.animation = Te ? !1 : Be(s.animation, !0), a.pointCount = a.colorCounter = a.symbolCounter = 0, a.firstRender()
    },
    initSeries: function(t) {
      var e = this.options.chart;
      return (e = Ie[t.type || e.type || e.defaultSeriesType]) || A(17, !0), e = new e, e.init(this, t), e
    },
    isInsidePlot: function(t, e, i) {
      var n = i ? e : t;
      return t = i ? t : e, n >= 0 && n <= this.plotWidth && t >= 0 && t <= this.plotHeight
    },
    redraw: function(t) {
      var e, i, n = this.axes,
        s = this.series,
        o = this.pointer,
        r = this.legend,
        a = this.isDirtyLegend,
        h = this.hasCartesianSeries,
        l = this.isDirtyBox,
        c = s.length,
        d = c,
        p = this.renderer,
        u = p.isHidden(),
        g = [];
      for (C(t, this), u && this.cloneRenderTo(), this.layOutTitles(); d--;)
        if (t = s[d], t.options.stacking && (e = !0, t.isDirty)) {
          i = !0;
          break
        }
      if (i)
        for (d = c; d--;) t = s[d], t.options.stacking && (t.isDirty = !0);
      Xe(s, function(t) {
        t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), a = !0)
      }), a && r.options.enabled && (r.render(), this.isDirtyLegend = !1), e && this.getStacks(), h && !this.isResizing && (this.maxTicks = null, Xe(n, function(t) {
        t.setScale()
      })), this.getMargins(), h && (Xe(n, function(t) {
        t.isDirty && (l = !0)
      }), Xe(n, function(t) {
        var i = t.min + "," + t.max;
        t.extKey !== i && (t.extKey = i, g.push(function() {
          je(t, "afterSetExtremes", Oe(t.eventArgs, t.getExtremes())), delete t.eventArgs
        })), (l || e) && t.redraw()
      })), l && this.drawChartBox(), Xe(s, function(t) {
        t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
      }), o && o.reset(!0), p.draw(), je(this, "redraw"), u && this.cloneRenderTo(!0), Xe(g, function(t) {
        t.call()
      })
    },
    get: function(t) {
      var e, i, n = this.axes,
        s = this.series;
      for (e = 0; e < n.length; e++)
        if (n[e].options.id === t) return n[e];
      for (e = 0; e < s.length; e++)
        if (s[e].options.id === t) return s[e];
      for (e = 0; e < s.length; e++)
        for (i = s[e].points || [], n = 0; n < i.length; n++)
          if (i[n].id === t) return i[n];
      return null
    },
    getAxes: function() {
      var t = this,
        e = this.options,
        i = e.xAxis = d(e.xAxis || {}),
        e = e.yAxis = d(e.yAxis || {});
      Xe(i, function(t, e) {
        t.index = e, t.isX = !0
      }), Xe(e, function(t, e) {
        t.index = e
      }), i = i.concat(e), Xe(i, function(e) {
        new ni(t, e)
      })
    },
    getSelectedPoints: function() {
      var t = [];
      return Xe(this.series, function(e) {
        t = t.concat(Ge(e.points || [], function(t) {
          return t.selected
        }))
      }), t
    },
    getSelectedSeries: function() {
      return Ge(this.series, function(t) {
        return t.selected
      })
    },
    setTitle: function(e, i, n) {
      var s, o = this,
        r = o.options;
      s = r.title = t(r.title, e), r = r.subtitle = t(r.subtitle, i), Xe([
        ["title", e, s],
        ["subtitle", i, r]
      ], function(t) {
        var e = t[0],
          i = o[e],
          n = t[1];
        t = t[2], i && n && (o[e] = i = i.destroy()), t && t.text && !i && (o[e] = o.renderer.text(t.text, 0, 0, t.useHTML).attr({
          align: t.align,
          "class": "highcharts-" + e,
          zIndex: t.zIndex || 4
        }).css(t.style).add())
      }), o.layOutTitles(n)
    },
    layOutTitles: function(t) {
      var e = 0,
        i = this.title,
        n = this.subtitle,
        s = this.options,
        o = s.title,
        s = s.subtitle,
        r = this.renderer,
        a = this.spacingBox.width - 44;
      i && (i.css({
        width: (o.width || a) + "px"
      }).align(Oe({
        y: r.fontMetrics(o.style.fontSize, i).b - 3
      }, o), !1, "spacingBox"), o.floating || o.verticalAlign || (e = i.getBBox().height)), n && (n.css({
        width: (s.width || a) + "px"
      }).align(Oe({
        y: e + (o.margin - 13) + r.fontMetrics(o.style.fontSize, n).b
      }, s), !1, "spacingBox"), s.floating || s.verticalAlign || (e = he(e + n.getBBox().height))), i = this.titleOffset !== e, this.titleOffset = e, !this.isDirtyBox && i && (this.isDirtyBox = i, this.hasRendered && Be(t, !0) && this.isDirtyBox && this.redraw())
    },
    getChartSize: function() {
      var t = this.options.chart,
        e = t.width,
        t = t.height,
        i = this.renderToClone || this.renderTo;
      l(e) || (this.containerWidth = We(i, "width")), l(t) || (this.containerHeight = We(i, "height")), this.chartWidth = le(0, e || this.containerWidth || 600), this.chartHeight = le(0, Be(t, 19 < this.containerHeight ? this.containerHeight : 400))
    },
    cloneRenderTo: function(t) {
      var e = this.renderToClone,
        i = this.container;
      t ? e && (this.renderTo.appendChild(i), T(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), p(e, {
        position: "absolute",
        top: "-9999px",
        display: "block"
      }), e.style.setProperty && e.style.setProperty("display", "block", "important"), ne.body.appendChild(e), i && e.appendChild(i))
    },
    getContainer: function() {
      var t, n, s, o, r = this.options.chart;
      this.renderTo = t = r.renderTo, o = "highcharts-" + Pe++, i(t) && (this.renderTo = t = ne.getElementById(t)), t || A(13, !0), n = e(c(t, "data-highcharts-chart")), !isNaN(n) && Le[n] && Le[n].hasRendered && Le[n].destroy(), c(t, "data-highcharts-chart", this.index), t.innerHTML = "", r.skipClone || t.offsetWidth || this.cloneRenderTo(), this.getChartSize(), n = this.chartWidth, s = this.chartHeight, this.container = t = u("div", {
        className: "highcharts-container" + (r.className ? " " + r.className : ""),
        id: o
      }, Oe({
        position: "relative",
        overflow: "hidden",
        width: n + "px",
        height: s + "px",
        textAlign: "left",
        lineHeight: "normal",
        zIndex: 0,
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
      }, r.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = r.forExport ? new ii(t, n, s, r.style, !0) : new ii(t, n, s, r.style), Te && this.renderer.create(this, t, n, s), this.renderer.chartIndex = this.index
    },
    getMargins: function(t) {
      var e = this.spacing,
        i = this.margin,
        n = this.titleOffset;
      this.resetMargins(), n && !l(i[0]) && (this.plotTop = le(this.plotTop, n + this.options.title.margin + e[0])), this.legend.adjustMargins(i, e), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
    },
    getAxisMargins: function() {
      var t = this,
        e = t.axisOffset = [0, 0, 0, 0],
        i = t.margin;
      t.hasCartesianSeries && Xe(t.axes, function(t) {
        t.getOffset()
      }), Xe(ze, function(n, s) {
        l(i[s]) || (t[n] += e[s])
      }), t.setChartSize()
    },
    reflow: function(t) {
      var e = this,
        i = e.options.chart,
        n = e.renderTo,
        s = i.width || We(n, "width"),
        o = i.height || We(n, "height"),
        i = t ? t.target : se,
        n = function() {
          e.container && (e.setSize(s, o, !1), e.hasUserSize = null)
        };
      e.hasUserSize || e.isPrinting || !s || !o || i !== se && i !== ne || ((s !== e.containerWidth || o !== e.containerHeight) && (clearTimeout(e.reflowTimeout), t ? e.reflowTimeout = setTimeout(n, 100) : n()), e.containerWidth = s, e.containerHeight = o)
    },
    initReflow: function() {
      var t = this,
        e = function(e) {
          t.reflow(e)
        };
      _e(se, "resize", e), _e(t, "destroy", function() {
        Ve(se, "resize", e)
      })
    },
    setSize: function(t, e, i) {
      var n, s, o, r = this,
        a = r.renderer,
        h = a.globalAnimation;
      r.isResizing += 1, o = function() {
        r && je(r, "endResize", null, function() {
          --r.isResizing
        })
      }, C(i, r), r.oldChartHeight = r.chartHeight, r.oldChartWidth = r.chartWidth, l(t) && (r.chartWidth = n = le(0, re(t)), r.hasUserSize = !!n), l(e) && (r.chartHeight = s = le(0, re(e))), (h ? Ke : p)(r.container, {
        width: n + "px",
        height: s + "px"
      }, h), r.setChartSize(!0), a.setSize(n, s, i), r.maxTicks = null, Xe(r.axes, function(t) {
        t.isDirty = !0, t.setScale()
      }), Xe(r.series, function(t) {
        t.isDirty = !0
      }), r.isDirtyLegend = !0, r.isDirtyBox = !0, r.layOutTitles(), r.getMargins(), r.redraw(i), r.oldChartHeight = null, je(r, "resize"), !1 === h ? o() : setTimeout(o, h && h.duration || 500)
    },
    setChartSize: function(t) {
      var e, i, n, s, o = this.inverted,
        r = this.renderer,
        a = this.chartWidth,
        h = this.chartHeight,
        l = this.options.chart,
        c = this.spacing,
        d = this.clipOffset;
      this.plotLeft = e = re(this.plotLeft), this.plotTop = i = re(this.plotTop), this.plotWidth = n = le(0, re(a - e - this.marginRight)), this.plotHeight = s = le(0, re(h - i - this.marginBottom)), this.plotSizeX = o ? s : n, this.plotSizeY = o ? n : s, this.plotBorderWidth = l.plotBorderWidth || 0, this.spacingBox = r.spacingBox = {
        x: c[3],
        y: c[0],
        width: a - c[3] - c[1],
        height: h - c[0] - c[2]
      }, this.plotBox = r.plotBox = {
        x: e,
        y: i,
        width: n,
        height: s
      }, a = 2 * ae(this.plotBorderWidth / 2), o = he(le(a, d[3]) / 2), r = he(le(a, d[0]) / 2), this.clipBox = {
        x: o,
        y: r,
        width: ae(this.plotSizeX - le(a, d[1]) / 2 - o),
        height: le(0, ae(this.plotSizeY - le(a, d[2]) / 2 - r))
      }, t || Xe(this.axes, function(t) {
        t.setAxisSize(), t.setAxisTranslation()
      })
    },
    resetMargins: function() {
      var t = this;
      Xe(ze, function(e, i) {
        t[e] = Be(t.margin[i], t.spacing[i])
      }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
    },
    drawChartBox: function() {
      var t, e = this.options.chart,
        i = this.renderer,
        n = this.chartWidth,
        s = this.chartHeight,
        o = this.chartBackground,
        r = this.plotBackground,
        a = this.plotBorder,
        h = this.plotBGImage,
        l = e.borderWidth || 0,
        c = e.backgroundColor,
        d = e.plotBackgroundColor,
        p = e.plotBackgroundImage,
        u = e.plotBorderWidth || 0,
        g = this.plotLeft,
        f = this.plotTop,
        m = this.plotWidth,
        x = this.plotHeight,
        y = this.plotBox,
        v = this.clipRect,
        b = this.clipBox;
      t = l + (e.shadow ? 8 : 0), (l || c) && (o ? o.animate(o.crisp({
        width: n - t,
        height: s - t
      })) : (o = {
        fill: c || "none"
      }, l && (o.stroke = e.borderColor, o["stroke-width"] = l), this.chartBackground = i.rect(t / 2, t / 2, n - t, s - t, e.borderRadius, l).attr(o).addClass("highcharts-background").add().shadow(e.shadow))), d && (r ? r.animate(y) : this.plotBackground = i.rect(g, f, m, x, 0).attr({
        fill: d
      }).add().shadow(e.plotShadow)), p && (h ? h.animate(y) : this.plotBGImage = i.image(p, g, f, m, x).add()), v ? v.animate({
        width: b.width,
        height: b.height
      }) : this.clipRect = i.clipRect(b), u && (a ? a.animate(a.crisp({
        x: g,
        y: f,
        width: m,
        height: x,
        strokeWidth: -u
      })) : this.plotBorder = i.rect(g, f, m, x, 0, -u).attr({
        stroke: e.plotBorderColor,
        "stroke-width": u,
        fill: "none",
        zIndex: 1
      }).add()), this.isDirtyBox = !1
    },
    propFromSeries: function() {
      var t, e, i, n = this,
        s = n.options.chart,
        o = n.options.series;
      Xe(["inverted", "angular", "polar"], function(r) {
        for (t = Ie[s.type || s.defaultSeriesType], i = n[r] || s[r] || t && t.prototype[r], e = o && o.length; !i && e--;)(t = Ie[o[e].type]) && t.prototype[r] && (i = !0);
        n[r] = i
      })
    },
    linkSeries: function() {
      var t = this,
        e = t.series;
      Xe(e, function(t) {
        t.linkedSeries.length = 0
      }), Xe(e, function(e) {
        var n = e.options.linkedTo;
        i(n) && (n = ":previous" === n ? t.series[e.index - 1] : t.get(n)) && (n.linkedSeries.push(e), e.linkedParent = n, e.visible = Be(e.options.visible, n.options.visible, e.visible))
      })
    },
    renderSeries: function() {
      Xe(this.series, function(t) {
        t.translate(), t.render()
      })
    },
    renderLabels: function() {
      var t = this,
        i = t.options.labels;
      i.items && Xe(i.items, function(n) {
        var s = Oe(i.style, n.style),
          o = e(s.left) + t.plotLeft,
          r = e(s.top) + t.plotTop + 12;
        delete s.left, delete s.top, t.renderer.text(n.html, o, r).attr({
          zIndex: 2
        }).css(s).add()
      })
    },
    render: function() {
      var t, e, i, n, s = this.axes,
        o = this.renderer,
        r = this.options;
      this.setTitle(), this.legend = new ai(this, r.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), t = this.plotWidth, e = this.plotHeight -= 13, Xe(s, function(t) {
        t.setScale()
      }), this.getAxisMargins(), i = 1.1 < t / this.plotWidth, n = 1.1 < e / this.plotHeight, (i || n) && (this.maxTicks = null, Xe(s, function(t) {
        (t.horiz && i || !t.horiz && n) && t.setTickInterval(!0)
      }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && Xe(s, function(t) {
        t.render()
      }), this.seriesGroup || (this.seriesGroup = o.g("series-group").attr({
        zIndex: 3
      }).add()), this.renderSeries(), this.renderLabels(), this.showCredits(r.credits), this.hasRendered = !0
    },
    showCredits: function(t) {
      t.enabled && !this.credits && (this.credits = this.renderer.text(t.text, 0, 0).on("click", function() {
        t.href && (location.href = t.href)
      }).attr({
        align: t.position.align,
        zIndex: 8
      }).css(t.style).add().align(t.position))
    },
    destroy: function() {
      var t, e = this,
        i = e.axes,
        n = e.series,
        s = e.container,
        o = s && s.parentNode;
      for (je(e, "destroy"), Le[e.index] = I, Me--, e.renderTo.removeAttribute("data-highcharts-chart"), Ve(e), t = i.length; t--;) i[t] = i[t].destroy();
      for (t = n.length; t--;) n[t] = n[t].destroy();
      Xe("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(t) {
        var i = e[t];
        i && i.destroy && (e[t] = i.destroy())
      }), s && (s.innerHTML = "", Ve(s), o && T(s));
      for (t in e) delete e[t]
    },
    isReadyToRender: function() {
      var t = this;
      return !we && se == se.top && "complete" !== ne.readyState || Te && !se.canvg ? (Te ? CanVGController.push(function() {
        t.firstRender()
      }, t.options.global.canvasToolsURL) : ne.attachEvent("onreadystatechange", function() {
        ne.detachEvent("onreadystatechange", t.firstRender), "complete" === ne.readyState && t.firstRender()
      }), !1) : !0
    },
    firstRender: function() {
      var t = this,
        e = t.options,
        i = t.callback;
      t.isReadyToRender() && (t.getContainer(), je(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), Xe(e.series || [], function(e) {
        t.initSeries(e)
      }), t.linkSeries(), je(t, "beforeRender"), ie.Pointer && (t.pointer = new ri(t, e)), t.render(), t.renderer.draw(), i && i.apply(t, [t]), Xe(t.callbacks, function(e) {
        t.index !== I && e.apply(t, [t])
      }), je(t, "load"), t.cloneRenderTo(!0))
    },
    splashArray: function(t, e) {
      var i = e[t],
        i = n(i) ? i : [i, i, i, i];
      return [Be(e[t + "Top"], i[0]), Be(e[t + "Right"], i[1]), Be(e[t + "Bottom"], i[2]), Be(e[t + "Left"], i[3])]
    }
  };
  var ci = function() {};
  ci.prototype = {
    init: function(t, e, i) {
      return this.series = t, this.color = t.color, this.applyOptions(e, i), this.pointAttr = {}, t.options.colorByPoint && (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter++], t.colorCounter === e.length && (t.colorCounter = 0)), t.chart.pointCount++, this
    },
    applyOptions: function(t, e) {
      var i = this.series,
        n = i.options.pointValKey || i.pointValKey;
      return t = ci.prototype.optionsToObject.call(this, t), Oe(this, t), this.options = this.options ? Oe(this.options, t) : t, n && (this.y = this[n]), this.x === I && i && (this.x = e === I ? i.autoIncrement() : e), this
    },
    optionsToObject: function(t) {
      var e = {},
        i = this.series,
        n = i.options.keys,
        o = n || i.pointArrayMap || ["y"],
        r = o.length,
        a = 0,
        h = 0;
      if ("number" == typeof t || null === t) e[o[0]] = t;
      else if (s(t))
        for (!n && t.length > r && (i = typeof t[0], "string" === i ? e._id = t[0] : "number" === i && (e.x = t[0]), a++); r > h;) e[o[h++]] = t[a++];
      else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
      if(typeof e._id!=='string'){
        var keys=Object.keys(e._id);
        var n=keys.length;
        var str=e._id[keys[0]];
        for(var i=1;i <n; i++){
          str+="-"+e._id[keys[i]];
        }
        e._id=str;
      }
      return e
    },
    destroy: function() {
      var t, e = this.series.chart,
        i = e.hoverPoints;
      e.pointCount--, i && (this.setState(), h(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (Ve(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this);
      for (t in this) this[t] = null
    },
    destroyElements: function() {
      for (var t, e = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), i = 6; i--;) t = e[i], this[t] && (this[t] = this[t].destroy())
    },
    getLabelConfig: function() {
      return {
        x: this.category,
        y: this.y,
        color: this.color,
        key: this._id || this.category,
        series: this.series,
        point: this,
        percentage: this.percentage,
        total: this.total || this.stackTotal
      }
    },
    tooltipFormatter: function(t) {
      var e = this.series,
        i = e.tooltipOptions,
        n = Be(i.valueDecimals, ""),
        s = i.valuePrefix || "",
        o = i.valueSuffix || "";
      return Xe(e.pointArrayMap || ["y"], function(e) {
        e = "{point." + e, (s || o) && (t = t.replace(e + "}", s + e + "}" + o)), t = t.replace(e + "}", e + ":,." + n + "f}")
      }), y(t, {
        point: this,
        series: this.series
      })
    },
    firePointEvent: function(t, e, i) {
      var n = this,
        s = this.series.options;
      (s.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && s.allowPointSelect && (i = function(t) {
        n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
      }), je(this, t, e, i)
    }
  };
  var di = ie.Series = function() {};
  di.prototype = {
    isCartesian: !0,
    type: "line",
    pointClass: ci,
    sorted: !0,
    requireSorting: !0,
    pointAttrToOptions: {
      stroke: "lineColor",
      "stroke-width": "lineWidth",
      fill: "fillColor",
      r: "radius"
    },
    axisTypes: ["xAxis", "yAxis"],
    colorCounter: 0,
    parallelArrays: ["x", "y"],
    init: function(t, e) {
      var i, n, s = this,
        o = t.series,
        r = function(t, e) {
          return Be(t.options.index, t._i) - Be(e.options.index, e._i)
        };
      s.chart = t, s.options = e = s.setOptions(e), s.linkedSeries = [], s.bindAxes(), Oe(s, {
        _id: e._id,
        state: "",
        pointAttr: {},
        visible: !1 !== e.visible,
        selected: !0 === e.selected
      }), Te && (e.animation = !1), n = e.events;
      for (i in n) _e(s, i, n[i]);
      (n && n.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), s.getColor(), s.getSymbol(), Xe(s.parallelArrays, function(t) {
        s[t + "Data"] = []
      }), s.setData(e.data, !1), s.isCartesian && (t.hasCartesianSeries = !0), o.push(s), s._i = o.length - 1, b(o, r), this.yAxis && b(this.yAxis.series, r), Xe(o, function(t, e) {
        t.index = e, t._id = t._id || "Series " + (e + 1)
      })
    },
    bindAxes: function() {
      var t, e = this,
        i = e.options,
        n = e.chart;
      Xe(e.axisTypes || [], function(s) {
        Xe(n[s], function(n) {
          t = n.options, (i[s] === t.index || i[s] !== I && i[s] === t.id || i[s] === I && 0 === t.index) && (n.series.push(e), e[s] = n, n.isDirty = !0)
        }), e[s] || e.optionalAxis === s || A(18, !0)
      })
    },
    updateParallelArrays: function(t, e) {
      var i = t.series,
        n = arguments;
      Xe(i.parallelArrays, "number" == typeof e ? function(n) {
        var s = "y" === n && i.toYData ? i.toYData(t) : t[n];
        i[n + "Data"][e] = s
      } : function(t) {
        Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
      })
    },
    autoIncrement: function() {
      var t, e = this.options,
        i = this.xIncrement,
        n = e.pointIntervalUnit,
        i = Be(i, e.pointStart, 0);
      return this.pointInterval = t = Be(this.pointInterval, e.pointInterval, 1), ("month" === n || "year" === n) && (e = new F(i), e = "month" === n ? +e[te](e[U]() + t) : +e[ee](e[K]() + t), t = e - i), this.xIncrement = i + t, i
    },
    getSegments: function() {
      var t, e = -1,
        i = [],
        n = this.points,
        s = n.length;
      if (s)
        if (this.options.connectNulls) {
          for (t = s; t--;) null === n[t].y && n.splice(t, 1);
          n.length && (i = [n])
        } else Xe(n, function(t, o) {
          null === t.y ? (o > e + 1 && i.push(n.slice(e + 1, o)), e = o) : o === s - 1 && i.push(n.slice(e + 1, o + 1))
        });
      this.segments = i
    },
    setOptions: function(e) {
      var i = this.chart,
        n = i.options.plotOptions,
        i = i.userOptions || {},
        s = i.plotOptions || {},
        o = n[this.type];
      return this.userOptions = e, n = t(o, n.series, e), this.tooltipOptions = t(R.tooltip, R.plotOptions[this.type].tooltip, i.tooltip, s.series && s.series.tooltip, s[this.type] && s[this.type].tooltip, e.tooltip), null === o.marker && delete n.marker, this.zoneAxis = n.zoneAxis, e = this.zones = (n.zones || []).slice(), !n.negativeColor && !n.negativeFillColor || n.zones || e.push({
        value: n[this.zoneAxis + "Threshold"] || n.threshold || 0,
        color: n.negativeColor,
        fillColor: n.negativeFillColor
      }), e.length && l(e[e.length - 1].value) && e.push({
        color: this.color,
        fillColor: this.fillColor
      }), n
    },
    getCyclic: function(t, e, i) {
      var n = this.userOptions,
        s = "_" + t + "Index",
        o = t + "Counter";
      e || (l(n[s]) ? e = n[s] : (n[s] = e = this.chart[o] % i.length, this.chart[o] += 1), e = i[e]), this[t] = e
    },
    getColor: function() {
      this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || Ze[this.type].color, this.chart.options.colors)
    },
    getSymbol: function() {
      var t = this.options.marker;
      this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
    },
    drawLegendSymbol: hi.drawLineMarker,
    setData: function(t, e, n, r) {
      var a, h = this,
        c = h.points,
        d = c && c.length || 0,
        p = h.options,
        u = h.chart,
        g = null,
        f = h.xAxis,
        m = f && !!f.categories,
        x = p.turboThreshold,
        y = this.xData,
        v = this.yData,
        b = (a = h.pointArrayMap) && a.length;
      if (t = t || [], a = t.length, e = Be(e, !0), !1 !== r && a && d === a && !h.cropped && !h.hasGroupedData && h.visible) Xe(t, function(t, e) {
        c[e].update && c[e].update(t, !1, null, !1)
      });
      else {
        if (h.xIncrement = null, h.pointRange = m ? 1 : p.pointRange, h.colorCounter = 0, Xe(this.parallelArrays, function(t) {
            h[t + "Data"].length = 0
          }), x && a > x) {
          for (n = 0; null === g && a > n;) g = t[n], n++;
          if (o(g)) {
            for (m = Be(p.pointStart, 0), p = Be(p.pointInterval, 1), n = 0; a > n; n++) y[n] = m, v[n] = t[n], m += p;
            h.xIncrement = m
          } else if (s(g))
            if (b)
              for (n = 0; a > n; n++) p = t[n], y[n] = p[0], v[n] = p.slice(1, b + 1);
            else
              for (n = 0; a > n; n++) p = t[n], y[n] = p[0], v[n] = p[1];
          else A(12)
        } else
          for (n = 0; a > n; n++) t[n] !== I && (p = {
            series: h
          }, h.pointClass.prototype.applyOptions.apply(p, [t[n]]), h.updateParallelArrays(p, n), m && l(p._id) && (f.names[p.x] = p._id));
        for (i(v[0]) && A(14, !0), h.data = [], h.options.data = t, n = d; n--;) c[n] && c[n].destroy && c[n].destroy();
        f && (f.minRange = f.userMinRange), h.isDirty = h.isDirtyData = u.isDirtyBox = !0, n = !1
      }
      e && u.redraw(n)
    },
    processData: function(t) {
      var e, i = this.xData,
        n = this.yData,
        s = i.length;
      e = 0;
      var o, r, a, h = this.xAxis,
        l = this.options;
      a = l.cropThreshold;
      var c, d, p = this.isCartesian;
      if (p && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !t) return !1;
      for (h && (t = h.getExtremes(), c = t.min, d = t.max), p && this.sorted && (!a || s > a || this.forceCrop) && (i[s - 1] < c || i[0] > d ? (i = [], n = []) : (i[0] < c || i[s - 1] > d) && (e = this.cropData(this.xData, this.yData, c, d), i = e.xData, n = e.yData, e = e.start, o = !0)), a = i.length - 1; a >= 0; a--) s = i[a] - i[a - 1], s > 0 && (r === I || r > s) ? r = s : 0 > s && this.requireSorting && A(15);
      this.cropped = o, this.cropStart = e, this.processedXData = i, this.processedYData = n, null === l.pointRange && (this.pointRange = r || 1), this.closestPointRange = r
    },
    cropData: function(t, e, i, n) {
      var s, o = t.length,
        r = 0,
        a = o,
        h = Be(this.cropShoulder, 1);
      for (s = 0; o > s; s++)
        if (t[s] >= i) {
          r = le(0, s - h);
          break
        }
      for (; o > s; s++)
        if (t[s] > n) {
          a = s + h;
          break
        }
      return {
        xData: t.slice(r, a),
        yData: e.slice(r, a),
        start: r,
        end: a
      }
    },
    generatePoints: function() {
      var t, e, i, n, s = this.options.data,
        o = this.data,
        r = this.processedXData,
        a = this.processedYData,
        h = this.pointClass,
        l = r.length,
        c = this.cropStart || 0,
        p = this.hasGroupedData,
        u = [];
      for (o || p || (o = [], o.length = s.length, o = this.data = o), n = 0; l > n; n++) e = c + n, p ? u[n] = (new h).init(this, [r[n]].concat(d(a[n]))) : (o[e] ? i = o[e] : s[e] !== I && (o[e] = i = (new h).init(this, s[e], r[n])), u[n] = i), u[n].index = e;
      if (o && (l !== (t = o.length) || p))
        for (n = 0; t > n; n++) n !== c || p || (n += l), o[n] && (o[n].destroyElements(), o[n].plotX = I);
      this.data = o, this.points = u
    },
    getExtremes: function(t) {
      var e, i = this.yAxis,
        n = this.processedXData,
        s = [],
        o = 0;
      e = this.xAxis.getExtremes();
      var r, a, h, l, c = e.min,
        d = e.max;
      for (t = t || this.stackedYData || this.processedYData, e = t.length, l = 0; e > l; l++)
        if (a = n[l], h = t[l], r = null !== h && h !== I && (!i.isLog || h.length || h > 0), a = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (n[l + 1] || a) >= c && (n[l - 1] || a) <= d, r && a)
          if (r = h.length)
            for (; r--;) null !== h[r] && (s[o++] = h[r]);
          else s[o++] = h;
      this.dataMin = k(s), this.dataMax = w(s)
    },
    translate: function() {
      this.processedXData || this.processData(), this.generatePoints();
      for (var t, e, i, n = this.options, s = n.stacking, r = this.xAxis, a = r.categories, h = this.yAxis, c = this.points, d = c.length, p = !!this.modifyValue, u = n.pointPlacement, g = "between" === u || o(u), f = n.threshold, m = n.startFromThreshold ? f : 0, x = Number.MAX_VALUE, n = 0; d > n; n++) {
        var y = c[n],
          v = y.x,
          b = y.y;
        e = y.low;
        var k = s && h.stacks[(this.negStacks && (m ? 0 : f) > b ? "-" : "") + this.stackKey];
        h.isLog && null !== b && 0 >= b && (y.y = b = null, A(10)), y.plotX = t = ce(le(-1e5, r.translate(v, 0, 0, 0, 1, u, "flags" === this.type)), 1e5), s && this.visible && k && k[v] && (k = k[v], b = k.points[this.index + "," + n], e = b[0], b = b[1], e === m && (e = Be(f, h.min)), h.isLog && 0 >= e && (e = null), y.total = y.stackTotal = k.total, y.percentage = k.total && y.y / k.total * 100, y.stackY = b, k.setOffset(this.pointXOffset || 0, this.barW || 0)), y.yBottom = l(e) ? h.translate(e, 0, 1, 0, 1) : null, p && (b = this.modifyValue(b, y)), y.plotY = e = "number" == typeof b && 1 / 0 !== b ? ce(le(-1e5, h.translate(b, 0, 1, 0, 1)), 1e5) : I, y.isInside = e !== I && e >= 0 && e <= h.len && t >= 0 && t <= r.len, y.clientX = g ? r.translate(v, 0, 0, 0, 1) : t, y.negative = y.y < (f || 0), y.category = a && a[y.x] !== I ? a[y.x] : y.x, n && (x = ce(x, de(t - i))), i = t
      }
      this.closestPointRangePx = x, this.getSegments()
    },
    setClip: function(t) {
      var e = this.chart,
        i = e.renderer,
        n = e.inverted,
        s = this.clipBox,
        o = s || e.clipBox,
        r = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, o.height].join(),
        a = e[r],
        h = e[r + "m"];
      a || (t && (o.width = 0, e[r + "m"] = h = i.clipRect(-99, n ? -e.plotLeft : -e.plotTop, 99, n ? e.chartWidth : e.chartHeight)), e[r] = a = i.clipRect(o)), t && (a.count += 1), !1 !== this.options.clip && (this.group.clip(t || s ? a : e.clipRect), this.markerGroup.clip(h), this.sharedClipKey = r), t || (--a.count, 0 >= a.count && r && e[r] && (s || (e[r] = e[r].destroy()), e[r + "m"] && (e[r + "m"] = e[r + "m"].destroy())))
    },
    animate: function(t) {
      var e, i = this.chart,
        s = this.options.animation;
      s && !n(s) && (s = Ze[this.type].animation), t ? this.setClip(s) : (e = this.sharedClipKey, (t = i[e]) && t.animate({
        width: i.plotSizeX
      }, s), i[e + "m"] && i[e + "m"].animate({
        width: i.plotSizeX + 99
      }, s), this.animate = null)
    },
    afterAnimate: function() {
      this.setClip(), je(this, "afterAnimate")
    },
    drawPoints: function() {
      var t, e, i, n, s, o, r, a, h, l, c, d, p = this.points,
        u = this.chart,
        g = this.options.marker,
        f = this.pointAttr[""],
        m = this.markerGroup,
        x = Be(g.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * g.radius);
      if (!1 !== g.enabled || this._hasPointMarkers)
        for (n = p.length; n--;) s = p[n], e = ae(s.plotX), i = s.plotY, h = s.graphic, l = s.marker || {}, c = !!s.marker, t = x && l.enabled === I || l.enabled, d = s.isInside, t && i !== I && !isNaN(i) && null !== s.y ? (t = s.pointAttr[s.selected ? "select" : ""] || f, o = t.r, r = Be(l.symbol, this.symbol), a = 0 === r.indexOf("url"), h ? h[d ? "show" : "hide"](!0).animate(Oe({
          x: e - o,
          y: i - o
        }, h.symbolName ? {
          width: 2 * o,
          height: 2 * o
        } : {})) : d && (o > 0 || a) && (s.graphic = u.renderer.symbol(r, e - o, i - o, 2 * o, 2 * o, c ? l : g).attr(t).add(m))) : h && (s.graphic = h.destroy())
    },
    convertAttribs: function(t, e, i, n) {
      var s, o, r = this.pointAttrToOptions,
        a = {};
      t = t || {}, e = e || {}, i = i || {}, n = n || {};
      for (s in r) o = r[s], a[s] = Be(t[o], e[s], i[s], n[s]);
      return a
    },
    getAttribs: function() {
      var t, e = this,
        i = e.options,
        n = Ze[e.type].marker ? i.marker : i,
        s = n.states,
        o = s.hover,
        r = e.color,
        a = e.options.negativeColor;
      t = {
        stroke: r,
        fill: r
      };
      var h, c, d = e.points || [],
        p = [],
        u = e.pointAttrToOptions;
      h = e.hasPointSpecificOptions;
      var g = n.lineColor,
        f = n.fillColor;
      c = i.turboThreshold;
      var m, x = e.zones,
        y = e.zoneAxis || "y";
      if (i.marker ? (o.radius = o.radius || n.radius + o.radiusPlus, o.lineWidth = o.lineWidth || n.lineWidth + o.lineWidthPlus) : (o.color = o.color || ei(o.color || r).brighten(o.brightness).get(), o.negativeColor = o.negativeColor || ei(o.negativeColor || a).brighten(o.brightness).get()), p[""] = e.convertAttribs(n, t), Xe(["hover", "select"], function(t) {
          p[t] = e.convertAttribs(s[t], p[""])
        }), e.pointAttr = p, r = d.length, !c || c > r || h)
        for (; r--;) {
          if (c = d[r], (n = c.options && c.options.marker || c.options) && !1 === n.enabled && (n.radius = 0), x.length) {
            for (h = 0, t = x[h]; c[y] >= t.value;) t = x[++h];
            t.color && (c.color = c.fillColor = t.color)
          }
          if (h = i.colorByPoint || c.color, c.options)
            for (m in u) l(n[u[m]]) && (h = !0);
          h ? (n = n || {}, h = [], s = n.states || {}, t = s.hover = s.hover || {}, i.marker || (t.color = t.color || !c.options.color && o[c.negative && a ? "negativeColor" : "color"] || ei(c.color).brighten(t.brightness || o.brightness).get()), t = {
            color: c.color
          }, f || (t.fillColor = c.color), g || (t.lineColor = c.color), n.hasOwnProperty("color") && !n.color && delete n.color, h[""] = e.convertAttribs(Oe(t, n), p[""]), h.hover = e.convertAttribs(s.hover, p.hover, h[""]), h.select = e.convertAttribs(s.select, p.select, h[""])) : h = p, c.pointAttr = h
        }
    },
    destroy: function() {
      var t, e, i, n, s = this,
        o = s.chart,
        r = /AppleWebKit\/533/.test(me),
        a = s.data || [];
      for (je(s, "destroy"), Ve(s), Xe(s.axisTypes || [], function(t) {
          (n = s[t]) && (h(n.series, s), n.isDirty = n.forceRedraw = !0)
        }), s.legendItem && s.chart.legend.destroyItem(s), t = a.length; t--;)(e = a[t]) && e.destroy && e.destroy();
      s.points = null, clearTimeout(s.animationTimeout);
      for (i in s) s[i] instanceof M && !s[i].survive && (t = r && "group" === i ? "hide" : "destroy", s[i][t]());
      o.hoverSeries === s && (o.hoverSeries = null), h(o.series, s);
      for (i in s) delete s[i]
    },
    getSegmentPath: function(t) {
      var e = this,
        i = [],
        n = e.options.step;
      return Xe(t, function(s, o) {
        var r, a = s.plotX,
          h = s.plotY;
        e.getPointSpline ? i.push.apply(i, e.getPointSpline(t, s, o)) : (i.push(o ? "L" : "M"), n && o && (r = t[o - 1], "right" === n ? i.push(r.plotX, h) : "center" === n ? i.push((r.plotX + a) / 2, r.plotY, (r.plotX + a) / 2, h) : i.push(a, r.plotY)), i.push(s.plotX, s.plotY))
      }), i
    },
    getGraphPath: function() {
      var t, e = this,
        i = [],
        n = [];
      return Xe(e.segments, function(s) {
        t = e.getSegmentPath(s), 1 < s.length ? i = i.concat(t) : n.push(s[0])
      }), e.singlePoints = n, e.graphPath = i
    },
    drawGraph: function() {
      var t = this,
        e = this.options,
        i = [
          ["graph", e.lineColor || this.color, e.dashStyle]
        ],
        n = e.lineWidth,
        s = "square" !== e.linecap,
        o = this.getGraphPath(),
        r = this.fillGraph && this.color || "none";
      Xe(this.zones, function(n, s) {
        i.push(["zoneGraph" + s, n.color || t.color, n.dashStyle || e.dashStyle])
      }), Xe(i, function(i, a) {
        var h = i[0],
          l = t[h];
        l ? l.animate({
          d: o
        }) : (n || r) && o.length && (l = {
          stroke: i[1],
          "stroke-width": n,
          fill: r,
          zIndex: 1
        }, i[2] ? l.dashstyle = i[2] : s && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), t[h] = t.chart.renderer.path(o).attr(l).add(t.group).shadow(2 > a && e.shadow))
      })
    },
    applyZones: function() {
      var t, e, i, n, s, o, r, a = this,
        h = this.chart,
        l = h.renderer,
        c = this.zones,
        d = this.clips || [],
        p = this.graph,
        u = this.area,
        g = le(h.chartWidth, h.chartHeight),
        f = this[(this.zoneAxis || "y") + "Axis"],
        m = f.reversed,
        x = h.inverted,
        y = f.horiz,
        v = !1;
      c.length && (p || u) && f.min !== I && (p && p.hide(), u && u.hide(), n = f.getExtremes(), Xe(c, function(c, b) {
        t = m ? y ? h.plotWidth : 0 : y ? 0 : f.toPixels(n.min), t = ce(le(Be(e, t), 0), g), e = ce(le(re(f.toPixels(Be(c.value, n.max), !0)), 0), g), v && (t = e = f.toPixels(n.max)), s = Math.abs(t - e), o = ce(t, e), r = le(t, e), f.isXAxis ? (i = {
          x: x ? r : o,
          y: 0,
          width: s,
          height: g
        }, y || (i.x = h.plotHeight - i.x)) : (i = {
          x: 0,
          y: x ? r : o,
          width: g,
          height: s
        }, y && (i.y = h.plotWidth - i.y)), h.inverted && l.isVML && (i = f.isXAxis ? {
          x: 0,
          y: m ? o : r,
          height: i.width,
          width: h.chartWidth
        } : {
          x: i.y - h.plotLeft - h.spacingBox.x,
          y: 0,
          width: i.height,
          height: h.chartHeight
        }), d[b] ? d[b].animate(i) : (d[b] = l.clipRect(i), p && a["zoneGraph" + b].clip(d[b]), u && a["zoneArea" + b].clip(d[b])), v = c.value > n.max
      }), this.clips = d)
    },
    invertGroups: function() {
      function t() {
        var t = {
          width: e.yAxis.len,
          height: e.xAxis.len
        };
        Xe(["group", "markerGroup"], function(i) {
          e[i] && e[i].attr(t).invert()
        })
      }
      var e = this,
        i = e.chart;
      e.xAxis && (_e(i, "resize", t), _e(e, "destroy", function() {
        Ve(i, "resize", t)
      }), t(), e.invertGroups = t)
    },
    plotGroup: function(t, e, i, n, s) {
      var o = this[t],
        r = !o;
      return r && (this[t] = o = this.chart.renderer.g(e).attr({
        visibility: i,
        zIndex: n || .1
      }).add(s)), o[r ? "attr" : "animate"](this.getPlotBox()), o
    },
    getPlotBox: function() {
      var t = this.chart,
        e = this.xAxis,
        i = this.yAxis;
      return t.inverted && (e = i, i = this.xAxis), {
        translateX: e ? e.left : t.plotLeft,
        translateY: i ? i.top : t.plotTop,
        scaleX: 1,
        scaleY: 1
      }
    },
    render: function() {
      var t, e = this,
        i = e.chart,
        n = e.options,
        s = (t = n.animation) && !!e.animate && i.renderer.isSVG && Be(t.duration, 500) || 0,
        o = e.visible ? "visible" : "hidden",
        r = n.zIndex,
        a = e.hasRendered,
        h = i.seriesGroup;
      t = e.plotGroup("group", "series", o, r, h), e.markerGroup = e.plotGroup("markerGroup", "markers", o, r, h), s && e.animate(!0), e.getAttribs(), t.inverted = e.isCartesian ? i.inverted : !1, e.drawGraph && (e.drawGraph(), e.applyZones()), Xe(e.points, function(t) {
        t.redraw && t.redraw()
      }), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), i.inverted && e.invertGroups(), !1 === n.clip || e.sharedClipKey || a || t.clip(i.clipRect), s && e.animate(), a || (s ? e.animationTimeout = setTimeout(function() {
        e.afterAnimate()
      }, s) : e.afterAnimate()), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
    },
    redraw: function() {
      var t = this.chart,
        e = this.isDirtyData,
        i = this.isDirty,
        n = this.group,
        s = this.xAxis,
        o = this.yAxis;
      n && (t.inverted && n.attr({
        width: t.plotWidth,
        height: t.plotHeight
      }), n.animate({
        translateX: Be(s && s.left, t.plotLeft),
        translateY: Be(o && o.top, t.plotTop)
      })), this.translate(), this.render(), e && je(this, "updatedData"), (i || e) && delete this.kdTree
    },
    kdDimensions: 1,
    kdAxisArray: ["clientX", "plotY"],
    searchPoint: function(t, e) {
      var i = this.xAxis,
        n = this.yAxis,
        s = this.chart.inverted;
      return this.searchKDTree({
        clientX: s ? i.len - t.chartY + i.pos : t.chartX - i.pos,
        plotY: s ? n.len - t.chartX + n.pos : t.chartY - n.pos
      }, e)
    },
    buildKDTree: function() {
      function t(e, n, s) {
        var o, r;
        return (r = e && e.length) ? (o = i.kdAxisArray[n % s], e.sort(function(t, e) {
          return t[o] - e[o]
        }), r = Math.floor(r / 2), {
          point: e[r],
          left: t(e.slice(0, r), n + 1, s),
          right: t(e.slice(r + 1), n + 1, s)
        }) : void 0
      }

      function e() {
        var e = Ge(i.points || [], function(t) {
          return null !== t.y
        });
        i.kdTree = t(e, n, n)
      }
      var i = this,
        n = i.kdDimensions;
      delete i.kdTree, i.options.kdSync ? e() : setTimeout(e)
    },
    searchKDTree: function(t, e) {
      function i(t, e, a, h) {
        var c, d, p = e.point,
          u = n.kdAxisArray[a % h],
          g = p;
        return d = l(t[s]) && l(p[s]) ? Math.pow(t[s] - p[s], 2) : null, c = l(t[o]) && l(p[o]) ? Math.pow(t[o] - p[o], 2) : null, c = (d || 0) + (c || 0), p.dist = l(c) ? Math.sqrt(c) : Number.MAX_VALUE, p.distX = l(d) ? Math.sqrt(d) : Number.MAX_VALUE, u = t[u] - p[u], c = 0 > u ? "left" : "right", d = 0 > u ? "right" : "left", e[c] && (c = i(t, e[c], a + 1, h), g = c[r] < g[r] ? c : p), e[d] && Math.sqrt(u * u) < g[r] && (t = i(t, e[d], a + 1, h), g = t[r] < g[r] ? t : g), g
      }
      var n = this,
        s = this.kdAxisArray[0],
        o = this.kdAxisArray[1],
        r = e ? "distX" : "dist";
      return this.kdTree || this.buildKDTree(), this.kdTree ? i(t, this.kdTree, this.kdDimensions, this.kdDimensions) : void 0
    }
  }, z.prototype = {
    destroy: function() {
      S(this, this.axis)
    },
    render: function(t) {
      var e = this.options,
        i = e.format,
        i = i ? y(i, this) : e.formatter.call(this);
      this.label ? this.label.attr({
        text: i,
        visibility: "hidden"
      }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
        align: this.textAlign,
        rotation: e.rotation,
        visibility: "hidden"
      }).add(t)
    },
    setOffset: function(t, e) {
      var i = this.axis,
        n = i.chart,
        s = n.inverted,
        o = i.reversed,
        o = this.isNegative && !o || !this.isNegative && o,
        r = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
        i = i.translate(0),
        i = de(r - i),
        a = n.xAxis[0].translate(this.x) + t,
        h = n.plotHeight,
        o = {
          x: s ? o ? r : r - i : a,
          y: s ? h - a - e : o ? h - r - i : h - r,
          width: s ? i : e,
          height: s ? e : i
        };
      (s = this.label) && (s.align(this.alignOptions, null, o), o = s.alignAttr, s[!1 === this.options.crop || n.isInsidePlot(o.x, o.y) ? "show" : "hide"](!0))
    }
  }, li.prototype.getStacks = function() {
    var t = this;
    Xe(t.yAxis, function(t) {
      t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
    }), Xe(t.series, function(e) {
      !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + Be(e.options.stack, ""))
    })
  }, ni.prototype.buildStacks = function() {
    var t = this.series,
      e = Be(this.options.reversedStacks, !0),
      i = t.length;
    if (!this.isXAxis) {
      for (this.usePercentage = !1; i--;) t[e ? i : t.length - i - 1].setStackedPoints();
      if (this.usePercentage)
        for (i = 0; i < t.length; i++) t[i].setPercentStacks()
    }
  }, ni.prototype.renderStackTotals = function() {
    var t, e, i = this.chart,
      n = i.renderer,
      s = this.stacks,
      o = this.stackTotalGroup;
    o || (this.stackTotalGroup = o = n.g("stack-labels").attr({
      visibility: "visible",
      zIndex: 6
    }).add()), o.translate(i.plotLeft, i.plotTop);
    for (t in s)
      for (e in i = s[t]) i[e].render(o)
  }, ni.prototype.resetStacks = function() {
    var t, e, i = this.stacks;
    if (!this.isXAxis)
      for (t in i)
        for (e in i[t]) i[t][e].touched < this.stacksTouched ? (i[t][e].destroy(), delete i[t][e]) : (i[t][e].total = null, i[t][e].cum = 0)
  }, ni.prototype.cleanStacks = function() {
    var t, e, i;
    if (!this.isXAxis)
      for (e in this.oldStacks && (t = this.stacks = this.oldStacks), t)
        for (i in t[e]) t[e][i].cum = t[e][i].total
  }, di.prototype.setStackedPoints = function() {
    if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
      var t, e, i, n, s, o, r = this.processedXData,
        a = this.processedYData,
        h = [],
        l = a.length,
        c = this.options,
        d = c.threshold,
        p = c.startFromThreshold ? d : 0,
        u = c.stack,
        c = c.stacking,
        g = this.stackKey,
        f = "-" + g,
        m = this.negStacks,
        x = this.yAxis,
        y = x.stacks,
        v = x.oldStacks;
      for (x.stacksTouched += 1, n = 0; l > n; n++) s = r[n], o = a[n], i = this.index + "," + n, e = (t = m && (p ? 0 : d) > o) ? f : g, y[e] || (y[e] = {}), y[e][s] || (v[e] && v[e][s] ? (y[e][s] = v[e][s], y[e][s].total = null) : y[e][s] = new z(x, x.options.stackLabels, t, s, u)), e = y[e][s], e.points[i] = [Be(e.cum, p)], e.touched = x.stacksTouched, "percent" === c ? (t = t ? g : f, m && y[t] && y[t][s] ? (t = y[t][s], e.total = t.total = le(t.total, e.total) + de(o) || 0) : e.total = P(e.total + (de(o) || 0))) : e.total = P(e.total + (o || 0)), e.cum = Be(e.cum, p) + (o || 0), e.points[i].push(e.cum), h[n] = e.cum;
      "percent" === c && (x.usePercentage = !0), this.stackedYData = h, x.oldStacks = {}
    }
  }, di.prototype.setPercentStacks = function() {
    var t = this,
      e = t.stackKey,
      i = t.yAxis.stacks,
      n = t.processedXData;
    Xe([e, "-" + e], function(e) {
      for (var s, o, r = n.length; r--;) s = n[r], (s = (o = i[e] && i[e][s]) && o.points[t.index + "," + r]) && (o = o.total ? 100 / o.total : 0, s[0] = P(s[0] * o), s[1] = P(s[1] * o), t.stackedYData[r] = s[1])
    })
  }, Oe(li.prototype, {
    addSeries: function(t, e, i) {
      var n, s = this;
      return t && (e = Be(e, !0), je(s, "addSeries", {
        options: t
      }, function() {
        n = s.initSeries(t), s.isDirtyLegend = !0, s.linkSeries(), e && s.redraw(i)
      })), n
    },
    addAxis: function(e, i, n, s) {
      var o = i ? "xAxis" : "yAxis",
        r = this.options;
      new ni(this, t(e, {
        index: this[o].length,
        isX: i
      })), r[o] = d(r[o] || {}), r[o].push(e), Be(n, !0) && this.redraw(s)
    },
    showLoading: function(t) {
      var e = this,
        i = e.options,
        n = e.loadingDiv,
        s = i.loading,
        o = function() {
          n && p(n, {
            left: e.plotLeft + "px",
            top: e.plotTop + "px",
            width: e.plotWidth + "px",
            height: e.plotHeight + "px"
          })
        };
      n || (e.loadingDiv = n = u("div", {
        className: "highcharts-loading"
      }, Oe(s.style, {
        zIndex: 10,
        display: "none"
      }), e.container), e.loadingSpan = u("span", null, s.labelStyle, n), _e(e, "redraw", o)), e.loadingSpan.innerHTML = t || i.lang.loading, e.loadingShown || (p(n, {
        opacity: 0,
        display: ""
      }), Ke(n, {
        opacity: s.style.opacity
      }, {
        duration: s.showDuration || 0
      }), e.loadingShown = !0), o()
    },
    hideLoading: function() {
      var t = this.options,
        e = this.loadingDiv;
      e && Ke(e, {
        opacity: 0
      }, {
        duration: t.loading.hideDuration || 100,
        complete: function() {
          p(e, {
            display: "none"
          })
        }
      }), this.loadingShown = !1
    }
  }), Oe(ci.prototype, {
    update: function(t, e, i, o) {
      function r() {
        h.applyOptions(t), null === h.y && c && (h.graphic = c.destroy()), n(t) && !s(t) && (h.redraw = function() {
          c && c.element && t && t.marker && t.marker.symbol && (h.graphic = c.destroy()), t && t.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.redraw = null
        }), a = h.index, l.updateParallelArrays(h, a), u && h._id && (u[h.x] = h._id), p.data[a] = h.options, l.isDirty = l.isDirtyData = !0, !l.fixedBox && l.hasCartesianSeries && (d.isDirtyBox = !0), "point" === p.legendType && (d.isDirtyLegend = !0), e && d.redraw(i)
      }
      var a, h = this,
        l = h.series,
        c = h.graphic,
        d = l.chart,
        p = l.options,
        u = l.xAxis && l.xAxis.names;
      e = Be(e, !0), !1 === o ? r() : h.firePointEvent("update", {
        options: t
      }, r)
    },
    remove: function(t, e) {
      this.series.removePoint(Fe(this, this.series.data), t, e)
    }
  }), Oe(di.prototype, {
    addPoint: function(t, e, i, n) {
      var s, o = this,
        r = o.options,
        a = o.data,
        h = o.graph,
        l = o.area,
        c = o.chart,
        d = o.xAxis && o.xAxis.names,
        p = h && h.shift || 0,
        u = ["graph", "area"],
        h = r.data,
        g = o.xData;
      if (C(n, c), i) {
        for (n = o.zones.length; n--;) u.push("zoneGraph" + n, "zoneArea" + n);
        Xe(u, function(t) {
          o[t] && (o[t].shift = p + 1)
        })
      }
      if (l && (l.isArea = !0), e = Be(e, !0), l = {
          series: o
        }, o.pointClass.prototype.applyOptions.apply(l, [t]), u = l.x, n = g.length, o.requireSorting && u < g[n - 1])
        for (s = !0; n && g[n - 1] > u;) n--;
      o.updateParallelArrays(l, "splice", n, 0, 0), o.updateParallelArrays(l, n), d && l._id && (d[u] = l._id), h.splice(n, 0, t), s && (o.data.splice(n, 0, null), o.processData()), "point" === r.legendType && o.generatePoints(), i && (a[0] && a[0].remove ? a[0].remove(!1) : (a.shift(), o.updateParallelArrays(l, "shift"), h.shift())), o.isDirty = !0, o.isDirtyData = !0, e && (o.getAttribs(), c.redraw())
    },
    removePoint: function(t, e, i) {
      var n = this,
        s = n.data,
        o = s[t],
        r = n.points,
        a = n.chart,
        h = function() {
          s.length === r.length && r.splice(t, 1), s.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(o || {
            series: n
          }, "splice", t, 1), o && o.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && a.redraw()
        };
      C(i, a), e = Be(e, !0), o ? o.firePointEvent("remove", null, h) : h()
    },
    remove: function(t, e) {
      var i = this,
        n = i.chart;
      t = Be(t, !0), i.isRemoving || (i.isRemoving = !0, je(i, "remove", null, function() {
        i.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), t && n.redraw(e)
      })), i.isRemoving = !1
    },
    update: function(e, i) {
      var n, s = this,
        o = this.chart,
        r = this.userOptions,
        a = this.type,
        h = Ie[a].prototype,
        l = ["group", "markerGroup", "dataLabelsGroup"];
      (e.type && e.type !== a || void 0 !== e.zIndex) && (l.length = 0), Xe(l, function(t) {
        l[t] = s[t], delete s[t]
      }), e = t(r, {
        animation: !1,
        index: this.index,
        pointStart: this.xData[0]
      }, {
        data: this.options.data
      }, e), this.remove(!1);
      for (n in h) this[n] = I;
      Oe(this, Ie[e.type || a].prototype), Xe(l, function(t) {
        s[t] = l[t]
      }), this.init(o, e), o.linkSeries(), Be(i, !0) && o.redraw(!1)
    }
  }), Oe(ni.prototype, {
    update: function(e, i) {
      var n = this.chart;
      e = n.options[this.coll][this.options.index] = t(this.userOptions, e), this.destroy(!0), this._addedPlotLB = this.chart._labelPanes = I, this.init(n, Oe(e, {
        events: I
      })), n.isDirtyBox = !0, Be(i, !0) && n.redraw()
    },
    remove: function(t) {
      for (var e = this.chart, i = this.coll, n = this.series, s = n.length; s--;) n[s] && n[s].remove(!1);
      h(e.axes, this), h(e[i], this), e.options[i].splice(this.options.index, 1), Xe(e[i], function(t, e) {
        t.options.index = e
      }), this.destroy(), e.isDirtyBox = !0, Be(t, !0) && e.redraw()
    },
    setTitle: function(t, e) {
      this.update({
        title: t
      }, e)
    },
    setCategories: function(t, e) {
      this.update({
        categories: t
      }, e)
    }
  });
  var pi = g(di);
  Ie.line = pi, Ze.spline = t(qe);
  var ui = g(di, {
    type: "spline",
    getPointSpline: function(t, e, i) {
      var n, s, o, r, a = e.plotX,
        h = e.plotY,
        l = t[i - 1],
        c = t[i + 1];
      if (l && c) {
        t = l.plotY, o = c.plotX;
        var d, c = c.plotY;
        n = (1.5 * a + l.plotX) / 2.5, s = (1.5 * h + t) / 2.5, o = (1.5 * a + o) / 2.5, r = (1.5 * h + c) / 2.5, d = (r - s) * (o - a) / (o - n) + h - r, s += d, r += d, s > t && s > h ? (s = le(t, h), r = 2 * h - s) : t > s && h > s && (s = ce(t, h), r = 2 * h - s), r > c && r > h ? (r = le(c, h), s = 2 * h - r) : c > r && h > r && (r = ce(c, h), s = 2 * h - r), e.rightContX = o, e.rightContY = r
      }
      return i ? (e = ["C", l.rightContX || l.plotX, l.rightContY || l.plotY, n || a, s || h, a, h], l.rightContX = l.rightContY = null) : e = ["M", a, h], e
    }
  });
  Ie.spline = ui, Ze.column = t(qe, {
    borderColor: "#FFFFFF",
    borderRadius: 0,
    groupPadding: .2,
    marker: null,
    pointPadding: .1,
    minPointLength: 0,
    cropThreshold: 50,
    pointRange: null,
    states: {
      hover: {
        brightness: .1,
        shadow: !1,
        halo: !1
      },
      select: {
        color: "#C0C0C0",
        borderColor: "#000000",
        shadow: !1
      }
    },
    dataLabels: {
      align: null,
      verticalAlign: null,
      y: null
    },
    startFromThreshold: !0,
    stickyTracking: !1,
    tooltip: {
      distance: 6
    },
    threshold: 0
  });
  var gi = g(di, {
    type: "column",
    pointAttrToOptions: {
      stroke: "borderColor",
      fill: "color",
      r: "borderRadius"
    },
    cropShoulder: 0,
    directTouch: !0,
    trackerGroups: ["group", "dataLabelsGroup"],
    negStacks: !0,
    init: function() {
      di.prototype.init.apply(this, arguments);
      var t = this,
        e = t.chart;
      e.hasRendered && Xe(e.series, function(e) {
        e.type === t.type && (e.isDirty = !0)
      })
    },
    getColumnMetrics: function() {
      var t, e, i = this,
        n = i.options,
        s = i.xAxis,
        o = i.yAxis,
        r = s.reversed,
        a = {},
        h = 0;
      !1 === n.grouping ? h = 1 : Xe(i.chart.series, function(n) {
        var s = n.options,
          r = n.yAxis;
        n.type === i.type && n.visible && o.len === r.len && o.pos === r.pos && (s.stacking ? (t = n.stackKey, a[t] === I && (a[t] = h++), e = a[t]) : !1 !== s.grouping && (e = h++), n.columnIndex = e)
      });
      var l = ce(de(s.transA) * (s.ordinalSlope || n.pointRange || s.closestPointRange || s.tickInterval || 1), s.len),
        c = l * n.groupPadding,
        d = (l - 2 * c) / h,
        n = ce(n.maxPointWidth || s.len, Be(n.pointWidth, d * (1 - 2 * n.pointPadding)));
      return i.columnMetrics = {
        width: n,
        offset: (d - n) / 2 + (c + ((r ? h - (i.columnIndex || 0) : i.columnIndex) || 0) * d - l / 2) * (r ? -1 : 1)
      }
    },
    translate: function() {
      var t = this,
        e = t.chart,
        i = t.options,
        n = t.borderWidth = Be(i.borderWidth, 2 > t.closestPointRange * t.xAxis.transA ? 0 : 1),
        s = t.yAxis,
        o = t.translatedThreshold = s.getThreshold(i.threshold),
        r = Be(i.minPointLength, 5),
        a = t.getColumnMetrics(),
        h = a.width,
        l = t.barW = le(h, 1 + 2 * n),
        c = t.pointXOffset = a.offset,
        d = -(n % 2 ? .5 : 0),
        p = n % 2 ? .5 : 1;
      e.inverted && (o -= .5, e.renderer.isVML && (p += 1)), i.pointPadding && (l = he(l)), di.prototype.translate.apply(t), Xe(t.points, function(i) {
        var n, a, u = Be(i.yBottom, o),
          g = 999 + de(u),
          g = ce(le(-g, i.plotY), s.len + g),
          f = i.plotX + c,
          m = l,
          x = ce(g, u);
        n = le(g, u) - x, de(n) < r && r && (n = r, a = !s.reversed && !i.negative || s.reversed && i.negative, x = re(de(x - o) > r ? u - r : o - (a ? r : 0))), i.barX = f, i.pointWidth = h, m = re(f + m) + d, f = re(f) + d, m -= f, u = .5 > de(x), n = ce(re(x + n) + p, 9e4), x = re(x) + p, n -= x, u && (--x, n += 1), i.tooltipPos = e.inverted ? [s.len + s.pos - e.plotLeft - g, t.xAxis.len - f - m / 2, n] : [f + m / 2, g + s.pos - e.plotTop, n], i.shapeType = "rect", i.shapeArgs = {
          x: f,
          y: x,
          width: m,
          height: n
        }
      })
    },
    getSymbol: Ce,
    drawLegendSymbol: hi.drawRectangle,
    drawGraph: Ce,
    drawPoints: function() {
      var e, i, n = this,
        s = this.chart,
        o = n.options,
        r = s.renderer,
        a = o.animationLimit || 250;
      Xe(n.points, function(h) {
        var c = h.plotY,
          d = h.graphic;
        c === I || isNaN(c) || null === h.y ? d && (h.graphic = d.destroy()) : (e = h.shapeArgs, c = l(n.borderWidth) ? {
          "stroke-width": n.borderWidth
        } : {}, i = h.pointAttr[h.selected ? "select" : ""] || n.pointAttr[""], d ? ($e(d), d.attr(c)[s.pointCount < a ? "animate" : "attr"](t(e))) : h.graphic = r[h.shapeType](e).attr(c).attr(i).add(n.group).shadow(o.shadow, null, o.stacking && !o.borderRadius))
      })
    },
    animate: function(t) {
      var e = this.yAxis,
        i = this.options,
        n = this.chart.inverted,
        s = {};
      we && (t ? (s.scaleY = .001, t = ce(e.pos + e.len, le(e.pos, e.toPixels(i.threshold))), n ? s.translateX = t - e.len : s.translateY = t, this.group.attr(s)) : (s.scaleY = 1, s[n ? "translateX" : "translateY"] = e.pos, this.group.animate(s, this.options.animation), this.animate = null))
    },
    remove: function() {
      var t = this,
        e = t.chart;
      e.hasRendered && Xe(e.series, function(e) {
        e.type === t.type && (e.isDirty = !0)
      }), di.prototype.remove.apply(t, arguments)
    }
  });
  Ie.column = gi, di.prototype.drawDataLabels = function() {
    var e, i, n, s, o = this,
      r = o.options,
      a = r.cursor,
      h = r.dataLabels,
      c = o.points,
      d = o.hasRendered || 0,
      p = o.chart.renderer;
    (h.enabled || o._hasPointLabels) && (o.dlProcessOptions && o.dlProcessOptions(h), s = o.plotGroup("dataLabelsGroup", "data-labels", h.defer ? "hidden" : "visible", h.zIndex || 6), Be(h.defer, !0) && (s.attr({
      opacity: +d
    }), d || _e(o, "afterAnimate", function() {
      o.visible && s.show(), s[r.animation ? "animate" : "attr"]({
        opacity: 1
      }, {
        duration: 200
      })
    })), i = h, Xe(c, function(c) {
      var d, u, g, f, m = c.dataLabel,
        x = c.connector,
        v = !0,
        b = {};
      if (e = c.dlOptions || c.options && c.options.dataLabels, d = Be(e && e.enabled, i.enabled), m && !d) c.dataLabel = m.destroy();
      else if (d) {
        if (h = t(i, e), f = h.style, d = h.rotation, u = c.getLabelConfig(), n = h.format ? y(h.format, u) : h.formatter.call(u, h), f.color = Be(h.color, f.color, o.color, "black"), m) l(n) ? (m.attr({
          text: n
        }), v = !1) : (c.dataLabel = m = m.destroy(), x && (c.connector = x.destroy()));
        else if (l(n)) {
          m = {
            fill: h.backgroundColor,
            stroke: h.borderColor,
            "stroke-width": h.borderWidth,
            r: h.borderRadius || 0,
            rotation: d,
            padding: h.padding,
            zIndex: 1
          }, "contrast" === f.color && (b.color = h.inside || 0 > h.distance || r.stacking ? p.getContrast(c.color || o.color) : "#000000"), a && (b.cursor = a);
          for (g in m) m[g] === I && delete m[g];
          m = c.dataLabel = p[d ? "text" : "label"](n, 0, -999, h.shape, null, null, h.useHTML).attr(m).css(Oe(f, b)).add(s).shadow(h.shadow)
        }
        m && o.alignDataLabel(c, m, h, null, v)
      }
    }))
  }, di.prototype.alignDataLabel = function(t, e, i, n, s) {
    var o = this.chart,
      r = o.inverted,
      a = Be(t.plotX, -999),
      h = Be(t.plotY, -999),
      l = e.getBBox(),
      c = o.renderer.fontMetrics(i.style.fontSize).b,
      d = this.visible && (t.series.forceDL || o.isInsidePlot(a, re(h), r) || n && o.isInsidePlot(a, r ? n.x + 1 : n.y + n.height - 1, r));
    d && (n = Oe({
      x: r ? o.plotWidth - h : a,
      y: re(r ? o.plotHeight - a : h),
      width: 0,
      height: 0
    }, n), Oe(i, {
      width: l.width,
      height: l.height
    }), i.rotation ? (t = o.renderer.rotCorr(c, i.rotation), e[s ? "attr" : "animate"]({
      x: n.x + i.x + n.width / 2 + t.x,
      y: n.y + i.y + n.height / 2
    }).attr({
      align: i.align
    })) : (e.align(i, null, n), r = e.alignAttr, "justify" === Be(i.overflow, "justify") ? this.justifyDataLabel(e, i, r, l, n, s) : Be(i.crop, !0) && (d = o.isInsidePlot(r.x, r.y) && o.isInsidePlot(r.x + l.width, r.y + l.height)), i.shape && e.attr({
      anchorX: t.plotX,
      anchorY: t.plotY
    }))), d || (e.attr({
      y: -999
    }), e.placed = !1)
  }, di.prototype.justifyDataLabel = function(t, e, i, n, s, o) {
    var r, a, h = this.chart,
      l = e.align,
      c = e.verticalAlign,
      d = t.box ? 0 : t.padding || 0;
    r = i.x + d, 0 > r && ("right" === l ? e.align = "left" : e.x = -r, a = !0), r = i.x + n.width - d, r > h.plotWidth && ("left" === l ? e.align = "right" : e.x = h.plotWidth - r, a = !0), r = i.y + d, 0 > r && ("bottom" === c ? e.verticalAlign = "top" : e.y = -r, a = !0), r = i.y + n.height - d, r > h.plotHeight && ("top" === c ? e.verticalAlign = "bottom" : e.y = h.plotHeight - r, a = !0), a && (t.placed = !o, t.align(e, null, s))
  }, Ie.pie && (Ie.pie.prototype.drawDataLabels = function() {
    var t, e, i, n, s, o, r, a, h, l, c, d = this,
      p = d.data,
      u = d.chart,
      g = d.options.dataLabels,
      f = Be(g.connectorPadding, 10),
      m = Be(g.connectorWidth, 1),
      x = u.plotWidth,
      y = u.plotHeight,
      v = Be(g.softConnector, !0),
      b = g.distance,
      k = d.center,
      S = k[2] / 2,
      T = k[1],
      A = b > 0,
      P = [
        [],
        []
      ],
      C = [0, 0, 0, 0],
      L = function(t, e) {
        return e.y - t.y
      };
    if (d.visible && (g.enabled || d._hasPointLabels)) {
      for (di.prototype.drawDataLabels.apply(d), Xe(p, function(t) {
          t.dataLabel && t.visible && P[t.half].push(t)
        }), l = 2; l--;) {
        var M, D = [],
          z = [],
          I = P[l],
          O = I.length;
        if (O) {
          for (d.sortByAngle(I, l - .5), c = p = 0; !p && I[c];) p = I[c] && I[c].dataLabel && (I[c].dataLabel.getBBox().height || 21), c++;
          if (b > 0) {
            for (s = ce(T + S + b, u.plotHeight), c = le(0, T - S - b); s >= c; c += p) D.push(c);
            if (s = D.length, O > s) {
              for (t = [].concat(I), t.sort(L), c = O; c--;) t[c].rank = c;
              for (c = O; c--;) I[c].rank >= s && I.splice(c, 1);
              O = I.length
            }
            for (c = 0; O > c; c++) {
              t = I[c], o = t.labelPos, t = 9999;
              var B, R;
              for (R = 0; s > R; R++) B = de(D[R] - o[1]), t > B && (t = B, M = R);
              if (c > M && null !== D[c]) M = c;
              else
                for (O - c + M > s && null !== D[c] && (M = s - O + c); null === D[M];) M++;
              z.push({
                i: M,
                y: D[M]
              }), D[M] = null
            }
            z.sort(L)
          }
          for (c = 0; O > c; c++) t = I[c], o = t.labelPos, n = t.dataLabel, h = !1 === t.visible ? "hidden" : "inherit", t = o[1], b > 0 ? (s = z.pop(), M = s.i, a = s.y, (t > a && null !== D[M + 1] || a > t && null !== D[M - 1]) && (a = ce(le(0, t), u.plotHeight))) : a = t, r = g.justify ? k[0] + (l ? -1 : 1) * (S + b) : d.getX(a === T - S - b || a === T + S + b ? t : a, l), n._attr = {
            visibility: h,
            align: o[6]
          }, n._pos = {
            x: r + g.x + ({
              left: f,
              right: -f
            }[o[6]] || 0),
            y: a + g.y - 10
          }, n.connX = r, n.connY = a, null === this.options.size && (s = n.width, f > r - s ? C[3] = le(re(s - r + f), C[3]) : r + s > x - f && (C[1] = le(re(r + s - x + f), C[1])), 0 > a - p / 2 ? C[0] = le(re(-a + p / 2), C[0]) : a + p / 2 > y && (C[2] = le(re(a + p / 2 - y), C[2])))
        }
      }(0 === w(C) || this.verifyDataLabelOverflow(C)) && (this.placeDataLabels(), A && m && Xe(this.points, function(t) {
        e = t.connector, o = t.labelPos, (n = t.dataLabel) && n._pos && t.visible ? (h = n._attr.visibility, r = n.connX, a = n.connY, i = v ? ["M", r + ("left" === o[6] ? 5 : -5), a, "C", r, a, 2 * o[2] - o[4], 2 * o[3] - o[5], o[2], o[3], "L", o[4], o[5]] : ["M", r + ("left" === o[6] ? 5 : -5), a, "L", o[2], o[3], "L", o[4], o[5]], e ? (e.animate({
          d: i
        }), e.attr("visibility", h)) : t.connector = e = d.chart.renderer.path(i).attr({
          "stroke-width": m,
          stroke: g.connectorColor || t.color || "#606060",
          visibility: h
        }).add(d.dataLabelsGroup)) : e && (t.connector = e.destroy())
      }))
    }
  }, Ie.pie.prototype.placeDataLabels = function() {
    Xe(this.points, function(t) {
      var e = t.dataLabel;
      e && t.visible && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
        y: -999
      }))
    })
  }, Ie.pie.prototype.alignDataLabel = Ce, Ie.pie.prototype.verifyDataLabelOverflow = function(t) {
    var e, i = this.center,
      n = this.options,
      s = n.center,
      o = n.minSize || 80,
      r = o;
    return null !== s[0] ? r = le(i[2] - le(t[1], t[3]), o) : (r = le(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== s[1] ? r = le(ce(r, i[2] - le(t[0], t[2])), o) : (r = le(ce(r, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), r < i[2] ? (i[2] = r, i[3] = m(n.innerSize || 0, r), this.translate(i), Xe(this.points, function(t) {
      t.dataLabel && (t.dataLabel._pos = null)
    }), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
  }), Ie.column && (Ie.column.prototype.alignDataLabel = function(e, i, n, s, o) {
    var r = this.chart.inverted,
      a = e.series,
      h = e.dlBox || e.shapeArgs,
      l = Be(e.below, e.plotY > Be(this.translatedThreshold, a.yAxis.len)),
      c = Be(n.inside, !!this.options.stacking);
    h && (s = t(h), r && (s = {
      x: a.yAxis.len - s.y - s.height,
      y: a.xAxis.len - s.x - s.width,
      width: s.height,
      height: s.width
    }), c || (r ? (s.x += l ? 0 : s.width, s.width = 0) : (s.y += l ? s.height : 0, s.height = 0))), n.align = Be(n.align, !r || c ? "center" : l ? "right" : "left"), n.verticalAlign = Be(n.verticalAlign, r || c ? "middle" : l ? "top" : "bottom"), di.prototype.alignDataLabel.call(this, e, i, n, s, o)
  });
  var fi = ie.TrackerMixin = {
    drawTrackerPoint: function() {
      var t = this,
        e = t.chart,
        i = e.pointer,
        n = t.options.cursor,
        s = n && {
          cursor: n
        },
        o = function(t) {
          for (var i, n = t.target; n && !i;) i = n.point, n = n.parentNode;
          i !== I && i !== e.hoverPoint && i.onMouseOver(t)
        };
      Xe(t.points, function(t) {
        t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
      }), t._hasTracking || (Xe(t.trackerGroups, function(e) {
        t[e] && (t[e].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(t) {
          i.onTrackerMouseOut(t)
        }).css(s), O) && t[e].on("touchstart", o)
      }), t._hasTracking = !0)
    },
    drawTrackerGraph: function() {
      var t, e = this,
        i = e.options,
        n = i.trackByArea,
        s = [].concat(n ? e.areaPath : e.graphPath),
        o = s.length,
        r = e.chart,
        a = r.pointer,
        h = r.renderer,
        l = r.options.tooltip.snap,
        c = e.tracker,
        d = i.cursor,
        p = d && {
          cursor: d
        },
        d = e.singlePoints,
        u = function() {
          r.hoverSeries !== e && e.onMouseOver()
        },
        g = "rgba(192,192,192," + (we ? 1e-4 : .002) + ")";
      if (o && !n)
        for (t = o + 1; t--;) "M" === s[t] && s.splice(t + 1, 0, s[t + 1] - l, s[t + 2], "L"), (t && "M" === s[t] || t === o) && s.splice(t, 0, "L", s[t - 2] + l, s[t - 1]);
      for (t = 0; t < d.length; t++) o = d[t], s.push("M", o.plotX - l, o.plotY, "L", o.plotX + l, o.plotY);
      c ? c.attr({
        d: s
      }) : (e.tracker = h.path(s).attr({
        "stroke-linejoin": "round",
        visibility: e.visible ? "visible" : "hidden",
        stroke: g,
        fill: n ? g : "none",
        "stroke-width": i.lineWidth + (n ? 0 : 2 * l),
        zIndex: 2
      }).add(e.group), Xe([e.tracker, e.markerGroup], function(t) {
        t.addClass("highcharts-tracker").on("mouseover", u).on("mouseout", function(t) {
          a.onTrackerMouseOut(t)
        }).css(p), O && t.on("touchstart", u)
      }))
    }
  };
  Ie.column && (gi.prototype.drawTracker = fi.drawTrackerPoint), Ie.pie && (Ie.pie.prototype.drawTracker = fi.drawTrackerPoint), Ie.scatter && (ScatterSeries.prototype.drawTracker = fi.drawTrackerPoint), Oe(ai.prototype, {
    setItemEvents: function(t, e, i, n, s) {
      var o = this;
      (i ? e : t.legendGroup).on("mouseover", function() {
        t.setState("hover"), e.css(o.options.itemHoverStyle)
      }).on("mouseout", function() {
        e.css(t.visible ? n : s), t.setState()
      }).on("click", function(e) {
        var i = function() {
          t.setVisible()
        };
        e = {
          browserEvent: e
        }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : je(t, "legendItemClick", e, i)
      })
    },
    createCheckboxForItem: function(t) {
      t.checkbox = u("input", {
        type: "checkbox",
        checked: t.selected,
        defaultChecked: t.selected
      }, this.options.itemCheckboxStyle, this.chart.container), _e(t.checkbox, "click", function(e) {
        je(t.series || t, "checkboxClick", {
          checked: e.target.checked,
          item: t
        }, function() {
          t.select()
        })
      })
    }
  }), R.legend.itemStyle.cursor = "pointer", Oe(li.prototype, {
    showResetZoom: function() {
      var t = this,
        e = R.lang,
        i = t.options.chart.resetZoomButton,
        n = i.theme,
        s = n.states,
        o = "chart" === i.relativeTo ? null : "plotBox";
      this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function() {
        t.zoomOut()
      }, n, s && s.hover).attr({
        align: i.position.align,
        title: e.resetZoomTitle
      }).add().align(i.position, !1, o)
    },
    zoomOut: function() {
      var t = this;
      je(t, "selection", {
        resetSelection: !0
      }, function() {
        t.zoom()
      })
    },
    zoom: function(t) {
      var e, i, s = this.pointer,
        o = !1;
      !t || t.resetSelection ? Xe(this.axes, function(t) {
        e = t.zoom()
      }) : Xe(t.xAxis.concat(t.yAxis), function(t) {
        var i = t.axis,
          n = i.isXAxis;
        (s[n ? "zoomX" : "zoomY"] || s[n ? "pinchX" : "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (o = !0))
      }), i = this.resetZoomButton, o && !i ? this.showResetZoom() : !o && n(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(Be(this.options.chart.animation, t && t.animation, 100 > this.pointCount))
    },
    pan: function(t, e) {
      var i, n = this,
        s = n.hoverPoints;
      s && Xe(s, function(t) {
        t.setState()
      }), Xe("xy" === e ? [1, 0] : [1], function(e) {
        var s = t[e ? "chartX" : "chartY"],
          o = n[e ? "xAxis" : "yAxis"][0],
          r = n[e ? "mouseDownX" : "mouseDownY"],
          a = (o.pointRange || 0) / 2,
          h = o.getExtremes(),
          l = o.toValue(r - s, !0) + a,
          a = o.toValue(r + n[e ? "plotWidth" : "plotHeight"] - s, !0) - a,
          r = r > s;
        o.series.length && (r || l > ce(h.dataMin, h.min)) && (!r || a < le(h.dataMax, h.max)) && (o.setExtremes(l, a, !1, !1, {
          trigger: "pan"
        }), i = !0), n[e ? "mouseDownX" : "mouseDownY"] = s
      }), i && n.redraw(!1), p(n.container, {
        cursor: "move"
      })
    }
  }), Oe(ci.prototype, {
    select: function(t, e) {
      var i = this,
        n = i.series,
        s = n.chart;
      t = Be(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
        accumulate: e
      }, function() {
        i.selected = i.options.selected = t, n.options.data[Fe(i, n.data)] = i.options, i.setState(t && "select"), e || Xe(s.getSelectedPoints(), function(t) {
          t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[Fe(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
        })
      })
    },
    onMouseOver: function(t, e) {
      var i = this.series,
        n = i.chart,
        s = n.tooltip,
        o = n.hoverPoint;
      n.hoverSeries !== i && i.onMouseOver(), o && o !== this && o.onMouseOut(), this.series && (this.firePointEvent("mouseOver"), !s || s.shared && !i.noSharedTooltip || s.refresh(this, t), this.setState("hover"), e || (n.hoverPoint = this))
    },
    onMouseOut: function() {
      var t = this.series.chart,
        e = t.hoverPoints;
      this.firePointEvent("mouseOut"), e && -1 !== Fe(this, e) || (this.setState(), t.hoverPoint = null)
    },
    importEvents: function() {
      if (!this.hasImportedEvents) {
        var e, i = t(this.series.options.point, this.options).events;
        this.events = i;
        for (e in i) _e(this, e, i[e]);
        this.hasImportedEvents = !0
      }
    },
    setState: function(e, i) {
      var n, s = this.plotX,
        o = this.plotY,
        r = this.series,
        a = r.options.states,
        h = Ze[r.type].marker && r.options.marker,
        l = h && !h.enabled,
        c = h && h.states[e],
        d = c && !1 === c.enabled,
        p = r.stateMarkerGraphic,
        u = this.marker || {},
        g = r.chart,
        f = r.halo;
      e = e || "", n = this.pointAttr[e] || r.pointAttr[e], e === this.state && !i || this.selected && "select" !== e || a[e] && !1 === a[e].enabled || e && (d || l && !1 === c.enabled) || e && u.states && u.states[e] && !1 === u.states[e].enabled || (this.graphic ? (h = h && this.graphic.symbolName && n.r, this.graphic.attr(t(n, h ? {
        x: s - h,
        y: o - h,
        width: 2 * h,
        height: 2 * h
      } : {})), p && p.hide()) : (e && c && (h = c.radius, u = u.symbol || r.symbol, p && p.currentSymbol !== u && (p = p.destroy()), p ? p[i ? "animate" : "attr"]({
        x: s - h,
        y: o - h
      }) : u && (r.stateMarkerGraphic = p = g.renderer.symbol(u, s - h, o - h, 2 * h, 2 * h).attr(n).add(r.markerGroup), p.currentSymbol = u)), p && (p[e && g.isInsidePlot(s, o, g.inverted) ? "show" : "hide"](), p.element.point = this)), (s = a[e] && a[e].halo) && s.size ? (f || (r.halo = f = g.renderer.path().add(g.seriesGroup)), f.attr(Oe({
        fill: ei(this.color || r.color).setOpacity(s.opacity).get()
      }, s.attributes))[i ? "animate" : "attr"]({
        d: this.haloPath(s.size)
      })) : f && f.attr({
        d: []
      }), this.state = e)
    },
    haloPath: function(t) {
      var e = this.series,
        i = e.chart,
        n = e.getPlotBox(),
        s = i.inverted;
      return i.renderer.symbols.circle(n.translateX + (s ? e.yAxis.len - this.plotY : this.plotX) - t, n.translateY + (s ? e.xAxis.len - this.plotX : this.plotY) - t, 2 * t, 2 * t)
    }
  }), Oe(di.prototype, {
    onMouseOver: function() {
      var t = this.chart,
        e = t.hoverSeries;
      e && e !== this && e.onMouseOut(), this.options.events.mouseOver && je(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
    },
    onMouseOut: function() {
      var t = this.options,
        e = this.chart,
        i = e.tooltip,
        n = e.hoverPoint;
      e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && je(this, "mouseOut"), !i || t.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState()
    },
    setState: function(t) {
      var e = this.options,
        i = this.graph,
        n = e.states,
        s = e.lineWidth,
        e = 0;
      if (t = t || "", this.state !== t && (this.state = t, !n[t] || !1 !== n[t].enabled) && (t && (s = n[t].lineWidth || s + (n[t].lineWidthPlus || 0)), i && !i.dashstyle))
        for (t = {
            "stroke-width": s
          }, i.attr(t); this["zoneGraph" + e];) this["zoneGraph" + e].attr(t), e += 1
    },
    setVisible: function(t, e) {
      var i, n = this,
        s = n.chart,
        o = n.legendItem,
        r = s.options.chart.ignoreHiddenSeries,
        a = n.visible;
      i = (n.visible = t = n.userOptions.visible = t === I ? !a : t) ? "show" : "hide", Xe(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(t) {
        n[t] && n[t][i]()
      }), (s.hoverSeries === n || (s.hoverPoint && s.hoverPoint.series) === n) && n.onMouseOut(), o && s.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && Xe(s.series, function(t) {
        t.options.stacking && t.visible && (t.isDirty = !0)
      }), Xe(n.linkedSeries, function(e) {
        e.setVisible(t, !1)
      }), r && (s.isDirtyBox = !0), !1 !== e && s.redraw(), je(n, i)
    },
    show: function() {
      this.setVisible(!0)
    },
    hide: function() {
      this.setVisible(!1)
    },
    select: function(t) {
      this.selected = t = t === I ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), je(this, t ? "select" : "unselect")
    },
    drawTracker: fi.drawTrackerGraph
  }), Oe(ie, {
    Color: ei,
    Point: ci,
    Tick: D,
    Renderer: ii,
    SVGElement: M,
    SVGRenderer: ii,
    arrayMin: k,
    arrayMax: w,
    charts: Le,
    dateFormat: H,
    error: A,
    format: y,
    pathAnim: E,
    getOptions: function() {
      return R
    },
    hasBidiBug: Se,
    isTouchDevice: ke,
    setOptions: function(e) {
      return R = t(!0, R, e), L(), R
    },
    addEvent: _e,
    removeEvent: Ve,
    createElement: u,
    discardElement: T,
    css: p,
    each: Xe,
    map: Ne,
    merge: t,
    splat: d,
    extendClass: g,
    pInt: e,
    svg: we,
    canvas: Te,
    vml: !we && !Te,
    product: "Highcharts 4.1.8",
    version: "/Highstock 2.1.8"
  })
}(),
function(t) {
  var e, i = t.Chart,
    n = t.addEvent,
    s = t.removeEvent,
    o = HighchartsAdapter.fireEvent,
    r = t.createElement,
    a = t.discardElement,
    h = t.css,
    l = t.merge,
    c = t.each,
    d = t.extend,
    p = t.splat,
    u = Math.max,
    g = document,
    f = window,
    m = t.isTouchDevice,
    x = t.Renderer.prototype.symbols,
    y = t.getOptions();
  d(y.lang, {
    printChart: "Print chart",
    downloadPNG: "Download PNG image",
    downloadJPEG: "Download JPEG image",
    downloadPDF: "Download PDF document",
    downloadSVG: "Download SVG vector image",
    contextButtonTitle: "Chart context menu"
  }), y.navigation = {
    menuStyle: {
      border: "1px solid #A0A0A0",
      background: "#FFFFFF",
      padding: "5px 0"
    },
    menuItemStyle: {
      padding: "0 10px",
      background: "none",
      color: "#303030",
      fontSize: m ? "14px" : "11px"
    },
    menuItemHoverStyle: {
      background: "#4572A5",
      color: "#FFFFFF"
    },
    buttonOptions: {
      symbolFill: "#E0E0E0",
      symbolSize: 14,
      symbolStroke: "#666",
      symbolStrokeWidth: 3,
      symbolX: 12.5,
      symbolY: 10.5,
      align: "right",
      buttonSpacing: 3,
      height: 22,
      theme: {
        fill: "white",
        stroke: "none"
      },
      verticalAlign: "top",
      width: 24
    }
  }, y.exporting = {
    type: "image/png",
    url: "http://export.highcharts.com/",
    buttons: {
      contextButton: {
        menuClassName: "highcharts-contextmenu",
        symbol: "menu",
        _titleKey: "contextButtonTitle",
        menuItems: [{
          textKey: "printChart",
          onclick: function() {
            this.print()
          }
        }, {
          separator: !0
        }, {
          textKey: "downloadPNG",
          onclick: function() {
            this.exportChart()
          }
        }, {
          textKey: "downloadJPEG",
          onclick: function() {
            this.exportChart({
              type: "image/jpeg"
            })
          }
        }, {
          textKey: "downloadPDF",
          onclick: function() {
            this.exportChart({
              type: "application/pdf"
            })
          }
        }, {
          textKey: "downloadSVG",
          onclick: function() {
            this.exportChart({
              type: "image/svg+xml"
            })
          }
        }]
      }
    }
  }, t.post = function(t, e, i) {
    var n;
    t = r("form", l({
      method: "post",
      action: t,
      enctype: "multipart/form-data"
    }, i), {
      display: "none"
    }, g.body);
    for (n in e) r("input", {
      type: "hidden",
      _id: n,
      value: e[n]
    }, null, t);
    t.submit(), a(t)
  }, d(i.prototype, {
    sanitizeSVG: function(t) {
      return t.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, " ").replace(/&shy;/g, "­").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g, ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(t) {
        return t.toLowerCase()
      })
    },
    getChartHTML: function() {
      return this.container.innerHTML
    },
    getSVG: function(e) {
      var i, n, s, o, h, u = this,
        f = l(u.options, e),
        m = f.exporting.allowHTML;
      return g.createElementNS || (g.createElementNS = function(t, e) {
        return g.createElement(e)
      }), n = r("div", null, {
        position: "absolute",
        top: "-9999em",
        width: u.chartWidth + "px",
        height: u.chartHeight + "px"
      }, g.body), s = u.renderTo.style.width, h = u.renderTo.style.height, s = f.exporting.sourceWidth || f.chart.width || /px$/.test(s) && parseInt(s, 10) || 600, h = f.exporting.sourceHeight || f.chart.height || /px$/.test(h) && parseInt(h, 10) || 400, d(f.chart, {
        animation: !1,
        renderTo: n,
        forExport: !m,
        width: s,
        height: h
      }), f.exporting.enabled = !1, delete f.data, f.series = [], c(u.series, function(t) {
        o = l(t.options, {
          animation: !1,
          enableMouseTracking: !1,
          showCheckbox: !1,
          visible: t.visible
        }), o.isInternal || f.series.push(o)
      }), e && c(["xAxis", "yAxis"], function(t) {
        c(p(e[t]), function(e, i) {
          f[t][i] = l(f[t][i], e)
        })
      }), i = new t.Chart(f, u.callback), c(["xAxis", "yAxis"], function(t) {
        c(u[t], function(e, n) {
          var s = i[t][n],
            o = e.getExtremes(),
            r = o.userMin,
            o = o.userMax;
          !s || void 0 === r && void 0 === o || s.setExtremes(r, o, !0, !1)
        })
      }), s = i.getChartHTML(), f = null, i.destroy(), a(n), m && (n = s.match(/<\/svg>(.*?$)/)) && (n = '<foreignObject x="0" y="0 width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + n[1] + "</body></foreignObject>", s = s.replace("</svg>", n + "</svg>")), s = this.sanitizeSVG(s), s = s.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
    },
    getSVGForExport: function(t, e) {
      var i = this.options.exporting;
      return this.getSVG(l({
        chart: {
          borderRadius: 0
        }
      }, i.chartOptions, e, {
        exporting: {
          sourceWidth: t && t.sourceWidth || i.sourceWidth,
          sourceHeight: t && t.sourceHeight || i.sourceHeight
        }
      }))
    },
    exportChart: function(e, i) {
      var n = this.getSVGForExport(e, i);
      e = l(this.options.exporting, e), t.post(e.url, {
        filename: e.filename || "chart",
        type: e.type,
        width: e.width || 0,
        scale: e.scale || 2,
        svg: n
      }, e.formAttributes)
    },
    print: function() {
      var t = this,
        e = t.container,
        i = [],
        n = e.parentNode,
        s = g.body,
        r = s.childNodes;
      t.isPrinting || (t.isPrinting = !0, o(t, "beforePrint"), c(r, function(t, e) {
        1 === t.nodeType && (i[e] = t.style.display, t.style.display = "none")
      }), s.appendChild(e), f.focus(), f.print(), setTimeout(function() {
        n.appendChild(e), c(r, function(t, e) {
          1 === t.nodeType && (t.style.display = i[e])
        }), t.isPrinting = !1, o(t, "afterPrint")
      }, 1e3))
    },
    contextMenu: function(t, e, i, o, a, l, p) {
      var g, f, m, x = this,
        y = x.options.navigation,
        v = y.menuItemStyle,
        b = x.chartWidth,
        k = x.chartHeight,
        w = "cache-" + t,
        S = x[w],
        T = u(a, l),
        A = function(e) {
          x.pointer.inClass(e.target, t) || f()
        };
      S || (x[w] = S = r("div", {
        className: t
      }, {
        position: "absolute",
        zIndex: 1e3,
        padding: T + "px"
      }, x.container), g = r("div", null, d({
        MozBoxShadow: "3px 3px 10px #888",
        WebkitBoxShadow: "3px 3px 10px #888",
        boxShadow: "3px 3px 10px #888"
      }, y.menuStyle), S), f = function() {
        h(S, {
          display: "none"
        }), p && p.setState(0), x.openMenu = !1
      }, n(S, "mouseleave", function() {
        m = setTimeout(f, 500)
      }), n(S, "mouseenter", function() {
        clearTimeout(m)
      }), n(document, "mouseup", A), n(x, "destroy", function() {
        s(document, "mouseup", A)
      }), c(e, function(t) {
        if (t) {
          var e = t.separator ? r("hr", null, null, g) : r("div", {
            onmouseover: function() {
              h(this, y.menuItemHoverStyle)
            },
            onmouseout: function() {
              h(this, v)
            },
            onclick: function(e) {
              e.stopPropagation(), f(), t.onclick && t.onclick.apply(x, arguments)
            },
            innerHTML: t.text || x.options.lang[t.textKey]
          }, d({
            cursor: "pointer"
          }, v), g);
          x.exportDivElements.push(e)
        }
      }), x.exportDivElements.push(g, S), x.exportMenuWidth = S.offsetWidth, x.exportMenuHeight = S.offsetHeight), e = {
        display: "block"
      }, i + x.exportMenuWidth > b ? e.right = b - i - a - T + "px" : e.left = i - T + "px", o + l + x.exportMenuHeight > k && "top" !== p.alignOptions.verticalAlign ? e.bottom = k - o - T + "px" : e.top = o + l - T + "px", h(S, e), x.openMenu = !0
    },
    addButton: function(i) {
      var n, s, o = this,
        r = o.renderer,
        a = l(o.options.navigation.buttonOptions, i),
        h = a.onclick,
        c = a.menuItems,
        p = {
          stroke: a.symbolStroke,
          fill: a.symbolFill
        },
        u = a.symbolSize || 12;
      if (o.btnCount || (o.btnCount = 0), o.exportDivElements || (o.exportDivElements = [], o.exportSVGElements = []), !1 !== a.enabled) {
        var g, f = a.theme,
          m = f.states,
          x = m && m.hover,
          m = m && m.select;
        delete f.states, h ? g = function(t) {
          t.stopPropagation(), h.call(o, t)
        } : c && (g = function() {
          o.contextMenu(s.menuClassName, c, s.translateX, s.translateY, s.width, s.height, s), s.setState(2)
        }), a.text && a.symbol ? f.paddingLeft = t.pick(f.paddingLeft, 25) : a.text || d(f, {
          width: a.width,
          height: a.height,
          padding: 0
        }), s = r.button(a.text, 0, 0, g, f, x, m).attr({
          title: o.options.lang[a._titleKey],
          "stroke-linecap": "round"
        }), s.menuClassName = i.menuClassName || "highcharts-menu-" + o.btnCount++, a.symbol && (n = r.symbol(a.symbol, a.symbolX - u / 2, a.symbolY - u / 2, u, u).attr(d(p, {
          "stroke-width": a.symbolStrokeWidth || 1,
          zIndex: 1
        })).add(s)), s.add().align(d(a, {
          width: s.width,
          x: t.pick(a.x, e)
        }), !0, "spacingBox"), e += (s.width + a.buttonSpacing) * ("right" === a.align ? -1 : 1), o.exportSVGElements.push(s, n)
      }
    },
    destroyExport: function(t) {
      t = t.target;
      var e, i;
      for (e = 0; e < t.exportSVGElements.length; e++)(i = t.exportSVGElements[e]) && (i.onclick = i.ontouchstart = null, t.exportSVGElements[e] = i.destroy());
      for (e = 0; e < t.exportDivElements.length; e++) i = t.exportDivElements[e], s(i, "mouseleave"), t.exportDivElements[e] = i.onmouseout = i.onmouseover = i.ontouchstart = i.onclick = null, a(i)
    }
  }), x.menu = function(t, e, i, n) {
    return ["M", t, e + 2.5, "L", t + i, e + 2.5, "M", t, e + n / 2 + .5, "L", t + i, e + n / 2 + .5, "M", t, e + n - 1.5, "L", t + i, e + n - 1.5]
  }, i.prototype.callbacks.push(function(t) {
    var i, s = t.options.exporting,
      o = s.buttons;
    if (e = 0, !1 !== s.enabled) {
      for (i in o) t.addButton(o[i]);
      n(t, "destroy", t.destroyExport)
    }
  })
}(Highcharts);
