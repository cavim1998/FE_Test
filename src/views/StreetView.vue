<template>
  <div>
    <h1>Daftar Ruas</h1>
    <gridView
      :list-data="listData"
      :isView="false"
      @showImage="showImage"
      @addItem="addItem"
      @editItem="editItem"
      @deleteItem="deleteItem"
    />
    <formPopup ref="formPop" @saveItem="saveItem" />
    <imagePop ref="imageShow" />
  </div>
</template>
<script>
import gridView from "@/components/gridView";
import formPopup from "@/components/formPopup";
import imagePop from "@/components/imagePopup";
export default {
  components: { gridView, formPopup, imagePop },
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
    addItem() {
      this.$refs.formPop.show({ isEdit: false });
    },
    editItem(e) {
      console.log(e);
      this.$refs.formPop.show({ isEdit: true, data: e });
    },
    async deleteItem(e) {
      const confirmDelete = await this.$dxDialogConfirm(
        "Anda yakin akan menghapus data ruas ini?",
        "Konfirmasi Hapus Ruas"
      );
      if (!confirmDelete) return;
      this.axios
        .delete(
          `https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas/${e.id}`
        )
        .then(() => {
          this.loadData();
        });
    },
    saveItem(e) {
      if (e.isEdit) {
        this.axios
          .put(
            `https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas/${e.data.id}`,
            e.data
          )
          .then(() => {
            this.loadData();
          });
      } else {
        this.axios
          .post(
            "https://630c319983986f74a7bb0dc5.mockapi.io/jm/ruas/ruas",
            e.data
          )
          .then(() => {
            this.loadData();
          });
      }
    },
  },
};
</script>
