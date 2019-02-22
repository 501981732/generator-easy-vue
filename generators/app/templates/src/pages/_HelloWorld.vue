<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <!-- <vw-demo /> -->
        <div @click="showAlert">showAlert</div>
        <div @click="showLoading">showLoading</div>
        <div @click="showToast">showToast</div>
        <div @click="showConfirm">showConfirm</div>
    </div>
</template>

<script>
// import vwDemo from '@/components/vwDemo.vue'
export default {
    name: "HelloWorld",
    // components: {vwDemo},
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    methods: {
    showAlert() {
        this.$x.alert({
            title: '你好',
            subtitle: '我是副标题',
            body:'呵呵',
            delayed: false
        })
        .then(val => {
            console.log('change');
        });
    },
    showConfirm() {
       this.$x.confirm({
          title:'提示1',
           body: '1',
           cancleText: '取消',
           confirmText: '确定',
           btnReverse: false, //按钮是否反正
           useHTMLString: 'false' //是否使用动态HTML插入
       }).then(res => {
           console.log(res)     //根据res判断是取消还是确定
       })
    },
    showToast() {
        this.$x.toast({
            message: '你好',
            position: 'top',
            duration: 2000,
            toastClass: ''
        })
    },
    showLoading() {
        this.$x.loading.show()
    }
    }
};
</script>

<!-- <style scoped lang="scss"> -->
<style scoped lang="less">
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
