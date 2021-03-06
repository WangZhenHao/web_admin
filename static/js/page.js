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
		 * 设置没有匹配到路由的信息
		 * @return {[type]} [description]
		 */
		// setNotFountComponetMsg(to) {
		// 	window.pageErrorMessage = {
		// 		path: to.path,
		// 		msg: `没有找到路径为${to.path}的vue文件`
		// 	}
		// 	console.log(window.pageErrorMessage);
		// 	// return pageMessage;
		// }
	};
	window.page = page;

})()