"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUser = exports.RegisterUser = void 0;

var _instances = require("@/global/instances");

var RegisterUser = function RegisterUser(data) {
  var url, response;
  return regeneratorRuntime.async(function RegisterUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          url = "/users/signup-user";
          _context.next = 4;
          return regeneratorRuntime.awrap(_instances.API.post(url, data));

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
}; // login service function


exports.RegisterUser = RegisterUser;

var LoginUser = function LoginUser(data) {
  var url, response;
  return regeneratorRuntime.async(function LoginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          url = "/auth/login";
          _context2.next = 4;
          return regeneratorRuntime.awrap(_instances.API.post(url, data));

        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.LoginUser = LoginUser;