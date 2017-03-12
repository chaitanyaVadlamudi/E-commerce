(function(){
    function carousalDirective(){
        return{
            templateUrl:"products/carousals.html",
            restrict:"A"
        }
    }
    
    function shippingDetailsDirective(){
        return{
            templateUrl:"cartDetails/shippingDetails.html",
            restrict:"A",
            controller:"cartDetailsCtrl"
        }
    }
    
    function productsSearchDirective(){
        return{
            templateUrl:"products/productsSearch.html",
            restrict:"A",
            controller:"productsCtrl"
        }
    }
    
    angular.module("components",[]);
    angular.module("components")
           .directive("carousalDirective",[carousalDirective])
           .directive("shippingDetailsDirective",[shippingDetailsDirective])
           .directive("productsSearchDirective",[productsSearchDirective])
})();