<template>
  <div>
    <DxChart id="chart" :data-source="dataSource">
      <DxSeries
        argument-field="day"
        value-field="oranges"
        name="My oranges"
        type="bar"
        color="#ffaa66"
      />
    </DxChart>
  </div>
</template>
<script>
import { DxChart, DxSeries } from "devextreme-vue/chart";
export default {
  components: {
    DxChart,
    DxSeries,
  },
  data() {
    return {
      dataSource: [
        {
          day: "Monday",
          oranges: 3,
        },
        {
          day: "Tuesday",
          oranges: 2,
        },
        {
          day: "Wednesday",
          oranges: 3,
        },
        {
          day: "Thursday",
          oranges: 4,
        },
        {
          day: "Friday",
          oranges: 6,
        },
        {
          day: "Saturday",
          oranges: 11,
        },
        {
          day: "Sunday",
          oranges: 4,
        },
      ],
    };
  },
};
</script>
