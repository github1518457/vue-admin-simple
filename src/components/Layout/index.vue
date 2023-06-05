<template>
  <a-layout>
    <Sider :collapsed="collapsed">Sider</Sider>
    <a-layout>
      <Header @handleCollapsed="handleCollapsed"></Header>
      <a-layout-content>
        <div class="vm-main"><RouterView /></div>
      </a-layout-content>
      <Footer></Footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from '../Header/index.vue';
import Footer from '../Footer/index.vue';
import Sider from '../Sider/index.vue';

const collapsed = ref(false);

const handleCollapsed = (e) => {
  collapsed.value = e;
  //   console.log("9999", e);
};
</script>

<style scoped>
.ant-layout-content {
  min-height: calc(100vh - 157px);
  margin: 12px;
}
.vm-main {
  padding: 12px;
  background-color: #fff;
}
</style>