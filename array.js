// //substring and slice
// const str = 'lizhuofeng';
// //参数均为负数
// console.log(str.slice(-2, -1));//有
// console.log(str.substring(-2, -1));//空
//
// //参数前大于后
// console.log(str.slice(2, 1));//空
// console.log(str.substring(2, 1));//有

// let arr = new Array(5);
// arr.length = 100;
// console.log(arr);

// //arr method
// let arr = [];
// arr.push(1);
// arr.unshift(2);
// console.log(arr);

//map
// const resetString = (arr) => {
//     return arr.map((item) => {
//         item = item.toLowerCase();
//         const tempRest = item.substring(1);
//         const tempStart = item[0].toUpperCase();
//         item = tempStart + tempRest;//注意字符串不能局部修改
//         return item;
//     })
// }
//
// console.log(resetString(['adam', 'LISA', 'barT']));

//sort
let arr = [20, 10, 1, 2];
arr.sort(function (x, y) {
    console.log(x, y);
    if (x > y) {
        return 1;
    } else if (x < y) {
        return -1;
    } else {
        return 0;
    }
});