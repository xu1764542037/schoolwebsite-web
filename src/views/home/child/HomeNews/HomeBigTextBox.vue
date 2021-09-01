<template>
  <div class="BigTextBox">

    <div class="BigTextBox-Title">
      <h4>NEWS</h4>
      <a href="#">
        <i class="el-icon-more"></i>
        更多
      </a>
    </div>
    <div>
      <div class="BigTextBox-Content">
        <a href="#"><TextBox class="img1"><span>近三分之一毕业生“专升本”<br/>学院2021届毕业生“专升本”创佳绩</span></TextBox></a>
        <a href="#"><TextBox class="img1"><span>学院开展形式多样的节能宣传周宣传<br/>教育活动</span></TextBox></a>
        <a href="#"><TextBox class="img1"><span>层到酒店管理（上海）有限公司董事长余亮一行来院洽谈<br/>共青产教融合基地合作事宜</span></TextBox></a>
        <a href="#"><TextBox class="img1"><span>学院党委书记陈飞一行深入图书信息<br/>中心调研指导工作</span></TextBox></a>
      </div>
        <div class="BigTextBox-Content Spacing">
          <a href="#"><TextBox class="img1"><span>近三分之一毕业生“专升本”<br/>学院2021届毕业生“专升本”创佳绩</span></TextBox></a>
          <a href="#"><TextBox class="img1"><span>学院开展形式多样的节能宣传周宣传<br/>教育活动</span></TextBox></a>
          <a href="#"><TextBox class="img1"><span>层到酒店管理（上海）有限公司董事长余亮一行来院洽谈<br/>共青产教融合基地合作事宜</span></TextBox></a>
          <a href="#"><TextBox class="img1"><span>学院党委书记陈飞一行深入图书信息<br/>中心调研指导工作</span></TextBox></a>
        </div>
    </div>

  </div>
</template>

<script>
import TextBox from "../../../../components/common/textbox/TextBox";
export default {
  name: "BigTextBox",
  components: {
    TextBox,
  }
}
</script>

<style scoped>
  .BigTextBox {
    position: relative;
    z-index: 99;
  }
  .BigTextBox-Content {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    width: 1400px;
    text-align: center;


  }
  .BigTextBox-Content a {
    position: relative;
    text-decoration: none;
  }
  .BigTextBox-Content span {
    position: absolute;
    top: 30%;
    left: 5%;
    display: block;
  }
  .img1 {
    background: url("../../../../assets/img/home/HomeNews/1.png") no-repeat;
  }
  .Spacing {
    position: absolute;
    top: 125%;
  }
  .BigTextBox::after {
    content: "";
    display: block;
    position: absolute;
    top: -5PX;
    left: 0;
    width: 9.45rem;
    height: .1rem;
    background: #EE9640;
  }
  .BigTextBox-Title {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    z-index: 100;
  }
</style>