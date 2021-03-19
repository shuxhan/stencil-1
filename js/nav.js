var menuWrap1 = document.getElementById('menuWrap1');
var menuWrap2 = document.getElementById('menuWrap2');
var menuWrap3 = document.getElementById('menuWrap3');
var menuWrap4 = document.getElementById('menuWrap4');
var logoListItem1 = document.getElementById('logoListItem1');
var logoListItem2 = document.getElementById('logoListItem2');
var logoListItem3 = document.getElementById('logoListItem3');
var logoListItem4 = document.getElementById('logoListItem4');
var menuWrapDown = document.getElementsByClassName('menu-wrap-down');
var menuWrapUp = document.getElementsByClassName('menu-wrap-up');
var section2Up = document.getElementById('section2Up');
var logomenu1 = document.getElementById('logomenu1');
var logomenu2 = document.getElementById('logomenu2');
var logomenu3 = document.getElementById('logomenu3');
var logomenu4 = document.getElementById('logomenu4');

var navWrap = document.getElementById('navWrap');
var navson = document.getElementById('navson');
var navli = navson.getElementsByClassName('logo-list-item');
var navSearch = navson.getElementsByClassName('nav-search');

var test = document.getElementById('test');

function addEvent(type, toDo) {
    if (window.attachEvent) {
        window.attachEvent('on' + type, function() {
            toDo.call(window)
        })
    } else {
        window.addEventListener(type, toDo, false)
    }
}
addEvent('scroll', function(){
    var scrollTop = document.documentElement.scrollTop
    if (scrollTop > 1000) { 
        navson.style.position = 'fixed';
        navson.style.top = '0';
        navson.style.height = '66px';
        navli[0].style.lineHeight = '66px';
        navli[1].style.lineHeight = '66px';
        navli[2].style.lineHeight = '66px';
        navli[3].style.lineHeight = '66px';
        navli[4].style.lineHeight = '66px';
        navSearch[0].style.marginTop = '12px';
    } else {
        navson.style.position = 'relative';
        navson.style.height = '100px';
        navli[0].style.lineHeight = '100px';
        navli[1].style.lineHeight = '100px';
        navli[2].style.lineHeight = '100px';
        navli[3].style.lineHeight = '100px';
        navli[4].style.lineHeight = '100px';
        navSearch[0].style.marginTop = '29px';
    }
});

addEvent('scroll', function(){
    var scrollTop = document.documentElement.scrollTop 
    if (scrollTop < 600) {
        test.style.display = 'none';
    } else {
        test.style.display = 'block';
    }
})


$("#test").click(function () {
    $('html,body').animate({ 'scrollTop': '0' }, 500)
})

var i2 = 0;
menuWrap2.onclick = function () {
    if (i2 == 0) {
        logomenu2.style.display = 'block';
        menuWrapDown[0].style.display = 'block';
        menuWrapUp[0].style.display = 'none';
        i2 = 1;
    } else {
        logomenu2.style.display = 'none';
        menuWrapDown[0].style.display = 'none';
        menuWrapUp[0].style.display = 'block';
        i2 = 0;
    }
}


var i4 = 0;
menuWrap4.onclick = function () {
    if (i4 == 0) {
        logomenu4.style.display = 'block';
        menuWrapDown[1].style.display = 'block';
        menuWrapUp[1].style.display = 'none';
        i4 = 1;
    } else {
        logomenu4.style.display = 'none';
        menuWrapDown[1].style.display = 'none';
        menuWrapUp[1].style.display = 'block';
        i4 = 0;
    }
}


var logoMenuWrap = document.getElementById('logoMenuWrap');
var logoMenuList = document.getElementById('logoMenuList');
var shadow = document.getElementById('shadow');

logoMenuWrap.addEventListener('click', function () {
    logoMenuList.style.display = 'block';

    // 移动端侧边导航栏，二级分类默认展示，如果想取消默认展示，注释掉下面两行
    logomenu2.style.display = 'block';
    logomenu4.style.display = 'block';
    // 结束 

    logoMenuList.style.animationName = 'menu';
    logoMenuList.style.animationDuration = '0.5s';
    logoMenuList.style.opacity = '1';
    shadow.style.display = 'block';
})

shadow.addEventListener('click', function () {
    shadow.style.display = 'none';
    logoMenuList.style.animationName = 'menuback';
    logoMenuList.style.animationDuration = '0.5s';
    logoMenuList.style.opacity = '1';

    setTimeout(function () {
        logoMenuList.style.display = 'none';
    }, 400);
})

