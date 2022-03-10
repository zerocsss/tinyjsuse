'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function copy(target) {
    var cop_txt = null;
    var element = document.getElementById("".concat(target));
    if (element) {
        cop_txt = element.innerText || element.value;
    }
    else {
        cop_txt = target;
    }
    var input = document.createElement("textarea");
    if (typeof cop_txt === "string") {
        input.value = cop_txt; // 修改文本框的内容
    }
    document.body.appendChild(input);
    input.select(); // 选中文本
    document.execCommand("copy"); // 执行浏览器复制命令
    document.body.removeChild(input);
}

function saveCookie(name, value, exdays) {
    var cookie = "".concat(name, "=").concat(value, ";");
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=".concat(d.toUTCString());
    document.cookie = "".concat(cookie + expires, "; path=/");
}
function getCookie(name) {
    var reg = new RegExp("\\s*".concat(name, "=([^;]*)"));
    var match = document.cookie.match(reg);
    return match && match.length ? match[1] : undefined;
}
var cookie = {
    saveCookie: saveCookie,
    getCookie: getCookie
};

/**
 * 防抖函数
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 * @param immediate 为true代表立即执行
 *
 * @category 函数
 */
var debounce = function (fn, wait, immediate) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        // 立即执行
        if (immediate) {
            // 第一次timer为null，则可以执行，一定时间内timer始终不为null
            var dos = !timer;
            timer = setTimeout(function () {
                timer = null;
            }, wait);
            if (dos) {
                fn.apply(context, args);
            }
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, wait);
        }
    };
};

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。对于想控制一些触发频率较高的事件有帮助。
 * @param fn 传入回调函数
 * @param wait 延时时间戳
 */
var throttle = function (fn, wait) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        if (!timer) {
            // fn.apply(context, args);
            timer = setTimeout(function () {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    };
};

/**
 * 判断当前数据是否为对象
 * @param target 函数或object
 */
function isObject(target) {
    var type = typeof target;
    return target !== null && (type === "object" || type === "function");
}

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
var clone = function (obj) {
    if (isObject(obj)) {
        var newObj = obj instanceof Array ? [] : {};
        for (var key in obj) {
            newObj[key] = obj[key];
        }
        return newObj;
    }
    else {
        return obj;
    }
};

/**
 * 浅拷贝
 * @param obj 需拷贝到对象
 */
var cloneDeep = function (obj, map) {
    if (map === void 0) { map = new WeakMap(); }
    if (isObject(obj)) {
        var newObj = obj instanceof Array ? [] : {};
        if (map.get(obj)) {
            return obj;
        }
        map.set(obj, true);
        for (var key in obj) {
            newObj[key] = cloneDeep(obj[key], map);
        }
        return newObj;
    }
    else {
        return obj;
    }
};

//全屏
function fullScreen(id) {
    var element = document.getElementById(id);
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}
//监听window是否全屏，并进行相应的操作,支持esc键退出
window.onresize = function () {
};

/**
 * 当前函数库版本
 */
var version = "1.0.0";

exports.clone = clone;
exports.cloneDeep = cloneDeep;
exports.cookie = cookie;
exports.copy = copy;
exports.debounce = debounce;
exports.fullScreen = fullScreen;
exports.throttle = throttle;
exports.version = version;
