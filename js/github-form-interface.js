var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#user-lookup').submit(function(event) {
    event.preventDefault();
    var user = $('#name').val();
    $('#name').val("");
    getRepos(user);
  });
});
