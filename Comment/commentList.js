Vue.component('list', {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
    render: function(h){
        var _this = this;
        var list = [];
        _this.list.forEach(function(item, index){
            var node = h('div', {
                attrs: {
                    class: 'list-item'
                },
                on: {
                    mouseenter: function(){
                        item.show = true;
                    },
                    mouseleave: function(){
                        item.show = false;
                    }
                }
            },[
                h('span',item.username+': '),
                h('div', {
                    attrs: {
                        class: 'list-msg'
                    }
                },[
                    h('p', item.message),
                    h('a', {
                        attrs: {
                            class: 'list-reply'
                        },
                        directives: [
                            {
                                name: 'show',
                                value: item.show
                            }
                        ],
                        on: {
                            click: function(){
                                _this.handleReply(index);
                            }
                        }
                    },' 回复 ')
                ])
            ])
            list.push(node)
        })
        if(_this.list.length){
            return h('div',{
                attrs: {
                    class: 'list'
                }
            },list);
        }else{
            return h('div',{
                attrs: {
                    class: 'list-nothing'
                }
            }, '留言板为空')
        }
    },
    methods: {
        handleReply: function(index){
            this.$emit('reply', index);
        }
    }
})