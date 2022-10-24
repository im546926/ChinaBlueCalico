<template>
  <div class="container">
    <div class="settings">
      <img src="@/assets/settings.png" alt="" @click="goToIndex" />
    </div>
    <div class="text_wrapper">
      <span class="text">- 选择设计风格 开始DIY -</span>
    </div>
    <div class="trendy_section" @click="handleClick('新潮风')">
      <img src="" alt="" />
      <span>新潮风</span>
    </div>
    <div class="classic_section" @click="handleClick('经典风')">
      <img src="" alt="" />
      <span>经典风</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(style) {
      this.$router.push("/StylePage");
    },
    goToIndex() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 60px 32px;
  height: calc(100vh - 60px - 60px);

  .text_wrapper {
    margin-top: 62px;
    text-align: center;
    .text {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 3px;
      line-height: 0px;
      color: rgba(53, 90, 133, 1);
    }
  }

  .trendy_section {
    margin-top: 31px;
    text-align: center;

    img {
      width: 212px;
      height: 212px;
      opacity: 1;
      border-radius: 32px;
      background: rgba(148, 165, 195, 1);
    }

    span {
      display: block;
      margin-top: 19px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      line-height: 0px;
      color: rgba(12, 42, 77, 1);
    }
  }
  .classic_section {
    margin-top: 31px;
    text-align: center;

    img {
      width: 212px;
      height: 212px;
      opacity: 1;
      border-radius: 32px;
      background: rgba(148, 165, 195, 1);
    }

    span {
      display: block;
      margin-top: 19px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 5px;
      line-height: 0px;
      color: rgba(12, 42, 77, 1);
    }
  }
}
</style>
