<script>
import Inertia from 'inertia'
</script>

<a href="{$$props.href}" class={$$props.class} on:click|preventDefault={ () => Inertia.visit($$props.href) }>
  <slot/>
</a>
