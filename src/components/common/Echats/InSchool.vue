<template>
  <div id="InSchool"></div>
</template>

<script>
export default {
  name: "InSchool",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("InSchool"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '各年级第十二学周在校率',
          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#ffffff'
          },
        },
        legend: {
          data: ['在校率'],
          left: 'center',
          bottom: 10,
          textStyle:{
            fontSize: 14,//字体大小
            color: '#ffffff'//字体颜色
          },
        },
        xAxis: {
          type: 'category',
          data: ['高一', '高二', '高三', '大一', '大二', '大三'],
          axisLabel: {
            color: "white"
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {      //x轴显示百分比
            show: true,
            interval: 'auto',
            formatter: '{value} %',
            color: "white"
          },
          show: true
        },
        series: [{
          name: '在校率',
          data: [92,78, 72, 96, 73, 67],
          type: 'bar',
          barWidth: '40%',
          color: '#81E2FF',
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{c}%',      //数值显示百分比
              color: 'white'
            }
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
#InSchool {
  width: 600px;
  height: 350px;
  background: #043052;
  margin-left: 60px;
  margin-top: 20px;
}
</style>