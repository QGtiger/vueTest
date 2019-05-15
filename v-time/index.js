var app = new Vue({
    el: '#app',
    data: {
        timeNow: (new Date()).getTime(),
        timeBefore: 1488930695721
    },
    methods: {
        handleAdd () {
            $('#app').append('<div class="appendDiv"></div><div class="appendDiv"></div><div class="appendDiv"></div>')
            var MyComponent = Vue.extend({
                template: '<div v-time="'+(new Date()).getTime()+'">我是异步加载上去的, {{ msg }}</div>',
                data: function(){
                    return {
                        msg: 'emm'
                    }
                }
            })
            new MyComponent().$mount('.appendDiv')
        }
    }
})