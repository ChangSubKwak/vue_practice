<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <!-- <lotto-ball v-for="ball in winBalls" number="5"></lotto-ball> -->
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball" :changeFunc="changeNumber" :winBalls="winBalls">{{ ball }}</lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="restart">재시작</button>
  </div>
</template>

<script>
  import LottoBall from './LottoBall.vue';

  function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];		// 스프레드 오퍼레이터
  }

  const timeouts = [];
  export default {
    components: {
      'lotto-ball': LottoBall,
      //'lotto-balls': LottoBall,		// 이렇게 하면 자동변환 안되어 template에서 테그를 lotto-balls로 써주어야 함
      // LottoBall,										// 이렇게 써도 됨, 케밥케이스를 파스칼케이스로 자동 변환해줌
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
      practiceDeepCopy() {
        this.winBalls = [ ...this.winNumbers ];				// 이렇게 해야 깊은 복사가 됨
        console.log('this.winNumbers', this.winNumbers);
        console.log('this.winBalls', this.winBalls);

        this.winNumbers[0] = 100;						// this.winNumbers[0]을 변경하면 this.winBalls[0]은 변경안됨
        console.log('this.winNumbers[0]', this.winNumbers[0]);
        console.log('this.winBalls[0]', this.winBalls[0]);

        this.winBalls = this.winNumbers;		// 이렇게 하면 얕은 복사가 되어버림
        console.log('this.winNumbers', this.winNumbers);
        console.log('this.winBalls', this.winBalls);

        this.winNumbers[0] = 200;						// this.winNumbers[0]을 변경하면 this.winBalls[0]도 변경됨
        console.log('this.winNumbers[0]', this.winNumbers[0]);
        console.log('this.winBalls[0]', this.winBalls[0]);
      },

      changeNumber(winBalls, idx, wantedBallValue) {
        winBalls[idx]  = wantedBallValue;
        // console.log(winBalls, idx, wantedBallValue);
      },

      restart() {
        this.winNumbers = getWinNumbers();
        this.winBalls = [];
        this.bonus = null;
        this.redo = false;
        // console.log('this.winBalls', this.winBalls);
        // this.showBalls();        // watch에서 하면 제거 필요
      },

      showBalls() {
        console.log('showBalls()');
        for (let i = 0 ; i < this.winNumbers.length -1; i++) {
          timeouts[i] = setTimeout(() => {
            this.winBalls.push(this.winNumbers[i]);
          }, (i + 1) * 1000);
        }

        timeouts[6] = setTimeout(() => {
          this.bonus = this.winNumbers[6];
          this.redo = true;
        }, 7000);

        timeouts[7] = setTimeout(() => {
          console.log('Final Result', this.winBalls);
        }, 8000);
        
      }
    },

    mounted() {
      // this.practiceDeepCopy();
      console.log('mounted');
      this.showBalls();
      // console.log('this.winBalls', this.winBalls);
      // console.log('this.winBalls[6]', this.winBalls[6]);
    },
    
    beforeDestory() {
      timeouts.forEach((t) => {         // 메모리 누수 문제로 clearTimout 해주어야 함
        clearTimeout(t);
      })
    },

    watch: {
      // winBalls(value, oldValue) {    // 감시를 원하는 변수를 함수로 만듬
      // console.log(value, oldValue);
      //   if (value.length === 0) {
      //     this.showBalls();
      //   }
      // }
      bonus(value, oldValue) {
        console.log(value, oldValue);
        if (value === null) {
          this.showBalls();
        }
      }
    }
  };
</script>

<style scoped>
</style>