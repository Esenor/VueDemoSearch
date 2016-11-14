/**
 * [jade template]
 */
<template lang="jade">
  div(class="item-group")
    search-bar(v-model="searchString")
    span(v-text="userInfo")
    template(v-for="line in listing")
      item(:content="line")
</template>
/**
 * [javascript application]
 */
<script>
import Item from './widgets/Item'
import SearchBar from './widgets/SearchBar'

export default {
  name: 'item-group',
  props: ['list'],
  data () {
    return {
      /**
       * Saisie utilisateur
       * @type String
       */
      searchString: '',
      /**
       * Total de ligne trouvée
       * @type int
       */
      totalFound: 0
    }
  },
  components: {
    Item,
    SearchBar
  },
  /**
   * Computed methods
   */
  computed: {
    /**
     * Filtre la liste par rapport à la saisie utilisateur
     * @return array
     */
    listing: function () {
      var vue = this
      var result = this.list.filter(function (item) {
        if ((item.name.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1) ||
        (item.ref.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1)) {
          return item
        }
      })
      this.totalFound = result.length
      return result
    },
    /**
     * Retourne le total d'objet dans la liste
     * @return String
     */
    userInfo: function () {
      return [this.totalFound, 'found'].join(' ')
    }
  }
}
</script>
/**
 * [scss styles]
 */
<style scoped lang="scss">
  .item-group {
    margin: 0px auto;
    width: 800px;
  }
</style>
