<template>
  <div>
    <table-component :table-data="tableData"/>
    <div>{{turn}} is turn to attack</div>
  </div>
</template>

<script>
import TableComponent from './TableComponent';

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
  },

  mounted() {
  },
  
}
</script>

<style>
</style>