<template>
  <div class="ClassicStyle">
    <div class="header">
      <img src="@/assets/back.png" alt="" @click="handleBack" />
      <button @click="handleFinish">完成</button>
    </div>
    <div class="text_wrapper">
      <span>手指滑动屏幕，可缩放图案大小与形态</span>
    </div>
    <div class="img_wrapper">
      <img src="" alt="" />
    </div>
    <div class="text_wrapper">
      <span>滑动选择元素，在上面方框编辑</span>
    </div>
    <div class="bottom">
      <div class="img_scroll" v-show="this.modify === 'pattern'"></div>
      <div class="color_scroll" v-show="this.modify === 'color'">
        <div class="color_block"></div>
        <div class="color_block chosen"></div>
        <div class="color_block"></div>
        <div class="color_block"></div>
        <div class="color_block"></div>
        <div class="color_block"></div>
        <div class="color_block"></div>
      </div>
      <div class="choose_section">
        <span @click="handleClick('pattern')">选图案</span>
        <span @click="handleClick('color')">选底色</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClassicStyle",
  data() {
    return {
      modify: "pattern",
    };
  },
  computed: {},
  methods: {
    handleClick(option) {
      this.modify = option;
    },
    handleFinish() {
      this.$router.push("/TrendyStyle");
    },
    handleBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.ClassicStyle {
  padding-top: 60px;
  height: calc(100vh - 60px);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    button {
      width: 93px;
      height: 36px;
      opacity: 1;
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

  .text_wrapper {
    margin-top: 84px;
    text-align: center;
    span {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 5px;
      line-height: 0px;
      color: rgba(53, 90, 133, 1);
    }
  }
  .img_wrapper {
    margin-top: 25px;
    width: 100vw;
    height: 351px;
    background: black;
  }

  .bottom {
    margin-top: 25px;
    .img_scroll {
      padding: 5px 10px;
      height: 100px;
      background: rgba(191, 201, 201, 1);
    }
    .color_scroll {
      padding: 5px 10px;
      height: 100px;
      background: rgba(255, 255, 255, 1);
      white-space: nowrap;
      overflow-x: scroll;
      div {
        display: inline-block;
        vertical-align: middle;

        margin-left: 21px;
        &:first-of-type {
          margin-left: 0;
        }
      }
      .color_block {
        width: 60px;
        height: 60px;
        background: yellow;
      }
      .chosen {
        width: 100px;
        height: 100px;
        background: red;
      }
    }

    .choose_section {
      span {
        display: inline-block;
        height: 42px;
        width: 50%;
        text-align: center;
        /** 文本1 */
        font-size: 24px;
        line-height: 42px;
        font-weight: 400;
        letter-spacing: 3px;
        color: rgba(255, 255, 255, 1);
        &:first-of-type {
          background: rgba(53, 90, 133, 1);
        }
        &:last-of-type {
          background: rgba(75, 121, 173, 1);
        }
      }
    }
  }
}
</style>
