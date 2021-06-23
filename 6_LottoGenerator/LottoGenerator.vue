<template>
	<div>
		<div>당첨 숫자</div>
		<div id="결과창">
			<lotto-ball v-for="ball in winBalls" number="5"></lotto-ball>
		</div>
		<div>보너스</div>
		<lotto-ball v-if="bonus"></lotto-ball>
		<button v-if="redo">재시작</button>
	</div>
</template>

<script>
	import LottoBall from './LottoBall.vue'

	function getWinNumbers() {
		console.log('getWinNumbers');
		const candidate = Array(45).fill().map((v, i) => i + 1);
		const shuffle = [];
		while (candidate.length > 0) {
			shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
		}
		const bonusNumber = shuffle[shuffle.length - 1];
		const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
		return [...winNumbers, bonusNumber];
	}

	export default {
		components: {
			//'lotto-ball': LottoBall,
			//'lotto-balls': LottoBall,		// 이렇게 하면 자동변환 안되어 template에서 테그를 lotto-balls로 써주어야 함
			LottoBall,								// 이렇게 써도 됨, 케밥케이스를 파스칼케이스로 자동 변환해줌
		},
		data() {
			return {
				winNumbers: getWinNumbers(),
				winBalls: [],
				bonus: null,
				redo: false,
			};
		},
		computed: {
		},
		methods: {
		},
		mounted() {

		},
		beforeDestory() {

		}
	};
</script>

<style scoped>
</style>