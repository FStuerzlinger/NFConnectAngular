/**
 * Created by FlorianStuerzlinger on 10/05/16.
 */

app.factory('DataService', function ($http){
    return{
        baseURL: 'http://vm01.htl-leonding.ac.at/onlineplayerservice/api/',

        getError : function (data) {
            var result = '';

            if(data != undefined){
                if(data.ExceptionMessage != undefined){
                    result = data.ExceptionMessage;
                } else if (data.Message != undefined){
                    result = data.Message;
                }else {
                    result = data;
                }
            }
            return result;
        },

        getMediaTypeData: function(){
            var callURL = this.baseURL + "mediaType";
            return $http.get(callURL);
        },
        
        getMediaUnitData: function(name){
            var callURL = this.baseURL + "MediaUnit?name="+name;
            return $http.get(callURL);
        },

        addMediaUnit: function (data) {
            var callURL = this.baseURL + "mediaunit";
            return $http({
                method: 'POST',
                url: callURL,
                data: data,
                headers: {'Content-Type' : 'application/json'}
            });
        }
    }
})