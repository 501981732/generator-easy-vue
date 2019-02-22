/**
 * 平滑滚动顶部
 * @author wm
 * @DateTime 2018-09-29
 */

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
/**
 * 滚动
 * @Author   wangmeng
 * @DateTime 2019-02-22
 * @param    {object}   element dom
 * @param    {number}   speed   speed
 */
const animateScroll = (element, speed) => {
    let rect = element.getBoundingClientRect();
    //获取元素相对窗口的top值，此处应加上窗口本身的偏移
    let top = window.pageYOffset + rect.top;
    let currentTop = 0;
    let requestId;
    //采用requestAnimationFrame，平滑动画
    function step(timestamp) {
        currentTop += speed;
        if (currentTop <= top) {
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    }
    window.requestAnimationFrame(step);
};
/**
 * 验证邮箱
 * @author   wm
 * @DateTime 2018-09-05
 * @param {string} str 验证的邮箱
 * @returns {boolean} 是否是邮箱
 */
const validateEmail = str =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        str
    );

/**
 * 验证数字
 * @author   wm
 * @DateTime 2018-09-05
 * @param {string} n 验证的数字
 * @returns {boolean} 是否是数据
 */
const validateNumber = n =>
    !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

/**
 * 验证电话
 * @author   wm
 * @DateTime 2018-09-05
 * @param {string} n 验证的电话
 * @returns {boolean} 是否是电话号码
 */

const validataPhone = n => /^[1][3,4,5,7,8,9][0-9]{9}$/.test(n);

/**
 * 验证固定电话
 * @author   wm
 * @DateTime 2018-09-05
 * @param {string} n 验证的固定电话
 * @returns {boolean} 是否是固定电话
 */

const validataFixedLineTelephone = n => /\d{2,5}-\d{7,8}/.test(n);

/**
 * 判断平台 pc
 * @author wm
 * @returns {string} 平台类型
 */

const validataOS = () => {
    if (navigator.userAgent.indexOf("Window") > 0) {
        return "Windows";
    } else if (navigator.userAgent.indexOf("Mac OS X") > 0) {
        return "Mac";
    } else if (navigator.userAgent.indexOf("Linux") > 0) {
        return "Linux";
    } else {
        return "NUll";
    }
};
const isWeiXin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    if (
        ua.match(/MicroMessenger/i) &&
        ua.match(/MicroMessenger/i)[0] === "micromessenger"
    ) {
        return true;
    } else {
        return false;
    }
};
let inBrowser = typeof window !== "undefined";
let UA = inBrowser && window.navigator.userAgent.toLowerCase();

/**
 *是否是android平台
 */
const isAndroid = UA && UA.indexOf("android") > 0;

/**
 * 是否是ios平台
 */
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

/**
 * 获取滚动条位置
 * @return {Number} 滚动条位置
 */
const getScrollTop = _ => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
};

/**
 * 获取可视范围高度
 * @return {Number} 可视范围高度
 */
const getClientHeight = _ => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    } else {
        clientHeight = Math.max(
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
    }
    return clientHeight;
};
/**
 * 获取文档完整的高度
 * @return {Number} 文档高度
 */
const getScrollHeight = _ => {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
    );
};
/**
 *  距离第二天的倒计时
 * @return {String}   距离第二天的时间
 */
const timeToNextDay = _ => {
    // 现在距离 1970-1-1 毫秒数
    let d = new Date();
    let now = d.getTime();
    // 今天凌晨距离 1970-1-1 毫秒数
    let today = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    let tomorrow = today + 24 * 60 * 60 * 1000;
    let dis = (tomorrow - now) / 1000;
    let h = parseInt(dis / (60 * 60));
    let m = parseInt((dis / 60) % 60);
    let s = parseInt(dis % 60);
    return `${h}时${m}分${formatTime(s)}秒`;
};

const formatTime = s => {
    return Number(s) >= 10 ? s : "0" + s;
};

/**
 * 获取某个cookie
 * @param {string} name cookie的key
 * @return {string} cookie的value
 */
const getCookie = name => {
    let arr;
    let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]).replace(/\"/g, ""); //替换引号
    } else {
        return null;
    }
};
// const getCookie =(cname) => {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i].trim();
//         if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
//     }
//     return "";
// }

/**
 * 删除cookie
 * @param name cookie的名称
 */
const delCookie = name => {
    setCookie(name, " ", -1);
};

/**
 * 判断页面登录
 * @Author   wangmeng
 * @DateTime 2019-01-08
 */
const getPPU = _ => {
    return getCookie("PPU");
};

/**
 * M端登录
 * @Author   wangmeng
 * @DateTime 2019-01-08
 * @param url 登录成功后回跳页面
 */
const H5Login = url => {
    let href = window.location.href;
    location.href = `//m.m.58.com/login/?path=${url || href}`;
};

/**
 * 点击复制到剪切板中 使用execCommand API
 * https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript/30810322#30810322
 * @param {string} text 要复制的内容
 * @return {promise} new promise
 */

const fallbackCopyTextToClipboard = text => {
    let textArea = document.createElement("textarea");
    let root = document.getElementById("app");
    textArea.value = text;
    // document.body.appendChild(textArea);
    document.body.insertBefore(textArea, root);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length); //不设置的话ios 会有问题
    return new Promise((reslove, reject) => {
        try {
            let success = document.execCommand("copy");
            let msg = success ? "success" : "unsuccess";
            reslove(msg);
        } catch (err) {
            reject(err);
        }
        document.body.removeChild(textArea);
    });
};

/**
 * 点击复制到剪切板中 使用 navigator.clipboard.writeText(text)
 * @param {string} text 要复制的内容
 * @return {promise} new promise
 */

const copyTextToClipboard = text => {
    if (!navigator.clipboard) {
        return fallbackCopyTextToClipboard(text);
    }
    return new Promise((reslove, reject) => {
        navigator.clipboard.writeText(text).then(
            function() {
                reslove("success");
            },
            function(err) {
                reject(err);
            }
        );
    });
};

/**
 * 函数防抖
 * @param  {function} func 需要防抖的函数
 * @param  {string} wait 时间
 * @return {function} 防抖函数
 */
const simpleDebounce = (func, wait) => {
    let timer;
    return _ => {
        timer && clearTimeout(timer);
        timer = setTimeout(func, wait);
    };
};
/**
 * 函数防抖
 * @param  {function} func 需要防抖的函数
 * @param  {string} wait 时间
 * @param  {bollean} immediate  是否立即执行
 * @return {function} 防抖函数
 */
const debounce = (func, wait, immediate) => {
    var timeout, result;

    return function() {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function() {
                timeout = null;
            }, wait);
            if (callNow) result = func.apply(context, args);
        } else {
            timeout = setTimeout(function() {
                result = func.apply(context, args);
            }, wait);
        }

        return result;
    };
};

/**
 * 函数节流
 * @param  {function} func 需要节流的函数
 * @param  {strimg} wait 节流函数
 * @return {function} 节流的函数
 */
const throttle = (func, wait) => {
    if (timer) return;
    return () => {
        timer = setTimeout(_ => {
            func();
            timer = null;
        }, wait);
    };
};

// const throttle2 = (func, wait) => {
//     let last = 0
//     return () => {
//         let current_time = +new Date()
//         if (current_time - last > wait) {
//             func.apply(this, arguments)
//             last = +new Date()
//         }
//     }
// }

/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return {object} {id:12345, a:b}
 * */
const urlParse = () => {
    let url = window.location.search;
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
        arr.forEach(item => {
            let tempArr = item.substr(1).split("=");
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};

/**
 * 根据对象某属性排序
 * @Author   wangmeng
 * @DateTime 2019-01-03
 * @param    {String} prop 对象属性
 * @param    {Boolean}  boolean 排序规则
 */
const sortBy = (prop, boolean = true) => {
    let flag = boolean ? 1 : -1;
    return function(a, b) {
        return a[prop] < b[prop] ? flag * -1 : flag;
    };
};

/**
 * 缓存函数计算的结果 仅支持一个参数传递
 * @Author   wangmeng
 * @DateTime 2019-02-11
 * @param    {Function} fn 要缓存的函数
 * @return   {Function}      缓存后的函数
 * @useage const cachedComputed = cached(funcA); cachedComputed(1)
 */

const cached = fn => {
    const cache = Object.create(null);
    return function cachedFn(str) {
        if (!cache[str]) {
            cache[str] = fn(str);
        }
        return cache[str];
    };
};

export {
    scrollToTop,
    validateEmail,
    validateNumber,
    validataPhone,
    validataFixedLineTelephone,
    validataOS,
    isWeiXin,
    isAndroid,
    isIOS,
    getScrollTop,
    getClientHeight,
    getScrollHeight,
    timeToNextDay,
    getCookie,
    getPPU,
    H5Login,
    isAPP,
    copyTextToClipboard,
    simpleDebounce,
    debounce, // 节流
    throttle, // 防抖
    // throttle2, //防抖
    urlParse,
    sortBy,
    animateScroll
};
