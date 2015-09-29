jobBoard.controller('FreelancersCtrl', function FreelancersCtrl($scope) {

    $scope.freelancers = [{
        name: "Samantha",
        skill: "DOS"
    },
    {
        name: "Charles",
        skill: "Smalltalk 80"
    }];
    $scope.addFreelancer = function() {
        $scope.freelancers.push({
            name: $scope.freelancerName,
            skill: $scope.freelancerSkill,
            jobs: []
        });
        $scope.freelancerName = null;
        $scope.freelancerSkill = null;
    };
});
