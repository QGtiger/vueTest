var app = new Vue({
    el: '#app',
    data: {
        questions: [
            {
                text: '请问你的性别是:',
                choices: ['男','女','保密'],
                type: 'radio',
                answer: null,
                show: false,
            },
            {
                text: '请选择你的兴趣爱好:',
                choices: ['唱','跳','rap','打篮球'],
                type: 'checkbox',
                answer: [],
                show: false
            },
            {
                text: '请介绍一下自己',
                type: 'text',
                placeholder: '不少于10字',
                answer: '',
                show: false
            }
        ],
        active: 0,
        totalAnswer: true,
    },
})