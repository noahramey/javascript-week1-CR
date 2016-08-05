var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').getRepos;
var getUser = require('./../js/github.js').getUser;

$(document).ready(function() {
  $('#user-lookup').submit(function(event) {
    event.preventDefault();
    var user = $('#name').val();
    $('#name').val("");
    $('#user-results').empty();
    $('#repo-results').empty();
    getUser(user);
    getRepos(user);
    $('#users').show();
    $('#repos').show();
  });
});
