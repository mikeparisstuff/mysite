/* App Module */
angular.module('portfolio', ['articleServices', 'ngSanitize', 'authServices', 'musicServices', 'sketchServices']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '../views/articles/list.html', controller:BlogController}).
        when('/articles', {templateUrl: '../views/articles/list.html',
            controller:BlogController}).
        when('/articles/create', {templateUrl: '../views/articles/create.html',
            controller:BlogController}).
        when('/articles/:articleId', {templateUrl: '../views/articles/view.html', controller:BlogController}).
        when('/articles/:articleId/edit', {templateUrl: '../views/articles/edit.html', controller:BlogController}).
        when('/music', {templateUrl: '../views/music/list.html', controller:MusicController}).
        when('/music/create', {templateUrl: '../views/music/create.html', controller:MusicController}).
        // when('/music/:songId/', {templateUrl: '../views/music/view.html', controller:MusicController}).
        when('/music/:songId/edit', {templateUrl: '../views/music/edit.html', controller:MusicController}).
        when('/sketches', {templateUrl: '../views/sketches/list.html', controller:SketchController}).
        when('/sketches/create', {templateUrl: '../views/sketches/create.html', controller:SketchController}).
        when('/sketches/:sketchId', {templateUrl: '../views/sketches/view.html', controller:SketchController}).
        when('/sketches/:sketchId/edit', {templateUrl: '../views/sketches/edit.html', controller:SketchController}).
        when('/clock', {templateUrl: '../views/projects/color_clock.html'}).
        when('/analog', {templateUrl: '../views/projects/analogclock.html'}).
        when('/dragndrop', {templateUrl: '../views/projects/dragndrop.html'}).
        when('/login', {templateUrl: '../views/users/login.html'}).
        //when('/blog/create', {templateUrl: '../partials/create.html',
        //    controller:BlogController}).
        otherwise({redirectTo: ''});
}]);
