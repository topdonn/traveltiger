$(document).ready(init);
console.log('Inside Function');
function init() {
  const name = 'od';
  $.ajax({
    url: '/display',
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      $('#display').append(`<div><p>${name}</p><img src="${art}"></div>`);
      console.log('*******************',rsp.name);
    }
  });
  }
