// 基于jQuery编写
// 左进左出效果一
$(function () {
    //获取菜单栏子项
    $(".nav_menu").each(function () {
        // 隐藏子标题
        $(this).children(".nav_content").hide();
    });

    // 给所有菜单栏子项-主标题绑定事件
    $('.nav_title').each(function () {
        $(this).click(function () {
            // 显示子标题
            var navConEle = $(this).parents('.nav_menu').children('.nav_content');
            // 判断子标题是否隐藏（display = none）
            if (navConEle.css('display') != "none") {
                //隐藏
                navConEle.hide(300); //500是动画时间，单位毫秒
            } else {
                // 显示
                navConEle.show(300); //500是动画时间，单位毫秒
            }
            console.log("33");
        });
    });

    //给所有菜单栏子项-子标题绑定事件
    $(".nav_content a").each(function () {
        console.log('11');
        $(this).click(function () {
            console.log(this);
            console.log('22');
            // 获取data-src的值
            let displaySrc = $(this).attr("data-src");
            // 更改data-src的值
            $("iframe").attr("src", displaySrc)
        })
    })
});