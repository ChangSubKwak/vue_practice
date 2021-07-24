<template>
  <td @click="onClickTd">{{ cellData }}</td>
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
      if (this.cellData) {
        return;
      }

      let rootData = this.$root.$data;
      console.log(rootData); // 최상위 컴포넌트 데이터에 접근 가능
      // console.log(this.$parent.$data);    // 부모 컴포넌트 데이터에 접근 가능
      // 그럼 중간 컴포넌트 데이터에는 어떻게 접근 가능한가?
      // this.$root.$data.tableData[this.rowIndex][this.celIndex] = this.$root.$data.turn;
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn); // 반드시 2차원 배열을 사용하려면 $set을 사용해야함

      let win = false;
      if (rootData.tableData[this.rowIndex][0] == rootData.turn && rootData.tableData[this.rowIndex][1] == rootData.turn && rootData.tableData[this.rowIndex][2] == rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][this.cellIndex] == rootData.turn && rootData.tableData[1][this.cellIndex] == rootData.turn && rootData.tableData[2][this.cellIndex] == rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][0] == rootData.turn && rootData.tableData[1][1] == rootData.turn && rootData.tableData[2][2] == rootData.turn) {
        win = true;
      }
      if (rootData.tableData[0][2] == rootData.turn && rootData.tableData[1][1] == rootData.turn && rootData.tableData[2][0] == rootData.turn) {
        win = true;
      }

      if (win) {
        rootData.winner = rootData.turn;
        rootData.turn = 'O';
        rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        return;
      }

      rootData.winner = '';
      let isDraw = true;
      rootData.tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            isDraw = false;
          }
        });
      });

      if (isDraw) {
        rootData.winner = '';
        rootData.turn = 'O';
        rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        return;
      }

      rootData.turn = rootData.turn === "O" ? "X" : "O";
    },
  },
};
</script>

<style>
</style>