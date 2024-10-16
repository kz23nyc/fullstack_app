"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Project = _interopRequireDefault(require("../models/Project.js"));

var _Task = _interopRequireDefault(require("../models/Task.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express.Router();
/**
 * GET /api/projects/
 * @description fetches all projects
 */

router.get("/", function _callee(req, res, next) {
  var projects;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].find());

        case 3:
          projects = _context.sent;

          if (projects) {
            res.json({
              projects: projects
            });
          } else {
            res.json({
              message: "No projects found"
            });
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
/**
 * GET /api/projects/:id
 * @description fetches single project by the id
 */

router.get("/:id", function _callee2(req, res, next) {
  var project;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].findById(req.params.id));

        case 3:
          project = _context2.sent;

          if (project) {
            res.json({
              project: project
            });
          } else {
            res.json({
              message: "No project found with id: ".concat(req.params.id)
            });
          }

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
/**
 * POST /api/projects/
 * @description create a new project document
 */

router.post("/", function _callee3(req, res, next) {
  var newProject;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(req.body);
          _context3.next = 4;
          return regeneratorRuntime.awrap(_Project["default"].create(req.body));

        case 4:
          newProject = _context3.sent;

          if (newProject) {
            res.status(201).json({
              project: newProject
            });
          } else {
            res.status(400).json({
              message: "Error creating new project"
            });
          }

          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
/**
 * DELETE /api/projects/:id
 */

router["delete"]("/:id", function _callee4(req, res, next) {
  var deletedProject;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].findByIdAndDelete(req.params.id));

        case 3:
          deletedProject = _context4.sent;

          if (deletedProject) {
            res.json({
              message: "Project deleted: ".concat(req.params.id),
              deletedProject: deletedProject
            });
          } else {
            res.json({
              message: "Error deleting project: ".concat(req.params.id)
            });
          }

          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
/**
 * PUT /api/projects/:id
 * @description Update a document by the id
 */

router.put("/:id", function _callee5(req, res, next) {
  var id, body, updatedProject;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          body = req.body;
          _context5.next = 5;
          return regeneratorRuntime.awrap(_Project["default"].findByIdAndUpdate(id, body, {
            "new": true
          }));

        case 5:
          updatedProject = _context5.sent;

          if (updatedProject) {
            res.json({
              updatedProject: updatedProject
            });
          } else {
            res.json({
              message: "Error updating project: ".concat(req.params.id)
            });
          }

          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
/**
 * POST /api/projects/:id/tasks
 * @description create a new task for a specific project
 */

router.post("/:id/tasks", function _callee6(req, res, next) {
  var project, task;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_Project["default"].findById(req.params.id));

        case 3:
          project = _context6.sent;
          console.log(project);

          if (project) {
            _context6.next = 8;
            break;
          }

          res.status(404).json({
            message: "Project not found: ".concat(req.params.id)
          });
          return _context6.abrupt("return");

        case 8:
          _context6.next = 10;
          return regeneratorRuntime.awrap(_Task["default"].create(req.body));

        case 10:
          task = _context6.sent;

          if (!task) {
            _context6.next = 18;
            break;
          }

          // add the task to the tasks array of the project
          project.tasks.push(task); // save the project

          _context6.next = 15;
          return regeneratorRuntime.awrap(project.save());

        case 15:
          res.status(201).json({
            project: project
          });
          _context6.next = 19;
          break;

        case 18:
          res.status(400).json({
            message: "Error creating task"
          });

        case 19:
          _context6.next = 24;
          break;

        case 21:
          _context6.prev = 21;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);

        case 24:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 21]]);
});
var _default = router;
exports["default"] = _default;