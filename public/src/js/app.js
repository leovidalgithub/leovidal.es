angular
.module('myAppCV', ['pascalprecht.translate', 'ngSanitize', 'miscellaneous'])
    .config(['$translateProvider', ($translateProvider) => {
    
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
    .run(['$http', '$timeout', ($http, $timeout) => {
        sendTracking('initial'); // sending initial user tracking
        angular.element(document).ready(() => {
            mainInit();
        });
    }])
    .controller('mainController', ['$rootScope', '$translate', '$timeout', '$http', '$window', 
        function ($rootScope, $translate, $timeout, $http, $window) {

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
            
            $http.post(buildURL('contact'), vm.data)
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

        vm.idiomChange = (idiom) => {
            if (idiom == 'fr-FR') {
                idiom = $translate.use(); // since french is not available, it takes the current idiom a set it
                alert(`Désolé, la page n'est pas encore disponible en français.`);
            }
            vm.myIdiom = idiom;
            $translate.use(idiom);
        };

    }]);