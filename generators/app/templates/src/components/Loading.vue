<template>
    <transition name="c-fade">
        <div class="c-loading-box c-mask" v-show="value">
<!--             <div class="c-loading-content">
                <div class="animate">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="text">{{ text }}</div>
            </div> -->
<figure>
    <div class="dot white"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
</figure>
        </div>
    </transition>
</template>
<script>
export default {
    name: "loading",
    props: {
        value: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: "拼命加载中..."
        }
    },
    data() {
        return {
            show: this.value
        };
    },
    // 实现 v-model <loading v-model="isLoading"></loading>
    watch: {
        value(v) {
            this.show = v;
        },
        show(v) {
            this.$emit("input", v);
        }
    }
};
</script>
<style lang="less" scoped>
// @import './../assets/css/animation.less';
// @import "../assets/css/base.less";

.c-loading-box {
    // position: relative;
    // text-align: center;

    .c-loading-content {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        // width: 140px;
        min-height: 140px;
        // margin-left: -55px;
        padding: 10px;
        background: hsla(0, 0%, 7%, 0.7);
        text-align: center;
        border-radius: 5px;
        color: #fff;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .animate {
        .line {
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 15px;
            background-color: #4b9cdb;
        }

        .line:nth-last-child(1) {
            animation: loadingC 0.6s 0.1s linear infinite;
        }

        .line:nth-last-child(2) {
            animation: loadingC 0.6s 0.2s linear infinite;
        }

        .line:nth-last-child(3) {
            animation: loadingC 0.6s 0.3s linear infinite;
        }
    }

    .text {
        margin: 0 0 15px;
        font-size: 24px;
    }
}

@keyframes loadingC {
    0 {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0, 15px);
    }

    100% {
        transform: translate(0, 0);
    }
}
// update
figure {
  font-size: 12px;
  position: absolute;
  margin: auto;
  top: 0; bottom: 0; left: 0; right: 0;
  width: 6.250em;
  height: 6.250em;
  animation: rotate 2.4s linear infinite;
}
.white {
  top: 0; bottom: 0; left: 0; right: 0;
  background: white;
  animation: flash 2.4s linear infinite;
  opacity: 0;
}
.dot {
  position: absolute;
  margin: auto;
  width: 2.4em; height: 2.4em;
  border-radius: 100%;
  transition: all 1s ease;
}
.dot:nth-child(2) { top: 0; bottom: 0; left: 0; background: #FF4444; animation: dotsY 2.4s linear infinite; }
.dot:nth-child(3) { left: 0; right: 0; top: 0; background: #FFBB33; animation: dotsX 2.4s linear infinite; }
.dot:nth-child(4) { top: 0; bottom: 0; right: 0; background: #99CC00; animation: dotsY 2.4s linear infinite; }
.dot:nth-child(5) { left: 0; right: 0; bottom: 0; background: #33B5E5; animation: dotsX 2.4s linear infinite; }

@keyframes rotate {
  0% { transform: rotate( 0 ); }
  10% { width: 6.250em; height: 6.250em; }
  66% { width: 2.4em; height: 2.4em; }
  100%{ transform: rotate(360deg); width: 6.250em; height: 6.250em; }
}

@keyframes dotsY {
  66% { opacity: .1; width: 2.4em; }
  77%{ opacity: 1; width: 0; }
}
@keyframes dotsX {
  66% { opacity: .1; height: 2.4em;}
  77%{ opacity: 1; height: 0; }
}

@keyframes flash {
  33% { opacity: 0; border-radius: 0%; }
  55%{ opacity: .6; border-radius: 100%; }
  66%{ opacity: 0; }
}

</style>
