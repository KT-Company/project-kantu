import {
    pageOnload_3d,
} from "./industryEquip.js";

// var baseUrl = "https://www.kantu3d.com";
var baseUrl = "/3dModel"

// 初始化整个场景
export const pageOnload = (canvas, fun) => {
    pageOnload_3d(baseUrl, canvas, fun);
};