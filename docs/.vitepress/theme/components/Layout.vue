<template>
  <client-only>
    <Layout>
      <template #aside-outline-before>
        Contents
      </template>
    </Layout>
  </client-only>
</template>

<script setup>
// eslint-disable-next-line import/no-unresolved
import DefaultTheme from 'vitepress/theme';
// import { useData } from 'vitepress';

// console.log('useData: ', useData().theme.value.sidebar, useData());

const { Layout } = DefaultTheme;
</script>
