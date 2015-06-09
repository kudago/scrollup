var scrollTo = require('scroll-to');
var extend = require('xtend/mutable');

function ScrollUp(el, options){

	if (!(this instanceof ScrollUp)) return new ScrollUp (el, options);

	//check what parametrs are recieved 
	if (arguments[1]){
		this.el = el;
	}else{
		if(arguments[0]){
			if(arguments[0] instanceof Element){
				this.el = el;
			}else {
				options = el;
			}
		}
	}

	if (!this.el){
		//if el isn't provided
		this.el = document.createElement('div');
		this.el.innerHTML = "▲<br><span>" + "back to top" + "</span>";
		this.appendEl.appendChild(this.el);
	}

	extend(this, options);

	this.el.classList.add("back-to-top-btn");
	this.el.setAttribute('hidden', true);

	window.addEventListener('scroll', this.hideShow.bind(this));
	this.el.addEventListener('click', this.moveToTop.bind(this));
}

var proto = ScrollUp.prototype;

//defaults
proto.scrollDistance = 900;
proto.animateScrollDuration = 500;
proto.ease = "out-cube";
proto.appendEl = document.body;
	

proto.hideShow = function(){
	var pageY = window.pageYOffset || document.documentElement.scrollTop;
	var innerHeight = this.scrollDistance || document.documentElement.clientHeight;

	if(pageY > innerHeight){
		this.el.removeAttribute('hidden');
	}else{
		this.el.setAttribute('hidden', true);
	}
}

proto.moveToTop = function(){
	scrollTo(0, 0, {
	ease: this.ease,
	duration: this.animateScrollDuration
	});
}


module.exports = ScrollUp;
