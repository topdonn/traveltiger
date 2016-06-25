/* global $ */
/* eslint-disable no-use-before-define */
$(document).ready(initialize);

function initialize() {
  $('#createCity').click(createCity);
}

function createCity() {
  const name = $('#cityName').val();
  const photoes = $('#cityPhoto').val();

  $.ajax({
    url: '/city',
    method: 'post',
    dataType: 'json',
    data: { name, photoes },
    success: (rsp) => {
    //  updateBoard(rsp);
    console.log('rsp in statis city.js:  *******', rsp);
    window.location = '/city';
    },
  });
}
