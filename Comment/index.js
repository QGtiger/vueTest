var app = new Vue({
    el: '#app',
    data: {
        username: '',
        message: '',
        list: []
    },
    methods: {
        handleSend () {
            var _this = this;
            if(_this.username.trim()===''){
                layer.msg("请输入昵称");
                return;
            }
            if(_this.message.trim()===""){
                layer.msg("请输入留言内容，并且内容不能只有空格");
                return;
            }
            _this.list.unshift({
                username: _this.username,
                message: _this.message,
                show: false
            });
            _this.message = '';
        },
        handleReply (index) {
            var name = this.list[index].username;
            this.message = '回复@'+name+': ';
            this.$refs.message.focus();
        }
    }
})