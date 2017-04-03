app.controller('thumbnailsCtrl', function($scope, $http){
	//$http.get("/api/thumbnails").then(function (response) {
		//console.log(response.data.thumbnails);
		//$scope.myLink = response.data.thumbnails;
	//})
	$http.post("/api/thumbnails").then(function (response) {
		//console.log(data);
		$scope.myLink = response.data.thumbnails;
	})
});