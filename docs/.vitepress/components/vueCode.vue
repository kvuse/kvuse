<template>
  <div class="vue-code">
    <div class="vue-component">
      <slot></slot>
    </div>
    <el-collapse-transition>
      <div class="pre-code" v-if="showCode">
        <div class="code-html" ref="code">
          <div class="code-explain" v-if="$slots.explain">
            <slot name="explain"></slot>
          </div>
          <slot name="code"></slot>
        </div>
      </div>
    </el-collapse-transition>
    <div @click="clickHandler" class="block-control">
      <details>
        <summary class="summary-style">
          {{ showCode ? "隐藏代码" : "查看代码" }}
        </summary>
      </details>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import MarkdownIt from "markdown-it";

  const props = defineProps({
    md: { type: Boolean, default: false },
  });
  const showCode = ref(false);

  const localMD = MarkdownIt();
  const code = ref(null);
  onMounted(() => {
    if (code.value) {
      const text = code.value.textContent;
      let code = localMD.render(text);
      code.value.innerHTML = code;
    }
  });

  const clickHandler = () => {
    showCode.value = !showCode.value;
  };
</script>

<style lang="scss" scoped>
  .vue-code {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    margin-top: 20px;

    .vue-component {
      padding: 20px;
    }

    .pre-code {
      width: 100%;
      background: #f5f7fb;

      .code-html {
        padding: 20px;

        .code-explain {
          padding: 15px 20px;
          border: 1px solid #ebebeb;
          border-radius: 3px;
          background: #fff;
        }

        .language-html {
          margin: 0;
          padding: 0 !important;
        }
      }
    }

    .block-control {
      text-align: center;
      border-top: 1px solid #eaeefb;
    }
    .summary-style {
      color: #909399;
      &:hover {
        color: #409eff;
      }
    }
  }
</style>
