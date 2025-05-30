<script setup lang="ts">

</script>

<template>
  <h1>Sidebar</h1>
  <hr/>
  <div>
    <span class="section-label">Media object</span>
    <sidebar-l space="var(--s2)" sideWidth="15rem" noStretch>
      <div>
        <img src="~/assets/images/unsplash.jpg" alt="Description of image"/>
      </div>

      <p>This is a media object layout. The image is placed to the side, and this text accompanies the image, providing
        additional information or description.</p>
    </sidebar-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Switched media object</span>
    <sidebar-l space="var(--s2)" side="right" sideWidth="30ch">
      <div>
        <img src="~/assets/images/undraw_1.svg" alt="Description of image"/>
      </div>
      <p>This is a switched media object. The image is now on the right, and this text is on the left, demonstrating the
        flexibility of the sidebar layout.</p>
    </sidebar-l>
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
