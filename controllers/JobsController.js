jobBoard.controller('JobsCtrl', function JobsCtrl($scope, JobsFactory) {





    $scope.jobs = [{
        title: 'Fix my site',
        description: 'I\'m having trouble adding content to my site. Please help!',
        skills: 'WordPress',
        price: 100
    },
    {
        title: 'build my dream app',
        description: 'Facebook + tinder + candycrush for phones',
        skills: 'Javascript',
        price: 1000
    }];
    $scope.addJob = function() {
        $scope.jobs.push({
            title: $scope.jobTitle,
            description: $scope.jobDescription,
            skills: $scope.jobSkills,
            price: $scope.jobPrice
        });
        $scope.jobTitle = null;
        $scope.jobDescription = null;
        $scope.jobSkills = null;
        $scope.jobPrice = null;
    };
});
