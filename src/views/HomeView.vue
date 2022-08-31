<template>
  <div>
    <h1 class="text-title">Home</h1>
    <div class="d-flex flex-wrap justify-content-around mb-5">
      <div><pieChart /></div>
      <div><barChart /></div>
      <div><lineChart /></div>
    </div>
    <galeryHome :list-data="listData" />
    <gridView :list-data="listData" @showImage="showImage" />
    <imagePop ref="imageShow" />
  </div>
</template>

<script>
import lineChart from "@/components/lineChart";
import barChart from "@/components/barChart";
import pieChart from "@/components/pieChart";
import galeryHome from "@/components/galeryHome";
import gridView from "@/components/gridView";
import imagePop from "@/components/imagePopup";
export default {
  name: "HomeView",
  components: { lineChart, barChart, pieChart, galeryHome, gridView, imagePop },
  data() {
    return {
      listData: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.axios
        .get("https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas")
        .then((response) => {
          this.listData = response.data;
        });
    },
    showImage(e) {
      this.$refs.imageShow.show(e.picture);
    },
  },
};
</script>
<style>
.text-title {
  text-align: left;
}
</style>
