<template>
  <div class="youto p-3">
    <a target="_blank" :href="ytVideo.url">
      <img :src="ytVideo.image_url" width="100%" />
      <div class="play">
        <img
          class="w-100"
          src="http://cdn1.iconfinder.com/data/icons/flavour/button_play_blue.png"
        />
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  ytVideo: Object,
});
</script>

<style lang="scss" scoped>
.youto:hover .play {
  display: block;
}
.play {
  position: absolute;
  display: none;
  top: 50%;
  width: 40px;
  margin: 0 auto;
  left: 0px;
  right: 0px;
  z-index: 100;
}
</style>
