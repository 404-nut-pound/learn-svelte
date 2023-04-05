<script lang="ts">
  export let data: any
</script>

<ul>
  {#each data.actorList as actor}
    <li>{actor}</li>
  {/each}
</ul>

<a href="/">홈</a>
