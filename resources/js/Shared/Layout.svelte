<script>
  import Link from './Link.svelte'
  export let title
  $: { document.title = title }
</script>

<div class="max-w-md mx-auto">
  <nav class="py-6 mb-6 border-b">
    <Link class="mr-4" href="/">Home</Link>
    <Link class="mr-4" href="/about">About</Link>
    <Link class="mr-4" href="/contact">Contact</Link>
  </nav>

  <slot/>
</div>
