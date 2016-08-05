var apiKey = require('./../.env').apiKey;

exports.getRepos = function(user){
  $.get('https://api.github.com/users/' + user + '/repos?access_token=' + apiKey).then(function(response){
    $('#repo-results').append('<tr class="table-header"><td>Username</td><td>Repository</td><td>Description</td></tr>');
    for (var i = 0; i < response.length; i++) {
      if (response[i].description === "" || !response[i].description) {
        $('#repo-results').append('<tr><td>' + response[i].owner.login + '</td><td><a href="' + response[i].html_url + '">' + response[i].name + '</a></td><td>no description :(</td></tr>');
      } else {
        $('#repo-results').append('<tr><td>' + response[i].owner.login + '</td><td><a href="' + response[i].html_url + '">' + response[i].name + '</a></td><td>' + response[i].description + '</td></tr>');
      }
    }
  }).fail(function(error){
    $('#repo-results').append('<p>' + error.responseJSON.message + '</p>');
  });
};

exports.getUser = function(user){
  $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('#user-results').append('<p>Username: ' + response.login + '</p><p>Name: ' + response.name + '</p><p>Location: ' + response.location + '</p>');
  }).fail(function(error){
    $('#user-results').append('<p>' + error.responseJSON.message + '</p>');
  });
};
