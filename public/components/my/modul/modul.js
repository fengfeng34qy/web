	function addClass(node, className){
		var current = node.className || '';
		if((' '+current+' ').indexOf(className) === -1){
			node.className = current? (current+' '+className) : className;
		}
	}

	function delClass(node, className){
		
	  var current = node.className || "";
	  node.className = (" " + current + " ").replace(" " + className + " ", " ").trim();
	}

	function html2node(h){
		var container = document.createElement('div');
		container.innerHTML = h;
		return container.children[0];
	}

	/* 构造函数 */
	function Modul(options){
		options = options || {};
		this.template = '<div class="m-modal">\
								    <div class="modal_align"></div>\
								    <div class="modal_wrap animated">\
								      <div class="modal_head">标题</div>\
								      <div class="modal_body">内容</div>\
								      <div class="modal_foot">\
								        <a class="confirm" href="#">确认</a>\
								        <a class="cancel" href="#">取消</a>\
								      </div>\
								    </div>\
								  </div>';
		this.container = html2node(this.template);
		this._initEvent();
	}

	Modul.prototype.on = function(event, fn){
		var handles = this._handles || (this._handles = {});
		var calls = handles[event] || (handles[event] = []);
		calls.push(fn);
		return this;
	};

	Modul.prototype.show = function(){
		var self = this;
		document.body.appendChild(this.container);
		addClass(this.container, 'in');
	};

	Modul.prototype.hide = function(){

		var that = this;
		delClass(this.container, 'in');
		animateClass(this.container, 'out', function(){

			document.body.removeChild(that.container);
		});

	};

	Modul.prototype._initEvent = function(){
		
		this.container.querySelector('.confirm').addEventListener('click',this._onConfirm.bind(this));

		this.container.querySelector('.cancel').addEventListener('click', this._onCancel.bind(this));

		// this.container.addEventListener('transitionend', transitionEnd);

	};

	Modul.prototype._onConfirm = function(){
		this.emit('confirm');
		this.hide()
	};

	Modul.prototype._onCancel = function(){
		this.emit('cancel');
		this.hide();
	};

	Modul.prototype.emit = function(event){
	  var args = [].slice.call(arguments, 1),
	    handles = this._handles, calls;

	  if (!handles || !(calls = handles[event])) return this;
	  // 触发所有对应名字的listeners
	  for (var i = 0, len = calls.length; i < len; i++) {
	    calls[i].apply(this, args)
	  }
	  return this;
	};

	function animateClass( node, className , callback){

	  function onAnimateEnd(){

	    // 2. 移除类名
	    delClass(node, className);

	    node.removeEventListener( 'animationend', onAnimateEnd)
	    // 3. 执行回调
	    callback && callback();
	  }

	  // 1. 添加类名触发animation
	  addClass(node, className);
  	node.addEventListener( 'animationend', onAnimateEnd)
	  

	}