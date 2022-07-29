<template>
  <div class="full-size-image">
    <div class="bg" @click="closeFullSize"/>
    <v-icon @click="closeFullSize">mdi-close</v-icon>
    <div class="image-block">
      <img :src="fullSizeImage.url" alt="">
      <span>{{fullSizeImage.id + 1}} of {{photosCount}}</span>
    </div>
  </div>
</template>

<script src="./FullSizeImage.js"/>
<style scoped lang="scss" src="./FullSizeImage.scss"/>