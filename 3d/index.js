import {
    pageOnload_3d,
} from "./industryEquip.js";
import {
    pageOnloadBuild_3d,
} from "./industryBuild.js";
import {
    pageOnloadOil_3d,
} from "./industryOil";

// var baseUrl = "https://www.kantu3d.com";
var baseUrl = "/3dModel"

// 初始化整个场景
export const pageOnload = (canvas, fun) => {
    pageOnload_3d(baseUrl, canvas, fun);
};

// 初始化整个场景
export const pageOnloadBuild = (canvas, fun) => {
    pageOnloadBuild_3d(baseUrl, canvas, fun);
};

// 初始化整个场景
export const pageOnloadOil = (canvas, fun) => {
    pageOnloadOil_3d(baseUrl, canvas, fun);
};