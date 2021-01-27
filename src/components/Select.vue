<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

      <v-flex xs6 v-for="person in persons" :key="person.id">
        <router-link to="/game/" tag="span">
          <v-card class="selectHero">
            <h3>Select {{ person.name }}</h3>
            <v-img :src="person.imageUrl" @click="selectedPlayer (person)"></v-img>
          </v-card>
        </router-link>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['selectedPlayer'],
  computed: {
    persons () {
      return this.$store.getters.loadedCharacters
    }
  }
}
</script>

<style scoped>
  .selectHero {
    height: 100%;
    cursor: pointer;
    opacity: 0.5;
  }
  .selectHero:hover {
    opacity: 1;
    color: #212121;
  }
</style>
