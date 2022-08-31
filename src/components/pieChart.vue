<template>
  <div>
    <DxPieChart
      id="pie"
      :data-source="areas"
      palette="Bright"
      title="Area of Countries"
      @point-click="pointClickHandler($event)"
      @legend-click="legendClickHandler($event)"
    >
      <DxSeries argument-field="country" value-field="area">
        <DxLabel :visible="true">
          <DxConnector :visible="true" :width="1" />
        </DxLabel>
      </DxSeries>
      <DxSize :width="500" />
      <DxExport :enabled="true" />
    </DxPieChart>
  </div>
</template>
<script>
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from "devextreme-vue/pie-chart";
export default {
  components: {
    DxPieChart,
    DxSize,
    DxSeries,
    DxLabel,
    DxConnector,
    DxExport,
  },
  data() {
    return {
      areas: [
        {
          country: "Russia",
          area: 12,
        },
        {
          country: "Canada",
          area: 7,
        },
        {
          country: "USA",
          area: 7,
        },
        {
          country: "China",
          area: 7,
        },
        {
          country: "Brazil",
          area: 6,
        },
        {
          country: "Australia",
          area: 5,
        },
        {
          country: "India",
          area: 2,
        },
        {
          country: "Others",
          area: 55,
        },
      ],
    };
  },
  methods: {
    pointClickHandler(e) {
      this.toggleVisibility(e.target);
    },
    legendClickHandler(e) {
      const arg = e.target;
      const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

      this.toggleVisibility(item);
    },
    toggleVisibility(item) {
      item.isVisible() ? item.hide() : item.show();
    },
  },
};
</script>
