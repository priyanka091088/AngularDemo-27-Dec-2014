eventsApp.factory('eventData', function() {
    return {
        event: {
            name: 'Angular boot Camp',
            date: '27/12/2014',
            time: '2:30 pm',
            location:
            {
                address: 'Manjalpur',
                city: 'Baroda'
            },
            imageUrl: '/Images/01-11-2014 15-06-07.png',
            sessions: [
                {
                    name: 'Test1',
                    creatorName: 'Abc',
                    upVoteCount: 0
                },
                {
                    name: 'Test2',
                    creatorName: 'Def',
                    upVoteCount: 0
                },
                {
                    name: 'Test3',
                    creatorName: 'Xyz',
                    upVoteCount: 0
                },
                {
                    name: 'Test4',
                    creatorName: 'Xyz',
                    upVoteCount: 0
                },
                {
                    name: 'Test5',
                    creatorName: 'Xyz',
                    upVoteCount: 0
                }
            ]
        }
    }
});

//eventsApp.factory('eventData', function ($http, $log) {
//    return {
//        getEvent: function (successcb) {
//            $http({ method: 'GET', url: 'data/event/1' }).success(function (data, status, headers) {
//                successcb(data);
//            }).error(function (data, status, headers) {
//                $log.warn(data, status, headers);
//            });
//        }
//    }
//});