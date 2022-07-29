<template>
  <nav
    class="navbar"
    :class="menu ? 'active': 'hiden'">
    <a href="#" class="logo">Logo</a>
    <label for="check">
      <input v-model="menu" type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
    <div class="menu-bg" />
    <div
      class="menu">
      <ul class="list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script src="./Navbar.js"/>
<style scoped lang="scss" src="./Navbar.scss"/>