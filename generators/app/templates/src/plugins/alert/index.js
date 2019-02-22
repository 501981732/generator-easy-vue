/**
 * @file alert插件
 * @example
 *this.$x.alert({
 *   title: '你好',
 *   subtitle: '我是副标题',
 *   body:'呵呵',
 *   delayed: true,
 *   duration: 3000,
 *   boxClass: ''
 * })
 *   .then(val => {
 *       console.log('change');
 *   });
 */

import Vue from 'vue';
import Alert from '@/components/Alert.vue';

const defaultProps = {
    delayed: true,
    duration: 3000
}

const plugin = {
    install(vue, props = {}) {
        const AlertPlugin = Vue.extend(Alert);

        let $vm = new AlertPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vm.$el);

        function alert(options = {}) {
            if ($vm.show) return;


            // 如果传参为字符串，则直接显示body 的文本
            if (typeof options === 'string') {
                options = {
                    body: arguments[0]
                };
            }
            //配置优选级： 组件默认配置 < 插件默认配置 < 全局配置 < 实例配置
            $vm = Object.assign($vm, defaultProps, props, options);
            $vm.show = true;
            // 支持延时消失 默认支持
            if ($vm.delayed) {
                setTimeout(_ => {
                    $vm.show = false
                }, $vm.duration)
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
