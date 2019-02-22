<template>
    <transition name="c-fade">
        <div :class="['c-toast', toastPosition, toastClass]" v-show="show">
            <i v-show="toastClass"></i> <slot></slot> {{ message }}
        </div>
    </transition>
</template>
<script>
export default {
    name: "toast",
    components: {},
    props: {
        message: {
            type: String,
            default: ""
        },
        position: {
            type: String,
            default: ""
        },
        toastClass: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            show: false
        };
    },
    mounted() {
        console.log(this.position);
    },
    methods: {
        close() {
            this.show = false;
        }
    },
    watch: {
        show() {
            console.log("change");
        }
    },
    computed: {
        toastPosition() {
            let tClass = "";
            switch (this.position) {
                case "top":
                    tClass = "c-toast-top";
                    break;
                case "bottom":
                    tClass = "c-toast-bottom";
                    break;
                default:
                    tClass = "c-toast-center";
            }
            return tClass;
        }
    }
};
</script>
<style lang="less" scoped>
// @import '../assets/css/animation.less';
.c-toast {
    position: fixed;
    transform: translate(-50%, -50%);
    padding: 15px;
    max-width: 80%;
    z-index: 1002;
    text-align: center;
    border-radius: 8px;
    font-size: 24px;
    line-height: 1;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
}
.c-toast-center {
    top: 50%;
    left: 50%;
}
.c-toast-top {
    top: 100px;
    left: 50%;
}
.c-toast-bottom {
    bottom: 100px;
    left: 50%;
}
</style>
