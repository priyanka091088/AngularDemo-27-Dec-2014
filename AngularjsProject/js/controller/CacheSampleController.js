eventsApp.controller('CacheSampleController', ['$scope', 'mycache', function ($scope, mycache) {
        $scope.addToCache = function(key, value) {
            mycache.put(key, value);
            $scope.Msg = 'Test';
        };

        $scope.readFromCache = function (key) {
            $scope.readMsg = 'ReadCheck';
            return mycache.get(key);
        };

        $scope.getCacheStats = function () {
            $scope.getCacheMsg = 'Get Cache check';
            return mycache.info();
        }
    }]
);