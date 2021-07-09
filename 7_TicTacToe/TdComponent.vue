<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
// 컴포넌트를 나누는 이유는 렌더링 하는 단위를 작게 만들기 위해서
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      console.log(this.$root.$data);      // 최상위 컴포넌트 데이터에 접근 가능
      console.log(this.$parent.$data);    // 부모 컴포넌트 데이터에 접근 가능
                                          // 그럼 중간 컴포넌트 데이터에는 어떻게 접근 가능한가?
      this.$root.$data.turn = this.$root.$data.turn === "O" ? "X" : "O";
    }
  }
}

</script>

<style>
</style>