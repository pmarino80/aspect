angular.module('starter.services', [])

.factory('FaqService', function() {
  // Might use a resource here that returns a JSON array
 
  // Some fake testing data
  var faqs = [
		{ id: 0, title: 'How do teachers redeem online the coupons and promotional rewards they have earned?', detail: 'Sign in to your Scholastic Reading Club ordering site, if you have not already done so. From the top of your homepage, click the Redeem Coupons button, (highlighted in the graphic below). You will be brought to the Coupons and Rewards page.\n\nIf you have a valid coupon, enter the code into the field provided (Enter Coupon Code) and click the Redeem button. If the coupon code is recognized you will get the message You have successfully applied this promotion and the coupon name/number will appear below it. All of your rewards earned, and coupons whose codes you have entered to redeem, will be listed.' }, 
		{ id: 1, title: 'How do I make a payment?', detail: 'To Make a Payment Online:\nYou must be registered and signed in to with Scholastic.com to make a payment online. You may pay by credit/debit card. (Scholastic accepts Visa, MasterCard, American Express, and Discover cards.)\n\nIf you are in the process of placing an online order with Scholastic Reading Club, once you click to Proceed to Checkout, "Shipping & Payment" is the second step of the 3-step checkout process and where you will input your method of payment.\n\nIf you want to make payment for an order that you have already submitted:\n\nSign in to either Scholastic.com or Scholastic Reading Club.\nClick "Your Account" on the upper right hand corner of the page. A window with your account information will open.\nThen select the "Billing & Payments" tab and click the "Make a Payment" button to pay using your credit or debit card.\n\nTo Make a Payment by Phone:\nYou may pay by credit/debit card. (Scholastic accepts Visa, MasterCard, American Express, and Discover cards.) Call Customer Service at 1-800-Scholastic (1-800-724-6527). We will be happy to help you with your payment.' },
		{ id: 2, title: 'What do I do if I get an error when trying to use a coupon?', detail: '2 A dear. A female dear.' },
		{ id: 3, title: 'How do I request Reading Club flyers?', detail: '3 A dear. A female dear.' }, 
		{ id: 4, title: 'Can I Have More Than One Registered Account Online?', detail: '4 A dear. A female dear.' }, 
		{ id: 5, title: 'What are the options for placing Reading Club orders?', detail: '5 A dear. A female dear.' },
		{ id: 6, title: 'How do teachers place classroom orders online?', detail: '6 A dear. A female dear.' }, 
		{ id: 7, title: 'How do I change or update my school information?', detail: '7 A dear. A female dear.' }, 
		{ id: 8, title: 'How can I find my Scholastic customer number?', detail: '8 A dear. A female dear.' }
  ];

  return {
    all: function() {
      return faqs;
    },
    get: function(faqId) {
      
      return faqs[faqId];
    }
  }
});
