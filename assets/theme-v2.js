/**
 * shopify common event, in order to be compatible with lower version browsers, please use ES5 syntax as much as possible
 * anthor: garfield, 10/15/2021
 */

 var $http = {
  cr: "US",

  host: function() {
    return "https://demo-api.myjackery.com";
    // return "https://dev-api.myjackery.com";
  },

  h: function() {
    var token = localStorage.getItem('JACKERY_USER_TOKEN') || cookie.get("_jk_user"), headers = { 'Content-Type': 'application/json;charset=utf8', "cr": this.cr, "lang": Shopify.locale.toUpperCase() };
    token && (headers.jackeryToken = token);
    return headers
  },

  errorReport: function(uri, data, r) {
    if (uri.indexOf("/v1/com/log") < 0) {
      // shopCommon.toast("Oops, something went wrong, Please try again later. " + (r.readyState === undefined ? -1 : r.readyState), 5000, 'red');
      setTimeout(function() {
        var request = typeof(data) === "object" ? JSON.stringify(data) : data;
        var response = typeof(r) === "object" ? JSON.stringify(r) : r;
        $api.errorLog({
          "uri": uri, "request_data": request, "response_data": response
        })
      }, 1000)
    }
  },

  g: function(url) {
    return fetch(url, { method: 'GET', mode: 'cors' }).then(function(r) {
      return r.json();
    })
  },

  p: function(url, data) {
    return fetch(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify(data), mode: 'cors'
    }).then(function(r) {
      return r.json();
    })
  },

  // compatible low version broswer
  request: function(type, u, d, s, e) {
    $.ajax({
      method: type, url: this.host() + "/userapi" + u, dataType: 'json', data: d, timeout: 15000, headers: this.h(),
      success: function(r) {
        switch (r.code) {
          case 0:
            e && e(r);
            shopCommon.toast(r.message, 5000, 'red');
            break;
          case 200: s && s(r.data); break;
          case 10000:
            e && e(r);
            $api.shopifyLogout();
          break;
          default: e && e(r); break;
        }
      },
      error: function(r) {
        e && e(r);
        $http.errorReport(u, d, r)
      }
    })
  },

  ajax: function(t, u, d, s, e) {
    $.ajax({
      method: t, url: u, data: d, contentType: "application/json", dataType: 'json', timeout: 15000,
      header: {'Content-Type': 'application/json; charset=UTF-8'},
      beforeSend: function (XMLHttpRequest) {
        XMLHttpRequest.setRequestHeader("cr", $http.cr);
        XMLHttpRequest.setRequestHeader("lang", Shopify.locale.toUpperCase());
      },
      success: function(r) {
        switch (r.code) {
          case 0:
            e && e(r);
            shopCommon.toast(r.message, 5000, 'red');
            break;
          case 200: s && s(r.data); break;
          case 30001: case 30002:
            e && e(r);
            shopCommon.toast("The Order ID does not exist, please try a different one. ", 5000, 'red');
            break;
          case 50000:
            e && e(r);
            shopCommon.toast("The email provided has been used.", 5000, 'red');
            break;
          default:
            e && e(r);
            shopCommon.toast("Oops, something went wrong, Please try again later. code: " + (r.code || 500), 5000, 'red');
            break;
        }
      },
      error: function(r) {
        e && e(r);
        $http.errorReport(u, d, r)
      }
    })
  },

  post: function(t, d, n, a) {
    $.ajax({
      method: "POST", url: t, data: d, timeout: 15000,
      headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "cr": $http.cr, "lang": Shopify.locale.toUpperCase()},
      success: function(r) {
        switch (r.code) {
          case 0:
            a && a(r);
            shopCommon.toast(r.message, 5000, 'red');
            break;
          case 200: n && n(r.data); break;
          case 50000:
            a && a(r);
            shopCommon.toast("The email provided has been used.", 5000, 'red');
            break;
          default: a && a(r); break;
        }
      },
      error: function(r) {
        a && a(r);
        $http.errorReport(t, d, r)
      }
    })
  }
};

var $api = {
  // in the normal, use USD currency reset checkout page.
  updateCurrency: function(currency) {
    var f = new FormData();
    f.append("form_type", "currency"); f.append("utf8", "✓"); f.append("currency", currency);
    return fetch("/cart/update", { method: "POST", body: f })
  },

  shopifyLogout: function() {
    $http.g("/account/logout").finally(function() {
      localStorage.removeItem("JACKERY_USER_TOKEN");
      cookie.erase("_jk_user");
      location.reload()
    })
  },

  shopifySection: function(section, s, e) {
    $http.ajax("GET", "/?sections=" + section, null, s, e)
  },

  shopifyUserCheck: function() {
    $http.request("GET", "/v1/user/check", null)
  },

  getCouponInfo: function(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-coupon/info", d, s, e)
  },

  batchCouponInfo: function(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-coupon/batch-info", d, s, e)
  },

  orderRegister: function(d, s, e) {
    $http.ajax("POST", $http.host() + "/v1/order/register", d, s, e)
  },

  getGuarantee: function(d, s, e) {
    $http.ajax("POST", $http.host() + "/v1/order/product-guarantee-info", d, s, e)
  },

  updateGuarantee: function(d, s, e) {
    $http.ajax("POST", $http.host() + "/v1/order/product-guarantee-edit", d, s, e)
  },

  shortage: function(d, s, e) {
    $http.post($http.host() + "/v1/notice/add", d, s, e)
  },

  // jackery day collection for answer active email
  jkdCollectEmail: function(d, s, e) {
    $http.ajax("POST", $http.host() + "/v1/notice/collect-email", d, s, e)
  },

  // jackery day answer question
  jkdAddAnswer: function(d, s, e) {
    $http.ajax("POST", $http.host() + "/v1/notice/add-answer", d, s, e)
  },

  // get server time
  getServerTime: function(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/com/get-server-time", d, s, e)
  },

  // error
  errorLog: function(d, s, e) {
    $http.post($http.host() + "/v1/com/log", d, s, e)
  },

  // get notify current info
  notifyInfo: function(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-message/info", d, s, e)
  },

  // notify popup
  notifyPopup: function(d, s, e) {
    $http.post($http.host() + "/v1/app-message/popup", d, s, e)
  }
};


var cookie = {
  set: function(name, value, exDays) {
    let d = new Date(), host = location.host;
    exDays = exDays || 7;
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    let expires = `expires=${d.toGMTString()}`;

    if (host.split('.').length === 1 || host.indexOf('.myshopify.com') >= 0) {
      document.cookie = `${name}=${value}; ${expires}; path=/`
    } else {
      let domainParts = host.split('.');
      domainParts.shift();
      let domain = '.'+domainParts.join('.');
      document.cookie = `${name}=${value}; ${expires}; path=/; domain=${domain}`
    }
  },

  get: function(name) {
    var arr = null;
    var reg = new RegExp('(^| )'+name+'=([^;]*)(;|$)');
    if (document.cookie && (arr = document.cookie.match(reg))) {
      return unescape(arr[2])
    } else {
      return null
    }
  },

  erase: function(name) {
    this.set(name, "", -1)
  }
};

var _$$ = function(entity) {
  return entity ? document.querySelector(entity) : null
};

var $all = function(entity) {
  // return entity ? document.querySelectorAll(entity) : []
  return entity ? $(entity).get() : []
};

// common function, include check product register / email / mobile / date...etc.
var shopCommon = {
  isSiteOrderId: function (str) {
    // 现在只有美国站的保修注册，所以部分判断站点的代码先注释掉，后续可能会用到
    // var site = window.location.host
    // var siteStr = 'en'
    var reg = {
      en: /^#[0-9]{4,10}$/,
      ca: /^ca[0-9]{4}$/i,
      uk: /^uk[0-9]{4}$/i,
      de: /^de[0-9]{4}$/i,
      jp: /^Jackery Japan-[0-9]{9}$/
      // kr: '/^#[0-9]{5}$/'
    };
    // switch (site) {
    // case "ca.jackery.com":
    //   siteStr = 'ca'
    //   break;
    // case "uk.jackery.com":
    //   siteStr = 'uk'
    //   break;
    // case "de.jackery.com":
    //   siteStr = 'de'
    //   break;
    // case "www.jackery.com":
    //   siteStr = 'en'
    //   break;
    // case "www.jackery.jp":
    //   siteStr = 'jp'
    //   break;
    // case "kr.jackery.com":
    //   siteStr = 'kr'
    //   break;
    // }
    return reg['en'].test(str) || reg['ca'].test(str) || reg['uk'].test(str) || reg['de'].test(str) || reg['jp'].test(str)
  },

  isAmazonOrderId: function (str) {
    var amazon_reg = /^[0-9]{3}-[0-9]{7}-[0-9]{7}$/
    return amazon_reg.test(str)
  },

  checkOrderId: function () {
    var that = 'input[name="out_order_sn"]'
    var amazon_list = ['Amazon.com', 'Amazon.ca', 'Amazon.de', 'Amazon.co.uk', 'Amazon.es', 'Amazon.it', 'Amazon.fr']
    if ($('input[name="purchase_channel"]').val() === 'Jackery.com') {
      $(that).val() ?
        shopCommon.isSiteOrderId($(that).val().replace(/\s+/g, '')) ? ($(that).parent().removeClass("input-tips") && $(that).parent().removeClass("order-check")) : ($(that).parent().addClass("input-tips") && $(that).parent().addClass("order-check"))
        : ($(that).parent().addClass("input-tips") && $(that).parent().removeClass("order-check"));
    } else if (amazon_list.includes($('input[name="purchase_channel"]').val())) {
      $(that).val() ?
        shopCommon.isAmazonOrderId($(that).val().replace(/\s+/g, '')) ? ($(that).parent().removeClass("input-tips") && $(that).parent().removeClass("order-check")) : ($(that).parent().addClass("input-tips") && $(that).parent().addClass("order-check"))
        : ($(that).parent().addClass("input-tips") && $(that).parent().removeClass("order-check"));
    } else {
      $(that).parent().removeClass("order-check");
      $(that).val() ? $(that).parent().removeClass("input-tips") : $(that).parent().addClass("input-tips");
    }
  },

  verifyEmail: function (str) {
    var reg = /^[A-Za-z0-9._%+!`#$^-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,8}$/;
    return reg.test(str)
  },
  
  isMobile: function() {
    return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS|BlackBerry|webOS)/i)
  },

  isEmpty: function(v) {
    switch (typeof v) {
      case 'undefined':
        return true;
      case 'string':
        if (v.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true;
        break;
      case 'boolean':
        if (!v) return true;
        break;
      case 'number':
        if (0 === v || isNaN(v)) return true;
        break;
      case 'object':
        if (null === v || v.length === 0) return true;
        for (var i in v) {
          return false;
        }
        return true;
    }
    return false
  },

  padLeftZero: function(str) { return ('00' + str).substr(str.length) },

  formatDate: function(date, fmt, timestamp) {
    fmt = fmt || 'YYYY/MM/DD';
    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    var o = {
      'M+': date.getMonth() + 1,
      'D+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        var str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return timestamp ? new Date(fmt).getTime() : fmt
  },

  // get browser param, compatible with non-standard url param
  getParam: function(variable) {
    function nonstandard() {
      var v = location.href.split("&");
      v.splice(0, 1);
      return v
    }
    var query = window.location.search.substring(1), vars = query ? query.split("&") : nonstandard();
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) { return decodeURI(pair[1]) }
    }
    return false
  },
  
  toast: function(msg, duration, _class, db) {
    var m = document.createElement('aside');
    m.className = "yToast " + _class;
    m.innerHTML = msg;
    document.body.appendChild(m);
    setTimeout(function() { document.body.removeChild(m); db && db() }, duration || 3000)
  },

  isCopy: function(ele, text) {
    var me = this;
    ele.onclick = function(e) {
      e.preventDefault();
      if (window.clipboardData) {
        window.clipboardData.setData('text', text);
      } else {
        (function(s){
        document.oncopy = function(e) {
          e.clipboardData.setData('text', s);
          e.preventDefault();
          document.oncopy = null
        }
        })(text);
        document.execCommand('Copy');
      }
      me.toast('code: '+ text +' Copied!')
    }
  },

  scrollToTop: function(position) {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (cb) {
        return setTimeout(cb, 17)
      }
    }
    
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    
    var step = function() {
      var distance = position - scrollTop;
      scrollTop = scrollTop + distance / 5;
      if (Math.abs(distance) < 1) {
        window.scrollTo(0, position)
      } else {
        window.scrollTo(0, scrollTop);
        requestAnimationFrame(step)
      }
    };
    step()
  },

  countTime: function(target, current, element, callback) {
		var me = this;
		//time different, d,h,m,s save countdown
		var leftTime = target - current, d, h, m, s;
		if (leftTime >= 0) {
			d = Math.floor(leftTime/1000/60/60/24);
			h = Math.floor(leftTime/1000/60/60%24);
			m = Math.floor(leftTime/1000/60%60);
			s = Math.floor(leftTime/1000%60);
			
      if (element) {
        element.querySelector('._days').innerText = String(d).padStart(2, "0");
        element.querySelector('._hours').innerText = String(h).padStart(2, "0");
        element.querySelector('._mins').innerText = String(m).padStart(2, "0");
        element.querySelector('._secs').innerText = String(s).padStart(2, "0")
      }
			
			setTimeout(function() { me.countTime(target, current + 1000, element, callback) }, 1000)
		} else {
			// countdown end
      callback && callback()
		}
	},

  // create y-select element sharing mode
  ySelect: function(name, data) {
    if (!$('.y-select-'+ name +' .y-select-option').length) {
      var ele = '<p class="p ellipsis"></p><svg fill="currentColor" viewBox="64 64 896 896"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg><div class="y-select-option"><ul></ul></div>';
      $('.y-select-'+ name).append(ele);
    }
    
    var container = $('.y-select-'+ name +' .y-select-option'),
      p = $('.y-select-'+ name +' .p'),
      ul = container.find("ul"),
      input = $('input[name="'+ name +'"]');

    // initial value
    p.html('<i>- please select -</i>');
    input.val('');
      
    container.css("height", data.length > 10 ? '270px' : data.length * 30 + 'px');
    
    function load(start, end) {
      var option = data.slice(start, end), li = '';
      option.forEach(function(item) {
        key = typeof item.key === 'number' ? item.name : item.key;
        li += '<li class="ellipsis" data-key="'+ key  +'"> ' + item.name + ' </li>'
      })
      ul.html(li);
      
      ul.find("li").each(function() {
        var that = this;
        $(that).click(function() {
          input.val($(that).data("key"));
          p.html($(that).html());
          setTimeout(function () { input.blur() }, 10)
          $('input[name="out_order_sn"]').val() ? shopCommon.checkOrderId() : ''
        })
      })
    }
    
    if (data.length > 20) {
      load(0, 20);
      
      var cur = 0;
      container.scroll(function() {
        var start = container.scrollTop() / 30 | 0;
        ul.css("transform", ("translateY(" + container.scrollTop() + "px)"));
        if (start !== cur) {
          load(start, start + 20);
          cur = start
        }
      });
    } else {
      load(0, data.length)
    }
  },

  init: function() {
    var jackeryToken = this.getParam('jackery_token') || localStorage.getItem("JACKERY_USER_TOKEN") || cookie.get("_jk_user");
    document.querySelector(".jka") && document.querySelector(".jka").removeAttribute("target");

    if (jackeryToken) {
      !localStorage.getItem("JACKERY_USER_TOKEN") && localStorage.setItem("JACKERY_USER_TOKEN", jackeryToken);
      !cookie.get("_jk_user") && cookie.set("_jk_user", jackeryToken);

      var _url = document.querySelector(".goToJackeryAccount");
      if (_url && _url.href.indexOf("&jackery_token=") < 0) {
        _url.href += ("&jackery_token=" + jackeryToken)
      }
    }
    
    var me = this, navChildNav = $all(".left-nav li"), navChildProduct = $all(".right-product .child-style");
    navChildNav.forEach((item, index, arr) => {
      item.onmouseover = () => {
        arr.forEach((e, i) => {
          e.classList.remove("on");
          navChildProduct[i].classList.remove("on")
        });
        item.classList.add("on");
        navChildProduct[index].classList.add("on")
      }
    })
    
    // global site click
    var mask = _$$(".flag-mask");
    mask && (mask.onclick = () => {
      document.querySelector(".flag input").checked = false
    })
    
    // mobile nav clikc hover
    $(".nav li:not(.left-nav li), .theme-v2-footer .information dl").each(function() {
      var me = this;
      $(me).click(function(e) {
        e.stopPropagation();
        $(me).hasClass("hover") ? $(me).removeClass("hover") : $(me).addClass("hover")
      })
    })
    

    // float layer
    $(".float-layer li").each(function() {
      $(this).click(function() {
        switch ($(this).data("type")) {
          case "top": me.scrollToTop(0); break;
          case "back": window.history.back(-1); break;
          case "home": window.location.href = "/"; break;
          case "support": window.location.href = "/pages/support"; break;
        }
      })
    })

    window.addEventListener("scroll", function() {
      _$$(".float-layer li:first-child").style.display = window.pageYOffset > 300 ? "" : "none"
    })
  },

  homePage: function() {
    console.log("theme new template start, 23/11/2021, garfield");
    
    // blog posts pager
    var blogPager = () => {
      var ul = _$$(".blog-posts ul"), progress = _$$(".blog-posts .progress"),
        arrowLeft = _$$(".blog-posts .arrow.left"), arrowRight = _$$(".blog-posts .arrow.right"), pageSize = window.innerWidth > 780 ? 3 : 2;
		
	  if (!ul) { return }
        
      var item = ul.querySelectorAll("li").length, current = 0, page = Math.ceil(item / pageSize);
      // ul.style = `width: ${464 * item}px; grid-template-columns: repeat(${item}, 1fr);`;
      ul.style = ("--item: " + item);
      
      var _onClick = (n) => {
        current += n;
        ul.style.transform =("translateX(" + -current * (ul.parentNode.offsetWidth + 20) + "px)");
        progress.style = ("--item: " + item + "; --page: " + page + "; --progress: " + current / page * 100 + "%;");
        if (current <= 0) {
          arrowLeft.classList.add("disable");
          arrowRight.classList.remove("disable")
        } else if (current >= (item / pageSize - 1)) {
          arrowLeft.classList.remove("disable");
          arrowRight.classList.add("disable")
        } else {
          arrowLeft.classList.remove("disable");
          arrowRight.classList.remove("disable")
        }
      }
      _onClick(0);
      arrowLeft.onclick = () => _onClick(-1);
      arrowRight.onclick = () => _onClick(1);
    };
    
    blogPager()
    
    window.addEventListener("scroll", function() {
      var top = window.pageYOffset, layers = document.querySelectorAll(".layer"),
        header = document.querySelector(".theme-v2-header"), main = document.querySelector("main");
    
      // // response for navigator
      if (top >= window.innerHeight / 2) {
        header.className.indexOf("start") < 0 && header.classList.add("start")
      } else {
        header.classList.remove("start")
      }
      
      // response for content
      layers.forEach(item => {
        if (top + window.innerHeight / 2 >= main.offsetTop + item.offsetTop) {
          if (item.className.indexOf("start") < 0) {
            item.classList.add("start");
          }
        } else {
          item.classList.remove("start")
        }
      })
    })
  },

  productRegister: function() {
		var category = [
      {"key":"solar-generator","name":"Solar Generator"},
      {"key":"portable-power-stations","name":"Portable Power Station"},
      {"key":"solar-panel","name":"Solar Panel"},
      {"key":"accessories","name":"Accessories"}
    ];
    var products = {
      "solar-generator": [
        "E1000 变体-2+1",
        "E1500 新品3+2",
        "Jackery Solar Generator 160 (Explorer 160 + SolarSaga 60)",
        "Jackery Solar Generator 240 (Explorer 240 + SolarSaga 60)",
        "Jackery Solar Generator 290 (Explorer 290 + SolarSaga 100)",
        "Jackery Solar Generator 300 (Explorer 300 + SolarSaga 100)",
        "Jackery Solar Generator 500 (Explorer 500 + SolarSaga 100)",
        "Jackery Solar Generator 550 (Explorer 550 + SolarSaga 100)",
        "Jackery Solar Generator 880 (Explorer 880 + SolarSaga 100)",
        "Jackery Solar Generator 880 (Explorer 880 + 2 x SolarSaga 100)",
        "Jackery Solar Generator 1000 (Explorer 1000 + SolarSaga 100)",
        "Jackery Solar Generator 1000 (Explorer 1000 + 2 x SolarSaga 100)",
        "Jackery Solar Generator 1000 (Explorer 1000 + 2 x SolarSaga 100X)",
        "Jackery Solar Generator 1500 (Explorer 1500 + SolarSaga 100)",
        "Jackery Solar Generator 1500 (Explorer 1500 + 2 x SolarSaga 100X)",
        "Jackery Solar Generator 1500 (Explorer 1500 + 4 x SolarSaga 100)",
        "Jackery Solar Generator 2000 (Explorer 2000 + 4 x SolarSaga 200)",
        "Jackery Solar Generator 2000 Pro (Explorer 2000 Pro + 2 x SolarSaga 200)",
        "Jackery Solar Generator 2000 Pro (Explorer 2000 Pro + 4 x SolarSaga 200)",
        "Jackery Solar Generator 2000 Pro (Explorer 2000 Pro + 6 x SolarSaga 200)",
        "Solar Generator 290880Kit2 (Explorer 290+Explorer 880+2*SolarSaga 100)",
        "Solar Generator 300880Kit2 (Explorer 300+Explorer 880+2*SolarSaga 100)"
      ],
      "portable-power-stations": [
        "Explorer 160 Portable Power Station","Explorer 240 Portable Power Station",
        "Explorer 290 Portable Power Station","Explorer 300 Portable Power Station",
        "Explorer 500 Portable Power Station","Explorer 550 Portable Power Station",
        "Explorer 880 Portable Power Station","Explorer 1000 Portable Power Station",
        "Explorer 1500 Portable Power Station","Explorer 2000 Portable Power Station",
        "Explorer 2000 Pro Portable Power Station"
      ],
      "solar-panel": [
        "SolarSaga 200 Solar Panel",
        "SolarSaga 100 Solar Panel",
        "SolarSaga 100X Solar Panel",
        "SolarSaga 60 Solar Panel"
      ],
      "accessories": [
        "Carrying Case Bag for Explorer 2000 Pro",
        "Upgraded Carrying Case Bag for Explorer 1500/1000",
        "Carrying Case Bag for Explorer 1000/880",
        "Carrying Case Bag for Explorer 500/550",
        "Carrying Case Bag for Explorer 240/300",
        "Carrying Case Bag for Explorer 290",
        "Camping Light (1 Pack)",
        "Camping Light (4 Packs)",
        "Solar Panel Connector"
      ]
    };
		var placeList = [
      {"key":252,"dataCode":"Jackery.com","name":"Jackery.com"},
      {"key":253,"dataCode":"Amazon.com","name":"Amazon.com"},
      {"key":254,"dataCode":"Amazon.ca","name":"Amazon.ca"},
      {"key":255,"dataCode":"Amazon.de","name":"Amazon.de"},
      {"key":256,"dataCode":"Amazon.co.uk","name":"Amazon.co.uk"},
      {"key":257,"dataCode":"Amazon.es","name":"Amazon.es"},
      {"key":258,"dataCode":"Amazon.it","name":"Amazon.it"},
      {"key":259,"dataCode":"Amazon.fr","name":"Amazon.fr"},
      {"key":260,"dataCode":"Walmart","name":"Walmart"},
      {"key":261,"dataCode":"Harbor Freight Tools","name":"Harbor Freight Tools"},
      {"key":262,"dataCode":"The Home Depot","name":"The Home Depot"},
      {"key":263,"dataCode":"Costco","name":"Costco"},
      {"key":264,"dataCode":"Lowe's","name":"Lowe's"},
      {"key":265,"dataCode":"BestBuy","name":"BestBuy"},
      {"key":266,"dataCode":"B&H","name":"B&H"},
      {"key":267,"dataCode":"Camping World","name":"Camping World"},
      {"key":268,"dataCode":"Others","name":"Others"}
    ];

    var me = this, form = document.forms.productRegister;
			
    // register component
    me.ySelect('product_category', category);
    me.ySelect('purchase_channel', placeList);

    // date max is today
    var today = me.formatDate(new Date(), 'YYYY-MM-DD');
    form.buy_at.setAttribute("max", today);
    form.buy_at.value = today;
    
    // monitor input-field form.emit.disabled = false
    var must_field = $(".p-r-form .must-field + input");
    must_field.each(function() {
      var that = this;
      function monitor() {
        var disabled = [];

        switch($(that).attr("name")) {
          case "email":
            shopCommon.verifyEmail($(that).val()) ? $(that).parent().removeClass("input-tips") : $(that).parent().addClass("input-tips");
            break;
          case "product_category":
            var _product = form.product_name.parentElement;
            _product.classList.remove("hide");
            _product.classList.add("input-tips");

            var _text = $(that).parent().children().eq(2).text();
            if (_product.children[0].innerText !== _text) {
              _product.children[0].innerText = _text;
              /* 22/02/2022 abolish
              $http.g("/collections/" + $(that).val() + "?view=json").then(function(r) {
                var _data = r.products.map(function(item) {
                  return { "key": $(that).attr("title"), "name": $(that).attr("title") }
                });
                me.ySelect('product_name', _data);
                $('input[name="product_name"]').change()
              })
              */
              var _data = [], _arr = products[$(that).val()];
              for (var i in _arr) {
                _data.push({ "key": _arr[i], "name": _arr[i] })
              }
              me.ySelect('product_name', _data);
              $('input[name="product_name"]').change()
            }
            break;
          case "out_order_sn":
            shopCommon.checkOrderId()
            break;
          default:
            $(that).val() ? $(that).parent().removeClass("input-tips") : $(that).parent().addClass("input-tips");
            break;
        }
        
        must_field.each(function(i) { disabled[i] = !Boolean($(this).val()) })
        form.emit.disabled = !Boolean(disabled.indexOf(true) < 0 && $all(".p-r-form .input-tips").length <= 0)
      }
      $(that).blur(monitor);
      $(that).keyup(monitor);
      $(that).change(monitor)
    });

    function confirm(param) {
      me.scrollToTop(me.isMobile() ? 600 : 900);
      var frame = _$$(".p-r-form-confirm"), edit = _$$(".operate .edit"), ok = _$$(".operate .confirm"), success = _$$(".p-r-success");
      
      form.parentElement.classList.add("hide");
      frame.classList.remove("hide");

      var li = '<li><strong>First Name</strong>'+ param.first_name +'</li>';
      li += '<li><strong>Last Name</strong>'+ param.last_name +'</li>';
      li += '<li><strong>Email Address</strong>'+ param.email +'</li>';
      li += '<li><strong>Phone</strong>'+ param.phone +'</li>';
      // li += '<li><strong>Address</strong>'+ param.street + ', ' + param.address_bak + ', ' + param.state + ', ' + param.postal_code + ', ' + param.country + '</li>';
      
      var category = param.product_category.replace(/\-/g, ' ').toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
      li += '<li><strong>Jackery Product Category</strong>'+ category +'</li>';
      li += '<li><strong>'+ category +'</strong>'+ param.product_name +'</li>';

      li += '<li><strong>Product Serial Number</strong>'+ param.serial_number +'</li>';
      li += '<li><strong>Date of Purchase</strong>'+ param.buy_at +'</li>';
      li += '<li><strong>Place of Purchase</strong>'+ param.purchase_channel +'</li>';
      li += '<li><strong>Order ID</strong>'+ param.out_order_sn +'</li>';

      frame.querySelector("ul").innerHTML = li;

      edit.onclick = function() {
        form.parentElement.classList.remove("hide");
        frame.classList.add("hide");
      }

      ok.onclick = function() {
        ok.classList.add('btn--loading');
        ok.disabled = true;

        // exists id is update operate, otherwise, add
        var api = param.id ? $api.updateGuarantee : $api.orderRegister;
        param.shopify_shop_id = BOOMR.shopId;
        api(JSON.stringify(param), function() {
          me.scrollToTop(420);
          frame.classList.add("hide");
          _$$(".p-r-info-tips").classList.add("hide");
          success.classList.remove("hide")
        }, function (err) {
          ok.classList.remove('btn--loading');
          ok.disabled = false
        })
      }
    }
    
    form.onsubmit = function() {
      var param = {};
      for (var i = 0; i < form.length; i++) {
        param[form[i].name] = form[i].value.trim()
      }
      param['out_order_sn'] = param['out_order_sn'].replace(/\s+/g, '')
      confirm(param);
      return false
    }

    // edit form
    var id = shopCommon.getParam("id");
    id && $api.getGuarantee(JSON.stringify({ id: id }), function(r) {
      if (shopCommon.isEmpty(r)) {
        form.id && (form.id.value = "")
      } else {
        form.parentElement.classList.add("edit");
        for (var i = 0; i < form.length; i++) {
          switch(form[i].name) {
            case "product_category":
              form[i].value = r[form[i].name];
              document.querySelector(".y-select-" + form[i].name + " p").innerHTML = r.product_category.replace(/\-/g, ' ').toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
              setTimeout(function() {
                $('input[name="product_category"]').change()
              }, 1000);
              // monitor child change
              var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
              var element = document.querySelector('.y-select-product_name');
              var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  console.log("mutation", mutation);
                  if (mutation.type === "childList") {
                    form.product_name.value = document.querySelector(".y-select-product_name p").innerHTML = r.product_name;
                    $('input[name="product_name"]').change()
                  }
                })
              });
              observer.observe(element, { childList: true });
              break;
            case "purchase_channel":
               form[i].value = document.querySelector(".y-select-" + form[i].name + " p").innerHTML = r[form[i].name];
               $('input[name="'+ form[i].name +'"]').change();
              break;
            case "buy_at":
              form[i].value = shopCommon.formatDate(new Date(r[form[i].name].replace(/-/g, "/")), "YYYY-MM-DD");
              break;
            default:
              form[i].value = r[form[i].name];
              break;
          }
        }
      }
    }, function(e) {
      console.log(e)
    })
  },

  shortage: function(param) {
    var me = this, a = _$$(".shortage"), b = _$$(".shortage_popup"),
      c = _$$(".shortage_popup .info input"), d = _$$(".shortage_popup .info button"), e = _$$(".shortage_popup .agree input"),
      f = _$$(".shortage_popup .icon-close");
    
    function verify() {
      d.disabled = !(me.verifyEmail(c.value) && e.checked);
    }
    e.onchange = c.onkeyup = function() { verify() }

    d.onclick = function() {
      d.classList.add('btn--loading');
      d.disabled = true;
      var id = me.getParam("variant");
      var variants = id ? param.variants.filter(function(item) { return item.id === +shopCommon.getParam("variant") })[0] : param.variants[0];
      $api.shortage({
        "email": c.value, "sku": variants.sku, "sku_goods_name": variants.public_title || variants.name,
        "goods_category": param.collection, "goods_name": variants.name, "source": "1", "cr": $http.cr
      }, function() {
        b.classList.add("hide");
        d.classList.remove('btn--loading');
        d.disabled = true;
        c.value = "";
        me.toast(param.success, 5000)
      }, function(err) {
        me.toast(err.code === 40000 ? err.message : param.error, 5000, 'red');
        d.classList.remove('btn--loading');
        d.disabled = false
      })
    }
    a.onclick = function() { b.classList.remove("hide") }
    f.onclick = function() { b.classList.add("hide") }
  },

  warranty: function(text) {
    var a = _$$(".product_warranty"),
        b = _$$(".product_warranty .w_checkbox"),
        c = _$$(".product_warranty .popup_box .icon-close"),
        d = _$$(".product_warranty .popup_box span");
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = "properties[AutoWarranty]";
    input.value = text;
    b.onchange = function() {
        b.checked ? a.appendChild(input) : _$$("input[name='properties[AutoWarranty]']").remove()
    }
    c.onclick = d.onclick = function() {
        _$$(".product_warranty .popup").checked = false
    }
  }
};

// encapsulation web notification
var NotificationHandler = {
  isNotificationSupported: 'Notification' in window,

  getConfig: function(act_type, msg_id, frq_id) {
    return { union_id: cookie.get("_shopify_y"), shopify_shop_id: $('.J-shop-id').attr('shop_id'), msg_id: msg_id || '', frq_id: frq_id || '', act_type: act_type }
  },

  isPermissionGranted: function() {
    return Notification.permission === 'granted'
  },

  requestPermission: function(agree, reject) {
    let me = this;
    if (!this.isNotificationSupported) {
      console.log('the current browser does not support Notification API');
      reject && reject()
      return
    }

    // status是授权状态，如果用户允许显示桌面通知，则status为'granted'
    // permission是只读属性: default 用户没有接收或拒绝授权 不能显示通知, granted 用户接受授权 允许显示通知, denied  用户拒绝授权 不允许显示通知
    Notification.requestPermission(function(status) {
      var permission = Notification.permission;
      console.log('status is ' + status, 'permission is ' + permission);
      
      let act_type = { granted: 1, default: 2, denied: 3 }[permission];
      if (permission === 'granted') {
        cookie.set('_jk_notify_permission', permission)
        agree && agree()
      } else {
        cookie.erase('_jk_notify_permission')
        reject && reject()
      }

      $api.notifyPopup(me.getConfig(act_type))
    })
  },

  showNotification: function(obj) {
    let me = this;
    if (!this.isNotificationSupported) {
      console.log('the current browser does not support Notification API');
      return
    }
    if (!this.isPermissionGranted()) {
      console.log('the current page has not been granted for notification');
      return
    }
    var n = new Notification(obj.title, { icon: obj.image_url, body: obj.describe || '' });

    n.onshow = function() {
      // console.log('notification shows up');
      $api.notifyPopup(me.getConfig(5, obj.msg_id, obj.frq_id))
    };

    n.onclick = function() {
      // opening current view
      window.focus();
      $api.notifyPopup(me.getConfig(4, obj.msg_id, obj.frq_id), function() {
        n.close();
        window.location.href = obj.href_url
      })
    };

    // 当有错误发生时会onerror函数会被调用, 如果没有granted授权，创建Notification对象实例时，也会执行onerror函数
    n.onerror = function() {
      // console.log('notification encounters an error');
      // do something useful
    };

    // 一个消息框关闭时onclose函数会被调用
    n.onclose = function() {
      // console.log('notification is closed');
      //do something useful
    }
  },

  requestNotification: function() {
    let me = this;
    function inquiries() {
      $api.notifyInfo({ union_id: cookie.get("_shopify_y"), shopify_shop_id: $('.J-shop-id').attr('shop_id') }, function(r) {
        r.msg_display === 1 && me.showNotification(r);
        // if authorization status has not been changed, continue request next notification.
        me.isPermissionGranted() && setTimeout(function() {
          me.requestNotification()
        }, 150000)
      })
    }
    if (cookie.get("_jk_notify_permission")) {
      inquiries()
    } else {
      NotificationHandler.requestPermission(function() {
        inquiries()
      })
    }
  }
};

(function() {
  switch (location.pathname) {
    case "/": shopCommon.homePage(); break;
    case "/pages/product-registration": document.forms.productRegister && shopCommon.productRegister(); break;
    default: break;
  }
  (localStorage.getItem('JACKERY_USER_TOKEN') || cookie.get("_jk_user")) && $api.shopifyUserCheck();
  shopCommon.init();

  Shopify.theme.role === "unpublished" && shopCommon.isMobile() && setTimeout(function() { new window.VConsole() }, 1000);

  // notification even
  NotificationHandler.requestNotification()
})()

// 订阅插件逻辑-start
;(function() {
  let subscribeParams;
  // 记录访问次数-页签打开到页签关闭为1次-start
  let subscribeObj = localStorage.getItem('subscribeObj') || {}
  let subscribeStatus = sessionStorage.getItem('subscribeStatus') || false
  if (JSON.stringify(subscribeObj) === '{}') {
    let obj = {
      access_number: 1
    }
    localStorage.setItem('subscribeObj', JSON.stringify(obj))
    sessionStorage.setItem('subscribeStatus', true)
  } else {
    let data = JSON.parse(subscribeObj)
    if (!subscribeStatus) {
      data.access_number++
      localStorage.setItem('subscribeObj', JSON.stringify(data))
      sessionStorage.setItem('subscribeStatus', true)
    }
  }
  // 记录访问次数-end
  let params = {
    shopify_shop_id: $('.J-shop-id').attr('shop_id') || '',
    url: window.location.href || ''
  }
  console.log(params, 'params');
  getSubscribe(params, function(res) {
    subscribeParams = res;
    console.log(subscribeParams, 'subscribeParams');
    // 订阅插件是否需要弹出显示逻辑-start
    if (subscribeParams.act_display === 1) {
      // show_type 活动展示类型，0：每个访客一次，1：每个访客每次访问都弹出。2：每隔X次弹出，3：在时间段内弹出一次， 4：在第X次访问弹出
      let data = JSON.parse(localStorage.getItem('subscribeObj'))
      console.log(data, 'data');
      console.log(data.show_status_3,'data.show_status_3');
      
      // 判断是否修改了活动类型,若修改了活动类型则重置访问次数
      if (data.show_type !== subscribeParams.show_type || data.sub_id !== subscribeParams.sub_id) {
        data.sub_id = subscribeParams.sub_id
        data.show_type = subscribeParams.show_type
        data.access_number = 1
        data.show_status_0 = 'yes'
        data.show_status_2 = 'yes'
        data.show_status_3 = 'yes'
      }
      // 每隔X次弹出
      if (sessionStorage.getItem('show_status_2') !== 'no') {
        if (Number(subscribeParams.show_type_value) === 0) {
          data.show_status_2 = 'yes'
        } else if (Number(subscribeParams.show_type_value) > 0) {
          if (data.access_number === 1) {
            data.show_status_2 = 'yes'
          } else if (Number(subscribeParams.show_type_value) + 1 === data.access_number - data.last_open) {
            data.show_status_2 = 'yes'
          }
        }
      }
      // 在时间段内弹出一次
      if (data.currentTime) {
        data.show_status_3 = subscribeParams.server_timer - data.currentTime >= subscribeParams.show_type_value ? 'yes' : 'no'
      }
      
      if (subscribeParams.show_type === 0 && data.show_status_0 !== 'no') {
        $('#subscribe-modal').show()
        data.show_status_0 = 'no'
      } else if (subscribeParams.show_type === 1) {
        $('#subscribe-modal').show()
      } else if (subscribeParams.show_type === 2 && data.show_status_2 !== 'no') {
        $('#subscribe-modal').show()
        data.show_status_2 = 'no'
        data.last_open = data.access_number
        sessionStorage.setItem('show_status_2', 'no') // access_number未变，则需要控制弹框不再展示
      } else if (subscribeParams.show_type === 3 && data.show_status_3 !== 'no') {
        $('#subscribe-modal').show()
        data.show_status_3 = 'no'
        data.currentTime = subscribeParams.server_timer
      } else if (subscribeParams.show_type === 4 && data.access_number === Number(subscribeParams.show_type_value)) {
        $('#subscribe-modal').show()
      }
      localStorage.setItem('subscribeObj', JSON.stringify(data))
    }
    // 订阅插件是否需要弹出显示逻辑-end

    // 上报数据
    if ($('#subscribe-modal').is(':visible')) {
      let params = {
        shopify_shop_id: $('.J-shop-id').attr('shop_id') || '',
        sub_id: subscribeParams.sub_id
      }
      subscribePopup(params, function() {
        console.log('上报数据');
      }, function(err) {
        console.log(err);
      })
      // 订阅插件弹框显示则禁用底层页面滚动条
      $('html, body').css({
        overflow: 'hidden'
      })
    }

    // 处理数据显示
    $('.J-main-title').text(subscribeParams.main_title)
    $('.J-sub-title').text(subscribeParams.sub_title)
    $('.J-email').attr('placeholder', subscribeParams.email_desc)
    if (subscribeParams.first_name_display === 1) {
      $('.J-first-name').show().attr('placeholder', subscribeParams.first_name_desc)
    }
    if (subscribeParams.last_name_display === 1) {
      $('.J-last-name').show().attr('placeholder', subscribeParams.last_name_desc)
    }
  }, function(err) {
    console.log(err);
  })
  $('.J-email').on('input', function() {
    if ($(this).val()) {
      $('.J-choose-title').addClass('change-bgcolor blink-1')
      $('.J-first-step .gift-wrap').addClass('gift-img')
    } else {
      $('.J-choose-title').removeClass('change-bgcolor blink-1')
      $('.J-first-step .gift-wrap').removeClass('gift-img')
    }
  })
  let joinStatus = false; // 防止频繁点击触发接口
  $('.J-gift').click(function() {
    let emailVal = $('#subscribeEmail').val()
    let checkboxVal = $('.J-checkbox').is(':checked')
    !checkboxVal ? $('.J-checkbox').addClass('red') : emailVal === '' ? $('.J-tip').fadeIn().text($('.J-tip').data('email-tip')) : !checkEmail(emailVal) ? $('.J-tip').fadeIn().text($('.J-tip').data('emailerror-tip')) : ''
    if ($('.J-checkbox').hasClass('red')) {
      return false
    }
    if ($('.J-tip').is(':hidden')) {
      // 参与活动，获取优惠信息
      let params = {
        shopify_shop_id: $('.J-shop-id').attr('shop_id') || '',
        sub_id: subscribeParams.sub_id,
        email: $('.J-email').val()
        // shopify_shop_id : 55005249633,
        // sub_id: 999999,
        // sub_id: 3,
        // email: 'hehehexlu@gmail.com',
      }
      if (subscribeParams.first_name_display === 1) {
        params.first_name = $('.J-first-name').val() || ''
      }
      if (subscribeParams.last_name_display === 1) {
        params.last_name = $('.J-last-name').val() || ''
      }
      if (!joinStatus) {
        joinStatus = true
        joinSubscribe(params, function(res) {
          console.log(res, '参与活动，获取优惠信息');
          // 参与成功，执行过渡动画-start
          $('.J-first-step').hide()
          $('.J-second-step').fadeIn()
          setTimeout(function() {
            $('.J-choose-gift').addClass('shake-bottom')
          }, 300)
          setTimeout(function() {
            $('.J-second-step').hide()
            $('.J-third-step').fadeIn()
          }, 1000)
          // 参与成功，执行过渡动画-end
  
          // 处理参与成功后数据展示
          let joinParams = res;
          // $('.subscribe-modal .subscribe-box').removeClass('subscribe-background')
          $('.J-success-main-title').text(joinParams.success_main_title)
          $('.J-success-sub-title').text(joinParams.success_sub_title)
          $('.J-button-text').text(joinParams.button_desc)
          $('.J-button-text').attr('link', joinParams.button_link)
          if (joinParams.item_type === 0) {
            $('.J-third-step .discount-wrap').siblings().hide()
            $('.J-third-step .discount-wrap').show()
            $('.J-code-text').text(joinParams.discount.code)
            $('.J-date-text').text(joinParams.discount.start_at_desc + ' - ' + joinParams.discount.end_at_desc)
            if (joinParams.discount.is_free === 1) {
              // 免费
              $('.J-discount-text .free-wrap').show().siblings().hide()
              $('.J-discount-text .free-wrap').css('display', 'flex')
              $('.J-free-product').text(joinParams.explain_desc)
            } else {
              if (joinParams.discount.type === 1) {
                $('.J-discount-text .percentage-wrap').show().siblings().hide()
              } else {
                $('.J-discount-text .currency-wrap').show().siblings().hide()
                $('.J-discount-currency').text(joinParams.discount.currency)
              }
              $('.J-discount-val').text(joinParams.discount.value)
            }
          } else if (joinParams.item_type === 1) {
            $('.J-third-step .physical-wrap').show().siblings().hide()
            // $('.J-physical-text').text(joinParams.item_title)
            $('.J-physical-desc').text(joinParams.explain_desc)
            // setTimeout(function() {
            //   $('.subscribe-modal .subscribe-box').addClass('subscribe-background')
            // }, 1000)
          } else {
            $('.J-thanks-text').text(joinParams.item_title)
            $('.J-third-step .thanks-wrap').show().siblings().hide()
          }
        }, function(err) {
          console.log(err);
          joinStatus = false
          $('.J-tip').fadeIn().text(err.message)
        })
      }
    } else {
      $('#subscribeEmail').addClass('shake-bottom')
    }
  })
  $('#subscribeEmail').focus(function() {
    $('.J-tip').fadeOut()
    $('.J-checkbox').removeClass('red')
    $('#subscribeEmail').removeClass('shake-bottom')
  })
  $('.J-checkbox').click(function() {
    $('.J-tip').fadeOut()
    $('.J-checkbox').removeClass('red')
    $('#subscribeEmail').removeClass('shake-bottom')
  })
  $('.J-button-text').click(function() {
    let url = $('.J-button-text').attr('link') || ''
    let code = $('.J-code-text').text()
    copyText(code)
    // window.location.href = window.location.origin + '/pages/solar-generator'
    window.location.href = url
  })
  $('.close-btn').click(function() {
    $('#subscribe-modal').hide()
    // 订阅插件弹框关闭则开启底层页面滚动条
    $('html, body').css({
      overflow: ''
    })
  })
  function checkEmail(str) {
    var reg = /^[A-Za-z0-9._%+!`#$^-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,8}$/;
    return reg.test(str)
  }
  function copyText(text) {
    var textareaDom = document.createElement('textarea');
    textareaDom.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
    textareaDom.value = text;
    document.body.appendChild(textareaDom); //将textarea添加为body子元素
    textareaDom.select();
    var res = document.execCommand('copy');
    document.body.removeChild(textareaDom);//移除DOM元素
    console.log("复制成功");
    return res;
  }
  // C端：获取订阅活动接口
  function getSubscribe(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-subscribe/info", d, s, e)
  }
  // C端：参与活动接口
  function joinSubscribe(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-subscribe/join", d, s, e)
  }
  // C端：数据统计接口
  function subscribePopup(d, s, e) {
    $http.ajax("GET", $http.host() + "/v1/app-subscribe/popup", d, s, e)
  }
})()
// 订阅插件逻辑-end
