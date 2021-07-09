<template>
  <table>
    <!-- :row-data가 자식이 받는 props명 rowData로 쓸 수 있음 -->
    <!-- :row-index가 자식이 받는 props명 rowIndex로 쓸 수 있음 -->
    <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"/>
  </table>
</template>

<script>
import TrComponent from './TrComponent';

export default {
  props: {
    tableData: Array,
  },
  components: {
    TrComponent,
  },
};

</script>

<style>
table {
  /* border-collapse: collapse; */
}

td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}

</style>