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
 *   Henrik Skupin <mail@hskupin.info> (Original Author)
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

const { Class } = require("../external/inheritance");
const { Expect } = require("../assertions");

var init = require("../init");


const TEST_DATA = [
  { fun: "pass", params: ["has to pass"], result: true},
  { fun: "fail", params: ["has to fail"], result: false},

  { fun: "ok", params: [true, "true has to pass"], result: true},
  { fun: "ok", params: [false, "false has to fail"], result: false},
  { fun: "ok", params: [0, "0 has to fail"], result: false},
  { fun: "ok", params: [1, "1 has to pass"], result: true},
  { fun: "ok", params: [2, "2 has to pass"], result: true},
  { fun: "ok", params: ["", "empty string has to fail"], result: false},
  { fun: "ok", params: ["test", "non-empty string has to pass"], result: true},
  { fun: "ok", params: [null, "null has to fail"], result: false},
  { fun: "ok", params: [undefined, "undefined has to fail"], result: false},

  { fun: "equal", params: [true, true, "true is equal to true"], result: true},
  { fun: "equal", params: [false, false, "false is equal to false"], result: true},
  { fun: "equal", params: [true, false, "true is not equal to false"], result: false},
  { fun: "equal", params: [null, undefined, "null is not equal to undefined"], result: false},

  { fun: "notEqual", params: [true, true, "true is equal to true"], result: false},
  { fun: "notEqual", params: [true, false, "true is not equal to false"], result: true},
  { fun: "notEqual", params: [undefined, null, "undefined is not equal to null"], result: true},

  { fun: "match", params: ["Mozilla", /Mozilla/, "regex matches string"], result: true},
  { fun: "match", params: ["Mozilla", /mozilla/, "regex does not match string"], result: false},
  { fun: "match", params: ["Mozilla", /mozilla/i, "regex matches string"], result: true},

  { fun: "notMatch", params: ["Mozilla", /firefox/, "regex does not match string"], result: true},
  { fun: "notMatch", params: ["Mozilla", /Mozilla/, "regex matches string"], result: false},
];


/**
 * Soft expect class for assertions which should not add failing and passing frames
 */
var SoftExpect = Class.extend(Expect, {
  initialize: function SoftExpect(aStartFrame) {
    this.parent(aStartFrame);
  },

  _logPass: function SoftExpect__logPass(aResult) {
    // We do not want to add a passing frame but only take care of the
    // return values of the _test method
  },

  _logFail: function SoftExpect__logFail(aResult) {
    // We do not want to add a failing frame but only take care of the
    // return values of the _test function
  }
});


function setupModule(module) {
  init.testModule(module);
  softExpect = new SoftExpect();
}


/**
 * Tests for supported expect methods
 */
function testExpect() {
  for each (var test in TEST_DATA) {
    let message = "except." + test.fun + " for [" +
                  test.params.join(", ") + "]";

    let result = softExpect[test.fun].apply(softExpect, test.params);
    expect.equal(result, test.result, message);
  }
}

/**
 * Tests for supported assert methods
 */
function testAssert() {
  for each (var test in TEST_DATA) {
    let message = "assert." + test.fun + " for [" +
                  test.params.join(", ") + "]";
    let result = false;

    try {
      result = assert[test.fun].apply(assert, test.params);
    }
    catch (ex) {
    }

    if (test.result !== result)
      expect.fail(message);
    else
      expect.pass(message);
  }
}
