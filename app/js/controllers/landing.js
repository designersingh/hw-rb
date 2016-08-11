'use strict';

hwApp.controller('LandingController',
    ['$routeParams','$scope','$rootScope','$http','$location','ngDialog',
    function($routeParams,$scope,$rootScope,$http,$location,ngDialog){

    $scope.welcome = "Welcome to Landing Page.";

    $scope.initLanding = function(){

        $(window).scroll(function(){
              var wScroll = $(this).scrollTop();

              $('.hot-wheels-car').css({
                'transform':'translate(0px,'+ wScroll/6+'%)',
                'margin-right': wScroll/20 +'%'
              });

              var carsAnimationPosition = $('.cars-animation').offset().top;
              var scroll_position = $(window).scrollTop();
              var viewport_height = $(window).height();

              //console.log(scroll_position);
              var counter;

              if ((scroll_position + viewport_height) > carsAnimationPosition) {

                  counter = (wScroll-2035);
                  counter = counter.toString();
                  counter = '0'+counter;
                  var first = counter.substr(0, 2);
                  var second = counter.substr(2, 4);
                  counter = first +':'+ second;
                
                  $('.timer').html(counter);

                  $('.car-1').css({
                    'right': ((wScroll/3) +10) +'px'
                  });

                  $('.car-2').css({
                    'left': ((wScroll/3) +10) +'px'
                  });
              }

        });


        setTimeout(function () {
            $('.intro-heading').animate({
                opacity:1,
                transform: 'rotate(20deg)'
            }).addClass('animated tada')}, 1500
        );
    }

}]);
