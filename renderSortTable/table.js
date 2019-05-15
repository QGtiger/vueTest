Vue.component('vTable', {
    props: {
        columns: {
            type: Array,
            default: function(){
                return []
            }
        },
        data: {
            type: Array,
            default: []
        },
        width: {
            type: String,
            default:'100%'
        }
    },
    render: function(h){
        var _this = this;
        var ths = [];
        var trs = [];
        this.currentData.forEach(function(item){
            var tds = [];
            //相当于排序
            _this.currentColumns.forEach(function(cell){
                tds.push(h('td', item[cell.key]));
            })
            trs.push(h('tr', tds));
        });
        this.currentColumns.forEach(function(col, index){
            if(col.sortable){
                var th = h('th', [
                    h('span', col.title),
                    //升序
                    h('a', {
                        class: {
                            on: col._sortType === 'asc'
                        },
                        on: {
                            click: function(){
                                // 升序函数
                                _this.handleSortByAsc(index)
                            }
                        }
                    }, '↑'),
                    // 降序
                    h('a', {
                        class: {
                            on: col._sortType === 'desc'
                        },
                        on: {
                            click: function(){
                                //降序函数
                                _this.handleSorByDesc(index)
                            }
                        }
                    }, '↓')
                ])
                ths.push(th);
            }else{
                ths.push(h('th', col.title));
            }
        })
        return h('table',{style:{width:this.width}},[
            h('thead',[
                h('tr', ths)
            ]),
            h('tbody', trs)
        ])
    },
    data: function(){
        return {
            currentColumns: [],
            currentData: []
        }
    },
    methods: {
        makeColumns: function(){
            this.currentColumns = this.columns.map(function(col, index){
                //添加一个字段标识当前排序的状态
                col._sortType = 'normal';
                //添加一个字段标识当前列在数组中的索引
                col._index = index;
                return col;
            });
        },
        makeData: function(){
            this.currentData = this.data.map(function(row, index){
                //添加一个字段表示当前行在数组中的索引
                row._index = index;
                return row;
            })
        },
        handleSortByAsc (index) {
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal'
            });
            this.currentColumns[index]._sortType='asc';

            this.currentData.sort(function(a,b){
                return a[key]>b[key]?1:-1;
            });
        },
        handleSorByDesc (index) {
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function(col){
                col._sortType = 'normal'
            });
            this.currentColumns[index]._sortType='desc';

            this.currentData.sort(function(a,b){
                return a[key]<b[key]?1:-1;
            });
        }
    },
    mounted: function(){
        this.makeColumns();
        this.makeData();
        console.log(this.width)
    },
    watch: {
        data: function(){
            this.makeData();
            var sortedColumn = this.currentColumns.filter(function(col){
                return col._sortType !== 'normal';
            });

            if(sortedColumn.length>0){
                if(sortedColumn[0]._sortType === 'asc'){
                    this.handleSortByAsc(sortedColumn[0]._index);
                }else{
                    this.handleSorByDesc(sortedColumn[0]._index);
                }
            }
        }
    }
})