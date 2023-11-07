<template>
  <div class="k-tree">
    <template v-for="item in list" :key="item[deaultProps.id]">
      <div class="tree-item p10 flex-center" @click.stop="clickItem(item,depth)" :class="getClassName(item,depth)">
        <slot :row="item">
          <div class="flex-center flex1 tree-item-content">
            <span class="mr10">{{ item[deaultProps.name] }}</span>
            <van-icon :name="item.showChildren ? 'arrow-up' : 'arrow-down'" v-if="item[deaultProps.child]" />
          </div>
        </slot>
      </div>
      <template v-if="item.showChildren && item[deaultProps.child]">
        <kv-tree v-model="item[deaultProps.child]" :props="deaultProps" :theme="theme" :depth="depth + 1" @click="clickChild" />
      </template>
    </template>
  </div>
</template>

<script>
import {
  defineComponent, ref, computed,
} from 'vue';
import { Icon as VanIcon } from 'vant';

export default defineComponent({
  name: 'KvTree',
  components: { VanIcon },
  props: {
    modelValue: { type: Array, default: () => [] },
    depth: { type: Number, default: 0 },
    props: { type: Object, default: () => ({ }) },
    theme: { type: String, default: '#f4364c' },
    select: { type: [String, Number], default: '' },
  },
  emits: ['update:modelValue', 'update:select', 'click', 'change'],
  setup(props, { emit }) {
    const list = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const deaultProps = computed(() => ({
      name: 'name', id: 'id', child: 'child', disabled: 'disabled', ...props.props,
    }));

    const setTypeList = (listArr) => {
      listArr.forEach((item) => {
        item.showChildren = false;
        if (item[deaultProps.value.child]) setTypeList(item[deaultProps.value.child]);
      });
      return listArr;
    };

    const currentId = ref(props.select);

    const clickItem = (item) => {
      if (item[deaultProps.value.disabled]) return;
      if (!(item[deaultProps.value.child] && item.showChildren)) list.value = setTypeList(list.value);
      item.showChildren = !item.showChildren;
      currentId.value = item[deaultProps.value.id];
      clickChild(item);
    };

    const clickChild = (item) => {
      emit('update:select', item[deaultProps.value.id]);
      emit('change', item);
      emit('click', item);
    };

    const getClassName = (item, depth) => {
      if (item.disabled) return 'not-allowed';
      if (item[deaultProps.value.id] === currentId.value) {
        const listMap = {
          0: 'first-depth c-white', 1: 'second-depth c-white', 2: 'third-depth c-white',
        };
        return listMap[depth];
      }
      return '';
    };

    const themecolor = computed(() => props.theme);

    return {
      list, clickItem, clickChild, getClassName, themecolor, deaultProps,
    };
  },
});
</script>

<style lang="scss" scoped>
.iconfont {
  font-size: 13px;
  color: #4e5969;
}

.tree-item:not(.c-white) {
  &:hover {
    background: var(--van-sidebar-background);
  }
}

.first-depth {
  background: v-bind(themecolor);
}

.second-depth {
  background: v-bind(themecolor);
  opacity: 0.6;
}

.third-depth {
  background: v-bind(themecolor);
  opacity: 0.4;
}

.not-allowed {
  opacity: 0.3;
}

.bg-fixed {
  background: #feebed;
}

.bg-fixed,
.bg-red,
.c-white {
  .iconfont {
    color: #fff;
  }
}
</style>
