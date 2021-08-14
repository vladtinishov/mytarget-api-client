import axios from "axios"
import { auth_data } from "../../auth"

let instance = axios.create({
    baseURL: "api/",
    headers: {
        Authorization: "Bearer " + auth_data.token,
    },
});

export default {
    state: {
        videoCampaign: {
            name: "Campaign with an image",
            status: "active",
            date_start: "2021-07-31",
            date_end: "2021-08-06",
            budget_limit_day: "1000",
            budget_limit: "5000",
            mixing: "fastest",
            price: "0.01",
            enable_utm: false,
            package_id: 809,
            objective: "reach",
            banners: [{
                urls: {
                    primary: {
                        id: 203813
                    }
                },
                content: {
                    video_landscape_30s: {
                        id: 6140
                    }
                }
            }],
            targetings: {
                segments: [1696]
            }
        }
    },
    actions: {
        createUrl(ctx, url) {
            instance.post("/urls.json", {"url": url}).then((data) => {
                ctx.commit("updateUrl", data.data.id);
            });
        },
        createVideo(ctx, form) {
            instance.post("content/video.json", form).then((data) => {
                ctx.commit("updateVideo", data.data.id);
            });
        },
        createVideoAds(ctx, object) {
            instance.post("campaigns.json", object)
                .then(data => console.log(data.data));
        }
    },
    mutations: {
        updateUrl(state, urlId) {
            state.videoCampaign.banners[0].urls.primary.id = urlId;
        },
        updateVideo(state, videoId) {
            state.videoCampaign.banners[0].content.video_landscape_30s.id = videoId; 
        },
        updateVideoCampaign(state, campaignObject) {
            state.videoCampaign.date_start = campaignObject.date_start;
            state.videoCampaign.date_end = campaignObject.date_end;
            state.videoCampaign.budget_limit_day = campaignObject.budget_limit_day;
            state.videoCampaign.budget_limit = campaignObject.budget_limit;
            state.videoCampaign.price = campaignObject.price;
        },
    },
    getters: {
        getObject(state) {
            return state.videoCampaign;
        }
    },
}