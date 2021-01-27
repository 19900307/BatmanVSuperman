<template>
  <v-container grid-list-md text-xs-center>

    <v-layout row wrap>

      <v-flex xs3 class="avatar" v-for="person in persons" :key="person.id" v-if="person.id === 'bats'">
        <v-card dark class="character">
          <v-img v-show="showBats" :src="person.imageUrl"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card dark color="dark" id="board">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex v-for="(box, index) in boxes" :key="index" xs4>
                <div class="squares" :class="box.bg"
                  @click.once="characterTurn (box, index), router (box), checkWinner (box, boxes, checkArray, batmanWin, supermanWin, endGame)">
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs3 class="avatar" v-for="person in persons" :key="person.id" v-if="person.id === 'sups'">
        <v-card dark class="character">
          <v-img v-show="showSups" :src="person.imageUrl"></v-img>
        </v-card>
      </v-flex>

    </v-layout>

    <!-- Button "End Game" -->
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
          <v-btn color="#121212" @click="endGame ()">
            End Game
          </v-btn>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  props: ['characterTurn', 'endGame', 'showBats', 'showSups', 'batmanWin', 'supermanWin'],
  data () {
    return {
      boxes: [
        {bg: ''}, {bg: ''}, {bg: ''},
        {bg: ''}, {bg: ''}, {bg: ''},
        {bg: ''}, {bg: ''}, {bg: ''}
      ],
      checkArray: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
    }
  },
  computed: {
    persons () {
      return this.$store.getters.loadedCharacters
    }
  },
  methods: {
    router (box) {
      if (this.showBats === true) box.bg = 'batman'
      if (this.showSups === true) box.bg = 'superman'
    },
    checkWinner (box, boxes, checkArray, batmanWin, supermanWin, endGame) {
      checkArray.forEach((winCombination) => {
        const [a, b, c] = winCombination
        const boxA = this.boxes[a]
        const boxB = this.boxes[b]
        const boxC = this.boxes[c]

        if (boxA.bg && boxA.bg === boxB.bg && boxA.bg === boxC.bg) {
          if (boxA.bg && boxB.bg && boxC.bg === 'batman') {
            setTimeout(batmanWin, 0)
            setTimeout(function () { alert('Batman the best!') }, 100)
            setTimeout(endGame, 200)
          } else if (boxA.bg && boxB.bg && boxC.bg === 'superman') {
            setTimeout(supermanWin, 0)
            setTimeout(function () { alert('Superman the best!') }, 100)
            setTimeout(endGame, 200)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .character {
    background-color: #121212;
    height: 100%;
  }
  .squares {
    padding-top: 100%;
    height: 100%;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #121212;
    cursor: pointer;
    color: white;
    line-height: 100%;
  }
  .squares:hover {
    opacity: 0.7;
  }
  .batman {
    background-image: url(https://orig00.deviantart.net/3598/f/2015/103/f/4/batman_v_superman_dawn_of_justice_batman_logo_by_tolunaydereli-d8pkrzm.png);
  }
  .superman {
    background-image: url(https://vignette.wikia.nocookie.net/logopedia/images/a/a1/Superman_Man_of_Steel_symbol.png/revision/latest?cb=20161007184648);
  }
</style>
