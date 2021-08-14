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
        campaignImage: {
            name: "Campaign name",
            status: "active",
            date_start: "2021-07-31",
            date_end: "2021-08-06",
            autobidding_mode: "second_price",
            budget_limit_day: 1000,
            budget_limit: 5000,
            mixing: "fastest",
            price: 5.12,
            enable_utm: false,
            package_id: 811,
            objective: "traffic",
            banners: [{
                urls: {
                    primary: {
                        id: 203813
                    }
                },
                textblocks: {
                    title_25: {
                        text: "Hello, world"
                    },
                    text_90: {
                        text: "Для счастья нужно только..."
                    },
                    cta_sites_full: {
                        text: "visitSite"
                    }
                },
                content: {
                    image_600x600: {
                        id: 6135
                    }
                }
            }],
            targetings: {
                segments: [1696]
            }
        },
    },
    actions: {
        createUrl(ctx, url) {
            instance.post("/urls.json", {"url": url}).then((data) => {
                ctx.commit("updateUrl", data.data.id);
            });
        },
        createImage(ctx, form) {
            instance.post("content/static.json", form).then((data) => {
                ctx.commit("updateImage", data.data.id);
            });
        },
        createAds(ctx, object) {
            instance.post("campaigns.json", object)
                .then(data => console.log(data.data));
        }
    },
    mutations: {
        updateUrl(state, urlId) {
            state.campaignImage.banners[0].urls.primary.id = urlId;
            console.log(state.campaignImage)
        },
        updateImage(state, imageId) {
            state.campaignImage.banners[0].content.image_600x600.id = imageId;
            console.log(state.campaignImage)
        },
        updateBanner(state, bannerObject) {
            state.campaignImage.banners[0].textblocks.title_25.text = bannerObject.title_25;
            state.campaignImage.banners[0].textblocks.text_90.text = bannerObject.text_90;
            console.log(state.campaignImage);
        },
        updateCampaign(state, campaignObject) {
            state.campaignImage.date_start = campaignObject.date_start;
            state.campaignImage.date_end = campaignObject.date_end;
            state.campaignImage.budget_limit_day = campaignObject.budget_limit_day;
            state.campaignImage.budget_limit = campaignObject.budget_limit;
            state.campaignImage.price = campaignObject.price;
        },
    },
    getters: {
        getImageAdsQuery(state) {
            return state.campaignImage;
        }
    },
}