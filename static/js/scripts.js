$(function() {

  // Scroll Buttons

  function scrollToE(target, speed) {
    $('html, body').animate({
      scrollTop: $(target).offset().top - 30
    }, speed);
  };

  $('.hero .btn').click(function() {
    scrollToE('.get-started', 800);
  });

  $('.sad-penguin .arrow-down').click(function() {
    scrollToE('.sad-penguin', 300);
  });

  $('.doc-nav a').click(function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    scrollToE(target, 800);
  });

  // Affix doc-nav

  $('.doc-nav ul').affix({
    offset: {
      top: $('.hero').outerHeight(true) + 5,
      bottom: $('.footer').outerHeight(true) + 140
    }
  })

  // Local navigation
  $('body').scrollspy({target: '.doc-nav'});

  // Grids clearfix

  // function gridsClearfix(gridContainer, gridElement) {
  //   var w = $(window).width();
  //
  //   $(gridContainer + ' .clearfix').remove();
  //
  //   if (w > 767) {
  //     $(gridContainer + ' ' + gridElement + ':nth-child(2n)').after('<div class="clearfix"></div>');
  //   };
  // }

  // gridsClearfix('.values-container', 'li');
  // gridsClearfix('.features', 'li');
  //
  // $(window).resize(function() {
  //   gridsClearfix('.values-container', 'li');
  //   gridsClearfix('.features', 'li');
  // });

  // Mobile menu

  function showMenu() {
    $('.header-nav').animate({
      height: $('.header-nav').get(0).scrollHeight
    }, 250, function() {
      $(this).height('auto');
    });
    $('.burger-menu').one('click', hideMenu);
  }

  function hideMenu() {
    $('.header-nav').animate({
      height: '0'
    }, 250);
    $('.burger-menu').one('click', showMenu);
  }

  $('.burger-menu').one('click', showMenu);

  $('.burger-menu').click(function() {
    $(this).toggleClass('open');
  });

  // Pricing switcher

  function showPrices(switcher) {
    var btn = $(switcher).find('.btn[data-target]');
    if (btn) {
      $(btn).each(function() {
        var target = $(this).data('target');
        $(target).hide();
        if ($(this).hasClass('active')) {
          $($(this).data('target')).show();
        }
      });
    }
  };

  $('.btn-switch .btn').click(function() {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    showPrices('.btn-switch');
  });

  $('[class^="price--"]').hide();
  showPrices('.btn-switch');

});
