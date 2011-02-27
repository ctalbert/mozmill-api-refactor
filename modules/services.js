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
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Henrik Skupin <hskupin@mozilla.com>
 *   Geo Mealer <gmealer@mozilla.com>
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


/**
 * @name services
 * @namespace 
 */
var services = exports;


// Import global Javascript modules offered by Firefox
Components.utils.import('resource://gre/modules/Services.jsm');
Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");


/**
 *
 */
services.appinfo = Services.appinfo;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "bookmarks", function () {
  return Cc["@mozilla.org/browser/nav-bookmarks-service;1"].
         getService(Ci.nsINavBookmarksService);
});


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "browserHistory", function () {
  return Cc["@mozilla.org/browser/nav-history-service;1"].
         getService(Ci.nsIBrowserHistory);
});


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "clipboard", function () {
  return Cc["@mozilla.org/widget/clipboardhelper;1"].
         getService(Ci.nsIClipboardHelper);
});


/**
 *
 */
services.console = Services.console;


/**
 *
 */
services.contentPrefs = Services.contentPrefs;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "cookies", function () {
  return Cc["@mozilla.org/cookiemanager;1"].
         getService(Ci.nsICookieManager2);
});


/**
 *
 */
services.dirsrv = Services.dirsrv;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "downloads", function () {
  return Cc["@mozilla.org/download-manager;1"].
         getService(Ci.nsIDownloadManager);
});


/**
 *
 */
services.eTLD = Services.eTLD;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "forms", function () {
  return Cc["@mozilla.org/satchel/form-history;1"].
         getService(Ci.nsIFormHistory2);
});


/**
 *
 */
services.io = Services.io;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "history", function () {
  return Cc["@mozilla.org/browser/nav-history-service;1"].
         getService(Ci.nsINavHistoryService);
});


/**
 *
 */
services.locale = Services.locale;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "logins", function () {
  return Cc["@mozilla.org/login-manager;1"].
         getService(Ci.nsILoginManager);
});


/**
 *
 */
services.obs = Services.obs;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "pbs", function () {
  return Cc["@mozilla.org/privatebrowsing;1"].
         getService(Ci.nsIPrivateBrowsingService);
});


/**
 *
 */
services.perms = Services.perms;


/**
 *
 * XXX We can't use the native prefs service yet because it QI to nsIPrefBranch2
 * and our preferences module doesn't support it
 */
// services.prefs = Services.prefs;
XPCOMUtils.defineLazyGetter(services, "prefs", function () {
  return Cc["@mozilla.org/preferences-service;1"].
         getService(Ci.nsIPrefService);
});


/**
 *
 */
services.prompt = Services.prompt;


/**
 *
 */
services.search = Services.search;


/**
 *
 */
XPCOMUtils.defineLazyGetter(services, "session", function () {
  return Cc["@mozilla.org/browser/sessionstore;1"].
         getService(Ci.nsISessionStore);
});


/**
 *
 */
services.storage = Services.storage;


/**
 *
 */
services.strings = Services.strings;


/**
 *
 */
services.urlFormatter = Services.urlFormatter;


/**
 *
 */
services.vc = Services.vc;


/**
 *
 */
services.wm = Services.wm;


/**
 *
 */
services.ww = Services.ww;
