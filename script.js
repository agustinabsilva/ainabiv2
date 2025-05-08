
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Scroll Reveal Animations
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, offset = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});

/*
  document.getElementById('btn-ver-mas').addEventListener('click', function () {
    const extra = document.getElementById('extra-info');
    if (extra.style.display === 'none') {
      extra.style.display = 'block';
      this.textContent = 'Ver menos';
    } else {
      extra.style.display = 'none';
      this.textContent = 'Ver más';
    }
  });*/


  // Verifica si el botón existe antes de añadir el evento
document.addEventListener("DOMContentLoaded", function () {
    const btnConoceMas = document.getElementById("btn-conoce-mas");

    if (btnConoceMas) {
        btnConoceMas.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el salto inmediato

            Swal.fire("Hola");
        });
    }
});

  // Verifica si el botón existe antes de añadir el evento
  document.addEventListener("DOMContentLoaded", function () {
    const btnEnviado = document.getElementById("btnEnviar");

    if (btnEnviado) {
        btnEnviado .addEventListener("click", function (e) {
            e.preventDefault(); // Evita el salto inmediato

            Swal.fire({
                title: "Enviado!",
                text: "Muchas gracias por contactarte",
                imageUrl: "./assets/capiok.png",
                imageWidth: 400,
                imageHeight: 400,                
                imageAlt: "Custom image",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#b88b66",
               
              });
             
        });
        
    }
   
});