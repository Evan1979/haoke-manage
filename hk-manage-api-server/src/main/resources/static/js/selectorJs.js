
var flag = true;
$( document ).ready(function() {
    var select = $("#searchNameInput");
    select.on('shown.bs.select',function(e){
        var inputSearch = $(select).parent().find("input");
        // console.log("进入到节点50.......");
        // $(inputSearch).on('change', function () {
        //     console.log("进入到parentInput 改变值.......");
        // });
        //获取下拉select里的输入框,提示一下搜索下拉
        $(inputSearch).attr('placeholder',"请输入楼盘名称搜索");
        // $(inputSearch).on('onblur', function () {
        //     console.log("进入到parentInput 改变值.......");
        // });

        $(inputSearch).on('input propertychange',function(){
            flag = true;

            // console.log("进入到parentInput 改变值.......");
            // console.log("进入到节点60.......");

            //为select里的输入框绑定id,方便获取
            $(inputSearch).attr('id',"searchName");
            setTimeout(function () {//延时2秒
                var name = $('#searchName').val();


                if (flag === true){
                    estatelist('#searchNameInput',name);
                }
                $(inputSearch).on('change',function(){
                    console.log("进入change...... ");
                });
            },1500);

        });
        //绑定一下键盘输入
        // $(inputSearch).keyup(function(){
        //     console.log("进入到节点60.......");
        //     //为select里的输入框绑定id,方便获取
        //     $(inputSearch).attr('id',"searchName");
        //     // var datas = {
        //     //     'gname':dangname
        //     // };
        //     setTimeout(function () {//延时2秒
        //         var name = $('#searchName').val();
        //         console.log("88name: " + name);
        //         estatelist('#gid',name);
        //
        //         $(inputSearch).on('change',function(){
        //             console.log("进入change...... ");
        //         });
        //     },3000);
        // });
    });


    select.on('changed.bs.select',function(e, clickedIndex, isSelected, previousValue) {

        console.log("jinru..........");
        let val = $(select).children('option').get(clickedIndex).val();
        $('#inputEstateAddr').val(val+isSelected);

    });

    function estatelist(obj,name){
        // console.log("进入到节点96estatelist.......");
        console.log("97name: " + name);

        $(obj).empty();
        $.ajax({
            type: "post",
            url:'/getEstateName',       //查询url
            data:{"name":name},
            async:false,
            dataType: "json",
            success: function(data){
                console.log("successData: "+data);
                if (data !=='') {
                    var html = '';
                    $.each(data,function (index,ele) {
                        html += '<option value="' + ele.name + '" attr="' + ele.address + '">' + ele.name+ '</option>';
                    });
                    $(obj).html(html);
                }else {
                    $(obj).html('<option value="">请选择楼盘</option>');
                }
                //刷新select
                // 缺一不可
                $(obj).selectpicker('refresh');
                $(obj).selectpicker('render');
                flag = false;
            },
            error: function () {
                console.log("查询失败.....");
            }
        });
    }
});