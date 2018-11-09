<template>
  <transition name='fade'>
    <div class="alert-box" v-show='show'>
      <div class='alert-title'>
        {{title}}
      </div>
      <div class='alert-subtitle' v-if='subtitle'>
        {{subtitle}}
      </div>
      <div class='alert-body' v-if='body'>
        {{body}}
      </div>
      <slot></slot>
      <div class="close icon" @click='close'></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'x-alert',
  components: {},
  props: {
    // 父组件v-model='xxx'
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: this.value
    }
  },
  mounted() {

  },
  methods: {
    close() {
      this.show = false
      this.$emit('close')
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
    }
  },
  computed: {

  }
}

</script>
<style lang='<%= cssPrepeocessor%>' scoped>
.alert-box {
  text-align: center;
  background: #FFFFFF;
  padding: 25px 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  z-index: 1000;

  .alert-title {
    color: #F1C967;
  }

  .alert-subtitle {
    color: #F1C967;
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
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      width: 18px;
      height: 1px;
      background-color: currentColor;
      transform: rotate(-45deg);
    }

    &:after {
      content: '';
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
