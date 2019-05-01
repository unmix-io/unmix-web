import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMusic, faLongArrowAltLeft, faLongArrowAltRight, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMicrophone)
library.add(faMusic)
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faPlayCircle)
library.add(faPauseCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)