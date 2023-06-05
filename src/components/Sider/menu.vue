<!-- eslint-disable vue/valid-v-for -->
<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    theme="light"
    mode="inline"
  >
    <template v-for="item in list" :key="item.key">
      <a-sub-menu v-if="item.children && item.children.length" :key="item.key">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>222</template>

        <a-menu-item v-for="child in item.children" :key="child.key">111</a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="item.key">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>333 </span>
      </a-menu-item>
      <!-- <RootNav :list="item.children" /> -->
      <!-- <a-sub-menu v-if="item.children && item.children.length" :key="item.key">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>{{ item.title }}</template>
        <a-menu-item key="6">{{ item.title }}</a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else :key="item.key">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>{{ item.title }} </span>
      </a-menu-item>
      <SubMenu :list="item.children"></SubMenu> -->
    </template>
  </a-menu>
  <!-- <ul class="tree">
    <template v-for="item in list">
      <li v-if="item.children && item.children.length" class="tree">{{ item.title }}</li>
      <li v-else class="tree">{{ item.title }}</li>
      <RootNav v-if="'children' in item" :list="item.children" />
    </template>
  </ul> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
// const props = defineProps({
//   list: {
//     type: Array,
//     default: () => []
//   }
// });
const openKeys = ref<string[]>(['2']);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
.tree {
  margin-left: 10px;
}
</style>