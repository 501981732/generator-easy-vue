<template>
    <div class="text-carousel" :class="carouselClass">
        <div class="text-carousel-cont" ref="wrapper">
            <p v-if='!useHTMLString' v-for="(text, index) in newList" :key="index" class="text-carousel-item">
                {{ text }}
            </p>
            <p v-for="(text, index) in newList" :key="index" class="text-carousel-item"><span v-html='text'></span></p>
        </div>
    </div>
</template>
<script>
export default {
    name: "textCarousel",
    components: {},
    props: {
        list: {
            type: Array,
            default: _ => []
        },
        carouselClass: {
            type: String,
            default: ""
        },
        useHTMLString: {
            type: Boolean,
            default: false
        },
        speed: {
            type: Number,
            default: 35
        },
        interval: {
            type: Number,
            default: 2500
        }
    },
    data() {
        return {
            newList: [...this.list, this.list[0]]
        };
    },
    mounted() {
        this.run();
    },
    methods: {
        run() {
            const OFFSET = document.getElementsByClassName(
                    "text-carousel-item"
                )[0].offsetHeight;
            let wrapper = this.$refs.wrapper,
                offset = 0,
                timer,
                num = Math.floor(wrapper.offsetHeight / OFFSET);
            setInterval(() =>{
                timer && clearInterval(timer);
                let step = 0;
                timer = setInterval(() =>{
                    wrapper.style.transform =
                        "translateY(-" + (offset + step) + "px)";
                    if (step == OFFSET) {
                        offset += OFFSET;
                        clearInterval(timer);
                    }
                    step++;
                }, this.speed);
                if (!(offset % ((num - 1) * OFFSET))) {
                    offset = 0;
                }
            }, this.interval);
        }
    },
    watch: {},
    computed: {}
};

</script>
<style lang="less" scoped>
.text-carousel {
    width: 600px;
    margin: 0 auto;
    line-height: 30px;
    height: 30px;
    box-sizing: border-box;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    overflow: hidden;

    .text-carousel-cont {
        p {
            transform: translateZ(0);
        }
    }
}

</style>
