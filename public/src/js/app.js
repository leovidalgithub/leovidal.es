const protocol = window.location.protocol;
const hostname = window.location.hostname;

angular
    .module('myAppCV', ['pascalprecht.translate', 'ngSanitize', 'miscellaneous'])
    .config(['$translateProvider', function ($translateProvider) {

        $translateProvider
            .registerAvailableLanguageKeys(['es-ES', 'en-US', 'fr-FR'], {
                'en*': 'en-US',
                'us*': 'en-US',
                'uk*': 'en-US',
                'es*': 'es-ES',
                'fr*': 'fr-FR'
            })
            .useStaticFilesLoader({
                prefix: 'locale/lang_',
                suffix: '.json'
            })
            .preferredLanguage('en-US')
            .fallbackLanguage('en-US') // if some language is missing, this one will be used instead
            .determinePreferredLanguage()
            .useSanitizeValueStrategy(null);
            // .useSanitizeValueStrategy('sanitize'); // it seems to be not necessary for html-tags inside json translations files
            // $translateProvider.determinePreferredLanguage(function(){
            // let currentIdiom = (window.navigator.browserLanguage ||
            //                 window.navigator.userLanguage ||
            //                 window.navigator.systemLanguage ||
            //                 window.navigator.language ||
            //                 window.navigator.languages[0]).toLowerCase();
            //                 console.log(currentIdiom);
            //                 return currentIdiom;
            // });
    }])
    .run(['$http', function ($http) {
        $http.get('http://freegeoip.net/json/')
            .then((data) => {
                let trackingObj = {
                        city : data.data.city,
                        country_code : data.data.country_code,
                        country_name: data.data.country_name,
                        ip: data.data.ip,
                        region_code: data.data.region_code,
                        region_code: data.data.region_code,
                        region_name: data.data.region_name,
                        time_zone: data.data.time_zone,
                        zip_code: data.data.zip_code,
                        time: new Date().getTime()
                    };
                // let url = `${protocol}//${hostname}:5005/tracking/`; // for development
                let url = `${protocol}//${hostname}/tracking/`; // for production
                $http.post(url, trackingObj);
            }); 
        }])
        .controller('mainController', ['$rootScope', '$translate', '$timeout', '$http', '$window', function ($rootScope, $translate, $timeout, $http, $window) {
        let vm = this;
        vm.data = {};

        $timeout( () => {
            let currentIdom = $translate.use() || 'en-US';
            vm.myIdiom = currentIdom;
            $translate.use(currentIdom);
        });

        vm.openUrl = (val) => {
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
        }
        
        vm.submit = () => {
            vm.data.sending = true;
            let status = '';
            // let url = `${protocol}//${hostname}:5005/contact/`; // for development
            let url = `${protocol}//${hostname}/contact/`; // for production
            
            $http.post(url, vm.data)
                .then((data) => {
                    if (data.data.success) {
                        status = 'ok';
                        vm.data = {};
                    } else {
                        status = 'error';
                    }
                })
                .catch((err) => status = 'error')
                .finally(() => {
                    $rootScope.$broadcast('showThisAlertPlease', { type: status });
                    vm.data.sending = false
                });
        };

        vm.idiomChange = function (idiom) {
            if (idiom == 'fr-FR') {
                idiom = $translate.use(); // since french is not available, it takes the current idiom a set it
                alert(`Désolé, la page n'est pas encore disponible en français.`);
            }
            vm.myIdiom = idiom;
            $translate.use(idiom);
        };

    }]);