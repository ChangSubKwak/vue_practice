<template>
  <div class="ball" :style="{ background }">{{ number }}</div>
</template>

<script>
  export default {
    name: 'LottoBall',
    props: ['number'],          // props는 read-only 같은 개념
    data() {
      let background;
      return {
        background,
        numberData: this.number,    // 이런 식으로 부모로 부터 온 데이터를 바꿀수는 있음
                                    // 이렇게 하면 부모의 데이터와 자식의 데이터가 일치하지 않는 
                                    // 현상이 발생함
      };
    },
    methods: {
      // changeNumber() {      // 부모로부터 받은 number은 못바꿈, 금지되는 방법
      //   this.number = 5;
      // },
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