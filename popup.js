var globalObj = {
	append : null,
	$ref:null,
	settingObj : null,
	successColor : 'rgba(0,200,0,0.8)',
	errorColor : 'rgba(200,0,0,0.8)',
	infoColor : 'rgba(220,200,0,0.8)',
	warningColor:'rgba(120,50,50,0.8)',
	setWidth:function () {
		this.$append.css('width',this.settingObj.width+'px');
	},
	setHeight:function () {
		this.$append.css('height',this.settingObj.height+'px');
	},
	setPosition:function(){
		if(this.settingObj.top) this.$append.css('top',this.settingObj.top+'px');
		if(this.settingObj.bottom) this.$append.css('bottom',this.settingObj.bottom+'px');
		if(this.settingObj.right) this.$append.css('right',this.settingObj.right+'px');
		if(this.settingObj.left) this.$append.css('left',this.settingObj.left+'px');
	},
	setType:function(){
		if(this.settingObj.type == 'success') this.$append.css('background-color',this.successColor);
		if(this.settingObj.type == 'error') this.$append.css('background-color',this.errorColor);
		if(this.settingObj.type == 'info') this.$append.css('background-color',this.infoColor);
		if(this.settingObj.type == 'warning') this.$append.css('background-color',this.warningColor);
	},
	addStyles:function(){
		this.setWidth();
		this.setHeight();
		this.setPosition();
		this.setType();
	},
	showPopup : function(){
		this.$append.appendTo('body');
		this.$ref = $('#js-show-Popup');
		this.animate();
	},
	hidePopup : function(time){
		var that = this;
		setTimeout(function(){
			if(that.settingObj.animate == 'fade' ) that.$ref.fadeOut('slow');
			else that.$ref.slideUp('slow');
		},this.settingObj.time);
	},
	animate:function(){
		if(this.settingObj.animate == 'fade' ) this.$ref.fadeIn('slow');
		else this.$ref.slideDown('slow');
		this.hidePopup();
	},
	createPopup:function(){
		this.$append = $('<div id="js-show-Popup" class="default-css-popup">'+this.settingObj.msg+'</div>');
	},
	attachDefaultValues:function(settingObj){
		if(!settingObj.msg) settingObj.msg = 'Put Your Message Here';
		if(!settingObj.width) settingObj.width = 200;
		if(!settingObj.height) settingObj.height = 50;
		if(settingObj.position){
			if(settingObj.position == 'top-left'){
				settingObj.top = 10;
				settingObj.left= 10;
			}
			if(settingObj.position == 'top-right'){
				settingObj.top = 10;
				settingObj.right= 10;
			}
			if(settingObj.position == 'bottom-left'){
				settingObj.bottom = 10;
				settingObj.left= 10;
			}
			if(settingObj.position == 'bottom-right'){
				settingObj.bottom = 10;
				settingObj.right= 10;
			}
		}else{
			settingObj.top = 10;
			settingObj.right= 20;
		}
		if(!settingObj.type) settingObj.type='success';
		if(!settingObj.animate) settingObj.type='slide';
		if(!settingObj.time) settingObj.time = 5000;
		this.settingObj=settingObj;
	},
	init:function (settingObj) {
		this.attachDefaultValues(settingObj);
		this.createPopup();
		this.addStyles();
		this.showPopup();
	}
}
var $popup ={

	show:function(settingObj){
		globalObj.init(settingObj);
		console.error("error my mind");
		//globalObj.init(settingObj);
	}
}
