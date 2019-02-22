<template>
    <transition name="c-fade">
        <div class="c-loading-box c-mask" v-show="value">
            <!-- <div class=""></div> -->
            <div class="c-loading-content">
                <div class="animate">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="text">{{ text }}</div>
            </div>
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
</style>
