export default {
    extends: VueChartJs.Doughnut,
    data() {
      return {
        data: {
          labels: ["P1", "P2", "P3"],
          datasets: [
            {
              label: "Issues",
              data: [300, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
        },
        options: {},
      };
    },
    mounted() {
      this.renderChart(this.data, this.options);
    },
  };