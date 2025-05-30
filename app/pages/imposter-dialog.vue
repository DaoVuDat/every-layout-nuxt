<script setup lang="ts">

</script>

<template>
  <h1>Imposter</h1>
  <hr/>
  <div>
    <span class="section-label">Dialog</span>
    <imposter-l fixed>
      <div aria-labelledby="message">
        <p id="message">It’s decision time, sunshine!</p>
        <button type="button">Yes</button>
        <button type="button">No</button>
      </div>
    </imposter-l>
  </div>
</template>

<style>
.section-label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1em;
}
</style>
