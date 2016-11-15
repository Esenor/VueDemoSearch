import Vue from 'vue'
import Component from 'src/{%path%}/{%htmlName%}'

describe('{%htmlName%}.vue', () => {
  it('[Default test] should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Component)
    })
    expect(vm.$el.querySelector('p').textContent)
      .to.equal('{%htmlName%} component')
  })
})
