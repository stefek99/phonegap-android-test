var getLocation = function() {
  var deferred = Q.defer();

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    var onSuccess = function(position) {    
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      deferred.resolve({lat : lat, lng : lng});
    };
    
    var onError = function() {
      var lat = 100; 
      var lng = 100;
      deferred.resolve({lat : lat, lng : lng});
    };
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
      onError();
    }

  return deferred.promise;
};


document.addEventListener("deviceready", function() {

  getLocation().then(function(result) {
    alert("device ready: " + result.lat + " " + result.lng);
  });

});

$(function() {

  $("#getLocation").on("click", function() {
    getLocation().then(function(result) {
      alert("click: " + result.lat + " " + result.lng);
    });
  });

});