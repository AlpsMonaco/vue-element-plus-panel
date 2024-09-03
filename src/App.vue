<template>
  <el-container>
    <el-aside width="200px">
      <h5 class="mb-2">Default colors</h5>
      <el-menu default-active="calendar" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
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

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
