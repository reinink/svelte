<script>
  import Home from './Home.svelte'
  import About from './About.svelte'
  import Contact from './Contact.svelte'

  export let initialPage;

  let pages = { Home, About, Contact }
  let page = pages[initialPage.component]
</script>

<svelte:component this={page} {...initialPage.props} />
