<template>
  <div class="image-carousel">
    <div
      class="image-wrapper"
      :style="`background: url(${photos[counter]});`"
      @click="openFullSize()">
      <div class="image-share">
        <v-icon>mdi-home-heart</v-icon>
        <v-icon>mdi-share</v-icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </div>
      <div class="image-actions">
        <button @click.stop="prev()"><v-icon>mdi-chevron-left</v-icon></button>
        <button @click.stop="next()"><v-icon>mdi-chevron-right</v-icon></button>
      </div>
      <div class="image-page-number">
        <span>{{counter + 1}} of {{photos.length}}</span>
      </div>
    </div>
  </div>
</template>

<script src="./ImageCarousel.js"/>
<style scoped lang="scss" src="./ImageCarousel.scss"/>