<script setup lang="ts">

</script>

<template>
  <h1>Center</h1>
  <hr/>
  <div>
    <span class="section-label">Basic</span>
    <box-l>
      <center-l>
        <stack-l>
          <h2>Welcome to the Center Layout</h2>
          <p>This content is centered horizontally using the <code>center-l</code> layout and stacked vertically using <code>stack-l</code>.</p>
          <button>Click Me</button>
        </stack-l>
      </center-l>
    </box-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Documentation layout</span>
<!--    <sidebar-l contentMin="66.666%" sideWidth="10rem">-->
<!--      <stack-l role="navigation">-->
<!--        &lt;!&ndash; navigation items (API refs) &ndash;&gt;-->
<!--      </stack-l>-->
<!--      <div>-->
<!--        <center-l role="main">-->
<!--          &lt;!&ndash; main content for the page &ndash;&gt;-->
<!--        </center-l>-->
<!--      </div>-->
<!--    </sidebar-l>-->
  </div>
  <hr/>
  <div>
    <span class="section-label">Vertical and horizontal centering</span>
<!--    <cover-l centered="center-l">-->
<!--      <center-l intrinsic>-->
<!--        <p>I am in the absolute center.</p>-->
<!--      </center-l>-->
<!--    </cover-l>-->
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
