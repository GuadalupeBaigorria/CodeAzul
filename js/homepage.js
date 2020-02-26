;(function($){

  $(document).ready(function(){
    // Modal dialog open
    $('.support-bubble').click(function(event){
        $('.support-dialog').addClass('show-dialog');
        $('.support-bubble').addClass('show-dialog');

        $('.support-dialog').attr('aria-hidden', 'false');
        $('.support-bubble').attr('aria-hidden', 'true');

        $('.support-dialog').focus();

        event.preventDefault();
        return false;
    });

    // Modal dialog close
    $('.support-dialog-close').click(function(event){
        $('.support-dialog').removeClass('show-dialog');
        $('.support-bubble').removeClass('show-dialog');

        $('.support-dialog').attr('aria-hidden', 'true');
        $('.support-bubble').attr('aria-hidden', 'false');

        $('.support-bubble').focus();

        event.preventDefault();
        return false;
    });

    // Smooth scroll
    new SmoothScroll('a[href*="#"][data-scroll]');

    // Testimonials slider
    Revolver.registerTransition('slide', function(options, done) {
      var $currentSlide, $nextSlide, $slides, complete;

      $nextSlide = $(this.slides[this.nextSlide]);
      $currentSlide = $(this.slides[this.currentSlide]);
      $slides = $(this.slides);
      $currentSlide
        .addClass('animated fadeOutLeft')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('active animated fadeOutLeft');
          $nextSlide
            .addClass('animated fadeInRight active')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
              $(this).removeClass('animated fadeInRight');
              done();
            });
        });
      return this;
    });

    new Revolver({
        containerSelector: '.container.testimonials'
      , slidesSelector: '.container.testimonials-wrapper'
      , transition: { name: 'slide' }
      , rotationSpeed: 10000
      , autoPlay: true
    });

  });
})(jQuery);
