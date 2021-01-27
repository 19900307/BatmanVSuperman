<template>
  <v-app dark>
    <main>
      <router-view
        :selectedPlayer='selectedPlayer'
        :characterTurn='characterTurn'
        :endGame='endGame'
        :showBats='showBats'
        :showSups='showSups'
        :batmanWin='batmanWin'
        :supermanWin='supermanWin'>
      </router-view>
    </main>

    <!-- Button "Play Sound" -->
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <v-btn small color="#212121"
          @click.native="playSound = !playSound">
          Sound {{ playSound ? 'OFF' : 'ON' }}
        </v-btn>
        <template v-if="playSound === true">
          <audio autoplay="autoplay" src="https://raw.githubusercontent.com/19900307/sound/master/soundtrack.mp3" loop="loop"></audio>
        </template>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      playSound: false,
      showBats: false,
      showSups: false
    }
  },
  methods: {
    selectedPlayer (person) {
      if (person.id === 'bats') {
        this.showBats = true
      }
      if (person.id === 'sups') {
        this.showSups = true
      }
    },
    characterTurn (box, index) {
      if (this.showBats === false || this.showSups === false) {
        this.showBats = !this.showBats
        this.showSups = !this.showSups
      } else {
        this.$router.push('/')
        this.showBats = false
        this.showSups = false
      }
    },
    batmanWin () {
      this.showBats = true
      this.showSups = false
    },
    supermanWin () {
      this.showSups = true
      this.showBats = false
    },
    endGame () {
      this.showBats = false
      this.showSups = false
      this.$router.push('/')
    }
  }
}
</script>
