<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  const user = writable<string>()
  $: user.set('USER NAME!')

  setContext('user', user)
</script>

<a href="/actor">영화 배우</a>

<slot />
