<template>
  <div class="hello">
    <h1>{{ msg }}</h1><%if(layout == 'vw'){%>
    <vw-demo /><%}%>
    <button @click='showAlert'>button</button>
  </div>
</template>

<script>
  // import vwDemo from '@/components/vwDemo.vue'
export default {
  name: 'HelloWorld',
  // components: {vwDemo},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    
  },
  methods: {
    showAlert() {
        this.$x.alert({
            title: '你好',
            subtitle: '我是副标题',
            body:'呵呵',
            delayed: true
        })
        .then(val => {
            console.log('change');
        });
    }
  }
}
</script>

<style scoped >
h1 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 50px;
}
a {
  color: #42b983;
}
</style>
