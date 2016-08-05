var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        $('#repo-results').append('<li>Repository: ' + response[i].name + ', no description :(</li>');
      } else {
        $('#repo-results').append('<li>Repository: ' + response[i].name + ', Description: ' + response[i].description + '</li>');
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
