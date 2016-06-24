$(document).ready(init);
console.log('Inside Function');
function init() {
  const name = 'od';
  $.ajax({
    url: '/display',
    method: 'get',
    dataType: 'json',
    success: function(rsp){
      console.log('*******************',rsp.name);
    }
  });
  }
