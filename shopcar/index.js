var app = new Vue({
    el: "#app",
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 3455,
                count: 2
            },
            {
                id: 2,
                name: 'HuaWei P30Pro',
                price: 7966,
                count: 6
            },
            {
                id: 3,
                name: 'iPhone XR',
                price: 5499,
                count:4
            }
        ]
    },
    methods: {
        handleReduce: function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count -= 1;
        },
        handleAdd: function(index){
            this.list[index].count ++;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        }
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(var i = 0;i < this.list.length; i++){
                var item = this.list[i]
                total += item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
})