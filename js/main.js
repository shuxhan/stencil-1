var tabNavTitle = document.getElementById('tabNavTitle');
var tableNavMenu = document.getElementById('tableNavMenu');
var aboutDownPng = document.getElementById('aboutDownPng');
var i = 0;
var w = document.documentElement.clientWidth;

var tabNavTitle = function() {
    if (i == 0) {
        tableNavMenu.style.display = 'block';
        aboutDownPng.classList.add('about-down-png-rotate')
        i = 1;
    } else {
        tableNavMenu.style.display = 'none';
        aboutDownPng.classList.remove('about-down-png-rotate')
        i = 0;
    }
}


window.addEventListener('load', function() {
    window.addEventListener('resize', function() {
        var w = window.innerWidth;
        if(w < 768){
            addEventListener('click',tabNavTitle)
        } else {
            removeEventListener('click', tabNavTitle)
        }
    })

})


var menuWrapDown = document.getElementsByClassName('menu-wrap-down');
var menuWrapUp = document.getElementsByClassName('menu-wrap-up');
var section2Up = document.getElementById('section2Up');

var navWrap = document.getElementById('navWrap');
var navson = document.getElementById('navson');
var navli = $('.nav-list > ul li');
var navSearch = navson.getElementsByClassName('nav-search');

var test = document.getElementById('test');

function addEvent(type, toDo) {
  if (window.attachEvent) {
    window.attachEvent('on' + type, function () {
      toDo.call(window);
    });
  } else {
    window.addEventListener(type, toDo, false);
  }
}
addEvent('scroll', function () {
  var scrollTop = document.documentElement.scrollTop;
  if (scrollTop > 120) {
    navson.style.position = 'fixed';
    navson.style.top = '0';
    navson.style.height = '66px';
    navli.css({
      lineHeight: '66px',
    });
    navSearch[0].style.marginTop = '12px';
  } else {
    navson.style.position = 'relative';
    navson.style.height = '100px';
    navli.css({
      lineHeight: '100px',
    });
    navSearch[0].style.marginTop = '29px';
  }
  
});

$('.submenu').before('<span class="menu-drop"><i class="menu-wrap-down"></i><i class="menu-wrap-up"></i></span>')

addEvent('scroll', function () {
  var scrollTop = document.documentElement.scrollTop;
  // console.log(scrollTop)
  
  if (scrollTop < 600) {
    test.style.display = 'none';
  } else {
    test.style.display = 'block';
  }
});

$('#test').click(function () {
  $('html,body').animate({ scrollTop: '0' }, 500);
});

var submenu = document.getElementsByClassName('submenu')

var menuWrap = document.getElementsByClassName('menu-drop')
var i2 = 0;
navli[2].onclick = function () {
  if (i2 == 0) {
    submenu[0].style.display = 'block';
    menuWrapDown[0].style.display = 'block';
    menuWrapUp[0].style.display = 'none';
    i2 = 1;
  } else {
    submenu[0].style.display = 'none';
    menuWrapDown[0].style.display = 'none';
    menuWrapUp[0].style.display = 'block';
    i2 = 0;
  }
};

// var i4 = 0;
// menuWrap[1].onclick = function () {
//   if (i4 == 0) {
//     logomenu4.style.display = 'block';
//     menuWrapDown[1].style.display = 'block';
//     menuWrapUp[1].style.display = 'none';
//     i4 = 1;
//   } else {
//     logomenu4.style.display = 'none';
//     menuWrapDown[1].style.display = 'none';
//     menuWrapUp[1].style.display = 'block';
//     i4 = 0;
//   }
// };

var logoMenuWrap = document.getElementById('logoMenuWrap');
var logoMenuList = document.getElementById('logoMenuList');
var shadow = document.getElementById('shadow');
var html = document.getElementsByTagName('html')[0];
var body = document.getElementsByTagName('body')[0];

logoMenuWrap.addEventListener('click', function () {
  logoMenuList.style.display = 'block';

  // 移动端侧边导航栏，二级分类默认展示，如果想取消默认展示，注释掉下面
  // submenu[0].style.display = 'block';
  // 结束

  logoMenuList.style.animationName = 'menu';
  logoMenuList.style.animationDuration = '0.5s';
  logoMenuList.style.opacity = '1';
  shadow.style.display = 'block';

  html.style.overflow="hidden";
  html.style.height="100%";
  body.style.overflow="hidden";
  body.style.height="100%";
});

shadow.addEventListener('click', function () {
  shadow.style.display = 'none';
  logoMenuList.style.animationName = 'menuback';
  logoMenuList.style.animationDuration = '0.5s';
  logoMenuList.style.opacity = '1';

  
  html.style.overflow="inherit";
  html.style.height="auto";
  body.style.overflow="inherit";
  body.style.height="auto";

  setTimeout(function () {
    logoMenuList.style.display = 'none';
  }, 400);
});

var section2caseup = document.getElementById('section2caseup');
var section3Up = document.getElementById('section3Up');
var section3left = document.getElementById('section3left');
var section3right = document.getElementById('section3right');
var section4left = document.getElementById('section4left');
var section4right = document.getElementById('section4right');
var section5up = document.getElementById('section5up');
var section5upmain = document.getElementById('section5upmain');
var section5upmore = document.getElementById('section5upmore');
var section6up = document.getElementById('section6up');
var section6left = document.getElementById('section6left');
var section6right = document.getElementById('section6right');



addEvent('scroll', function () {
  var scrollTop = document.documentElement.scrollTop;

  if($(document).find(section2caseup).length) { 
    if (scrollTop > 582) {
      section2caseup.style.animationName = 'up';
      section2caseup.style.animationDuration = '1s';
      section2caseup.style.opacity = '1';
    }
  }

  if($(document).find(section3Up).length) { 
    if (scrollTop > 1250) {
    section3Up.style.animationName = 'up';
    section3Up.style.animationDuration = '1s';
    section3Up.style.opacity = '1';
  }
  }

  

  if($(document).find(section3left).length) { 
    if (scrollTop > 1300) {
      section3left.style.animationName = 'left';
      section3left.style.animationDuration = '1s';
      section3left.style.opacity = '1';
    }
  
  }

  
  if($(document).find(section3right).length) { 
    if (scrollTop > 1400) {
    section3right.style.animationName = 'right';
    section3right.style.animationDuration = '0.8s';
    section3right.style.opacity = '1';
  }
  }

  

  if($(document).find(section4left).length) { 
    if (scrollTop > 2373) {
    section4left.style.animationName = 'left';
    section4left.style.animationDuration = '1s';
    section4left.style.opacity = '1';
  }
  }

  

  if($(document).find(section4right).length) { 
     if (scrollTop > 2374) {
    section4right.style.animationName = 'up';
    section4right.style.animationDuration = '0.8s';
    section4right.style.opacity = '1';
  }
  }

 

  if($(document).find(section5up).length) { 
    if (scrollTop > 2850) {
    section5up.style.animationName = 'up';
    section5up.style.animationDuration = '1s';
    section5up.style.opacity = '1';
  }
  }

  

  if($(document).find(section5upmain).length) { 
    if (scrollTop > 3256) {
    section5upmain.style.animationName = 'up';
    section5upmain.style.animationDuration = '1s';
    section5upmain.style.opacity = '1';
  }
  }

  

  if($(document).find(section5upmore).length) { 
      if (scrollTop > 3650) {
    section5upmore.style.animationName = 'up';
    section5upmore.style.animationDuration = '1s';
    section5upmore.style.opacity = '1';
  }
  }



  if($(document).find(section6up).length) { 
      if (scrollTop > 4000) {
    section6up.style.animationName = 'up';
    section6up.style.animationDuration = '1s';
    section6up.style.opacity = '1';
  }
  }



  if($(document).find(section6left).length) { 
    if (scrollTop > 4240) {
    section6left.style.animationName = 'left';
    section6left.style.animationDuration = '1s';
    section6left.style.opacity = '1';
  }
  }

  

  if($(document).find(section6right).length) { 
    if (scrollTop > 4240) {
    section6right.style.animationName = 'right';
    section6right.style.animationDuration = '1s';
    section6right.style.opacity = '1';
  }
  }

  

  if (scrollTop > 2500) {
    var istrue = true;
    $(window).on('scroll', function () {
      var s = $(window).scrollTop();
      $('.timer').each(count);
      function count(a) {
        var b = $(this);
        a = $.extend({}, a || {}, b.data('countToOptions') || {});
        b.countTo(a);
      }
      istrue = false;
      $('.timer').removeClass('timer');
    });

    $.fn.countTo = function (options) {
      options = options || {};
      return $(this).each(function () {
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data('from'),
            to: $(this).data('to'),
            speed: $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals: $(this).data('decimals'),
          },
          options
        );

        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;

        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data('countTo') || {};
        $self.data('countTo', data);

        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        render(value);
        function updateTimer() {
          value += increment;
          loopCount++;
          render(value);
          if (typeof settings.onUpdate == 'function') {
            settings.onUpdate.call(self, value);
          }
          if (loopCount >= loops) {
            $self.removeData('countTo');
            clearInterval(data.interval);
            value = settings.to;
            if (typeof settings.onCompvare == 'function') {
              settings.onCompvare.call(self, value);
            }
          }
        }
        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };
    $.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 100,
      refreshInterval: 1,
      decimals: 0,
      formatter: formatter,
      onUpdate: null,
      onCompvare: null,
    };
    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }

    $('#count-number').data('countToOptions', {
      formmatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      },
    });

    $('.timer').each(count);
    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      $this.countTo(options);
    }
  }
});
