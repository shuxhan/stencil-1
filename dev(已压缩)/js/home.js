var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});

 var section2Up = document.getElementById('section2Up');
 window.addEventListener('scroll', () => {
    
    var scrollTop = document.documentElement.scrollTop 
    if (scrollTop > 66) {
        section2Up.style.animationName = 'up';
        section2Up.style.animationDuration = '1s';
        section2Up.style.opacity = '1'
    }
})

var section2caseup = document.getElementById('section2caseup');
window.addEventListener('scroll', () => {
    
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 612) {
        section2caseup.style.animationName = 'up';
        section2caseup.style.animationDuration = '1s';
        section2caseup.style.opacity = '1'
   }
})

var section3Up = document.getElementById('section3Up');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 1333) {
        section3Up.style.animationName = 'up';
        section3Up.style.animationDuration = '1s';
        section3Up.style.opacity = '1'
   }
})

var section3left = document.getElementById('section3left');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 1400) {
        section3left.style.animationName = 'left';
        section3left.style.animationDuration = '1s';
        section3left.style.opacity = '1'
   }
})

var section3right = document.getElementById('section3right');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 1400) {
    section3right.style.animationName = 'right';
    section3right.style.animationDuration = '0.8s';
    section3right.style.opacity = '1'
   }
})

var section4left = document.getElementById('section4left');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 2373) {
    section4left.style.animationName = 'left';
    section4left.style.animationDuration = '1s';
    section4left.style.opacity = '1'
   }
})
    
var section4right = document.getElementById('section4right');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 2374) {
    section4right.style.animationName = 'up';
    section4right.style.animationDuration = '0.8s';
    section4right.style.opacity = '1'
   }
})

var section5up = document.getElementById('section5up');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 2850) {
    section5up.style.animationName = 'up';
    section5up.style.animationDuration = '1s';
    section5up.style.opacity = '1'
   }
})

var section5upmain = document.getElementById('section5upmain');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 3256) {
    section5upmain.style.animationName = 'up';
    section5upmain.style.animationDuration = '1s';
    section5upmain.style.opacity = '1'
   }
})

var section5upmore = document.getElementById('section5upmore');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 3650) {
    section5upmore.style.animationName = 'up';
    section5upmore.style.animationDuration = '1s';
    section5upmore.style.opacity = '1'
   }
})

var section6up = document.getElementById('section6up');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 4000) {
    section6up.style.animationName = 'up';
    section6up.style.animationDuration = '1s';
    section6up.style.opacity = '1'
   }
})

var section6left = document.getElementById('section6left');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 4240) {
    section6left.style.animationName = 'left';
    section6left.style.animationDuration = '1s';
    section6left.style.opacity = '1'
   }
})

var section6right = document.getElementById('section6right');
window.addEventListener('scroll', () => {
   var scrollTop = document.documentElement.scrollTop 
   if (scrollTop > 4240) {
    section6right.style.animationName = 'right';
    section6right.style.animationDuration = '1s';
    section6right.style.opacity = '1'
   }
})

window.addEventListener('scroll', () => {
    var scrollTop = document.documentElement.scrollTop 
    if (scrollTop > 2500) {
        var istrue = true;
$(window).on("scroll",
  function() {
    var s = $(window).scrollTop();
    $(".timer").each(count);
    function count(a) {
        var b = $(this);
        a = $.extend({},
        a || {},
        b.data("countToOptions") || {});
        b.countTo(a)
    };
    istrue = false;
    $(".timer").removeClass("timer")
})

$.fn.countTo = function (options) {
    options = options || {};
    return $(this).each(function () {
        var settings = $.extend({}, $.fn.countTo.defaults, {
            from:            $(this).data('from'),
            to:              $(this).data('to'),
            speed:           $(this).data('speed'),
            refreshInterval: $(this).data('refresh-interval'),
            decimals:        $(this).data('decimals')
        }, options);

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
        };
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        render(value);
        function updateTimer() {
            value += increment;
            loopCount++;
            render(value);
            if (typeof(settings.onUpdate) == 'function') {
                settings.onUpdate.call(self, value);
            }
            if (loopCount >= loops) {

                $self.removeData('countTo');
                clearInterval(data.interval);
                value = settings.to;
                if (typeof(settings.onCompvare) == 'function') {
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
    $.fn.countTo.defaults={
        from:0,
        to:0,               
        speed:100,
        refreshInterval:1,
        decimals:0,
        formatter: formatter,
        onUpdate:null,
        onCompvare:null
    };
    function formatter(value, settings){
        return value.toFixed(settings.decimals);
    }

    $('#count-number').data('countToOptions',{
        formmatter:function(value, options){
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });
 
    $('.timer').each(count);
    function count(options){
        var $this=$(this);
        options=$.extend({}, options||{}, $this.data('countToOptions')||{});
        $this.countTo(options);
    }
    }
 })


