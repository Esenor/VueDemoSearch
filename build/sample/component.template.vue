/**
 * [pug template]
 */
<template lang="pug">
  div
    p(v-text="'{%htmlName%} component'")
</template>
/**
 * [javascript application]
 */
<script>
export default {
  name: '{%minName%}',
  props: [],
  data () {
    return {
      // Data properties declaration
    }
  },
  components: {
    // Component declaration
  },
  /**
   * Computed methods
   */
  computed: {
    // Computed properties
  },
  /**
   * Watch methods
   */
  watch: {
    // Watcher(observer) properties
  },
  /**
   * Component methods
   */
  methods: {
    // Function javascript
  }
}
</script>
/**
 * [scss styles]
 */
<style lang="scss">
</style>
