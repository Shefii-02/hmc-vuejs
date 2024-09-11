<template>
    <div>
        <p>DEPARTMENT for {{ id }}</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>