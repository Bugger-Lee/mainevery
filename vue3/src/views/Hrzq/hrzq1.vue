<!--
 * @Author: lijian
 * @since: 2022-06-26 14:33:28
 * @lastTime: 2022-06-26 15:15:30
 * @LastAuthor: lijian
 * @message: 
-->
<template>
  <div class="hr-boxs">
    <header>
      <img src="../../assets/hrzq/hr_logo.png" alt="" />
    </header>
    <img src="../../assets/hrzq/hr_1.jpg" alt="" class="hr-imgs" />
    <div class="hr-content">
      <p class="hr-title">华证新闻</p>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券保荐的元道通信IPO项目顺利过会，今年已过会3单
          <span>2021-08-06</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券保荐的德石股份IPO项目成功过会，今年已过会2单IPO项目
          <span>2021-07-26</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券积极承销地方政府债 踊跃支持区域和地方经济发展
          <span>2021-07-23</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券承销的汉口银行2021年小微金融债券（第一期）成功发行
          <span>2021-06-02</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券参加2020年农业产业化龙头企业百强推介暨百强国龙进贵州活动
          <span>2021-05-24</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券2020年公司债券（疫情防控债）（第一期）成功发行
          <span>2021-05-24</span>
        </div>
      </div>
      <div class="ul-boxs">
        <div class="boxs-li">
          华融证券承销的保定国控非公开发行2021年公司债券（第一期）成功发行
          <span>2021-05-24</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style lang="scss" scoped>
.hr-boxs {
  header {
    height: 60px;
    width: 100%;
    background: #c70610;
    img {
      width: 135px;
      padding-top: 18px;
      padding-left: 25px;
    }
  }
  .hr-imgs {
    width: 100%;
  }
  .hr-content {
    padding: 0 15px;
    .hr-title {
      padding-left: 43px;
      height: 64px;
      line-height: 64px;
      background: url('../../assets/hrzq/hr_right_bg.png') 0px 11px no-repeat;
      font-size: 18px;
      color: #4c4c4c;
      font-weight: bold;
    }
    .ul-boxs {
      border-bottom: 1px dashed #d2d2d2;
      background: url('../../assets/hrzq/new_jiantou.jpg') 0px 12px no-repeat;
      padding-left: 23px;
      .boxs-li {
        line-height: 30px;
        color: #4c4c4c;
        font-size: 14px;
        display: block;
      }
      span {
        display: inline-block;
        float: right;
      }
    }
  }
}
</style>
