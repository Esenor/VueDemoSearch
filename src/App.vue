<template lang="jade">
  div(id="app")
    small(v-text="environment")
    main-col
</template>

<script>
import MainCol from './components/MainCol'

export default {
  name: 'app',
  props: ['env'],
  components: {
    MainCol
  },
  computed: {
    'environment': function () {
      return [this.env, 'environment'].join(' ')
    }
  }
}
</script>

<style scoped lang="scss">
  #app {
    margin-top: 10px;
    small {
      display: block;
      text-align: center;
    }
  }
</style>
