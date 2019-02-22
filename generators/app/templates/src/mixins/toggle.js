export const toggle = {
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
}
