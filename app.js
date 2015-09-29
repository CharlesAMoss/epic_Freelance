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

    $stateProvider.state('freelancers', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/freelancers.html',
                controller: 'FreelancersCtrl'
            },
            'footer': {
                templateUrl: 'partials/footer.html',
            },
        }
    });
    $stateProvider.state('jobs', {
        url: '',
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: 'partials/jobs.html',
                controller: 'JobsCtrl'
            },
            'footer': {
                templateUrl: 'partials/footer.html',
            },
        }
    });
});
