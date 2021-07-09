<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :cell-index="index" :row-index="rowIndex"/>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";

export default {
  props: {
    rowData: Array,
    rowIndex: Number,
  },

  data() {
    return {
      parent: "I'm your parent",
    };
  },

  components: {
    TdComponent,
  },
}

</script>

<style>
</style>