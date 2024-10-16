"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.taskSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var taskSchema = new _mongoose["default"].Schema({
  projectId: {
    type: _mongoose["default"].ObjectId,
    ref: 'Task',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});
exports.taskSchema = taskSchema;
var Task = new _mongoose["default"].model('Task', taskSchema);
var _default = Task;
exports["default"] = _default;