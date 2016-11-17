/**
 * [pug template]
 */
<template lang="pug">
  div(class="item-group")
    search-bar(v-model="searchString")
    counter-info(:list="listing")
    item(v-for="line in listing", :content="line")
</template>
/**
 * [javascript application]
 */
<script>
import Item from './widgets/Item'
import SearchBar from './widgets/SearchBar'
import CounterInfo from './widgets/CounterInfo'

export default {
  name: 'item-group',
  props: ['list'],
  data () {
    return {
      searchString: ''
    }
  },
  components: {
    Item,
    SearchBar,
    CounterInfo
  },
  // Computed methods
  computed: {
    /**
     * Filtre la liste par rapport à la saisie utilisateur
     * @return array
     */
    listing: function () {
      var vue = this
      var result = this.list.filter(function (item) {
        if (
          (item.name.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1) ||
          (item.ref.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1)
        ) {
          return item
        }
      })
      this.totalFound = result.length
      return result
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
