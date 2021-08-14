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
    <Section id="price" type="number" label="Цена" v-model="campaign.price" />
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
    <br />
    <input type="file" id="file" @change="sendFile" />
    <br /><br />
    <button class="btn btn-primary" @click="sendQuery">create</button>
    <br /><br />
  </div>
</template>
<script>
import Section from "@/components/Section";
import { mapActions, mapGetters, mapMutations } from "vuex";
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
        title: "",
        text: "",
      },
    };
  },
  computed: {
    ...mapGetters(["getObject"]),
  },
  methods: {
    ...mapActions(["createUrl", "createVideo", "createVideoAds"]),
    ...mapMutations(["updateVideoBanner", "updateVideoCampaign"]),
    sendFile() {
      let form = new FormData();
      let file = document.getElementById("file");
      form.append("file", file.files[0]);
      form.append("data", '{"width":500, "height":500}');
      this.createVideo(form);
    },
    sendQuery() {
        this.updateVideoCampaign(this.campaign);
        this.createVideoAds(this.getObject);
        console.log(this.getObject);
    }
  },
};
</script>
