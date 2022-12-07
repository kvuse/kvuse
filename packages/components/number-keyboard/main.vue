<template>
  <div class="number-keyboard mt10">
    <ul class="number-ul">
      <li v-for="(item,index) in keyboardList" :key="index" :class="item.class">
        <el-button :type="item.type" :color="color" @click="clickHandleBtn(item)">
          {{ item.name }}
        </el-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed, nextTick } from 'vue';

import { ElButton } from 'element-plus';

export default defineComponent({
  name: 'KNumberKeyboard',
  components: { ElButton },
  props: {
    modelValue: { type: [String, Number], default: '' },
    width: { type: Number, default: 60 },
    color: { type: String, default: '' },
    maxlength: { type: [String, Number], default: 0 },
    precision: { type: Number, default: 2 },
    decimalPoint: { type: Boolean, default: false }, // 是否显示小数点
    startZero: { type: Boolean, default: true }, // 开头是否可以为零
  },
  emits: ['update:modelValue', 'change', 'clear', 'confirm'],
  setup(props, { emit }) {
    const keyboardInit = [
      { name: 7 },
      { name: 8 },
      { name: 9 },
      { name: '删除', key: 'delete' },
      { name: 4 },
      { name: 5 },
      { name: 6 },
      { name: '清空', key: 'clear' },
      { name: 1 },
      { name: 2 },
      { name: 3 },
      {
        name: '确认', key: 'confirm', class: 'confirm-class', type: 'primary',
      },
      { name: 0, class: 'zero-class' },
    ];

    const keyboardList = computed(() => {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      if (props.decimalPoint) keyboardInit.push({ name: '.' });
      return keyboardInit;
    });

    const numberVal = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const changeHanler = () => {
      nextTick(() => emit('change', numberVal.value));
    };

    const clickBtn = (name) => {
      if (props.maxlength && numberVal.value.length >= Number(props.maxlength)) return;
      // 小数点处理
      const poniterIndex = numberVal.value.indexOf('.');
      const pointerList = numberVal.value.split('.');
      // 精确度
      if (pointerList.length === 2) {
        if (name === '.') return;
        if (pointerList[1].length >= props.precision) return;
      }
      numberVal.value = `${poniterIndex === 0 ? 0 : ''}${numberVal.value}${name}`;
      // 允许开头不为0 整数 去掉0开头
      if (!props.startZero && numberVal.value.slice(0, 1) === '0') numberVal.value = numberVal.value.slice(1) + name;

      changeHanler();
    };

    const clickHandle = (type) => {
      if (type === 'delete') numberVal.value = numberVal.value.slice(0, numberVal.value.length - 1);
      else if (type === 'clear') {
        numberVal.value = '';
        emit('clear');
      }

      if (type === 'confirm') emit('confirm');
      else changeHanler();
    };

    const clickHandleBtn = ({ key, name }) => {
      if (key) clickHandle(key);
      else clickBtn(name);
    };

    const totalwidth = computed(() => `${Number((4 * props.width) + 20)}px`);
    const gridwidth = computed(() => `${props.width}px`);

    const zerogridend = computed(() => (props.decimalPoint ? 3 : 4));

    return {
      keyboardList, clickHandleBtn, clickBtn, totalwidth, gridwidth, numberVal, zerogridend,
    };
  },
});

</script>

<style lang="scss" scoped>
.number-keyboard {
  width: v-bind(totalwidth);

  .number-ul {
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(auto-fit, v-bind(gridwidth));
    grid-template-rows: repeat(4, v-bind(gridwidth));

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      // border: 1px solid $borderdivcolor;
      border-radius: 4px;
      cursor: pointer;

      .el-button {
        width: 100%;
        height: 100%;
      }
    }

    .zero-class {
      grid-column: 1;
      grid-column-end: v-bind(zerogridend);
    }

    .confirm-class {
      grid-column-start: 4;
      grid-row: 3;
      grid-row-end: 5;
    }
  }
}
</style>
