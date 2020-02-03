/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mysql: {\n    client: 'mysql',\n    connection: { ..._constants__WEBPACK_IMPORTED_MODULE_0__[\"MYSQL\"],\n      debug: false\n    }\n  },\n  redis: {}\n});\n\n//# sourceURL=webpack:///./config/database.js?");

/***/ }),

/***/ "./config/info.js":
/*!************************!*\
  !*** ./config/info.js ***!
  \************************/
/*! exports provided: info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"info\", function() { return info; });\nconst info = {\n  serverId: parseInt(process.env.SERVER_ID),\n  nodeId: parseInt(process.env.NODE_ID),\n  kind: process.env.KIND,\n  connectionAddress: {\n    host: process.env.PUSH_HOST,\n    port: parseInt(process.env.PUSH_PORT)\n  },\n  runningAddress: {\n    host: process.env.PULL_HOST,\n    port: parseInt(process.env.PULL_PORT)\n  },\n  serverAddress: {\n    host: process.env.SERVER_HOST,\n    port: parseInt(process.env.SERVER_PORT),\n    socketUrl: process.env.SOCKET_URL,\n    socketPath: process.env.SOCKET_PATH\n  }\n};\n\n//# sourceURL=webpack:///./config/info.js?");

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: PROFILE, PROTOCOL, RUNNING_HOST, RUNNING_PORT, UI_DOMAIN, DISPATCHER_DOMAIN, INTERCOMM_PORT, INTERCOMM_HOST, CHECKING_INTERVAL, NODE_STATUS_INTERVAL, MYSQL, TABLE_NAMES, PlayerStatus, ZMQPushActions, ZMQPushNodeKinds, ZMQPullActions, BlacklistKind, EXPIRE_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROFILE\", function() { return PROFILE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROTOCOL\", function() { return PROTOCOL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RUNNING_HOST\", function() { return RUNNING_HOST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RUNNING_PORT\", function() { return RUNNING_PORT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI_DOMAIN\", function() { return UI_DOMAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DISPATCHER_DOMAIN\", function() { return DISPATCHER_DOMAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERCOMM_PORT\", function() { return INTERCOMM_PORT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INTERCOMM_HOST\", function() { return INTERCOMM_HOST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHECKING_INTERVAL\", function() { return CHECKING_INTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NODE_STATUS_INTERVAL\", function() { return NODE_STATUS_INTERVAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MYSQL\", function() { return MYSQL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TABLE_NAMES\", function() { return TABLE_NAMES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerStatus\", function() { return PlayerStatus; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZMQPushActions\", function() { return ZMQPushActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZMQPushNodeKinds\", function() { return ZMQPushNodeKinds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZMQPullActions\", function() { return ZMQPullActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlacklistKind\", function() { return BlacklistKind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPIRE_TIME\", function() { return EXPIRE_TIME; });\nconst PROFILE = process.env.PROFILE || 'development';\nconst PROTOCOL = process.env.PROTOCOL || 'http';\nconst RUNNING_HOST = process.env.RUNNING_HOST;\nconst RUNNING_PORT = process.env.RUNNING_PORT;\nconst UI_DOMAIN = process.env.UI_DOMAIN;\nconst DISPATCHER_DOMAIN = process.env.DISPATCHER_DOMAIN || '127.0.0.1:7000';\nconst INTERCOMM_PORT = parseInt(process.env.INTERCOMM_PORT);\nconst INTERCOMM_HOST = process.env.INTERCOMM_HOST;\nconst CHECKING_INTERVAL = process.env.CHECKING_INTERVAL;\nconst NODE_STATUS_INTERVAL = process.env.NODE_STATUS_INTERVAL;\nconst MYSQL = {\n  host: process.env.MYSQL_HOST,\n  user: process.env.MYSQL_USER,\n  password: process.env.MYSQL_PASSWORD,\n  database: process.env.MYSQL_DB,\n  port: process.env.MYSQL_PORT\n};\nconst TABLE_NAMES = {\n  corePlayers: \"core_players\"\n};\nconst PlayerStatus = {\n  PENDING: 1,\n  PLAYING: 2,\n  GAME_OVER: 3\n};\nconst ZMQPushActions = {\n  CURRENT_ROOMS: 1,\n  // join msg uxakrleuc heto senc actionov kxuarkem bolorin\n  ROOM_CREATED_SUCCESSFUL: 2,\n  ROOM_CREATION_FAILED: 3,\n  JOIN_ROOM_SUCCESSFUL: 4,\n  JOIN_ROOM_FAILED: 5,\n  CHECK_OFFER: 6,\n  CREATE_GAME_CONECTION: 7,\n  GAME_END_TRIGGER: 8\n};\nconst ZMQPushNodeKinds = {\n  TRANSPORT_NODE: \"TRANSPORT\",\n  ROOM_BOX_NODE: \"GAME\"\n};\nconst ZMQPullActions = {\n  NODE_STATUS: 0,\n  PLAYER_CONNECTED: 1,\n  PLAYER_DISCONNECTION: 2,\n  CREATE_ROOM: 3,\n  JOIN_OFFER: 4,\n  JOIN_OFFER_DISCONNECTION: 5,\n  RESOLVE_OFFER: 6,\n  OWNER_ANSWER: 7,\n  LIST_ROOMS: 8,\n  REMOVE_ROOM: 9,\n  TEST_PM_NODE: 20\n};\nconst BlacklistKind = {\n  SYSTEM: 1,\n  CLASSIC: 2,\n  OPEN: 3,\n  SPIN: 4\n};\nconst EXPIRE_TIME = 36000;\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./controllers/authController.js":
/*!***************************************!*\
  !*** ./controllers/authController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthController; });\n/* harmony import */ var _modules_mysql_AuthMysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/mysql/AuthMysql */ \"./modules/mysql/AuthMysql.js\");\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _services_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/errorHandler */ \"./services/errorHandler.js\");\n/* harmony import */ var _services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/responseGenerator */ \"./services/responseGenerator.js\");\n/* harmony import */ var _services_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helpers */ \"./services/helpers.js\");\n\n\n\n\n\nclass AuthController {\n  static async signIn(req, res) {\n    try {\n      const {\n        userName,\n        password\n      } = req.body;\n\n      if (!userName || !password || typeof userName !== 'string' || typeof password !== 'string') {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(2));\n        return;\n      }\n\n      const hashedPassword = _services_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].passwordGenerator(password);\n      const foundUser = await _modules_mysql_AuthMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser(userName, hashedPassword);\n\n      if (!foundUser.length) {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(3));\n        return;\n      }\n\n      const user = foundUser[0];\n      delete user.password;\n      console.log(user);\n      user.token = _services_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].tokenGenerator(user.id);\n      await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setter('orchestrator_' + user.token, 36000, user);\n      res.send(_services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate(1, user));\n    } catch (e) {\n      console.log(\"AuthController/signIn Error: \", e);\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(1));\n    }\n  }\n\n  static async signOut(req, res) {\n    try {\n      const {\n        account\n      } = req.headers;\n\n      if (!account) {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(5));\n        return;\n      }\n\n      await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleter('orchestrator_' + account.token);\n      res.send(_services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate(1, {}));\n    } catch (e) {\n      console.log(\"AuthController/signOut Error: \", e);\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(1));\n    }\n  }\n\n  static async userMiddleware(req, res, next) {\n    try {\n      const {\n        authorization\n      } = req.headers;\n\n      if (authorization) {\n        req.headers.account = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getter('orchestrator_' + authorization);\n      }\n\n      next();\n    } catch (e) {\n      console.log(\"AuthController/userMiddleware Error: \", e);\n      next();\n    }\n  }\n\n  static async userInfo(req, res) {\n    try {\n      const account = req.headers.account;\n      console.log(account);\n\n      if (!account) {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(5));\n        return;\n      }\n\n      res.send(_services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate(1, account));\n    } catch (e) {\n      console.log(\"AuthController/signOut Error: \", e);\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(1));\n    }\n  }\n\n  static async generatePassword(req, res) {\n    const {\n      password\n    } = req.body;\n    const headers = req.headers;\n\n    if (!headers.secureauth || headers.secureauth !== 'aaa') {\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(4));\n      return;\n    }\n\n    if (!password || typeof password !== 'string') {\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(2));\n      return;\n    }\n\n    const hashedPassword = _services_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].passwordGenerator(password);\n    res.send(_services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate(1, {\n      hashedPassword\n    }));\n  }\n\n  static async signInPlayer(req, res) {\n    try {\n      const {\n        token\n      } = req.body;\n\n      if (!userName || !password || typeof userName !== 'string' || typeof password !== 'string') {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(2));\n        return;\n      }\n\n      const hashedPassword = _services_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].passwordGenerator(password);\n      const foundUser = await _modules_mysql_AuthMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getUser(userName, hashedPassword);\n\n      if (!foundUser.length) {\n        res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(3));\n        return;\n      }\n\n      const user = foundUser[0];\n      delete user.password;\n      user.token = _services_helpers__WEBPACK_IMPORTED_MODULE_4__[\"default\"].tokenGenerator(user.id);\n      await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setter('orchestrator_' + user.token, 36000, user);\n      res.send(_services_responseGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"].generate(1, user));\n    } catch (e) {\n      console.log(\"AuthController/signIn Error: \", e);\n      res.send(_services_errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handle(1));\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./controllers/authController.js?");

/***/ }),

/***/ "./controllers/loadController.js":
/*!***************************************!*\
  !*** ./controllers/loadController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LoadController; });\n/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/ */ \"./services/index.js\");\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _services_balancerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/balancerService */ \"./services/balancerService.js\");\n\n\n\n/**\r\n * @class LoadController\r\n * */\n\nclass LoadController {\n  static async endpoint(req, res) {\n    try {\n      res.send(_services_balancerService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getTransportEndpoint());\n    } catch (e) {\n      res.send(_services___WEBPACK_IMPORTED_MODULE_0__[\"ErrorHandler\"].handle(1)).end();\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./controllers/loadController.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ \"./server.js\");\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _services_socketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/socketService */ \"./services/socketService.js\");\n/* harmony import */ var _services_IntercomService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/IntercomService */ \"./services/IntercomService.js\");\n/* harmony import */ var _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stacks/nodeStack */ \"./stacks/nodeStack.js\");\n/* harmony import */ var _stacks_roomStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacks/roomStack */ \"./stacks/roomStack.js\");\n/* harmony import */ var _services_systemStateService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/systemStateService */ \"./services/systemStateService.js\");\n\n\n\n\n\n\n\n_modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\nglobal._ = __webpack_require__(/*! lodash */ \"lodash\");\n_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createApp();\n_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setupExpress();\n_stacks_nodeStack__WEBPACK_IMPORTED_MODULE_4__[\"default\"].load();\n_stacks_roomStack__WEBPACK_IMPORTED_MODULE_5__[\"default\"].load();\n_services_systemStateService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initService();\n_services_IntercomService__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initService();\n_services_socketService__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initService(); // for admin tool\n\n_stacks_roomStack__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getGameProcessingRooms();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./models/node.js":
/*!************************!*\
  !*** ./models/node.js ***!
  \************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _services_IntercomService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/IntercomService */ \"./services/IntercomService.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\n\n\nconst nodes = [];\nclass Node {\n  constructor(info) {\n    this.serverId = info.serverId;\n    this.nodeId = info.nodeId;\n    this.kind = info.kind;\n    this.info = info.info || {\n      serverAddress: info.serverAddress,\n      runningAddress: info.runningAddress,\n      publicAddress: info.publicAddress\n    };\n    this.rooms = [];\n    this.setConnectionsCount(info);\n    this.setState(info);\n\n    this._zmqConnection();\n\n    this.save().catch(e => console.log('Error: models/node.js', e));\n  }\n\n  setState(info) {\n    this.state = {\n      PID: info.PID,\n      pm_id: info.pm_id,\n      monit: info.monit,\n      time: Date.now()\n    };\n  }\n\n  setConnectionsCount(info) {\n    this.connectionsCount = info.connectionsCount || 0;\n  }\n\n  destroy() {\n    const index = nodes.findIndex(node => node.serverId === this.serverId && node.nodeId === this.nodeId);\n\n    if (index !== -1) {\n      nodes.splice(index, 1);\n    }\n  }\n\n  async save() {\n    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setter(this.Key, _constants__WEBPACK_IMPORTED_MODULE_2__[\"EXPIRE_TIME\"], this.Info);\n  }\n\n  get Info() {\n    return {\n      serverId: this.serverId,\n      nodeId: this.nodeId,\n      info: this.info,\n      kind: this.kind,\n      players: this.players,\n      rooms: this.rooms,\n      state: this.state,\n      connectionsCount: this.connectionsCount\n    };\n  }\n\n  get Key() {\n    return `NODE-${this.serverId}-${this.nodeId}`;\n  }\n\n  get Weight() {\n    return this.connectionsCount;\n  }\n\n  _zmqConnection() {\n    _services_IntercomService__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connectNode(this.serverId, this.nodeId, this.info.runningAddress, this.kind);\n  }\n\n}\n\n//# sourceURL=webpack:///./models/node.js?");

/***/ }),

/***/ "./models/room.js":
/*!************************!*\
  !*** ./models/room.js ***!
  \************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Room\", function() { return Room; });\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Room {\n  constructor(info) {\n    this.key = info.key || uuid_v4__WEBPACK_IMPORTED_MODULE_2___default()();\n    this.kind = info.kind;\n    this.settings = info.settings;\n    this.requestsCount = {};\n    this.players = info.players || [];\n    this.isInGameProcess = false;\n    this.provide = {\n      state: info.provide ? info.provide.state : true,\n      offer: info.provide ? info.provide.offer : null\n    };\n    this.addRequest = Room.addRequest;\n  }\n\n  get Key() {\n    return `ROOM-${this.key}`;\n  }\n\n  addPlayer(player) {\n    this.players.push({\n      id: player.id,\n      node: player.node\n    });\n    this.save().catch(e => console.log('Error: models/room.js', e));\n  }\n\n  get Node() {\n    return this.node;\n  }\n\n  get Info() {\n    return {\n      key: this.key,\n      kind: this.kind,\n      node: this.node,\n      players: this.players,\n      settings: this.settings,\n      provide: this.provide\n    };\n  }\n\n  async update(info) {\n    //TODO: implement room update cases\n    await this.save();\n  }\n\n  async save() {\n    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setter(this.Key, _constants__WEBPACK_IMPORTED_MODULE_1__[\"EXPIRE_TIME\"], this.Info);\n  }\n\n  async delete() {\n    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleter(this.Key);\n  }\n\n  static async addRequest(id) {\n    if (this.requestsCount[id]) {\n      this.requestsCount[id].count++;\n      console.log(`<><>User ${id} offered ${this.requestsCount[id].count} times`);\n\n      if (this.requestsCount[id].count === 4) {\n        console.log(`<><>User ${id} blocked`);\n        this.requestsCount[id].blocked = true;\n      }\n    } else {\n      this.requestsCount[id] = {\n        count: 0,\n        blocked: false\n      };\n      console.log(`<><>User ${id} offered ${this.requestsCount[id].count + 1} times`);\n    }\n\n    await this.save();\n    return this.requestsCount[id].blocked;\n  }\n\n}\n\n//# sourceURL=webpack:///./models/room.js?");

/***/ }),

/***/ "./modules/mysql/AuthMysql.js":
/*!************************************!*\
  !*** ./modules/mysql/AuthMysql.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthMysql; });\n/* harmony import */ var _mysqlModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysqlModule */ \"./modules/mysql/mysqlModule.js\");\n\nclass AuthMysql {\n  static async getUser(userName, password) {\n    try {\n      console.log(password);\n      const user = await _mysqlModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].raw(`SELECT * FROM core_users WHERE username='${userName}' OR password='${password}'`);\n      return user[0];\n    } catch (error) {\n      console.log('AuthMysql/signIn Error: ', error);\n      return false;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./modules/mysql/AuthMysql.js?");

/***/ }),

/***/ "./modules/mysql/SystemMysql.js":
/*!**************************************!*\
  !*** ./modules/mysql/SystemMysql.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SystemMysql; });\n/* harmony import */ var _mysqlModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mysqlModule */ \"./modules/mysql/mysqlModule.js\");\n\nclass SystemMysql {\n  static async getState() {\n    try {\n      const res = await _mysqlModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].raw(`SELECT * FROM core_config WHERE conf_path=?`, ['SYSTEM']);\n      const state = {};\n\n      _.each(res[0], r => {\n        switch (r.conf_type) {\n          case 'NUMBER':\n            state[r.conf_key] = Number(r.conf_value);\n            break;\n\n          case 'JSON':\n            state[r.conf_key] = JSON.parse(r.conf_value);\n            break;\n\n          case 'BOOLEAN':\n            state[r.conf_key] = 'true' == r.conf_value;\n            break;\n\n          default:\n            state[r.conf_key] = r.conf_value;\n            break;\n        }\n      });\n\n      return state;\n    } catch (error) {\n      console.log('SystemMysql/getState Error: ', error);\n      return false;\n    }\n  }\n\n  static async getBlacklist(kind) {\n    try {\n      const res = await _mysqlModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].raw(`SELECT player_id FROM core_blacklist WHERE kind=?`, [kind]);\n      return _.map(res[0], 'player_id');\n    } catch (error) {\n      console.log('SystemMysql/getBlacklist Error: ', error);\n      return false;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./modules/mysql/SystemMysql.js?");

/***/ }),

/***/ "./modules/mysql/mysqlModule.js":
/*!**************************************!*\
  !*** ./modules/mysql/mysqlModule.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/database */ \"./config/database.js\");\n\n\nconst knex = __webpack_require__(/*! knex */ \"knex\")(_config_database__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mysql);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (knex);\n\n//# sourceURL=webpack:///./modules/mysql/mysqlModule.js?");

/***/ }),

/***/ "./modules/redis/redisModule.js":
/*!**************************************!*\
  !*** ./modules/redis/redisModule.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RedisModule; });\n/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! async-redis */ \"async-redis\");\n/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(async_redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PREFIX = `bc_or-`;\n/**\r\n * @class RedisModule\r\n * */\n\nclass RedisModule {\n  /**\r\n   * Connecting to redis and listening to events\r\n   * @function connect\r\n   * @memberOf RedisModule\r\n   * @return void\r\n   * */\n  static connect() {\n    RedisModule.client = async_redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient();\n    RedisModule.client.on('ready', () => {\n      console.log('Redis connection opened');\n    });\n    RedisModule.client.on('error', () => {\n      console.log('Can not connect to redis');\n    });\n  }\n\n  static async getKeys(key) {\n    key = PREFIX + key;\n\n    try {\n      return await RedisModule.client.keys(key); // return JSON.parse(result);\n    } catch (error) {\n      console.log('RedisModule/getter Error: ', error);\n      return false;\n    }\n  }\n  /**\r\n   * Storing value in redis with key and duration\r\n   * @function setter\r\n   * @param {String} key - redis key to store value\r\n   * @param {Number} duration - value in seconds to keep value in redis\r\n   * @param {Object} value - value for storing in redis\r\n   * @memberOf RedisModule\r\n   * @return {Boolean}\r\n   * */\n\n\n  static async setter(key, duration, value) {\n    key = PREFIX + key;\n\n    try {\n      await RedisModule.client.SETEX(key, duration, JSON.stringify(value));\n      return true;\n    } catch (error) {\n      console.log('RedisModule/setter Error: ', error);\n      return false;\n    }\n  }\n  /**\r\n   * Setting expire to stored value with key\r\n   * @function expireSetter\r\n   * @param {String} key\r\n   * @param {Number} duration\r\n   * @memberOf RedisModule\r\n   * @returns {Promise<boolean>}\r\n   */\n\n\n  static async expireSetter(key, duration) {\n    key = PREFIX + key;\n\n    try {\n      const result = await RedisModule.client.EXPIRE(key, duration);\n      return !!result;\n    } catch (error) {\n      console.log('RedisModule/expireSetter Error: ', error);\n      return false;\n    }\n  }\n  /**\r\n   * Getting value from redis with key\r\n   * @function getter\r\n   * @param {String} key - key that keeps value in redis\r\n   * @param prefixed\r\n   * @memberOf RedisModule\r\n   * @return {Object}\r\n   * */\n\n\n  static async getter(key, prefixed) {\n    key = prefixed ? key : PREFIX + key;\n\n    try {\n      const result = await RedisModule.client.get(key);\n      return JSON.parse(result);\n    } catch (error) {\n      console.log('RedisModule/getter Error: ', error);\n      return false;\n    }\n  }\n  /**\r\n   * Deleting value from redis with key\r\n   * @function deleter\r\n   * @param {String} key - key that keeps value in redis\r\n   * @memberOf RedisModule\r\n   * @return {Boolean}\r\n   * */\n\n\n  static async deleter(key) {\n    key = PREFIX + key;\n\n    try {\n      // console.log(\"deleted\",key);\n      return await RedisModule.client.del(key);\n    } catch (error) {\n      console.log('RedisModule/deleter Error: ', error);\n      return false;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./modules/redis/redisModule.js?");

/***/ }),

/***/ "./routes/api.js":
/*!***********************!*\
  !*** ./routes/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_loadController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/loadController */ \"./controllers/loadController.js\");\n/* harmony import */ var _controllers_authController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/authController */ \"./controllers/authController.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post('/endpoint', _controllers_loadController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].endpoint);\nrouter.post('/user-info', _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userMiddleware, _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userInfo);\nrouter.post('/sign-in', _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userMiddleware, _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].signIn);\nrouter.post('/sign-out', _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userMiddleware, _controllers_authController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].signOut);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/api.js?");

/***/ }),

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./routes/api.js\");\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\nrouter.use('/api', _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Server; });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./routes/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\n/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pm-intercom */ \"pm-intercom\");\n/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pm_intercom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _config_info__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/info */ \"./config/info.js\");\n\n\n\n\n\n\n\n\n\n\n/**\r\n * @class Server\r\n * */\n\nclass Server {\n  static createApp() {\n    Server.app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n  }\n\n  static setupExpress() {\n    Server.app.server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(Server.app);\n    Server.app.disable('x-powered-by');\n    Server.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\n    Server.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n      extended: false\n    }));\n    Server.app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('tiny'));\n    Server.app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()());\n    Server.app.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\n    Server.app.use('/', _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    Server.app.get('/test', (req, res) => {\n      res.json({\n        test: 'test'\n      }).end();\n    });\n    Server.app.server.listen(_constants__WEBPACK_IMPORTED_MODULE_7__[\"RUNNING_PORT\"], () => console.log(`Server listening on http://${_constants__WEBPACK_IMPORTED_MODULE_7__[\"RUNNING_HOST\"]}:${_constants__WEBPACK_IMPORTED_MODULE_7__[\"RUNNING_PORT\"]}`));\n  }\n\n  static setupIntercom() {\n    pm_intercom__WEBPACK_IMPORTED_MODULE_8___default.a.init(_config_info__WEBPACK_IMPORTED_MODULE_9__[\"info\"]);\n  }\n\n  static getApp() {\n    return Server.app;\n  }\n\n}\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./services/IntercomService.js":
/*!*************************************!*\
  !*** ./services/IntercomService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IntercomService; });\n/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zeromq */ \"zeromq\");\n/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zeromq__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stacks/nodeStack */ \"./stacks/nodeStack.js\");\n/* harmony import */ var _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stacks/roomStack */ \"./stacks/roomStack.js\");\n/* harmony import */ var _lobbyValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lobbyValidator */ \"./services/lobbyValidator.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ \"./services/index.js\");\n/* harmony import */ var _timerService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timerService */ \"./services/timerService.js\");\n\n\n\n\n\n\n\n\n\n\nconst pullSocket = zeromq__WEBPACK_IMPORTED_MODULE_0___default.a.socket(\"pull\", {});\nconst pushSockets = [];\nclass IntercomService {\n  static initService() {\n    IntercomService.setupZeroMQ();\n    IntercomService.setupMessageHandling();\n    _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].init(); // IntercomService.startHeartChecking(); //for admon tool\n  }\n\n  static setupZeroMQ() {\n    pullSocket.bindSync(`tcp://${_constants__WEBPACK_IMPORTED_MODULE_1__[\"INTERCOMM_HOST\"]}:${_constants__WEBPACK_IMPORTED_MODULE_1__[\"INTERCOMM_PORT\"]}`);\n  }\n\n  static setupMessageHandling() {\n    pullSocket.on('message', async msg => {\n      const actions = JSON.parse(msg);\n\n      for (const action of actions) {\n        switch (action.type) {\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].NODE_STATUS:\n            {\n              let node = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(action.node);\n\n              if (!node) {\n                node = await _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(action.node);\n              }\n\n              node.setState(action.node);\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].PLAYER_CONNECTED:\n            {\n              const node = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(action.node);\n\n              if (node) {\n                const rooms = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms;\n                node.connectionsCount = action.connectionsCount;\n                await _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].save(node);\n                _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initIntimeTrigger(action.id + \"pending_delete\", () => {\n                  console.log(`${action.id} Player rooms reset timer Stoped`);\n                });\n                _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initIntimeTrigger(action.id + \"game_delete\", async () => {\n                  console.log(`${action.id} Player rooms reset timer Stoped`);\n                });\n                IntercomService.sendMessage(action.node.nodeId, action.node.serverId, {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                  id: action.id,\n                  msg: rooms\n                });\n              }\n\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].CREATE_ROOM:\n            {\n              let validationMSG = _lobbyValidator__WEBPACK_IMPORTED_MODULE_4__[\"LobbyValidator\"].checkRoomSettings(action.room.settings, action.player);\n              let node = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(action.node);\n\n              if (validationMSG.error) {\n                IntercomService.sendMessage(action.node.nodeId, action.node.serverId, {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].ROOM_CREATION_FAILED,\n                  msg: { ...validationMSG,\n                    id: action.player.id\n                  }\n                });\n              } else {\n                action.settings = validationMSG.settings;\n                action.player.node = {\n                  nodeId: action.node.nodeId,\n                  serverId: action.node.serverId,\n                  runningAddress: node.info.runningAddress\n                };\n                const room = await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push({\n                  settings: action.settings,\n                  ...action.room,\n                  player: action.player\n                });\n                console.log(room);\n                const rooms = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms;\n                IntercomService.sendMessage(action.node.nodeId, action.node.serverId, {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].ROOM_CREATED_SUCCESSFUL,\n                  msg: {\n                    data: room,\n                    id: action.player.id\n                  }\n                });\n                IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                  rooms\n                });\n              }\n\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].JOIN_OFFER:\n            {\n              let node = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(action.node);\n              let canJoin = await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].canJoin(action.data.key, action.player);\n\n              if (!canJoin.error) {\n                const rooms = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms;\n\n                if (canJoin.room.provide.state) {\n                  let validationMSG = _lobbyValidator__WEBPACK_IMPORTED_MODULE_4__[\"LobbyValidator\"].checkRoomSettings(canJoin.room.settings, action.player);\n\n                  if (validationMSG.error) {\n                    //FIXME :  PETQA JOIN ANOXIN ASEL VOR BLACK LISTUMA TE CHE?\n                    IntercomService.sendMessage(node.nodeId, node.serverId, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].JOIN_ROOM_FAILED,\n                      msg: { ...validationMSG,\n                        id: action.id\n                      }\n                    });\n                    break;\n                  }\n\n                  const room = await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].joinOffer(canJoin.room, {\n                    state: false,\n                    offer: {\n                      id: action.player.id,\n                      node: {\n                        nodeId: node.nodeId,\n                        serverId: node.serverId,\n                        runningAddress: node.info.runningAddress\n                      }\n                    }\n                  });\n                  IntercomService.sendMessage(node.nodeId, node.serverId, {\n                    type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CHECK_OFFER,\n                    msg: {\n                      error: false,\n                      id: room.players[0].id,\n                      key: canJoin.room.key,\n                      offer: room.provide.offer.id //player who wants to join\n\n                    }\n                  });\n                  _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTimer(room.key, 50, async () => {\n                    await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteRoomByKey(room.key);\n                    IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                      rooms\n                    });\n                  });\n                  IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                    type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                    rooms\n                  });\n                } else {\n                  IntercomService.sendMessage(node.nodeId, node.serverId, {\n                    type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].JOIN_ROOM_FAILED,\n                    msg: { ..._index__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"].handle(21),\n                      id: action.player.id\n                    }\n                  });\n                  break;\n                }\n              } else {\n                IntercomService.sendMessage(node.nodeId, node.serverId, {\n                  type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].JOIN_ROOM_FAILED,\n                  msg: { ..._index__WEBPACK_IMPORTED_MODULE_5__[\"ErrorHandler\"].handle(canJoin.code),\n                    id: action.player.id\n                  }\n                });\n              }\n\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].OWNER_ANSWER:\n            {\n              let room = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getOne(action.data.key);\n              let rooms = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms;\n\n              if (room && room.players[0].id === action.id && !room.provide.state) {\n                if (action.data.agree) {\n                  const gameNode = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSlimNode(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].ROOM_BOX_NODE);\n                  room.provide.state = false;\n                  room.isInGameProcess = true;\n                  room.players.push(room.provide.offer);\n                  room.provide.offer = null;\n                  room.gameNode = {\n                    nodeId: gameNode.nodeId,\n                    serverId: gameNode.serverId,\n                    address: gameNode.info.runningAddress\n                  };\n                  await room.save();\n                  let gameData = {\n                    roomKey: room.key,\n                    players: room.players\n                  };\n                  _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initIntimeTrigger(gameData.roomKey, () => {\n                    console.log(`<><>Created game in ${gameData.roomKey} room`);\n                    IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                      rooms\n                    });\n                    IntercomService.sendMessage(gameNode.nodeId, gameNode.serverId, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CREATE_GAME_CONECTION,\n                      gameData\n                    });\n                  });\n                } else {\n                  room.provide.state = true;\n                  let offer = room.provide.offer;\n                  room.provide.offer = null;\n                  room.save();\n                  _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].initIntimeTrigger(room.key, () => {\n                    console.log(`<><>Rejected ${offer.id} offer`);\n                    IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                      rooms\n                    });\n                    IntercomService.sendMessage(offer.node.nodeId, offer.node.serverId, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].JOIN_ROOM_FAILED,\n                      msg: {\n                        id: offer.id,\n                        data: \"YOUR OFFER REJECTED\"\n                      }\n                    });\n                  });\n                }\n              } else {\n                console.log(`Wrong room`);\n              }\n\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].REMOVE_ROOM:\n            {\n              await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(action.room);\n              const rooms = _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms;\n              IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                msg: {\n                  error: false,\n                  data: rooms\n                }\n              });\n              break;\n            }\n\n          case _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPullActions\"].PLAYER_DISCONNECTION:\n            {\n              let node = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(action.node);\n\n              if (node) {\n                node.connectionsCount = action.connectionsCount;\n                await _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].save(node);\n                _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTimer(action.id + \"pending_delete\", 3, async () => {\n                  const rooms = await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deletePlayerPendingRooms(action.id);\n                  IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                    type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                    rooms\n                  });\n                  _timerService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addTimer(action.id + \"game_delete\", 3, async () => {\n                    IntercomService.deletePlayerContainingRooms(action.id);\n                    IntercomService.broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].TRANSPORT_NODE, {\n                      type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CURRENT_ROOMS,\n                      rooms\n                    });\n                  });\n                });\n              }\n\n              break;\n            }\n          // case ZMQPullActions.TEST_PM_NODE: {\n          //     //todo: check if the player is already playing?\n          //     console.log('action  => ', action);\n          //     let room = {\n          //         key: action.data.key,\n          //         players: ['123', '456']\n          //     };\n          //     const slimNode = NodeStack.getSlimNode('GAME');\n          //     this.addMessage(slimNode.serverId, slimNode.nodeId, {\n          //         type: ZMQPushActions.START_GAME_OK,\n          //         room\n          //     });\n          //     this.send();\n          //     break;\n          // }\n\n          default:\n            break;\n        }\n      }\n    });\n  }\n\n  static connectNode(serverId, nodeId, address, kind) {\n    const pushSocket = zeromq__WEBPACK_IMPORTED_MODULE_0___default.a.socket('push', {});\n    const tcpAddress = `tcp://${address.host}:${address.port}`;\n    pushSocket.connect(tcpAddress);\n    pushSockets.push({\n      serverId,\n      nodeId,\n      kind,\n      pushSocket\n    });\n  }\n\n  static broadcastMessage(nodeKind, ...message) {\n    console.log(`<<<Sended message to all ${nodeKind} Rooms`);\n    let sockets = pushSockets.filter(sock => {\n      return sock.kind == nodeKind;\n    });\n\n    for (let socket of sockets) {\n      socket.pushSocket.send(JSON.stringify(message));\n    }\n\n    ;\n  }\n\n  static sendMessage(nodeId, serverId, ...message) {\n    console.log(`<<<Sended message to ${nodeId} id Room`);\n    const socket = pushSockets.find(sock => sock.serverId === serverId && sock.nodeId === nodeId);\n    socket.pushSocket.send(JSON.stringify(message));\n  }\n\n  static getAllGameConnections(playerId) {\n    const gameNode = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSlimNode(_constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushNodeKinds\"].ROOM_BOX_NODE);\n\n    for (let room of _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms) {\n      console.log(room);\n\n      if (room.players[0].id === playerId) {\n        console.log(\"Hello\");\n        let gameData = {\n          roomKey: room.key,\n          players: room.players\n        };\n        IntercomService.sendMessage(gameNode.nodeId, gameNode.serverId, {\n          type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].CREATE_GAME_CONECTION,\n          gameData\n        });\n      }\n    }\n  }\n\n  static async deletePlayerContainingRooms(playerid) {\n    const gameRoomsInfo = await _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deletePlayerGameRooms(playerid);\n\n    for (let key in gameRoomsInfo) {\n      const gameNode = gameRoomsInfo[key].gameNode;\n      IntercomService.sendMessage(gameNode.nodeId, gameNode.serverId, {\n        type: _constants__WEBPACK_IMPORTED_MODULE_1__[\"ZMQPushActions\"].GAME_END_TRIGGER,\n        gameRoomInfo: {\n          key,\n          id: gameRoomsInfo[key].id,\n          gameStatus: gameRoomsInfo[key].gameStatus\n        }\n      });\n    }\n\n    ;\n  }\n\n  static connectAllGames() {\n    console.log(\"AAAAAA\", _stacks_roomStack__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Rooms);\n  } // // for admin tool\n  // static startHeartChecking() {\n  //     setInterval(() => {\n  //         const servers = [];\n  //         const time = Date.now();\n  //         for (const node of NodeStack.Nodes) {\n  //             const server = servers.find(item => item.serverId === node.serverId);\n  //             let status = 0;\n  //             if ((time - node.state.time) < NODE_STATUS_INTERVAL) {\n  //                 status = 1;\n  //             } else if ((time - node.state.time) < NODE_STATUS_INTERVAL * 1.5) {\n  //                 status = 2;\n  //             }\n  //             if (server) {\n  //                 server.nodes.push({\n  //                     serverId: node.serverId,\n  //                     nodeId: node.nodeId,\n  //                     gameId: node.gameId,\n  //                     kind: node.kind,\n  //                     address: node.address,\n  //                     info: node.info,\n  //                     state: node.state,\n  //                     status\n  //                 });\n  //             } else {\n  //                 servers.push({\n  //                     serverId: node.serverId,\n  //                     nodes: [{\n  //                         serverId: node.serverId,\n  //                         nodeId: node.nodeId,\n  //                         gameId: node.gameId,\n  //                         kind: node.kind,\n  //                         address: node.address,\n  //                         info: node.info,\n  //                         state: node.state,\n  //                         status\n  //                     }]\n  //                 });\n  //             }\n  //         }\n  //         SocketService.sendStatus(servers);\n  //     }, CHECKING_INTERVAL);\n  // }\n\n\n}\n\n//# sourceURL=webpack:///./services/IntercomService.js?");

/***/ }),

/***/ "./services/balancerService.js":
/*!*************************************!*\
  !*** ./services/balancerService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BalancerService; });\n/* harmony import */ var _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stacks/nodeStack */ \"./stacks/nodeStack.js\");\n\nclass BalancerService {\n  static getTransportEndpoint() {\n    const slim = _stacks_nodeStack__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSlimNode(\"TRANSPORT\");\n\n    if (slim) {\n      return slim.Info.info.publicAddress;\n    } else return {};\n  }\n\n}\n\n//# sourceURL=webpack:///./services/balancerService.js?");

/***/ }),

/***/ "./services/errorHandler.js":
/*!**********************************!*\
  !*** ./services/errorHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorHandler; });\nconst errors = {\n  1: 'Something went wrong',\n  2: `Please set 'x-ps-id' header`,\n  3: 'Invalid nonce',\n  4: 'Invalid timestamp',\n  5: 'Invalid sign',\n  6: `Wrong 'x-ps-id'`,\n  7: 'There are no available games for your Game-Service-Id',\n  8: 'Parameters are not valid',\n  9: 'Invalid token',\n  10: 'Invalid request body',\n  11: 'Session init failed (1)',\n  12: 'Session init failed (2)',\n  13: 'System is under maintenance',\n  14: 'You are not allowed to create tables',\n  15: 'You are not allowed to create classic belote tables',\n  16: 'You are not allowed to create open belote tables',\n  17: 'Incorrect arguments',\n  18: 'Not enough balance',\n  19: 'You cannot connect to your desk',\n  20: 'Your request is rejected',\n  21: 'herti mej mna aper',\n  22: 'Room doesnt exist',\n  23: 'Room is full',\n  24: 'You are in this room blocklist'\n};\nclass ErrorHandler {\n  static handle(code = 1) {\n    return {\n      error: true,\n      code,\n      message: errors[code],\n      data: []\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./services/errorHandler.js?");

/***/ }),

/***/ "./services/helpers.js":
/*!*****************************!*\
  !*** ./services/helpers.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Helpers; });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);\nconst merchantCreatingKey = process.env.MERCHANT_CREATING_KEY;\n\n\nclass Helpers {\n  static passwordGenerator(password) {\n    const md5Sum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('md5'),\n          shaSum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha1'),\n          hashString = password + 'SuperSecretPasswordHashCreatingInPlayMaster',\n          tempMD5 = md5Sum.update(hashString).digest('hex'),\n          tempSHA1 = shaSum.update(tempMD5);\n    return tempSHA1.digest('hex');\n  }\n\n  static generatePlayServiceId(plainText) {\n    const md5Sum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('md5'),\n          shaSum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha1'),\n          hashString = plainText + 'KeyForGenerationMerchantKey',\n          tempMD5 = md5Sum.update(hashString).digest('hex'),\n          tempSHA1 = shaSum.update(tempMD5);\n    return tempSHA1.digest('hex');\n  }\n\n  static generateClientMerchantKey(plainText) {\n    const md5Sum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('md5'),\n          shaSum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha1'),\n          hashString = plainText + merchantCreatingKey,\n          tempMD5 = md5Sum.update(hashString).digest('hex'),\n          tempSHA1 = shaSum.update(tempMD5);\n    return tempSHA1.digest('hex'); // let cipher = crypto.createCipher('aes-256-cbc', new Buffer(merchantCreatingKey)),\n    //     encrypted = cipher.update(plainText);\n    // console.log('xut',[encrypted, cipher.final()])\n    //\n    // encrypted = Buffer.concat([encrypted, cipher.final()]);\n    // console.log(111,encrypted.toString('hex'));\n    // return  encrypted.toString('hex');\n  }\n\n  static tokenGenerator(userId) {\n    const md5Sum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('md5');\n    const shaSum = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha1');\n    const date = new Date();\n    const salt = '123465798ABSDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-+=' + userId;\n    const hashString = date + salt;\n    const tempMD5 = md5Sum.update(hashString).digest('hex');\n    const tempSHA1 = shaSum.update(tempMD5);\n    return tempSHA1.digest('hex');\n  }\n\n  static generateSign(headers, body, merchantKey) {\n    const merged = { ...headers,\n      ...body\n    },\n          sorted = _(merged).toPairs().sortBy(0).fromPairs().value(),\n          urlEncodedString = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(sorted);\n\n    return crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha1', merchantKey).update(urlEncodedString).digest('hex');\n  }\n\n}\n\n//# sourceURL=webpack:///./services/helpers.js?");

/***/ }),

/***/ "./services/index.js":
/*!***************************!*\
  !*** ./services/index.js ***!
  \***************************/
/*! exports provided: BalancerService, Helpers, ResponseGenerator, ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./services/helpers.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Helpers\", function() { return _helpers__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _responseGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responseGenerator */ \"./services/responseGenerator.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ResponseGenerator\", function() { return _responseGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorHandler */ \"./services/errorHandler.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorHandler\", function() { return _errorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _balancerService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./balancerService */ \"./services/balancerService.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BalancerService\", function() { return _balancerService__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./services/index.js?");

/***/ }),

/***/ "./services/lobbyValidator.js":
/*!************************************!*\
  !*** ./services/lobbyValidator.js ***!
  \************************************/
/*! exports provided: LobbyValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LobbyValidator\", function() { return LobbyValidator; });\n/* harmony import */ var _systemStateService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systemStateService */ \"./services/systemStateService.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./services/index.js\");\n\n\n\nclass LobbyValidator {\n  static roomValidator({\n    player,\n    kind,\n    settings\n  }) {\n    let blackListError = LobbyValidator.checkBlackList(player, kind);\n\n    if (!!blackListError) {\n      return blackListError;\n    } else {\n      return LobbyValidator.checkRoomSettings(settings, player);\n    }\n  }\n\n  static checkBlackList(player, kind) {\n    //Check SYSTEM blacklist\n    //FIXME : Xxxacoxy kara lobby mtni?\n    const systemBlacklist = _systemStateService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].SYSTEM);\n\n    if (systemBlacklist.indexOf(player.id) > -1) {\n      return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(14);\n    } //why check in all blacklists?\n\n\n    switch (kind) {\n      case _constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].CLASSIC:\n        {\n          const classicBlacklist = _systemStateService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].CLASSIC);\n\n          if (classicBlacklist.indexOf(player.id) > -1) {\n            return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(15);\n          }\n\n          break;\n        }\n\n      case _constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].OPEN:\n        {\n          const openBlacklist = _systemStateService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].OPEN);\n\n          if (openBlacklist.indexOf(player.id) > -1) {\n            return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(16);\n          }\n\n          break;\n        }\n\n      default:\n        break;\n    }\n  }\n\n  static checkRoomSettings(settings, player) {\n    try {\n      const {\n        isPointDifference = false,\n        amount,\n        winRounds = 0,\n        winPoints = 51,\n        timeout = 20,\n        combs = 'all',\n        trumpType = 'witht_no_trump',\n        isPrivate = false,\n        isCapot2x = false,\n        dave = false\n      } = settings;\n      let nominalMinBalance;\n\n      if (!amount) {\n        return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(17);\n      }\n\n      if (isPointDifference) {\n        if (winRounds > 0) {\n          return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(17);\n        }\n\n        nominalMinBalance = winPoints * amount;\n      } else {\n        nominalMinBalance = amount;\n      }\n\n      if (isCapot2x && winPoints) {\n        return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(17);\n      }\n\n      if (dave) {\n        nominalMinBalance *= dave;\n      } // Balance check\n\n\n      if (player.balance < nominalMinBalance) {\n        return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(18);\n      }\n\n      settings = {\n        isPointDifference,\n        amount,\n        winRounds,\n        winPoints,\n        timeout,\n        combs,\n        trumpType,\n        isPrivate,\n        isCapot2x,\n        dave\n      };\n      return {\n        error: false,\n        settings\n      };\n    } catch (e) {\n      console.log(' error=> ', e);\n      return _index__WEBPACK_IMPORTED_MODULE_2__[\"ErrorHandler\"].handle(17);\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./services/lobbyValidator.js?");

/***/ }),

/***/ "./services/responseGenerator.js":
/*!***************************************!*\
  !*** ./services/responseGenerator.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ResponseGenerator; });\nconst messages = {\n  1: 'Success'\n};\nclass ResponseGenerator {\n  static generate(code = 1, data = []) {\n    return {\n      error: false,\n      code,\n      message: messages[code],\n      data\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./services/responseGenerator.js?");

/***/ }),

/***/ "./services/socketService.js":
/*!***********************************!*\
  !*** ./services/socketService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SocketService; });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ \"./server.js\");\n\n\nclass SocketService {\n  static initService() {\n    SocketService.io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()(_server__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getApp().server);\n    SocketService.setupStatus();\n  }\n\n  static setupStatus() {\n    SocketService.statusNSP = SocketService.io.of('/status');\n    SocketService.statusNSP.on('connection', socket => {\n      console.log('---CONENCTED---'); // Connection ...\n    });\n  }\n\n  static sendStatus(status) {\n    SocketService.statusNSP.emit('status', status);\n  }\n\n}\n\n//# sourceURL=webpack:///./services/socketService.js?");

/***/ }),

/***/ "./services/systemStateService.js":
/*!****************************************!*\
  !*** ./services/systemStateService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SystemStateService; });\n/* harmony import */ var _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/mysql/SystemMysql */ \"./modules/mysql/SystemMysql.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\n\nconst stateHolder = {};\nconst blacklistHolder = {};\nclass SystemStateService {\n  static async initService() {\n    const data = await _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n\n    if (data) {\n      stateHolder.state = data;\n    }\n\n    blacklistHolder[_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].SYSTEM] = await _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].SYSTEM);\n    blacklistHolder[_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].CLASSIC] = await _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].CLASSIC);\n    blacklistHolder[_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].OPEN] = await _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].OPEN);\n    blacklistHolder[_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].SPIN] = await _modules_mysql_SystemMysql__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getBlacklist(_constants__WEBPACK_IMPORTED_MODULE_1__[\"BlacklistKind\"].SPIN);\n    console.log(blacklistHolder);\n  }\n\n  static getState() {\n    return stateHolder.state || null;\n  }\n\n  static getBlacklist(kind) {\n    return blacklistHolder[kind] || [];\n  }\n\n  static getMaintenanceMode() {\n    return stateHolder.state ? stateHolder.state.aintenanceMode : false;\n  }\n\n}\n\n//# sourceURL=webpack:///./services/systemStateService.js?");

/***/ }),

/***/ "./services/timerService.js":
/*!**********************************!*\
  !*** ./services/timerService.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TimerService; });\nconst timerStack = [];\nclass TimerService {\n  static init() {\n    setInterval(() => {\n      TimerService.checkDaedlines();\n    }, 1000);\n  }\n\n  static checkDaedlines() {\n    for (let offer of timerStack) {\n      if (offer.daedline >= TimerService.getCurrentData) {\n        if (offer.inTimeTrigger) {\n          offer.inTimeTrigger();\n          TimerService.deleteOffer(offer);\n        } else {\n          console.log(Math.floor(offer.daedline) - Math.floor(TimerService.getCurrentData));\n          continue;\n        }\n      } else {\n        offer.timeUpTrigger();\n        TimerService.deleteOffer(offer);\n      }\n    }\n  }\n\n  static addTimer(key, interval, timeUpTrigger, inTimeTrigger) {\n    console.log(`added ${key} timer`);\n    let offer = {\n      key,\n      daedline: TimerService.getCurrentData + interval,\n      timeUpTrigger,\n      inTimeTrigger\n    };\n    timerStack.push(offer);\n  }\n\n  static get getCurrentData() {\n    return parseInt(Date.now()) / 1000;\n  }\n\n  static deleteOffer(offer) {\n    const offerIndex = timerStack.indexOf(offer);\n    timerStack.splice(offerIndex, 1);\n  }\n\n  static initIntimeTrigger(key, inTimeTrigger) {\n    for (let timer of timerStack) {\n      if (timer.key == key) {\n        timer.inTimeTrigger = inTimeTrigger;\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./services/timerService.js?");

/***/ }),

/***/ "./stacks/nodeStack.js":
/*!*****************************!*\
  !*** ./stacks/nodeStack.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nodeStack; });\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _models_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/node */ \"./models/node.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants.js\");\n\n\n\n\nfunction _predicate({\n  serverId,\n  nodeId\n}) {\n  return item => {\n    return item.serverId === serverId && item.nodeId === nodeId;\n  };\n}\n\nconst nodes = [];\nclass nodeStack {\n  static async load() {\n    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getKeys(\"NODE-*\");\n\n    _.each(data, async key => {\n      let info = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getter(key, true);\n      nodes.push(new _models_node__WEBPACK_IMPORTED_MODULE_1__[\"Node\"](info));\n    });\n\n    if (data) {\n      console.log(`nodeService.initService loaded ${data.length} nodes from storage`);\n    }\n  }\n\n  static add(info) {\n    let node = nodes.find(_predicate(info));\n\n    if (!node) {\n      nodes.push(node = new _models_node__WEBPACK_IMPORTED_MODULE_1__[\"Node\"](info));\n    } // console.log('NodeService.add', node);\n\n\n    return node;\n  }\n\n  static async save(info) {\n    const node = nodes.find(_predicate(info));\n\n    if (node) {\n      await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setter(node.Key, _constants__WEBPACK_IMPORTED_MODULE_2__[\"EXPIRE_TIME\"], node.Info);\n    }\n  }\n\n  static get(info) {\n    return nodes.find(_predicate(info));\n  }\n\n  static get Nodes() {\n    return nodes;\n  }\n  /**\r\n   * @param kind\r\n   * @returns {Node}\r\n   */\n\n\n  static getSlimNode(kind) {\n    /**\r\n     * @type {Node|null}\r\n     */\n    let min = null;\n\n    for (const node of nodes.filter(item => item.kind === kind)) {\n      if (!min || min.Weight > node.Weight) {\n        min = node;\n      }\n    }\n\n    return min;\n  }\n\n}\n\n//# sourceURL=webpack:///./stacks/nodeStack.js?");

/***/ }),

/***/ "./stacks/roomStack.js":
/*!*****************************!*\
  !*** ./stacks/roomStack.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return roomStack; });\n/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ \"./modules/redis/redisModule.js\");\n/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/room */ \"./models/room.js\");\n\n\n\nfunction _predicate({\n  key\n}) {\n  return item => {\n    return item.Key === key;\n  };\n}\n\nlet rooms = [];\nclass roomStack {\n  static async load() {\n    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getKeys(\"ROOM-*\");\n\n    _.each(data, async key => {\n      let info = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getter(key, true);\n      rooms.push(new _models_room__WEBPACK_IMPORTED_MODULE_1__[\"Room\"](info));\n    });\n\n    if (data) {\n      console.log(`roomStack loaded ${data.length} rooms from storage`);\n    }\n  }\n\n  static async canJoin(key, player) {\n    let room = roomStack.getOne(key);\n\n    if (!room) {\n      return {\n        error: true,\n        code: 22\n      };\n    } else if (room.players.length >= 2) {\n      return {\n        error: true,\n        code: 23\n      };\n    } else {\n      let roomOwner = room.players.find(item => {\n        return item.id === player.id;\n      });\n\n      if (roomOwner) {\n        return {\n          error: true,\n          code: 19\n        };\n      } else {\n        if (await room.addRequest(player.id)) {\n          return {\n            error: true,\n            code: 24\n          };\n        } else {\n          return {\n            error: false,\n            room\n          };\n        }\n      }\n    }\n  }\n\n  static async join(info) {\n    const room = new _models_room__WEBPACK_IMPORTED_MODULE_1__[\"Room\"](info);\n    await room.addPlayer(info.player);\n  }\n\n  static async push(info) {\n    const room = new _models_room__WEBPACK_IMPORTED_MODULE_1__[\"Room\"](info);\n    await room.addPlayer(info.player);\n    rooms.push(room);\n    console.log(`<><>Player ${info.player.id} create ${room.kind} room, with ${room.key} key`);\n    return room;\n  }\n\n  static async joinOffer(info, provide) {\n    info.provide = provide;\n    let room = new _models_room__WEBPACK_IMPORTED_MODULE_1__[\"Room\"](info);\n    console.log(`Want to join ${room.key} key`);\n    await room.save();\n    return room;\n  }\n\n  static async update(info) {\n    const room = rooms.find(_predicate(info));\n\n    if (!room) {\n      return console.error('roomStack.update: room not found', info);\n    }\n\n    await room.update(info);\n  }\n\n  static async delete(info) {\n    const index = rooms.findIndex(_predicate(info));\n\n    if (-1 == index) {\n      return console.error('roomStack.delete: room not found', info);\n    }\n\n    await rooms[index].delete(info);\n    rooms.splice(index, 1);\n  }\n\n  static deleteRoomByKey(key) {\n    let roomKey = rooms.findIndex(room => {\n      return room.key == key;\n    });\n    rooms.splice(roomKey, 1);\n    console.log(`<><>Dedelted ${key} room`);\n  }\n\n  static get Rooms() {\n    return rooms;\n  }\n\n  static async sync() {// TODO: implement consistency check with room nodes\n  }\n\n  static getOne(key) {\n    return rooms.find(item => {\n      return item.key === key;\n    });\n  }\n\n  static async deletePlayerPendingRooms(id) {\n    for (let i = 0; i < rooms.length; i++) {\n      if (rooms[i].players[0].id === id && !rooms[i].isInGameProcess) {\n        console.log(`<><>Deleted ${id} player's ${rooms[i].key} room`);\n        await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleter(`ROOM-${rooms[i].key}`);\n        rooms.splice(i, 1);\n        i--;\n      }\n    }\n\n    ;\n    return rooms;\n  }\n\n  static async deletePlayerGameRooms(id) {\n    let playerGameRoomsList = {};\n\n    for (let i = 0; i < rooms.length; i++) {\n      if (rooms[i].isInGameProcess) {\n        const key = rooms[i].key;\n\n        if (rooms[i].players[0].id === id) {\n          playerGameRoomsList[key] = {\n            id,\n            gameNode: rooms[i].gameNode,\n            gameStatus: \"owner\"\n          };\n          await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleter(`ROOM-${key}`);\n          rooms.splice(i, 1);\n          i--;\n          console.log(`Deleted ${key} room`);\n          console.log(`Owner ${id} loosed`);\n        } else if (rooms[i].players[1].id === id) {\n          playerGameRoomsList[key] = {\n            id,\n            gameNode: rooms[i].gameNode,\n            gameStatus: \"guest\"\n          };\n          await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleter(`ROOM-${key}`);\n          rooms.splice(i, 1);\n          i--;\n          console.log(`Deleted ${key} room`);\n          console.log(`Guest ${id} loosed`);\n        }\n      }\n    }\n\n    ;\n    return playerGameRoomsList;\n  }\n\n  static async getGameProcessingRooms() {\n    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getKeys(\"ROOM-*\");\n    const gameProcessingRooms = [];\n\n    for (let key of data) {\n      console.log((await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getter(key, true)));\n    } // const y = await RedisModule.getter(data[0], true)\n    // console.log(y);\n\n  }\n\n  static async disconnectAndLoosePlayer(id) {}\n\n}\n\n//# sourceURL=webpack:///./stacks/roomStack.js?");

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./index.js?");

/***/ }),

/***/ "async-redis":
/*!******************************!*\
  !*** external "async-redis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"async-redis\");\n\n//# sourceURL=webpack:///external_%22async-redis%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"knex\");\n\n//# sourceURL=webpack:///external_%22knex%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "pm-intercom":
/*!******************************!*\
  !*** external "pm-intercom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pm-intercom\");\n\n//# sourceURL=webpack:///external_%22pm-intercom%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "zeromq":
/*!*************************!*\
  !*** external "zeromq" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"zeromq\");\n\n//# sourceURL=webpack:///external_%22zeromq%22?");

/***/ })

/******/ });