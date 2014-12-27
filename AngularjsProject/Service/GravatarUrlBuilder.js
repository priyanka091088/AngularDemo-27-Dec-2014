eventsApp.factory('gravatarUrlBuilder', function() {
    return {
        buildGravatarUrl: function(email) {
            var defaultgravatarUrl = 'http://www.gravatar.com/avatar/000?s=200';

            if (email != null) {
                return defaultgravatarUrl;
            } else {

                return '\\Images\\01-11-2014 15-06-07.png';
            }

        }

    }
});