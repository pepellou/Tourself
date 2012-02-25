function checkDatesFilled() {
  if ($('#start-date').val() && $('#end-date').val()) {
    $('#content').show();
  }
}

function executeLater(f) {
  setTimeout(f, 0);
}

$(function () {
  $('.tabs a:last').tab('show');
  $.datepicker.setDefaults($.datepicker.regional['es']);
  $('#start-date').add('#end-date').datepicker({defaultDate: "+1d"});
  $("#travellers-picker").spinner({min: 1, max: 100, increment: 1});

  $('#start-date').add('#end-date').change(function() {
    executeLater(checkDatesFilled);
  });
});
