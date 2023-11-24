"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUser = void 0;

var _instances = require("@/global/instances");

// update user function
var UpdateUser = function UpdateUser(data) {
  var url, response;
  return regeneratorRuntime.async(function UpdateUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = "/users/profile";
          _context.next = 4;
          return regeneratorRuntime.awrap(_instances.API.patch(url, data));

        case 4:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.UpdateUser = UpdateUser;