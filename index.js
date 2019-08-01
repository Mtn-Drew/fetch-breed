'use strict';
let askForBreed;

function getDogImages() {
  fetch(`https://dog.ceo/api/breed/${askForBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
   if (responseJson.status ==="success") {
  $('.results').append(
    `<img src="${responseJson.message}" class="results-img">`)
  $('.results').show();
  $('.no-results').hide();
  } else {
    $('.results').hide();
    $('.no-results').show();
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //clear previous results
    $(document.getElementsByClassName('results')).empty();
    askForBreed = document.getElementById('requestedBreed').value;
    console.log('you asked for - ' + askForBreed);
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});