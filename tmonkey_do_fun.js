// ==UserScript==
// @name         2k18
// @version      1.2
// @description  try to take bennys in the mouth!
// @author       EarsKilla#0697
// @match        *://*.vk.com/*
// @match        *://vk.com/*
// @updateURL https://earskilla.github.io/NY2K18/tmonkey_do_fun.js
// ==/UserScript==
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.src = "//earskilla.github.io/NY2K18/2k18.js";
document.head.appendChild(script);

window.ny2018ReplaceText = function(e) {
  return e.replace(/(с новым годом|с наступающим|очько|бутылка|залупа не мытая)([\!]+)?(?=(\s|\,|\<br\>|$))?/i, function(e) {
    return '<span class="ny2017_link" onClick="Ny2k18.startFlapper(); return false;">' + e + "</span>"
  })
};
