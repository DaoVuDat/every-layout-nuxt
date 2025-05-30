<script setup lang="ts">

</script>

<template>
    <h1>Stack</h1>
    <hr />
    <div>
        <span class="section-label">Basic</span>
        <stack-l>
            <h2>Basic Example</h2>
            <img
                class="w-40 h-20"
                src="data:image/svg+xml,%3Csvg width='80' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='40' fill='%23bada55'/%3E%3Ctext x='40' y='25' font-size='14' text-anchor='middle' fill='black'%3ESVG%3C/text%3E%3C/svg%3E" />
            <p>This is a basic stack layout example.</p>
        </stack-l>
    </div>
    <hr />
    <div>
        <span class="section-label">Nested</span>
        <stack-l space="3rem">
            <h2>First Heading</h2>
            <stack-l space="1.5rem">
                <p>First nested paragraph.</p>
                <p>Second nested paragraph.</p>
                <p>Third nested paragraph.</p>
            </stack-l>
            <h2>Second Heading</h2>
            <stack-l space="1.5rem">
                <p>Fourth nested paragraph.</p>
                <p>Fifth nested paragraph.</p>
                <p>Sixth nested paragraph.</p>
            </stack-l>
        </stack-l>
    </div>
    <hr />
    <div>
        <span class="section-label">Recursive</span>
        <stack-l recursive>
            <div>First level child</div>
            <div>First level sibling</div>
            <div>
                <div>Second level child</div>
                <div>Second level sibling</div>
            </div>
        </stack-l>
    </div>
    <hr />
    <div>
        <span class="section-label">List semantics</span>
        <stack-l role="list">
            <div role="listitem">Item 1: List content goes here.</div>
            <div role="listitem">Item 2: More list content.</div>
            <div role="listitem">Item 3: Even more list content.</div>
        </stack-l>
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