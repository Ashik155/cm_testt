// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({7:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error;
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;

},{}],5:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;

},{"./bundle-url":7}],3:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./../assets/spicy.svg":["572d78da2341c14fc7735da8aee8ee93.svg",6],"_css_loader":5}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  items: [{
    name: "Meat Lasagna",
    description: "Fresh baked lasagna layered with ground beef, ricotta, mozzarella and house made tomato sauce",
    type: "pasta",
    price: 9.99,
    spicy: false,
    menuOrder: 0
  }, {
    name: "Calamari",
    description: "Tender squid rings fried in a light seasoning, served with balsamic mayo dip",
    type: "starters",
    price: 8.5,
    spicy: false,
    menuOrder: 1
  }, {
    name: "Margherita",
    description: "Fresh sliced mozzarella with a special plum tomato sauce and fresh basil",
    type: "pizza",
    price: 15.95,
    spicy: false,
    menuOrder: 1
  }, {
    name: "Baked Manicotti",
    description: "Filled with ricotta cheese and topped with romano, mozzarella and a side of pasta",
    type: "pasta",
    price: 9.99,
    spicy: false,
    menuOrder: 3
  }, {
    name: "Chicken Parmigiana",
    description: "Freshed breaded chicken breast with house made tomato sauce, romano, mozzarella cheese and a side of pasta",
    type: "pasta",
    price: 10.29,
    spicy: false,
    menuOrder: 6
  }, {
    name: "Eggplant Parmigiana",
    description: "Layers of fresh battered eggplant with house made tomato sauce, romano, mozzarella chees and a side of pasta",
    type: "pasta",
    price: 8.99,
    spicy: false,
    menuOrder: 5
  }, {
    name: "Spinach Pizza",
    description: "Garlic pizza with spinach, ricotta and mozzarella",
    type: "pizza",
    price: 16.5,
    spicy: false,
    menuOrder: 2
  }, {
    name: "Grandma's Pizza",
    description: "Sicilian pizza crust with fresh sliced mozzarella, marinara sauce, fresh basil and olive oil",
    type: "pizza",
    price: 19.95,
    spicy: false,
    menuOrder: 3
  }, {
    name: "Soup of the Day",
    description: "Please ask your server",
    type: "starters",
    price: 6.5,
    spicy: false,
    menuOrder: 2
  }, {
    name: "Standard",
    description: "White pizza with fresh sliced mozzarella, prosciutto, white sauce, fresh basil and olive oil",
    type: "pizza",
    price: 19.95,
    spicy: true,
    menuOrder: 0
  }, {
    name: "Baked Ziti",
    description: "With tomato sauce and mozzarella",
    type: "pasta",
    price: 8.99,
    spicy: false,
    menuOrder: 4
  }, {
    name: "Baked Ravioli",
    description: "Filled with ricotta cheese and topped with romano, mozzarella and house made tomato sauce",
    type: "pasta",
    price: 9.99,
    spicy: false,
    menuOrder: 2
  }, {
    name: "Stuffed Shells",
    description: "Filled with ricotta cheese and topped with romano, mozzarella and house made tomato sauce",
    type: "pasta",
    price: 9.99,
    spicy: false,
    menuOrder: 1
  }, {
    name: "Chicken Wing",
    description: "Shaved breaded chicken with a special blend of hot wing sauce and bleu cheese with mozzarella",
    type: "pizza",
    price: 19.95,
    spicy: true,
    menuOrder: 4
  }, {
    name: "Insalata Caprese",
    description: "A classic Italian salada made with freshly sliced mozzarella, beef tomatoes and fresh basil",
    type: "starters",
    price: 6.5,
    spicy: false,
    menuOrder: 0
  }]
};
},{}],8:[function(require,module,exports) {
const renderHTML = (item) => {
  var listItem = document.createElement("li");
  if (item.spicy) {
    listItem.innerHTML = `<h3 class="disclaimer spicy">${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
  } else {
    listItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
  }
  return listItem;
};
const renderListOnly = (pizzaList, pizza, pizzaContainer) => {
  pizzaList.innerHTML = "";
  pizza.forEach((item) => {
    if (!item.spicy) {
      var pizzaItem = document.createElement("li");
      pizzaItem.innerHTML = `<h3>  ${item.name}</h3><p>${item.description}</p><p>Price : $${item.price}0</p>`;
      pizzaList.appendChild(pizzaItem);
    }
  });
   pizzaContainer.appendChild(pizzaList);
   return 
};

const renderSpicyList = (pizzaList, pizza, pizzaContainer)=>{
    pizzaList.innerHTML = "";
  pizza.forEach((item) => {
    pizzaList.appendChild(renderHTML(item));
  });
  pizzaContainer.appendChild(pizzaList);
    return 
}
module.exports = {
  renderHTML,
  renderListOnly,
  renderSpicyList
};

},{}],9:[function(require,module,exports) {

},{}],2:[function(require,module,exports) {
"use strict";

require("./styles.css");

var _menu = require("./menu");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { renderHTML, renderListOnly, renderSpicyList } = require("./renderHtml");
const sortingObject = require("./sortingObject");
const menuItems = _menu2.default.items;

//first I Will be filtring out the items based on type and then sorting using the hellper function SortMe
const pizza = menuItems.filter(item => item.type === "pizza").sort((a, b) => a.menuOrder - b.menuOrder);
const starters = menuItems.filter(item => item.type === "starters").sort((a, b) => a.menuOrder - b.menuOrder);
const pastas = menuItems.filter(item => item.type === "pasta").sort((a, b) => a.menuOrder - b.menuOrder);

//Grabing the DOM FOR THE STARTER
const startersContainer = document.getElementById("starters");
var startersList = document.createElement("ul");
starters.forEach(item => {
  startersList.appendChild(renderHTML(item));
});
startersContainer.appendChild(startersList);

//grabbing the DOM FOR THE PASTA
const pastasContainer = document.getElementById("pasta");
var pastasList = document.createElement("ul");
pastas.forEach(item => {
  pastasList.appendChild(renderHTML(item));
});
pastasContainer.appendChild(pastasList);

//grabbbing The DOM FOR THE PIZZA
const pizzaContainer = document.getElementById("pizza");
var pizzaList = document.createElement("ul");
//keeping eye on the checkbox
const checkbox = document.getElementById("spicy");
if (checkbox.checked) {
  renderSpicyList(pizzaList, pizza, pizzaContainer);
}
checkbox.addEventListener("change", e => {
  if (checkbox.checked) {
    renderSpicyList(pizza);
  } else {
    renderListOnly(pizzaList, pizza, pizzaContainer);
  }
});
},{"./styles.css":3,"./menu":4,"./renderHtml":8,"./sortingObject":9}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:63516/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])