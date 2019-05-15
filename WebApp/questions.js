Vue.component('questions', {
    template: '<div>\
        <div v-for="(question,index) in quzs" v-if="question.show">\
            <div class="question-text">\
                {{ question.text }}\
            </div>\
            <div class="question-choices" v-if="question.type!==text">\
                <div class="question-choice" v-for="(choice,index) in question.choices">\
                    <input :type="question.type" v-model="question.answer" :value="index" :id="choice">\
                    <label :for="choice">{{ choice }}</label>\
                </div>\
            </div>\
            <div class="question-choices" v-else>\
                <div class="question-choice">\
                    <textarea :placeholder="question.placeholder" v-model="question.answer"></textarea>\
                </div>\
            </div>\
            <div class="question-meta">\
                <button @click="handleSubmit" v-show="index === questionLength-1" :disabled="isCorrent(index)">提交</button>\
                <button @click="handleNext" v-show="index !== questionLength-1" :disabled="isCorrent(index)">下一题</button>\
                <button @click="handleLast" v-show="index !== 0">上一题</button>\
                <button @click="handleReset(index)">重置</button>\
            </div>\
        </div>\
        </div>',
    props: {
        questions: {
            type: Array,
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data: function(){
        return {
            quzs: this.questions,
            answer: [],
            text: 'text',
            questionLength: this.questions.length,
            show:false,
            active: this.value,
        }
    },
    mounted: function(){
        console.log(this.active);
        this.updateStatus()
    },
    watch: {
        active: function(){
            this.updateStatus();
            this.$emit('input', this.active)
        }
    },
    methods: {
        updateStatus (){
            var _this = this;
            _this.questions.forEach(function(question, index){
                question.show = index === _this.active;
            })
        },
        handleNext () {
            this.active+=1;
        },
        handleLast () {
            this.active-=1;
        },
        handleReset (index) {
            this.questions[index].answer= this.questions[index].type==='checkbox'?[]:"";
        },
        handleSubmit () {

        },
        isCorrent (index) {
            if(this.questions[index].type==='radio'){
                return this.questions[index].answer === null;
            }else if(this.questions[index].type==='checkbox'){
                var length = this.questions[index].answer.length;
                return !(length>=2 && length<=3);
            }else{
                return this.questions[index].answer.length<10
            }
            
        }
    }
})