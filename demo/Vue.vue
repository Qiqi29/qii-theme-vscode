<template>
    <div :class="Class" :style="Style">
        <p>{{ name }}</p>
    </div>
</template>

<script setup>
import { computed, CSSProperties } from 'vue'
import { Props } from './'
import { useNameSpace } from '@qii-ui/hooks'

defineOptions({
    name: 'q-',
    inheritAttrs: true,
})

const props = defineProps({ ...Props })

const ns = useNameSpace('')
const Class = computed(() => [
    ns.nameSpace,
])

const Style = computed<CSSProperties>(() => ({
    background: '',
}))
</script>

<style lang="scss" scoped>
@use '@qii-ui/styles/index.scss' as *;
.q-demo {
    width: 100%;
    height: 100%;
}
</style>