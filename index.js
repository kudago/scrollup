var scrollTo = require('scroll-to');
var extend = require('xtend/mutable');
var q = require('queried');

function ScrollUp(el, options){

	if (!(this instanceof ScrollUp)) return new ScrollUp (el, options);

	if (el.length) {
		//array or DOM collection
		this.el = el[0];
	} 
	else if (el instanceof Element){
		//selector or DOM element
		this.el = q(el);
	}

	if (!this.el){
		//if el isn't provided
		options = arguments[0];
		this.el = document.createElement('div');
		document.body.appendChild(this.el);
	}

	extend(this, options);

	this.el.innerHTML = this.text;
	this.el.id = "back-to-top-btn";
	this.el.setAttribute('hidden', true);

	window.onscroll = this.hideShow.bind(this);
	this.el.onclick = this.moveToTop.bind(this);
}

var proto = ScrollUp.prototype;

//defaults
proto.scrollDistance = 900;
proto.animateScrollDuration = 500;
proto.text = "back to top";
proto.ease =  "out-cube";
	

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
