<template>
  <div class="kv-status">
    <div class="error-type flex-center">
      <slot name="image">
        <div class="status-svg">
          <img :src="imgUrl">
        </div>
      </slot>
    </div>
    <div class="mt20 flex-center font-size16 status-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KvStatus',
  props: {
    type: { type: String, default: 'data' },
  },
  setup(props) {
    const imgUrl = computed(() => new URL(`./svgs/${props.type}.svg`, import.meta.url).href);

    return { imgUrl };
  },
});

</script>

<style lang="scss" scoped>
.kv-status {
  width: 100%;
  height: 100%;

  .error-type {
    width: 100%;
    padding-top: 90px;

    .status-svg {
      width: 100%;
      margin-bottom: -100px;
    }
  }
}
</style>
