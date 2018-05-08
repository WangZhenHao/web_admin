(function() {

	let page = {
		/**
		 * api中get的请求
		 * @param  {[type]} url  [description]
		 * @param  {[type]} data [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}      [description]
		 */
		apiGet(url, data, options ) {
			this.get(url, data, options);
		},
		/**
		 * api中post请求
		 * @param  {[type]} url  [description]
		 * @param  {[type]} data [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}      [description]
		 */
		apiPost(url, data, options) {
			options['method'] = 'PSOT';
			this.get(url, data, options);
		},
		/*
		  默认get请求
		 */
		get(url, data, options) {
			$.ajax({
				//url地址
				url: url,
				//参数  				
				data: data,
				// 默认get请求
				type: options.method || 'GET',
				//默认异步请求
				async: options.async || true,
				//超时时间
				timeout: options.timeout || 15000,
				//请求之前
				beforeSend: (requrest) => {
					this.showLoading();
				},
				//成功回调				
				success: (res) => {
					this.closeLoading();
					options.successFn(res);
				},
				//失败回调
				error: (res) => {
					this.closeLoading();
					options.errorFn(res);
				},
				//失败或者成功的回调
				complete: (requrest, status) => {
					if(status == 'timeout') {
						this.closeLoading();
					}
				}
			})
		},
		/**
		 * 显示加载框
		 * @return {[type]} [description]
		 */
		showLoading() {
			if($('#loading-wrap').length > 0) {
				$('#loading-wrap').show();
			} else {
				let html = `<div id="loading-wrap">
								<div class="loading-icon text-center">
									<i class="glyphicon glyphicon-refresh"></i>
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
		/**
		 * 获取ulr中的参数
		 * @return {[type]} [description]
		 */
		getUrlParams() {
			const url = window.location.href;
			if(url.indexOf('?') > -1) {
				let str = url.split('?')[1],
					strArr = str.split('&'),
					params = {};
				for(let item of strArr) {
					let itemArr = item.split('=');
					params[itemArr[0]] = itemArr[1];
				}
				return params;
			} else {
				return '';
			}
			
		},
		/**
		 * 点击浏览器前进或者回退执行函数
		 */
		historyPopstate(callback) {
			window.addEventListener("popstate", () => {
				if(typeof callback == 'function') {
					callback(history.state);
				}
			});
		},
		/**
		 * 改变url地址的函数
		 * @return {[type]} [description]
		 */
		changeUrlPath(params) {
			let url = window.location.href;
			let location = url.match(/\#[^\?]*/)[0];
			let str = [];
			for(let item in params) {
				str.push(item + '=' +  params[item]);
			}
			str = `${location}?${str.join('&')}`;
			history.pushState(params,'', str);
		},
		/**
		 * 日期时间换成Unix时间戳
		 * data  	时间戳    必填
		 * @param {[type]} data [description]
		 */
		DateToTimestamp: function(data) {
			return Date.parse(data) / 1000;
		},
		/**
		 * Unix时间戳转成时间
		 * @param {[type]} format     格式	 			必填
		 * 如: YY/MM/DD hh:mm:ss   
		 *     YY年MM月DD日 hh时mm分ss秒
		 *     Y-M-D h:m:s
		 * @param {[type]} timestamp '时间戳: 1525147931'	可填(默认当前时间)
		 */
		TimestampToDate: function(format, timestamp) {
			var date = timestamp ? new Date(parseInt(timestamp) * 1000) : new Date(+new Date());
			var	year = date.getFullYear(),
				month = date.getMonth() + 1,
				day = date.getDate(),
				hour = date.getHours(),
				minute = date.getMinutes(),
	            second = date.getSeconds();

			var str = format.replace(/[YyMmDdHhSs]+/g, function(w) {
				if(w == 'yy' || w == 'YY' || w == 'y' || w == 'Y') {
					return year.toString().substring(2);

				} else if(w == 'yyyy' || w == 'YYYY') {
					return year;

				} else if(w == 'MM') {
					return month >= 10 ? month : '0' + month; 

				} else if(w == 'M') {
					return month;

				} else if(w == 'DD' || w == 'dd') {
					return day >= 10 ? day : '0' + day;

				} else if(w == 'D' || w == 'd') {
					return day;

				} else if(w == 'HH' || w == 'hh') {
					return hour >= 10 ? hour : '0' + hour;

				} else if(w == 'H' || w == 'h') {
					return hour;

				} else if(w == 'mm') {
					return minute >= 10 ? minute : '0' + minute;

				} else if(w == 'm') {
					return minute;

				} else if(w == 'ss' || w == 's') {
					return second >= 10 ? second : '0' + second;
				}
			});
			return str;
		},
	};
	window.page = page;

})()