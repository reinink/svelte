<script>
import Inertia, { shouldIntercept } from 'inertia'

export let href,
  method = 'get',
  replace = false,
  preserveScroll = false

function visit(event) {
  if (shouldIntercept(event)) {
    event.preventDefault()
    Inertia.visit(href, { method, replace, preserveScroll })
  }
}
</script>

<a href="{href}" {...$$props} on:click={visit}>
  <slot/>
</a>


