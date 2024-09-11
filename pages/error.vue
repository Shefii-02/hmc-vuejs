<template>
    <div class="mt-5 mx-auto text-center card">
        <h1 class="mt-5 fw-bold">{{ error.statusCode }}</h1>
        <p class="mt-5  text-normal">Ooops!..</p>
        <p>{{ error.message }}</p>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style lang="scss" scoped>

</style>