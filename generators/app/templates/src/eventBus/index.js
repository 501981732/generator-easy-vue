import Vue from 'vue'
const EventBus = new Vue();
/**
 * 事件总线
 * @example
 * this.$bus.$emit("someEvent", someData)
 * this.$bus.$on("someEvent", (v) => {console.log(v)})
 *
 */
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})
