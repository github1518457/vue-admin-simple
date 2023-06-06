<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <RootNav :list="navList" />
    <!-- <VmMenu :list="data"></VmMenu> -->
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// import VmMenu from './menu.vue';

defineProps({
  collapsed: Boolean
});

const navList = ref([
  {
    key: '1',
    pid: 0,
    title: 'Navigation 1'
  },
  {
    key: '2',
    pid: 0,
    title: 'Navigation 2',
    children: [
      { key: '2-1', title: 'Option 2-1' },
      {
        key: '2-2',
        title: 'Option 2-2',
        children: [
          { key: '2-2-1', title: 'Option 2-2-1' },
          { key: '2-2-2', title: 'Option 2-2-2' }
        ]
      },
      { key: '2-3', title: 'Option 2-3' }
    ]
  },
  {
    key: '3',
    pid: 0,
    title: 'Navigation 3'
  }
] as any[]);
</script>

<style scoped>
.ant-layout-sider {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.logo {
  height: 32px;
  background: gainsboro;
  margin: 16px;
}
</style>