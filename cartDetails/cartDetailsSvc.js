(function(){
    function cartDetailsSvc($http){
        this.getCountriesFromApi = function(){
            return $http.get("Api/countries.json");
        };
        
        this.getStatesFromApi = function(){
            return $http.get("Api/states.json");
        };
    }
    angular.module("cartDetails")
           .service("cartDetailsSvc",["$http",cartDetailsSvc]);
})();