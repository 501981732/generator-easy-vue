/**
 * 配置线上环境和线下环境切换
 * baseUrl 域名地址
 * routerBaseUrl 若开启history模式则线上补全路径
 * @example url='//zp.58.com/yy/2018/employerbrandselection/main' baseUrl='//zp.58.com' routerBaseUrl='/yy/2018/employerbrandselection/main'
 *
 */

let baseUrl = "";
let routerBaseUrl = "";
if (process.env.NODE_ENV == "development") {
    // baseUrl = ''
} else if (process.env.NODE_ENV == "test") {
    // baseUrl = "";
    // routerBaseUrl = "";
} else if (process.env.NODE_ENV == "production") {
    baseUrl = "";
    routerBaseUrl = "";
}
export { baseUrl, routerBaseUrl };
