<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/back.png" alt="" @click="handleBack" />
      <span>蓝印花布纹样数据库</span>
    </div>
    <div class="input_wrapper"></div>
    <div class="tag_wrapper">
      <span class="chosen">几何</span>
      <span>植物花卉</span>
      <span>单独</span>
      <span>中心</span>
      <span>单元素</span>
    </div>
    <div class="data_preview_section">
      <div class="data_preview">
        <div class="bottom"></div>
      </div>
      <div class="data_preview"><div class="bottom"></div></div>
      <div class="data_preview"><div class="bottom"></div></div>
      <div class="data_preview"><div class="bottom"></div></div>
      <div class="data_preview"><div class="bottom"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "databasePreview",
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 60px 12px;
  .header {
    display: flex;
    align-items: center;
    margin-left: 20px;
    span {
      margin-left: 24px;
      /** 文本1 */
      font-size: 20px;
      font-weight: 400;
      letter-spacing: 3px;
      line-height: 32px;
      color: rgba(1, 2, 27, 1);
    }
  }

  .input_wrapper {
    margin-top: 40px;
  }

  .tag_wrapper {
    margin-top: 38px;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    span {
      display: inline-block;
      padding: 0 27px;
      margin-left: 10px;
      height: 42px;
      line-height: 42px;
      border-radius: 37px;
      /** 文本1 */
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
      color: rgba(53, 90, 133, 1);
      background: rgba(191, 201, 201, 1);
      &.chosen {
        color: rgba(255, 255, 255, 1);
        background: rgba(53, 90, 133, 1);
      }
      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  .data_preview_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 9px;
    .data_preview {
      display: inline-block;
      position: relative;
      width: 167px;
      height: 229px;
      margin-top: 16px;
      border-radius: 24px;
      background: rgba(191, 201, 201, 1);
      .bottom {
        position: absolute;
        width: 100%;
        height: 77px;
        bottom: 0;
        border-radius: 0px 0px 24px 24px;
        background: rgba(210, 217, 217, 1);
        backdrop-filter: blur(10px);
      }
    }
  }
}
</style>
