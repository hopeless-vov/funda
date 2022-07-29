<template>
  <div class="image-gallery">
    <div
      v-for="(photo, index) in photos"
      :key="photo.index"
      class="gallery-item-wrapper"
      @click="openFullSize(photo, index)">
      <div class="galery-item">
        <img :src="photo" :alt="'photo' + index">
      </div>
    </div>
  </div>
</template>

<script src="./ImageGallery.js"/>
<style scoped lang="scss" src="./ImageGallery.scss"/>