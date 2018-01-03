// ==UserScript==
// @name         2k18
// @version      1.1
// @description  try to take pisos in the mouth!
// @author       EarsKilla#0697
// @match        *://*.vk.com/*
// @match        *://vk.com/*
// @updateURL https://earskilla.github.io/NY2K18/tmonkey_do_fun.js
// ==/UserScript==

/* jshint ignore:start */
if(typeof console == "object") console.log("domain",location.href);
var script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.src = "//earskilla.github.io/NY2K18/2k18.js";
document.head.appendChild(script);

script.onload = function(){
    setInterval(function(){
        var x = document.getElementsByClassName("ny2017_link");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].setAttribute("onclick", "Ny2k18.startFlapper(); return false;");
        }
    }, 1000);
};
/* jshint ignore:end */
