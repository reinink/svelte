<script>
import Inertia from './Inertia.js'
export let href
</script>

<a href="{href}" on:click|preventDefault={ () => Inertia.visit(href) }>
  <slot/>
</a>
