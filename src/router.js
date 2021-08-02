import Vue from "vue"
import Router from "vue-router"
import CreateImageCampaign from "@/views/CreateImageCampaign"
import CreateVideoCampaign from "@/views/CreateVideoCampaign"
Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/image-campaign",
            component: CreateImageCampaign,
        },
        {
            path: "/video-campaign",
            component: CreateVideoCampaign,
        },
    ]
})
