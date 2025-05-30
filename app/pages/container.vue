<script setup lang="ts">

</script>

<template>
  <h1>Container</h1>
  <hr/>
  <div>
    <span class="section-label">Unnamed container</span>
    <container-l></container-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Named container</span>
    <container-l name="myContainer"></container-l>
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
