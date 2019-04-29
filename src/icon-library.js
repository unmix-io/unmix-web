import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMicrophone)
library.add(faMusic)

Vue.component('font-awesome-icon', FontAwesomeIcon)