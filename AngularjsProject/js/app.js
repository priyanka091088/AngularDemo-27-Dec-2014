var eventsApp = angular.module('eventsApp', []).factory('mycache',function($cacheFactory) {
    return $cacheFactory('mycache', { capacity: 3 });
});
 