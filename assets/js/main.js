document.querySelector('#brgr-menu-overlay').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#brgr-menu-container').classList.toggle('brgr-menu-invisible');
});

document.querySelector('#brgr-menu-btn').addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#brgr-menu-container').classList.toggle('brgr-menu-invisible');
});


$('.minus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
      value = value - 1;
  } else {
      value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
      value = value + 1;
  } else {
      value = 100;
  }

  $input.val(value);
});

$('.like-btn').on('click', function () {
  $(this).toggleClass('is-active');
});

// grid script

$(document).ready(function(){
  $(".grid").on("click", function(){
    $(".list").removeClass("active");
    $(this).addClass("active");
    $(".liView").removeClass("listStyle");
    $(".liView").addClass("gridStyle");
  });
  $(".list").on("click", function(){
    $(".grid").removeClass("active");
    $(this).addClass("active");
    $(".liView").removeClass("gridStyle");
    $(".liView").addClass("listStyle");
  });

  $('.cart-items input').click(function(){
    $('.cart-items input').each(function(){
      $(this).parent().removeClass('active')
    })
    $(this).parent().addClass('active')
  })
});

$(document).ready(function(){

var mixer = mixitup('.liView', {
  multifilter: {
      enable: true
  },
 
  callbacks: {
      onMixStart: function(state, futureState) {
        cleanSelector = futureState.activeFilter.selector.replace(/, /g, '');
        entryArray = cleanSelector.split(".");

        $('fieldset input').each(function(){
          $(this).parent().removeClass('activeFilter');
          for(let i = 0; i<entryArray.length; i++){
            if( $(this).val() == "."+entryArray[i]){
                $(this).parent().addClass('activeFilter');
            }
           
          
          }
        })

      }
  }
});



});
