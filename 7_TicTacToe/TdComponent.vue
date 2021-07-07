<template>
  <td></td>
</template>

<script>
// 컴포넌트를 나누는 이유는 렌더링 하는 단위를 작게 만들기 위해서
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Array,
  }
}

</script>

<style>
</style>