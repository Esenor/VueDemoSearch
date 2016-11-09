<template lang="jade">
  div(class="main-col")
    item-group(:list="itemlist")
</template>

<script>
import ItemGroup from './ItemGroup'
export default {
  name: 'main-col',
  components: {
    ItemGroup
  },
  data () {
    return {
      msg: 'app'
    }
  },
  computed: {
    'itemlist': function () {
      return require('../data.js')
    }
  }
}
</script>

<style scoped lang="scss">
@import "../susy.config.scss";
.main-col {
  @include span(10 first);
  @include susy-breakpoint($bp-large, $susy) {
    @include span(10 of 10 center);
  }
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  img {
    display: block;
    margin: auto;
  }
  h1 {
    font-weight: normal;
    text-align: center;
  }
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}
</style>
