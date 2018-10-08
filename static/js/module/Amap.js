/**
 * 高德地图模块
 * author wzh
 * created 2018-5-23 15:58
 * 
 */
/**
 * 输入提示功能
 * @param  {[type]} value 		  关键字
 * @param  {[type]} callBack      回调函数
 * @return {[type]}       [description]
 */
export function autoComplete(value, callBack) {
	AMap.plugin('AMap.Autocomplete', () => {
		let autoOptions = {
		};
		let searchTipsHandle = new AMap.Autocomplete(autoOptions);
		searchTipsHandle.search(value, (status, result) => {
			callBack(status, result);
		})
	});
}

/**
 * 地理位置定位
 * @param  {[type]} callBack 回调函数
 * @return {[type]}          [description]
 */
export function getCurrentPosition(callBack) {
	AMap.plugin(['AMap.Geolocation', 'AMap.CitySearch'], () => {
		let geolocation = new AMap.Geolocation({
			timeout: 10000,
		});
		geolocation.getCurrentPosition((status, result) => {
			console.log(result);
			if(status == 'complete') {
				setPositionInfo('gps', result)
				callBack('gps', 'success')
			} else {
				geolocation.getCityInfo((status, result) => {
					setPositionInfo('ip', result);
					callBack('ip', 'success');
				})
			}
		})
	})
}
//保存地址都本地
function setPositionInfo(type, res) {
	let longitude = '',
		latitude = '',
		address = '',
		positionInfo = {};
	if(type == 'gps') {
		let addressComponent = res.addressComponent;
		address = addressComponent['township'] + 
				  addressComponent['street'] + addressComponent['streetNumber'];
		longitude = res['position']['lng'];
		latitude = res['position']['lat'];
	} else {
		let city = res.city ? res.city : ''
		address = res.province + city;
		longitude = res['center'][0];
		latitude = res['center'][1]
	}
	positionInfo = {
		address,
		longitude,
		latitude
	};
	Tools.setLocalStorage('positionInfo', positionInfo);
}


/**
 * 逆地理编码
 */

// export function getAddress