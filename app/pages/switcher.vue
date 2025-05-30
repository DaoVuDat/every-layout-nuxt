<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Switcher</h1>
    <hr/>
    <div>
      <span class="section-label">Threshold</span>
      <!-- Threshold = 50 rem => for instance, 16px * 50 = 800px, if the viewport < 800px, it switches to vertical     -->
      <switcher-l threshold="50rem">
        <p>This is a media object layout. The image is placed to the side, and this text accompanies the image, providing
          additional information or description.</p>
        <p>This is a media object layout. The image is placed to the side, and this text accompanies the image, providing
          additional information or description.</p>
        <p>This is a media object layout. The image is placed to the side, and this text accompanies the image, providing
          additional information or description.</p>
        <p>This is a media object layout. The image is placed to the side, and this text accompanies the image, providing
          additional information or description.</p>
      </switcher-l>
    </div>
    <hr/>
    <div>
      <span class="section-label">Space</span>
      <switcher-l space="var(--s5)">
        <p>This is a switched media object. The image is now on the right, and this text is on the left, demonstrating the
          flexibility of the sidebar layout.</p>
        <p>This is a switched media object. The image is now on the right, and this text is on the left, demonstrating the
          flexibility of the sidebar layout.</p>
        <p>This is a switched media object. The image is now on the right, and this text is on the left, demonstrating the
          flexibility of the sidebar layout.</p>
        <p>This is a switched media object. The image is now on the right, and this text is on the left, demonstrating the
          flexibility of the sidebar layout.</p>
      </switcher-l>
    </div>
    <hr/>
    <div>
      <span class="section-label">Limit</span>
      <switcher-l limit="3">
        <p>Content 1</p>
        <p>Content 1</p>
        <p>Content 1</p>
        <p>Content 1</p>
      </switcher-l>
    </div>
  </div>
</template>

<style>
.container {
  max-inline-size: 100%;
}

.section-label {
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.1em;
}
</style>
