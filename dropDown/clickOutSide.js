Vue.directive('clickoutside', {
    bind: function(el, binding, vnode){
        function documentHandler(e){
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                // binding.value 执行上下文
                binding.value(e)
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind: function(){
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
})