<script setup>
import { ref } from 'vue'

const text = ref('hello world')

const count = ref(0)
console.log(count)

// 点击事件
const handleClick = () => {
    count.value++
}

</script>

<template>
    <div class="vueTest">
        <p>{{ text }}</p>
        <p @click="handleClick">{{ count }}</p>
        
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 100px;
    color: #FFFFFF;
}
</style>