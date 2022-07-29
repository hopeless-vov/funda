<template>
  <div class="house-information">
    <div class="short-info">
      <span class="price">{{formatedPrice}}</span>
      <span class="location">{{house.house_info.address}}</span>
      <div class="actions">
        <button>Request a tour</button>
        <button>Contact agent</button>
      </div>
    </div>
    <FullInfo
      :house="house"/>
  </div>
</template>

<script src="./HouseInforamation.js"/>
<style scoped lang="scss" src="./HouseInforamation.scss"/>