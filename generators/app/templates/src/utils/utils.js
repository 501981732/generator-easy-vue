/**
 * 平滑滚动顶部
 * @Author   wm
 * @DateTime 2018-09-29
 */
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
/**
 * 验证邮箱
 * @Author   wm
 * @DateTime 2018-09-05
 * @param    {string}   str 
 * @return   {boolean}       
 */
export const validateEmail = str => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);

/**
 * 验证数字
 * @Author   wm
 * @DateTime 2018-09-05
 * @param    {string}   n 
 * @return   {boolean}     
 */
export const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

/**
 * 验证电话
 * @Author   wm
 * @DateTime 2018-09-05
 * @param    {string}   n 
 * @return   {boolean}      
 */
export const validataPhone = (n) => /^[1][3,4,5,7,8,9][0-9]{9}$/.test(n);
/**
 * 验证固定电话
 * @Author   wm
 * @DateTime 2018-09-05
 * @param    {string}   n 
 * @return   {boolean}      
 */
export const validataFixedLineTelephone = (n) => /\d{2,5}-\d{7,8}/.test(n);
/**
 * 判断平台
 * @Author   wm
 * @DateTime 2018-09-05
 * @return   {string}  平台类型    
 */
export const validataOS = function() {
    if (navigator.userAgent.indexOf("Window") > 0) {
        return "Windows";
    } else if (navigator.userAgent.indexOf("Mac OS X") > 0) {
        return "Mac";
    } else if (navigator.userAgent.indexOf("Linux") > 0) {
        return "Linux";
    } else {
        return "NUll";
    }
}
