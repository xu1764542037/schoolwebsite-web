<template>
    <div id="InAndOut"></div>
</template>

<script>
export default {
  name: "InAndOut",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("InAndOut"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          left: 'center',
          text: '2021年第十二学周学校出入数据',
          top: 10,
          textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#ffffff',
          },
        },
        legend: {
          data: ['离校人数', '返校人数'],
          left: 'center',
          bottom: 10,
          textStyle:{
            fontSize: 14,//字体大小
            color: '#ffffff'//字体颜色
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
        series: [
          {
            name: '离校人数',
            data: [120, 136, 142, 202, 302, 204, 102],
            type: 'line',
            smooth: true,
            areaStyle: {}
          },
          {
            name: '返校人数',
            data: [60, 201, 151, 114, 120, 101, 201],
            type: 'line',
            smooth: true,
            areaStyle: {}
          },
        ]
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
#InAndOut {
  width: 600px;
  height: 350px;
  background: #043052;
  margin-left: 30px;
  margin-top: 20px;

}
</style>