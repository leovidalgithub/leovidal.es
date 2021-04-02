"use strict";

let sendTracking = stage => {
  $.get('http://freegeoip.net/json/', callback.bind(null, stage));
};

const callback = (stage, data) => {
  let trackingObj = {
    city: data.city,
    country_name: data.country_name,
    ip: data.ip,
    region_name: data.region_name,
    time_zone: data.time_zone,
    zip_code: data.zip_code,
    time: new Date().getTime(),
    stage: stage // country_code: data.country_code,
    // region_code: data.region_code,

  };

  if (typeof Storage !== "undefined") {
    // browser localStorage available
    let localuserid = localStorage.getItem('localuserid') || null;
    $.post(buildURL('tracking'), {
      id: localuserid,
      trackingObj: trackingObj
    }, insertedId => {
      if (insertedId) {
        localStorage.setItem('localuserid', insertedId); // save on localStorage userId whether or not already exists
      }
    }, 'json');
  }

  ;
};

angular.module('myAppCV', ['pascalprecht.translate', 'ngSanitize', 'miscellaneous']).config(['$translateProvider', $translateProvider => {
  $translateProvider.registerAvailableLanguageKeys(['es-ES', 'en-US', 'fr-FR'], {
    'en*': 'en-US',
    'us*': 'en-US',
    'uk*': 'en-US',
    'es*': 'es-ES',
    'fr*': 'fr-FR'
  }).useStaticFilesLoader({
    prefix: 'locale/lang_',
    suffix: '.json'
  }).preferredLanguage('en-US').fallbackLanguage('en-US') // if some language is missing, this one will be used instead
  .determinePreferredLanguage().useSanitizeValueStrategy(null); // .useSanitizeValueStrategy('sanitize'); // it seems to be not necessary for html-tags inside json translations files
  // $translateProvider.determinePreferredLanguage(function(){
  // let currentIdiom = (window.navigator.browserLanguage ||
  //                 window.navigator.userLanguage ||
  //                 window.navigator.systemLanguage ||
  //                 window.navigator.language ||
  //                 window.navigator.languages[0]).toLowerCase();
  //                 console.log(currentIdiom);
  //                 return currentIdiom;
  // });
}]).run([() => {
  // sendTracking('initial'); // sending initial user tracking
  angular.element(document).ready(() => {
    mainInit();
  });
}]).controller('mainController', ['$rootScope', '$translate', '$timeout', '$http', '$window', function ($rootScope, $translate, $timeout, $http, $window) {
  let vm = this;
  vm.data = {};
  $timeout(() => {
    let currentIdom = $translate.use() || 'en-US';
    vm.myIdiom = currentIdom;
    $translate.use(currentIdom);
  });

  vm.openUrl = val => {
    switch (val) {
      case 1:
        $window.open('http://sipedi.net', '_blank');
        break;

      case 2:
        $window.open('http://zemtime.ngi.sipedi.net', '_blank');
        break;

      case 3:
        $window.open('http://zemtime.ngiv.sipedi.net', '_blank');
        break;

      default:
        break;
    }
  };

  vm.submit = () => {
    vm.data.sending = true;
    let status = '';
    $http.post(buildURL('contact'), vm.data).then(data => {
      if (data.data.success) {
        status = 'ok';
        vm.data = {};
      } else {
        status = 'error';
      }
    }).catch(err => status = 'error').finally(() => {
      $rootScope.$broadcast('showThisAlertPlease', {
        type: status
      });
      vm.data.sending = false;
    });
  };

  vm.idiomChange = idiom => {
    // if (idiom == 'fr-FR') {
    //     idiom = $translate.use(); // since french is not available, it takes the current idiom a set it
    //     alert(`Désolé, la page n'est pas encore disponible en français.`);
    // }
    vm.myIdiom = idiom;
    $translate.use(idiom);
  };
}]);

(function () {
  'use strict';

  angular.module('miscellaneous', []).directive('alertMessage', alertMessage).controller('alertMessageController', alertMessageController);
  alertMessageController.$invoke = ['$scope', '$timeout'];

  function alertMessageController($scope, $timeout) {
    let thisIsBusy = false;
    let thisArray = [];
    $scope.$on('showThisAlertPlease', function (event, data) {
      let alreadyExists = thisArray.some(function (el) {
        return el.type == data.type;
      });
      if (!alreadyExists) thisArray.push({
        type: data.type,
        msg: data.msg
      });
      if (thisIsBusy == false) doIt();
    });

    function doIt() {
      if (thisArray.length) {
        // there is some alert to show
        thisIsBusy = true;
        let nextAlert = thisArray.shift();
        showingThis(nextAlert.type, nextAlert.msg);
      } else {
        // no more alerts inside array to show
        thisIsBusy = false;
      }
    }

    function showingThis(_type, _msg) {
      $scope.type = _type;
      $scope.alertMessage = _msg;
      moveThis(5, .95);
      $timeout(function () {
        moveThis(-390, 0);
      }, $scope.type == 'ok' ? 5500 : 6500);
    }

    function moveThis(RP, OP) {
      $('#alertMessage').animate({
        opacity: OP,
        right: RP + 'px'
      }, 850, function () {
        if (RP < 0) {
          // when exit
          $timeout(function () {
            doIt();
          });
        }
      });
    }
  }

  function alertMessage() {
    return {
      restrict: 'E',
      scope: true,
      transclude: false,
      templateUrl: 'build/templates/alertMsg/alertmsg.tpl.html',
      controller: alertMessageController,
      link: function (scope, elem, attrs) {}
    };
  }
})(); // $window.innerWidth >= 600

/*-----------------------------------------------------------------------------------
/* Init JS
-----------------------------------------------------------------------------------*/


const mainInit = () => {
  // jQuery(document).ready(function($) { // already done by Angular when calling init.js -> mainInit()

  /*----------------------------------------------------*/

  /* FitText Settings for Header H1 and Portfolio H2
  /* Show Header (and Idioms) for the first time when loaded
  ------------------------------------------------------ */
  setTimeout(() => {
    $('h1.responsive-headline').fitText(1, {
      minFontSize: '40px',
      maxFontSize: '48px'
    });
    $('#portfolio h2').fitText(1, {
      minFontSize: '30px',
      maxFontSize: '85px'
    });
    $(document.body).css('opacity', '1');
  }, 1600);
  /*----------------------------------------------------*/

  /* Idioms options show/hide
  ------------------------------------------------------ */

  $('#idioms .selected').mouseenter(function (event) {
    $('#idioms .choose').clearQueue().show().animate({
      opacity: '1',
      right: '8px',
      'z-index': '15'
    }, 'slow', idiomsClose);
  });

  let idiomsClose = function () {
    $('#idioms .choose').bind('mouseleave click', function (event) {
      $('#idioms .choose').animate({
        opacity: '0',
        right: '-70px',
        'z-index': '5'
      }, 'slow', function () {
        $('#idioms .choose').hide().unbind();
      });
    });
  };
  /*----------------------------------------------------*/

  /* Parallax Settings (HEADER and SKILLS images)
  ------------------------------------------------------ */


  const randomImage = () => {
    let x = Math.floor(Math.random() * 8); // between 0 & 7

    return `./images/header-8912${x}.jpg`;
  };

  $('header').parallax({
    imageSrc: randomImage(),
    speed: .2,
    position: 'center center',
    zIndex: '0',
    androidFix: true,
    iosFix: true
  });
  $('#mySkills').parallax({
    imageSrc: './images/cvBBO4PzWPg-unsplash.jpg',
    speed: .4,
    position: 'center center',
    zIndex: '0',
    androidFix: true,
    iosFix: true
  }); // change header image every timelapse

  setInterval(() => {
    $('.parallax-slider').eq(1).attr('src', randomImage());
  }, 30000);
  /*----------------------------------------------------*/

  /* Smooth Scrolling
  ------------------------------------------------------ */

  $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    let target = this.hash;
    let $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 1100, 'swing', () => {// window.location.hash = target;
    });
  });
  /*----------------------------------------------------*/

  /* Waypoints
  ------------------------------------------------------*/

  /*----------------------------------------------------*/

  /* Waypoint - Highlight the current section in the navigation bar
  ------------------------------------------------------*/

  let sections = $('section');
  let navigation_links = $('#nav-wrap a');
  sections.waypoint({
    handler: function (direction) {
      // sendTracking(this.element.id); // sending user tracking stage (about, portfolio, etc.)
      let active_section = $(this.element);
      if (direction === 'up') active_section = active_section.prev();
      let active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
      navigation_links.parent().removeClass('current');
      active_link.parent().addClass('current');
    },
    offset: '18%'
  });
  /*----------------------------------------------------*/

  /* Waypoint - Adding skill classes to animate skill-bars
  ------------------------------------------------------*/

  let skillsWaypoint = new Waypoint({
    element: document.getElementById('mySkills'),
    handler: function () {
      let skills = ['Angular', 'NodeJS', 'JavaScript', 'Sass', 'jQuery', 'MongoDB', 'HTML_CSS', 'Git', 'Gulp', 'PHP', 'Scrum', 'Jasmine'];
      $('#resume ul.skills li span').each(function (index) {
        $(this).delay(3000).addClass(skills[index]);
      });
      this.destroy(); // skillsWaypoint.destroy();
    },
    offset: '23%' //   offset: 'bottom-in-view'

  });
  /*----------------------------------------------------*/

  /* Waypoint - Adding spin class to GET IN TOUCH icon
  ------------------------------------------------------*/

  let getintouchWaypoint = new Waypoint({
    element: document.getElementById('contact'),
    handler: function () {
      setTimeout(function () {
        $('#contact .touchIcon').addClass('spin');
      }, 1000);
      this.destroy();
    },
    offset: '15%'
  });
  /*----------------------------------------------------*/

  /*	Setting min-height of all sections as window-height
  ------------------------------------------------------ */

  let checkHeights = () => {
    let windowHeight = $(window).height();
    let myArray = ['header', 'about', 'resume', 'portfolio', 'contact'];

    for (let index = 0; index < myArray.length; index++) {
      $(`#${myArray[index]}`).css({
        'min-height': windowHeight
      });
    }
  };

  checkHeights();
  $(window).on('resize', () => {
    checkHeights();
  });
  /*----------------------------------------------------*/

  /*	Fade In/Out Primary Navigation
  ------------------------------------------------------*/

  $(window).on('scroll', function () {
    let h = $('header').height();
    let y = $(window).scrollTop();
    let nav = $('#nav-wrap');

    if (y > h * .20 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut('fast');
    } else {
      if (y < h * .20) {
        nav.fadeIn(1000).removeClass('opaque');
      } else {
        nav.fadeIn(1000).addClass('opaque');
      }
    }
  });
  /*----------------------------------------------------*/

  /*	Mobile hambuger menu
  	ESC key event in modal.js
  ------------------------------------------------------*/

  $(document).on('click', function (e) {
    // e.preventDefault();
    if ($(e.target).hasClass('mobile-btn')) {
      $('#nav.nav').toggleClass('open');
    } else {
      $('#nav.nav').removeClass('open');
    }
  });
}; // mainInit()

/*----------------------------------------------------*/

/*	Modal Popup
------------------------------------------------------*/
// $('.item-wrap a').magnificPopup({
//    type:'inline',
//    fixedContentPos: false,
//    removalDelay: 200,
//    showCloseBtn: false,
//    mainClass: 'mfp-fade'
// });
// $(document).on('click', '.popup-modal-dismiss', function (e) {
// 		e.preventDefault();
// 		$.magnificPopup.close();
// });

/*----------------------------------------------------*/

/*	Flexslider
/*----------------------------------------------------*/
// $('.flexslider').flexslider({
//    namespace: "flex-",
//    controlsContainer: ".flex-container",
//    animation: 'slide',
//    controlNav: true,
//    directionNav: false,
//    smoothHeight: true,
//    slideshowSpeed: 7000,
//    animationSpeed: 600,
//    randomize: false,
// });
// $('.flexslider').flexslider({
//     initDelay: 0,
//     animation: "fade", // slide
//     slideshowSpeed: 6000,
//     animationSpeed: 700,
//     slideshow: true,
//     randomize: false,
//     pauseOnAction: true,
//     pauseOnHover: false
//  //    smoothHeight: true
//  //    start: function(){console.log('start');},
//  //    before: function(){console.log('before');},
//  //    after: function(){console.log('after');},
//  //    end: function(){console.log('end');}
// });
// THIS IS THE LAST I DID
//    $('.bxslider').bxSlider({
//         mode: 'horizontal',
//         useCSS: false,
//         infiniteLoop: false,
//         hideControlOnEnd: true,
//         easing: 'easeOutElastic',
//         speed: 2000
//     });


const modal = $('#main-modal');

function closeModal(e) {
  modal.css('display', 'none');
}

$('.modal-image').on('click', function (e) {
  const src = $(this).attr('src');
  const caption = $(this).attr('alt');
  modal.find('img').attr('src', src);
  modal.find('.caption').text(caption);
  modal.css('display', 'block');
}); // closing modal

$('span.close').on('click', closeModal);
$(document).on('keyup', function (e) {
  if (e.key === 'Escape') closeModal();
  $('#nav.nav').removeClass('open');
});
const protocol = window.location.protocol;
const hostname = window.location.hostname;
const API_base = `${protocol}//${hostname}/`; // for both production & development (backend on port 80)

const API_paths = {
  contact: 'contact/',
  tracking: 'tracking/'
};

const buildURL = path => API_base + API_paths[path];