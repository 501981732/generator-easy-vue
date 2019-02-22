<template>
    <transition name="c-fade">
        <div class="c-comfirm " v-show="show">
            <transition name="c-zoom">
                <div class="c-comfirm-box skin" v-if="show">
                    <div class="c-comfirm-header" v-if="title">
                        <p>{{ title }}</p>
                    </div>
                    <div class="c-comfirm-body">
                        <p v-if="!useHTMLString">{{ body }}</p>
                        <div v-else v-html="body"></div>
                    </div>
                    <div
                        class="c-comfirm-footer"
                        :class="{ reverse: btnReverse }"
                    >
                        <div
                            class="c-comfirm-btn c-comfirm-confirm"
                            @click="handleConfirm('confirm')"
                        >
                            {{ confirmText }}
                        </div>
                        <div
                            class="c-comfirm-btn c-comfirm-cancle"
                            @click="handleConfirm('cancle')"
                        >
                            {{ cancleText }}
                        </div>
                    </div>
                </div>
            </transition>
            <div class="c-mask"></div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "confirm",
    components: {},
    data() {
        return {
            show: false
        };
    },
    props: {
        title: {
            type: String,
            default: ""
        },
        body: {
            type: String,
            default: ""
        },
        useHTMLString: {
            type: Boolean,
            default: false
        },
        cancleText: {
            type: String,
            default: "取消"
        },
        confirmText: {
            type: String,
            default: "确定"
        },
        btnReverse: {
            type: Boolean,
            default: false
        }
    },
    mounted() {},
    methods: {
        handleConfirm(val) {
            this.show = false;
            this.$emit(val);
        }
    },
    watch: {},
    computed: {}
};
</script>
<style lang="less" scoped>
// @import "./../assets/css/base.less";
// @import './../assets/css/animation.less';
@yellow: #ffbd00;
@gray: #333;
.c-comfirm-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 30px;
    // width: 80%;
    height: 504px;
    width: 529px;
    z-index: 1001;
    text-align: center;
    border-radius: 5px;
    // background-color: @white;
    font-size: 32px;
    box-sizing: border-box;
    .c-comfirm-header {
        text-align: center;
        font-weight: 700;
    }

    .c-comfirm-body {
        padding: 20px 0 30px;
        line-height: 45px;
        color: @gray;
        // border-bottom: 1px solid @gray;
        min-height: 36px;
    }

    // .c-comfirm-footer {
    //     display: flex;
    //     flex-direction: row;
    //     height: 80px;
    //     line-height: 80px;
    //     padding: 0  40px;
    //     .c-comfirm-btn {
    //         flex: 1;
    //         &:active {
    //             background: darken(@white, 20%);
    //         }
    //         &+.c-comfirm-btn {
    //             border-left: 1px solid @gray;
    //         }
    //     }
    // }
    .c-comfirm-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // height: 80px;
        // line-height: 80px;
        // padding:  40px;
        color: @yellow;
        font-size: 26px;
        .c-comfirm-btn {
            width: 40%;
            border: 1px solid currentColor;
            padding: 20px 0;
            border-radius: 35px;
            &:active {
                background: darken(@yellow, 20%);
            }
        }
        .c-comfirm-confirm {
            background: @yellow;
            color: @white;
        }
    }
    .reverse {
        flex-direction: row-reverse;
    }
}

.skin {
    .bg-image("./../assets/img/alert-bg");
    background-repeat: no-repeat;
    background-size: contain;
    padding: 200px 40px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>
