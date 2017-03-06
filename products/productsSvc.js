(function(){
    function productsSvc($http){
        this.getProductsFromApi = function(){
            return $http.get("vehicles.json");
        };
    }
    angular.module("products")
           .service("productsSvc",["$http",productsSvc]);
})();