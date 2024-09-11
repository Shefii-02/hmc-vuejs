<template>
    <div>
        <p>DEPARTMENT for {{ name }}</p>
    </div>
</template>

<script setup>
    const { name } = useRoute().params
</script>

<style lang="scss" scoped>

</style>