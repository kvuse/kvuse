<template>
  <div class="vue-code">
    <div class="vue-component">
      <component :is="comp" />
    </div>
    <el-collapse-transition>
      <div class="pre-code" v-if="showCode">
        <div class="code-html" ref="code">
          <div class="code-explain" v-if="$slots.explain || explain">
            <slot name="explain">
              {{ explain }}
            </slot>
          </div>
          <slot />
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
import { ref, onMounted, defineAsyncComponent } from 'vue';
import MarkdownIt from 'markdown-it';

/**
   * @param {boolean} md 是否是md
   * @param {string} src 组件的路径
   * @param {string} explain 解释说明
   */
const props = defineProps({
  md: { type: Boolean, default: false },
  src: { type: String, default: '' },
  explain: { type: String, default: '' },
});

// 组件
const comp = defineAsyncComponent(() => {
  const [folder, file] = props.src.split('/');
  return import(`../../example/${folder}/${file}.vue`);
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
