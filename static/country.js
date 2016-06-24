/* global $ */
/* eslint-disable no-use-before-define */
$(document).ready(initialize);

function initialize() {
  $('#createCountry').click(createCountry);
}

function createCountry() {
  const name = $('#countryName').val();
  const photoes = $('#countryPhoto').val();

  $.ajax({
    url: '/country',
    method: 'post',
    dataType: 'json',
    data: { name, photoes },
    success: (rsp) => {
    //  updateBoard(rsp);
    console.log('rsp in country.js:  *******', rsp);
    window.location = '/country';
    },
  });
}
