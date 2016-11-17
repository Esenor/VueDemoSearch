/**
 * [pug template]
 */
<template lang="pug">
  div
    span(v-text="infoMsg")
</template>
/**
 * [javascript application]
 */
<script>
export default {
  name: 'counter-info',
  props: ['list'],
  // Computed methods
  computed: {
    /**
     * Formate l'affichage du compteur
     * @return String
     */
    infoMsg: function () {
      return this.list.length + ' found'
    }
  }
}
</script>
/**
 * [scss styles]
 */
<style scoped lang="scss">
  div {
    display: inline-block;
  }
</style>
