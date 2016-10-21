function jsonFileService($http, $q) {
 
    this.getTasks = function() {
        var defer = $q.defer();
 
        $http
            .get("api/tasks.json") // making http get request to load the json file
            .then(function(response) {
                defer.resolve(response.data);
            });
 
        return defer.promise;
    };
 
    this.getTeilnehmer = function (id) {
        var defer = $q.defer();
 
        $http
            .get("api/teilnehmer.json")
            .then(function (response) {
                defer.resolve(response.data);
            });
 
        return defer.promise;
    };
}
