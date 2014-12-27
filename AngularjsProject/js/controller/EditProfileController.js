eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};

    $scope.getGravatarUrl = gravatarUrlBuilder.buildGravatarUrl;

});

eventsApp.controller('CheckHttpService', function CheckHttpService($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').success(function (data) {
        $scope.greeting = data;
    });
});