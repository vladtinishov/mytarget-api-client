import Vue from "vue"
import Vuex from "vuex"
import imageAds from "./modules/imageAds"

import videoAds from "./modules/videoAds"
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        imageAds,
        videoAds,
    }
})