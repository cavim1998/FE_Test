<template>
  <div>
    <DxPopup :visible="showModal" :title="title" @hiding="setHide">
      <div style="text-align: left">
        <b-form-group label="Unit Kerja">
          <DxTextBox
            v-model="form.unit"
            placeholder="Masukkan Unit Kerja"
            :read-only="isLoading"
          />
        </b-form-group>
        <b-form-group label="Ruas">
          <DxTextBox
            v-model="form.ruas"
            placeholder="Masukkan Ruas"
            :read-only="isLoading"
          />
        </b-form-group>
        <b-form-group label="Tanggal">
          <DxDateBox
            v-model="form.date_create"
            :openOnFieldClick="true"
            :acceptCustomValue="false"
            :read-only="isLoading"
          />
        </b-form-group>
        <b-form-group label="Status">
          <DxSelectBox
            v-model="form.status"
            :data-source="statusDb"
            :read-only="isLoading"
            displayExpr="name"
            valueExpr="id"
            style="text-align: left"
          />
        </b-form-group>
      </div>
      <DxToolbarItem
        widget="dxButton"
        toolbar="bottom"
        location="after"
        :options="saveOption"
      />
    </DxPopup>
  </div>
</template>
<script>
import { DxPopup, DxToolbarItem } from "devextreme-vue/popup";
import DxTextBox from "devextreme-vue/text-box";
import DxDateBox from "devextreme-vue/date-box";
import DxSelectBox from "devextreme-vue/select-box";
export default {
  components: {
    DxPopup,
    DxToolbarItem,
    DxTextBox,
    DxDateBox,
    DxSelectBox,
  },
  data() {
    return {
      showModal: false,
      isLoading: false,
      title: null,
      isEdit: false,
      statusDb: [{ id: 1, name: "Aktif" }],
      form: {
        unit: null,
        ruas: null,
        picture: null,
        date_create: null,
        status: 1,
      },
      saveOption: {
        text: "Simpan",
        onClick: () => {
          this.isLoading = true;
          this.$emit("saveItem", { data: this.form, isEdit: this.isEdit });
          this.setHide();
        },
      },
    };
  },
  methods: {
    show(e) {
      this.showModal = true;
      this.title = e.isEdit ? `Edit ${e.data.ruas}` : "Buat Baru";
      this.form.picture = "http://loremflickr.com/640/480/sports";
      this.isEdit = e.isEdit;
      if (e.data) {
        this.form = e.data;
        this.form.status = 1;
      }
    },
    setHide() {
      this.showModal = false;
      this.isLoading = false;
      this.clearForm();
    },
    clearForm() {
      const form = this.form;
      form.unit = null;
      form.ruas = null;
      form.picture = null;
      form.date_create = null;
      form.status = 1;
    },
  },
};
</script>
