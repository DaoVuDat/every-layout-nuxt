<script setup lang="ts">

</script>

<template>
  <h1>Reel</h1>
  <hr/>
  <div>
    <span class="section-label">Card slider</span>
    <reel-l itemWidth="20rem">
      <box-l>
        <stack-l>
          <img src="~/assets/images/unsplash.jpg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title</h3>
          <p>This is a description for the card. It demonstrates how content can be stacked inside a card slider.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <box-l>
        <stack-l>
          <img src="~/assets/images/undraw_1.svg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title</h3>
          <p>This is a description for the card. It demonstrates how content can be stacked inside a card slider.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <box-l>
        <stack-l>
          <img src="~/assets/images/unsplash.jpg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title</h3>
          <p>This is a description for the card. It demonstrates how content can be stacked inside a card slider.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <!-- ad infinitum -->
    </reel-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Slidable links</span>
    <reel-l role="list" noBar>
      <div role="listitem">
        <a class="cta" href="/path/to/home">Home</a>
      </div>
      <div role="listitem">
        <a class="cta" href="/path/to/about">About</a>
      </div>
      <div role="listitem">
        <a class="cta" href="/path/to/pricing">Pricing</a>
      </div>
      <div role="listitem">
        <a class="cta" href="/path/to/docs">Documentation</a>
      </div>
      <div role="listitem">
        <a class="cta" href="/path/to/testimonials">Testimonials</a>
      </div>
    </reel-l>
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
