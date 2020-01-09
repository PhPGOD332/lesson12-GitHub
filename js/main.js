/* document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle = modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  });

  closeBtn.addEventListener('click', switchModal)

}); */

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination')

  next.css('left', prev.width() + 30 + bullets.width() + 30)
  bullets.css('left', prev.width() + 30)

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // Правило объект
      userEmail: {
        required: true,
        email: true
      }
    }, // Сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно введие Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });
  $('.footer__form').validate( {
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // Правило объект
      userQuestion: {
        required: true,
        minlength: 20,
        maxlength: 300
      },
      userQuestion: {
        required: true,
        text: true
      }
    }, // Сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: {
        required: "Обязательно введите вопрос",
        minlength: "Текст не короче 20 символов",
        maxlength: "Текст не больше 300 символов"
      }
    }
  });

  // Валидация формы
  $('.control__form').validate( {
    errorClass: "invalid",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
    }, // Сообщения
    errorElement: "div",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не больше 15 букв"
      },
      userPhone: "Телефон обязателен",
    },
    submitHandler: function(form) {  
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
        },
        error: function (response) { 
          console.error('Ошибка запроса' + response)
        }
      });
    }
  });

  $('#modal-form').on('submit', function (event) { 
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
      success: function (response) {
        console.log('Прибыли данные: ' + response);
        $('#modal-form')[0].reset();
      },
      error: function (jqXNR, textStatus) { 
        console.error(jqXNR + " " + textStatus );
       }
    });
   });

  // Маска для номера телефона 

  $('[type=tel]').mask('+7 (000) 00-00-000', {placeholder: "+7/___/__-__-___"})
/*   var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {  
    event.target.player.playVideo();
  } */

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
  });
});