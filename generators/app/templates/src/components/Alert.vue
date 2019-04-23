<template>
    <transition name="c-fade">
        <div class="c-alert-component c-mask" v-show="show">
            <transition name="c-fademove">
                <div :class="['c-alert-box', boxClass]" v-show="show">
                    <div class="c-alert-title">{{ title }}</div>
                    <div class="c-alert-subtitle" v-if="subtitle">
                        {{ subtitle }}
                    </div>
                    <div class="c-alert-body" v-if="body && !useHTMLString">
                        {{ body }}
                    </div>
                    <div
                        class="c-alert-body"
                        v-else-if="body"
                        v-html="body"
                    ></div>
                    <div class="c-alert-footer" v-if="footer" @click="close">
                        {{ footer }}
                    </div>
                    <slot></slot>
                    <div class="close icon" @click="close"></div>
                </div>
            </transition>
            <!-- <div class="c-mask"></div> -->
        </div>
    </transition>
</template>
<script>
export default {
    name: "alert",
    components: {},
    props: {
        // 父组件v-model='xxx'
        value: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        body: {
            type: String,
            default: ""
        },
        footer: {
            type: String,
            default: ""
        },
        boxClass: {
            type: String,
            default: ""
        },
        useHTMLString: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            show: this.value
        };
    },
    mounted() {},
    methods: {
        close() {
            this.show = false;
            this.$emit("close");
        }
    },
    watch: {
        value(val) {
            this.show = val;
        },
        show(val) {
            this.$emit("input", val);
        }
    },
    computed: {}
};
</script>
<style lang="less" scoped>
@alert-btn-red: #e13007;
.c-alert-box {
    text-align: center;
    background: #ffffff;
    padding: 25px 30px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    z-index: 1001;
    // background: #fff url(~@/assets/img/alert-bg-top.png) no-repeat;
    background: #fff  no-repeat;
    background-size: contain;
    height: 565px;
    width: 530px;
    padding-top: 160px;
    box-sizing: border-box;

    .c-alert-title {
        color: #333;
        font-size: 40px;
    }

    .c-alert-subtitle {
        color: #f1c967;
    }

    .close.icon {
        color: #fff;
        position: absolute;
        width: 18px;
        height: 18px;
        top: -80px;
        right: 10px;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid #fff;
        padding: 15px;
        &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 32px;
            height: 2px;
            background-color: currentColor;
            transform: translate(-50%) rotate(-45deg);
        }

        &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 32px;
            height: 2px;
            background-color: currentColor;
            transform: translate(-50%) rotate(45deg);
        }
    }
}

.c-alert-body {
    color: #535353;
    font-size: 26px;
    margin: 65px auto;
    line-height: 1.5;
}

.c-alert-footer {
    display: inline-block;
    width: 325px;
    height: 90px;
    line-height: 90px;
    color: @alert-btn-red;
    .linear-gradient2(to bottom, #ffe41c, 0%, #ffb30f, 100%);
    border-radius: 40px;
    box-shadow: 1px 10px 5px #ff6d0f;
    font-weight: 700;
    font-size: 40px;
    box-sizing: border-box;
    text-shadow: 2px 4px 2px #fff27b;
}
</style>
