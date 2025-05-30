<script setup lang="ts">

</script>

<template>
  <h1>Icon</h1>
  <hr/>
  <div class="text-xl">
    <span class="section-label">Button with icon and accompanying text</span>
    <button>
      <icon-l space="0.15em">
        <svg fill="currentColor">
          <use href="/icons.svg#gridicons-cross" />
        </svg>
        Close
      </icon-l>
    </button>
  </div>
  <hr/>
  <div>
    <span class="section-label">Button with just an icon</span>
    <button>
      <icon-l label="Close">
        <svg fill="currentColor">
          <use href="/icons.svg#gridicons-cross" />
        </svg>
      </icon-l>
    </button>
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
