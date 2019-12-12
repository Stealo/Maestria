var controller = new ScrollMagic.Controller({ vertical: false });

var scene = new ScrollMagic.Scene({
  triggerElement: '.animation_text'
})

  .setClassToggle('.animation_text', 'show')
  .addTo(controller);


var controller = new ScrollMagic.Controller({ vertical: false });

var scene = new ScrollMagic.Scene({
  triggerElement: '.animation_art_con'
})

    .setClassToggle('.animation_art_con', 'show')
    .addTo(controller);


var controller = new ScrollMagic.Controller({ vertical: false });

var scene = new ScrollMagic.Scene({
  triggerElement: '.animation_text_equipe'
})

    .setClassToggle('.animation_text_equipe', 'show')
    .addTo(controller);

