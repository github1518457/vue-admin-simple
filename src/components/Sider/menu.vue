<!-- eslint-disable vue/valid-v-for -->
<template>
  <ul class="vm-tree">
    <template v-for="item in list" :key="item.key">
      <li
        v-if="item.children && item.children.length"
        @click="handleKeys(item)"
        class="vm-tree-item"
      >
        <div class="vm-flex">
          <div>
            <span><AppstoreOutlined /></span>
            <span class="vm-title">{{ item.title }}</span>
          </div>
          <div>
            <span v-if="handleOpen(item.key)"> <CaretDownOutlined /></span>
            <span v-else> <CaretUpOutlined /></span>
          </div>
        </div>
      </li>
      <li v-else class="vm-tree-item">
        <div class="vm-tree-child">
          <span :style="{ opacity: item.pid === 0 ? 1 : 0 }"><AppstoreOutlined /> </span>
          <span class="vm-title">{{ item.title }}</span>
        </div>
      </li>
      <RootNav v-if="'children' in item" :list="item.children" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  CaretUpOutlined,
  CaretDownOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PieChartOutlined,
  MailOutlined,
  AppstoreOutlined
} from '@ant-design/icons-vue';
interface Props {
  list: any;
}
const expandedKeys = ref<string[]>([]);

const props = defineProps<Props>();
const handleKeys = (item: any) => {
  console.log('item', item);
  if (item.children && item.children.length) {
    const index = expandedKeys.value.indexOf(item.key);
    if (index > -1) {
      // 如果当前节点id存在数组中，则删除
      expandedKeys.value.splice(index, 1);
    } else {
      // 如果当前节点id不存在数组中，则添加
      expandedKeys.value.push(item.key);
    }
  }
  console.log('expandedKeys', expandedKeys.value);
};
const handleOpen = (key: any) => {
  return expandedKeys.value.includes(key);
};
const openKeys = ref<string[]>(['2']);
const selectedKeys = ref<string[]>(['1']);
</script>
<style scoped>
/* .vm-tree {
  padding-left: 10px;
} */
/* .vm-tree {
  padding-left: 10px;
  border: 1px solid red;
} */
/* .vm-tree-item {
  border: 1px solid #000;
  padding: 0 0 0 10px;
  line-height: 45px;
}
.vm-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.vm-tree-child {
  padding: 0 10px;
}
.vm-icon {
  margin-right: 5px;
}
.vm-title {
  margin-left: 5px;
} 
/* .vm-sp {
  display: inline-block;
} */
.vm-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.vm-tree-child {
  padding: 0 10px;
}

.vm-title {
  display: inline-block;
  margin-left: 5px;
}
.vm-outlined {
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}
</style>