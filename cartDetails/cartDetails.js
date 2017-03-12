(function(){
    function cartDetailsCtrl($scope,$state,$stateParams,cartDetailsSvc){
        var cartinfo = JSON.parse($stateParams.cart);
        console.log("info" + JSON.stringify(cartinfo));
        $scope.cart = cartinfo;
        cartDetailsSvc.getCountriesFromApi()
            .then(function(response){
            $scope.countries = response.data.countries;
        })
            .catch(function(response){
            console.log(response);
        });
        
        cartDetailsSvc.getStatesFromApi()
            .then(function(response){
            $scope.states = response.data.states;
        })
            .catch(function(response){
            console.log(response);
        });
        
        $scope.removeFromCart = function(id){
              $scope.cart.splice(id, 1);
        }
        
        $scope.proceedPayment = function(){
            $state.go("payDetails",{
                payment: JSON.stringify(cartinfo)
            });
        }
    }
    angular.module("cartDetails",[]);
    angular.module("cartDetails")
           .controller("cartDetailsCtrl",["$scope","$state","$stateParams","cartDetailsSvc",cartDetailsCtrl])
})();