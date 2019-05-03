import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMusic, faLongArrowAltLeft, faLongArrowAltRight, faPlayCircle, faPauseCircle, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMicrophone)
library.add(faMusic)
library.add(faLongArrowAltLeft)
library.add(faLongArrowAltRight)
library.add(faPlayCircle)
library.add(faPauseCircle)
library.add(faArrowCircleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)