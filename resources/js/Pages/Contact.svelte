<script>
  import Inertia from 'inertia'
  import Layout from '../Shared/Layout.svelte'
  export let errors

  let form = { name: null }
</script>

<Layout title="Contact">
  <h1>Contact</h1>
  <form class="mt-6" on:submit|preventDefault={ () => Inertia.post('/contact', form) }>
    <div><label>Name:</label></div>
    <div><input class="mt-2 border" bind:value={ form.name }></div>
    {#if errors.name}
      <div class="mt-2 text-red text-sm" class:hidden={!errors.name}>{ errors.name }</div>
    {/if}
    <button class="mt-6 bg-indigo text-white py-2 px-6 rounded" type="submit">Submit</button>
  </form>
</Layout>
