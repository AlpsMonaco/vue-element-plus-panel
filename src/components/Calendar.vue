<template>
    <el-calendar v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const value = ref(new Date())
const router = useRouter()
const clickMe = function () {
    console.log(router)
    router.push('/table')
}
</script>