<template>
  <div>
    <table-component :table-data="tableData"/>
    <div>{{turn}} is turn to attack</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent';
// import Vue from 'vue';

export default {
  components: {
    TableComponent,
  },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      turn: 'O',
    };
  },

  computed: {
  },
  
  methods: {
    onChangeData() {
      //this.turn = 'X';                       // 이것은 잘 반영이 됨
      // this.tableData[0][1] = 'O';         // vue.js에서는 배열의 값을 직접 바꾸면 바뀌지 않음
      // this.tableData.push('a');           // 이것도 잘 바뀜
      // Vue.set(this.tableData[1], 0, 'X');    // 이렇게 하면 잘 바뀜
      // this.$set(this.tableData[1], 0, 'X');     // 이렇게 하는 것이 위의 내용과 동일한 효과를 적용함
    },
  },

  mounted() {
  },
  
}
</script>

<style>
</style>