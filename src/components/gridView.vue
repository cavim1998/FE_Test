<template>
  <div class="mt-5">
    <DxDataGrid
      ref="gridData"
      :customize-columns="customizeColumns"
      :data-source="listData"
      key-expr="id"
      :show-borders="true"
      :show-column-lines="true"
      :show-row-lines="true"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      :row-alternation-enabled="true"
      @toolbar-preparing="onToolbarPreparing($event)"
      @context-menu-preparing="onContextMenuPreparing"
    >
      <DxSelection
        mode="single"
        select-all-mode="allPages"
        show-check-boxes-mode="onClick"
      />
      <DxColumnFixing :enabled="true" />
      <DxScrolling row-rendering-mode="virtual" />
      <DxSearchPanel :visible="true" :highlight-case-sensitive="true" />
      <DxPaging :page-size="10" />
      <DxPager
        :visible="true"
        :allowed-page-sizes="pageSizes"
        :display-mode="displayMode"
        :show-page-size-selector="showPageSizeSelector"
        :show-info="showInfo"
        :show-navigation-buttons="showNavButtons"
      />
      <DxColumn data-field="id" caption="No" data-type="number" />
      <DxColumn data-field="ruas" caption="Ruas" />
      <DxColumn data-field="unit" caption="Unit Kerja" />
      <DxColumn
        data-field="picture"
        caption="Gambar"
        cell-template="imageTemplate"
      />
      <template #imageTemplate="{ data: cellData }">
        <b-button @click="showImage(cellData)">Preview Gambar</b-button>
      </template>
      <DxColumn data-field="date_create" caption="Tanggal" />
      <DxColumn
        caption="Aksi"
        type="buttons"
        :visible="!isView"
        :fixed="true"
        fixedPosition="right"
        :buttons="crudButton"
      />
    </DxDataGrid>

    <DxContextMenu
      ref="contextMenu"
      @showing="showingContextMenu"
      @itemClick="itemClickContextMenu"
      @hidden="hiddenContextMenu"
      target="#nothing"
    />
  </div>
</template>
<script>
import {
  DxDataGrid,
  DxColumn,
  DxScrolling,
  DxPager,
  DxPaging,
  DxSearchPanel,
  DxColumnFixing,
  DxSelection,
} from "devextreme-vue/data-grid";
import DxContextMenu from "devextreme-vue/context-menu";
export default {
  components: {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxPager,
    DxPaging,
    DxSearchPanel,
    DxColumnFixing,
    DxContextMenu,
    DxSelection,
  },
  props: {
    listData: {
      type: Array,
      default: () => [],
    },
    isView: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const self = this;
    return {
      pageSizes: [5, 10, "all"],
      showInfo: true,
      showNavButtons: true,
      displayMode: "full",
      showPageSizeSelector: true,
      crudButton: [
        {
          hint: "edit",
          icon: "rename",
          visible: true,
          onClick(e) {
            self.editData(e.row.data);
          },
        },
        {
          hint: "delete",
          icon: "trash",
          visible: true,
          onClick(e) {
            self.deleteData(e.row.data);
          },
        },
      ],
    };
  },
  computed: {
    contextMenu() {
      return this.$refs.contextMenu.instance;
    },
    gridView() {
      return this.$refs.gridData.instance;
    },
  },
  methods: {
    showImage(data) {
      this.$emit("showImage", data.data);
    },
    customizeColumns(columns) {
      columns[0].width = 70;
    },

    deleteData(item) {
      this.$emit("deleteItem", item);
    },
    editData(item) {
      console.log(item);
      this.$emit("editItem", item);
    },
    addData() {
      this.$emit("addItem");
    },

    onToolbarPreparing(e) {
      const self = this;
      e.toolbarOptions.items.unshift({
        location: "before",
        widget: "dxButton",
        options: {
          text: "Tambah",
          icon: "add",
          hint: "Tambah Data",
          type: "success",
          onClick() {
            self.addData();
          },
        },
      });
    },

    showingContextMenu(e) {
      e.component.option("dataSource", this.getContextMenu);
    },

    itemClickContextMenu(e) {
      if (!e.itemData.items) {
        e.itemData.action(e);
      }
    },
    hiddenContextMenu: (e) => e.component.option("target", "#nothing"),
    onContextMenuPreparing(e) {
      const contextMenu = this.$refs.contextMenu.instance;
      if (e.row && e.row.rowType === "data") {
        contextMenu.option("target", e.targetElement);
        contextMenu.option("rowData", e.row.data);
      }
    },
  },
};
</script>
