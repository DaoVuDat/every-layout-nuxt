<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Cluster</h1>
    <hr/>
    <div>
      <span class="section-label">Basic</span>
      <cluster-l>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
        <button>Button 5</button>
        <button>Button 6</button>
        <button>Button 7</button>
        <button>Button 8</button>
        <button>Button 9</button>
        <button>Button 10</button>
      </cluster-l>
    </div>
    <hr/>
    <div>
      <span class="section-label">List</span>
      <cluster-l role="list">
        <div role="listitem">Item 1</div>
        <div role="listitem">Item 2</div>
        <div role="listitem">Item 3</div>
        <div role="listitem">Item 4</div>
      </cluster-l>
    </div>
  </div>
</template>

<style>
.container {
  max-inline-size: 50%;
}

.section-label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1em;
}
</style>
