"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  user: null
};
var profileSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: function setUser(state, action) {
      state.user = action.payload;
    }
  }
});
var setUser = profileSlice.actions.setUser;
exports.setUser = setUser;
var _default = profileSlice.reducer;
exports["default"] = _default;