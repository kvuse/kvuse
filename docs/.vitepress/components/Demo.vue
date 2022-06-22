<template>
  <div class="example-showcase">
    <ClientOnly>
      <div>{{ description }}</div>
      <component :is="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>
<script setup>
  defineProps({
    description: {
      type: String,
    },
    path: {
      type: String,
    },
    demo: {
      type: Object,
    },
    source: {
      type: String,
    },
  });

  const decode = (str) =>
    decodeURIComponent(
      str
        .replace(/\\%2D/g, "-")
        .replace(/\\%5F/g, "_")
        .replace(/\\%2E/g, ".")
        .replace(/\\%21/g, "!")
        .replace(/\\%7E/g, "~")
        .replace(/\\%2A/g, "*")
        .replace(/\\%27/g, "'")
        .replace(/\\%28/g, "(")
        .replace(/\\%29/g, ")")
    );
</script>
<style lang="scss" scoped>
  .example-showcase {
    margin: 20px 0;
    background-color: var(--bg-color);
  }
</style>
