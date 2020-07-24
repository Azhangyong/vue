// 密码 过滤特殊字符
export function stripscript(str) {
    let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");
    let specialStr = "";
    for (let i = 0; i < str.length; i++) {
        specialStr += str.substr(i, 1).replace(pattern, '');
    }
    return specialStr;
};
//验证邮箱
export function loginEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value) ? true : false
}
//验证密码 6 至20位
export function loginPass(value) {
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/
    return reg.test(value) ? true : false
}
//验证 验证码
export function loginCode(value) {
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false
}
export function login(value) {

}