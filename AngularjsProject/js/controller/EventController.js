eventsApp.controller('EventController', function EventController($scope, eventData,$anchorScroll) {
    $scope.event = eventData.event;

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };

    $scope.downVoteSession=function(session) {
        session.upVoteCount--;
    }

    $scope.sortorder = "-upVoteCount";

    $scope.scrollToSession= function() {
        $anchorScroll();
    }
});