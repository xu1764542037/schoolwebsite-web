<template>
  <div class="InformationEngineering">
    <div class="InformationEngineering-Title">
      <h1>信息工程学院</h1>
    </div>
    <div class="InformationEngineering-Content">
<!--      学院简介-->
      <div class="InformationEngineering-Profile">
        <div class="InformationEngineering-Profile-Title" id="InformationEngineering-Profile-Title">
          <div class="InformationEngineering-Profile-box">
            <h1>学</h1>
          </div>
          <div class="InformationEngineering-Profile-box">
            <h1>院</h1>
          </div>
          <div class="InformationEngineering-Profile-box">
            <h1>简</h1>
          </div>
          <div class="InformationEngineering-Profile-box">
            <h1>介</h1>
          </div>
        </div>
        <div class="InformationEngineering-Profile-Content">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息工程学院共开设电子信息工程技术、软件技术等11个专业，其中电子信息工程技术专业为全国百所职业院校鉴定“直通车”试点专业、江西省特色专业。
            学院现有专兼职教师126名，其中正、副教授32名，高级工程师8名，外聘能工巧匠9名，省级教学名师2名，省级中青年骨干教师4名，并拥有电子信息、计算机应用技术2个省级专业教学团队。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，依托电子信息产业国家高技能人才培养基地、浙江海亮人才培养基地等校内外人才培养基地，加强对学生“交流、动手、创新与社会适应能力”的培养，
            重视对“智能工厂”、“智能生产”知识与能力的培养，适应了智能制造的发展，提升了学生就业竞争力。<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信息工程学院现有在校生3700多人。近年来，毕业生受到社会普遍欢迎，就业率连续多年达99%以上，为地方经济建设与社会和谐发展做出了积极的贡献。
            毕业生中涌现了一大批优秀人才，部分学生赴海外就业，部分学生通过专升本、升硕继续深造，还有部分学生毕业不久就因工作表现出色走上了单位管理岗位。
          </p>
        </div>
      </div>
<!--      现任领导-->
      <div class="InformationEngineering-Leader">
        <div class="InformationEngineering-Leader-Title">
          <h1>现任领导</h1>
        </div>
        <div class="InformationEngineering-Leader-Content">
          <ul>
            <li>院长：周学军</li>
            <li>党总支书记：颜键仁</li>
            <li>院长助理：罗峰华</li>
            <li>院长助理：王和平</li>
          </ul>
        </div>
        <div class="InformationEngineering-Leader-End">
          信息工程学院部门机构设置
        </div>
      </div>
<!--      专业设置-->
      <div class="InformationEngineering-Major">
        <TextBox/>
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from "./child/TextBox";
export default {
name: "InformationEngineering",
  components:{
    TextBox
  }
}
</script>

<style scoped>
.InformationEngineering {
  position: relative;
}
.InformationEngineering-Title {
  height: 600px;
  background: url("../../../../assets/img/faculty/InformationEngineering/1.png") no-repeat;
  background-size: 100% 100%;
}
.InformationEngineering-Title h1 {
  position: absolute;
  top: 400px;
  left: 100px;
  font-size: 64px;
  color: white;
}
.InformationEngineering-Profile {
  position: relative;
  margin-top: 10px;
  height: 800px;
  background: url("../../../../assets/img/faculty/InformationEngineering/2.png") no-repeat right ;
  background-size: 100%;
}
.InformationEngineering-Profile-Title {
  position: absolute;
  top: 30px;
  left: 50%;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  transform: translateX(-2000px);
  height: 300px;
}
.InformationEngineering-Profile-box {
  height: 100px;
  width: 100px;
  background-color: #EE9640;
  transform: rotate(45deg);
  font-size: 16px;
  line-height: 100px;
  text-align: center;
  color: white;
}
.InformationEngineering-Profile-box h1 {
  transform: rotate(-45deg);
  margin: 0 0;
}
.InformationEngineering-Profile-box:hover {
  transform: rotate(405deg);
  transition: all 0.5s ease-in-out;
}
.InformationEngineering-Profile-Content {
  position: absolute;
  top: 200px;
  left: 50%;
  width: 1200px;
  font-size: 24px;
  line-height: 50px;
  transform: translateX(-50%);
}
.InformationEngineering:hover .InformationEngineering-Profile-Title {
  transform: translateX(-50%);
  transition: all 1s ease-in-out;
}
.InformationEngineering-Leader {
  position: absolute;
  height: 1000px;
  width: 1920px;
  background: url("../../../../assets/img/faculty/InformationEngineering/3.jpg") no-repeat;
  background-size: 100% 100%;
}
.InformationEngineering-Leader-Title {
  position: absolute;
  top: 100px;
  left: 200px;
  writing-mode: vertical-lr;
  font-size: 32px;
  line-height: 3.3;
  text-align: left;
  color: #0e3248;
}
.InformationEngineering-Leader-Content {
  position: absolute;
  top: 55%;
  left: 50%;
  font-size: 32px;
  transform: translate(-50%,-50%);
  line-height: 70px;
}
.InformationEngineering-Leader-Content li {
  cursor: pointer;
}
.InformationEngineering-Leader-Content li:hover {
  color: #EE9640;
  -webkit-transition: .5s all;
}
.InformationEngineering-Leader-End {
  position: absolute;
  bottom: 80px;
  right: 140px;
  font-size: 30px;
  cursor: pointer;
}
.InformationEngineering-Leader-End:hover {
  color: #EE9640;
  -webkit-transition: .5s all;
}
.InformationEngineering-Major {
  position: relative;
  top: 1000px;
  height: 500px;
  width: 1920px;
  background-color: #c81623;
}
</style>