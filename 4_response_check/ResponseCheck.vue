<template>
<!-- 최상단의 태그즉 template태그 아래 template태그를 쓸 수 없음 -->
<div>
	<div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
		<!-- template를 쓰게 되면 위의 div태그와 아래의 div태그가 형제가 됨 -->
		<template v-if="result.length">
		<!-- <div v-show="result.length"> -->
			<!-- v-show와 v-if의 차이를 알아야 함 -->
			<!-- 계산작업은 tempplate에 하는 것을 지양해야함 computed에서 해야함 -->
			<!-- 위의 message값만 변경되었는데 다시 실행될 경우 average값이 computed가 아니라면 캐싱되지 않고 다시 계산하게 됨 -->
			<!-- <div>평균 시간: {{ result.reduce((a, c) => a + c, 0) / result.length || 0 }} ms </div> -->
			<div>평균 시간: {{ average }} ms </div>
			<button @click="onReset">리셋</button>
		<!-- </div> -->
		</template>
	</div>
</template>

<script>
// 화면과 관련없는 데이터이므로 data에 세팅하지 않음
let startTime = 0;
let endTime = 0;
let timer = null;
export default {
  data() {
    return {
			result: [],
			state: 'waiting',
			message: '클릭해서 시작하세요!',			// --hot으로 감시해도 data값 변경은 실시간으로 반영되지 않음을 주의할 것
    };
  },
	computed: {
		average() {
			return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
		}
	},
  methods: {
		onReset() {
			this.result = [];
		},
		onClickScreen() {
			if (this.state === 'waiting') {
				this.state = 'ready';
				this.message = '초록색 변하면 바로 클릭하기';
				timer = setTimeout(() => {
					this.state = 'now';
					this.message = '지금 클릭하세요';
					startTime = new Date();
					}, Math.floor(Math.random() * 1000 + 2000)
				);
			} else if (this.state === 'ready') {
				clearTimeout(timer);										// 타이머의 해제
				this.state = 'waiting';
				this.message = '너무 빨리 눌렀습니다.';
			} else if (this.state === 'now') {
				endTime = new Date();
				this.state = 'waiting';
				this.message = '클릭하여 시작하기';
				this.result.push(endTime - startTime);
			}
		},
  },
};
</script>

<style scoped>
	#screen {
		width: 300px;
		height: 200px;
		text-align: center;
		user-select: none;
	}
	#screen.waiting {
		background-color: aqua;
	}
	#screen.ready {
		background-color: red;
		color: white;
	}
	#screen.now {
		background-color: greenyellow;
	}
</style>