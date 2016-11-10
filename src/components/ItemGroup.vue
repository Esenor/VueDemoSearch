<template lang="jade">
  div(class="item-group")
    search-bar(v-model="searchString")
    span(v-text="totalFound")
    template(v-for="line in listing")
      item(:content="line")
</template>

<script>
import Item from './widgets/Item'
import SearchBar from './widgets/SearchBar'
export default {
  name: 'item-group',
  props: ['list'],
  data () {
    return {
      searchString: '',
      totalFound: '0 found'
    }
  },
  components: {
    Item,
    SearchBar
  },
  computed: {
    'listing': function () {
      var vue = this
      var result = this.list.filter(function (item) {
        if ((item.name.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1) ||
        (item.ref.toLowerCase().indexOf(vue.searchString.toLowerCase()) !== -1)) {
          return item
        }
      })
      this.totalFound = [result.length, 'found'].join(' ')
      return result
    }
  }
}
</script>

<style scoped lang="scss">
  .item-group {
    margin: 0px auto;
    width: 800px;
  }
</style>
