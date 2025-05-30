<script setup lang="ts">

</script>

<template>
  <h1>Frame</h1>
  <hr/>
  <div>
    <span class="section-label">Image frame</span>
    <!-- We have to specify width ( not height, since the height is calculated by width and aspect ratio )   -->
    <!-- In the below example, we setup specific width, but we must use width from parent element in real cases -->
    <div class="w-56">
      <frame-l ratio="1:1">
        <img src="~/assets/images/unsplash.jpg" alt="description of the image here"/>
      </frame-l>
    </div>
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
