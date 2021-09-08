<template>
  <div class="BusinessAffairs">
    <Carousel>
      <div slot="item1">
        <div class="BusinessAffairs-Title">
          <h1>商务学院</h1>
          <div class="BusinessAffairs-Title-Content">
            <p>
              商务学院成立于2003年6月，开设有物流管理、物流工程技术、国际经济与贸易、电子商务、跨境电子商务、商业数据分析与应用、会计、金融管理、市场营销、工商企业管理10个专业，其中物流管理、电子商务专业为省级特色，
              物流管理专业全国排名36。</p>
            <p>学院现有专兼职教师130余人，其中高级职称30余人，具有硕士学位以上教师60余人，省级专业带头人3名，另有教学名师、骨干教师等20余人，拥有一批结构合理、素质优良、精干高效的师资队伍。</p>
            <p>学院建有中央财政支持物流管理综合实训基地、省级新商科智慧综合实践中心等16个设备精良的实训场地，总占地面积3000余平方米，资金投入规模超过了2000万。</p>
            <p>学院以培养具有职业实践能力和管理视野的新商科综合型高素质人才为目标，获批物流管理、电子商务数据分析、网店运营推广、智能财税“1+X”证书制度试点,获物流管理“1+X”证书制度考核站点、师培基地。
              与用友新道、美宜佳、博导前程、京东等开展校企合作，全面提升学科建设、教学质量。学院师生多次荣获各类技能大赛国家级、省级荣誉。</p>
          </div>
        </div>
      </div>
      <div slot="item2">
        <div class="BusinessAffairs-Organization">
          <h1>组织机构</h1>
          <div class="BusinessAffairs-Organization-Content">
            <div class="BusinessAffairs-Organization-Content-1">
              <ul>
                <li>【党政领导】</li>
                <li>院长：江松滨 </li>
                <li>党总支副书记：宋晓丽</li>
                <li>院长助理 ：程兆兆  </li>
              </ul>
            </div>
            <div class="BusinessAffairs-Organization-Content-2">
              <ul>
                <li>【行政、工会办公室】主任：付琍  成员：刘炎梅</li>
                <li>【党总支办公室】周雅娜</li>
                <li>【教务、督导科】戴青、夏慈、符海燕</li>
                <li>【教研室】主任：卢特丹、戴永秀、梁蕾、彭柏华、李滨、朱伟</li>
                <li>【学生科】科长：徐昌教</li>
                <li>【团总支】邱丹</li>
                <li>【就业】杨熙</li>
                <li>【心理】张玮娜</li>
                <li>【资助】黄燕</li>
                <li>【学籍】彭丽敏</li>
              </ul>
            </div>
            <div class="BusinessAffairs-Organization-Content-3">
              <ul>
                <li>【实训管理】陈玉红、董宝芝、欧阳飞飞</li>
                <li>【宣传】张模</li>
                <li>----------</li>
                <li>【办公室及电话】</li>
                <li>行104（江松滨）：0791-88122308</li>
                <li>行107（宋晓丽）：0791-88122308</li>
                <li>行105（程兆兆、付琍）：0791-88123599</li>
                <li>行106（杨熙、刘炎梅）：0791-88122783</li>
                <li>行303（徐昌教、邱丹、张模）：0791-88122783</li>
                <li>行304（周雅娜、黄燕）：0791-88122783</li>
                <li>行305（夏慈、戴青、符海燕）：0791-88122783</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="BusinessAffairs-Title" slot="item3">
      <h1>商务学院</h1>
    </div>
    </Carousel>

  </div>
</template>

<script>
import Carousel from "./child/Carousel";
export default {
  name: "BusinessAffairs",
  components:{
    Carousel
  }
}
</script>

<style scoped>
.BusinessAffairs {
  position: relative;
}
.BusinessAffairs-Title {
  height: 950px;
  background: url("../../../../assets/img/faculty/BusinessAffairs/1.jpg") no-repeat;
  background-size: 100% 100%;
}
.BusinessAffairs-Title h1 {
  position: absolute;
  top: 150px;
  left: 120px;
  writing-mode: vertical-lr;
  font-size: 64px;
  line-height: 3.3;
  text-align: left;
  color: #0e3248;
}
.BusinessAffairs-Title-Content {
  position: absolute;
  top: 260px;
  left: 725px;
  width: 1000px;
  height: 600px;
  color: #000000;
  font-size: 24px;
}
.BusinessAffairs-Organization {
  height: 950px;
  background: url("../../../../assets/img/faculty/BusinessAffairs/2.jpg") no-repeat;
  background-size: 100% 100%;
}
.BusinessAffairs-Organization h1{
  position: absolute;
  top: 150px;
  left: 120px;
  writing-mode: vertical-lr;
  font-size: 64px;
  line-height: 3.3;
  text-align: left;
  color: #0e3248;
}
.BusinessAffairs-Organization-Content {
  position: absolute;
  top: 260px;
  left: 725px;
  width: 1000px;
  height: 600px;
  color: #000000;
  font-size: 24px;
}
.BusinessAffairs-Organization-Content-2 {
  position: absolute;
  top: 230px;
  left: -300px;
}
.BusinessAffairs-Organization-Content-3 {
  position: absolute;
  top: 230px;
  left: 450px;
}
</style>