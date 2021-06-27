<template>
  <!-- <div class="ball" :style="{ background }">{{ numberData }}</div> -->
    <div class="ball" :style="{ background }">{{ number }}</div>
</template>

<script>
  export default {
    name: 'LottoBall',

    props: ['number',               // 부모컴포넌트가 자식컴포넌트에게 물려주는 개념을 props라고 함
      'changeFunc',                 // props는 read-only 같은 개념
      'winBalls',
    ],                              
                                    
    data() {
      return {
        // background,
        //numberData: this.number,    // 이런 식으로 부모로 부터 온 데이터를 바꿀수는 있음
                                      // 이렇게 해도 부모의 데이터는 변하지 않기에
                                      // 부모와 자식의 데이터가 일치하지 않는 현상이 발생함
      };
    },

    computed: {
      styleObject() {
        let background;
      
        if (this.number <= 10) {
          background = 'red';
        } else if (this.number <= 20) {
          background = 'orange';
        } else if (this.number <= 30) {
          background = 'yellow';
        } else if (this.number <= 40) {
          background = 'green';
        } else {
          background = 'blue';
        }

        return { background };
      }
    },
    
    methods: {
      // changeNumber() {      // 부모로부터 받은 number은 못바꿈, 금지되는 방법
      //   this.number = 5;
      // },
    },

    mounted() {
      if (this.winBalls && this.winBalls.length == 3) {
        this.changeFunc(this.winBalls, 2, 100);         // 이렇게 하면 부모의 값과 자식의 값이 일치하게 됨
      }
    },
    
    beforedDestory() {
      // setTimeout에 대하여 강제 종료를 여기서 함
    }
    
  }
</script>

<style>
  .ball {
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin-right: 20px;
  }
</style>