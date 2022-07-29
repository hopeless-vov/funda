<template>
  <div class="full-info">
    <div class="navigation-items">
      <div
        v-for="item in fullNavigationList"
        :key="item.id"
        class="navigation-item">
        <a :href="'#'+item.value">{{item.name}}</a>
      </div>
    </div>
    <div class="content">
      <div class="content-items">
        <div
          v-for="characteristic in house.characteristics"
          :key="characteristic.id"
          class="content-item"
          :class="characteristic.Titel.toLowerCase()">
          <div :id="characteristic.Titel.toLowerCase()" class="scroll"></div>
          <div class="title-info">
            <h2>
              {{characteristic.Titel}}
            </h2>
          </div>
          <div
            v-for="character in characteristic.Kenmerken"
            :key="character.id"
            class="element"
            :class="`${characteristic.Titel.toLowerCase()}-element`">
            <span class="title">{{character.Naam}}: </span><span v-html="character.Waarde"></span>
          </div>
        </div>

        <div class="overview content-item">
          <div id="overview" class="scroll"></div>
          <div class="title-info">
            <h2>
              Overview
            </h2>
          </div>
          <span
            class="long-description"
            :style="`height: ${showContent ? 'auto' : '100px'}`">
            {{house.house_info.full_description}}
          </span>
          <button
            @click="showContent = !showContent">
            {{showContent ? 'Hide' : 'Show'}} content
          </button>
        </div>
          <!-- The components below I added just for the look -->
        <div class="rental content-item">
          <div id="rental" class="scroll"></div>
          <div class="title-info">
            <h2>
              Rental
            </h2>
          </div>
          <span>$3,999/mo</span>
        </div>

        <div class="homeValue content-item">
          <div id="homeValue" class="scroll"></div>
          <div class="title-info">
            <h2>
              Home value
            </h2>
          </div>
        </div>

        <div class="history content-item">
          <div id="history" class="scroll"></div>
          <div class="title-info">
            <h2>
              Price and tax history
            </h2>
          </div>
        </div>

        <div class="cost content-item">
          <div id="cost" class="scroll"></div>
          <div class="title-info">
            <h2>
              Monthly cost
            </h2>
          </div>
        </div>

        <div class="similarHomes content-item">
          <div id="similarHomes" class="scroll"></div>
          <div class="title-info">
            <h2>
              Similar Homes
            </h2>
          </div>
          <div class="houses">
          </div>
        </div>

        <div class="protections content-item">
          <div id="protections" class="scroll"></div>
          <div class="title-info">
            <h2>
              Local legal protections
            </h2>
          </div>
        </div>

        <div class="neighborhood content-item">
          <div id="neighborhood" class="scroll"></div>
          <div class="title-info">
            <h2>
              Nighborhood
            </h2>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script src="./FullInfo.js"/>
<style scoped lang="scss" src="./FullInfo.scss"/>