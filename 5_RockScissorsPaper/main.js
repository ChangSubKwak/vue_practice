import Vue from 'vue';																// package.json에 기록된 vue를 가져온다.
import RockScissorsPaper from './RockScissorsPaper';

new Vue(RockScissorsPaper).$mount('#root');						// el역할을 $mount가 한다