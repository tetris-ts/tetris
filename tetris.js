var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
define("util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sleep = void 0;
    function sleep(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }
    exports.sleep = sleep;
});
define("component/canvas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Canvas = void 0;
    /**
     * Create a new canvas for displaying stuff.
     * @param parent       The HTMLElement the canvas should reside in.
     * @param id           A DOM id.
     * @param width        Width of the canvas.
     * @param height       Height of the canvas.
     * @param column_count The amount of colums.
     * @param row_count    The amount of rows.
     */
    var Canvas = /** @class */ (function () {
        function Canvas(parent, id, width, height, column_count, row_count) {
            this.grid_color = "gray";
            this.element = document.createElement("canvas");
            this.element.id = id;
            this.element.width = width;
            this.element.height = height;
            this.column_count = column_count;
            this.row_count = row_count;
            parent.appendChild(this.element);
        }
        Object.defineProperty(Canvas.prototype, "block_width", {
            get: function () {
                return this.element.width / this.column_count;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "block_height", {
            get: function () {
                return this.element.height / this.row_count;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Draw something on the canvas.
         * @param  callback The function to run with drawing commands
         */
        Canvas.prototype.draw = function (callback) {
            var ctx = this.element.getContext("2d");
            if (ctx)
                callback(ctx);
        };
        /**
         * Draws a grid overlay on the canvas.
         */
        Canvas.prototype.drawGrid = function () {
            var _this = this;
            this.draw(function (ctx) {
                for (var x = _this.block_width; x < _this.element.width; x += _this.block_width) {
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, _this.element.height);
                }
                for (var x = _this.block_height; x < _this.element.height; x += _this.block_height) {
                    ctx.moveTo(0, x);
                    ctx.lineTo(_this.element.width, x);
                }
                ctx.strokeStyle = _this.grid_color;
                ctx.stroke();
            });
        };
        /**
         * Clears the canvas.
         */
        Canvas.prototype.clear = function () {
            var _this = this;
            this.draw(function (ctx) { return ctx.clearRect(0, 0, _this.element.width, _this.element.height); });
        };
        return Canvas;
    }());
    exports.Canvas = Canvas;
});
define("types", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BorderColor = exports.Color = exports.COLUMN_COUNT = exports.ROW_COUNT = void 0;
    exports.ROW_COUNT = 20;
    exports.COLUMN_COUNT = 10;
    var Color;
    (function (Color) {
        Color["NONE"] = "transparent";
        Color["YELLOW"] = "rgb(255, 230, 49)";
        Color["LIGHT_BLUE"] = "rgb(159, 209, 241)";
        Color["PINK"] = "rgb(203, 167, 206)";
        Color["ORANGE"] = "rgb(242, 164, 44)";
        Color["BLUE"] = "rgb(30, 123, 192)";
        Color["GREEN"] = "rgb(0, 172, 78)";
        Color["RED"] = "rgb(217, 59, 45)";
    })(Color = exports.Color || (exports.Color = {}));
    var BorderColor;
    (function (BorderColor) {
        BorderColor["NONE"] = "transparent";
        BorderColor["YELLOW"] = "rgb(242, 164, 44)";
        BorderColor["LIGHT_BLUE"] = "rgb(50, 124, 179)";
        BorderColor["PINK"] = "rgb(163, 87, 124)";
        BorderColor["ORANGE"] = "rgb(239, 129, 50)";
        BorderColor["BLUE"] = "rgb(53, 54, 149)";
        BorderColor["GREEN"] = "rgb(0, 134, 69)";
        BorderColor["RED"] = "rgb(155, 50, 39)";
    })(BorderColor = exports.BorderColor || (exports.BorderColor = {}));
});
define("component/tetromino", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tetromino = void 0;
    var Tetromino = /** @class */ (function () {
        function Tetromino() {
            this.position_initial = {
                x: 3,
                y: -1
            };
            this.is_dropped = false;
            this.position = __assign({}, this.position_initial);
        }
        Object.defineProperty(Tetromino.prototype, "width", {
            get: function () {
                return Math.sqrt(this.shape.length);
            },
            enumerable: false,
            configurable: true
        });
        Tetromino.prototype.draw = function (canvas) {
            var _this = this;
            // if (!this.is_dropped) console.log(`drawing ${this.constructor.name} piece at (${this.position.x},${this.position.y})`)
            canvas.draw(function (ctx) {
                if (_this.is_dropped)
                    ctx.globalAlpha = 0.75;
                ctx.strokeStyle = _this.color_border;
                ctx.fillStyle = _this.color;
                _this.getFilledBlocks().forEach(function (pos) {
                    ctx.fillRect(pos.x * canvas.block_width, pos.y * canvas.block_height, canvas.block_width, canvas.block_height);
                    ctx.strokeRect(pos.x * canvas.block_width, pos.y * canvas.block_height, canvas.block_width, canvas.block_height);
                });
                ctx.globalAlpha = 1;
            });
        };
        Tetromino.prototype.getFilledBlocks = function (filled) {
            var _this = this;
            if (filled === void 0) { filled = true; }
            var out = [];
            this.shape.forEach(function (value, i) {
                if (value == (filled ? 0 : 1))
                    return;
                out.push({
                    x: _this.position.x + (i % _this.width),
                    y: _this.position.y + Math.floor(i / _this.width)
                });
            });
            return out;
        };
        Tetromino.prototype.removeFilledBlock = function (x, y) {
            var _this = this;
            this.shape.forEach(function (_value, i) {
                var pos = {
                    x: _this.position.x + (i % _this.width),
                    y: _this.position.y + Math.floor(i / _this.width)
                };
                if (pos.x == x && pos.y == y) {
                    _this.shape[i] = 0;
                }
            });
        };
        Tetromino.prototype.getSingleBlockPiece = function (pos) {
            return new Dot(this.color, this.color_border, pos);
        };
        Tetromino.prototype.splitToSingleBlockPieces = function () {
            var e_1, _a;
            var out = [];
            try {
                for (var _b = __values(this.getFilledBlocks()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var block_pos = _c.value;
                    out.push(this.getSingleBlockPiece(block_pos));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log(out);
            return out;
        };
        Tetromino.prototype.resetPosition = function () {
            this.position = __assign({}, this.position_initial);
            return this;
        };
        //////////////
        // move
        //////////////
        Tetromino.prototype.moveDown = function () {
            this.position.y++;
        };
        Tetromino.prototype.moveUp = function () {
            this.position.y--;
        };
        Tetromino.prototype.moveRight = function () {
            this.position.x++;
        };
        Tetromino.prototype.moveLeft = function () {
            this.position.x--;
        };
        //////////////
        // rotate
        //////////////
        Tetromino.prototype.rotateClockwise = function () {
            var temp = [];
            for (var i = 0; i < this.width; i++) {
                for (var j = 0; j < this.width; j++) {
                    temp[i * this.width + j] = this.shape[(this.width - j - 1) * this.width + i];
                }
            }
            this.shape = temp;
        };
        Tetromino.prototype.rotateCounterClockwise = function () {
            this.rotateClockwise();
            this.rotateClockwise();
            this.rotateClockwise();
        };
        Tetromino.prototype.checkForCollision = function (pieces) {
            var _this = this;
            var funcs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                funcs[_i - 1] = arguments[_i];
            }
            if (funcs.length == 3)
                funcs[0](this);
            var own_filled_blocks = this.getFilledBlocks();
            if (funcs.length == 3)
                funcs[1](this);
            // collision with wall/ground
            if (funcs.length && own_filled_blocks.some(funcs[2])) {
                return true;
            }
            // collision with other piece
            if (pieces.filter(function (e) { return e != _this; })
                .map(function (e) { return e.getFilledBlocks(); })
                .flat()
                .findIndex(function (e) { return own_filled_blocks.some(function (f) { return f.x == e.x && f.y == e.y; }); }) != -1)
                return true;
            return false;
        };
        Tetromino.prototype.checkForDownCollision = function (pieces) {
            return this.checkForCollision(pieces, function (e) { return e.moveDown(); }, function (e) { return e.moveUp(); }, function (e) { return e.y >= 20; });
        };
        Tetromino.prototype.checkForLeftCollision = function (pieces) {
            return this.checkForCollision(pieces, function (e) { return e.moveLeft(); }, function (e) { return e.moveRight(); }, function (e) { return e.x < 0; });
        };
        Tetromino.prototype.checkForRightCollision = function (pieces) {
            return this.checkForCollision(pieces, function (e) { return e.moveRight(); }, function (e) { return e.moveLeft(); }, function (e) { return e.x >= 10; });
        };
        Tetromino.prototype.checkForRotateClockwiseCollision = function (pieces) {
            return this.checkForCollision(pieces, function (e) { return e.rotateClockwise(); }, function (e) { return e.rotateCounterClockwise(); }, function (e) { return e.y >= 20 || e.x < 0 || e.x >= 10; });
        };
        Tetromino.prototype.checkForRotateCounterClockwiseCollision = function (pieces) {
            return this.checkForCollision(pieces, function (e) { return e.rotateCounterClockwise(); }, function (e) { return e.rotateClockwise(); }, function (e) { return e.y >= 20 || e.x < 0 || e.x >= 10; });
        };
        return Tetromino;
    }());
    exports.Tetromino = Tetromino;
    var Dot = /** @class */ (function (_super) {
        __extends(Dot, _super);
        function Dot(color, color_border, position) {
            var _this = _super.call(this) || this;
            _this.shape = [
                1
            ];
            _this.is_dropped = true;
            _this.color = color;
            _this.color_border = color_border;
            _this.position = position;
            return _this;
        }
        return Dot;
    }(Tetromino));
});
define("component/tetromino-shapes/o", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_1, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.O = void 0;
    var O = /** @class */ (function (_super) {
        __extends(O, _super);
        function O() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_1.Color.YELLOW;
            _this.color_border = types_1.BorderColor.YELLOW;
            _this.position_initial = {
                x: 4,
                y: -1
            };
            _this.shape = [
                1, 1,
                1, 1,
            ];
            return _this;
        }
        // do nothing on rotations
        O.prototype.rotateClockwise = function () { };
        O.prototype.rotateCounterClockwise = function () { };
        return O;
    }(tetromino_1.Tetromino));
    exports.O = O;
});
define("component/tetromino-shapes/i", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_2, types_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.I = void 0;
    var I = /** @class */ (function (_super) {
        __extends(I, _super);
        function I() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_2.Color.LIGHT_BLUE;
            _this.color_border = types_2.BorderColor.LIGHT_BLUE;
            _this.shape = [
                0, 0, 0, 0,
                1, 1, 1, 1,
                0, 0, 0, 0,
                0, 0, 0, 0,
            ];
            return _this;
        }
        return I;
    }(tetromino_2.Tetromino));
    exports.I = I;
});
define("component/tetromino-shapes/t", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_3, types_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.T = void 0;
    var T = /** @class */ (function (_super) {
        __extends(T, _super);
        function T() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_3.Color.PINK;
            _this.color_border = types_3.BorderColor.PINK;
            _this.shape = [
                0, 1, 0,
                1, 1, 1,
                0, 0, 0,
            ];
            return _this;
        }
        return T;
    }(tetromino_3.Tetromino));
    exports.T = T;
});
define("component/tetromino-shapes/l", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_4, types_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.L = void 0;
    var L = /** @class */ (function (_super) {
        __extends(L, _super);
        function L() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_4.Color.ORANGE;
            _this.color_border = types_4.BorderColor.ORANGE;
            _this.shape = [
                0, 0, 1,
                1, 1, 1,
                0, 0, 0,
            ];
            return _this;
        }
        return L;
    }(tetromino_4.Tetromino));
    exports.L = L;
});
define("component/tetromino-shapes/j", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_5, types_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.J = void 0;
    var J = /** @class */ (function (_super) {
        __extends(J, _super);
        function J() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_5.Color.BLUE;
            _this.color_border = types_5.BorderColor.BLUE;
            _this.shape = [
                1, 0, 0,
                1, 1, 1,
                0, 0, 0,
            ];
            return _this;
        }
        return J;
    }(tetromino_5.Tetromino));
    exports.J = J;
});
define("component/tetromino-shapes/s", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_6, types_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.S = void 0;
    var S = /** @class */ (function (_super) {
        __extends(S, _super);
        function S() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_6.Color.GREEN;
            _this.color_border = types_6.BorderColor.GREEN;
            _this.shape = [
                0, 1, 1,
                1, 1, 0,
                0, 0, 0,
            ];
            return _this;
        }
        return S;
    }(tetromino_6.Tetromino));
    exports.S = S;
});
define("component/tetromino-shapes/z", ["require", "exports", "component/tetromino", "types"], function (require, exports, tetromino_7, types_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Z = void 0;
    var Z = /** @class */ (function (_super) {
        __extends(Z, _super);
        function Z() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.color = types_7.Color.RED;
            _this.color_border = types_7.BorderColor.RED;
            _this.shape = [
                1, 1, 0,
                0, 1, 1,
                0, 0, 0,
            ];
            return _this;
        }
        return Z;
    }(tetromino_7.Tetromino));
    exports.Z = Z;
});
define("component/tetromino-shapes/index", ["require", "exports", "component/tetromino-shapes/o", "component/tetromino-shapes/i", "component/tetromino-shapes/t", "component/tetromino-shapes/l", "component/tetromino-shapes/j", "component/tetromino-shapes/s", "component/tetromino-shapes/z"], function (require, exports, o_1, i_1, t_1, l_1, j_1, s_1, z_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(o_1, exports);
    __exportStar(i_1, exports);
    __exportStar(t_1, exports);
    __exportStar(l_1, exports);
    __exportStar(j_1, exports);
    __exportStar(s_1, exports);
    __exportStar(z_1, exports);
});
define("component/index", ["require", "exports", "component/tetromino", "component/tetromino-shapes/index"], function (require, exports, tetromino_8, tetromino_shapes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(tetromino_8, exports);
    __exportStar(tetromino_shapes_1, exports);
});
define("game", ["require", "exports", "util", "component/canvas", "component/index"], function (require, exports, util, canvas_1, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    util = __importStar(util);
    var Game = /** @class */ (function () {
        function Game() {
            var _this = this;
            var _a;
            this.pieces = [];
            this.pieces_next = [];
            this.is_game_over = false;
            this.points = 0;
            this.level = 1;
            var game_elem = (_a = document.getElementById("game")) !== null && _a !== void 0 ? _a : document.body;
            this.canvas_status = new canvas_1.Canvas(game_elem, "status", 200, 500, 10, 25);
            this.canvas_main = new canvas_1.Canvas(game_elem, "main", 400, 800, 10, 20);
            this.canvas_next_up = new canvas_1.Canvas(game_elem, "next", 200, 500, 10, 25);
            // add 5 pieces to pieces_next
            Array(5).fill(0).forEach(function () { return _this.pieces_next.push(Game.getRandomTetromino()); });
        }
        Object.defineProperty(Game.prototype, "current_piece", {
            get: function () {
                if (this.pieces.length == 0)
                    return null;
                return this.pieces[this.pieces.length - 1];
            },
            enumerable: false,
            configurable: true
        });
        Game.prototype.start = function () {
            return __awaiter(this, void 0, void 0, function () {
                var tmp;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.nextPieceCanBePlaced()) return [3 /*break*/, 6];
                            this.pieces_next.push(Game.getRandomTetromino());
                            tmp = this.pieces_next.shift();
                            if (!tmp)
                                return [3 /*break*/, 6];
                            this.pieces.push(tmp.resetPosition());
                            _a.label = 1;
                        case 1:
                            if (!true) return [3 /*break*/, 5];
                            if (!this.current_piece)
                                return [3 /*break*/, 5];
                            if (!this.current_piece.checkForDownCollision(this.pieces)) return [3 /*break*/, 3];
                            return [4 /*yield*/, util.sleep(500)];
                        case 2:
                            _a.sent();
                            this.current_piece.is_dropped = true;
                            this.handleFilledRows();
                            this.cleanUp();
                            return [3 /*break*/, 5];
                        case 3:
                            this.drawBackground();
                            this.current_piece.moveDown();
                            this.current_piece.draw(this.canvas_main);
                            return [4 /*yield*/, util.sleep(500)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 0];
                        case 6:
                            // game over
                            console.log("game over");
                            this.is_game_over = true;
                            this.drawGameOver();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Game.prototype.nextPieceCanBePlaced = function () {
            return !this.pieces_next[0].resetPosition().checkForCollision(this.pieces);
        };
        Game.getRandomTetromino = function () {
            var random = Math.floor(crypto.getRandomValues(new Uint8Array(1))[0] / 255 * (Game.Tetrominos.length - 1));
            return new Game.Tetrominos[random];
        };
        Game.prototype.checkForFilledRow = function () {
            var _this = this;
            var filled_blocks = this.pieces.map(function (e) { return e.getFilledBlocks(); }).flat();
            var out = [];
            var _loop_1 = function (row) {
                if (filled_blocks.filter(function (e) { return e.y == row && e.x >= 0 && e.x < _this.canvas_main.column_count; }).map(function (e) { return e.x; }).dedupe().length == 10) {
                    out.push(row);
                }
            };
            for (var row = 0; row < this.canvas_main.row_count; row++) {
                _loop_1(row);
            }
            return out;
        };
        Game.prototype.handleFilledRows = function () {
            var e_2, _a;
            var filled_rows = this.checkForFilledRow();
            var x_vals = Array(this.canvas_main.row_count).fill(0).map(function (_e, i) { return i; });
            var _loop_2 = function (row) {
                var e_3, _b;
                var _loop_3 = function (piece) {
                    x_vals.forEach(function (e) { return piece.removeFilledBlock(e, row); });
                    this_1.pieces = this_1.pieces.concat(piece.splitToSingleBlockPieces());
                    piece.shape = [];
                };
                try {
                    for (var _c = (e_3 = void 0, __values(this_1.pieces.filter(function (e) { return e.getFilledBlocks().some(function (f) { return f.y == row; }); }))), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var piece = _d.value;
                        _loop_3(piece);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                this_1.moveDroppedPiecesDown(row);
            };
            var this_1 = this;
            try {
                for (var filled_rows_1 = __values(filled_rows), filled_rows_1_1 = filled_rows_1.next(); !filled_rows_1_1.done; filled_rows_1_1 = filled_rows_1.next()) {
                    var row = filled_rows_1_1.value;
                    _loop_2(row);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (filled_rows_1_1 && !filled_rows_1_1.done && (_a = filled_rows_1.return)) _a.call(filled_rows_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            // points
            if (filled_rows.length == 1)
                this.points += this.level * 100;
            if (filled_rows.length == 2)
                this.points += this.level * 300;
            if (filled_rows.length == 3)
                this.points += this.level * 500;
            if (filled_rows.length == 4)
                this.points += this.level * 800;
        };
        Game.prototype.moveDroppedPiecesDown = function (to_row) {
            var e_4, _a;
            try {
                for (var _b = __values(this.pieces.filter(function (e) { return e.is_dropped && e.getFilledBlocks().some(function (f) { return f.y <= to_row; }); })), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var piece = _c.value;
                    piece.moveDown();
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        Game.prototype.cleanUp = function () {
            this.pieces = this.pieces.filter(function (e) { return e.shape.length > 0; });
        };
        Game.prototype.drawBackground = function () {
            this.canvas_main.clear();
            this.canvas_main.drawGrid();
            this.drawDroppedPieces();
            this.canvas_next_up.clear();
            this.drawNextUpCanvas();
            this.canvas_status.clear();
            this.drawStatusCanvas();
        };
        Game.prototype.drawDroppedPieces = function () {
            var _this = this;
            this.pieces.filter(function (e) { return e.is_dropped; }).forEach(function (e) { return e.draw(_this.canvas_main); });
        };
        Game.prototype.drawNextUpCanvas = function () {
            var _this = this;
            this.canvas_next_up.draw(function (ctx) {
                ctx.font = "30px Dejavu Sans";
                ctx.textAlign = "center";
                ctx.fillStyle = "gray";
                ctx.fillText("Next up", _this.canvas_next_up.element.width / 2, 35);
            });
            this.pieces_next.forEach(function (e, i) {
                e.position.x = 3 + (4 - e.width) / 2;
                e.position.y = i * 4 + 4;
                e.draw(_this.canvas_next_up);
            });
        };
        Game.prototype.drawStatusCanvas = function () {
            var _this = this;
            this.canvas_status.draw(function (ctx) {
                // level
                ctx.font = "30px Dejavu Sans";
                ctx.textAlign = "center";
                ctx.fillStyle = "gray";
                ctx.fillText("Level", _this.canvas_status.element.width / 2, 35);
                ctx.font = "20px Dejavu Sans";
                ctx.fillText(_this.level.toString(), _this.canvas_status.element.width / 2, 60);
                // points
                ctx.font = "30px Dejavu Sans";
                ctx.textAlign = "center";
                ctx.fillStyle = "gray";
                ctx.fillText("Points", _this.canvas_status.element.width / 2, 95);
                ctx.font = "20px Dejavu Sans";
                ctx.fillText(_this.points.toString(), _this.canvas_status.element.width / 2, 120);
            });
        };
        Game.prototype.drawGameOver = function () {
            var _this = this;
            this.canvas_main.draw(function (ctx) {
                // overlay
                ctx.globalAlpha = 0.6;
                ctx.fillStyle = "white";
                ctx.fillRect(0, 0, _this.canvas_main.element.width, _this.canvas_main.element.height);
                // reset alpha
                ctx.globalAlpha = 1;
                // game over / restart text
                ctx.font = "30px Dejavu Sans";
                ctx.textAlign = "center";
                ctx.fillStyle = "gray";
                ctx.fillText("Game Over!", _this.canvas_main.element.width / 2, _this.canvas_main.element.height / 3);
                ctx.fillText("Reload to restart!", _this.canvas_main.element.width / 2, _this.canvas_main.element.height - _this.canvas_main.element.height / 3);
            });
        };
        ///////////////////
        // action handlers
        ///////////////////
        Game.prototype.handleAction = function (callback) {
            if (this.is_game_over || !this.current_piece || this.current_piece.is_dropped)
                return;
            this.drawBackground();
            this.handleFilledRows();
            this.cleanUp();
            callback.call(this, this.current_piece);
            this.current_piece.draw(this.canvas_main);
        };
        Game.prototype.handleMoveLeft = function () {
            var _this = this;
            this.handleAction(function (piece) {
                // check for collision
                if (!piece.checkForLeftCollision(_this.pieces)) {
                    piece.moveLeft();
                }
            });
        };
        Game.prototype.handleMoveRight = function () {
            var _this = this;
            this.handleAction(function (piece) {
                // check for collision
                if (!piece.checkForRightCollision(_this.pieces)) {
                    piece.moveRight();
                }
            });
        };
        Game.prototype.handleMoveDown = function () {
            var _this = this;
            this.handleAction(function (piece) {
                // check for collision
                if (piece.checkForDownCollision(_this.pieces)) {
                    piece.is_dropped = true;
                }
                else {
                    piece.moveDown();
                }
            });
        };
        Game.prototype.handleRotateClockwise = function () {
            var _this = this;
            this.handleAction(function (piece) {
                // check for collision
                if (!piece.checkForRotateClockwiseCollision(_this.pieces)) {
                    piece.rotateClockwise();
                }
            });
        };
        Game.prototype.handleRotateCounterClockwise = function () {
            var _this = this;
            this.handleAction(function (piece) {
                // check for collision
                if (!piece.checkForRotateCounterClockwiseCollision(_this.pieces)) {
                    piece.rotateCounterClockwise();
                }
            });
        };
        Game.prototype.handleHardDrop = function () {
            var _this = this;
            this.handleAction(function (piece) {
                while (!piece.checkForDownCollision(_this.pieces)) {
                    piece.moveDown();
                    _this.drawBackground();
                    piece.draw(_this.canvas_main);
                }
                piece.is_dropped = true;
            });
        };
        Game.Tetrominos = [component_1.O, component_1.I, component_1.T, component_1.L, component_1.J, component_1.S, component_1.Z];
        return Game;
    }());
    exports.Game = Game;
});
define("extension/array.extension", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Array.prototype.dedupe = function () {
        return __spreadArray([], __read(new Set(this.filter(function (e) { return typeof e != "undefined"; }).map(function (e) { return JSON.stringify(e); }))), false).map(function (e) { return JSON.parse(e); });
    };
});
define("index", ["require", "exports", "game", "extension/array.extension"], function (require, exports, game_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var game;
        return __generator(this, function (_a) {
            game = new game_1.Game();
            document.addEventListener("touchstart", function () { return startGame(game); }, { once: true });
            document.addEventListener("keydown", function (event) {
                if ([32].includes(event.keyCode))
                    startGame(game);
            }, { once: true });
            game.canvas_main.draw(function (ctx) {
                ctx.font = "30px Dejavu Sans";
                ctx.textAlign = "center";
                ctx.fillStyle = "gray";
                ctx.fillText("Press space/tap to start!", game.canvas_main.element.width / 2, game.canvas_main.element.height / 2);
            });
            return [2 /*return*/];
        });
    }); })();
    function startGame(game) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log("game started!");
                game.start();
                document.addEventListener("keydown", function (event) {
                    if (["ArrowLeft", "a", "A"].includes(event.key))
                        game.handleMoveLeft();
                    if (["ArrowRight", "d", "D"].includes(event.key))
                        game.handleMoveRight();
                    if (["ArrowDown", "s", "S"].includes(event.key))
                        game.handleMoveDown();
                    if (["ArrowUp", "w", "W", "x", "X"].includes(event.key))
                        game.handleRotateClockwise();
                    if (["Control", "z", "Z"].includes(event.key))
                        game.handleRotateCounterClockwise();
                    if ([32].includes(event.keyCode))
                        game.handleHardDrop();
                });
                return [2 /*return*/];
            });
        });
    }
});
