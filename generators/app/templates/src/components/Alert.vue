<template>
    <transition name="c-fade">
        <div class="c-alert-component" v-show="show">
            <transition name="c-zoom">
                <div :class="['c-alert-box', boxClass]" v-show="show">
                    <div class="c-alert-title">{{ title }}</div>
                    <div class="c-alert-subtitle" v-if="subtitle">
                        {{ subtitle }}
                    </div>
                    <div class="c-alert-body" v-if="body">{{ body }}</div>
                    <slot></slot>
                    <div class="close icon" @click="close"></div>
                </div>
            </transition>
            <div class="c-mask"></div>
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
        boxClass: {
            type: String,
            default: ""
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

    .c-alert-title {
        color: #f1c967;
    }

    .c-alert-subtitle {
        color: #f1c967;
    }

    .close.icon {
        color: #000;
        position: absolute;
        margin-top: 0;
        margin-left: 0;
        width: 18px;
        height: 18px;
        top: 5px;
        right: 10px;
        cursor: pointer;

        &:before {
            content: "";
            position: absolute;
            top: 10px;
            left: 0;
            width: 18px;
            height: 1px;
            background-color: currentColor;
            transform: rotate(-45deg);
        }

        &:after {
            content: "";
            position: absolute;
            top: 10px;
            left: 0;
            width: 18px;
            height: 1px;
            background-color: currentColor;
            transform: rotate(45deg);
        }
    }
}
</style>
