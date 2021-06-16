<template>
	<div>
		<!-- <div id="computer" :class="{ state: true, hello: false }" :style="{ backgroundImage: '', fontSize: '14px' }"></div> -->
		<!-- 아래와 같이 background-image처럼 쓸 수 없음 backgroundImage 만 인식함 -->
		<!-- <div id="computer" :style="{ background-image: 'url(https://)' }"></div> -->
		<!-- 만약 border-bottom-radius라면 borderBottomRadius로 써야함 -->
		<!-- <div id="computer" :style="{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0` }"></div> -->
		<!-- <div id="computer" :style="{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }"></div> -->
		<div id="computer" :style="computedStyleObject"></div>
		<div>
			<button @click="onClickButton('rock')">rock</button>
			<button @click="onClickButton('scissors')">scissors</button>
			<button @click="onClickButton('paper')">paper</button>
		</div>
		<div>{{result}}</div>
		<div>현재 {{score}}점</div>
	</div>
</template>

<script>
const rspCoords = {
	rock: 		'0px',
	scissors: '-140px',
	paper: 		'-280px',
};

const scores = {
	rock: 1,
	scissors: 0,
	paper: -1,
};

const computerChoice = (imgCoord) => {
	return Object.entries(rspCoords).find(function (v) {
		return v[1] === imgCoord;
	})[0];
};

let interval = null;
export default {
  data() {
		return {
			imgCoord: rspCoords.rock,
			result: '',
			score: 0,
		};
  },
	computed: {
		computedStyleObject() {
			return {
				background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
			};
		}
	},
  methods: {
		changeHand() {
			interval = setInterval(() => {
				if (this.imgCoord === rspCoords.rock) {
					this.imgCoord = rspCoords.scissors;
				} else if (this.imgCoord === rspCoords.scissors) {
					this.imgCoord = rspCoords.paper;
				} else if (this.imgCoord === rspCoords.paper) {
					this.imgCoord = rspCoords.rock;
				}
			}, 100);
		},
		onClickButton(choice) {
			console.log('onClickButton(', choice, ')');
			clearInterval(interval);
			const myScore = scores[choice];
			const comScore = scores[computerChoice(this.imgCoord)];
			const diff = myScore - comScore;
			if (diff === 0) {
				this.result = '비겼습니다.';
			} else if ([-1, 2].includes(diff)) {
				this.result = '이겼습니다.';
				this.score += 1;
			} else {
				this.result = '졌습니다.';
				this.score -= 1;
			}

			setTimeout(() => {
				this.changeHand();
			}, 1000);
		},
  },
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {									// 화면에 나타나기 전(데이터 준비)
		console.log('created');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {									// 화면에 나타난 후(화면 준비)
		console.log('mounted');
		this.changeHand();
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {									// 화면이 갱신될 때
		console.log('updated');
	},
	beforeDestory() {
		console.log('beforeDestory');
		clearInterval(interval);
		// create 사이클에서 setInterval 같은 함수를 사용하고 destroy에서 처리 안하면 중복될 수 있음
	},
	destroyed() {								// 화면이 사라질 때
		console.log('destroyed');
	}
};
</script>

<style scoped>
#computer {
	width: 142px;
	height: 200px;
	background-position: 0 0;
}
</style>