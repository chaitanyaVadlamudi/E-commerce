(function(){
    function productsSvc($http){
        var auth = window.btoa("ck_29b4d149bb885a7c81597b217a74a7002f6d8001:cs_89414dbabbf145fefd2e112cf4f51c7b7b390699"), 
    headers = {"Authorization": "Basic " + auth};
        this.getProductsFromApi = function(){
            return $http.get("https://www.colourssoftware.com/wordpress/wp-json/wc/v1/products", {headers: headers});
        };
    }
    
    function priceFilterSvc($http){
        this.getPriceFilterRangeFromApi = function(){
            return $http.get("Api/priceRange.json");
        };
    }
    angular.module("products")
           .service("productsSvc",["$http",productsSvc])
           .service("priceFilterSvc",["$http",priceFilterSvc])
})();