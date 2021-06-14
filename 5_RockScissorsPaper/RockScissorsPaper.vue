<template>
	<div>
		<!-- <div id="computer" :class="{ state: true, hello: false }" :style="{ backgroundImage: '', fontSize: '14px' }"></div> -->
		<!-- 아래와 같이 background-image처럼 쓸 수 없음 backgroundImage 만 인식함 -->
		<!-- <div id="computer" :style="{ background-image: 'url(https://)' }"></div> -->
		<!-- 만약 border-bottom-radius라면 borderBottomRadius로 써야함 -->
		<div id="computer" :style="{ background: 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0' }"></div>
		<div>
			<button @click="onClickButton('바위')">바위</button>
			<button @click="onClickButton('가위')">가위</button>
			<button @click="onClickButton('보')">보</button>
		</div>
		<div>{{result}}</div>
		<div>\현재 {{result}}점</div>
	</div>
</template>

<script>
export default {
  data() {
  },
	computed: {
	},
  methods: {
		onClickButton(choice) {
			
		}
  },
};
</script>

<style scoped>
#computer {
	width: 142px;
	height: 200px;
	background-position: 0 0;
}
</style>