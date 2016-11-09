import Vue from 'vue'
import Jumbotron from 'src/components/Jumbotron'

describe('Jumbotron.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Jumbotron)
    })
    expect(vm.$el.querySelector('.jumbotron h1').textContent)
      .to.equal('Welcome to Your Vue.js 2.0 application')
  })
})
