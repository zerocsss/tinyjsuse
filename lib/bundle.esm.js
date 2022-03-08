Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneDeep = exports.clone = exports.throttle = exports.debounce = exports.copy = exports.version = void 0;
/**
 * 当前函数库版本
 */
exports.version = "1.0.0";
var copy_1 = require("./copy");
Object.defineProperty(exports, "copy", { enumerable: true, get: function () { return __importDefault(copy_1).default; } });
var debounce_1 = require("./debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return __importDefault(debounce_1).default; } });
var throttle_1 = require("./throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return __importDefault(throttle_1).default; } });
var clone_1 = require("./clone");
Object.defineProperty(exports, "clone", { enumerable: true, get: function () { return __importDefault(clone_1).default; } });
var cloneDeep_1 = require("./cloneDeep");
Object.defineProperty(exports, "cloneDeep", { enumerable: true, get: function () { return __importDefault(cloneDeep_1).default; } });
