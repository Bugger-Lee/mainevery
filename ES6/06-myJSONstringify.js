/**
 * JSON.stringify 方法基本介绍
 * stringify 对象转字符串
 * 
 */

JSON.stringify({ x: 1, y: 2 });
JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] })

/* 第二个参数 */
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}
var foo = {foundation: "Mozilla", model: "box", week: 4, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer);
console.log(jsonString);


/* 第三个参数的例子 */
JSON.stringify({ a: 2 }, null, " ");
JSON.stringify({ a: 2 }, null, "");

/**
 * parse 字符串转对象
 * 第二个参数是可选参数提供可选的 reviver 函数，用在返回之前对所得到的对象执行变换操作
 * 
 */

/**
 * 
 *  带第二个参数的情况 
*/

JSON.parse('{"p": 5}', function (k, v) {
    if(k === '') return v
    return v * 2
})

/**
 * 手写JSON.stringify
 * 
 */

function myJsonStringify(data) {
  let type = typeof data

  if (type !== 'object') {
    // 基础数据类型
    let res = data
    if (Number.isNaN(data) || data === Infinity || data === -Infinity) {
      // NaN Infinity -Infinity 序列化为 null
      return 'null'
    } else if (type === 'function' || type === 'undefined' || type === 'symbol') {
      // function undefined symbol 序列化为 undefined
      return 'undefined'
    } else if (type === 'string') {
      return `"${data}"`
    }
    return String(res)
  } else if (type === 'object') {
    if (data === 'null') {
      // null 序列化为null
      return 'null'
    } else if (data.toJSON && data.toJSON === 'function') {
      // Date 序列化为 字符串
      return  myJsonStringify(data.toJSON())
    } else if (data instanceof Array) {
      // 处理数组
      let res = []
      data.forEach((item, index) => {
        if (typeof item === 'undefined' || typeof item === 'function' || typeof item === 'symbol') {
          res[index] = 'undefined'
        } else {
          res[index] = myJsonStringify(item)
        }
      })
      res = `"[${res}]"`
      return res.replace(/'/g, '"')
    } else {
      // 普通对象
      let res = []
      Object.keys(data).forEach((item, index) => {
        if (typeof item !== 'symbol') {
          if (data[item] !== undefined && typeof data[item] !== 'function' && typeof data[item] !== 'symbol') {
            res.push(`'${item}':${myJsonStringify(data[item])}`)
          }
        }
      })
      return (`{${res}}`).replace(/'/g, '"');
    }
  }
}