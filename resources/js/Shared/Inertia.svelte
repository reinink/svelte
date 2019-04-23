<script>
  import Inertia from 'inertia'
  export let initialPage, resolveComponent

  let page = null
  let props = null

  Inertia.init(initialPage, (newPage) => {
    return Promise.resolve(resolveComponent(newPage.component)).then(instance => {
      page = instance
      props = newPage.props
    })
  })
</script>

<svelte:component this={page} {...props} />
