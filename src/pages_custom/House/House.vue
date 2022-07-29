<template>
  <div
    class="house"
    :style="`height: ${windowResize}`">
    <Carousel
      :photos="imagesUrl"
      @showFullSize="showFullSize"/>
    <Gallery
      :photos="imagesUrl"
      @showFullSize="showFullSize"/>
    <FullSizeImage
      v-if="fullSize"
      :photosCount="imagesUrl.length"
      :fullSizeImage="fullSizeImage"
      @closeFullSize="closeFullSize"/>
    <HouseInforamation
      v-if="house"
      :house="house"/>
  </div>
</template>

<script src="./House.js"/>
<style scoped lang="scss" src="./House.scss"/>