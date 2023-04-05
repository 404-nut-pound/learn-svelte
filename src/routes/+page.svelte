<script lang="ts">
  import { getContext } from 'svelte'
  import Movie from './movie.svelte'

  const defaultUser = getContext('user')
  let userName = $defaultUser
  let movieList = ['몬티 파이튼의 성배', '아이언 맨', '올드보이']
</script>

<h1>Hello {userName}!</h1>

<input type="text" bind:value={userName} />
<button on:click={() => (userName = $defaultUser)}>초기화</button>

<Movie {movieList} />

<style>
  h1 {
    color: cadetblue;
  }
</style>
