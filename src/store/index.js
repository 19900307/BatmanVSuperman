import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedCharacters: [
      {
        id: 'bats',
        imageUrl: 'https://i.pinimg.com/originals/6b/e6/a4/6be6a4d1f9589325a1e85dc8f067294c.png',
        logoUrl: 'https://orig00.deviantart.net/3598/f/2015/103/f/4/batman_v_superman_dawn_of_justice_batman_logo_by_tolunaydereli-d8pkrzm.png',
        name: 'Batman'
      },
      {
        id: 'sups',
        imageUrl: 'https://clipart.info/images/ccovers/1516943360Superman-transparent-background.png',
        logoUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/a/a1/Superman_Man_of_Steel_symbol.png/revision/latest?cb=20161007184648',
        name: 'Superman'
      }
    ]
  },
  getters: {
    loadedCharacters (state) {
      return state.loadedCharacters.sort((personA, personB) => {
        return personA.date > personB.date
      })
    }
  }
})
