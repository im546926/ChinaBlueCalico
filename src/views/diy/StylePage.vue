<template>
  <div class="StylePage">
    <div class="header">
      <img src="@/assets/back.png" alt="" @click="handleBack"/>
    </div>
    <div class="text_wrapper">
      <span class="text">滑动选择下方小圆，点击大圆开始创作</span>
    </div>
    <div class="bigCircle_section">
      <img src="" alt="" @click="handleClick"/>
    </div>
    <div class="rotate_section">
      <ul class="rotate_group">
        <li class="rotate-item" v-for="index in 8" :key="index" :data-base-deg="rotateDeg+45*(index-1)"
            :style="handleStyle(rotateDeg+45*(index-1))"
            @click.capture="handleRotate()">
          <span class="background-holder" style="background: rgba(148, 165, 195, 1)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "StylePage",
  data() {
    return {
      rotateDeg: 0
    }
  },
  methods: {
    handleClick() {
      this.$router.push("/ClassicStyle");
    },
    handleBack() {
      this.$router.go(-1);
    },
    handleStyle(deg) {
      return {transform: `rotate(${deg}deg)`}
    },
    handleRotate(e) {
      this.rotateDeg += 45
    }
  },
};
</script>

<style lang="scss" scoped>
.StylePage {
  padding: 60px 32px 0 32px;
  height: calc(100vh - 60px);
  overflow: hidden;

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

  .rotate_section {
    position: relative;
    display: block;
    text-align: center;
    width: calc(100% + 64px);
    transform: translateX(-32px);
    height: 40vh;
    margin: 0 auto;
    overflow: hidden;

    .rotate_group {
      position: absolute;
      display: block;
      width: 100%;
      transform: translateX(-50px);
      padding: 0;
      margin: 0;
      z-index: 10;

      li {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        width: 80px;
        height: 80px;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        border-radius: 50%;
        transition: all 1s ease-in-out;
        transform: rotate(90deg);
        transform-origin: center 260px;

        &:nth-of-type(2) {
          transform: rotate(135deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(3) {
          transform: rotate(180deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(4) {
          transform: rotate(225deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(5) {
          transform: rotate(270deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(6) {
          transform: rotate(315deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(7) {
          transform: rotate(360deg);
          transform-origin: center 260px;
        }

        &:nth-of-type(8) {
          transform: rotate(305deg);
          transform-origin: center 260px;
        }

        & .background-holder {
          position: absolute;
          display: block;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          visibility: visible;
          transition: opacity 0.6s ease-in-out, visibility 0.6s ease-in-out;
        }
      }
    }
  }
}
</style>
