import Vue from 'vue';															// package.json에 기록된 vue를 가져온다.
import LottoGenerator from './LottoGenerator';

new Vue(LottoGenerator).$mount('#root');						// el역할을 $mount가 한다