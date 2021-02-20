const { API, test } = require("hong-lerna-core");
const axios = require("axios");

const getPopularImg = () => axios.get(API);

module.exports = getPopularImg;

console.log(test);

console.log("测试只更改popular包");

// 测试代码，发布时删除
getPopularImg().then((res) => console.log(res.data.length));
