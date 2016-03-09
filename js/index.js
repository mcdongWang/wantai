var slideInterval
var vm = new Vue({
    el: '#vm',
    data: {
        navList:['网站首页', '中心简介', '招生动态', '教学展示', '童学馆', '国学养生', '联系我们'],navHref: ['index.html', 'zxjj.html', 'zsdt.html', 'jxzs.html', 'txt.html', 'gxys.html', 'lxwm.html'],
        slideList: [{
            title : 'lalala',
            text : 'owowowoowowowowowowowowowowowowowowowoow',
            img : 'img/slide1.jpg'
        },{
            title : 'lalala',
            text : 'asdfasdf',
            img : 'img/slide2.jpg'
        },{
            title : 'lalala',
            text : 'oasdbow',
            img : 'img/slide3.jpg'
        },{
            title : 'lalala',
            text : 'owow3455675643owowoow',
            img : 'img/slide4.jpg'
        }],
        slideIndex : 0,
        xi : false
    },
    methods: {
        slideChange: function(data){
            this.slideIndex = data
            clearInterval(slideInterval)
            slideInterval = setInterval(function(){
                vm.slideIndex = (vm.slideIndex + 1) % vm.slideList.length
            }, 3000)
        }
    },
    ready: function(){
        slideInterval = setInterval(function(){
            vm.slideIndex = (vm.slideIndex + 1) % vm.slideList.length
        }, 3000)
    }
})

window.onscroll=function(){
    var a = document.body.scrollTop
    if(vm.xi){
        if(a <= 95){
            vm.xi = false
        }
    }else{
        if(a >= 95){
            vm.xi = true
        }
    }
}