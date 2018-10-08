(function() {

	let page = {
		/**
		 * api中get的请求
		 * @param  {[type]} url  [description]
		 * @param  {[type]} data [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}      [description]
		 */
		apiGet(url, data, options = {} ) {
			return this.get(url, data, options);
		},
		/**
		 * api中post请求
		 * @param  {[type]} url  [description]
		 * @param  {[type]} data [description]
		 * @param  {[type]} options [description]
		 * @return {[type]}      [description]
		 */
		apiPost(url, data, options = {}) {
			options['method'] = 'POST';
			return this.get(url, data, options);
		},
		/*
		  默认get请求
		 */
		get(url, data, options) {
			let apiUrl = options['apiUrl'] || config.api;
			url = apiUrl + url;
			let promise = new Promise((reslove, reject) => {
				$.ajax({
					//url地址
					url: url,
					//参数  				
					data: data,
					// 默认get请求
					type: options.method || 'GET',
					//默认异步请求
					async: options.async === true ? true : false,
					//超时时间
					timeout: options.timeout || 15000,
					//请求之前
					beforeSend: (xhr) => {
						webapp.showLoading();
						if(this.getLocalStorage('token')) {
							 xhr.setRequestHeader('token', this.getLocalStorage('token'));
						}
					},
					//成功回调				
					success: (res) => {
						// document.documentElement.scrollTop = 0;
						webapp.closeLoading();
						// options.successFn(res);
						if(res.code == 0) {
							reslove(res);
						} else {
							webapp.error(res.msg);
							reject(res);
						}
					},
					//失败回调
					error: (res) => {
						webapp.closeLoading();
						// options.errorFn(res);
						webapp.error('网络错误了~~');
						reject(res);
					},
					//失败或者成功的回调
					complete: (requrest, status) => {
						if(status == 'timeout') {
							webapp.closeLoading();
							webapp.error('请求超时,请刷新重试!');
						}
					}
				})
			})
			return promise;
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
		/**
		 * 设置cookies
		 * @param {[type]} name    cookie名称    必填
		 * @param {[type]} value   cookie值		 必填
		 * @param {[type]} expires 缓存多少秒	 可填(默认session 关闭浏览器会自动的清除)
		 * @param {[type]} options 对象          可填(默认设置根目录)
		 */
		setCookies: function(name, value, expires, options = {}) {
			var cookieText = name + '=' + value;
			options.path = options.path || '/';
			if(expires) {
				var timestamp = (new Date().getTime()) / 1000 + expires;
				var dateObj = new Date(timestamp * 1000);
				cookieText += '; expires=' + dateObj.toGMTString();
			}

			if(options.path) {
				cookieText += '; path=' + options.path;
			}
			if(options.domain) {
				cookieText += '; domain=' + options.domain;
			}
			document.cookie = cookieText;
		},
		/**
		 * 获取cookie的值
		 * @param  {[type]} name cookie值
		 * @return {[type]}      [description]
		 */
		getCookie: function(name) {
			var value = document.cookie,
				cookieName = name + '=';
				cookieStart = value.indexOf(cookieName),
				cookieValue = null;
			if(cookieStart > -1) {
				var cookieEnd = value.indexOf(';', cookieStart);
				cookieEnd = cookieEnd > -1 ? cookieEnd : value.length;
				cookieValue = value.substring(cookieStart + cookieName.length, cookieEnd)
			}
			return cookieValue;
		},
		/**
		 * 清除cookies
		 * 
		 * @return {[type]} [description]
		 */
		clearCookies: function(name,options = {}) {
			this.setCookies(name, '', -1, options);
		},
		/**
		 * 获取本地缓存
		 * @param {[type]} key   	键         必填
		 * @return {[type]} [description]
		 */
		getLocalStorage: function(key) {
			var json = JSON.parse(localStorage.getItem(key));
			if(json) {
				if(json.expires) {
					var timestamp = parseInt(+new Date() / 1000);
					if(timestamp > json.expires) {
						this.clearLocalStorage(key)
						return null;
					}
				}
				return json[key];
			} else {
				return null;
			}
		},
		/**
		 * 设置本地缓存(可设置过期时间)
		 * @param {[type]} key   	键           必填
		 * @param {[type]} value 	值		     必填
		 * @param {[type]} expires  保存多少秒   可填(秒)
		 */
		setLocalStorage: function(key, value, expires) {
			var json = {}
			json[key] = value;
			if(expires) {
				var timestamp = parseInt(+new Date() / 1000) + expires;
				json['expires'] = timestamp;  
			}

			localStorage.setItem(key, JSON.stringify(json));
		},
		/**
		 * 清除本地缓存
		 * @param {[type]} key 	键		可填(默认清除所有)
		 * @return {[type]} [description]
		 */
		clearLocalStorage: function(key) {
			if(key) {
				localStorage.removeItem(key);
			} else {
				localStorage.clear();
			}
		},
	};
	window.page = page;
})()