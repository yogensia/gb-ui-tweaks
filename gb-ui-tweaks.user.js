// ==UserScript==
// @name         GameBanana UI Tweaks
// @namespace    http://gamebanana.com/members/1328950
// @version      0.01
// @description  Set of GameBanana User Interface tweaks writen in CSS & JS
// @author       Yogensia
// @match        http://*.gamebanana.com/*
// @grant        none
// ==/UserScript==

// Licensed under MIT License, for more info:
// https://raw.githubusercontent.com/yogensia/gb-ui-tweaks/master/LICENSE

// DOCUMENT OUTLINE
// 1. SETUP
// 2. CSS INIT



// SETUP
// ==================================================================

// variables
var VERSION = "0.01"; // script version
var EDGECSS = false; // use development version of CSS

// comment to enable console logging
console.log = function() {}



// CSS INIT
// ==================================================================

// DOM ready
$(function() {

	// if no uberstyle is found
	if ( $("link[href*='/uberstyles/']").length = 0 ) {
		// add CSS
		if ( EDGECSS == true ) {
			var gbUiTweaksCSS = '<link rel="stylesheet" href="http://yogensia.com/gamebanana/gb-ui-tweaks/gb-ui-tweaks.css">';
		} else {
			var gbUiTweaksCSS = '<link rel="stylesheet" href="https://rawgit.com/yogensia/gb-ui-tweaks/master/gb-ui-tweaks.css">';
		}
		$("head").append(gbUiTweaksCSS);
	}

});