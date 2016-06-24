$(document).ready(initialize);

function initialize() {
  console.log("Inside initialize");
  debugger;
  $('#profile').click(createProfile);
  }

function createProfile() {
  const name = $('#name').val();
  console.log("Name", name);
  const gender = $('#gender').val();
  const photo = $('#photo').val();
  const city = $('#city').val();
 console.log("Body", req.body);
  $.ajax({
    url: '/profile',
    method: 'post',
    dataType: 'json',
    data: { name, gender, photo, city },
    success: function(rsp){
      update(rsp);
    }
  });
};
