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
    port: parseInt(process.env.SERVER_PORT),
    socketUrl: process.env.SOCKET_URL,
    socketPath: process.env.SOCKET_PATH
  }
};

/***/ }),

/***/ "./game/belot/classic/classicDeck.js":
/*!*******************************************!*\
  !*** ./game/belot/classic/classicDeck.js ***!
  \*******************************************/
/*! exports provided: ClassicDeck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicDeck", function() { return ClassicDeck; });
/* harmony import */ var _deck_deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deck/deck */ "./game/belot/deck/deck.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");
/* harmony import */ var _deck_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deck/card */ "./game/belot/deck/card.js");



class ClassicDeck extends _deck_deck__WEBPACK_IMPORTED_MODULE_0__["Deck"] {
  constructor() {
    const values = [_constants__WEBPACK_IMPORTED_MODULE_1__["Values"].NINE, _constants__WEBPACK_IMPORTED_MODULE_1__["Values"].TEN, _constants__WEBPACK_IMPORTED_MODULE_1__["Values"].JACK, _constants__WEBPACK_IMPORTED_MODULE_1__["Values"].QUEEN, _constants__WEBPACK_IMPORTED_MODULE_1__["Values"].KING, _constants__WEBPACK_IMPORTED_MODULE_1__["Values"].ACE];
    const suits = [_constants__WEBPACK_IMPORTED_MODULE_1__["Suits"].HEART, _constants__WEBPACK_IMPORTED_MODULE_1__["Suits"].DIAMOND, _constants__WEBPACK_IMPORTED_MODULE_1__["Suits"].SPADE, _constants__WEBPACK_IMPORTED_MODULE_1__["Suits"].CLUB];
    const cards = [];

    for (const suit of suits) {
      for (const value of values) {
        cards.push(new _deck_card__WEBPACK_IMPORTED_MODULE_2__["Card"](value, suit));
      }
    }

    super(cards);
  }

  dealBeforeTradeStage() {
    return [this.cards.slice(0, 6), this.cards.slice(6, 12), this.cards[12]];
  }

  dealAfterTradeStage(number) {
    switch (number) {
      case 1:
        return [[...this.cards.slice(0, 6), ...this.cards.slice(12, 15)], [...this.cards.slice(6, 12), ...this.cards.slice(15, 18)]];

      case 2:
        return [[...this.cards.slice(0, 6), ...this.cards.slice(13, 16)], [...this.cards.slice(6, 13), ...this.cards.slice(16, 18)]];

      case 0:
        return [[...this.cards.slice(0, 6), ...this.cards.slice(13, 16)], [...this.cards.slice(6, 12), ...this.cards.slice(16, 19)]];
    }
  }

}

/***/ }),

/***/ "./game/belot/classic/game.js":
/*!************************************!*\
  !*** ./game/belot/classic/game.js ***!
  \************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ "./game/belot/classic/round.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./game/belot/helper.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/constants */ "./services/constants.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../timer */ "./game/timer.js");






class Game {
  /**
   *
   * @param players {Player[]}
   * @param settings {Settings}
   * @param key
   */
  constructor(players, settings, key) {
    this.players = players;
    this.key = key;
    this.rounds = [];
    this.pointScore = players.reduce((acc, cur) => {
      acc[cur.id] = 0;
      return acc;
    }, {});
    this.roundScore = players.reduce((acc, cur) => {
      acc[cur.id] = 0;
      return acc;
    }, {});
    this.settings = settings;
    this.randomIndex = _helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].getRandomNumber(this.players.length);
    this.time = new _timer__WEBPACK_IMPORTED_MODULE_5__["Timer"](10000, this.settings.timeout * 1000, this.players, this.players[(this.randomIndex + this.rounds) % this.players.length], this.timerCallback); // this.time.init();
  }

  createRound() {
    // const clone = JSON.parse(JSON.stringify(this));
    this.currentRound = new _round__WEBPACK_IMPORTED_MODULE_0__["Round"](this, this.players[(this.randomIndex + this.rounds) % this.players.length]); // return this.currentRound;
  }

  endCurrentRound() {
    const {
      trumper,
      other
    } = this.currentRound.getResult();
    const trumperHands = trumper.points.hands;
    const trumperCombinations = trumper.points.combination;
    const otherHands = other.points.hands;
    const otherCombinations = other.points.combination;
    const trumperTotal = trumperHands + trumperCombinations;
    const otherTotal = otherHands + otherCombinations;
    const score = Math.floor(otherHands / 10) + (otherHands % 10 >= 6) ? 1 : 0; // TODO > or >=

    if (trumperTotal >= otherTotal) {
      // TODO check kaputt
      if (otherHands === 0) {
        this.pointScore[trumper.id] += 21 + trumperCombinations / 10;
        this.pointScore[other.id] += otherCombinations / 10;
      } else {
        // TODO Round Score
        this.roundScore[trumper.id]++; // TODO Point Score

        this.pointScore[other.id] += score + otherCombinations / 10;
        this.pointScore[trumper.id] += 16 - score + trumperCombinations / 10;
      }
    } else {
      // TODO check kaputt
      if (trumperHands === 0) {
        this.pointScore[other.id] += 21 + otherCombinations / 10 + trumperCombinations / 10;
        this.pointScore[trumper.id] += 0;
      } else {
        // TODO Round Score
        this.roundScore[other.id]++; // TODO Point Score

        this.pointScore[other.id] += 16 + otherCombinations / 10 + trumperCombinations / 10;
        this.pointScore[trumper.id] += 0;
      }
    }

    this.rounds.push(this.currentRound);
    let gameOver = this.isGameOver(trumper.id, other.id);
    console.log(trumper.id, ' points => ', this.pointScore[trumper.id]);
    console.log(other.id, ' points => ', this.pointScore[other.id]);
    console.log('gameOver => ', gameOver);

    if (gameOver.gameOver) {// TODO
    } else {
      // TODO
      this.currentRound = new _round__WEBPACK_IMPORTED_MODULE_0__["Round"](this, this.players[(this.randomIndex + this.rounds) % this.players.length]);
    }
  }

  isGameOver(trumperId, otherId) {
    switch (this.settings.scoreType) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["ScoreTypes"].POINTS:
        if (this.pointScore[trumperId] > this.pointScore[otherId] && this.pointScore[trumperId] >= this.settings.points) {
          return {
            gameOver: true,
            win: this.pointScore[trumperId]
          }; //TODO Trumper win
        } else if (this.pointScore[trumperId] < this.pointScore[otherId] && this.pointScore[otherId] >= this.settings.points) {
          //TODO Other win
          return {
            gameOver: true,
            win: this.pointScore[otherId]
          };
        } else if (this.pointScore[trumperId] === this.pointScore[otherId]) {
          //TODO Continue Game
          return {
            gameOver: false
          };
        } else {
          //TODO Continue Game
          return {
            gameOver: false
          };
        }

      case _constants__WEBPACK_IMPORTED_MODULE_1__["ScoreTypes"].ROUNDS:
        if (this.pointScore[trumperId] > this.pointScore[otherId] && this.pointScore[trumperId] >= this.settings.points) {
          //TODO Trumper win
          return {
            gameOver: true,
            win: this.pointScore[trumperId]
          };
        } else if (this.pointScore[trumperId] < this.pointScore[otherId] && this.pointScore[otherId] >= this.settings.points) {
          //TODO Other win
          return {
            gameOver: true,
            win: this.pointScore[otherId]
          };
        } else {
          //TODO Continue Game
          return {
            gameOver: false
          };
        }

    }
  }

  checkResult(result) {
    switch (this.settings.scoreType) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["ScoreTypes"].POINTS:
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["ScoreTypes"].ROUNDS:
        break;
    }
  }

  getSettings() {
    return this.settings;
  }

  timerCallback(player) {
    console.log('GAME END ', player);
  }

  async save() {
    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_3__["default"].setter(`GAME-${this.key}`, _services_constants__WEBPACK_IMPORTED_MODULE_4__["EXPIRE_TIME"], this);
  }

}

/***/ }),

/***/ "./game/belot/classic/hand.js":
/*!************************************!*\
  !*** ./game/belot/classic/hand.js ***!
  \************************************/
/*! exports provided: Hand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hand", function() { return Hand; });
/* harmony import */ var _logic_moveHandling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/moveHandling */ "./game/belot/classic/logic/moveHandling.js");

class Hand {
  constructor(round) {
    this.round = round;
    this.cards = [];
  }
  /**
   *
   * @param player {Player}
   * @param move {MoveStageMove}
   */


  doMove(player, move) {
    this.cards.push({
      player,
      card: move.card
    });
  }

  getPlayer() {
    return Object(_logic_moveHandling__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
  }

}

/***/ }),

/***/ "./game/belot/classic/logic/beloteRebeloteChecking.js":
/*!************************************************************!*\
  !*** ./game/belot/classic/logic/beloteRebeloteChecking.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

let beloteCards = [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN, _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING];
/* harmony default export */ __webpack_exports__["default"] = (function (player, move, moveStage) {
  const {
    trumpSuit,
    cards
  } = moveStage;

  if (moveStage.trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
    moveStage.beloteRebelote = null;
    return false;
  } else {
    return beloteCards.every(b => {
      return cards[player.id].some(card => {
        return card.value === b && card.suit === trumpSuit;
      });
    });
  }
});

/***/ }),

/***/ "./game/belot/classic/logic/cardPoints.js":
/*!************************************************!*\
  !*** ./game/belot/classic/logic/cardPoints.js ***!
  \************************************************/
/*! exports provided: getCommonCardPoint, getTrumpCardPoint, getNoTrumpCardPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommonCardPoint", function() { return getCommonCardPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrumpCardPoint", function() { return getTrumpCardPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNoTrumpCardPoint", function() { return getNoTrumpCardPoint; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

const getCommonCardPoint = value => {
  switch (value) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].SEVEN:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].EIGHT:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
      return 0;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
      return 10;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
      return 2;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
      return 3;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
      return 4;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
      return 11;
  }
};
const getTrumpCardPoint = value => {
  switch (value) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].SEVEN:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].EIGHT:
      return 0;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
      return 14;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
      return 10;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
      return 20;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
      return 3;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
      return 4;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
      return 11;
  }
};
const getNoTrumpCardPoint = value => {
  switch (value) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].SEVEN:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].EIGHT:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
      return 0;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
      return 10;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
      return 2;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
      return 3;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
      return 4;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
      return 19;
  }
};

/***/ }),

/***/ "./game/belot/classic/logic/cardValidityChecking.js":
/*!**********************************************************!*\
  !*** ./game/belot/classic/logic/cardValidityChecking.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param player {Player}
 * @param move {MoveStageMove}
 * @param moveStage {MoveStage}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (player, move, moveStage) {
  const cards = moveStage.cards[player.id];
  return cards.some(card => {
    return card.is(move.card);
  });
});

/***/ }),

/***/ "./game/belot/classic/logic/combinationComparer.js":
/*!*********************************************************!*\
  !*** ./game/belot/classic/logic/combinationComparer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");


const combinationPriorityAbstract = trumpSuit => combination => {
  if (combination.type === _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS) {
    if (trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
      switch (combination.value) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
          return 4000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
          return 1000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
          return 2000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
          return 3000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
          return 5000;

        default:
          break;
      }
    } else {
      switch (combination.value) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
          return 6000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
          return 4000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
          return 7000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
          return 2000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
          return 3000;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
          return 5000;
      }
    }

    return 0;
  }

  return (trumpSuit === combination.suit ? 5 : 0) + {
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED]: 300,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY]: 200,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ]: 100
  }[combination.type] + {
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE]: 60,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING]: 50,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN]: 40,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK]: 30,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN]: 20,
    [_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE]: 10
  }[combination.suit];
};

/* harmony default export */ __webpack_exports__["default"] = (trumpSuit => (a, b) => {
  const priority = combinationPriorityAbstract(trumpSuit);
  return Math.sign(priority(a) - priority(b));
});

/***/ }),

/***/ "./game/belot/classic/logic/combinationFinder.js":
/*!*******************************************************!*\
  !*** ./game/belot/classic/logic/combinationFinder.js ***!
  \*******************************************************/
/*! exports provided: getCombination, getAllCombination, combinationFinder, combinationFilter, combinationDeleter, fourCardFinderAbstract, fourCardFinder, fourCardFilter, fourCardDeleter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCombination", function() { return getCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCombination", function() { return getAllCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinationFinder", function() { return combinationFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinationFilter", function() { return combinationFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinationDeleter", function() { return combinationDeleter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourCardFinderAbstract", function() { return fourCardFinderAbstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourCardFinder", function() { return fourCardFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourCardFilter", function() { return fourCardFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourCardDeleter", function() { return fourCardDeleter; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

const {
  values,
  suits,
  hundreds,
  fifties,
  terzs
} = _constants__WEBPACK_IMPORTED_MODULE_0__["classic"];
const combs = {
  [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED]: hundreds,
  [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY]: fifties,
  [_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ]: terzs
};
const getCombination = (cards, type) => {
  const finder = combinationFinder(cards);

  const filter = combination => combinationFilter(combination.sequence)(combination.suit);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS:
      {
        const value = values.find(fourCardFinder(cards));

        if (value) {
          return {
            hasCombination: true,
            value,
            type,
            cards: cards.filter(fourCardFilter(value))
          };
        }

        return {
          hasCombination: false,
          cards
        };
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ:
      {
        const combination = combs[type].find(finder);

        if (combination) {
          return {
            hasCombination: true,
            value: combination.value,
            suit: combination.suit,
            cards: cards.filter(filter(combination))
          };
        }

        return {
          hasCombination: false,
          cards
        };
      }
  }
}; // getting combinations from cards similar to settings

const getAllCombination = (cards, settings, trumpSuit) => {
  const combinations = []; // Cloning array of cards for security

  cards = [...cards]; // helper functions

  const deleter = combinationDeleter(cards); // jnjuma frontic uxarkac qareri meji gtac kombinacian toxuma mnacac qarery

  const finder = combinationFinder(cards); // gtnuma frontic uxarkac qareri meji combinacian
  // finding and removing combinations from card's array

  while (true) {
    // finding and removing FOUR_CARD combination when available the setting
    if (settings.hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS)) {
      // finding value of FOUR_CARD
      const value = values.find(fourCardFinder(cards));

      if (value && (trumpSuit !== _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP || value !== _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE)) {
        // removing cards of combination from array
        suits.forEach(fourCardDeleter(value)(cards));
        combinations.push({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS,
          value
        });
        continue;
      }
    } // finding and removing HUNDRED combination when available the setting


    if (settings.hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED)) {
      // finding value of HUNDRED
      const combination = hundreds.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        combinations.push({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED,
          value: combination.value,
          suit: combination.suit
        });
        continue;
      }
    }

    if (settings.hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY)) {
      const combination = fifties.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        combinations.push({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY,
          value: combination.value,
          suit: combination.suit
        });
        continue;
      }
    }

    if (settings.hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ)) {
      const combination = terzs.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        combinations.push({
          type: _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ,
          value: combination.value,
          suit: combination.suit
        });
        continue;
      }
    }

    break;
  }

  return combinations;
};
const combinationFinder = cards => ({
  sequence,
  suit
}) => sequence.every(value => cards.some(card => card.is({
  value,
  suit
})));
const combinationFilter = sequence => suit => card => !sequence.some(({
  value
}) => card.is({
  value,
  suit
}));
const combinationDeleter = cards => combination => value => cards.splice(cards.findIndex(card => card.is({
  value,
  suit: combination.suit
})), 1);
const fourCardFinderAbstract = suits => cards => value => suits.every(suit => cards.some(card => card.is({
  value,
  suit
})));
const fourCardFinder = fourCardFinderAbstract(suits);
const fourCardFilter = value => card => !card.is({
  value
});
const fourCardDeleter = value => cards => suit => cards.splice(cards.findIndex(card => card.is({
  suit,
  value
})), 1);

/***/ }),

/***/ "./game/belot/classic/logic/combinationPointCalculator.js":
/*!****************************************************************!*\
  !*** ./game/belot/classic/logic/combinationPointCalculator.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

/* harmony default export */ __webpack_exports__["default"] = (trumpSuit => combination => {
  switch (combination.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS:
      if (trumpSuit !== _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
        switch (combination.value) {
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
            return 140;

          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
            return 100;

          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
            return 200;

          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
            return 100;

          case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
            return 110;
        }
      }

      switch (combination.value) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
          return 100;

        case _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
          return 190;
      }

      return 0;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED:
      return 100;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY:
      return 50;

    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].BELOT:
      return 20;
  }
});

/***/ }),

/***/ "./game/belot/classic/logic/combinationValidityChecking.js":
/*!*****************************************************************!*\
  !*** ./game/belot/classic/logic/combinationValidityChecking.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");
/* harmony import */ var _combinationFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combinationFinder */ "./game/belot/classic/logic/combinationFinder.js");


const {
  values,
  suits,
  hundreds,
  fifties,
  terzs
} = _constants__WEBPACK_IMPORTED_MODULE_0__["classic"];
/**
 * @param player {Player}
 * @param move {MoveStageMove}
 * @param moveStage {MoveStage}
 */

/* harmony default export */ __webpack_exports__["default"] = (function (player, move, moveStage) {
  const cards = [...move.cards];
  const playerCards = moveStage.cards[player.id]; // every card in player's combination must be in player's cards

  if (!cards.every(card => playerCards.some(card.is))) {
    return false;
  }

  const deleter = Object(_combinationFinder__WEBPACK_IMPORTED_MODULE_1__["combinationDeleter"])(cards);
  const finder = Object(_combinationFinder__WEBPACK_IMPORTED_MODULE_1__["combinationFinder"])(cards); // removing all combinations from cards

  while (true) {
    if (moveStage.getSettings().hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS)) {
      const value = values.find(Object(_combinationFinder__WEBPACK_IMPORTED_MODULE_1__["fourCardFinder"])(cards));

      if (value) {
        suits.forEach(Object(_combinationFinder__WEBPACK_IMPORTED_MODULE_1__["fourCardDeleter"])(value)(cards));
        continue;
      }
    }

    if (moveStage.getSettings().hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED)) {
      const combination = hundreds.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        continue;
      }
    }

    if (moveStage.getSettings().hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY)) {
      const combination = fifties.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        continue;
      }
    }

    if (moveStage.getSettings().hasCombination(_constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ)) {
      const combination = terzs.find(finder);

      if (combination) {
        combination.sequence.forEach(deleter(combination));
        continue;
      }
    }

    break;
  }

  return cards.length === 0;
});

/***/ }),

/***/ "./game/belot/classic/logic/cutCards.js":
/*!**********************************************!*\
  !*** ./game/belot/classic/logic/cutCards.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cards, moveStage) {
  // console.log('---------------');
  // console.log(moveStage.cards)
  // console.log(cards)
  cards.map(({
    player,
    card
  }) => {
    let index = moveStage.cards[player.id].findIndex(del => del.value === card.value && del.suit === card.suit);
    moveStage.cards[player.id].splice(index, 1);
  });
  return moveStage.cards;
});

/***/ }),

/***/ "./game/belot/classic/logic/declarationOrderChecking.js":
/*!**************************************************************!*\
  !*** ./game/belot/classic/logic/declarationOrderChecking.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

/**
 * @param player {Player}
 * @param move {MoveStageMove}
 * @param moveStage {MoveStage}
 * @return boolean
 */

/* harmony default export */ __webpack_exports__["default"] = (function (player, move, moveStage) {
  const currentHand = moveStage.currentHand;

  if (!currentHand) {
    return false;
  } // movement order validity checking


  if (!moveStage.checkPlayerOrder(player)) {
    return false;
  } // player cannot declare a combination after Move


  if (moveStage.moveHistory.some(({
    move: {
      type
    },
    player: {
      id
    }
  }) => type === _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].MOVE && id === player.id)) {
    return false;
  } // player cannot declare a combination twice


  return moveStage.moveHistory.every(({
    move: {
      type
    },
    player: {
      id
    }
  }) => type !== _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].DECLARE_COMBINATION || id !== player.id);
});

/***/ }),

/***/ "./game/belot/classic/logic/handPointsCalculator.js":
/*!**********************************************************!*\
  !*** ./game/belot/classic/logic/handPointsCalculator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

/* harmony default export */ __webpack_exports__["default"] = (trumpSuit => hand => {
  const cards = hand.cards.map(({
    card
  }) => card);
  return cards.reduce((sum, card) => {
    if (trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
      sum += _constants__WEBPACK_IMPORTED_MODULE_0__["noTrumpPoints"][card.value];
    } else {
      if (card.suit === trumpSuit) {
        sum += _constants__WEBPACK_IMPORTED_MODULE_0__["trumpPoints"][card.value];
      } else {
        sum += _constants__WEBPACK_IMPORTED_MODULE_0__["commonPoints"][card.value];
      }
    }

    return sum;
  }, 0);
});

/***/ }),

/***/ "./game/belot/classic/logic/highestCombinationFinder.js":
/*!**************************************************************!*\
  !*** ./game/belot/classic/logic/highestCombinationFinder.js ***!
  \**************************************************************/
/*! exports provided: getHighestCombination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighestCombination", function() { return getHighestCombination; });
const getHighestCombination = (combinations, comparer) => {
  const [first, ...other] = combinations;
  return other.reduce((highest, current) => comparer(highest, current) > 0 ? highest : current, first);
};

/***/ }),

/***/ "./game/belot/classic/logic/index.js":
/*!*******************************************!*\
  !*** ./game/belot/classic/logic/index.js ***!
  \*******************************************/
/*! exports provided: moveStageValidation, checkMoveOrder, tradeStageValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moveStageValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moveStageValidation */ "./game/belot/classic/logic/moveStageValidation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveStageValidation", function() { return _moveStageValidation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _moveOrderChecking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveOrderChecking */ "./game/belot/classic/logic/moveOrderChecking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkMoveOrder", function() { return _moveOrderChecking__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tradeStageValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tradeStageValidation */ "./game/belot/classic/logic/tradeStageValidation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tradeStageValidation", function() { return _tradeStageValidation__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./game/belot/classic/logic/moveHandling.js":
/*!**************************************************!*\
  !*** ./game/belot/classic/logic/moveHandling.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");
/* harmony import */ var _cardPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardPoints */ "./game/belot/classic/logic/cardPoints.js");


/**
 *
 * @param hand {Hand}
 * @return {Player}
 */

/* harmony default export */ __webpack_exports__["default"] = (hand => {
  if (hand.cards.length < 2) {
    return null;
  }

  const trumpSuit = hand.round.trumpSuit;
  const [first, second] = hand.cards;

  if (trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
    if (first.card.suit !== second.card.suit) {
      return first.player;
    }

    if (Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getNoTrumpCardPoint"])(first.card.value) > Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getNoTrumpCardPoint"])(second.card.value)) {
      return first.player;
    }

    return second.player;
  }

  if (first.card.suit === trumpSuit) {
    if (second.card.suit === trumpSuit) {
      if (Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(first.card.value) > Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(second.card.value)) {
        return first.player;
      }

      return second.player;
    }

    return first.player;
  }

  if (second.card.suit === trumpSuit) {
    return second.player;
  } // if (getCommonCardPoint(first.card.value) > getCommonCardPoint(second.card.value)) {
  //     return first.player;
  // }


  if (Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getCommonCardPoint"])(first.card.value) > Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getCommonCardPoint"])(second.card.value) && first.card.suit === second.card.suit) {
    return first.player;
  } else if (first.card.suit !== second.card.suit) {
    return first.player;
  }

  return second.player;
});

/***/ }),

/***/ "./game/belot/classic/logic/moveOrderChecking.js":
/*!*******************************************************!*\
  !*** ./game/belot/classic/logic/moveOrderChecking.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @param player {Player}
 * @param moveStage {MoveStage}
 * @return boolean
 */
/* harmony default export */ __webpack_exports__["default"] = (function (player, moveStage) {
  const currentHand = moveStage.currentHand;

  if (!currentHand) {
    return false;
  }

  const lastPlayer = moveStage.lastPlayer;
  const priority = moveStage.priority;

  if (currentHand.cards.length >= 2) {
    return false;
  }

  if (lastPlayer) {
    return currentHand.cards.length === 0 === (player.id === lastPlayer.id);
  }

  return currentHand.cards.length === 0 === (player.id === priority.id);
});

/***/ }),

/***/ "./game/belot/classic/logic/moveStagePreValidation.js":
/*!************************************************************!*\
  !*** ./game/belot/classic/logic/moveStagePreValidation.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");
/* harmony import */ var _cardPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardPoints */ "./game/belot/classic/logic/cardPoints.js");
/* harmony import */ var _moveOrderChecking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveOrderChecking */ "./game/belot/classic/logic/moveOrderChecking.js");
/* harmony import */ var _cardValidityChecking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardValidityChecking */ "./game/belot/classic/logic/cardValidityChecking.js");
/* harmony import */ var _beloteRebeloteChecking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beloteRebeloteChecking */ "./game/belot/classic/logic/beloteRebeloteChecking.js");
/* harmony import */ var _ruleChecking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ruleChecking */ "./game/belot/classic/logic/ruleChecking.js");
/* harmony import */ var _declarationOrderChecking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./declarationOrderChecking */ "./game/belot/classic/logic/declarationOrderChecking.js");
/* harmony import */ var _combinationValidityChecking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinationValidityChecking */ "./game/belot/classic/logic/combinationValidityChecking.js");
/* harmony import */ var _deck_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../deck/card */ "./game/belot/deck/card.js");









/* harmony default export */ __webpack_exports__["default"] = ((player, move, moveStage) => {
  let secondPlayer = moveStage.round.game.players.find(p => p.id !== player.id);

  switch (move.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].MOVE:
      let card = moveStage.validActions[player.id].cards.find(card => {
        return card.value === move.card.value && card.suit === move.card.suit;
      });

      if (moveStage.currentHand.cards.length >= 2) {
        return {
          status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].ERROR,
          validActions: moveStage.validActions
        };
      }

      move.card = new _deck_card__WEBPACK_IMPORTED_MODULE_8__["Card"](move.card.value, move.card.suit); //if card exist in validactions cards next

      if (moveStage.currentHand.cards.length === 1 && card) {
        console.log('card exist in valid Actions');
        return {
          status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
          validActions: moveStage.validActions
        };
      }

      if (!card) {
        return {
          status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].ERROR,
          validActions: moveStage.validActions
        };
      } else {
        // let secondPlayerCards = moveStage.cards[secondPlayer.id];
        let firstPlayerCards = moveStage.validActions[player.id].cards;
        let secondPlayerCards = moveStage.validActions[secondPlayer.id].cards;
        const {
          trumpSuit,
          currentHand,
          cards
        } = moveStage;

        if (!trumpSuit || !currentHand || currentHand.cards.length > 1) {
          return {
            status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
            validActions: moveStage.validActions
          };
        }

        let hasSameSuitCards = (cards, suit) => {
          return cards.filter(card => card.is({
            suit: suit
          }));
        };

        const sameSuitCards = hasSameSuitCards(secondPlayerCards, move.card.suit);

        if (trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
          if (sameSuitCards.length > 0) {
            moveStage.validActions[secondPlayer.id].cards = sameSuitCards;
          } else {
            moveStage.validActions[secondPlayer.id].cards = secondPlayerCards;
          }

          return {
            status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
            validActions: moveStage.validActions
          };
        } else {
          //first card is not trump
          if (move.card.suit !== trumpSuit) {
            if (sameSuitCards.length > 0) {
              moveStage.validActions[secondPlayer.id].cards = sameSuitCards;
            } else {
              moveStage.validActions[secondPlayer.id].cards = secondPlayerCards;
            }

            return {
              status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
              validActions: moveStage.validActions
            };
          }

          if (sameSuitCards.length > 0) {
            const higherTrumps = sameSuitCards.filter(({
              value
            }) => Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(value) > Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(move.card.value));

            if (higherTrumps.length > 0) {
              moveStage.validActions[secondPlayer.id].cards = higherTrumps;
            } else {
              moveStage.validActions[secondPlayer.id].cards = sameSuitCards;
            }

            return {
              status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
              validActions: moveStage.validActions
            };
          } else {
            moveStage.validActions[secondPlayer.id].cards = secondPlayerCards;
            return {
              status: _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveMessages"].SUCCESS,
              validActions: moveStage.validActions
            };
          }
        }
      }

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].DECLARE_COMBINATION: // Checking declaration order

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].SHOW_COMBINATION:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].THROW_ALL_CARDS:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].OPEN_CARDS:
    default:
      break;
  }
});

/***/ }),

/***/ "./game/belot/classic/logic/moveStageValidation.js":
/*!*********************************************************!*\
  !*** ./game/belot/classic/logic/moveStageValidation.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");
/* harmony import */ var _moveOrderChecking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveOrderChecking */ "./game/belot/classic/logic/moveOrderChecking.js");
/* harmony import */ var _cardValidityChecking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardValidityChecking */ "./game/belot/classic/logic/cardValidityChecking.js");
/* harmony import */ var _ruleChecking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ruleChecking */ "./game/belot/classic/logic/ruleChecking.js");
/* harmony import */ var _declarationOrderChecking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./declarationOrderChecking */ "./game/belot/classic/logic/declarationOrderChecking.js");
/* harmony import */ var _combinationValidityChecking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinationValidityChecking */ "./game/belot/classic/logic/combinationValidityChecking.js");
/* harmony import */ var _beloteRebeloteChecking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beloteRebeloteChecking */ "./game/belot/classic/logic/beloteRebeloteChecking.js");







/**
 * @param player {Player}
 * @param move {MoveStageMove}
 * @param moveStage {MoveStage}
 */

/* harmony default export */ __webpack_exports__["default"] = ((player, move, moveStage) => {
  const currentHand = moveStage.currentHand;

  switch (move.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].MOVE:
      // Checking player order
      if (!Object(_moveOrderChecking__WEBPACK_IMPORTED_MODULE_1__["default"])(player, moveStage)) {
        return false;
      } // Checking player has card


      if (!Object(_cardValidityChecking__WEBPACK_IMPORTED_MODULE_2__["default"])(player, move, moveStage)) {
        return false;
      }

      if (!moveStage.beloteRebelote) {
        if (Object(_beloteRebeloteChecking__WEBPACK_IMPORTED_MODULE_6__["default"])(player, move, moveStage)) {
          moveStage.beloteRebelote = {
            type: _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].BELOT,
            player: player
          };
        }
      } // Checking rule of classic belote game


      return Object(_ruleChecking__WEBPACK_IMPORTED_MODULE_3__["default"])(player, move, moveStage);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].DECLARE_COMBINATION:
      // Checking declaration order
      if (!Object(_declarationOrderChecking__WEBPACK_IMPORTED_MODULE_4__["default"])(player, move, moveStage)) {
        return false;
      } // Checking combination validity


      return Object(_combinationValidityChecking__WEBPACK_IMPORTED_MODULE_5__["default"])(player, move, moveStage);

    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].SHOW_COMBINATION:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].THROW_ALL_CARDS:
    case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].OPEN_CARDS:
    default:
      break;
  }
});

/***/ }),

/***/ "./game/belot/classic/logic/ruleChecking.js":
/*!**************************************************!*\
  !*** ./game/belot/classic/logic/ruleChecking.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");
/* harmony import */ var _cardPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardPoints */ "./game/belot/classic/logic/cardPoints.js");


/**
 * @param player {Player}
 * @param move {MoveStageMove}
 * @param moveStage {MoveStage}
 * @return boolean
 */

/* harmony default export */ __webpack_exports__["default"] = (function (player, move, moveStage) {
  const {
    trumpSuit,
    currentHand,
    cards
  } = moveStage; //CuurantHandy moves chuni

  if (!trumpSuit || !currentHand || currentHand.cards.length > 1) {
    return false;
  } // first player


  if (moveStage.currentHand.cards.length === 0) {
    return true;
  }

  const [{
    card: firstCard
  }] = moveStage.currentHand.cards;
  const {
    card: secondCard
  } = move; // console.log(moveStage.currentHand.cards[0].is({suit: trumpSuit}));
  // const [
  //     {move: {card: firstCard}},
  //     {move: {card: secondCard}}
  // ] = moveStage.currentHand.cards;

  const secondPlayerCards = cards[player.id]; // console.log('firstCard => ', firstCard);
  // console.log('secondCard => ', secondCard);
  // console.log('trumpSuit => ', trumpSuit)
  // // second player

  const sameSuitCards = secondPlayerCards.filter(card => card.is({
    suit: firstCard.suit
  }));
  console.log('sameSuitCards => ', sameSuitCards); // current trump is NO_TRUMP

  if (moveStage.trumpSuit === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP) {
    if (sameSuitCards.length > 0) {
      return sameSuitCards.some(({
        suit
      }) => secondCard.is({
        suit
      }));
    }

    return true;
  } // current trump is Suit


  const secondPlayerTrumpCards = secondPlayerCards.filter(card => card.is({
    suit: trumpSuit
  })); // first card is NOT TRUMP
  // if (!firstCard.is({suit: trumpSuit})) {

  if (firstCard.suit !== trumpSuit) {
    // second player has card with same suit
    if (sameSuitCards.length > 0) {
      return sameSuitCards.some(({
        suit
      }) => secondCard.is({
        suit
      }));
    } // second player has trump card


    if (secondPlayerTrumpCards.length > 0) {
      return secondCard.is({
        suit: trumpSuit
      });
    }

    return true;
  } // first card is TRUMP


  if (secondPlayerTrumpCards.length > 0) {
    const higherTrumps = secondPlayerTrumpCards.filter(({
      value
    }) => Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(value) > Object(_cardPoints__WEBPACK_IMPORTED_MODULE_1__["getTrumpCardPoint"])(firstCard.value));
    console.log('higherTrumps => ', higherTrumps);

    if (higherTrumps.length > 0) {
      return higherTrumps.some(secondCard.is);
    }

    return true;
  }

  return true;
});

/***/ }),

/***/ "./game/belot/classic/logic/tradeStageValidation.js":
/*!**********************************************************!*\
  !*** ./game/belot/classic/logic/tradeStageValidation.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./game/belot/constants.js");

/**
 *
 * @param player {Player}
 * @param move {TradeStageMove}
 * @param tradeStage {TradeStage}
 * @return {boolean}
 */

/* harmony default export */ __webpack_exports__["default"] = ((player, move, tradeStage) => {
  // console.log('moves => ', moves)
  // console.log('player => ', player);
  // console.log('currantPlayer => ', tradeStage.currantPlayer);

  /**
   * @type {Player}
   */
  const priority = tradeStage.priority;
  const moves = tradeStage.moves;
  const trumpCandidateCard = tradeStage.trumpCandidateCard; // console.log('**********   ', tradeStage.getSettings().hasNoTrump())

  /**
   * Checking
   */

  if (!((priority.id !== player.id + moves.length) % 2)) {
    console.log('errrr');
    return false;
  }

  if (tradeStage.nextPlayer.id !== player.id) {
    console.log('Saqo errr');
    return false;
  }
  /**
   * if trump already chosen
   */
  // if (moves.some([
  //     TradeStageMoveTypes.CHOOSE_CANDIDATE_TRUMP,
  //     TradeStageMoveTypes.CHOOSE_TRUMP_WITH_CARD,
  //     TradeStageMoveTypes.CHOOSE_TRUMP_WITHOUT_CARD,
  // ].includes)) {
  //     return false;
  // }


  console.log('trumpCandidateCard => ', trumpCandidateCard);
  console.log('move type => ', move.type);
  console.log('move chosenTrumpSuit => ', move.chosenTrumpSuit);

  if (move.type === _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP && move.chosenTrumpSuit !== trumpCandidateCard.suit) {
    console.log('trump error');
    return false;
  }

  if (moves.some(m => [_constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP, _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITH_CARD, _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITHOUT_CARD].includes(m))) {
    return false;
  }

  switch (moves.length) {
    case 0:
      if ([_constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP, _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].PASS_CANDIDATE_TRUMP].includes(move.type)) {
        return true;
      }

      break;

    case 1:
      if ([_constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP, _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].PASS_CANDIDATE_TRUMP].includes(move.type)) {
        return true;
      }

      if (trumpCandidateCard.is({
        value: _constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK
      }) && move.type === _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP) {
        return true;
      }

      break;

    case 2:
    case 3:
      if (move.type === _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].PASS_TRUMP) {
        console.log('--------------');
        return moves.length === 2;
      }

      if ([_constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].HEART, _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].DIAMOND, _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].SPADE, _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].CLUB, ...(tradeStage.getSettings().hasNoTrump() ? [_constants__WEBPACK_IMPORTED_MODULE_0__["TrumpSuits"].NO_TRUMP] : [])].filter(suit => suit !== trumpCandidateCard.suit).includes(move.chosenTrumpSuit)) {
        return true;
      }

      break;

    default:
      break;
  }

  return false;
});

/***/ }),

/***/ "./game/belot/classic/moveStage.js":
/*!*****************************************!*\
  !*** ./game/belot/classic/moveStage.js ***!
  \*****************************************/
/*! exports provided: MoveStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStage", function() { return MoveStage; });
/* harmony import */ var _hand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hand */ "./game/belot/classic/hand.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");
/* harmony import */ var _logic_moveStageValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/moveStageValidation */ "./game/belot/classic/logic/moveStageValidation.js");
/* harmony import */ var _logic_combinationFinder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/combinationFinder */ "./game/belot/classic/logic/combinationFinder.js");
/* harmony import */ var _logic_highestCombinationFinder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/highestCombinationFinder */ "./game/belot/classic/logic/highestCombinationFinder.js");
/* harmony import */ var _logic_combinationComparer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/combinationComparer */ "./game/belot/classic/logic/combinationComparer.js");
/* harmony import */ var _logic_handPointsCalculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic/handPointsCalculator */ "./game/belot/classic/logic/handPointsCalculator.js");
/* harmony import */ var _logic_combinationPointCalculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logic/combinationPointCalculator */ "./game/belot/classic/logic/combinationPointCalculator.js");
/* harmony import */ var _logic_moveStagePreValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logic/moveStagePreValidation */ "./game/belot/classic/logic/moveStagePreValidation.js");
/* harmony import */ var _logic_cutCards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logic/cutCards */ "./game/belot/classic/logic/cutCards.js");










/**
 * @property currentHand {Hand}
 */

class MoveStage {
  /**
   * @param round {Round}
   */
  constructor(round) {
    this.round = round;
    this.priority = round.priority;
    this.trumpSuit = round.trumpSuit;
    this.cards = round.game.players.reduce((acc, cur) => {
      acc[cur.id] = [...round.cards[cur.id]];
      return acc;
    }, {});
    this.hands = round.game.players.reduce((acc, cur) => {
      acc[cur.id] = [];
      return acc;
    }, {});
    this.combinations = round.game.players.reduce((acc, cur) => {
      acc[cur.id] = [];
      return acc;
    }, {});
    this.declaredCombinations = [];
    this.handsHistory = [];
    this.moveHistory = [];
    /**
     * @type {Hand}
     */

    this.currentHand = null;
    this.lastHand = null;
    this.lastPlayer = null;
    this.beloteRebelote = null;
    this.validActions = round.game.players.reduce((acc, cur) => {
      acc[cur.id] = {
        cards: this.cards[cur.id],
        actions: ['declare_combination', 'move', 'show_combination', 'open_cards', 'throw_card']
      };
      return acc;
    }, {});
  }
  /**
   * @param player {Player}
   * @param move {MoveStageMove}
   * @returns {Object}
   */


  doMove(player, move) {
    if (!this.currentHand) {
      //ToDo: add round
      this.currentHand = new _hand__WEBPACK_IMPORTED_MODULE_0__["Hand"](this.round);
    }

    if (Object(_logic_moveStagePreValidation__WEBPACK_IMPORTED_MODULE_8__["default"])(player, move, this).status === _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS) {
      // console.log('123 after => ', this.validActions['123'].cards);
      // console.log('456 after =>', this.validActions['456'].cards);
      if (Object(_logic_moveStageValidation__WEBPACK_IMPORTED_MODULE_2__["default"])(player, move, this)) {
        switch (move.type) {
          case _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveTypes"].MOVE:
            {
              this.currentHand.doMove(player, move);

              if (this.currentHand.cards.length >= 2) {
                this.lastHand = this.currentHand;
                this.lastPlayer = this.currentHand.getPlayer(); // hajord ruk um hertna qar qcelu

                this.hands[this.lastPlayer.id].push(this.currentHand);
                this.handsHistory.push(this.currentHand);
                this.cards = Object(_logic_cutCards__WEBPACK_IMPORTED_MODULE_9__["default"])(this.currentHand.cards, this);
                this.currentHand = null;
                this.validActions = this.round.game.players.reduce((acc, cur) => {
                  acc[cur.id] = {
                    cards: this.cards[cur.id],
                    actions: ['declare_combination', 'move', 'show_combination', 'open_cards', 'throw_card']
                  };
                  return acc;
                }, {});

                if (this.lastPlayer.id !== player.id) {
                  return {
                    status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                    moveOrderChanged: false
                  };
                } else {
                  return {
                    status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                    moveOrderChanged: true
                  };
                }
              }

              return {
                status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                moveOrderChanged: true
              };
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveTypes"].DECLARE_COMBINATION:
            {
              const combinations = Object(_logic_combinationFinder__WEBPACK_IMPORTED_MODULE_3__["getAllCombination"])(move.cards, this.getSettings(), this.trumpSuit);
              const comparer = Object(_logic_combinationComparer__WEBPACK_IMPORTED_MODULE_5__["default"])(this.trumpSuit);
              const highest = Object(_logic_highestCombinationFinder__WEBPACK_IMPORTED_MODULE_4__["getHighestCombination"])(combinations, comparer);

              if (this.declaredCombinations.length === 0) {
                this.declaredCombinations.push({
                  highest,
                  types: combinations.map(({
                    type
                  }) => type),
                  priority: _constants__WEBPACK_IMPORTED_MODULE_1__["DeclarationPriority"].NORMAL,
                  player,
                  showed: false
                });
              } else {
                const [declaration] = this.declaredCombinations;

                switch (comparer(highest, declaration.highest)) {
                  case 1:
                    this.declaredCombinations.push({
                      highest,
                      types: combinations.map(({
                        type
                      }) => type),
                      priority: _constants__WEBPACK_IMPORTED_MODULE_1__["DeclarationPriority"].HIGH,
                      player,
                      showed: false
                    });
                    break;

                  case 0:
                  case -1:
                    this.declaredCombinations.push({
                      highest,
                      types: combinations.map(({
                        type
                      }) => type),
                      priority: _constants__WEBPACK_IMPORTED_MODULE_1__["DeclarationPriority"].LOW,
                      player,
                      showed: false
                    });
                    break;
                }
              }

              return {
                status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                moveOrderChanged: false
              };
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveTypes"].SHOW_COMBINATION:
            {
              if (this.declaredCombinations.some(({
                showed
              }) => showed)) {
                return {
                  status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
                  moveOrderChanged: false
                };
              }

              const declaration = this.declaredCombinations.find(({
                player: id
              }) => id === player.id);

              if (!declaration) {
                return {
                  status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
                  moveOrderChanged: false
                };
              }

              const otherDeclaration = this.declaredCombinations.find(({
                player: id
              }) => id !== player.id);

              switch (this.handsHistory.length) {
                case 1:
                  if (!otherDeclaration || otherDeclaration.priority < declaration.priority) {
                    declaration.showed = true;
                    return {
                      status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                      moveOrderChanged: false,
                      declarationShowed: true,
                      declaration
                    };
                  }

                  return {
                    status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
                    moveOrderChanged: false
                  };

                case 2:
                  if (otherDeclaration && otherDeclaration.priority > declaration.priority) {
                    declaration.showed = true;
                    return {
                      status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].SUCCESS,
                      moveOrderChanged: false,
                      declarationShowed: true,
                      declaration
                    };
                  }

                  return {
                    status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
                    moveOrderChanged: false
                  };

                default:
                  return {
                    status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
                    moveOrderChanged: false
                  };
              }
            }

          default:
            break;
        }

        this.moveHistory.push({
          player,
          move
        });
        return {
          status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
          moveOrderChanged: false
        };
      } else {
        console.log('ASHOTI VALIDACIAN CHANCAV ');
        return {
          status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR,
          moveOrderChanged: false
        };
      }
    } else {
      console.log('IM VALIDACIAN CHANCAV ');
      return {
        status: _constants__WEBPACK_IMPORTED_MODULE_1__["MoveStageMoveMessages"].ERROR
      };
    }
  }

  checkPlayerOrder(player) {
    if (!this.currentHand) {
      return false;
    }

    if (this.lastPlayer) {
      return this.currentHand.moves.length === 0 === (player.id === this.lastPlayer.id);
    }

    return this.currentHand.moves.length === 0 === (player.id === this.priority.id);
  }

  getResult() {
    if (this.handsHistory.length !== 9) {
      return null;
    }

    const handPoints = Object(_logic_handPointsCalculator__WEBPACK_IMPORTED_MODULE_6__["default"])(this.trumpSuit);
    const combinationPoints = Object(_logic_combinationPointCalculator__WEBPACK_IMPORTED_MODULE_7__["default"])(this.trumpSuit);
    return this.round.getPlayers().reduce((acc, {
      id
    }) => {
      acc[id] = {
        hands: 0,
        combination: 0
      };

      for (const hand of this.hands[id]) {
        acc[id].hands += handPoints(hand);
      }

      const declaration = this.declaredCombinations.find(({
        showed,
        player
      }) => showed && id === player.id);

      if (declaration) {
        declaration.combinations.forEach(combination => {
          acc[id].combination += combinationPoints(combination);
        });
      }

      if (this.beloteRebelote) {
        if (acc[id] === this.beloteRebelote.player.id) {
          acc[id].combination += combinationPoints(this.beloteRebelote);
        }
      }

      return acc;
    }, {});
  }

  getSettings() {
    return this.round.getSettings();
  }

}

/***/ }),

/***/ "./game/belot/classic/moveStageMove.js":
/*!*********************************************!*\
  !*** ./game/belot/classic/moveStageMove.js ***!
  \*********************************************/
/*! exports provided: MoveStageMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStageMove", function() { return MoveStageMove; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");

class MoveStageMove {
  /**
   *
   * @param type {string}
   * @param options
   */
  constructor(type, options) {
    this.type = type;
    /** @type {Card} */

    this.card = null;

    switch (type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].MOVE:
        this.card = options.card;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].OPEN_CARDS:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].THROW_ALL_CARDS:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].SHOW_COMBINATION:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["MoveStageMoveTypes"].DECLARE_COMBINATION:
        this.cards = options.cards;
        break;
    }
  }

}

/***/ }),

/***/ "./game/belot/classic/round.js":
/*!*************************************!*\
  !*** ./game/belot/classic/round.js ***!
  \*************************************/
/*! exports provided: Round */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Round", function() { return Round; });
/* harmony import */ var _tradeStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tradeStage */ "./game/belot/classic/tradeStage.js");
/* harmony import */ var _moveStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveStage */ "./game/belot/classic/moveStage.js");
/* harmony import */ var _classicDeck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classicDeck */ "./game/belot/classic/classicDeck.js");
/* harmony import */ var _tradeStageMove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tradeStageMove */ "./game/belot/classic/tradeStageMove.js");




class Round {
  /**
   * @param game {Game}
   * @param priority {Player}
   */
  constructor(game, priority) {
    this.priority = priority;
    this.game = game; // console.log('====game ===== ', this.game)

    this.points = this.game.players.reduce((acc, cur) => {
      acc[cur.id] = 0;
      return acc;
    }, {});
    this.combinations = this.game.players.reduce((acc, cur) => {
      acc[cur.id] = [];
      return acc;
    }, {});
    this.cards = this.game.players.reduce((acc, cur) => {
      acc[cur.id] = [];
      return acc;
    }, {});
    this.trumpCandidateCard = null; // console.log('players => ', this.game.players);
    // console.log('points => ', this.points);
    // console.log('combinations => ', this.combinations);
    // console.log('cards => ', this.cards);
  }

  startTradeStage() {
    this.deck = new _classicDeck__WEBPACK_IMPORTED_MODULE_2__["ClassicDeck"]();
    const [first, second] = this.getPlayers();
    const [firstCards, secondCards, trumpCandidateCard] = this.deck.dealBeforeTradeStage();
    this.cards[first.id] = [...firstCards];
    this.cards[second.id] = [...secondCards];
    this.trumpCandidateCard = trumpCandidateCard; // const clone = JSON.parse(JSON.stringify(this));

    this.tradeStage = new _tradeStage__WEBPACK_IMPORTED_MODULE_0__["TradeStage"](this); // return this.tradeStage;
  }

  startMoveStage() {
    if (!this.tradeStage && !this.tradeStage.isStageEnd()) {
      return;
    }

    const [first, second] = this.getPlayers();
    const {
      trumpCandidateCardTo,
      trumper,
      trumpSuit
    } = this.tradeStage.getResult();
    const [firstCards, secondCards] = this.deck.dealAfterTradeStage(trumpCandidateCardTo);
    this.cards[first.id] = [...firstCards];
    this.cards[second.id] = [...secondCards];
    this.setTrump(trumpSuit, trumper);
    this.moveStage = new _moveStage__WEBPACK_IMPORTED_MODULE_1__["MoveStage"](this);
  }

  setTrump(suit, player) {
    this.trumpSuit = suit;
    this.trumper = player;
  }

  getSettings() {
    return this.game.getSettings();
  }

  getPlayers() {
    return [this.game.players.find(player => player.id === this.priority.id), this.game.players.find(player => player.id !== this.priority.id)];
  } // getResult() {
  //     //fixme: trumpery misht prioritov xaxacoxna
  //     const [trumper, other] = this.getPlayers();
  //     const points = this.moveStage.getResult();
  //     return {
  //         trumper: {id: trumper.id, points: points[trumper.id]},
  //         other: {id: other.id, points: points[other.id]}
  //     };
  // }


  getResult() {
    //fixme: trumpery misht prioritov xaxacoxna
    let trumper = this.trumper;
    let other = this.game.players.find(p => p.id !== trumper.id);
    const points = this.moveStage.getResult();
    return {
      trumper: {
        id: trumper.id,
        points: points[trumper.id]
      },
      other: {
        id: other.id,
        points: points[other.id]
      }
    };
  }

}

/***/ }),

/***/ "./game/belot/classic/settings.js":
/*!****************************************!*\
  !*** ./game/belot/classic/settings.js ***!
  \****************************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");

class Settings {
  constructor(configs) {
    this.amount = configs.amount;
    this.combinationType = configs.combinationType;
    this.trumpType = configs.trumpType;
    this.timeout = configs.timeout;
    this.scoreType = configs.scoreType; // isPointDifference,
    // amount,
    // winRounds,
    // winPoints,
    // timeout,
    // combs,
    // trumpType,
    // isPrivate,
    // isCapot2x,
    // dave
    // TODO
  }

  hasCombination(combination) {
    switch (combination) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].BELOT:
        return true;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].TERZ:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FIFTY:
        return this.combinationType !== _constants__WEBPACK_IMPORTED_MODULE_0__["CombinationTypes"].BELOT_REBELOT;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].HUNDRED:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["Combinations"].FOUR_CARDS:
        return this.combinationType === _constants__WEBPACK_IMPORTED_MODULE_0__["CombinationTypes"].HUNDRED_FOUR_CARDS;
    }

    return false;
  }

  hasNoTrump() {
    return this.trumpType === _constants__WEBPACK_IMPORTED_MODULE_0__["TrumpTypes"].WITH_NO_TRUMP;
  }

}

/***/ }),

/***/ "./game/belot/classic/tradeStage.js":
/*!******************************************!*\
  !*** ./game/belot/classic/tradeStage.js ***!
  \******************************************/
/*! exports provided: TradeStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStage", function() { return TradeStage; });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./game/belot/classic/logic/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");


/**
 * @property trumpCandidateCard {Card}
 */

class TradeStage {
  /**
   * @param round {Round}
   */
  constructor(round) {
    this.round = round;
    this.priority = round.priority;
    this.trumpCandidateCard = round.trumpCandidateCard;
    this.cards = round.cards;
    this.nextPlayer = round.priority;
    this.moves = [];
  }
  /**
   *
   * @param player {Player}
   * @param move {TradeStageMove}
   * @returns {Object}
   */


  doMove(player, move) {
    if (Object(_logic__WEBPACK_IMPORTED_MODULE_0__["tradeStageValidation"])(player, move, this)) {
      this.moves.push({
        move,
        player
      });
      console.log('move type => ', move.type);

      switch (move.type) {
        case _constants__WEBPACK_IMPORTED_MODULE_1__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITHOUT_CARD:
          this.trumpCandidateCardTo = 0;
          this.trumpSuit = move.chosenTrumpSuit;
          this.trumper = player;
          break;

        case _constants__WEBPACK_IMPORTED_MODULE_1__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITH_CARD:
        case _constants__WEBPACK_IMPORTED_MODULE_1__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP:
          this.trumpCandidateCardTo = this.priority.id === player.id ? 1 : 2;
          this.trumpSuit = move.chosenTrumpSuit;
          this.trumper = player;
          break;

        default:
          break;
      }

      return {
        status: _constants__WEBPACK_IMPORTED_MODULE_1__["TradeStageMoveMessages"].SUCCESS,
        trumpChosen: move.isTrumpChosen()
      };
    }

    return {
      status: _constants__WEBPACK_IMPORTED_MODULE_1__["TradeStageMoveMessages"].ERROR
    };
  }

  getSettings() {
    return this.round.getSettings();
  }

  isStageEnd() {
    return !!this.trumpSuit;
  }
  /**
   * @returns {
   *      {
   *          moveHistory: [],
   *          trumpCandidateCardTo: number,
   *          trumpSuit: string,
   *          trumper: {Player}
   *          }
   * }
   */


  getResult() {
    return {
      trumpCandidateCardTo: this.trumpCandidateCardTo,
      trumpSuit: this.trumpSuit,
      trumper: this.trumper,
      moveHistory: this.moves
    };
  }

}

/***/ }),

/***/ "./game/belot/classic/tradeStageMove.js":
/*!**********************************************!*\
  !*** ./game/belot/classic/tradeStageMove.js ***!
  \**********************************************/
/*! exports provided: TradeStageMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStageMove", function() { return TradeStageMove; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./game/belot/constants.js");

/**
 * @class TradeStageMove
 * @property type {string}
 * @property withCard {boolean|undefined}
 * @property chosenTrumpSuit {string|undefined}
 */

class TradeStageMove {
  constructor(type, optional = null) {
    console.log('=====   TradeStageMove   ====');
    this.type = type;

    switch (type) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITH_CARD:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITHOUT_CARD:
        this.withCard = type === _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_TRUMP_WITH_CARD;
        this.chosenTrumpSuit = optional.trumpSuit;
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].CHOOSE_CANDIDATE_TRUMP:
        //TODO: Research and implement
        this.chosenTrumpSuit = optional.trumpSuit; // this.chosenTrumpSuit === trumpCandidateCard.suit?

        break;

      case _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].PASS_CANDIDATE_TRUMP:
      case _constants__WEBPACK_IMPORTED_MODULE_0__["TradeStageMoveTypes"].PASS_TRUMP:
      default:
        break;
    }
  }

  isTrumpChosen() {
    return !!this.chosenTrumpSuit;
  }

}

/***/ }),

/***/ "./game/belot/constants.js":
/*!*********************************!*\
  !*** ./game/belot/constants.js ***!
  \*********************************/
/*! exports provided: Suits, Values, Combinations, CombinationTypes, ScoreTypes, BelotTypes, TradeStageMoveMessages, MoveStageMoveMessages, DeclarationPriority, TradeStageMoveTypes, TrumpTypes, TrumpSuits, MoveStageMoveTypes, classic, trumpPoints, noTrumpPoints, commonPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suits", function() { return Suits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Values", function() { return Values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combinations", function() { return Combinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationTypes", function() { return CombinationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreTypes", function() { return ScoreTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BelotTypes", function() { return BelotTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStageMoveMessages", function() { return TradeStageMoveMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStageMoveMessages", function() { return MoveStageMoveMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclarationPriority", function() { return DeclarationPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStageMoveTypes", function() { return TradeStageMoveTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrumpTypes", function() { return TrumpTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrumpSuits", function() { return TrumpSuits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStageMoveTypes", function() { return MoveStageMoveTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classic", function() { return classic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trumpPoints", function() { return trumpPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noTrumpPoints", function() { return noTrumpPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonPoints", function() { return commonPoints; });
const Suits = Object.freeze({
  HEART: "heart",
  DIAMOND: "diamond",
  SPADE: "spade",
  CLUB: "club"
});
const Values = Object.freeze({
  SEVEN: "7",
  EIGHT: "8",
  NINE: "9",
  TEN: "10",
  JACK: "jack",
  QUEEN: "queen",
  KING: "king",
  ACE: "ace"
});
const Combinations = Object.freeze({
  BELOT: "belot",
  TERZ: "terz",
  FIFTY: "fifty",
  HUNDRED: "hundred",
  FOUR_CARDS: "four_cards"
});
const CombinationTypes = Object.freeze({
  BELOT_REBELOT: "belot/rebelot",
  TERZ_FIFTY: "terz/fifty",
  HUNDRED_FOUR_CARDS: "hundred/four_cards"
});
const ScoreTypes = Object.freeze({
  POINTS: 'points',
  ROUNDS: 'rounds'
});
const BelotTypes = Object.freeze({
  OPEN: "open",
  CLASSIC: "classic"
});
const TradeStageMoveMessages = Object.freeze({
  SUCCESS: "success",
  ERROR: "error"
});
const MoveStageMoveMessages = Object.freeze({
  SUCCESS: "success",
  ERROR: "error"
});
const DeclarationPriority = Object.freeze({
  NORMAL: 0,
  LOW: -1,
  HIGH: 1
});
const TradeStageMoveTypes = Object.freeze({
  CHOOSE_CANDIDATE_TRUMP: "choose_candidate_trump",
  CHOOSE_TRUMP_WITH_CARD: "choose_trump_with_card",
  CHOOSE_TRUMP_WITHOUT_CARD: "choose_trump_without_card",
  PASS_CANDIDATE_TRUMP: "pass_candidate_card",
  PASS_TRUMP: "pass_trump"
});
const TrumpTypes = Object.freeze({
  WITH_NO_TRUMP: "with_no_trump",
  WITHOUT_NO_TRUMP: "without_no_trump"
});
const TrumpSuits = Object.freeze({
  HEART: Suits.HEART,
  DIAMOND: Suits.DIAMOND,
  SPADE: Suits.SPADE,
  CLUB: Suits.CLUB,
  NO_TRUMP: "no_trump"
});
const MoveStageMoveTypes = Object.freeze({
  DECLARE_COMBINATION: "declare_combination",
  SHOW_COMBINATION: "show_combination",
  MOVE: "move",
  THROW_ALL_CARDS: "throw_card",
  OPEN_CARDS: "open_cards"
});
const values = [Values.NINE, Values.TEN, Values.JACK, Values.QUEEN, Values.KING, Values.ACE];
const suits = [Suits.SPADE, Suits.HEART, Suits.DIAMOND, Suits.CLUB];
const hundreds = [4, 5].map((e, s) => ({
  sequence: values.slice(s, e + 1),
  value: values[e]
})).reverse().reduce((acc, cur) => (acc.push(...suits.map(suit => ({ ...cur,
  suit
}))), acc), []);
const fifties = [3, 4, 5].map((e, s) => ({
  sequence: values.slice(s, e + 1),
  value: values[e]
})).reverse().reduce((acc, cur) => (acc.push(...suits.map(suit => ({ ...cur,
  suit
}))), acc), []);
const terzs = [2, 3, 4, 5].map((e, s) => ({
  sequence: values.slice(s, e + 1),
  value: values[e]
})).reverse().reduce((acc, cur) => (acc.push(...suits.map(suit => ({ ...cur,
  suit
}))), acc), []);
const classic = {
  values,
  suits,
  hundreds,
  fifties,
  terzs
};
const trumpPoints = Object.freeze({
  [Values.NINE]: 14,
  [Values.TEN]: 10,
  [Values.JACK]: 20,
  [Values.QUEEN]: 3,
  [Values.KING]: 4,
  [Values.ACE]: 11
});
const noTrumpPoints = Object.freeze({
  [Values.NINE]: 0,
  [Values.TEN]: 10,
  [Values.JACK]: 2,
  [Values.QUEEN]: 3,
  [Values.KING]: 4,
  [Values.ACE]: 19
});
const commonPoints = Object.freeze({
  [Values.NINE]: 0,
  [Values.TEN]: 10,
  [Values.JACK]: 2,
  [Values.QUEEN]: 3,
  [Values.KING]: 4,
  [Values.ACE]: 11
});

/***/ }),

/***/ "./game/belot/deck/card.js":
/*!*********************************!*\
  !*** ./game/belot/deck/card.js ***!
  \*********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;

    this.is = ({
      value,
      suit
    }) => {
      return (!suit || this.suit === suit) && (!value || this.value === value);
    };
  }

}

/***/ }),

/***/ "./game/belot/deck/deck.js":
/*!*********************************!*\
  !*** ./game/belot/deck/deck.js ***!
  \*********************************/
/*! exports provided: Deck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deck", function() { return Deck; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./game/belot/helper.js");

class Deck {
  constructor(cards) {
    this.cards = cards;
    this.shuffle();
  }

  shuffle() {
    const cards = [...this.cards];
    const shuffle = [];

    while (cards.length > 0) {
      const index = _helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].getRandomNumber(cards.length);
      shuffle.push(cards[index]);
      cards.splice(index, 1);
    }

    this.cards = shuffle;
  }

}

/***/ }),

/***/ "./game/belot/helper.js":
/*!******************************!*\
  !*** ./game/belot/helper.js ***!
  \******************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
class Helper {
  /**
   * this method returns number witch is  0 <= number < max
   * @param max
   * @returns {number}
   */
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

}

/***/ }),

/***/ "./game/rps.js":
/*!*********************!*\
  !*** ./game/rps.js ***!
  \*********************/
/*! exports provided: Shapes, RPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shapes", function() { return Shapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPS", function() { return RPS; });
const Shapes = {
  DEFAULT: 0,
  ROCK: 1,
  PAPER: 2,
  SCISSOR: 3
};
const WinnerShape = {
  0: 0,
  3: 2,
  4: 1,
  5: 3
};
class RPS {
  /**
   * Checking result
   * @param steps
   * @returns {{lose: Array, win: Array}}
   */
  static checkResult(steps) {
    const tokens = Object.keys(steps);
    const shapes = []; // console.log('tokens => ', tokens);

    for (const token of tokens) {
      const shape = steps[token]; // console.log('shape => ', shape);

      if (shape === Shapes.DEFAULT) {
        continue;
      }

      if (!shapes.includes(shape)) {
        shapes.push(shape);
      }
    } // console.log('shapes => ', shapes);
    // console.log('steps => ', steps);


    const win = [];
    const lose = [];

    if (shapes.length === 1 || shapes.length === 3) {
      for (const token of tokens) {
        if (steps[token] !== Shapes.DEFAULT) {
          win.push(token);
        } else {
          lose.push(token);
        }
      }
    } else {
      const sum = shapes.reduce((a, c) => a + c, 0); // console.log('sum => ', sum)
      // console.log('steps => ', steps)

      const winner = WinnerShape[sum];

      for (const token of tokens) {
        if (steps[token] === winner) {
          win.push(token);
        } else {
          lose.push(token);
        }
      }
    }

    return {
      win,
      lose
    };
  }

}

/***/ }),

/***/ "./game/tests/classicDeck.js":
/*!***********************************!*\
  !*** ./game/tests/classicDeck.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _belot_classic_classicDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../belot/classic/classicDeck */ "./game/belot/classic/classicDeck.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./game/tests/helper.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  const deck = new _belot_classic_classicDeck__WEBPACK_IMPORTED_MODULE_0__["ClassicDeck"]();
  const cards = deck.cards;
  const [f1, f2, t] = deck.dealBeforeTradeStage();
  const [s11, s12] = deck.dealAfterTradeStage(1);
  const [s21, s22] = deck.dealAfterTradeStage(2);
  const [s01, s02] = deck.dealAfterTradeStage(0);
  console.log(cards.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("");
  console.log("First Deal");
  console.log("Trump card: " + Object(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"])(t));
  console.log("P1: " + f1.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("P2: " + f2.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("");
  console.log("To First");
  console.log("P1: " + s11.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("P2: " + s12.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("");
  console.log("To Second");
  console.log("P1: " + s21.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("P2: " + s22.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("");
  console.log("To Down");
  console.log("P1: " + s01.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
  console.log("P2: " + s02.map(_helper__WEBPACK_IMPORTED_MODULE_1__["cardToString"]).join('  '));
});

/***/ }),

/***/ "./game/tests/combinationChecking.js":
/*!*******************************************!*\
  !*** ./game/tests/combinationChecking.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _belot_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../belot/constants */ "./game/belot/constants.js");
/* harmony import */ var _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belot/deck/card */ "./game/belot/deck/card.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./game/tests/helper.js");



const {
  values,
  suits,
  hundreds,
  fifties,
  terzs
} = _belot_constants__WEBPACK_IMPORTED_MODULE_0__["classic"]; // console.log(hundreds);
// console.log(fifties);
// console.log(terzs);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const cards = [// new Card(Values.NINE, Suits.SPADE),
  // new Card(Values.TEN, Suits.SPADE),
  // new Card(Values.JACK, Suits.SPADE),
  // new Card(Values.QUEEN, Suits.SPADE),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].SPADE), new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].SPADE), // new Card(Values.NINE, Suits.DIAMOND),
  // new Card(Values.TEN, Suits.DIAMOND),
  // new Card(Values.JACK, Suits.DIAMOND),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].DIAMOND), new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].DIAMOND), new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].DIAMOND), // new Card(Values.NINE, Suits.HEART),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].HEART), // new Card(Values.JACK, Suits.HEART),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].HEART), // new Card(Values.KING, Suits.HEART),
  // new Card(Values.ACE, Suits.HEART),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].CLUB), // new Card(Values.TEN, Suits.CLUB),
  // new Card(Values.JACK, Suits.CLUB),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].CLUB), // new Card(Values.KING, Suits.CLUB),
  new _belot_deck_card__WEBPACK_IMPORTED_MODULE_1__["Card"](_belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE, _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].CLUB)];

  const helper = ({
    sequence,
    suit
  }) => sequence.every(value => cards.some(card => card.is({
    value,
    suit
  })));

  const combinations = [];

  while (cards.length > 0) {
    let combinationValue, combination;
    combinationValue = values.find(value => suits.every(suit => cards.some(card => card.is({
      value,
      suit
    }))));

    if (combinationValue) {
      // console.log(combinationValue);
      suits.forEach(suit => cards.splice(cards.findIndex(card => card.is({
        suit,
        value: combinationValue
      })), 1));
      combinations.push("4x");
      continue;
    }

    combination = hundreds.find(helper);

    if (combination) {
      // console.log(combination);
      combination.sequence.forEach(value => cards.splice(cards.findIndex(card => card.is({
        value,
        suit: combination.suit
      })), 1));
      combinations.push("100");
      continue;
    }

    combination = fifties.find(helper);

    if (combination) {
      // console.log(combination);
      combination.sequence.forEach(value => cards.splice(cards.findIndex(card => card.is({
        value,
        suit: combination.suit
      })), 1));
      combinations.push("50");
      continue;
    }

    combination = terzs.find(helper);

    if (combination) {
      console.log(combination);
      combination.sequence.forEach(value => cards.splice(cards.findIndex(card => card.is({
        value,
        suit: combination.suit
      })), 1));
      combinations.push("terz");
      continue;
    }

    break;
  }

  console.log(combinations);
  console.log(cards.map(_helper__WEBPACK_IMPORTED_MODULE_2__["cardToString"]).join("   "));
});

/***/ }),

/***/ "./game/tests/combinations.js":
/*!************************************!*\
  !*** ./game/tests/combinations.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _belot_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../belot/constants */ "./game/belot/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./game/tests/helper.js");


const {
  values,
  suits,
  hundreds,
  fifties,
  terzs
} = _belot_constants__WEBPACK_IMPORTED_MODULE_0__["classic"];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  console.log(values);
  console.log(suits); // console.log("100");
  // console.log(
  //     hundreds
  //         .map(({sequence, value, suit}) =>
  //             `Higher: ${cardToString({value, suit})} -- ${
  //                 sequence.map(valueToString).join(", ")
  //             }`)
  //         .join("\n")
  // );
  // console.log("50");
  // console.log(
  //     fifties
  //         .map(
  //             ({sequence, value}) =>
  //                 `Value: ${valueToString(value)} -- ${
  //                     sequence.map(valueToString).join(", ")
  //                 }`)
  //         .join("\n")
  // );
  //
  // console.log("Terz");
  // console.log(
  //     terzs
  //         .map(
  //             ({sequence, value}) =>
  //                 `Value: ${valueToString(value)} -- ${
  //                     sequence.map(valueToString).join(", ")
  //                 }`)
  //         .join("\n")
  // );
});

/***/ }),

/***/ "./game/tests/helper.js":
/*!******************************!*\
  !*** ./game/tests/helper.js ***!
  \******************************/
/*! exports provided: cardToString, valueToString, suitToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToString", function() { return cardToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToString", function() { return valueToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suitToString", function() { return suitToString; });
/* harmony import */ var _belot_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../belot/constants */ "./game/belot/constants.js");

function cardToString(card) {
  return valueToString(card.value) + suitToString(card.suit);
}
function valueToString(value) {
  switch (value) {
    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].SEVEN:
      return " 7";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].EIGHT:
      return " 8";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].NINE:
      return " 9";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].TEN:
      return "10";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].JACK:
      return " J";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].QUEEN:
      return " Q";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].KING:
      return " K";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Values"].ACE:
      return " A";
  }
}
function suitToString(suit) {
  switch (suit) {
    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].HEART:
      return "♥";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].SPADE:
      return "♠";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].DIAMOND:
      return "♦";

    case _belot_constants__WEBPACK_IMPORTED_MODULE_0__["Suits"].CLUB:
      return "♣";
  }
}

/***/ }),

/***/ "./game/tests/index.js":
/*!*****************************!*\
  !*** ./game/tests/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestService; });
/* harmony import */ var _classicDeck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classicDeck */ "./game/tests/classicDeck.js");
/* harmony import */ var _combinations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./combinations */ "./game/tests/combinations.js");
/* harmony import */ var _combinationChecking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combinationChecking */ "./game/tests/combinationChecking.js");
/* harmony import */ var _belot_classic_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../belot/classic/game */ "./game/belot/classic/game.js");
/* harmony import */ var _belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../belot/classic/tradeStageMove */ "./game/belot/classic/tradeStageMove.js");
/* harmony import */ var _belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../belot/classic/moveStageMove */ "./game/belot/classic/moveStageMove.js");
/* harmony import */ var _belot_deck_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../belot/deck/card */ "./game/belot/deck/card.js");







class TestService {
  static initService() {
    // classicDeckTest();
    // combinationsTest();
    // combinationCheckingTest();
    TestService.createGameAndTradeStage();
  }

  static createGameAndTradeStage() {
    let game = new _belot_classic_game__WEBPACK_IMPORTED_MODULE_3__["Game"]([{
      id: '123'
    }, {
      id: '456'
    }], {
      amount: 10
    }, '77777');
    game.createRound();
    game.currentRound.startTradeStage();
    let tradeStage = game.currentRound.tradeStage;
    let trumpCandidateCard = game.currentRound.tradeStage.trumpCandidateCard;
    let [player1, player2] = game.currentRound.getPlayers();
    let move = new _belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_4__["TradeStageMove"]('choose_candidate_trump', {
      trumpSuit: trumpCandidateCard.suit
    });
    game.currentRound.tradeStage.doMove(player1, move);
    game.currentRound.startMoveStage();
    let moveStage = game.currentRound.moveStage;
    TestService.startMoveStage(moveStage, player1, player2);
  }

  static startMoveStage(moveStage, player1, player2) {
    let card1 = moveStage.cards[player1.id][0];
    let card2 = moveStage.cards[player2.id].find(card => {
      return card.suit === card1.suit;
    });
    let card3 = moveStage.cards[player1.id][1];
    let move1 = new _belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_5__["MoveStageMove"]('move', {
      card: card1
    });
    let move2 = new _belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_5__["MoveStageMove"]('move', {
      card: card2
    });
    let move3 = new _belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_5__["MoveStageMove"]('move', {
      card: card3
    });
    let result1 = moveStage.doMove(player1, move1);
    console.log(player1.id, ' => ', moveStage.validActions[player1.id]);
    console.log(player2.id, ' => ', moveStage.validActions[player2.id]);
    let result2 = moveStage.doMove(player2, move2); // let result3 = moveStage.doMove(player1, move3);

    console.log('----------------------------------');
    console.log(player1.id, ' => ', moveStage.validActions[player1.id]);
    console.log(player2.id, ' => ', moveStage.validActions[player2.id]); // console.log('result1 => ', result1);
    // console.log('result2 => ', result2)
  }

  static SaqoTest() {// let game = new Game([{id: '123'}, {id: '456'}], {amount: 10}, '77777');
    // game.createRound();
    // game.currentRound.startTradeStage();
    // let trumpCandidateCard = game.currentRound.tradeStage.trumpCandidateCard;
    // let [player1, player2] = game.currentRound.getPlayers();
    // let move = new TradeStageMove('choose_candidate_trump', {trumpSuit: trumpCandidateCard.suit});
    // game.currentRound.tradeStage.doMove(player1, move);
    // let tradeStage = game.currentRound.tradeStage;
    // game.currentRound.startMoveStage();
    // const {trumpCandidateCardTo, trumper, trumpSuit} = tradeStage.getResult();
    // let moveStage = game.currentRound.moveStage;
    // const [firstCards, secondCards]= game.currentRound.deck.dealAfterTradeStage(trumpCandidateCardTo)
  }

}

/***/ }),

/***/ "./game/timer.js":
/*!***********************!*\
  !*** ./game/timer.js ***!
  \***********************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var _stacks_sessionStack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stacks/sessionStack */ "./stacks/sessionStack.js");
/* harmony import */ var _stacks_stateStack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stacks/stateStack */ "./stacks/stateStack.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constants */ "./services/constants.js");




let STEP_TIMER = 0;
class Timer {
  init() {
    this.interval = setInterval(() => {
      this.checkDaedlines();
    }, 1000);
  }

  constructor(continueTimer, stepTimer, players, currentPlayer, cb) {
    console.log('currentPlayer Timer => ', currentPlayer.id);
    STEP_TIMER = stepTimer;
    this.isSessionEnd = false; // this.isStepEnd = false;

    this.stepTimer = stepTimer;
    this.players = {};
    this.currentPlayer = currentPlayer;
    players.forEach(player => {
      this.players[player.id] = {
        continueTimer
      };
    });
    this.continueTimer = this.players[this.currentPlayer.id].continueTimer;
    this.cb = cb;
  }

  checkDaedlines() {
    if (this.isSessionEnd) {
      console.log("Game Ended ", this.currentPlayer.id);
      this.cb(this.currentPlayer);
      clearInterval(this.interval);
      return;
    }

    if (this.checkStepTimer() === 0) {
      // this.isStepEnd = true;
      this.checkContinueTimer();
    }
  }

  checkStepTimer() {
    if (this.stepTimer !== 0) {
      console.log("-");
      this.stepTimer -= 1000;
      console.log('stepTimer => ', this.currentPlayer.id, this.stepTimer);
    }

    return this.stepTimer;
  }

  checkContinueTimer() {
    console.log("+");
    this.continueTimer -= 1000;
    console.log('continueTimer => ', this.currentPlayer.id, this.continueTimer);

    if (this.continueTimer === 0) {
      this.isSessionEnd = true;
    }
  }

  startNewStep(player) {
    console.log('++++++++');
    this.saveContinueTimer(this.continueTimer, this.currentPlayer);
    this.currentPlayer = player;
    this.continueTimer = this.players[player.id].continueTimer;
    this.stepTimer = STEP_TIMER; // this.isStepEnd = false;
  }

  saveContinueTimer(interval, player) {
    this.players[player.id].continueTimer = interval;
  }

} // let Game = new Timer(7000, 3000, ['123','456'], {id : '123'});
// Game.init();
// setTimeout(() => {
//     Game.startNewStep({id : '456'})
// }, 5000);
//

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./server.js");
/* harmony import */ var _services_zeroMQService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/zeroMQService */ "./services/zeroMQService.js");
/* harmony import */ var _services_socketServiceTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/socketServiceTest */ "./services/socketServiceTest.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _game_tests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/tests */ "./game/tests/index.js");
/* harmony import */ var _stacks_sessionStack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stacks/sessionStack */ "./stacks/sessionStack.js");
 // import SocketIOService from "./services/socketIOService";



 // import {HttpService} from "./services/http";
// import BetAmountService from "./services/betAmountsService";



global._ = __webpack_require__(/*! lodash */ "lodash");
_modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_3__["default"].connect();
_server__WEBPACK_IMPORTED_MODULE_0__["default"].createApp();
_server__WEBPACK_IMPORTED_MODULE_0__["default"].setupExpress();
_server__WEBPACK_IMPORTED_MODULE_0__["default"].setupIntercom(); // sessionStack.load();

_services_zeroMQService__WEBPACK_IMPORTED_MODULE_1__["default"].initService(); // SocketService.initService();
// HttpService.initService();
// TestService.initService();

/***/ }),

/***/ "./models/session.js":
/*!***************************!*\
  !*** ./models/session.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Session; });
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _game_rps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/rps */ "./game/rps.js");
/* harmony import */ var _services_zeroMQService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/zeroMQService */ "./services/zeroMQService.js");
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/constants */ "./services/constants.js");




class Session {
  /**
   * Creating classic session on Room create action
   * @param key
   * @param game
   * @returns {GameSession}
   */
  constructor(key, game) {
    this.key = key;
    this.game = game;
    this.save();
  }
  /**
   * Closing session when some player not want to continue
   */


  async endSession() {
    const {
      tokens
    } = this.getLastEvent();
    clearTimeout(this.stepTimeoutID);
    clearTimeout(this.continueTimeoutID);
    await this.store();

    for (const token of tokens) {
      this.players[token].socket.emit('classic-over', {});
      this.players[token].socket.disconnect();
      await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].deleter(`player-playing-${token}`);
    }

    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].deleter(`game-${this.key}`);
    _services_zeroMQService__WEBPACK_IMPORTED_MODULE_2__["default"].sendGameOverMessage(this.key);
  }
  /**
   * Getting last classic event and all tokens
   * @returns {{tokens: string[], event: *}}
   */


  getLastEvent() {
    return {
      tokens: Object.keys(this.players)
    };
  }
  /**
   * Saving events in Redis
   * @returns {Promise<void>}
   */


  async save() {
    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].setter(`SESSION-${this.key}`, _services_constants__WEBPACK_IMPORTED_MODULE_3__["EXPIRE_TIME"], this);
  }
  /**
   * Saving events in Database
   * @returns void
   */


  async store() {// TODO save event in MySQL Database
  }

}

/***/ }),

/***/ "./models/state.js":
/*!*************************!*\
  !*** ./models/state.js ***!
  \*************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/constants */ "./services/constants.js");


class State {
  constructor(key, players) {
    this.key = key;
    this.players = {};
    this.continueTimer = {};
    players.forEach(player => {
      this.players[player.id] = player;
      this.continueTimer[player.id] = _services_constants__WEBPACK_IMPORTED_MODULE_1__["CONTINUE_TIMER"] * 1000;
    });
    this.save();
  }

  getPlayerState(id) {// TODO return data for this player
  }

  getSpectatorState() {// TODO return data public state
  }

  getState() {// TODO return full state
  }

  async save() {
    await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].setter(`STATE-${this.key}`, _services_constants__WEBPACK_IMPORTED_MODULE_1__["EXPIRE_TIME"], this);
  }

}

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

 // const PREFIX = `n-${info.serverId}-${info.nodeId}_`;

const PREFIX = `bc_or-`;
class RedisModule {
  static connect() {
    RedisModule.client = async_redis__WEBPACK_IMPORTED_MODULE_0___default.a.createClient();
    RedisModule.client.on('ready', () => {
      console.log('Redis connection opened roombox');
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

  static async getter(key, prefixed) {
    key = prefixed ? key : PREFIX + key;

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

  static async getKeys(key) {
    key = PREFIX + key;

    try {
      return await RedisModule.client.keys(key);
    } catch (error) {
      console.log('RedisModule/getter Error: ', error);
      return false;
    }
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
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pm-intercom */ "pm-intercom");
/* harmony import */ var pm_intercom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pm_intercom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./configs/info */ "./configs/info.js");








/**
 * @class Server
 * */

class Server {
  static createApp() {
    Server.app = express__WEBPACK_IMPORTED_MODULE_1___default()();
  }

  static setupExpress() {
    Server.app.server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(Server.app);
    Server.app.disable('x-powered-by');
    Server.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
    Server.app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
      extended: false
    }));
    Server.app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()('tiny'));
    Server.app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()()); // Server.app.use(cors());

    Server.app.server.listen(_configs_info__WEBPACK_IMPORTED_MODULE_7__["info"].serverAddress.port, () => {
      console.log(`Server listening on http://${_configs_info__WEBPACK_IMPORTED_MODULE_7__["info"].serverAddress.host}:${_configs_info__WEBPACK_IMPORTED_MODULE_7__["info"].serverAddress.port}`);
    });
  }

  static setupIntercom() {
    pm_intercom__WEBPACK_IMPORTED_MODULE_6___default.a.init(_configs_info__WEBPACK_IMPORTED_MODULE_7__["info"]);
  }

  static getApp() {
    return Server.app;
  }

}

/***/ }),

/***/ "./services/constants.js":
/*!*******************************!*\
  !*** ./services/constants.js ***!
  \*******************************/
/*! exports provided: ZMQPullActions, ZMQPushActions, ClassicPushActions, ClassicPullActions, EXPIRE_TIME, STEP_TIMER, CONTINUE_TIMER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMQPullActions", function() { return ZMQPullActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZMQPushActions", function() { return ZMQPushActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicPushActions", function() { return ClassicPushActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicPullActions", function() { return ClassicPullActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPIRE_TIME", function() { return EXPIRE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_TIMER", function() { return STEP_TIMER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTINUE_TIMER", function() { return CONTINUE_TIMER; });
const ZMQPullActions = {
  CREATE_GAME_CONECTION: 7,
  GAME_EVENT: 10,
  CONNECT_SPECTATOR: 11,
  GAME_CONNECTION_CREATED: 12,
  GAME_END_TRIGGER: 8,
  TRADE_STAGE_MOVE: 20,
  MOVE_STAGE_MOVE: 21
};
const ZMQPushActions = {
  CREATE_CONNECTION: 7,
  GAME_MESSAGE: 8,
  SPECTATE_MESSAGE: 9,
  GAME_END_TRIGGER: 10,
  START_CLASSIC_GAME: 10
};
const ClassicPushActions = {
  START_GAME_SUCCESS: 20,
  START_GAME_ERROR: 21,
  TRADE_STAGE_MOVE_EMIT_SUCCESS: 22,
  TRADE_STAGE_MOVE_EMIT_ERROR: 23,
  MOVE_STAGE_MOVE_EMIT_OK_SUCCESS: 24,
  MOVE_STAGE_MOVE_EMIT_OK_ERROR: 25
};
const ClassicPullActions = {
  START_GAME_OK: 1,
  GAME_EVENT: 10,
  TRADE_STAGE_MOVE: 20,
  MOVE_STAGE_MOVE: 21
};
const EXPIRE_TIME = 36000;
const STEP_TIMER = 15;
const CONTINUE_TIMER = 20;

/***/ }),

/***/ "./services/gameService.js":
/*!*********************************!*\
  !*** ./services/gameService.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameService; });
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _game_belot_classic_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/belot/classic/game */ "./game/belot/classic/game.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/session */ "./models/session.js");
/* harmony import */ var _game_belot_classic_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/belot/classic/settings */ "./game/belot/classic/settings.js");




let games = {};
class GameService {
  /**
   * @param key
   * @param tokens
   * @returns {GameSession}
   */
  static async initGame(key, tokens) {
    // let room = await RedisModule.getter('ROOM-' + key, false);
    // let settings = new Settings(room.settings);
    let settings = new _game_belot_classic_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]({
      amount: 1000,
      trumpType: 'with_no_trump',
      combinationType: 'belot/rebelot',
      timeout: 20,
      scoreType: 'points'
    });
    let game = new _game_belot_classic_game__WEBPACK_IMPORTED_MODULE_1__["Game"](tokens, settings, key);
    game.createRound();
    game.currentRound.startTradeStage();

    try {
      //TODO: save game in redis
      // await game.save();
      // game.time.init();
      games[key] = game;
      return game;
    } catch (e) {
      console.log('game save error  ', e);
    }
  }

  static async load() {
    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getKeys("GAME-*");

    if (data) {
      console.log(`nodeService.initService loaded ${data.length} games from storage`);
    }

    return Promise.all(data.map(async key => {
      let info = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getter(key, true);
      games[info.key] = new _game_belot_classic_game__WEBPACK_IMPORTED_MODULE_1__["Game"](info.players, info.settings, info.key);
    }));
  }

  static async getGameByKey(gameKey) {
    if (games[gameKey]) {
      return games[gameKey];
    } else {
      return null;
    }
  }

}

/***/ }),

/***/ "./services/socketServiceTest.js":
/*!***************************************!*\
  !*** ./services/socketServiceTest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocketIOService; });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../server */ "./server.js");
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/info */ "./configs/info.js");
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _gameService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameService */ "./services/gameService.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./services/constants.js");
/* harmony import */ var _game_belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/belot/classic/tradeStageMove */ "./game/belot/classic/tradeStageMove.js");
/* harmony import */ var _game_belot_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game/belot/constants */ "./game/belot/constants.js");
/* harmony import */ var _game_belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../game/belot/classic/moveStageMove */ "./game/belot/classic/moveStageMove.js");









const clients = {};
const playerList = {};
const spectatorList = {};
class SocketIOService {
  static initService() {
    SocketIOService.io = socket_io__WEBPACK_IMPORTED_MODULE_0___default()(_server__WEBPACK_IMPORTED_MODULE_1__["default"].app.server, {
      path: _configs_info__WEBPACK_IMPORTED_MODULE_2__["info"].serverAddress.socketPath
    });
    SocketIOService.node = {
      serverId: _configs_info__WEBPACK_IMPORTED_MODULE_2__["info"].serverId,
      nodeId: _configs_info__WEBPACK_IMPORTED_MODULE_2__["info"].nodeId
    };
    SocketIOService.setupGameNamespace();
  }

  static setupGameNamespace() {
    SocketIOService.gameNamespace = SocketIOService.io.of('/game');
    SocketIOService.gameNamespace.on('connection', async socket => {
      const token = socket.handshake.query.token;
      let players = [{
        id: '123'
      }, {
        id: '456'
      }];
      clients[token] = socket;
      socket.on('game', async data => {
        // let deckBeforeTradeStageMove = await GameService.initGame(data.key, players);
        let game = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].initGame('1111', players);
        console.log('trumpCandidateCard => ', game.currentRound.trumpCandidateCard);
        console.log('priority => ', game.currentRound.priority);
        console.log('settings => ', game.settings);
        let msg = {
          trumpCandidateCard: game.currentRound.trumpCandidateCard,
          priority: game.currentRound.priority
        };
        this.broadCast('game', msg);
      });
      socket.on('trade', async data => {
        data = {
          key: data.key,
          player: token,
          msg: {
            type: data.move.type,
            trumpSuit: data.move.trumpSuit
          }
        };
        let game = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].getGameByKey('1111');

        try {
          let player = game.players.find(p => p.id === data.player);
          console.log('player => ', player);
          let move = new _game_belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_6__["TradeStageMove"](data.msg.type, {
            trumpSuit: data.msg.trumpSuit
          });
          console.log('move => ', move);
          let result = game.currentRound.tradeStage.doMove(player, move);
          console.log('result => ', result);

          if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_7__["TradeStageMoveMessages"].SUCCESS) {
            let nextPlayer = game.players.find(p => p.id !== player.id);
            console.log('nextPlayer => ', nextPlayer);
            game.currentRound.tradeStage.nextPlayer = nextPlayer;
            game.time.startNewStep(nextPlayer);

            if (game.currentRound.tradeStage.isStageEnd()) {
              console.log('====== START MOVE STAGE ======');
              let {
                trumpSuit,
                trumper
              } = game.currentRound.tradeStage.getResult();
              game.currentRound.startMoveStage();
              let [first, second] = game.currentRound.getPlayers();
              let {
                cards
              } = game.currentRound.moveStage;
              let msgRoom = {
                trumper,
                trumpSuit,
                priority: game.currentRound.priority
              };
              let msg1 = {
                cards: cards[first.id]
              };
              let msg2 = {
                cards: cards[second.id]
              };
              this.sendMSG(first.id, first.id, msg1);
              this.sendMSG(second.id, second.id, msg2); // console.log(first.id, cards[first.id]);
              // console.log('+++++++++++++++++++++++++++++++++++++++')
              // console.log(second.id, cards[second.id]);
            } else {
              let msg = {
                trumpChosen: result.trumpChosen,
                nextPlayer,
                timeout: game.settings.timeout
              };
              socket.emit('game', msg);
            }
          } else if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_7__["TradeStageMoveMessages"].ERROR) {
            //TODO: Validacian chi ancel
            console.log('=== TRADE STAGE ERROR ====');
            let data = {
              error: true,
              type: _constants__WEBPACK_IMPORTED_MODULE_5__["ClassicPushActions"].TRADE_STAGE_MOVE_EMIT_ERROR,
              msg: 'Trade Stage error'
            }; // ZeroMQService.sendMessageToPlayer(player, game.key, data)
          }
        } catch (e) {
          console.log('=== TRADE STAGE CATCH ERROR ====');
          let data = {
            error: true,
            type: _constants__WEBPACK_IMPORTED_MODULE_5__["ClassicPushActions"].TRADE_STAGE_MOVE_EMIT_ERROR,
            msg: 'Trade Stage error'
          }; //TODO: send message room or player?

          console.log('roomKey => ', data.key);
        }
      });
      socket.on('move', async data => {
        console.log('MOVE_STAGE_MOVE => ');
        data = {
          key: data.key,
          player: token,
          msg: {
            type: data.move.type,
            card: data.move.card
          }
        };

        try {
          let game = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].getGameByKey('1111');

          if (game.currentRound.tradeStage.isStageEnd()) {
            let moveStage = game.currentRound.moveStage;
            let player = game.players.find(p => p.id === data.player);
            let nextPlayer = game.players.find(p => p.id !== player.id);
            let move = new _game_belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_8__["MoveStageMove"](data.msg.type, {
              card: data.msg.card
            });
            let result = moveStage.doMove(player, move);

            if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_7__["MoveStageMoveMessages"].SUCCESS) {
              //FixMe: Petqa uxarkel hajord qayl anox xaxacoxin
              // if (result.moveOrderChanged) {
              //     game.time.startNewStep(nextPlayer)
              // }
              let data = {
                error: false,
                moveOrderChanged: result.moveOrderChanged
              }; //ToDo: Verji ruky uxakrem?

              if (!moveStage.currentHand) {
                data.currentHand = moveStage.lastHand.cards;
              }

              console.log('123 => ', moveStage.cards['123']);
              console.log('456 => ', moveStage.cards['456']);
              console.log('data => ', data);
              let moveStageResult = moveStage.getResult();

              if (moveStageResult) {
                //ToDo: End Current round
                console.log('End currant round');
                game.endCurrentRound();
              } else {
                //ToDo: Continue current round
                console.log('Continue current round');
              }
            } else if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_7__["MoveStageMoveMessages"].ERROR) {
              console.log('Result status === ERROR');
            }
          } else {
            console.log('******************');
          }
        } catch (e) {
          console.log('Move Stage Catch Error => ', e); // ZeroMQService.sendMessageToRoom(action.msg.roomKey, {
          //     error: true,
          //     moveOrderChanged: false
          // })
        }
      });
    });
  }

  static sendMSG(id, event, msg) {
    let socket = clients[id];
    socket.emit(event, msg);
  }

  static broadCast(event, message) {
    SocketIOService.gameNamespace.emit(event, message);
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
/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zeromq */ "zeromq");
/* harmony import */ var zeromq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zeromq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/info */ "./configs/info.js");
/* harmony import */ var _gameService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameService */ "./services/gameService.js");
/* harmony import */ var _game_belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/belot/classic/tradeStageMove */ "./game/belot/classic/tradeStageMove.js");
/* harmony import */ var _game_belot_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/belot/constants */ "./game/belot/constants.js");
/* harmony import */ var _game_belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../game/belot/classic/moveStageMove */ "./game/belot/classic/moveStageMove.js");









const pushSockets = {};
const gameRooms = {};
class ZeroMQService {
  static initService() {
    ZeroMQService.pullScoket = pm_intercom__WEBPACK_IMPORTED_MODULE_0___default.a.getPullSocket();
    ZeroMQService.pushSocket = pm_intercom__WEBPACK_IMPORTED_MODULE_0___default.a.getPushSocket();
    ZeroMQService.listening();
  }

  static listening() {
    ZeroMQService.pullScoket.on('message', async msg => {
      const actions = JSON.parse(msg);

      for (let action of actions) {
        switch (action.type) {
          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].CREATE_GAME_CONECTION:
            {
              const gameData = ZeroMQService.createConnectionWithTransport(action.gameData);
              gameData.spectators = [];
              gameData.connectedPlayers = {};
              gameRooms[gameData.roomKey] = gameData;
              console.log(`Created room ${gameData.roomKey} with ${Object.keys(gameData.connectedPlayers).length} connected players`);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].GAME_EVENT:
            {
              console.log(`${action.msg.data} message from ${action.msg.id} player in ${action.msg.roomKey} room`);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].CONNECT_SPECTATOR:
            {
              console.log(gameRooms[action.msg.roomKey]);
              gameRooms[action.msg.roomKey].spectators.push(action.msg.spectator);
              console.log(gameRooms[action.msg.roomKey]);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].GAME_CONNECTION_CREATED:
            {
              for (let roomKey of action.msg.roomKeys) {
                if (roomKey in gameRooms) {
                  gameRooms[roomKey].connectedPlayers[action.msg.id] = action.msg.id;
                  console.log(`Player ${action.msg.id} connected to ${roomKey} Room`);

                  if (Object.keys(gameRooms[roomKey].connectedPlayers).length === 2) {
                    console.log(`Room ${roomKey} can start the game`);
                    const room = gameRooms[roomKey];
                    let players = room.players;

                    try {
                      let deckBeforeTradeStageMove = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].initGame(room.roomKey, players);
                      let msgRoom = {
                        trumpCandidateCard: deckBeforeTradeStageMove.currentRound.trumpCandidateCard,
                        priority: deckBeforeTradeStageMove.currentRound.priority,
                        points: deckBeforeTradeStageMove.currentRound.points
                      };
                      let msg1 = {
                        cards: deckBeforeTradeStageMove.currentRound.cards[players[0].id]
                      };
                      let msg2 = {
                        cards: deckBeforeTradeStageMove.currentRound.cards[players[1].id]
                      };
                      console.log('start game ... ');
                      ZeroMQService.sendMessageToRoom(room.roomKey, {
                        error: false,
                        msgRoom
                      });
                      ZeroMQService.sendMessageToPlayer(room.roomKey, players[0].id, msg1); //example sending message to player

                      ZeroMQService.sendMessageToPlayer(room.roomKey, players[1].id, msg2); //example sending message to player

                      console.log('+++++++');
                    } catch (e) {
                      console.log('start game error => ', e);
                      ZeroMQService.sendMessageToRoom(room.roomKey, {
                        error: true,
                        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPushActions"].START_GAME_ERROR,
                        msg: 'Start Game error'
                      });
                    }
                  }
                }
              }

              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPullActions"].GAME_END_TRIGGER:
            {
              const message = {
                winnerId: action.gameRoomInfo.id,
                loserId: ZeroMQService.getOpponentId(action.gameRoomInfo.id, action.gameRoomInfo.key),
                roomKey: action.gameRoomInfo.key
              }; // console.log(message);
              // console.log(gameRooms[action.gameRoomInfo.key]);

              ZeroMQService.sendMessageToRoom(action.gameRoomInfo.key, message, _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].GAME_END_TRIGGER);
              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPullActions"].TRADE_STAGE_MOVE:
            {
              console.log('action => ', action);

              try {
                // await GameService.load();
                // let deckBeforeTradeStageMove = await GameService.initGame(room.roomKey, players);
                let game = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].getGameByKey(action.msg.roomKey);

                if (!game) {
                  console.log('Invalid Game Key');
                  let data = {
                    error: true,
                    type: _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPushActions"].TRADE_STAGE_MOVE_EMIT_ERROR,
                    msg: 'Trade Stage error'
                  }; //TODO: send message room or player?

                  console.log('roomKey => ', action.msg.roomKey);
                  ZeroMQService.sendMessageToRoom(action.msg.roomKey, data);
                } else {
                  let player = game.players.find(p => p.id === action.msg.id);
                  console.log('player => ', player);
                  let move = new _game_belot_classic_tradeStageMove__WEBPACK_IMPORTED_MODULE_5__["TradeStageMove"](action.msg.data.type, {
                    trumpSuit: action.msg.data.trumpSuit
                  });
                  console.log('move => ', move);
                  let result = game.currentRound.tradeStage.doMove(player, move);
                  console.log('result => ', result);

                  if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_6__["TradeStageMoveMessages"].SUCCESS) {
                    let nextPlayer = game.players.find(p => p.id !== player.id);
                    console.log('nextPlayer => ', nextPlayer);
                    game.currentRound.tradeStage.nextPlayer = nextPlayer;
                    game.time.startNewStep(nextPlayer);

                    if (game.currentRound.tradeStage.isStageEnd()) {
                      console.log('====== START MOVE STAGE ======');
                      let {
                        trumpSuit,
                        trumper
                      } = game.currentRound.tradeStage.getResult();
                      game.currentRound.startMoveStage();
                      let [first, second] = game.currentRound.getPlayers();
                      let {
                        cards
                      } = game.currentRound.moveStage;
                      let msgRoom = {
                        trumper,
                        trumpSuit,
                        priority: game.currentRound.priority
                      };
                      let msg1 = {
                        cards: cards[first.id]
                      };
                      let msg2 = {
                        cards: cards[second.id]
                      };
                      let gameTest = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].getGameByKey(action.msg.roomKey);
                      console.log('game test =>', gameTest);
                      ZeroMQService.sendMessageToRoom(game.key, msgRoom);
                      ZeroMQService.sendMessageToPlayer(game.key, first.id, msg1);
                      ZeroMQService.sendMessageToPlayer(game.key, second.id, msg2);
                    } else {
                      let msg = {
                        trumpChosen: result.trumpChosen,
                        nextPlayer,
                        timeout: game.settings.timeout
                      };
                      ZeroMQService.sendMessageToPlayer(game.key, nextPlayer.id, {
                        msg,
                        error: false
                      });
                    }
                  } else if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_6__["TradeStageMoveMessages"].ERROR) {
                    //TODO: Validacian chi ancel
                    console.log('=== TRADE STAGE ERROR ====');
                    let data = {
                      error: true,
                      type: _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPushActions"].TRADE_STAGE_MOVE_EMIT_ERROR,
                      msg: 'Trade Stage error'
                    }; // ZeroMQService.sendMessageToPlayer(player, game.key, data)

                    ZeroMQService.sendMessageToPlayer(game.key, player.id, data);
                  }
                }
              } catch (e) {
                console.log('=== TRADE STAGE CATCH ERROR ====');
                let data = {
                  error: true,
                  type: _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPushActions"].TRADE_STAGE_MOVE_EMIT_ERROR,
                  msg: 'Trade Stage error'
                }; //TODO: send message room or player?

                console.log('roomKey => ', action.msg.roomKey);
                ZeroMQService.sendMessageToRoom(action.msg.roomKey, data);
              }

              break;
            }

          case _constants__WEBPACK_IMPORTED_MODULE_1__["ClassicPullActions"].MOVE_STAGE_MOVE:
            {
              console.log('MOVE_STAGE_MOVE => ', action);

              try {
                let game = await _gameService__WEBPACK_IMPORTED_MODULE_4__["default"].getGameByKey(action.msg.roomKey);
                console.log('game => ', game);

                if (game.currentRound.tradeStage.isStageEnd()) {
                  let moveStage = game.currentRound.moveStage;
                  let moveStageResult = moveStage.getResult();
                  let player = game.players.find(p => p.id === action.msg.id);
                  let nextPlayer = game.players.find(p => p.id !== player.id);

                  if (moveStageResult) {
                    //ToDo: End Current round
                    game.currentRound.endCurrentRound();
                  } else {
                    let move = new _game_belot_classic_moveStageMove__WEBPACK_IMPORTED_MODULE_7__["MoveStageMove"](action.msg.data.type, {
                      card: action.msg.data.card
                    });
                    let result = moveStage.doMove(player, move);

                    if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_6__["MoveStageMoveMessages"].SUCCESS) {
                      //FixMe: Petqa uxarkel hajord qayl anox xaxacoxin
                      if (result.moveOrderChanged) {
                        game.time.startNewStep(nextPlayer);
                      }

                      let data = {
                        error: false,
                        moveOrderChanged: result.moveOrderChanged
                      }; //ToDo: Verji ruky uxakrem?

                      if (moveStage.currentHand.cards.length >= 2) {
                        data.currentHand = moveStage.currentHand.cards;
                      }

                      ZeroMQService.sendMessageToRoom(game.key, data);
                    } else if (result.status === _game_belot_constants__WEBPACK_IMPORTED_MODULE_6__["MoveStageMoveMessages"].ERROR) {
                      ZeroMQService.sendMessageToRoom(game.key, {
                        error: true,
                        moveOrderChanged: false
                      });
                    }
                  }
                } else {
                  ZeroMQService.sendMessageToRoom(action.msg.roomKey, {
                    error: true,
                    moveOrderChanged: false
                  });
                }
              } catch (e) {
                console.log('Move Stage Error => ', e);
                ZeroMQService.sendMessageToRoom(action.msg.roomKey, {
                  error: true,
                  moveOrderChanged: false
                });
              }

              break;
            }

          case 300:
            {
              const id = action.msg.id;
              const roomKey = action.msg.roomKey;
              const data = action.msg.data; // ZeroMQService.sendMessageToPlayer(roomKey, id, data); //example sending message to player
              // const opId = ZeroMQService.getOpponentId(id, roomKey);
              // ZeroMQService.sendMessageToPlayer(roomKey, opId, data); //example sending message to oponent

              ZeroMQService.sendMessageToRoom(roomKey, data); // example sending message to room players

              break;
            }

          default:
            break;
        }
      }
    });
  }

  static createConnectionWithTransport(gameData) {
    gameData.players[0] = ZeroMQService.connectGameTCP(gameData.players[0]);
    gameData.players[1] = ZeroMQService.connectGameTCP(gameData.players[1]);
    const nodeInfo = {
      nodeId: _configs_info__WEBPACK_IMPORTED_MODULE_3__["info"].nodeId,
      serverId: _configs_info__WEBPACK_IMPORTED_MODULE_3__["info"].serverId,
      address: _configs_info__WEBPACK_IMPORTED_MODULE_3__["info"].runningAddress
    };

    if (gameData.players[0].socketId === gameData.players[1].socketId) {
      ZeroMQService.sendConnectionMessage(gameData.players[0].socketId, {
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].CREATE_CONNECTION,
        gameData,
        nodeInfo
      });
    } else {
      ZeroMQService.sendConnectionMessage(gameData.players[0].socketId, {
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].CREATE_CONNECTION,
        roomKey: gameData.roomKey,
        player: gameData.players[0],
        nodeInfo
      });
      ZeroMQService.sendConnectionMessage(gameData.players[1].socketId, {
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].CREATE_CONNECTION,
        roomKey: gameData.roomKey,
        player: gameData.players[1],
        nodeInfo
      });
    }

    ;
    return gameData;
  }

  static connectGameTCP(player) {
    const socketId = `pshID-${player.node.serverId + player.node.nodeId}${player.node.nodeId + player.node.serverId}`;
    const tcpAddress = `tcp://${player.node.runningAddress.host}:${player.node.runningAddress.port}`;
    player.socketId = socketId;

    if (!Object.keys(pushSockets).length || !ZeroMQService.getSocketById(socketId)) {
      const pushSocket = zeromq__WEBPACK_IMPORTED_MODULE_2___default.a.socket('push', {});
      pushSocket.connect(tcpAddress);
      pushSockets[socketId] = pushSocket;
      console.log(`Created ${socketId} Game tcp connection to ${tcpAddress} address for ${player.id} gamer`);
    } else {
      console.log(`${player.id} gamer get ${socketId} Game tcp connection to ${tcpAddress} address`);
    }

    delete player.node;
    player.socketId = socketId;
    return player;
  }

  static get pushConnections() {
    return pushSockets;
  }

  static getSocketById(socketId) {
    for (let id in pushSockets) {
      if (socketId === id) {
        return pushSockets[socketId];
      }
    }

    ;
    return false;
  }

  static sendConnectionMessage(socketId, ...messages) {
    pushSockets[socketId].send(JSON.stringify(messages));
  }

  static getOpponentId(ownerId, roomKey) {
    const players = gameRooms[roomKey].players;

    for (let player of players) {
      if (ownerId !== player.id) {
        return player.id;
      }
    }
  }

  static sendMessageToPlayer(roomKey, id, data) {
    let player = gameRooms[roomKey].players.find(player => {
      return player.id === id;
    });
    const socketId = player.socketId;
    ZeroMQService.getSocketById(socketId).send(JSON.stringify([{
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].GAME_MESSAGE,
      roomKey,
      player,
      data
    }]));
  }

  static sendMessageToRoom(roomKey, data, customType) {
    const players = gameRooms[roomKey].players;
    const spectators = gameRooms[roomKey].spectators;

    if (!customType) {
      players.forEach(player => {
        const socketId = player.socketId;
        ZeroMQService.getSocketById(socketId).send(JSON.stringify([{
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].GAME_MESSAGE,
          roomKey,
          player,
          data
        }]));
      });
      spectators.forEach(spectator => {
        const socketId = spectator.socketId;
        ZeroMQService.getSocketById(socketId).send(JSON.stringify([{
          type: _constants__WEBPACK_IMPORTED_MODULE_1__["ZMQPushActions"].SPECTATE_MESSAGE,
          roomKey,
          spectator,
          data
        }]));
      });
    } else {
      players.forEach(player => {
        const socketId = player.socketId;
        ZeroMQService.getSocketById(socketId).send(JSON.stringify([{
          type: customType,
          data
        }]));
      });
      spectators.forEach(spectator => {
        const socketId = spectator.socketId;
        ZeroMQService.getSocketById(socketId).send(JSON.stringify([{
          type: customType,
          data
        }]));
      });
    }
  }

}

/***/ }),

/***/ "./stacks/sessionStack.js":
/*!********************************!*\
  !*** ./stacks/sessionStack.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sessionStack; });
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _models_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/session */ "./models/session.js");


const sessions = [];
class sessionStack {
  static async load() {
    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getKeys("SESSION-*");

    _.each(data, async key => {
      let info = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getter(key, true);
      sessions.push(new _models_session__WEBPACK_IMPORTED_MODULE_1__["default"](info.key, info.players));
    });

    if (data) {
      console.log(`nodeService.initService loaded ${data.length} sessions from storage`);
    }
  }

  static addSession(key, game) {
    return new _models_session__WEBPACK_IMPORTED_MODULE_1__["default"](key, game);
  }

  static async getSessionByKey(sessionKey) {
    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getKeys("SESSION-*");
    const sessions = await Promise.all(data.map(key => {
      return _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getter(key, true);
    }));
    return sessions.find(item => {
      return item.key === sessionKey;
    });
  }

}

/***/ }),

/***/ "./stacks/stateStack.js":
/*!******************************!*\
  !*** ./stacks/stateStack.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateStack; });
/* harmony import */ var _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/redis/redisModule */ "./modules/redis/redisModule.js");
/* harmony import */ var _models_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/state */ "./models/state.js");


class stateStack {
  static addState(key, players) {
    return new _models_state__WEBPACK_IMPORTED_MODULE_1__["State"](key, players);
  }

  static async getStateByKey(stateKey) {
    const data = await _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getKeys("STATE-*");
    const states = await Promise.all(data.map(key => {
      return _modules_redis_redisModule__WEBPACK_IMPORTED_MODULE_0__["default"].getter(key, true);
    }));
    return states.find(item => {
      return item.key === stateKey;
    });
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

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "pm-intercom":
/*!******************************!*\
  !*** external "pm-intercom" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pm-intercom");

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