<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

<div>
  <nav class="p-2 max-w-screen-xl mx-auto flex flex-wrap justify-between">
    <a href="/" class="p-2 bg-300 font-bold font-mono">
      gta-checklist.valbuilds.xyz
    </a>
  </nav>
  <div class="max-w-screen-xl mx-auto p-2">
    {@render children()}
  </div>
</div>
