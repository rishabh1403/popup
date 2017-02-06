var globalObj = {
	append : null,
	successColor : 'rgba(0,200,0,0.8)',
	errorColor : 'rgba(200,0,0,0.8)',
	infoColor : 'rgba(220,200,0,0.8)',
	warningColor:'rgba(120,50,50,0.8)',
	setWidth:function (width) {
		this.$append.css('width',width+'px');
	},
	setHeight:function (height) {
		this.$append.css('height',height+'px');
	},
	setPosition:function(settingObj){
		if(settingObj.top) this.$append.css('top',settingObj.top+'px');
		if(settingObj.bottom) this.$append.css('bottom',settingObj.bottom+'px');
		if(settingObj.right) this.$append.css('right',settingObj.right+'px');
		if(settingObj.left) this.$append.css('left',settingObj.left+'px');
	},
	setType:function(type){
		if(type == 'success') this.$append.css('background-color',this.successColor);
		if(type == 'error') this.$append.css('background-color',this.errorColor);
		if(type == 'info') this.$append.css('background-color',this.infoColor);
		if(type == 'warning') this.$append.css('background-color',this.warningColor);
	},
	addStyles:function(settingObj){
		this.setWidth(settingObj.width);
		this.setHeight(settingObj.height);
		this.setPosition(settingObj);
		this.setType(settingObj.type);
	},
	showPopup : function(){
		this.$append.appendTo('body');
	},
	createPopup:function(settingObj){
		this.$append = $('<div id="js-show-Popup" class="default-css-popup">'+settingObj.msg+'</div>');
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
		//if(!settingObj.width) settingObj.width = 200;
		return settingObj;
	},
	init:function (settingObj) {
		var settingObj = this.attachDefaultValues(settingObj);
		this.createPopup(settingObj);
		this.addStyles(settingObj);
		this.showPopup();
	}
}
var $popup ={

	show:function(settingObj){
		globalObj.init(settingObj);
	}
}
