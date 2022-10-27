<template>
  <div class="WelcomePage">
    <span class="title">我国非物质文化遗产</span>
    <span class="FirstLine">您购买的蓝印花布周边收益</span>
    <span class="SecondLine"> 将用于蓝印花布纹样数字化保护 </span>
    <div class="img_wrapper">
      <img src="" alt=""/>
    </div>
    <button class="dataBase" @click="handleClick('databasePreview')">
      蓝印花布纹样数据库
    </button>
    <button class="diy" @click="handleClick('DIYPage')">
      个性化定制专属纹样
    </button>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
  methods: {
    handleClick(route) {
      this.$router.push(`/${route}`);
    },
  },
};
</script>

<style scoped lang="scss">
.WelcomePage {
  position: relative;
  padding-top: 40px;
  height: calc(100vh - 40px);
  text-align: center;

  background: url("~@/assets/bk.png") -100px;

  span {
    display: block;
    color: rgba(249, 249, 249, 1);
    z-index: 1;
  }

  .title {
    margin-top: 40px;
    font-size: 34px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 44.2px;
  }

  .FirstLine,
  .SecondLine {
    margin-top: 16px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28.8px;
  }

  .img_wrapper {
    margin-top: 20px;

    img {
      width: 250px;
      height: 250px;
      background: rgba(148, 165, 195, 1);
    }
  }

  // 按钮
  button {
    width: 309px;
    height: 72px;
    border: transparent;
    border-radius: 60px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    /** 文本1 */
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(255, 255, 255, 1);
    text-align: center;

    &.dataBase {
      margin-top: 47px;
    }

    &.diy {
      margin-top: 29px;
    }
  }
}
</style>
