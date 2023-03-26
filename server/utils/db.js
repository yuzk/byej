/**
 *  连接数据库工具类
 *  2022
 * @type {Mongoose}
 */
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/api2', { //连接数据库
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("数据库连接成功!");
});

module.exports = mongoose; //导出连接