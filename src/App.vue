/**
 * [pug template]
 */
<template lang="pug">
  div(id="app")
    item-group(:list="itemlist")
</template>
/**
 * [javascript application]
 */
<script>
import ItemGroup from './components/ItemGroup'

export default {
  name: 'app',
  components: {
    ItemGroup
  },
  // Computed methods
  computed: {
    /**
     * Parse le fichier data.js et retourne le jeu d'éssai
     * @return array
     */
    itemlist: function () {
      var data = JSON.parse(require('./data.js'))
      var sample = data.sample
      return sample
    }
  }
}
</script>
/**
 * [scss styles]
 */
<style scoped lang="scss">
  #app {
    margin-top: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    small {
      display: block;
      text-align: center;
    }
  }
</style>
