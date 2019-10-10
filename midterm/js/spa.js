var app = angular.module('yachtApp',['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      controller:'frontdoorController',
      templateUrl: 'app/views/frontdoor.html'
    })
  .when('/sportfish',
    {
      controller: 'SportfishController',
      templateUrl: 'app/views/sportfish.html'
    })
  .when('/dealer',
    {
      controller: 'DealerController',
      templateUrl: 'app/views/dealer.html'
    })
  .when('/experience',
    {
      controller: 'ExperienceController',
      templateUrl: 'app/views/experience.html'
    })
  .when('/request',
    {
      controller: 'RequestController',
      templateUrl: 'app/views/request.html'
    })
  .when('/story',
    {
      controller: 'StoryController',
      templateUrl: 'app/views/story.html'
    })
});
app.controller('dealerController', function($scope){
  $scope.customerID = 5;
});
app.controller('ExperienceController', function($scope){
  $scope.customerID = 5;
});
app.controller('FrontdoorController', function($scope){
  $scope.customerID = 5;
});
app.controller('RequestController', function($scope){
  $scope.customerID = 5;
});
app.controller('SportfishController', function($scope){
  $scope.customerID = 5;
});
app.controller('StoryController', function($scope){
  $scope.customerID = 5;
});
app.controller('FrontdoorController', function($scope) {
  $scope.customers = [
      {"id": 1, "name":"Ted", "total": 5.996},
      {"id": 2, "name":"Michelle", "total": 10.994},
      {"id": 3, "name":"Zed", "total": 10.99},
      {"id": 4, "name":"Tina", "total": 15.994}
    ];
  });
