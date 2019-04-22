<script>
  import Link from './Link.svelte'
  export let name
</script>

<h1>Home</h1>
<p>Welcome home, { name }</p>
<p>Go to <Link href="/about">about</Link> page.</p>
