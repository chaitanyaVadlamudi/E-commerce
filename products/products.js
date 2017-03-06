(function(){
    function productsCtrl($scope,productsSvc){
        productsSvc.getProductsFromApi()
            .then(function(response){
            console.log(response)
            $scope.products = response.data.products;
        })
            .catch(function(response){
            console.log(response)
        });
        
    }
    angular.module("products",[]);
    angular.module("products")
           .controller("productsCtrl",["$scope","productsSvc",productsCtrl])
})();