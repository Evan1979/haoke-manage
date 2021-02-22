// 看房请求
// 自定义----   格式化按钮操作列
function operateFormatter(value, row, index) {
    return [
        '<button class="btn btn-white btn-xs detailRequest" data-toggle="modalVisitRequestDetail">'+ '详情' + '</button>',
        '<button class="btn btn-danger btn-xs detailDelete" data-toggle="modalVisitRequest">'+ '关闭' + '</button>',
    ].join('')
}

// 给操作按钮注册点击事件
window.operateEvents = {

    //看房请求
    'click .detailRequest': function (e, value, row, index) {
        console.log('You click VisitRequestDetailModel action, row: ' + JSON.stringify(row));
        $(function() {
            $('#VisitRequestDetailModel').modal('show');

            $('#VisitRequestDetailModel').on('shown.bs.modal', function () {

                console.log("进入到详情模态框.....")

            });
        });

    },
    'click .detailDelete': function (e, value, row, index) {
        // $table.bootstrapTable('remove', {
        //     field: 'id',
        //     values: [row.id]
        // })
        alert('You click like action, row: ' + JSON.stringify(row))
    },


    //租房请求
    'click .detailRentRequest': function (e, value, row, index) {
        console.log('You click RentRequestDetailModel action, row: ' + JSON.stringify(row));
        $(function() {
            $('#RentRequestDetailModel').modal('show');

            $('#RentRequestDetailModel').on('shown.bs.modal', function () {

                console.log("进入到详情模态框.....")

            });
        });

    },
    'click .detailRentDelete': function (e, value, row, index) {
        // $table.bootstrapTable('remove', {
        //     field: 'id',
        //     values: [row.id]
        // })
        alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .detailLandLord': function (e, value, row, index) {
        console.log('You click RentRequestDetailModel action, row: ' + JSON.stringify(row));
        $(function() {
            $('#landlordsDetailModal').modal('show');

            $('#landlordsDetailModal').on('shown.bs.modal', function () {

                console.log("进入到landlordsDetailModal详情模态框.....")

            });
        });
    }

};

// // 点击一行的事件
// $('#bs-table-landlords-list-myself').on('click-row.bs.table', function (e,row,$element,field,index) {
// 	//取出来的行是个对象
// 	alert("对应行row:"+row.uname +"\n" +"field:"+field + '\n' +"index:"+index+'\n');   // +"对应的element内容:"+ $($element).html() +'\n'
// 	// console.log("对应的element内容:"+ $($element).html() +'\n');
// });



// 看房请求
var $tableVisitRequest = $('#roleTableVisitRequest');
loadTableDataVisitRequest("*");

function loadTableDataVisitRequest(key) {

    var urlSearchParams = "search?page=1&pmagnet_link=*&pfrom_which_se=*&pmagnetlink_key="+key;
    $('#roleTableVisitRequest').bootstrapTable({
        //$('#roleTable' + roleTableID)
        url: urlSearchParams, // 服务器数据的加载地址。
        method: 'post', // 服务器数据的请求方式 'get' 或 'post'。

        search: false,  //是否显示表格搜索，此搜索是客户端搜索，不会进服务端

        sortable:false, //可以排序

        order:'asc',//默认排序顺序，只能是'asc'或'desc'。

        //设置唯一标识的id是哪个字段 可以用来根据这个唯一id进行查询
        uniqueId: 'uid',

        //分页设置
        pagination: false, // 在表格底部显示分页信息(显示第 x 到第 x 条记录，总共 x 条记录)，翻页条 // 注意：数据页页数超过1页会才展示翻页条
        paginationVAlign: 'top', // 指定分页条在垂直方向的位置。'top'，'bottom' 或 'both'。
        sidePagination: 'client' ,//'server',
        // 设置在哪里进行分页，可选值为 'client' 或者 'server'。
        // 注意：设置 'server'时，必须设置服务器数据地址（url）或者重写ajax方法。
        pageSize: 10, // 如果启用分页，设置初始化界面时，默认的每页显示数据条数
        // pageList: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'All'], // 如果设置了分页，设置可供选择的页面记录数。设置为 All 或者 Unlimited，则显示所有记录
        smartDisplay: false, // 设置为 true 是程序自动判断显示分页信息和 card 视图。这会导致自定义的 pageList不起作用

        responseHandler: responseHandlerVisit, // 加载服务器数据之前的处理程序，可以用来格式化数据。
        silentSort: true, // 设置为true将在点击分页按钮时，自动记住排序项。仅在 sidePagination设置为 server时生效

        showColumns: false, // 展示内容列下拉框，方便设置展示那些列
        showRefresh: false, //   显示刷新按钮
        // idField: 'id', // 指定主键列
        // dataType:'json',
        dataField: "rows",  //返回的json数组记录(表格数据)的key.默认是"rows", 数据格式： {"total": 0, "rows": []}
        checkboxHeader: true, // 如果设置 false，将在列头隐藏全选复选框，反之则显示，设置为ture时，必须设置singleSelect=false 才有效
        singleSelect: false, //如果设置为true - 禁止多选，否则不禁止多选
        clickToSelect: true, // 如果设置 true，则在点击行时，自动选中 rediobox 、 checkbox。
        striped: true, // 设置为 true 会有隔行变色效果
        toolbar: '#toolbar', // 一个jQuery 选择器，形如#toolbar, .toolbar，指明自定义的 toolbar
        toolbarAlign: 'left', // 指定 toolbar 水平方向的位置。'left' 或 'right'。


        // {uid: "1", uname: "evan", upsw: "1234", ulogin_time: "2020-01-01 06:10:26", ustate: "1"}

        //{
        //     field: 'checkbox',
        //     align: 'center', // 设置数据对齐方式可选项： 'left', 'right', 'center'
        //     halign: 'center', // 设置表头标题对齐方式可选项： 'left', 'right', 'center'
        //     valign: 'middle', // 设置单元格数据的垂直方向上的对齐方式，有：top（靠上）、middle（居中）、bottom（靠下）针对checkbox似乎不起作用
        //     checkbox: true, // 显示为复选框
        //     width: '1%', // 设置列宽度
        // },

        columns: [{  //复选框栏目
            checkbox: true,
            visibility: true,
        },{
            field: 'pid',
            title: 'No',
            align: 'center',
            halign: 'center',
            valign: 'middle',
            // searchable:true,
            order: 'desc', // 默认排序方式升序-asc 降序-desc
            width: '5%',
            queryParams: function queryParams(params){
                var param = {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    sortName: params.sortName,
                    sortOrder: params.sortOrder,
                    searchText: $("#searchText").val(),
                    msgType: $("#msgType").val(),
                    productLine: $("#productLine").val()
                };
                return param;
            }
        }, {
            field: 'renterName',
            title: '租客姓名',
            sortable: true, // 允许排序列
            valign: 'middle',
            align: 'center',
            halign: 'center',
            width: '8%'
        }, {
            field: 'renterPhone',
            title: '租客手机',
            sortable: true, // 允许排序列
            valign: 'middle',
            align: 'center',
            halign: 'center',
            width: '8%'
        }, {
            field: 'Project',
            title: '项目/小区',
            algin: 'left',
            halgin: 'center',
            width: '25%',
            
        },  {
            field: 'requestTime',
            title: '请求时间',
            algin: 'left',
            halgin: 'center',
            width: '8%',
            
        },{
            field: 'visitTime',
            title: '看房时间',
            algin: 'left',
            halgin: 'center',
            width: '8%',
            
        }, {
            field: 'state',
            title: '请求状态',
            algin: 'left',
            halgin: 'center',
            width: '6%',
            
        },  {
            field: 'operate',
            title: '操作',
            algin: 'left',
            halgin: 'center',
            width: '6%',
            events: operateEvents,  //点击事件
            formatter: operateFormatter   //格式化操作列函数
        }

        ],
        locale:'zh-CN',//中文支持,

    });
}




// loadTableData();
// 加载服务器数据之前的数据处理(responseHandler)

/**
 * 加载服务器数据之前的处理程序，可以用来格式化数据。
 * 参数：result为从服务器请求到的数据
 * @param result
 */
function responseHandlerVisit(result) {
    // if (result.success === 'false') {
    //     alert('获取角色信息失败');
    //     return;
    // }

    var result1 = {
        "total": 4,
        "row": [{"uid": "1", "uname": "evan", "upsw": "1234", "ulogin_time": "2020-01-01 06:10:26", "ustate": "1"},
            {"uid": "15", "uname": "ken2", "upsw": "123", "ulogin_time": "2020-01-01 04:38:38", "ustate": "1"}]
    };


    // 返回数据，渲染表格
    return {
        //json数据格式
        // {"total": 0, "rows": []}
        // {"total":4,"row":[{"uid":"1","uname":"evan","upsw":"1234","ulogin_time":"2020-01-01 06:10:26","ustate":"1"},
        // {"uid":"15","uname":"ken2","upsw":"123","ulogin_time":"2020-01-01 04:38:38","ustate":"1"}]}
        total: result1.total, //总页数, key名称固定为"total"
        rows: result1.rows //行数据，key名称必须和bootstrapTable函数中dataField的值保持一致，默认为rows.
    };
};

$('#buttonRefreshVisit').click(function () {
    $tableVisitRequest.bootstrapTable('load', randomDataVisit());
});



//加载表格数据  load  参数json数据-->替换原来表格的所有数据
//生成随机数据
function randomDataVisit() {
    //0: {uid: "1", uname: "evan", upsw: "12345", ulogin_time: "2020-01-01 06:10:26", ustate: "1"}
    var startId = ~~(Math.random() * 100);
    var rows = [];
    //1、待确认：用户发送看房请求，房东未确认的状态
    // 2、待看房：用户和房东全部确认后的状态
    var states = ['待确认','待看房','已取消','已完成'];

    for (var i = 0; i < 10; i++) {
        rows.push({
            //pid,magnetLinkKey,magnetLinkFileSize,magnetDownloadTimes,magnetDownloadTimes,magnetLink
            pid: startId + i,
            renterName:'wang',
            renterPhone:'1320xxxxxx'+startId,
            Project:'凯旋城',
            requestTime:'2021-02-10',
            visitTime:'2021-02-11',
            state: states[i%4],
            // operate:'待操作'
        })
    }
    return rows;
}




// 租房请求
// 自定义----   格式化按钮操作列
function operateFormatterRentRequest(value, row, index) {
    return [
        '<button class="btn btn-white btn-xs detailRentRequest" data-toggle="modalRentRequestDetail">'+ '详情' + '</button>',
        '<button class="btn btn-danger btn-xs detailRentDelete" data-toggle="modalRentRequest">'+ '关闭' + '</button>',
    ].join('')
}



//租房请求js
var $tableRentRequest = $('#roleTableRentRequest');
loadTableDataRentRequest("*");

function loadTableDataRentRequest(key) {

    var urlSearchParams = "search?page=1&pmagnet_link=*&pfrom_which_se=*&pmagnetlink_key="+key;
    $('#roleTableRentRequest').bootstrapTable({
        //$('#roleTable' + roleTableID)
        url: urlSearchParams, // 服务器数据的加载地址。
        method: 'post', // 服务器数据的请求方式 'get' 或 'post'。

        search: false,  //是否显示表格搜索，此搜索是客户端搜索，不会进服务端

        sortable:false, //可以排序

        order:'asc',//默认排序顺序，只能是'asc'或'desc'。

        //设置唯一标识的id是哪个字段 可以用来根据这个唯一id进行查询
        uniqueId: 'uid',

        //分页设置
        pagination: false, // 在表格底部显示分页信息(显示第 x 到第 x 条记录，总共 x 条记录)，翻页条 // 注意：数据页页数超过1页会才展示翻页条
        paginationVAlign: 'top', // 指定分页条在垂直方向的位置。'top'，'bottom' 或 'both'。
        sidePagination: 'client' ,//'server',
        // 设置在哪里进行分页，可选值为 'client' 或者 'server'。
        // 注意：设置 'server'时，必须设置服务器数据地址（url）或者重写ajax方法。
        pageSize: 10, // 如果启用分页，设置初始化界面时，默认的每页显示数据条数
        // pageList: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'All'], // 如果设置了分页，设置可供选择的页面记录数。设置为 All 或者 Unlimited，则显示所有记录
        smartDisplay: false, // 设置为 true 是程序自动判断显示分页信息和 card 视图。这会导致自定义的 pageList不起作用

        responseHandler: responseHandler, // 加载服务器数据之前的处理程序，可以用来格式化数据。
        silentSort: true, // 设置为true将在点击分页按钮时，自动记住排序项。仅在 sidePagination设置为 server时生效

        showColumns: false, // 展示内容列下拉框，方便设置展示那些列
        showRefresh: false, //   显示刷新按钮
        // idField: 'id', // 指定主键列
        // dataType:'json',
        dataField: "rows",  //返回的json数组记录(表格数据)的key.默认是"rows", 数据格式： {"total": 0, "rows": []}
        checkboxHeader: true, // 如果设置 false，将在列头隐藏全选复选框，反之则显示，设置为ture时，必须设置singleSelect=false 才有效
        singleSelect: false, //如果设置为true - 禁止多选，否则不禁止多选
        clickToSelect: true, // 如果设置 true，则在点击行时，自动选中 rediobox 、 checkbox。
        striped: true, // 设置为 true 会有隔行变色效果
        toolbar: '#toolbar', // 一个jQuery 选择器，形如#toolbar, .toolbar，指明自定义的 toolbar
        toolbarAlign: 'left', // 指定 toolbar 水平方向的位置。'left' 或 'right'。


        // {uid: "1", uname: "evan", upsw: "1234", ulogin_time: "2020-01-01 06:10:26", ustate: "1"}

        //{
        //     field: 'checkbox',
        //     align: 'center', // 设置数据对齐方式可选项： 'left', 'right', 'center'
        //     halign: 'center', // 设置表头标题对齐方式可选项： 'left', 'right', 'center'
        //     valign: 'middle', // 设置单元格数据的垂直方向上的对齐方式，有：top（靠上）、middle（居中）、bottom（靠下）针对checkbox似乎不起作用
        //     checkbox: true, // 显示为复选框
        //     width: '1%', // 设置列宽度
        // },

        columns: [{  //复选框栏目
            checkbox: true,
            visibility: true,
        },{
            field: 'pid',
            title: 'No',
            align: 'center',
            halign: 'center',
            valign: 'middle',
            // searchable:true,
            order: 'desc', // 默认排序方式升序-asc 降序-desc
            width: '5%',
            queryParams: function queryParams(params){
                var param = {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    sortName: params.sortName,
                    sortOrder: params.sortOrder,
                    searchText: $("#searchText").val(),
                    msgType: $("#msgType").val(),
                    productLine: $("#productLine").val()
                };
                return param;
            }

        }, {
            field: 'magnetLinkKey',
            title: '房源名称',
            align: 'center',
            valign: 'middle',
            halign: 'center',
            width: '14%'
        }, {
            field: 'magnetLinkFileSize',
            title: '租客姓名',
            sortable: true, // 允许排序列
            valign: 'middle',
            align: 'center',
            halign: 'center',
            width: '8%'
        }, {
            field: 'magnetDownloadTimes',
            title: '租客手机',
            sortable: true, // 允许排序列
            valign: 'middle',
            align: 'center',
            halign: 'center',
            width: '8%'
        }, {
            field: 'magnetLink',
            title: '合同起止时间',
            algin: 'left',
            halgin: 'center',
            width: '25%',
            
        },  {
            field: 'rentCost',
            title: '租金',
            algin: 'left',
            halgin: 'center',
            width: '8%',
            
        }, {
            field: 'state',
            title: '状态',
            algin: 'left',
            halgin: 'center',
            width: '6%',
            
        },  {
            field: 'operate',
            title: '操作',
            algin: 'left',
            halgin: 'center',
            width: '6%',
            events: operateEvents,  //点击事件
            formatter: operateFormatterRentRequest   //格式化操作列函数
        }

        ],
        locale:'zh-CN',//中文支持,

    });
}

/**
 * 加载服务器数据之前的处理程序，可以用来格式化数据。
 * 参数：result为从服务器请求到的数据
 * @param result
 */
function responseHandler(result) {
    // if (result.success === 'false') {
    //     alert('获取角色信息失败');
    //     return;
    // }

    var result1 = {
        "total": 4,
        "row": [{"uid": "1", "uname": "evan", "upsw": "1234", "ulogin_time": "2020-01-01 06:10:26", "ustate": "1"},
            {"uid": "15", "uname": "ken2", "upsw": "123", "ulogin_time": "2020-01-01 04:38:38", "ustate": "1"}]
    };


    // 返回数据，渲染表格
    return {
        //json数据格式
        // {"total": 0, "rows": []}
        // {"total":4,"row":[{"uid":"1","uname":"evan","upsw":"1234","ulogin_time":"2020-01-01 06:10:26","ustate":"1"},
        // {"uid":"15","uname":"ken2","upsw":"123","ulogin_time":"2020-01-01 04:38:38","ustate":"1"}]}
        total: result1.total, //总页数, key名称固定为"total"
        rows: result1.rows //行数据，key名称必须和bootstrapTable函数中dataField的值保持一致，默认为rows.
    };
};

$('#buttonRefresh').click(function () {
    $tableRentRequest.bootstrapTable('load', randomDataRentRequest());
});


//加载表格数据  load  参数json数据-->替换原来表格的所有数据
//生成随机数据
function randomDataRentRequest() {
    //0: {uid: "1", uname: "evan", upsw: "12345", ulogin_time: "2020-01-01 06:10:26", ustate: "1"}
    var startId = ~~(Math.random() * 100);
    var rows = [];

    for (var i = 0; i < 10; i++) {
        rows.push({
            //pid,magnetLinkKey,magnetLinkFileSize,magnetDownloadTimes,magnetDownloadTimes,magnetLink
            pid: startId + i,
            magnetLinkKey: 'test' + (startId + i),
            magnetLinkFileSize: '123',
            magnetDownloadTimes: '123',
            magnetLink: "2020-01-01 06:10:2" + i%10,
            rentCost:'1220',
            state:'0',
            operate:'待操作'
        })
    }
    return rows;
}


// $('#btnUserDetail').click(function () {
//
//
//     $('#userDetail').modal('show');
//
//     $('#userDetail').on('shown.bs.modal', function () {
//
//         console.log("进入到userDetail详情模态框.....")
//
//     });
//
// });


// 房东列表 -- roleTableLandLords
// 自定义----   格式化按钮操作列
function operateFormatterLandLords(value, row, index) {
    return [
        '<button class="btn btn-success btn-xs detailLandLord" >'+ '查看详情' + '</button>',
    ].join('')
}



//房东列表js
var $tableLandLords = $('#roleTableLandLords');
loadTableDataLandLords("*");

function loadTableDataLandLords(key) {

    var urlSearchParams = "search?page=1&pmagnet_link=*&pfrom_which_se=*&pmagnetlink_key="+key;
    $('#roleTableLandLords').bootstrapTable({
        //$('#roleTable' + roleTableID)
        url: urlSearchParams, // 服务器数据的加载地址。
        method: 'post', // 服务器数据的请求方式 'get' 或 'post'。

        search: false,  //是否显示表格搜索，此搜索是客户端搜索，不会进服务端

        sortable:false, //可以排序

        order:'asc',//默认排序顺序，只能是'asc'或'desc'。

        //设置唯一标识的id是哪个字段 可以用来根据这个唯一id进行查询
        uniqueId: 'uid',

        //分页设置
        pagination: false, // 在表格底部显示分页信息(显示第 x 到第 x 条记录，总共 x 条记录)，翻页条 // 注意：数据页页数超过1页会才展示翻页条
        paginationVAlign: 'top', // 指定分页条在垂直方向的位置。'top'，'bottom' 或 'both'。
        sidePagination: 'client' ,//'server',
        // 设置在哪里进行分页，可选值为 'client' 或者 'server'。
        // 注意：设置 'server'时，必须设置服务器数据地址（url）或者重写ajax方法。
        pageSize: 10, // 如果启用分页，设置初始化界面时，默认的每页显示数据条数
        // pageList: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 'All'], // 如果设置了分页，设置可供选择的页面记录数。设置为 All 或者 Unlimited，则显示所有记录
        smartDisplay: false, // 设置为 true 是程序自动判断显示分页信息和 card 视图。这会导致自定义的 pageList不起作用

        responseHandler: responseHandlerLandLords, // 加载服务器数据之前的处理程序，可以用来格式化数据。
        silentSort: true, // 设置为true将在点击分页按钮时，自动记住排序项。仅在 sidePagination设置为 server时生效

        showColumns: false, // 展示内容列下拉框，方便设置展示那些列
        showRefresh: false, //   显示刷新按钮
        // idField: 'id', // 指定主键列
        // dataType:'json',
        dataField: "rows",  //返回的json数组记录(表格数据)的key.默认是"rows", 数据格式： {"total": 0, "rows": []}
        checkboxHeader: false, // 如果设置 false，将在列头隐藏全选复选框，反之则显示，设置为ture时，必须设置singleSelect=false 才有效
        singleSelect: false, //如果设置为true - 禁止多选，否则不禁止多选
        clickToSelect: true, // 如果设置 true，则在点击行时，自动选中 rediobox 、 checkbox。
        striped: true, // 设置为 true 会有隔行变色效果
        toolbar: '#toolbar', // 一个jQuery 选择器，形如#toolbar, .toolbar，指明自定义的 toolbar
        toolbarAlign: 'left', // 指定 toolbar 水平方向的位置。'left' 或 'right'。


        columns: [{  //复选框栏目
            checkbox: true,
            visibility: true,
        },{
            field: 'lId',
            title: '房东id',
            align: 'center',
            halign: 'center',
            valign: 'center',
            // searchable:true,
            order: 'desc', // 默认排序方式升序-asc 降序-desc
            width: '5%',
            queryParams: function queryParams(params){
                var param = {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    sortName: params.sortName,
                    sortOrder: params.sortOrder,
                    searchText: $("#searchText").val(),
                    msgType: $("#msgType").val(),
                    productLine: $("#productLine").val()
                };
                return param;
            }

        }, {
            field: 'lName',
            title: '房东姓名',
            sortable: true, // 允许排序列
            align: 'center',
            halign: 'center',
            valign: 'center',
            width: '15%'
        }, {
            field: 'lSex',
            title: '性别',
            sortable: true, // 允许排序列
            align: 'center',
            halign: 'center',
            valign: 'center',
            width: '5%'
        }, {
            field: 'lPhone',
            title: '手机',
            algin: 'center',
            halgin: 'center',
            width: '25%',

        },  {
            field: 'identify',
            title: '身份证',
            align: 'center',
            halign: 'center',
            valign: 'center',
            width: '30%',

        }, {
            field: 'houseInfo',
            title: '房源信息(id)',
            algin: 'right',
            halgin: 'right',
            valign: 'right',

            width: '5%',

        },{
            field: 'certifiedState',
            title: '是否已认证',
            align: 'center',
            halign: 'center',
            valign: 'center',
            width: '5%',

        },  {
            field: 'operate',
            title: '操作',
            align: 'right',
            halign: 'right',
            valign: 'right',
            width: '10%',
            events: operateEvents,  //点击事件
            formatter: operateFormatterLandLords   //格式化操作列函数
        }

        ],
        locale:'zh-CN',//中文支持,

    });
}

/**
 * 加载服务器数据之前的处理程序，可以用来格式化数据。
 * 参数：result为从服务器请求到的数据
 * @param result
 */
function responseHandlerLandLords(result) {
    // if (result.success === 'false') {
    //     alert('获取角色信息失败');
    //     return;
    // }

    var result1 = {
        "total": 4,
        "row": [{"uid": "1", "uname": "evan", "upsw": "1234", "ulogin_time": "2020-01-01 06:10:26", "ustate": "1"},
            {"uid": "15", "uname": "ken2", "upsw": "123", "ulogin_time": "2020-01-01 04:38:38", "ustate": "1"}]
    };


    // 返回数据，渲染表格
    return {
        //json数据格式
        // {"total": 0, "rows": []}
        // {"total":4,"row":[{"uid":"1","uname":"evan","upsw":"1234","ulogin_time":"2020-01-01 06:10:26","ustate":"1"},
        // {"uid":"15","uname":"ken2","upsw":"123","ulogin_time":"2020-01-01 04:38:38","ustate":"1"}]}
        total: result1.total, //总页数, key名称固定为"total"
        rows: result1.rows //行数据，key名称必须和bootstrapTable函数中dataField的值保持一致，默认为rows.
    };
};

$('#getLandlords').click(function () {
    $tableLandLords.bootstrapTable('load', randomDataLandLords());
});


//加载表格数据  load  参数json数据-->替换原来表格的所有数据
//生成随机数据
function randomDataLandLords() {
    //0: {uid: "1", uname: "evan", upsw: "12345", ulogin_time: "2020-01-01 06:10:26", ustate: "1"}
    var startId = ~~(Math.random() * 100);
    var rows = [];

    for (var i = 0; i < 10; i++) {
        rows.push({
            // lId, 5 lName, 15  lSex,  5 lPhone, 25 identify,  40   houseInfo,  5 certifiedState 5
            lId: startId + i,
            lName: '王' + (startId + i),
            lSex: '男',
            lPhone: '1101515151',
            identify: '4453319990707199'+i,
            houseInfo:'hId',
            certifiedState:'否',
            operate:'待操作'
        })
    }
    return rows;
}
