/**
 * 模拟数据库中的数据
 * @type {Array}
 */
const nodeList = [
	{"id":"1","title":"系统","name":"system","is_show":"0","pid":"0","icon":"glyphicon glyphicon-asterisk","sort_index":"23"}, 

	{"id":"2","title":"权限功能","name":"node","is_show":"1","pid":"1","icon":"","sort_index":"34"},
	{"id":"3","title":"添加权限","name":"addNode","is_show":"1","pid":"2","icon":"","sort_index":"35"},
	{"id":"4","title":"权限列表","name":"nodeList","is_show":"1","pid":"2","icon":"","sort_index":"36"},


	{"id":"5","title":"系统信息","name":"info","is_show":"1","pid":"1","icon":"","sort_index":"24"},
	{"id":"6","title":"系统概况","name":"infoIndex","is_show":"1","pid":"5","icon":"","sort_index":"26"},
	/****-----------------**/
	{
		id: 7,
		title: '闪送',
		name: 'flash',
		is_show: 1,
		pid: 0,
		icon: 'glyphicon glyphicon-road',
		sort_index: 23
	},
	{"id":"8","title":"管理","name":"manage","is_show":"1","pid":"7","icon":"","sort_index":"34"},
	{"id":"9","title":"大厦管理","name":"buildingManage","is_show":"1","pid":"8","icon":"","sort_index":"34"},
	// {"id":"10","title":"旅游订单","name":"lyorderlist","is_show":"0","pid":"8","icon":"","sort_index":"34"},
	// {"id":"11","title":"会员管理","name":"memberMange","is_show":"1","pid":"8","icon":"","sort_index":"34"},
	// {"id":"11","title":"驴妈妈商品库","name":"lvmmlist","is_show":"1","pid":"8","icon":"","sort_index":"34"},
	/**----------------**/
	// {"id":"7","title":"微品","name":"product","is_show":"0","pid":"0","icon":"glyphicon glyphicon-qrcode","sort_index":"72"},

	// {"id":"8","title":"设置","name":"set","is_show":"1","pid":"7","icon":"","sort_index":"90"},
	// {"id":"9","title":"基本设置","name":"baseSet","is_show":"1","pid":"8","icon":"","sort_index":"97"},
	// {"id":"10","title":"广告位","name":"adSlot","is_show":"0","pid":"8","icon":"","sort_index":"100"},
	// {"id":"11","title":"产品分类","name":"productClassify","is_show":"1","pid":"8","icon":"","sort_index":"100"},
	// {"id":"11","title":"类型设置","name":"typeSet","is_show":"1","pid":"8","icon":"","sort_index":"100"},

	// {"id":"12","title":"订单管理","name":"OrderManager","is_show":"0","pid":"7","icon":"","sort_index":"90"},
	// {"id":"13","title":"订单列表","name":"OrderList","is_show":"1","pid":"12","icon":"","sort_index":"90"},
	// {"id":"14","title":"支付记录","name":"payHistory","is_show":"1","pid":"12","icon":"","sort_index":"90"},

	// {"id":"15","title":"音乐管理","name":"musicManager","is_show":"1","pid":"7","icon":"","sort_index":"90"},
	// {"id":"16","title":"音乐列表","name":"musicList","is_show":"1","pid":"15","icon":"","sort_index":"90"},
	// {"id":"17","title":"音乐上传","name":"musicUpload","is_show":"1","pid":"15","icon":"","sort_index":"90"}

]

export default nodeList;