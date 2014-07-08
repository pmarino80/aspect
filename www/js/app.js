// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('signin', {
    url: "/sign-in",
    templateUrl: "templates/sign-in.html",
    controller: 'SignInCtrl'
  })
  .state('forgotpassword', {
    url: "/forgot-password",
    templateUrl: "templates/forgot-password.html"
  })

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile.html"
        }
      }
    })

    .state('app.lounge', {
      url: "/lounge",
      views: {
        'menuContent' :{
          templateUrl: "templates/lounge.html"
        }
      }
    })

    .state('app.bookfairs', {
      url: "/bookfairs",
      views: {
        'menuContent' :{
          templateUrl: "templates/bookfairs.html"
        }
      }
    })

    .state('app.bookfairs-contact', {
      url: "/bookfairs/bookfairs-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/bookfairs-contact.html"
        }
      }
    })

    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
    })

    .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html"
        }
      }
    })

    .state('app.education-tech', {
      url: "/education-tech",
      views: {
        'menuContent' :{
          templateUrl: "templates/education-tech.html"
        }
      }
    })

    .state('app.tech-products', {
      url: "/education-tech/tech-products",
      views: {
        'menuContent' :{
          templateUrl: "templates/tech-products.html"
        }
      }
    })

    .state('app.tech-contact', {
      url: "/education-tech/tech-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/tech-contact.html"
        }
      }
    })

    .state('app.reviews', {
      url: "/lounge/reviews",
      views: {
        'menuContent' :{
          templateUrl: "templates/reviews.html"
        }
      }
    })

    .state('app.review-details-1', {
      url: "/lounge/reviews/review-details-1",
      views: {
        'menuContent' :{
          templateUrl: "templates/review-details-1.html"
        }
      }
    })

    .state('app.review-details-2', {
      url: "/lounge/reviews/review-details-2",
      views: {
        'menuContent' :{
          templateUrl: "templates/review-details-2.html"
        }
      }
    })

    .state('app.reading-club', {
      url: "/reading-club",
      views: {
        'menuContent' :{
          templateUrl: "templates/reading-club.html"
        }
      }
    })

    .state('app.pending', {
      url: "/reading-club/pending",
      views: {
        'menuContent' :{
          templateUrl: "templates/pending.html"
        }
      }
    })

    .state('app.seesaw', {
      url: "/reading-club/seesaw",
      views: {
        'menuContent' :{
          templateUrl: "templates/seesaw.html"
        }
      }
    })

    .state('app.lucky', {
      url: "/reading-club/lucky",
      views: {
        'menuContent' :{
          templateUrl: "templates/lucky.html"
        }
      }
    })

    .state('app.arrow', {
      url: "/reading-club/arrow",
      views: {
        'menuContent' :{
          templateUrl: "templates/arrow.html"
        }
      }
    })

    .state('app.pending-details', {
      url: "/reading-club/pending/pending-details",
      views: {
        'menuContent' :{
          templateUrl: "templates/pending-details.html"
        }
      }
    })

    .state('app.pending-details-2', {
      url: "/reading-club/pending/pending-details-2",
      views: {
        'menuContent' :{
          templateUrl: "templates/pending-details-2.html"
        }
      }
    })

    .state('app.manage-orders', {
      url: "/reading-club/manage-orders",
      views: {
        'menuContent' :{
          templateUrl: "templates/manage-orders.html"
        }
      }
    })

    .state('app.order-details', {
      url: "/reading-club/manage-orders/order-details",
      views: {
        'menuContent' :{
          templateUrl: "templates/order-details.html"
        }
      }
    })

    .state('app.review-order', {
      url: "/reading-club/review-order",
      views: {
        'menuContent' :{
          templateUrl: "templates/review-order.html"
        }
      }
    })

    .state('app.order-history', {
      url: "/reading-club/manage-orders/order-history",
      views: {
        'menuContent' :{
          templateUrl: "templates/order-history.html"
        }
      }
    })

    .state('app.backorders', {
      url: "/reading-club/manage-orders/backorders",
      views: {
        'menuContent' :{
          templateUrl: "templates/backorders.html"
        }
      }
    })

    .state('app.offers', {
      url: "/reading-club/offers",
      views: {
        'menuContent' :{
          templateUrl: "templates/offers.html"
        }
      }
    })

    .state('app.wishlist', {
      url: "/reading-club/wishlist",
      views: {
        'menuContent' :{
          templateUrl: "templates/wishlist.html"
        }
      }
    })

    .state('app.club-contact', {
      url: "/reading-club/club-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/club-contact.html"
        }
      }
    })

    .state('app.club-faqs', {
      url: "/reading-club/club-faqs",
      views: {
        'menuContent' :{
          templateUrl: "templates/club-faqs.html",
		  controller: 'FaqCtrl'
        }
      }
    })

    .state('app.club-faq', {
      url: "/reading-club/club-faqs/:faqId",
      views: {
        'menuContent' :{
          templateUrl: "templates/club-faq.html",
          controller: 'FaqDetailCtrl'
        }
      }
    })

    .state('app.profile-details', {
      url: "/profile/profile-details",
      views: {
        'menuContent' :{
          templateUrl: "templates/profile-details.html"
        }
      }
    })

    .state('app.magazines', {
      url: "/magazines",
      views: {
        'menuContent' :{
          templateUrl: "templates/magazines.html"
        }
      }
    })

    .state('app.magazine-products', {
      url: "/magazines/magazine-products",
      views: {
        'menuContent' :{
          templateUrl: "templates/magazine-products.html"
        }
      }
    })


    .state('app.magazine-contact', {
      url: "/magazines/magazine-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/magazine-contact.html"
        }
      }
    })

    .state('app.subscriptions', {
      url: "/magazines/subscriptions",
      views: {
        'menuContent' :{
          templateUrl: "templates/subscriptions.html"
        }
      }
    })

    .state('app.sccg', {
      url: "/sccg",
      views: {
        'menuContent' :{
          templateUrl: "templates/sccg.html"
        }
      }
    })

    .state('app.order-forms', {
      url: "/sccg/order-forms",
      views: {
        'menuContent' :{
          templateUrl: "templates/order-forms.html"
        }
      }
    })

    .state('app.shipping', {
      url: "/sccg/shipping",
      views: {
        'menuContent' :{
          templateUrl: "templates/shipping.html",
		  controller: 'CartForm'
        }
      }
    })

    .state('app.programs', {
      url: "/sccg/programs",
      views: {
        'menuContent' :{
          templateUrl: "templates/programs.html"
        }
      }
    })

    .state('app.resources', {
      url: "/sccg/resources",
      views: {
        'menuContent' :{
          templateUrl: "templates/resources.html"
        }
      }
    })

    .state('app.products', {
      url: "/sccg/products",
      views: {
        'menuContent' :{
          templateUrl: "templates/products.html"
        }
      }
    })

    .state('app.sccg-contact', {
      url: "/sccg/sccg-contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/sccg-contact.html"
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
	 $urlRouterProvider.otherwise("/sign-in");
  // $urlRouterProvider.otherwise('/app/playlists');
});


