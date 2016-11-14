/**
 * [jade template]
 */
<template lang="jade">
  div(class="item", v-on:click="toggleOpen", v-bind:class="{open: toggle}")
    img(:src="content.image")
    div(class="header")
      span
        span(class="ref", v-text="content.ref")
      span(class="name", v-text="content.name")
    transition(name="fade")
      div(class="description", v-text="content.description", v-if="toggle")
</template>
/**
 * [javascript application]
 */
<script>
export default {
  name: 'item',
  props: ['content'],
  data () {
    return {
      toggle: false
    }
  },
  /**
   * Component methods
   */
  methods: {
    /**
     * Inverse l'état du booléen toggle
     * @return bool
     */
    toggleOpen: function () {
      this.toggle = !this.toggle
    }
  }
}
</script>
/**
 * [scss styles]
 */
<style lang="scss">
  @import "../../susy.config.scss";
  .item {
    border: 1px solid #ececec;
    cursor: pointer;
    border-radius: 5px 0px 0px 5px;
    overflow: hidden;
    margin: 10px;
    &.open {
      .ref {
        &:before{
          color: #ffffff;
          background: #42b983;
        }
      }
    }
    .header {
      display: inline-block;
      height: 60px;
      width: 700px;
    }
    img {
      vertical-align: bottom;
      background-color: #42b983;
      width: 60px;
      height: 60px;
    }
    &:hover {
      box-shadow: 5px 5px 10px #ececec;
    }
    .description {
      margin: 6px;
      padding: 6px;
      background: #fbfbfb;
      border-top: 1px solid #f2f2f2;
      font-size: 0.95em;
    }
    span {
      vertical-align: top;
      padding: 4px 4px 4px 0px;
      margin-top: 18px;
      margin-left: 10px;
      display: inline-block;
      width: 40%;
      &.name {
        margin-left: 20px;
      }
      &.ref {
        padding: 2px 5px 2px 0px;
        margin: 0px;
        width: auto;
        font-style: italic;
        border-radius: 5px;
        font-size: 0.8em;
        border: 1px solid #ececec;
        overflow: hidden;
        &:before{
          font-style: normal;
          color: #42b983;
          content: 'ref';
          background: #ececec;
          padding: 5px;
          margin-right: 4px;
        }
      }
    }
    .fade-enter-active {
      transition: max-height 0.25s ease-in;
      max-height: 500px;
    }
    .fade-enter, .fade-leave-active {
      max-height: 0;
    }
  }
</style>
