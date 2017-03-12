(function(){
    function productsCtrl($scope,productsSvc,$stateParams,$state,priceFilterSvc){
        productsSvc.getProductsFromApi()
            .then(function(response){
            console.log(response)
            $scope.products = response.data.products;
        })
            .catch(function(response){
            console.log(response)
        });
        
        priceFilterSvc.getPriceFilterRangeFromApi()
            .then(function(response){
            $scope.priceFilterRange = response.data.priceRange;
        })
            .catch(function(response){
            console.log(response)
        })
        
         $scope.productDetails = function (id) {
           console.log("id" + JSON.stringify(id));
           $state.go("productDetails", {
               details: JSON.stringify(id)
           });
       }
    }

    
    angular.module("products",[]);
    angular.module("products")
           .controller("productsCtrl",["$scope","productsSvc","$stateParams","$state","priceFilterSvc",productsCtrl])
})();