<template>
  <div>
    <DxChart id="chart" :data-source="dataSource" palette="Violet">
      <DxCommonSeriesSettings type="line" argument-field="country" />
      <DxSeries
        v-for="energy in energySources"
        :key="energy.value"
        :value-field="energy.value"
        :name="energy.name"
      />
      <DxMargin :bottom="20" />
      <DxArgumentAxis
        :value-margins-enabled="false"
        discrete-axis-division-mode="crossLabels"
      >
        <DxGrid :visible="true" />
      </DxArgumentAxis>
      <DxLegend
        vertical-alignment="bottom"
        horizontal-alignment="center"
        item-text-position="bottom"
      />
      <DxExport :enabled="true" />
      <DxTitle text="Energy Consumption in 2004">
        <DxSubtitle text="(Millions of Tons, Oil Equivalent)" />
      </DxTitle>
      <DxTooltip :enabled="true" />
    </DxChart>
  </div>
</template>
<script>
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from "devextreme-vue/chart";
export default {
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
  },
  data() {
    return {
      dataSource: [
        {
          country: "USA",
          hydro: 59.8,
          oil: 937.6,
          gas: 582,
          coal: 564.3,
          nuclear: 187.9,
        },
        {
          country: "China",
          hydro: 74.2,
          oil: 308.6,
          gas: 35.1,
          coal: 956.9,
          nuclear: 11.3,
        },
        {
          country: "Russia",
          hydro: 40,
          oil: 128.5,
          gas: 361.8,
          coal: 105,
          nuclear: 32.4,
        },
        {
          country: "Japan",
          hydro: 22.6,
          oil: 241.5,
          gas: 64.9,
          coal: 120.8,
          nuclear: 64.8,
        },
        {
          country: "India",
          hydro: 19,
          oil: 119.3,
          gas: 28.9,
          coal: 204.8,
          nuclear: 3.8,
        },
        {
          country: "Germany",
          hydro: 6.1,
          oil: 123.6,
          gas: 77.3,
          coal: 85.7,
          nuclear: 37.8,
        },
      ],
      energySources: [
        { value: "hydro", name: "Hydro-electric" },
        { value: "oil", name: "Oil" },
        { value: "gas", name: "Natural gas" },
        { value: "coal", name: "Coal" },
        { value: "nuclear", name: "Nuclear" },
      ],
    };
  },
};
</script>
