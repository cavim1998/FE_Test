<template>
  <div>
    <DxPopup :visible="showModal" title="Preview Gambar" @hiding="setHide">
      <img :src="urlPic" alt="Preview Gambar" class="m-3" />
    </DxPopup>
  </div>
</template>
<script>
import { DxPopup } from "devextreme-vue/popup";
export default {
  components: {
    DxPopup,
  },
  data() {
    return {
      showModal: false,
      urlPic: null,
    };
  },
  methods: {
    show(url) {
      this.showModal = true;
      this.urlPic = url;
    },
    setHide() {
      this.showModal = false;
    },
  },
};
</script>
<style>
.dx-popup-content {
  text-align: center;
}
</style>
