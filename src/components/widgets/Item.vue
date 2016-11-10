<template lang="jade">
  div(class="item" v-on:click="open")
    img(:src="content.image")
    div(class="header")
      span(class="ref", v-text="content.ref")
      span(class="name", v-text="content.name")
    transition(name="fade")
      div(class="description", v-text="content.description", v-if="toggle")
</template>

<script>
export default {
  name: 'item',
  props: ['content'],
  components: {
  },
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    open: function () {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style lang="scss">
  @import "../../susy.config.scss";
  .item {
    border: 1px solid #ececec;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
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
      padding: 10px;
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
          margin-right: 2px;
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
