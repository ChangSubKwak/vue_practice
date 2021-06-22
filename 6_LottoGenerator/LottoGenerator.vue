<template>
	<div>
		<div>당첨 숫자</div>
		<div id="결과창">
			<lotto-ball v-for="ball in winBalls"></lotto-ball>
		</div>
		<div>보너스</div>
		<lotto-ball v-if="bonus"></lotto-ball>
		<button v-if="redo">재시작</button>
	</div>
</template>

<script>
export default {
  data() {
		return {
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