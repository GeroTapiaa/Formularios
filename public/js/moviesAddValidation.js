console.log("movies connected");
window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
  //-------------------DE REGISTRO DE PELÍCULAS------------------//
  const exRegs = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegNum: /[0-9]/,
    exRegMin: /.{0,}/,
    exRegRating: /.[0,10]/,
    exRegLength: /.[60,360]/
  };
  /* const title = document.getElementById('title')
title.addEventListener('blur', function() {
    switch (true) {
        case !this.value.trim():
            title.innerHTML = 'nombre obligatorio'
            
            
            break;
        case this.value.trim().length<3: 
        console.log('debe tener 2 caracteres');
        break
        default:
            break;
    }
}) */
  const $ = (element) => document.getElementById(element);
  const msgError = (element, msg, target) => {
    $(element).innerHTML = msg;
    target.classList.add("is-invalid");
  };
  const validField = (element, target) => {
    $(element).innerText = null;
    target.classList.remove("is-invalid");
    target.classList.add("is-valid");
  };

  $("title").addEventListener("focus", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorTitle", "El nombre es obligatorio", target);

        break;

      case this.value.trim().length < 2:
        msgError(
          "errorTitle",
          "El nombre como mínimino debe tener dos caracteres",
          target
        );
        break;
      default:
        validField("errorTitle", target);
        break;
    }
  });

  $("rating").addEventListener("focus", function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError("errorClasificacion", "El valor es obligatorio", target)
            break;
            case exRegs.exRegRating.test(this.value):
                msgError(
                    'errorClasificacion',
                    'el valor ingresado tiene que ser entre 0 y 10'
                )
    
        default:
            validField("errorClasificacion", target);
            break;
    }
  });
  $("awards").addEventListener("focus", function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError("errorPremios", "El campo es obligatorio", target)
            break;
            case exRegs.exRegRating.test(this.value):
                msgError(
                    'errorPremios',
                    'el valor ingresado tiene que ser entre 0 y 10'
                )
    
        default:
            validField("errorPremios", target);
            break;
    }
  });
  $("length").addEventListener("focus", function ({target}) {
    switch (true) {
        case !this.value.trim():
            msgError("errorDuracion", "El campo es obligatorio", target)
            break;
            case exRegs.exRegLength.test(this.value):
                msgError(
                    'errorDuracion',
                    'el valor ingresado tiene que ser entre 60 y 360'
                )
    
        default:
            validField("errorDuracion", target);
            break;
    }
  });

  $('errores').classList.add('alert-warning')






  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const elements = this.elements;
    for (let i = 0; i < elements.length - 1; i++) {

      if (!elements[i].value.trim() || elements[i].classList.contains('alert-warning')) {
        
        $("errorMsg").innerText = "todos los campos son obligatorios";
      }
    }
  });
};
