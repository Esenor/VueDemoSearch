import Vue from 'vue'
import App from 'src/App'
import Data from 'src/data.js'
// Describe App.vue spec test
describe('App.vue', () => {
  const data = JSON.parse(Data)
  // It should get 19 sample data
  it('should get 19 sample data', () => {
    expect(data.sample.length).to.equal(19)
  })
  // It should render all sample data
  it('should render all sample data', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (container) => container(App)
    })
    expect(vm.$el.querySelectorAll('.item').length).to.equal(data.sample.length)
  })
})
