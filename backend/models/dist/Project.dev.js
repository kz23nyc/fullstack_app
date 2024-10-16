"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Task = require("./Task.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  tasks: [_Task.taskSchema]
}, {
  timestamps: true
}); // index
// pre save middlewares
// methods

var Project = new _mongoose["default"].model('Project', projectSchema);
var _default = Project;
exports["default"] = _default;