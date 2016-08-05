var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    for (var i = 0; i < response.length; i++) {
      if (response[i].description === "") {
        $('#repo-results').append('<tr><td>' + response[i].owner.login + '</td><td>' + response[i].name + '</td><td>no description :(</td></tr>');
      } else {
        $('#repo-results').append('<tr><td>' + response[i].owner.login + '</td><td>' + response[i].name + '</td><td>' + response[i].description + '</td></tr>');
      }
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
