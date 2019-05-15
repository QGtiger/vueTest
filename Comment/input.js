Vue.component('vInput', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    render: function(h){
        var _this = this;
        return h('div', [
            h('span', '昵称: '),
            h('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: _this.value
                },
                on: {
                    input: function(event){
                        _this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    }
})

Vue.component('vTextarea', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    render: function(h){
        var _this = this;
        return h('div', [
            h('span', '留言内容: '),
            h('textarea', {
                attrs: {
                    placeholder: '请输入内容'
                },
                domProps: {
                    value: _this.value
                },
                ref: 'message',
                on: {
                    input: function(event){
                        _this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    methods: {
        focus: function(){
            this.$refs.message.focus();
        }
    }
})