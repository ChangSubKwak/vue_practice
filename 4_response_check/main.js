import Vue from 'vue'                               // package.json에 기록된 vue를 가져온다.
import ResponseCheck from './ResponseCheck';

new Vue(ResponseCheck).$mount('#root');            // el역할을 $mount가 한다