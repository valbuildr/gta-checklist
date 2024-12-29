<script lang="ts">
  import {
    ivCharacters,
    ivDealEndingMissions,
    ivMissions,
    ivOptionalMissions,
    ivRevengeEndingMissions,
  } from "$lib/data/iv";
  import { Button } from "flowbite-svelte";
  import { get } from "svelte/store";
  import { ivCompletedMissions } from "$lib/stores";

  let checklist = $state({});

  let stored = get(ivCompletedMissions);

  stored.forEach((value) => {
    checklist[value] = true;
  });

  const setCookie = () => {
    let setTo: any = [];
    Object.entries(checklist).forEach((value) => {
      if (value[1]) {
        setTo.push(value[0]);
      }
    });
    ivCompletedMissions.set(setTo);
  };

  const clearCookie = () => {
    ivCompletedMissions.reset();
    window.location.reload();
  };
</script>

<div class="p-2 border border-yellow-300">
  <span class="font-bold"
    >This website uses cookies, but not the ones that track you.</span
  >
  To clear all cookies related to GTA IV mission completion,
  <a href="#clear" class="hover:underline">scroll to the bottom of this page</a
  >. To clear all cookies used on this website,
  <a href="/cookies#clear" class="hover:underline">click here</a>.
</div>

<h2 class="text-2xl mb-1 font-bold">Required Missions</h2>

{#each Object.entries(ivMissions) as mission}
  <div class="flex gap-2 mb-1 items-center">
    <input
      type="checkbox"
      bind:checked={checklist[mission[0]]}
      id={mission[0]}
      onchange={setCookie}
    />
    <label for={mission[0]} class="flex gap-2 mb-1 items-center">
      <p
        class="px-2 font-mono font-bold bg-black"
        style="color: {mission[1].character.color}"
        title={mission[1].character.name}
      >
        {mission[1].character.initial}
      </p>
      <p>{mission[1].name}</p>
    </label>
  </div>
{/each}

<hr class="my-2 border-black" />

<h2 class="text-2xl mb-1 font-bold">Finale</h2>

<h3 class="text-xl mb-1 font-bold">Deal Ending</h3>

{#each Object.entries(ivDealEndingMissions) as mission}
  <div class="flex gap-2 mb-1 items-center">
    <input
      type="checkbox"
      bind:checked={checklist[mission[0]]}
      id={mission[0]}
      onchange={setCookie}
    />
    <label for={mission[0]} class="flex gap-2 mb-1 items-center">
      <span
        class="px-2 font-mono font-bold bg-black"
        style="color: {mission[1].character.color}"
        title={mission[1].character.name}
      >
        {mission[1].character.initial}
      </span>
      <span>{mission[1].name}</span>
    </label>
  </div>
{/each}

<h3 class="text-xl mb-1 font-bold">Revenge Ending</h3>

{#each Object.entries(ivRevengeEndingMissions) as mission}
  <div class="flex gap-2 mb-1 items-center">
    <input
      type="checkbox"
      bind:checked={checklist[mission[0]]}
      id={mission[0]}
      onchange={setCookie}
    />
    <label for={mission[0]} class="flex gap-2 mb-1 items-center">
      <span
        class="px-2 font-mono font-bold bg-black"
        style="color: {mission[1].character.color}"
        title={mission[1].character.name}
      >
        {mission[1].character.initial}
      </span>
      <span>{mission[1].name}</span>
    </label>
  </div>
{/each}

<hr class="my-2 border-black" />

<h2 class="text-2xl mb-1 font-bold">Optional Missions</h2>

{#each Object.entries(ivOptionalMissions) as mission}
  <div class="flex gap-2 mb-1 items-center">
    <input
      type="checkbox"
      bind:checked={checklist[mission[0]]}
      id={mission[0]}
      onchange={setCookie}
    />
    <label for={mission[0]} class="flex gap-2 mb-1 items-center">
      <span
        class="px-2 font-mono font-bold bg-black"
        style="color: {mission[1].character.color}"
        title={mission[1].character.name}
      >
        {mission[1].character.initial}
      </span>
      <span>{mission[1].name}</span>
    </label>
  </div>
{/each}

<hr class="my-2 border-black" />

<!-- <Button
  onclick={() => {
    console.log(checklist);
  }}
  class="bg-700 mt-4"
>
  debug log
</Button> -->

<Button onclick={clearCookie} class="bg-700 my-4" id="clear">Clear</Button>

<hr class="my-2 border-black" />

<p>
  You've reached the bottom. Click <a href="#top" class="hover:underline"
    >here</a
  > to go back to the top.
</p>
