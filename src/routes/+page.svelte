<script lang="ts">
  let name = 'World'
</script>

<h1>Hello {name}!</h1>

<input type="text" bind:value={name} />
<button on:click={() => (name = 'World')}>초기화</button>

<style>
  h1 {
    color: cadetblue;
  }
</style>
