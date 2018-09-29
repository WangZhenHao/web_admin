 $(function(){  
	var webapp = {
		/**
		 * 显示加载框
		 * @return {[type]} [description]
		 */
		showLoading() {
			if($('#loading-wrap').length) {
				$('#loading-wrap').show();
			} else {
				// <i class="glyphicon glyphicon-refresh"></i>
				let html = `<div id="loading-wrap">
								<div class="text-center">
									<img src="./static/images/loading-0.gif"/>
								</div>
							</div>`;
				$('body').append(html);	
			}
		},
		/**
		 * 隐藏加载框
		 * @return {[type]} [description]
		 */
		closeLoading() {
			if($('#loading-wrap').length > 0) {
				setTimeout(() => {
					$('#loading-wrap').hide();
				}, 200);
			}
		},
		/**成功弹窗
		 * [success description]
		 * @param  {[type]} message [description]
		 * @param  {Number} time    [description]
		 */
		success(message, time = 3000) {
			let type = 'success';
			this.alter(type, message, time);
		},
		/**
		 * 错误弹框
		 * @return {[type]} [description]
		 */
		error(message, time = 3000) {
			let type = 'error';
			this.alter(type, message, time);
		},
		/**
		 * 弹框
		 * @return {[type]} [description]
		 */
		alter(type, message, time) {
			let alertClass = 'alert-success';
			if(type == 'error') {
				alertClass = 'alert-danger';
			}
			let mesDiv = document.createElement('div');
				mesDiv.className = `text-center alert ${alertClass} noselect alert-frame-all`;
				mesDiv.role = 'alert';
				mesDiv.innerHTML = `<button type="button" class="close" aria-label="Close"><span aria-hidden="true" data-type="alert">&times;</span></button>
			              <p>${message}</p>`;
			   mesDiv.style.display = 'none';
			if($('.webapp-success').length > 0) {
				$('.webapp-success').prepend(mesDiv);
			} else {
				let successFrame= document.createElement('div');
				successFrame.className = 'webapp-success affix';
	            successFrame.appendChild(mesDiv);
				$('body').append(successFrame);
			}
			$(mesDiv).show('fast');
			this.setTimeoutHide(mesDiv, time);
		},
		setTimeoutHide(element, time = 3000) {
			element.timer = setTimeout(() => {
				this.animatedHide(element)
			}, time);
		},
		animatedHide(element) {
			$(element).hide('slow');
			setTimeout(function() {
				 element.remove(); 
			}, 800)
		},
		alertFrameEvent() {
			var self = this;
			$(document).on('click', (ev) => {
				let el = ev.target || ev.srcElement,
				    dataType = $(el).attr('data-type');
				switch(dataType) {
					case 'alert':
						let element = $(el).parent().parent();
						this.animatedHide(element)
					break;
				}
			});
			$(document).on('mouseover', '.alert-frame-all', function() {
				clearTimeout(this.timer);
			});
			$(document).on('mouseleave', '.alert-frame-all', function() {
				self.setTimeoutHide(this)
			});
		},

		init() {
			this.alertFrameEvent();
			// this.scroll();
		},
		// scroll() {
		// 	window.onscroll  = function(e) {
		// 		console.log(document.documentElement.scrollTop);
		// 	}
		// }

	};

	window.webapp = webapp;
	webapp.init();
})