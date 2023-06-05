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

const navList = [
  {
    key: '1',
    title: '一级导航 1'
  },
  {
    key: '2',
    title: '一级导航 2',
    children: [
      { key: '2-1', title: '二级导航 2-1' },
      {
        key: '2-2',
        title: '二级导航 2-2',
        children: [
          { key: '2-2-1', title: '三级导航 2-2-1' },
          { key: '2-2-2', title: '三级导航 2-2-2' }
        ]
      },
      { key: '2-3', title: '二级导航 2-3' }
    ]
  },
  {
    key: '3',
    title: '一级导航 3'
  }
];

// const list: any = [
//   {
//     key: '1',
//     title: 'Option 1'
//   },
//   {
//     key: '2',
//     title: 'Navigation One',
//     children: [
//       {
//         key: '2.1',
//         title: 'Option 2'
//       }
//     ]
//   },
//   {
//     key: '3',
//     title: 'Navigation Two',
//     children: [
//       {
//         key: '3.1',
//         title: 'SubMenu',
//         children: [{ key: '3.1.1', title: 'Option 3.1.1' }]
//       }
//     ]
//   }
// ];
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