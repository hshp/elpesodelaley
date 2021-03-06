'use strict';

var createModal = {
  container: function($el) {
    var $div = $('<div class="mcontainer"></div>');
    $el.appendTo($div);
    return $div;
  },
  h1: function(title) {
    var $h1 = $('<h3 class="col-md-12">'+title+'</h3>');
    return $h1;
  },
  img: function() {
    var $image = $('<img >');
    return $image;
  },
  video: function() {
    var $video = $('<iframe src="https://player.vimeo.com/video/204567702?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    var $div = $('<div class="video-container"></div>');
    $video.appendTo($div);
    return $div;
  },
  musica: function(tipo,src) {
    var $musica = $('<iframe class="col-md-8 col-md-offset-2" height="450px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/'+ tipo +'/'+ src +'&amp;color=3b5998&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
    return $musica;
  },
  crew: function() {
    var $crew = $('<div class="crew col-md-offset-3 col-md-6"><table class="table"><tbody><tr><td>Dirección</td><td>Fernán Mirás</td></tr><tr><td>Guión</td><td>Roberto Gispert</td></tr><tr><td></td><td>Fernán Mirás</td></tr><tr><td>Producción</td><td>Arco Libre</td></tr><tr><td></td><td>Mirás/Gispert</td></tr><tr><td>Producción General</td><td>Fernando Sokolowicz</td></tr><tr><td>Producción Ejecutiva</td><td>Victoria Aizenstat</td></tr><tr><td>Asistente de Dirección</td><td>Juan Iribas</td></tr><tr><td>Dirección de Arte</td><td>Sergio Hernandez</td></tr><tr><td>Jefa de Producción</td><td>Celeste Gonzalez Castro</td></tr><tr><td>Dirección de Fotografía</td><td>Mariana Russo</td></tr><tr><td>Sonido Directo</td><td>Ignacio Goyen</td></tr><tr><td>Dirección Musical</td><td>Cecilia Pugliese</td></tr><tr><td>Vestuario</td><td>Elda Ledesma</td></tr><tr><td>Cameraman</td><td>Juan Celestino</td></tr><tr><td>Operador HD</td><td>Antonio De la Garma</td></tr><tr><td>Gaffer</td><td>Virginia Rojas</td></tr><tr><td>Coorinadora de Producción</td><td>Cecilia Segui</td></tr><tr><td>Coordinadora de Post-produccion</td><td>Agostina Bryk</td></tr><tr><td>Maquillaje</td><td>Marisa Ferreyra</td></tr><tr><td>1° Direccion</td><td>Guadalupe Jorge</td></tr><tr><td>Administrativa</td><td>Rosario Vasquez</td></tr><tr><td>Foquista</td><td>Anabel Leandro</td></tr><tr><td>Asistente Vestuario</td><td>Paula Chiappetta</td></tr><tr><td>Asistente Produccion</td><td>Tomas Gispert</td></tr><tr><td>Ayudante Vestuario</td><td>Ginette Montenegro</td></tr><tr><td>Ayudante Arte</td><td>Maria Victorel</td></tr><tr><td>Microfonista</td><td>Eddie Frutos</td></tr><tr><td>Jefe de electricos</td><td>Ariel Vasallo</td></tr><tr><td>Grip</td><td>Ibrian Khalil Azzi</td></tr><tr><td>2° Direccion</td><td>German Gispert</td></tr><tr><td>Ayudante Produccion</td><td>Sebastian Palmisano</td></tr><tr><td>Electrico</td><td>Daniel Besoytaurube</td></tr></tbody></table></div>');
    return $crew;
  },
  carouselRodaje: function() {
    var $carouselRodaje = $('<section id="mrgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/rodaje/rodaje-1.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-3.JPG" data-color="yellow" al<<"Darío Grandinetti"></div><div class="item"><img src="images/rodaje/rodaje-4.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-5.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-6.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-7.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-8.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-9.JPG" data-color="orange" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-10.JPG" data-color="yellow" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-11.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-12.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-13.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-14.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-15.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-16.JPG" data-color="orange" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-18.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-19.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-20.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-21.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-22.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-23.JPG" data-color="purple" alt="Foto de Rodaje"></div></div><a class="left carousel-control carousel-control-left" href="#mrgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mrgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje;
  },
  carouselRodaje2: function() {
    var $carouselRodaje2 = $('<section id="mr2galeria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/rodaje-bn/rodaje2-1.JPG" data-color="red" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-2.JPG" data-color="orange" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-3.JPG" data-color="yellow" al<<"Darío Grandinetti"></div><div class="item"><img src="images/rodaje-bn/rodaje2-4.JPG" data-color="green" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-5.JPG" data-color="turquoise" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-6.jpg" data-color="blue" alt="Foto de rodaje - Blanco y Negro"></div></div><a class="left carousel-control carousel-control-left" href="#mr2galeria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mr2galeria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje2;
  },
  carouselPrensa: function() {
    var $carouselPrensa = $('<section id="mpgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/prensa/prensa-barrientos grandinetti onetto.jpg" data-color="red" alt="Barrientos - Grandinetti - Onetto"></div><div class="item"><img src="images/prensa/prensa-barrientos.jpg" data-color="orange" alt="Paola Barrientos"></div><div class="item"><img src="images/prensa/prensa-grandinetti.jpg" data-color="yellow" alt="Darío Grandinetti"></div><div class="item"><img src="images/prensa/prensa-onetto.jpg" data-color="green" alt="María Onetto"></div><div class="item"><img src="images/prensa/prensa-miras.jpg" data-color="turquoise" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-todos.jpg" data-color="blue" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div><div class="item"><img src="images/prensa/prensa-todos1.jpg" data-color="purple" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div></div><a class="left carousel-control carousel-control-left" href="#mpgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mpgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselPrensa;
  },
  carouselExpediente: function() {
    var $carouselExpediente = $('<section id="megaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/expediente/15.jpg" data-color="red" alt="Expediente A"></div><div class="item"><img src="images/expediente/7.jpg" data-color="orange" alt="Expediente B"></div><div class="item"><img src="images/expediente/4.jpg" data-color="yellow" alt="Expediente C-1"></div><div class="item"><img src="images/expediente/3.jpg" data-color="green" alt="Expediente C-2"></div><div class="item"><img src="images/expediente/2.jpg" data-color="turquoise" alt="Expediente C-3"></div><div class="item"><img src="images/expediente/11.jpg" data-color="blue" alt="Expediente D"></div><div class="item"><img src="images/expediente/9.jpg" data-color="purple" alt="Expediente E"></div><div class="item"><img src="images/expediente/6.jpg" data-color="red" alt="Expediente F-1"></div><div class="item"><img src="images/expediente/5.jpg" data-color="orange" alt="Expediente F-2"></div><div class="item"><img src="images/expediente/10.jpg" data-color="yellow" alt="Expediente G"></div><div class="item"><img src="images/expediente/12.jpg" data-color="green" alt="Expediente H"></div></div><a class="left carousel-control carousel-control-left" href="#megaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#megaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselExpediente;
  },
  carouselStoryboards: function() {
    var $carouselStoryboards = $('<section id="msgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/storyboards/storyboard1.jpg" data-color="red" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard2.jpg" data-color="orange" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard3.jpg" data-color="yellow" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard4.jpg" data-color="green" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard5.jpg" data-color="turquoise" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard6.jpg" data-color="blue" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard7.jpg" data-color="purple" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard8.jpg" data-color="red" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard9.jpg" data-color="orange" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard10.jpg" data-color="yellow" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard11.jpg" data-color="green" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard12.jpg" data-color="turquoise" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard13.jpg" data-color="blue" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard15.jpg" data-color="purple" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard16.jpg" data-color="red" alt="Storyboard"></div><div class="item"><img src="images/storyboards/storyboard17.jpg" data-color="orange" alt="Storyboard"></div></div><a class="left carousel-control carousel-control-left" href="#msgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#msgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselStoryboards;
  },
  carouselVestuario: function() {
    var $carouselVestuario = $('<section id="mvgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/vestuario/vestuario1.jpg" data-color="red" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario2.jpg" data-color="orange" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario3.jpg" data-color="yellow" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario4.jpg" data-color="green" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario5.jpg" data-color="turquoise" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario6.jpg" data-color="blue" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario7.jpg" data-color="purple" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario8.jpg" data-color="red" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario9.jpg" data-color="orange" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario10.jpg" data-color="yellow" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario11.jpg" data-color="green" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario12.jpg" data-color="turquoise" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario13.jpg" data-color="blue" alt="Vestuario"></div><div class="item"><img src="images/vestuario/vestuario14.jpg" data-color="purple" alt="Vestuario"></div></div><a class="left carousel-control carousel-control-left" href="#mvgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mvgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselVestuario;
  }
};

function modalInsert($el) {
  $('#Modal').css('display','block');
  $el.appendTo('.mbody');
}

function modalAfiche() {
  $('#afiche').click(function () {
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', this.src);
    modalInsert($container);
  });
}

function modalTrailer() {
  $('#avance').click(function () {
    var $video = createModal.video();
    var $container = createModal.container($video);
    modalInsert($container);
  });
}

function modalCarousel() {
  $('#rodaje1').click(function () {
    var $carouselRodaje = createModal.carouselRodaje();
    var $container = createModal.container($carouselRodaje);
    modalInsert($container);
  });
  $('#rodaje2').click(function () {
    var $carouselRodaje2 = createModal.carouselRodaje2();
    var $container = createModal.container($carouselRodaje2);
    modalInsert($container);
  });
  $('#prensa').click(function () {
    var $carouselPrensa = createModal.carouselPrensa();
    var $container = createModal.container($carouselPrensa);
    modalInsert($container);
  });
}

function modalCast() {
  $('#pj-barrientos').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/barrientos.jpg');
    modalInsert($container);
  });
  $('#pj-onetto').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/onetto.jpg');
    modalInsert($container);
  });
  $('#pj-grandinetti').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/grandinetti.jpg');
    modalInsert($container);
  });
  $('#pj-miras').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/miras.jpg');
    modalInsert($container);
  });
  $('#pj-aruzzi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/aruzzi.jpg');
    modalInsert($container);
  });
  $('#pj-barassi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/barassi.jpg');
    modalInsert($container);
  });
  $('#pj-rosso').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/rosso.jpg');
    modalInsert($container);
  });
  $('#pj-lambertini').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/lambertini.jpg');
    modalInsert($container);
  });
}

function modalCrew() {
  $('#ficha').click(function(event) {
    event.preventDefault();
    var $crew = createModal.crew();
    var $container = createModal.container($crew);
    modalInsert($container);
  });
}

function modalStoryboards(){
  $('#storyboards').click(function(event) {
    event.preventDefault();
    var $carouselStoryboards = createModal.carouselStoryboards();
    var $container = createModal.container($carouselStoryboards);
    modalInsert($container);
  });
}

function modalSinopsis() {
  $('#sinopsis-completa').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/sinopsis.jpg');
    modalInsert($container);
  });
}

function modalExpediente(){
  $('#expediente-completo').click(function(event) {
    event.preventDefault();
    var $carouselExpediente = createModal.carouselExpediente();
    var $container = createModal.container($carouselExpediente);
    modalInsert($container);
  });
}

function modalVestuario(){
  $('#vestuario').click(function(event) {
    event.preventDefault();
    var $carouselVestuario = createModal.carouselVestuario();
    var $container = createModal.container($carouselVestuario);
    modalInsert($container);
  });
}

function modalMusica() {
  $('#musica-completa').click(function(event) {
    if (!animateResponsive()) {
      event.preventDefault();
      var playlist = [{
        title: 'Preludio Nro. 2 en Cm (Do menor) El Clave Bien Temperado Libro I (y piezas que a partir de él surgen):',
        list: ['305735321'],
        tipo: 'playlists'
        },{
        title: 'Suite Francesa en Cm (Do menor) (ALLEMANDA Y SARABANDA):',
        list: ['305736775'],
        tipo: 'playlists'
        },{
        title: 'Preludio Nro. 10 en Em (Mi menor) El Clave Bien Temperado Libro I (y piezas que a partir de él surgen):',
        list: ['305737704'],
        tipo: 'playlists'
        },{
        title: 'Preludio en C#, El Clave Bien Temperado Libro I:',
        list: ['305738228'],
        tipo: 'playlists'
        },{
        title: 'Fuga en C#, El Clave Bien Temperado Libro I:',
        list: ['305738732'],
        tipo: 'playlists'
        },{
        title: 'Fuga en Em (Mi menor), El Clave Bien Temperado Libro I:',
        list: ['311345463'],
        tipo: 'tracks'
        }];

      var $container = createModal.container(createModal.h1(playlist[0].title));
      for (var i = 0; i < playlist[0].list.length; i++) {
        createModal.musica(playlist[0].tipo,playlist[0].list[i]).appendTo($container);
      }

      for (var j = 1; j < playlist.length; j++) {
        createModal.h1(playlist[j].title).appendTo($container);
        for (var k = 0; k < playlist[j].list.length; k++) {
          createModal.musica(playlist[j].tipo,playlist[j].list[k]).appendTo($container);
        }
      }

      modalInsert($container);
    }
  });
}

function modalClose() {
  var mclose = $('.mclose');
  mclose.click(function() {
    $('.mbody').empty();
  });
}

function modalReady() {
  modalAfiche();
  modalTrailer();
  modalCarousel();
  modalCast();
  modalCrew();
  modalSinopsis();
  modalExpediente();
  modalStoryboards();
  modalVestuario();
  modalMusica();
  modalClose();
}

$(document).ready(modalReady);
