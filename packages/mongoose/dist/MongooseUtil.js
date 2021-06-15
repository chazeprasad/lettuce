"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseUtil = void 0;
const mongoose = require("mongoose");
class MongooseUtil {
}
exports.MongooseUtil = MongooseUtil;
MongooseUtil.configureMongoose = async (url, options) => {
    const DB_URL = url || process.env.MONGODB_URI || '';
    try {
        await mongoose.connect(DB_URL, options);
    }
    catch (error) {
        console.log(error.message);
    }
};
