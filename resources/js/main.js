import Inertia from './Shared/Inertia.svelte'

import Home from './Pages/Home.svelte'
import About from './Pages/About.svelte'
import Contact from './Pages/Contact.svelte'

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
