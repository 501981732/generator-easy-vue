<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view :key="$route.fullpath" class="child-view " />
        </transition>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            transitionName: ''
        }
    },
    watch: {
        '$route'(to, from) {
            const toIndex = to.meta.zIndex
            const fromIndex = from.meta.zIndex
            // this.transitionName = toIndex < fromIndex ? 'slide-bottom' : 'slide-top'
            toIndex && fromIndex && (this.transitionName = toIndex < fromIndex ? 'slide-bottom' : 'slide-top')
        }
    }
}

</script>
<style>
#app {
    height: 100%;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.child-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all .6s cubic-bezier(.55, 0, .1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    transform: translate(-100%, 0);
}

/*原页面不变，新页面覆盖*/
.slide-left-leave-active,.slide-right-leave-active {
    opacity: 1;
    transform: translate(0, 0);
}

.slide-top-enter,
.slide-bottom-leave-active {
    opacity: 0;
    transform: translate(0, 100%);
}

.slide-top-leave-active,
.slide-bottom-enter {
    opacity: 0;
    transform: translate(0,-100%);
}
/*原页面不变，新页面覆盖*/
.slide-top-leave-active,.slide-bottom-leave-active {
    opacity: 1;
    transform: translate(0, 0);
}
</style>
