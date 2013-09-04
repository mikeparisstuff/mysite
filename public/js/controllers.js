function BlogController($scope, Article, $location, $routeParams, $http)
{
    //$scope.articles = Article.query();
    $http.get('/me').success(function(user) {
        $scope.isAuthenticated = user!="null";
    });

    $scope.create = function() {
        var article = new Article({title: this.title, content: this.content});
        article.$save(function(response) {
            $location.path("articles/" + response._id);
        });
        this.title = "";
        this.content = "";
    };

    $scope.remove = function (article) {
        for (var i in $scope.articles) {
            if ($scope.articles[i] == article) {
                $scope.articles.splice(i, 1)
            }
        }
        article.$remove(function(response) {
            $location.path("articles/");
        });
    };

    $scope.update = function () {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function () {
            $location.path('articles/' + article._id);
        });
    };

    $scope.find = function(query) {
        Article.query(function(articles) {
            $scope.articles = articles;
        });
    }

    $scope.findOne = function () {
        Article.get({ articleId: $routeParams.articleId }, function (article) {
            $scope.article = article;
        });
    };
}

/**
*  Music View Controller
*/
function MusicController($scope, Song, $location, $routeParams, $http) 
{
    $http.get('/me').success(function(user) {
        $scope.isAuthenticated = user!="null";
    });

    $scope.create = function() {
        /**
        *   New songs have a title (required), type(required), url(required), description(optional)
        */
        var song = new Song({title: this.title, url: this.url, description: this.description});
        song.$save(function(response) {
            $location.path('music/');
        });
    };

    $scope.remove = function(song) {
        for(var i in $scope.songs) {
            if($scope.songs[i] == song) {
                $scope.songs.splice(i, 1);
            }
        }
        song.$remove(function(response) {
            $location.path('music/');
        });
    }

    $scope.find = function(query) {
        Song.query(function(songs) {
            $scope.songs = songs;
        });
    };

    $scope.findOne = function() {
        Song.get({songId: $routeParams.songId }, function(song) {
            $scope.song = song;
        });
    };

    $scope.update = function() {
        var song = $scope.song;
        if(!song.updated) {
            song.updated = [];
        }
        song.updated.push(new Date().getTime());

        song.$update(function() {
            $location.path('music/');
        });
    };
}

/**
*   Sketch View Controller
*/
function SketchController($scope, Sketch, $location, $routeParams, $http)
{
    $http.get('/me').success(function(user) {
        $scope.isAuthenticated = user!='null';
    })

    $scope.create = function() {
        /**
        *   New Sketches have a title (required), url()
        */
        var sketch = new Sketch({
            title: this.title,
            url: this.url
        });
        sketch.$save(function(response) {
            $location.path('sketches/');
        });
    };

    $scope.remove = function(sketch) {
        for(var i in $scope.sketches) {
            if($scope.sketches[i] == sketch) {
                $scope.sketches.splice(i,1);
            }
        }
        sketch.$remove(function(response) {
            $location.path('sketches/');
        });
    };

    $scope.find = function(query) {
        Sketch.query(function(sketches) {
            $scope.sketches = sketches;
        });
    };

    $scope.findOne = function() {
        Sketch.get({sketchId: $routeParams.sketchId}, function(sketch) {
            $scope.sketch = sketch;
        });
    };

    $scope.update = function() {
        var sketch = $scope.sketch;
        if(!sketch.updated) {
            sketch.updated = [];
        }
        sketch.updated.push(new Date().getTime());

        sketch.$update(function() {
            $location.path('sketches/');
        });
    };

}