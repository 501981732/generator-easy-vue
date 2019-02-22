export const isArray = val => !!val && Array.isArray(val);

export const isBoolean = val => typeof val === "boolean";

export const isFunction = val => val && typeof val === "function";

export const isNumber = val => typeof val === "number";

export const isString = val => typeof val === "string";

export const isSymbol = val => typeof val === "symbol";

export const inBrowser = typeof window !== "undefined";

export const UA = inBrowser && window.navigator.userAgent.toLowerCase();

export const isIE = UA && /msie|trident/.test(UA);

export const isIE9 = UA && UA.indexOf("msie 9.0") > 0;

export const isEdge = UA && UA.indexOf("edge/") > 0;

export const isAndroid = UA && UA.indexOf("android") > 0;

export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

export const isPhantomJS = UA && /phantomjs/.test(UA);

export const isInAPP = UA && /wuba/.test(UA);

export const isWeiXin = UA && /micromessenger/.test(UA);

export const is360zhushou = UA && /360appstore/.test(UA);
