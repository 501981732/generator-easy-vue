export const cameCase = val => {
    let reg = /-(\w)/g;
    return reg.replace(o, function(a, b) {
        // b为子项；
        return b.toUpperCase()
    })
}

export const caseCase2 = val => {

    let arr = str.split("-");
    for (let i = 1, len = arr.length; i < len; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1)
    }
    return arr.join('')
}
