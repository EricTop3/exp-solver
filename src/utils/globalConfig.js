/**
 * 全局配置
 */
import constant from './constants';
import $ from 'jquery';
import { unixToTime } from './formateDate';
import echarts from 'echarts'
import api from '@/service';
import cookies from 'js-cookie';
import auth from './auth';

export default function plugin(Vue) {
  // api
  Vue.prototype.$api = api;

  // 业务常量全局注入
  Vue.prototype.$const = constant;

  // echarts
  Vue.prototype.$echarts = echarts;

  // cookie
  Vue.prototype.$cookies = cookies;

  // 权限管理
  Vue.prototype.$auth = auth;

  // 注册全局过滤器
  Vue.filter('unixToTime', unixToTime);

  Vue.mixin({
    mounted(){
      // 初始化MD点击涟漪效果
      $.material.init();
    }
  })
}
