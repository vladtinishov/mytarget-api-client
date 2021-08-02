<template>
  <div class="main">
    <h1>Объявление с изображением</h1>
    <Section
      id="url"
      type="text"
      label="Ссылка"
      isUrlInput="true"
      v-model="banner.url"
    />
    <Section
      id="title_25"
      type="text"
      label="Заголовок"
      v-model="banner.title_25"
    />
    <Section
      id="text_90"
      type="text"
      label="Содержание"
      v-model="banner.text_90"
    />
    <Section
      id="date_start"
      type="date"
      label="Дата начала"
      v-model="campaign.date_start"
    />
    <Section
      id="date_end"
      type="date"
      label="Дата окончания"
      v-model="campaign.date_end"
    />
    <Section
      id="price"
      type="number"
      label="Цена"
      v-model="campaign.price"
    />
    <Section
      id="budget_limit_day"
      type="number"
      label="Бюджет на день"
      v-model="campaign.budget_limit_day"
    />
    <Section
      id="budget_limit"
      type="number"
      label="Общий бюджет"
      v-model="campaign.budget_limit"
    />
    <br>
    <input type="file" id="file" @change="sendFile">
    <br><br>
    <button class="btn btn-primary" @click="sendQuery">create</button>
    <br><br>
  </div>
</template>
<script>
// import { campaignImage, createUrl } from "@/queries"
import Section from "@/components/Section";
import {mapActions, mapGetters, mapMutations} from "vuex"
export default {
  components: {
    Section,
  },
  data() {
    return {
      campaign: {
        date_start: "xxxx-xx-xx",
        date_end: "xxxx-xx-xx",
        budget_limit_day: "1000",
        budget_limit: "5000",
        price: "1.00",
      },
      banner: {
        url: "https://www.example.com",
        title_25: "Новый товар по акции",
        text_90: "Для счастья нужно только...",
      },
    };
  },
  computed: {
    ...mapGetters(["getImageAdsQuery"]),
  },
  methods: {
    ...mapMutations(["updateBanner", "updateCampaign"]),
    ...mapActions(["createUrl", "createImage", "createAds"]),
    sendQuery() {
      this.updateBanner(this.banner);
      this.updateCampaign(this.campaign);
      this.createAds(this.getImageAdsQuery);
    },
    sendFile() {
      let form = new FormData();
      let file = document.getElementById("file");
      form.append("file", file.files[0]);
      form.append("data", '{"width":500, "height":500}');
      this.createImage(form);
    }
  }
};
</script>
