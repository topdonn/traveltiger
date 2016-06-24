$(document).ready(init);

function init() {
  console.log('Inside Init');
  const name = $('#name').val();
  console.log("Name Is", name);
  $('#profile').click(createProfile);
  }

function createProfile() {
  const name = $('#name').val();
  const gender = $('#gender').val();
  const photo = $('#photo').val();
  const city = $('#city').val();

  $.ajax({
    url: '/profile',
    method: 'post',
    dataType: 'json',
    data: { name, gender, photo, city },
    success: function(rsp){
      alert('Done!');
    }
  });
}
