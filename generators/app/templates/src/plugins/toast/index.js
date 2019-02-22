/**
 * @file toast插件
 * @example
 * useage:
 * this.$x.toast('你好')
 * this.$x.toast({
 *     message: '你好',
 *     position: 'top',
 *     duration: 2000,
 *     toastClass: ''
 * })
 */

import Vue from "vue";
import Toast from "@/components/Toast";

const defaultProps = {
    delayed: true,
    duration: 2000
};
const plugin = {
    install(vue, props = {}) {
        const ToastPlugin = Vue.extend(Toast);
        // toast实例 $vm
        let $vm = new ToastPlugin({
            el: document.createElement("div")
        });
        document.body.appendChild($vm.$el);

        function toast(options = {}) {
            // 如果当前显示 则return
            if ($vm.show) return;

            // 如果传参为字符串，则直接显示body 的文本
            if (typeof options === "string") {
                options = {
                    message: arguments[0]
                };
            }
            //配置优选级： 默认配置 < 全局配置 < 实例配置
            //$vm为默认配置
            //install时传入的props为全局设置
            //调取toast时传入的options为实例配置
            $vm = Object.assign($vm, defaultProps, props, options);
            $vm.show = true;
            // 支持延时消失 默认支持
            if ($vm.delayed) {
                setTimeout(_ => {
                    $vm.show = false;
                }, $vm.duration);
            }
            return new Promise((resolve, reject) => {
                $vm.$watch("show", val => {
                    resolve();
                });
            });
        }

        if (!vue.$x) {
            vue.$x = {
                toast
            };
        } else {
            vue.$x.toast = toast;
        }

        vue.mixin({
            created: function() {
                this.$x = vue.$x;
            }
        });
    }
};

export default plugin;
