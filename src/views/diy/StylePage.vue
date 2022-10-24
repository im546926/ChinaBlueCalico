<template>
  <div class="StylePage">
    <div class="header">
      <img src="@/assets/back.png" alt="" @click="handleBack" />
    </div>
    <div class="text_wrapper">
      <span class="text">滑动选择下方小圆，点击大圆开始创作</span>
    </div>
    <div class="bigCircle_section">
      <img src="" alt="" @click="handleClick" />
    </div>
    <div class="rotate_section"></div>
  </div>
</template>

<script>
export default {
  name: "StylePage",
  methods: {
    handleClick() {
      this.$router.push("/ClassicStyle");
    },
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.StylePage {
  padding: 60px 32px;
  height: calc(100vh - 60px - 60px);

  .text_wrapper {
    margin-top: 62px;
    text-align: center;
  }
  .bigCircle_section {
    margin-top: 53px;
    text-align: center;
    img {
      width: 271px;
      height: 271px;
      border-radius: 50%;
      background: rgba(148, 165, 195, 1);
    }
  }
}
</style>
