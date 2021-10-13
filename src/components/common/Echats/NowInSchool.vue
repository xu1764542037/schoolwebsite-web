<template>
  <div id="NowInSchool">

  </div>
</template>

<script>
export default {
  name: "NowInSchool",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("NowInSchool"));
      // 指定图表的配置项和数据
       // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        color:["#27D9C8","#D8D8D8"],
        title:{
          text:"86%",
          left:"center",
          top:"50%",
          textStyle:{
            color:"#27D9C8",
            fontSize:36,
            align:"center"
          }
        },
        graphic:{
          type:"text",
          left:"center",
          top:"35%",
          style:{
            text:"在校率",
            textAlign:"center",
            fill:"#ffffff",
            fontSize:36,
            fontWeight:700
          }
        },
        series: [
          {
            name: '在校情况',
            type: 'pie',
            radius: ['65%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },

            },

            data: [
              { value: 86, name: '在校率' },
              { value: 14, name: '离校率' },

            ]
          }
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
#NowInSchool {
  width: 300px;
  height: 350px;
}
</style>