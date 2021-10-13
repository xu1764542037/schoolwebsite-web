<template>
  <div id="HistoricalAttendance"></div>
</template>

<script>
export default {
  name: "HistoricalAttendance",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("HistoricalAttendance"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '历史考勤数据',
          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#ffffff'
          },
        },
        xAxis: {
          type: 'category',
          data: ['2021.11.2', '2021.11.3', '2021.11.4', '2021.11.5', '2021.11.6', '2021.11.7', '2021.11.8', '2021.11.9', '2021.11.10', '2021.11.11'],
          axisLabel: {
            color: "white"
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: "white"
          }
        },
        series: [{
          data: [8632,9232, 8250, 8632, 8452, 9023, 8963, 9125, 8654, 8645],
          color: "#0AF8FA",
          barWidth: '30%',
          type: 'bar',
          label: {
            show: true,
            position: 'top',
            valueAnimation: true,
            color: "white",

          }
        }]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>

<style scoped>
#HistoricalAttendance {
  width: 1230px;
  height: 430px;
  background: #043052;
  margin-top: 40px;
  margin-left: 30px;
}
</style>