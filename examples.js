const exmpales = {
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
}