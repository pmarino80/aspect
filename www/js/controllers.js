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

.controller('MagFaqCtrl', function($scope, MagFaqService) {
  $scope.faqs = MagFaqService.all();
})

.controller('MagFaqDetailCtrl', function($scope, $stateParams, MagFaqService) {
  $scope.faq = MagFaqService.get($stateParams.faqId);
})

.controller('SCCGFaqCtrl', function($scope, SCCGFaqService) {
  $scope.faqs = SCCGFaqService.all();
})

.controller('SCCGFaqDetailCtrl', function($scope, $stateParams, SCCGFaqService) {
  $scope.faq = SCCGFaqService.get($stateParams.faqId);
})

.controller('CartForm', function($scope) {
	$scope.invoice = {
	        items: [{
	            ordtotal: 0.00,
	            description: 'Book Order',
				stdcost: 1.09,
				onecost: 1.14,
	            cost: 1.14}]
	    };

	    $scope.total = function() {
	        var total = 0;
	        angular.forEach($scope.invoice.items, function(item) {
	            total += item.ordtotal * item.cost;
	        })
	        return total;
	    }
});



