$(document).ready(init);

function init() {
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
