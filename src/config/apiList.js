/**
 * api列表
 * 
 */

export function login(params) {
	return page.apiPost('/operator/admin/v1/login' , params);
}


//添加大厦
export function addMansion(params) {
  return page.apiPost('/operator/building/v1/add', params)
}
//获取带下列表
export function getMansionList(params) {
   return page.apiPost('/operator/building/v1/list', params)
}
//编辑大厦信息
export function editManSion(params) {
   return page.apiPost('/operator/building/v1/edit', params)
}

//大厦详情
export function getBuildingDetail(params) {
	return page.apiPost('/operator/buildingno/v1/getById', params)
}

//添加大厦栋数
export function addBuildingName(params) {
	return page.apiPost('/operator/building/v1/floorNoAdd', params)
}

//添加大厦栋数
export function addFloorNum(params) {
	return page.apiPost('/operator/building/v1/floorAdd', params)
}
