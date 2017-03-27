const css = require('./assets/base.css')

const components = [
  {
    name: 'Colors',
    description: 'These are the standard colors used.',
    component: require('./templates/ui-library/color.js')()
  }
]

const html = require('./templates/ui-library')({
  components: components
})

if (!module.parent) {
  if (typeof document !== 'undefined') {
    document.getElementById('root').innerHTML = html
  }
  else {
    console.log(html)
  }
}

if (module.hot) {
  module.hot.accept()
}

module.exports = html
