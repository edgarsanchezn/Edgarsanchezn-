export default {
    extends: VueChartJs.Line,
    data() {
      return {
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Views",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              lineTension: 0.1,
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