<script lang="ts">
  export let movieList: string[] = []
</script>

<ul>
  {#each movieList as movie}
    <li>{movie}</li>
  {/each}
</ul>
