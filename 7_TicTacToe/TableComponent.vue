<template>
  <table>
    <!-- :row-data가 자식이 받는 props명 rowData로 쓸 수 있음 -->
    <!-- :row-index가 자식이 받는 props명 rowIndex로 쓸 수 있음 -->
    <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"/>
  </table>
</template>

<script>
import TrComponent from './Tromponent';

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
</style>