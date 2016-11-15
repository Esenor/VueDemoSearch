/**
 * [pug template]
 */
<template lang="pug">
  div(class="search-bar")
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
      /**
       * Saisie utilisateur
       * @type String
       */
      searchTxt: ''
    }
  },
  /**
   * Watch methods
   */
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
