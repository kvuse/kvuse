<template>
  <div class="vue-code">
    <div class="vue-component">
      <component :is="comp" />
    </div>
    <div class="btn-control">
      <el-tooltip content="复制代码" placement="bottom">
        <el-button link @click="copyCode">
          <el-icon size="18">
            <CopyDocument />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip content="查看源代码" placement="bottom">
        <el-button link @click="clickHandler">
          <el-icon size="18">
            <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-65a7fb6c=""><path fill="currentColor" d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z" /></svg>
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
    <div ref="copCode" v-show="false">
      <slot />
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
    <div class="block-control" v-show="showCode" @click="clickHandler">
      <el-button link>
        <el-icon><CaretTop /></el-icon>
        <span class="mr10">隐藏代码</span>
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import MarkdownIt from 'markdown-it';
import { useClipboard } from '@vueuse/core';
import { ElMessage } from 'element-plus';

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
    const codeText = localMD.render(text);
    code.value.innerHTML = codeText;
  }
});

const clickHandler = () => {
  showCode.value = !showCode.value;
};

const { copy } = useClipboard();
const copCode = ref(null);
const copyCode = () => {
  copy(copCode.value.textContent);
  ElMessage.closeAll();
  ElMessage({ message: '已复制', type: 'success' });
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

    .btn-control {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-top: 1px solid #eaeefb;
      padding: 15px;
    }

    .block-control {
      text-align: center;
      padding: 15px;
      border-top: 1px solid #eaeefb;
    }

    .summary-style {
      color: #909399;

      &:hover {
        color: #409eff;
      }
    }
  }

  .dark {
    .pre-code {
      background-color: #0003;
    }
  }
</style>
