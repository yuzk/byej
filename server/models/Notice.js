/**
 * notice model
 * 2022
 * 
 */
const mongoose = require("../utils/db");
const bf = require("./BuildingInformation");
const NoticeSchema = mongoose.Schema;
const notice = new NoticeSchema({
    //所属楼栋
    bf_id: {
        type: mongoose.Schema.ObjectId,
        ref: "bf",
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("notice", notice, "notices");