<script setup lang="ts">

</script>

<template>
  <h1>Grid</h1>
  <hr/>
  <div>
    <span class="section-label">Card</span>
    <grid-l min="calc(var(--measure) / 3)">
      <box-l>
        <stack-l>
          <img src="~/assets/images/unsplash.jpg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title 1</h3>
          <p>This is a description for card 1. It demonstrates how content can be stacked inside a card.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <box-l>
        <stack-l>
          <img src="~/assets/images/undraw_1.svg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title 2</h3>
          <p>This is a description for card 2. Cards can contain images, text, and actions.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <box-l>
        <stack-l>
          <img src="~/assets/images/unsplash.jpg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title 3</h3>
          <p>This is a description for card 3. Use cards to display grouped information.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <box-l>
        <stack-l>
          <img src="~/assets/images/undraw_1.svg" alt="Card image" style="width:100%;height:auto;border-radius:8px;" />
          <h3>Card Title 4</h3>
          <p>This is a description for card 4. Cards are flexible and reusable UI elements.</p>
          <button>Action</button>
        </stack-l>
      </box-l>
      <!-- etc -->
    </grid-l>
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
