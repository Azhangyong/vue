import Vue from "vue";
import SvgIcon from "./svgIcon.vue";
Vue.component("svg-icon", SvgIcon);
/**
 * require.context:读取指定目录的所有文件
 * 1.指向的文件夹
 * 2.是否查找该目录下的子级目录，
 * 3.匹配引入文件的正则表达式，读取结尾为.svg的文件
 * 需要在vue.config.js chainWebpack中配置 安装依赖npm install svg-sprite-loader -S
 */
//解析svg图片
const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};
requireAll(req);
{
  /* <svg-icon
:iconClass="item.meta.icon"
:className="item.meta.icon"
/> */
}
