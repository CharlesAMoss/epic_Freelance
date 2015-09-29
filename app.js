var jobBoard = angular.module('jobBoard', ['ui.router']);

jobBoard.config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/body.html',

            },
            'footer': {
                templateUrl: 'partials/footer.html',
            },
        }
    });

    $stateProvider.state('freelancer', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/freelancer.html',
                controller: 'FreelancersCtrl'
            },
            'footer': {
                templateUrl: 'partials/footer.html',
            },
        }
    });
});
