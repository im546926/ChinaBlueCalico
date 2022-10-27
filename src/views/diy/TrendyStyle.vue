<template>
  <div class="TrendyStyle">
    <div class="header">
      <img src="@/assets/back.png" alt=""  @click="handleBack"/>
      <button>我的DIY</button>
    </div>
    <div class="circle">
      <img src="" alt="" />
    </div>
    <div class="preview_section">
      <img src="" alt="" />
    </div>
    <div class="button_wrapper">
      <button>查看使用效果</button>
      <button>一键定制</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendyStyle",
  methods:{
    handleBack() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped lang="scss">
.TrendyStyle {
  padding: 60px 32px;
  height: calc(100vh - 60px - 60px);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 93px;
      height: 36px;
      border-radius: 20px;
      border: transparent;
      background: rgba(191, 201, 201, 1);

      /** 文本1 */
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 3px;
      line-height: 0px;
      color: rgba(53, 90, 133, 1);
      text-align: center;
    }
  }

  .circle {
    margin-top: 93px;
    img {
      width: 115px;
      height: 115px;
      border-radius: 50%;
      background: rgba(148, 165, 195, 1);
    }
  }

  .preview_section {
    margin-top: 74px;
    img {
      width: 350px;
      height: 350px;
      opacity: 1;
      background: rgba(255, 255, 255, 1);
    }
  }

  .button_wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    button {
      width: 161px;
      height: 72px;
      opacity: 1;
      border-radius: 60px;

      border: transparent;
      /** 文本1 */
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 4px;
      line-height: 0px;
      color: rgba(229, 229, 229, 1);
      &:first-of-type {
        background: rgba(53, 90, 133, 1);
      }
      &:last-of-type {
        background: rgba(75, 121, 173, 1);
      }
    }
  }
}
</style>
