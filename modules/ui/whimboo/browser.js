/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is MozMill Test code.
 *
 * The Initial Developer of the Original Code is the Mozilla Foundation.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Henrik Skupin <hskupin@mozilla.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

var Inheritance = require("../external/inheritance");
var Navbar = require("navbar");
var Tabbar = require("tabbar");

// Needed if we have special widgets
var Widgets = exports.Widgets = require("widgets");

var wm = Cc["@mozilla.org/appshell/window-mediator;1"]
         .getService(Ci.nsIWindowMediator);

/**
 * Get an instance of the browser window
 */
var get = exports.get = function get(aWindow) {
  return new Browser(aWindow);
}

/**
 * UI class to handle the browser window
 */
var Browser = exports.Browser = Inheritance.Class.extend(Widgets.Element, {
  initialize : function Browser_initialize(aWindow) {
    this._window = aWindow || wm.getMostRecentWindow("navigator:browser");
    this._document = this._window.document;

    this.parent(this._document, "#main-window");
  },

  get navbar() {
    this._navbar = this._navbar || new Navbar.NavBar(this.node);
    return this._navbar;
  },

  get tabbar() {
    this._tabbar = this._tabbar || new Tabbar.TabBar(this.node);
    return this._tabbar;
  },

  get window() {
    return this._window;
  },

  // temporarily - should be part of the tabs module.
  openURL : function Browser_openURL(aURL, aTimeout) {
    this.navbar.locationbar.type(aURL);
    this.navbar.locationbar.keypress("VK_RETURN", {});
    this.controller.waitForPageLoad(aTimeout);
  },

  waitForPageLoad : function Browser_waitForPageLoad(aTimeout) {
    this.controller.waitForPageLoad(aTimeout);
  }
});
