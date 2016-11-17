/**
 * [pug template]
 */
<template lang="pug">
  div(class="search-bar")
    img(src="../../assets/search.png")
    input(type="text", v-model="searchTxt", placeholder="Search ...")
</template>
/**
 * [javascript application]
 */
<script>
export default {
  name: 'search-bar',
  data () {
    return {
      searchTxt: ''
    }
  },
  // Watch methods
  watch: {
    /**
     * Emets un signal pour synchroniser le v-model 'searchTxt'
     * @param  String newValue
     * @param  String oldValue
     */
    searchTxt: function (newValue, oldValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>
/**
 * [scss styles]
 */
<style scoped lang="scss">
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
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
  }
</style>
