(function(){
    function productDetailsCtrl($scope,$state,$stateParams){
         var proinfo = JSON.parse($stateParams.details);
        $scope.model = proinfo.model;
        $scope.make = proinfo.make;
        $scope.price = proinfo.price;
        $scope.image = proinfo.picture;
        console.log("id " + proinfo);
        $scope.productsOrder = 1;

        $scope.cartArr = [];
        $scope.addToCart = function (cost, model) {
            console.log($scope.productsOrder);
            console.log("costmodel " + cost, model);
            for(var i=0; i<$scope.productsOrder; i++){
            $scope.cartArr.push({
                cost: cost,
                name: model
            });
                }
            window.alert("You added " +$scope.productsOrder +" " + $scope.model + " cars to your Cart");
        }
        $scope.buy = function () {
            console.log("arr "+JSON.stringify($scope.cartArr));
            localStorage.setItem("cart",JSON.stringify($scope.cartArr));
            $state.go("cartDetails", {
                cart: JSON.stringify($scope.cartArr)
            });

        }
        $scope.backToProducts = function () {
            $state.go("products");
        }

       
    }
    angular.module("productDetails",[]);
    angular.module("productDetails")
        .controller("productDetailsCtrl",["$scope","$state","$stateParams",productDetailsCtrl])
})();



 
        