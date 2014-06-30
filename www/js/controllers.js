angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state) {
  
  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    $state.go('app.profile');
  };
  
})

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('FaqCtrl', function($scope, FaqService) {
  $scope.faqs = FaqService.all();
})

.controller('FaqDetailCtrl', function($scope, $stateParams, FaqService) {
  $scope.faq = FaqService.get($stateParams.faqId);
})

.controller('MainCtrl', function($scope, $location) {
  $scope.tip = 20;
  $scope.people = 1;
  $scope.amount = 100;

  // tipper
  $scope.updateTip = function() {
    $scope.tipAmount = $scope.amount * $scope.tip/100;
    $scope.total = $scope.amount + $scope.tipAmount;
    $scope.costPerPerson = $scope.total / $scope.people;
  };

  // bill splitter
  $scope.splitBill = false;

  $scope.toggleSplitBill = function() {
    $scope.splitBill = $scope.splitBill === false ? true : false;
  };

});



