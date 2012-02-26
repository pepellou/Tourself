  var availableTowns = [
{label:"Tirana, Albania", value:"Tirana"},
{label:"Berlin, Alemania", value:"Berlin"},
{label:"Andorra la Vella, Andorra", value:"Andorra"},
{label:"Erevan, Armenia", value:"Erevan"},
{label:"Viena, Austria", value:"Viena"},
{label:"Baku, Azerbaiyan", value:"Baku"},
{label:"Bruselas, Belgica", value:"Bruselas"},
{label:"Minsk, Bielorrusia", value:"Minsk"},
{label:"Sarajevo, Bosnia-Herzegovina", value:"Sarajevo"},
{label:"Sofia, Bulgaria", value:"Sofia"},
{label:"Nicosia, Chipre", value:"Nicosia"},
{label:"Zagreb, Croacia", value:"Zagreb"},
{label:"Copenhague, Dinamarca", value:"Copenhague"},
{label:"Bratislava, Eslovaquia", value:"Bratislava"},
{label:"Liubliana, Eslovenia", value:"Liubliana"},
{label:"Madrid, España", value:"Madrid"},
{label:"Tallin, Estonia", value:"Tallin"},
{label:"Helsinki, Finlandia", value:"Helsinki"},
{label:"Paris, Francia", value:"Paris"},
{label:"Tiflis, Georgia", value:"Tiflis"},
{label:"Atenas, Grecia", value:"Atenas"},
{label:"Amsterdam, Holanda", value:"Amsterdam"},
{label:"Budapest, Hungría", value:"Budapest"},
{label:"Dublín, Irlanda", value:"Dublín"},
{label:"Reykjavik, Islandia", value:"Reykjavik"},
{label:"Roma, Italia", value:"Roma"},
{label:"Almaty, Kazajstan", value:"Almaty"},
{label:"Bishkek, Kirguizistan", value:"Bishkek"},
{label:"Riga, Letonia", value:"Riga"},
{label:"Vaduz, Liechtenstein", value:"Vaduz"},
{label:"Vilna, Lituania", value:"Vilna"},
{label:"Luxemburgo, Luxemburgo", value:"Luxemburgo"},
{label:"Skopje, Macedonia", value:"Skopje"},
{label:"La Valletta, Malta", value:"La Valletta"},
{label:"Chisinau, Moldova", value:"Chisinau"},
{label:"Monaco, Mónaco", value:"Monaco"},
{label:"Podgorica, Montenegro", value:"Podgorica"},
{label:"Oslo, Noruega", value:"Oslo"},
{label:"Varsovia, Polonia", value:"Varsovia"},
{label:"Lisboa, Portugal", value:"Lisboa"},
{label:"Londres, Reino Unido", value:"Londres"},
{label:"Praga, República Checa", value:"Praga"},
{label:"Bucarest, Rumania", value:"Bucarest"},
{label:"Moscu, Rusia", value:"Moscu"},
{label:"San Marino, San Marino", value:"San Marino"},
{label:"Vaticano, Santa Sede", value:"Vaticano"},
{label:"Belgrado, Serbia", value:"Belgrado"},
{label:"Estocolmo, Suecia", value:"Estocolmo"},
{label:"Berna, Suiza", value:"Berna"},
{label:"Dushanbe, Tayikistan", value:"Dushanbe"},
{label:"Ashgabat, Turkmenistan", value:"Ashgabat"},
{label:"Kiev, Ucrania", value:"Kiev"},
{label:"Tashkent, Uzbekistan", value:"Tashkent"}];

$(function () {

  var destinationPicker = $("#destination-picker");
  destinationPicker.autocomplete({
    source: availableTowns
  });

  var travellersPicker = $("#travellers-picker");
  travellersPicker.spinner({min: 1, max: 100, increment: 1});

  onEnter(destinationPicker, focusGoesTo(travellersPicker));

  $.datepicker.setDefaults($.datepicker.regional['es']);
  var datePickers = $('#start-date').add('#end-date');
  datePickers.datepicker({defaultDate: "+1d"});
  datePickers.change(function() {
    executeLater(checkDatesFilled);
  });

  onEnter(travellersPicker, focusGoesTo(datePickers.first()));
  onEnter(datePickers.first(), focusGoesTo(datePickers.eq(1)));

  var hotelPickers = $('.hotel-picker').add('.hotel-booking');
  hotelPickers.click(function() {
    hotelPickers.slideToggle();
  });

});

function executeLater(f) {
  setTimeout(f, 0);
}

var enterCode = 13;

function onEnter(selection, action) {
  selection.keyup(function(e) {
    if (e.keyCode === enterCode) {
      action();
    }
  });
}

function focusGoesTo(destination) {
  return function() {
    destination.focus();
  };
}

function checkDatesFilled() {
  if ($('#start-date').val() && $('#end-date').val()) {
    $('#content').show();
  }
}

