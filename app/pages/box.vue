<script setup lang="ts">

</script>

<template>
  <h1>Box</h1>
  <hr/>
  <div>
    <span class="section-label">Basic</span>
    <box-l>
      Contents of a box.
    </box-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">A Box within a Stack</span>
    <stack-l>
      <p>...</p>
      <blockquote>...</blockquote>
      <box-l>
        <p>This is a box inside a stack. It is separated from other elements by vertical margins, making it visually distinct.</p>
      </box-l>
      <p>...</p>
      <div role="figure">...</div>
    </stack-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Box with a header</span>
    <box-l padding="0">
      <box-l borderWidth="0" invert>head</box-l>
      <box-l borderWidth="0">body</box-l>
    </box-l>
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
