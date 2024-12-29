<script lang="ts">
  import { Button } from "flowbite-svelte";
  import { ivCompletedMissions } from "$lib/stores";

  const clearCookies = () => {
    ivCompletedMissions.reset();
  };
</script>

<h2 class="text-2xl mb-1 font-bold">Cookie Policy</h2>

<p>
  <span class="font-bold"
    >This website uses cookies, but not the ones that track you.</span
  > Thats it. If you want to clear all of your cookies for this website click that
  button down there.
</p>

<hr class="my-2 border-black" />

<Button onclick={clearCookies} class="bg-700 my-4" id="clear"
  >Clear all cookies</Button
>
