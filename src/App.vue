<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-active="activateIndex" router>
        <el-menu-item index="calendar">
          <el-icon><icon-menu /></el-icon>
          <span>Calendar</span>
        </el-menu-item>
        <el-menu-item index="table">
          <el-icon>
            <setting />
          </el-icon>
          <span>Table</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<script setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';
const activateIndex = ref('calendar')

onMounted(() => {
  const path = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
  if (path)
    activateIndex.value = path
})

</script>

<style scoped>
.el-menu-item {
  font-size: 15px;
}
</style>