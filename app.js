(function(){
    angular.module("eCommerce",["products","productDetails","cartDetails","payDetails","ui.router"]);
    angular.module("eCommerce")
           .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
               $urlRouterProvider.otherwise("/products");
               var productsObj = {
                   templateUrl : "products/products.html",
                   controller : "productsCtrl",
                   url : "/products"
               };
               
               var productDetailsObj = {
                   templateUrl : "productDetails/productDetails.html",
                   controller : "productDetailsCtrl",
                   url : "/products/:id"
               };
               
               var cartDetailsObj = {
                   templateUrl : "cartDetails/cartDetails.html",
                   controller : "cartDetailsCtrl",
                   url : "/cartDetails"
               };
               
               var payDetailsObj = {
                   templateUrl : "payDetails/payDetails.html",
                   controller : "payDetailsCtrl",
                   url : "/payDetails"
               };
               
               $stateProvider.state("products",productsObj);
               
               $stateProvider.state("productDetails",productDetailsObj);
               
               $stateProvider.state("cartDetails",cartDetailsObj);
               
               $stateProvider.state("payDetails",payDetailsObj);
               
           }]);
    
})();