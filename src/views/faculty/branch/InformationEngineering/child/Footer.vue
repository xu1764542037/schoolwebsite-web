<template>
  <div class="footer">
    <div class="footer-about">
      <a href="#"><img src="../../../../../assets/img/home/HomeFooter/collegeLogo.png" class="footer-about-img1" alt=""></a>
      <a href="#"><img src="../../../../../assets/img/home/HomeFooter/collegeFontEnglish.png" class="footer-about-img2" alt=""></a>
    </div>
    <div class="footer-below">
      <ul>
        <li>版权所有©江西现代职业技术学院</li>
        <li>地址：江西省南昌市昌东大学园区紫阳大道338号</li>
        <li>邮政编码：330095</li>
        <li>联系电话：0791-88123818</li>
        <li>赣ICP备05003325号-2</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  height: 150px;
  width: 100%;
  background-color: #0e3248;
}
.footer-below {
  margin-top: 20px;
}
.footer-below ul {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
}
.footer-below ul li {
  color: silver;
  font-size: 14px;
}
.footer-about {
  display: flex;
  justify-content: center;
  align-content: flex-end;
}
.footer-about-img1{
  width: 90px;
  height: 90px;
}
.footer-about-img2 {
  margin-top: 25px;
  height: 50px;
  width: 400px;
}
</style>