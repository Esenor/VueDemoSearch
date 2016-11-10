<template lang="jade">
  div(class="search-bar")
    input(type="text", v-model="searchTxt", placeholder="Search ...")
</template>

<script>
export default {
  name: 'search-bar',
  data () {
    return {
      searchTxt: ''
    }
  },
  watch: {
    searchTxt: function (newValue, oldValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="scss">
  .search-bar {
    display: inline-block;
    input {
      border: 1px solid #ececec;
      border-radius: 5px;
      padding: 5px;
      overflow: hidden;
      margin: 10px;
      height: 40px;
      width: 650px;
    }
  }
</style>
