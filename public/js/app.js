/* App Module */
angular.module('portfolio', ['articleServices', 'ngSanitize', 'authServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '../views/articles/list.html', controller:BlogController}).
        when('/articles', {templateUrl: '../views/articles/list.html',
            controller:BlogController}).
        when('/articles/create', {templateUrl: '../views/articles/create.html',
            controller:BlogController}).
        when('/articles/:articleId', {templateUrl: '../views/articles/view.html', controller:BlogController}).
        when('/articles/:articleId/edit', {templateUrl: '../views/articles/edit.html', controller:BlogController}).
        when('/clock', {templateUrl: '../views/projects/color_clock.html',
            controller:OneADayController}).
        when('/analog', {templateUrl: '../views/projects/analogclock.html',
            controller:OneADayController}).
        when('/dragndrop', {templateUrl: '../views/projects/dragndrop.html',
            controller:OneADayController}).
        when('/login', {templateUrl: '../views/users/login.html'}).
        //when('/blog/create', {templateUrl: '../partials/create.html',
        //    controller:BlogController}).
        otherwise({redirectTo: ''});
}]);
