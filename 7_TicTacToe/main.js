import Vue from 'vue';									// package.json에 기록된 vue를 가져온다.
import TicTacToe from './TicTacToe';

new Vue(TicTacToe).$mount('#root');						// el역할을 $mount가 한다