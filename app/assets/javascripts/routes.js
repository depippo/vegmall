(function(){

angular
  .module('vegmall')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController as vm'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'views/list.html',
        controller: 'ListController as vm',
      })

  }])
}())