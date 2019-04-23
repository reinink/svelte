<script>
  import Layout from '../Shared/Layout.svelte'
  export let name
</script>

<Layout title="Home">
  <h1>Home</h1>
  <p class="mt-6">Welcome home, { name }</p>
</Layout>
