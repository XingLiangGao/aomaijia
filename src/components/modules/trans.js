import Vue from 'vue'
Vue.directive('trans-ition',{
	inserted(el){
        var current = 0;
		el.onclick=function(e){
          
                current = (current+180)%360;
                this.style.transform = 'rotate('+current+'deg)';
                this.style.transition = "1s";
                // e.stopPropagation();
            }
	}
})
