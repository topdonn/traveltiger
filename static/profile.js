$(document).ready(init);

function init() {
  const name = $('#name').val();
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
    data: { name, gender, photo, city, country },
    success: function(rsp){
      alert('Done!');
    }
  });
}
