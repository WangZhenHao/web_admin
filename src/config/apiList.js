/**
 * api列表
 * 
 */

export function lvyouProductList(params) {
	return page.apiPost('/tour/platproducts/platProductInfoList' , params);
}