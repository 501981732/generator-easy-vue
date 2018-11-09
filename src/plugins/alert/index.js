import Vue from 'vue';
import Alert from '@/components/x-alert';

/**
 * [alert插件]
 * @type {Object}
 * useage:
 *this.$x.alert({
    title: '你好',
    subtitle: '我是副标题',
    body:'呵呵',
    delayed: true  //默认true
  })
    .then(val => {
        console.log('change');
    });
 */
const plugin = {
    install(vue, props = {}) {
        const AlertPlugin = Vue.extend(Alert);

        let $vm = new AlertPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);

        function alert(options = {
            delayed: true
        }) {
            if ($vm.show) return;
            // 如果传参为字符串，则直接显示body 的文本
            if (typeof options === 'string') {
                options = {
                    body: arguments[0]
                };
            }
            //配置优选级：实例配置 > 全部配置 > 默认配置
            $vm = Object.assign($vm, props, options);
            $vm.show = true;
            // 支持延时消失 默认支持
            if ($vm.delayed) {
                setTimeout(_ => {
                    $vm.show = false
                }, 3000)
            }
            return new Promise((resolve, reject) => {
                $vm.$watch('show', val => {
                    resolve();
                });
            });
        }

        if (!vue.$x) {
            vue.$x = {
                alert
            };
        } else {
            vue.$x.alert = alert;
        }
        vue.mixin({
            created: function() {
                this.$x = vue.$x;
            }
        });
    }
};

export default plugin;
