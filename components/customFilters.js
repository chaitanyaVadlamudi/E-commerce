(function(){
    function priceRangeFilter(){
        return function(data,filteringCriteria){
            var newArray=[];
            if(filteringCriteria && filteringCriteria.min && filteringCriteria.max){
                _.each(data,function(product){
                    if(product.price >= filteringCriteria.min && product.price < filteringCriteria.max){
                        newArray.push(product);
                    }
                });
                return newArray;
            }
            else{
                return data;
            }
        };
    }
    angular.module("components")
           .filter("priceRangeFilter",[priceRangeFilter])
})();