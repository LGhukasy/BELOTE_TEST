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

/***/ "./configs/info.js":
/*!*************************!*\
  !*** ./configs/info.js ***!
  \*************************/
/*! exports provided: info */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "info", function() { return info; });
const info = {
  serverId: parseInt(process.env.SERVER_ID),
  nodeId: parseInt(process.env.NODE_ID),
  kind: process.env.KIND,
  connectionAddress: {
    host: process.env.PUSH_HOST,
    port: parseInt(process.env.PUSH_PORT)
  },
  runningAddress: {
    host: process.env.PULL_HOST,
    port: parseInt(process.env.PULL_PORT)
  },
  serverAddress: {
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT)
  },
  publicAddress: {
    host: process.env.PUBLIC_HOST,
    port: parseInt(process.env.PUBLIC_PORT),
    socketPath: process.env.SOCKET_PATH
  }
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_zeroMQService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/zeroMQService */ "./services/zeroMQService.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _services_socketIOService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/socketIOService */ "./services/socketIOService.js");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ "./server.js");
/* harmony import */ var _services_createPlayerService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/createPlayerService */ "./services/createPlayerService.js");





_server__WEBPACK_IMPORTED_MODULE_3__["default"].createApp();
_server__WEBPACK_IMPORTED_MODULE_3__["default"].setupExpress();
_server__WEBPACK_IMPORTED_MODULE_3__["default"].setupIntercom();
_modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_1__["default"].connect();
_services_createPlayerService__WEBPACK_IMPORTED_MODULE_4__["default"].create();
_services_socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].initService();
_services_zeroMQService__WEBPACK_IMPORTED_MODULE_0__["default"].initService();

/***/ }),

/***/ "./modules/redis/redisModule.js":
/*!**************************************!*\
  !*** ./modules/redis/redisModule.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RedisModule; });
/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! async-redis */ "async-redis");
/* harmony import */ var async_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(async_redis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configs/info */ "./configs/info.js");


const PREFIX = `bc_or-`;
class RedisModule {
  static connect() {
    RedisModule.client = async_redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient();
    RedisModule.client.on('ready', () => {
      console.log('<><>Redis connection opened');
    });
    RedisModule.client.on('error', () => {
      console.log('Can not connect to redis');
    });
  }

  static async setter(key, duration, value) {
    key = PREFIX + key;

    try {
      return await RedisModule.client.SETEX(key, duration, JSON.stringify(value));
    } catch (error) {
      console.log('RedisModule/setter Error: ', error);
      return false;
    }
  }

  static async getter(key) {
    key = PREFIX + key;

    try {
      const result = await RedisModule.client.get(key);
      return JSON.parse(result);
    } catch (error) {
      console.log('RedisModule/getter Error: ', error);
      return false;
    }
  }

  static async deleter(key) {
    key = PREFIX + key;

    try {
      return await RedisModule.client.del(key);
    } catch (error) {
      console.log('RedisModule/deleter Error: ', error);
      return false;
    }
  }

  static async deleteAll() {
    RedisModule.client.flushall();
    console.log(`>>>Redis successfully cleared`);
  }

}

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Server; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pm-intercom */ "pm-intercom");
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pm_intercom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/info */ "./configs/info.js");


 // import morgan from 'morgan';
// import helmet from 'helmet';




/**
 * @class Server
 * */

class Server {
  static createApp() {
    Server.app = express__WEBPACK_IMPORTED_MODULE_1___default()();
  }

  static setupExpress() {
    Server.app.server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(Server.app);
    Server.app.disable('x-powered-by'); // Server.app.use(bodyParser.json());
    // Server.app.use(bodyParser.urlencoded({extended: false}));
    // Server.app.use(morgan('tiny'));
    // Server.app.use(helmet());

    Server.app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());
    Server.app.server.listen(_configs_info__WEBPACK_IMPORTED_MODULE_5__["info"].serverAddress.port, () => {
      console.log(`<><>Server listening on http://${_configs_info__WEBPACK_IMPORTED_MODULE_5__["info"].serverAddress.host}:${_configs_info__WEBPACK_IMPORTED_MODULE_5__["info"].serverAddress.port}`);
    });
  }

  static getApp() {
    return Server.app;
  }

  static setupIntercom() {
    pm_intercom__WEBPACK_IMPORTED_MODULE_4___default.a.init(_configs_info__WEBPACK_IMPORTED_MODULE_5__["info"]);
  }

}

/***/ }),

/***/ "./services/clientDataValidator.js":
/*!*****************************************!*\
  !*** ./services/clientDataValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClientDatavalidator; });
/* harmony import */ var _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/errorHandler */ "./services/errorHandler.js");

class ClientDatavalidator {
  static roomCreatevalidator(data) {
    if (!data.kind) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(3);
    } else if (!data.settings) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(4);
    } else if (data.settings.amount === undefined || data.settings.isPrivate === undefined) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(5);
    } else if (typeof data.kind !== 'string' || typeof data.settings !== 'object' || typeof data.settings.amount !== 'number' || typeof data.settings.isPrivate !== 'boolean') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static joinOfferValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (typeof data.key !== 'string') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static ownerAnswerValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (data.agree === undefined) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(7);
    } else if (typeof data.key !== 'string' || typeof data.agree !== 'boolean') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static spectatorConnectionValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (typeof data.key !== 'string') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static tradeStageMoveValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (data.move) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(8);
    } else if (typeof data.move.type !== 'string' || typeof data.move.trumpSuit !== 'string') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static moveStageMoveValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (data.move) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(8);
    } else if (typeof data.move.type !== 'string' || typeof data.move.card !== 'object') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static exitGameValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else {
      return {
        error: false,
        data
      };
    }
  }

  static confirmationValidator(data) {
    if (!data.key) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(6);
    } else if (data.answer === undefined) {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(9);
    } else if (typeof data.key !== 'string' || typeof data.answer !== 'boolean') {
      return _services_errorHandler__WEBPACK_IMPORTED_MODULE_0__["default"].handle(2);
    } else {
      return {
        error: false,
        data
      };
    }
  }

}

/***/ }),

/***/ "./services/constants.js":
/*!*******************************!*\
  !*** ./services/constants.js ***!
  \*******************************/
/*! exports provided: PlayerStatus, ZMQPushActions, ZMQPullActions, SocketOnEvents, SocketEmitEvents, SocketEvent, EXPIRE_TIME, ID_TO_UUID, Players */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatus", function() { return PlayerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMQPushActions", function() { return ZMQPushActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMQPullActions", function() { return ZMQPullActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketOnEvents", function() { return SocketOnEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEmitEvents", function() { return SocketEmitEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEvent", function() { return SocketEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRE_TIME", function() { return EXPIRE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ID_TO_UUID", function() { return ID_TO_UUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Players", function() { return Players; });
const PlayerStatus = {
  PENDING: 1,
  PLAYING: 2,
  GAME_OVER: 3
};
const ZMQPushActions = {
  NODE_STATUS: 0,
  PLAYER_CONNECTED: 1,
  PLAYER_DISCONNECTION: 2,
  CREATE_ROOM: 3,
  JOIN_OFFER: 4,
  JOIN_OFFER_DISCONNECTION: 5,
  RESOLVE_OFFER: 6,
  OWNER_ANSWER: 7,
  LIST_ROOMS: 8,
  REMOVE_ROOM: 9,
  TRADE_STAGE_MOVE: 20,
  MOVE_STAGE_MOVE: 21,
  GAME_EVENT: 10,
  GAME_CONNECTION_CREATED: 12,
  CONNECT_SPECTATOR: 11,
  TEST_PM_NODE: 20,
  TEST_PM_NODE_TRADE: 21,
  TEST_PM_NODE_MOVE: 22
};
const ZMQPullActions = {
  CURRENT_ROOMS: 1,
  ROOM_CREATED_SUCCESSFUL: 2,
  ROOM_CREATION_FAILED: 3,
  JOIN_ROOM_SUCCESSFUL: 4,
  JOIN_ROOM_FAILED: 5,
  CHECK_OFFER: 6,
  CREATE_GAME_CONNECTION: 7,
  GAME_MESSAGE: 8,
  SPECTATE_MESSAGE: 9,
  GAME_END_TRIGGER: 10
};
const SocketOnEvents = {
  CONNECTION: "connection",
  CREATE_ROOM: "create-room",
  JOIN_OFFER: "join-room",
  OWNER_ANSWER: "owner-answer",
  DISCONNECION: "disconnect",
  TRADE_STAGE_MOVE: "trade",
  MOVE_STAGE_MOVE: "move",
  GAME_EVENT: "game",
  SPECTATE_GAME: "spectate",
  EXIT_GAME: "exit"
};
const SocketEmitEvents = {
  CURRENT_ROOMS: "room-list",
  ROOM_CREATED_SUCCESFULLY: "room-created",
  ROOM_JOIN_OFFER: "join-offer",
  GAME_EVENT: "game-event",
  SPECATE_EVENT: "spectate-event",
  ERROR_MESSAGE: "error-msg"
};
const SocketEvent = {
  LIST_ROOMS: 1,
  CREATE_ROOM: 2,
  JOIN_ROOM: 3,
  DELETE_ROOM: 4
};
const EXPIRE_TIME = 3600;
const ID_TO_UUID = {
  1: "a7063ab69e3e67aa6a4e6b309a7b970ff0593317"
};
const Players = [{
  id: "Levon777",
  balance: 20000,
  token: "Levon7"
}, {
  id: "Saqo777",
  balance: 20000,
  token: "Saqo7"
}, {
  id: "Aghas777",
  balance: 20000,
  token: "Aghas7"
}, {
  id: "Armine777",
  balance: 20000,
  token: "Armine7"
}, {
  id: "admin",
  balance: 20000,
  token: "admin"
}];

/***/ }),

/***/ "./services/createPlayerService.js":
/*!*****************************************!*\
  !*** ./services/createPlayerService.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./services/constants.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  async create() {
    // console.log(Players);
    for (let player of _constants__WEBPACK_IMPORTED_MODULE_1__["Players"]) {
      const token = `player_${player.token}`;
      const PLAYER = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getter(token);
      PLAYER || (await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].setter(token, 30000, player));
      console.log(`<><>Added ${token} player in redis`);
    }
  }

});

/***/ }),

/***/ "./services/errorHandler.js":
/*!**********************************!*\
  !*** ./services/errorHandler.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorHandler; });
const errors = {
  1: 'Something went wrong',
  2: 'Uncorrect type of data',
  3: 'Room kind is required',
  4: 'Room settings is required',
  5: 'Room settings amount and private mode required',
  6: 'Room key is required',
  7: 'Answer agreement is required',
  8: 'Move is required',
  9: 'Confirmation answer is required'
};
class ErrorHandler {
  static handle(code = 1) {
    return {
      error: true,
      code,
      message: errors[code],
      data: []
    };
  }

}

/***/ }),

/***/ "./services/socketIOService.js":
/*!*************************************!*\
  !*** ./services/socketIOService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketIOService; });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./server.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./services/constants.js");
/* harmony import */ var _zeroMQService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zeroMQService */ "./services/zeroMQService.js");
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/info */ "./configs/info.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/clientDataValidator */ "./services/clientDataValidator.js");
/* harmony import */ var pm2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pm2 */ "pm2");
/* harmony import */ var pm2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pm2__WEBPACK_IMPORTED_MODULE_7__);








const clients = {};
const playerList = {};
const spectatorList = {};
class SocketIOService {
  static initService() {
    SocketIOService.io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()(_server__WEBPACK_IMPORTED_MODULE_1__["default"].app.server, {
      path: _configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].publicAddress.socketPath
    });
    SocketIOService.node = {
      serverId: _configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].serverId,
      nodeId: _configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].nodeId
    };
    SocketIOService.setupLobbyNamespace();
    SocketIOService.setupGameNamespace();
  }

  static setupLobbyNamespace() {
    SocketIOService.lobbyNamespace = SocketIOService.io.of('/lobby');
    SocketIOService.lobbyNamespace.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].CONNECTION, async socket => {
      const token = socket.handshake.query.token;
      const player = await SocketIOService.getPlayer(token, socket);
      const id = player.id;
      clients[player.id] = socket;
      _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].PLAYER_CONNECTED,
        node: SocketIOService.node,
        id,
        connectionsCount: SocketIOService.getConnections
      });
      socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].CREATE_ROOM, data => {
        //Default room data for testing
        data = data || {
          "kind": "classic",
          "settings": {
            "amount": 22,
            "isPrivate": false
          }
        };
        const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].roomCreatevalidator(data);

        if (!checkedData.error) {
          data = checkedData.data;
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
            node: SocketIOService.node,
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].CREATE_ROOM,
            room: data,
            player
          });
        } else {
          SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
            id,
            msg: checkedData.message
          });
        }
      });
      socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].JOIN_OFFER, data => {
        const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].joinOfferValidator(data);

        if (!checkedData.error) {
          data = checkedData.data;
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
            node: SocketIOService.node,
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].JOIN_OFFER,
            data,
            player
          });
        } else {
          SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
            id,
            msg: checkedData.message
          });
        }
      });
      socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].OWNER_ANSWER, data => {
        const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].ownerAnswerValidator(data);

        if (!checkedData.error) {
          data = checkedData.data;
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
            node: SocketIOService.node,
            type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].OWNER_ANSWER,
            data,
            id: player.id
          });
        } else {
          SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
            id,
            msg: checkedData.message
          });
        }
      });
      socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].SPECTATE_GAME, data => {
        const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].joinOfferValidator(data);

        if (!checkedData.error) {
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].connectSpectator(data.key, {
            id,
            socketId: `pshID-${_configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].serverId + _configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].nodeId}${_configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].nodeId + _configs_info__WEBPACK_IMPORTED_MODULE_4__["info"].serverId}`
          }, socket);
        } else {
          SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
            id,
            msg: checkedData.message
          });
        }
      });
      socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].DISCONNECION, () => {
        _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
          node: SocketIOService.node,
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].PLAYER_DISCONNECTION,
          id,
          connectionsCount: _constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].getConnections
        });
        console.log(`<><>Player ${player.id} disconnected`);
      }); // ______TESTS___________________________________

      socket.on('pm2-restart', data => {
        pm2__WEBPACK_IMPORTED_MODULE_7___default.a.restart('all');
      });
      socket.on('redis-clear', data => {
        _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_5__["default"].deleteAll();
      });
      socket.on('game-test', data => {
        _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
          node: SocketIOService.node,
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].TEST_PM_NODE,
          data
        });
      });
      socket.on('trade-test', data => {
        _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendMessage({
          node: SocketIOService.node,
          type: _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].TEST_PM_NODE_TRADE,
          data
        });
      }); // ______TESTS___________________________________
    });
  }

  static setupGameNamespace() {
    SocketIOService.gameNamespace = SocketIOService.io.of('/game');
    SocketIOService.gameNamespace.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].CONNECTION, async socket => {
      const token = socket.handshake.query.token;
      const player = await SocketIOService.getPlayer(token, socket);

      if (player.id in playerList) {
        playerList[player.id].socket = socket;
        _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendGameMessage(playerList[player.id], _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].GAME_CONNECTION_CREATED, {
          data: "connected",
          rooms: playerList[player.id].roomList
        });
        socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].TRADE_STAGE_MOVE, data => {
          const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].tradeStageMoveValidator(data);

          if (!checkedData.error) {
            data = {
              key: data.key,
              player: player.id,
              data: {
                type: data.move.type,
                trumpSuit: data.move.trumpSuit
              }
            };
            _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendGameMessage(playerList[player.id], _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].TRADE_STAGE_MOVE, data);
          } else {
            SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
              id: player.id,
              msg: checkedData.message
            });
          }
        });
        socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].MOVE_STAGE_MOVE, data => {
          const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].moveStageMoveValidator(data);

          if (!checkedData.error) {
            data = {
              player: player.id,
              key: data.key,
              data: {
                type: data.move.type,
                card: data.move.card
              }
            };
            _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendGameMessage(playerList[player.id], _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].MOVE_STAGE_MOVE, data);
          } else {
            SocketIOService.sendMessage(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].ERROR_MESSAGE, {
              id: player.id,
              msg: checkedData.message
            });
          }
        });
        socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].GAME_EVENT, data => {
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendGameMessage(playerList[player.id], _constants__WEBPACK_IMPORTED_MODULE_2__["ZMQPushActions"].GAME_EVENT, data);
        });
        socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].EXIT_GAME, data => {
          data = data || {};
          const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].exitGameValidator(data);

          if (!checkedData.error) {
            SocketIOService.sendGameMessage(player.id, data.key, "Do you want to exit?", _constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].CONFIRM_MESSAGE);
          } else {
            SocketIOService.sendGameMessage(player.id, data.key, checkedData.message, _constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].GAME_ERROR_MESSAGE);
          }
        });
        socket.on(_constants__WEBPACK_IMPORTED_MODULE_2__["SocketOnEvents"].CONFIRM_MESSAGE, data => {
          data = data || {};
          const checkedData = _services_clientDataValidator__WEBPACK_IMPORTED_MODULE_6__["default"].confirmationValidator(data);

          if (!checkedData.error) {
            if (data.answer) {
              console.log(playerList[player.id]);
              console.log(data.key, "room closed");
            } else {
              SocketIOService.sendGameMessage(player.id, data.key, "Your game is continued", _constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].CONFIRM_MESSAGE);
            }
          } else {
            SocketIOService.sendGameMessage(player.id, data.key, checkedData.message, _constants__WEBPACK_IMPORTED_MODULE_2__["SocketEmitEvents"].GAME_ERROR_MESSAGE);
          }
        });
        socket.on('event-test', data => {
          _zeroMQService__WEBPACK_IMPORTED_MODULE_3__["default"].sendGameMessage(playerList[player.id], 300, data);
        });
      } else if (player.id in spectatorList) {
        spectatorList[player.id].socket = socket;
      } else {
        console.log(`<><>Player ${player.id} does not exists in game`);
        socket.disconnect();
      }
    });
  }

  static async getPlayer(token, socket) {
    if (!token) {
      console.log(`<><>Token required for connection`);
      socket.disconnect();
      return;
    }

    const player = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_5__["default"].getter(`player_${token}`);

    if (!player) {
      console.log(`<><>${token} player does not exists in Redis`);
      socket.disconnect();
      return {};
    }

    console.log(`<><>Player ${token} connected`);
    delete player.token;
    return player;
  }

  static sendMessage(event, message) {
    const socket = clients[message.id];

    if (!socket) {
      return;
    }

    delete message.id;
    socket.emit(event, message);
  }

  static broadcastMessage(event, message) {
    SocketIOService.lobbyNamespace.emit(event, message);
  }

  static get getConnections() {
    return Object.keys(SocketIOService.lobbyNamespace.connected).length;
  }

  static sendGameMessage(id, roomKey, message, event, spectator = false) {
    if (spectator) {
      const socket = spectatorList[id].socket;
      const spectator = spectatorList[id];
      const roomK = spectator.roomList.find(key => {
        return key === roomKey;
      });

      if (socket) {
        socket.emit(event, {
          roomK,
          id,
          message
        });
      } else {
        console.log(`<><>Player ${id} cant spectate game`);
      }
    } else {
      const socket = playerList[id].socket;
      const player = playerList[id];
      const roomK = player.roomList.find(key => {
        return key === roomKey;
      });

      if (socket) {
        socket.emit(event, {
          roomK,
          id,
          message
        });
      } else {
        console.log(`<><>Player ${id} does not existc in game`);
      }
    }
  }

  // static sendMessageToPlayer(id,message,event){
  //     const socket = playerList[id].socket;
  //     socket.emit(event,message);
  // }
  static addPlayer(id, roomKey, socketId) {
    if (id in playerList) {
      playerList[id].roomList.push(roomKey);
    } else {
      playerList[id] = {
        roomList: [roomKey],
        socketId,
        id
      };
    }

    console.log(`<><>Added ${id} player in ${roomKey} room with ${socketId} socketId`);
  }

  static addSpectator(id, roomKey, socket) {
    spectatorList[id] = {
      roomList: [roomKey],
      socket
    };
  }

  static deletePlayersRoom(id, roomKey) {
    const roomList = playerList[id].roomList;
    roomList.splice(roomList.indexOf(roomKey), 1);
    console.log(`Deleted ${roomKey} room of ${id} player`);
  }

  static defineRoomWinner(winnerId, loserId, roomKey) {
    SocketIOService.deletePlayersRoom(winnerId, roomKey);
    SocketIOService.deletePlayersRoom(loserId, roomKey);
    SocketIOService.sendGameMessage(winnerId, roomKey, {
      roomKey,
      winnerId,
      loserId
    });
  }

}

/***/ }),

/***/ "./services/zeroMQService.js":
/*!***********************************!*\
  !*** ./services/zeroMQService.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZeroMQService; });
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pm-intercom */ "pm-intercom");
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pm_intercom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./services/constants.js");
/* harmony import */ var _socketIOService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socketIOService */ "./services/socketIOService.js");
/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zeromq */ "zeromq");
/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zeromq__WEBPACK_IMPORTED_MODULE_3__);




const pushSockets = {};
const gameRooms = {};
class ZeroMQService {
  static initService() {
    ZeroMQService.pullSocket = pm_intercom__WEBPACK_IMPORTED_MODULE_0___default.a.getPullSocket();
    ZeroMQService.pushSocket = pm_intercom__WEBPACK_IMPORTED_MODULE_0___default.a.getPushSocket();
    ZeroMQService.listening();
  }

  static listening() {
    ZeroMQService.pullSocket.on('message', msg => {
      const actions = JSON.parse(msg);

      for (let action of actions) {
        switch (action.type) {
          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].CURRENT_ROOMS:
            {
              if (!action.id) {
                _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].broadcastMessage(_constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].CURRENT_ROOMS, {
                  msg: action.rooms
                });
              } else {
                _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(_constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].CURRENT_ROOMS, action);
              }

              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].ROOM_CREATED_SUCCESSFUL:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(_constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].ROOM_CREATED_SUCCESFULLY, {
                msg: action.msg.data,
                id: action.msg.id
              });
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].ROOM_CREATION_FAILED:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(action.msg);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].CHECK_OFFER:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(_constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].ROOM_JOIN_OFFER, action.msg);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].JOIN_ROOM_SUCCESSFUL:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(action.msg);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].JOIN_ROOM_FAILED:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendMessage(_constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].ROOM_JOIN_OFFER, action.msg);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].CREATE_GAME_CONNECTION:
            {
              const socketId = ZeroMQService.createGameConnection(action.nodeInfo);
              gameRooms[action.gameData.roomKey] = socketId;

              if (action.player) {
                ZeroMQService.setPlayerPushSocketId(action.player, socketId);
              } else {
                ZeroMQService.setPlayerPushSocketId(action.gameData.players[0], socketId);
                ZeroMQService.setPlayerPushSocketId(action.gameData.players[1], socketId);
                _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].addPlayer(action.gameData.players[0].id, action.gameData.roomKey, socketId);
                _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].addPlayer(action.gameData.players[1].id, action.gameData.roomKey, socketId);
              }

              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].GAME_MESSAGE:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendGameMessage(action.player.id, action.roomKey, action.data, _constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].GAME_EVENT);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].SPECTATE_MESSAGE:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].sendGameMessage(action.spectator.id, action.roomKey, action.data, _constants__WEBPACK_IMPORTED_MODULE_1__["SocketEmitEvents"].SPECATE_EVENT, true);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].GAME_END_TRIGGER:
            {
              _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].defineRoomWinner(action.data.winnerId, action.data.loserId, action.data.roomKey);
              break;
            }

          default:
            break;
        }
      }
    });
  }

  static sendMessage(...message) {
    ZeroMQService.pushSocket.send(JSON.stringify(message));
  }

  static createGameConnection({
    nodeId,
    serverId,
    address
  }) {
    const socketId = `pshID-${serverId + nodeId}${nodeId + serverId}`;
    const tcpAddress = `tcp://${address.host}:${address.port}`;
    const pushSocket = zeromq__WEBPACK_IMPORTED_MODULE_3___default.a.socket('push', {});
    pushSocket.connect(tcpAddress);

    if (!(socketId in pushSockets)) {
      pushSockets[socketId] = pushSocket;
    }

    console.log(`>>>Created ${socketId} connection to ${tcpAddress} address`);
    return socketId;
  }

  static sendGameMessage(sendInfo, type, message) {
    const socket = pushSockets[sendInfo.socketId];
    const id = sendInfo.id;

    if (type === 12) {
      socket.send(JSON.stringify([{
        type,
        msg: {
          id,
          roomKeys: message.rooms,
          data: message.data
        }
      }]));
    } else {
      const roomKey = sendInfo.roomList.find(key => {
        return key === message.key;
      });

      if (roomKey) {
        socket.send(JSON.stringify([{
          type,
          msg: {
            id,
            roomKey,
            data: message.data
          }
        }]));
      } else {
        console.log(`<><>Invalid room Key`);
      }
    }
  }

  static setPlayerPushSocketId(player, socketId) {
    player.socketId = socketId;
  }

  static getSocketIdByRoomKey(roomKey) {
    return gameRooms[roomKey];
  }

  static connectSpectator(roomKey, spectator, socket) {
    const socketId = ZeroMQService.getSocketIdByRoomKey(roomKey);

    if (socketId) {
      console.log(`Player ${spectator.id} can spectate`);
      _socketIOService__WEBPACK_IMPORTED_MODULE_2__["default"].addSpectator(spectator.id, roomKey, socket);
      pushSockets[socketId].send(JSON.stringify([{
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].CONNECT_SPECTATOR,
        msg: {
          roomKey,
          spectator
        }
      }]));
    } else {
      console.log(`Player ${spectator.id} Can't spectate`);
    }
  }

}

/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi babel-polyfill ./index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ }),

/***/ "async-redis":
/*!******************************!*\
  !*** external "async-redis" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async-redis");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "pm-intercom":
/*!******************************!*\
  !*** external "pm-intercom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pm-intercom");

/***/ }),

/***/ "pm2":
/*!**********************!*\
  !*** external "pm2" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pm2");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "zeromq":
/*!*************************!*\
  !*** external "zeromq" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zeromq");

/***/ })

/******/ });
//# sourceMappingURL=dev.bundle.js.map