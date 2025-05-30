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
    <sidebar-l contentMin="66.666%" sideWidth="10rem">
      <stack-l role="navigation">
        <nav>
          <ul>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#examples">Examples</a></li>
            <li><a href="#api">API Reference</a></li>
          </ul>
        </nav>
      </stack-l>
      <div>
        <center-l role="main">
          <section id="introduction">
            <h2>Introduction</h2>
            <p>This section introduces the layout and its purpose in the application.</p>
          </section>
          <section id="usage">
            <h2>Usage</h2>
            <p>Instructions and guidelines on how to use the layout components effectively.</p>
          </section>
          <section id="examples">
            <h2>Examples</h2>
            <p>Code samples and visual examples demonstrating the layout in action.</p>
          </section>
          <section id="api">
            <h2>API Reference</h2>
            <p>Detailed API documentation for the layout components.</p>
          </section>
        </center-l>
      </div>
    </sidebar-l>
  </div>
  <hr/>
  <div>
    <span class="section-label">Vertical and horizontal centering</span>
    <cover-l centered="center-l">
      <center-l intrinsic>
        <p>I am in the absolute center.</p>
      </center-l>
    </cover-l>
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
