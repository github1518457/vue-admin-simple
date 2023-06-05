<template>
  <a-layout-header
    ><MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="handleCollapsed" />
    <MenuFoldOutlined v-else class="trigger" @click="handleCollapsed"
  /></a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
const collapsed = ref<boolean>(false);
const emit = defineEmits(['handleCollapsed']);
const handleCollapsed = () => {
  collapsed.value = !collapsed.value;
  emit('handleCollapsed', collapsed.value);
};
</script>

<style scoped>
.ant-layout-header {
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
.trigger:hover {
  color: #1890ff;
}
</style>