var app = new Vue({
    el: '#app',
    data: {
        columns: [
            {
                title: '姓名',
                key: 'name',
            },
            {
                title: '年龄',
                key: 'age',
                sortable: true
            },
            {
                title: '出生日期',
                key: 'birthday',
                sortable: true
            },
            {
                title: '地址',
                key: 'address'
            }
        ],
        data: [
            {
                name: '小明',
                age: 18,
                birthday: '1997-12-11',
                address: '北京朝阳区'
            },
            {
                name: '小黄',
                age: 19,
                birthday: '1997-12-31',
                address: '北京朝阳区'
            },
            {
                name: '小花',
                age: 16,
                birthday: '2003-12-11',
                address: '杭州余杭'
            },
            {
                name: '小蛋',
                age: 15,
                birthday: '2002-12-11',
                address: '北京蛋蛋区'
            },
            {
                name: '小绿',
                age: 21,
                birthday: '1998-12-11',
                address: '北京绿帽区'
            }
        ],
        width: "100%"
    },
    methods: {
        handleAddData: function(){
            this.data.push({
                name: '小鸡',
                age: 12,
                birthday: '2007-12-11',
                address: '吐鲁木齐鸡巴区'
            })
        }
    }
})