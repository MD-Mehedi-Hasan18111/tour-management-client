"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allReducers = void 0;

var _reduxPersist = require("redux-persist");

var _AuthSlice = _interopRequireDefault(require("./features/Auth/AuthSlice"));

var _session = _interopRequireDefault(require("redux-persist/lib/storage/session"));

var _ProfileSlice = _interopRequireDefault(require("./features/Profile/ProfileSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authConfig = {
  key: "auth",
  storage: _session["default"]
};
var persistedAuthReducer = (0, _reduxPersist.persistReducer)(authConfig, _AuthSlice["default"]);
var allReducers = {
  auth: persistedAuthReducer,
  profile: _ProfileSlice["default"]
};
exports.allReducers = allReducers;