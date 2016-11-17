import Vue from 'vue'
import Component from 'src/components/widgets/CounterInfo'

var listSample = ['item', 'item', 'item']
var resultNeeded = [listSample.length, 'found'].join(' ')

describe('CounterInfo.vue', () => {
  it('should render counter info with "' + resultNeeded + '" content', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Component, {
        props: {
          list: listSample
        }
      })
    })
    expect(vm.$el.querySelector('span').textContent).to.equal(resultNeeded)
  })
})
