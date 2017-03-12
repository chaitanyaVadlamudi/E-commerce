(function(){
    angular.module("eCommerce",["products","productDetails","cartDetails","payDetails","login","components","ui.router","base64"]);
    angular.module("eCommerce")
           .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider,$base64,$httpProvider){
//               var auth = $base64.encode('ck_29b4d149bb885a7c81597b217a74a7002f6d8001:cs_89414dbabbf145fefd2e112cf4f51c7b7b390699');
//               $httpProvider.defaults.headers.common["Authorization"] = 'Basic ' + auth;
      
               $urlRouterProvider.otherwise("/products");
               
               var productsObj = {
                   templateUrl : "products/products.html",
                   controller : "productsCtrl",
                   url : "/products"
               };
               
               var productDetailsObj = {
                   templateUrl : "productDetails/productDetails.html",
                   controller : "productDetailsCtrl",
                   url : "/products/:details"
               };
               
               var cartDetailsObj = {
                   templateUrl : "cartDetails/cartDetails.html",
                   controller : "cartDetailsCtrl",
                   url : "/cartDetails/:cart"
               };
               
               var payDetailsObj = {
                   templateUrl : "payDetails/payDetails.html",
                   controller : "payDetailsCtrl",
                   url : "/payDetails/:payment"
               };
               
               var loginObj = {
                   templateUrl : "login/login.html",
                   controller : "loginCtrl",
                   url : "/login"
               };
               var registerObj = {
                   templateUrl : "register/register.html",
                   controller : "registerctrl",
                   url : "/register"
               };
               
               $stateProvider.state("products",productsObj);
               
               $stateProvider.state("productDetails",productDetailsObj);
               
               $stateProvider.state("cartDetails",cartDetailsObj);
               
               $stateProvider.state("payDetails",payDetailsObj);
               
               $stateProvider.state("login",loginObj);
               
               $stateProvider.state("register",registerObj);
               
           }]);
    
})();