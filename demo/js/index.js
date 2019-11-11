let shoppingCart = [
    {
        kind: "前端",
        name: "木子李"
    },
    {
        kind: "前端",
        name: "张三丰"
    },
    {
        kind: "后台",
        name: "王昭君"
    }
]
function splitArray(arr, key) {
    // 1. 获取分类
    let kinds = [];
    for(let i = 0, len = arr.length; i < len; i++) {
        kinds.push(arr[i][key]);
    }
    kinds = [...new Set(kinds)]; // 去重
    // 2. 根据分类重新组合数据
    let resArr = [];
    for(let i = 0, len1 = kinds.length; i < len1 ; i++) {
        let obj = {
            [key]: kinds[i],
            list: []
        }
        for(let j = 0, len2 = arr.length; j < len2; j++) {
            if(arr[j][key] == kinds[i]) {
                obj.list.push(arr[j]);
            }
        }
        resArr.push(obj);
    }
    return resArr;
}

let res = splitArray(shoppingCart, "kind");
console.log(res);
