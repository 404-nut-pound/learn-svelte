<script lang="ts">
  import Movie from './movie.svelte'

  let name = 'World'
  let movieList = ['A', 'BB', 'CCC', 'DDDD']
</script>

<h1>Hello {name}!</h1>

<input type="text" bind:value={name} />
<button on:click={() => (name = 'World')}>초기화</button>

<Movie {movieList} />

<style>
  h1 {
    color: cadetblue;
  }
</style>
