<div class="row content-nav">
    <div class="col-xs-12">
        <ul>
            <li><a href="javascript:;"><i></i>&nbsp;分销会员</a></li>
            <li><a href="javascript:;">返现明细</a></li>
        </ul>
    </div>
</div>

<section class="content clearfix">
    <div class="layui-list-box">
        <table class="layui-hide" id="list-box" lay-filter="list-box"></table>
    </div>
</section>

<script type="text/html" id="list-toolbar">
    <div class="layui-btn-container">
        <button lay-event="refresh" type="button" class="layui-btn layui-btn-sm layui-bg-red"><i class="layui-icon">&#xe9aa;</i> 刷新</button>
        <button lay-event="return" type="button" class="layui-btn layui-btn-sm layui-bg-orange"><i class="layui-icon">&#xe603;</i> 返回</button>
    </div>
</script>

<script>
layui.use(['table','form'], function () {
    var table = layui.table;
    var form = layui.form;

    table.render({
        elem: '#list-box'
        , url: '{:createUrl("log",["id"=>$id])}'
        , toolbar: '#list-toolbar'
        , defaultToolbar: []
        , title: '数据表'
        , cols: [[
                  {type: 'checkbox'}
                , {field: 'description', title: '信息'}
                , {field: 'create_time', title: '创建时间',width:180,align:'center'}
            ]]
        , text: {
            none: '<div><i class="layui-icon">&#xe702;</i>暂无相关数据</div>'
        }
        , page: true
        , height: 'full-200'
        // ,limit:30
    });

    //头工具栏事件
    table.on('toolbar(list-box)', function (obj) {
        switch (obj.event) {
            case 'refresh':
                window.location.reload();
                break;
            case 'return':
                window.history.go(-1);
                break;
        }
    });
    
});
</script>

