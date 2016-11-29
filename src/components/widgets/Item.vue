/**
 * [pug template]
 */
<template lang="pug">
  div(class="item", v-on:click="toggleInfo")
    img(:src="content.image")
    div(class="header")
      span(class="ref", v-text="content.ref")
      span(class="name", v-text="content.name")
    transition(name="opening")
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
  // Component methods
  methods: {
    /**
     * Inverse l'état du booléen toggle
     * @return bool
     */
    toggleInfo: function () {
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
    .header {
      display: inline-block;
      height: 60px;
      width: 700px;
    }
    img {
      vertical-align: bottom;
      background-color: #ececec;
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
      width: 38%;
      &.ref {
        padding: 2px 5px 2px 0px;
        margin-top: 20px;
        font-style: italic;
        font-size: 0.8em;
        overflow: hidden;
        &:before{
          font-style: normal;
          color: #000000;
          content: 'ref:';
          padding: 5px 2px 5px 5px;
        }
      }
    }
    .opening-enter-active {
      transition: max-height 0.25s ease-in;
      max-height: 500px;
    }
    .opening-enter, .opening-leave-active {
      max-height: 0;
    }
  }
</style>
