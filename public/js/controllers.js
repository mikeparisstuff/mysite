function BlogController($scope, Article, $location, $routeParams, $http)
{
    //$scope.articles = Article.query();
    $http.get('/me').success(function(user) {
        $scope.isAuthenticated = user!="null";
    });

    // User.query(function(user){
    //     // if(user) {
    //     //     $scope.isAuthenticated = false;    
    //     // } else {
    //     //     $scope.isAuthenticated = true;
    //     // }
    //     $scope.isAuthenticated = user=="null";
    // });

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
*   Controller for the multiple super-mini projects.
*/
function OneADayController($scope)
{
}
