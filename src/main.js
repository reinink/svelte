import Inertia from './Inertia.svelte'

import Home from './Home.svelte'
import About from './About.svelte'
import Contact from './Contact.svelte'

let App = document.getElementById('app')

export default new Inertia({
  target: App,
  props: {
    initialPage: JSON.parse(App.dataset.page),
    resolveComponent: (name) => {
      let pages = { Home, About, Contact }
      return pages[name]
    },
  }
})
