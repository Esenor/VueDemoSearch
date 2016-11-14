<template lang="jade">
  div(id="app")
    item-group(:list="itemlist")
</template>

<script>
import ItemGroup from './components/ItemGroup'
export default {
  name: 'app',
  components: {
    ItemGroup
  },
  computed: {
    'itemlist': function () {
      var data = JSON.parse(require('./data.js'))
      var sample = data.sample
      return sample
    }
  }
}
</script>

<style scoped lang="scss">
  #app {
    margin-top: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
    -webkit-user-select: none; /* Chrome, Safari, and Opera */
    -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
    small {
      display: block;
      text-align: center;
    }
  }
</style>
