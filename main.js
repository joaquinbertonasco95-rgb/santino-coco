// MAIN 1 FUNCION NORMAL PARA UN SOLO NUMERO DE TELEFONO
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".Btn");
    setTimeout(() => {
        btn.classList.add("expand");
    }, 300); // delay para suavizar
});

// evento de click para el pixel

document.addEventListener("DOMContentLoaded", () => {
  const linkBtn = document.getElementById("linkBtn");

  if (linkBtn) {
    linkBtn.addEventListener("click", (event) => {
      fbq('trackCustom', 'LinkClick', { url: linkBtn.href });
      console.log("Evento Pixel: clic en link detectado →", linkBtn.href);
    });
  }
});


const contactNumber = "5493517316130"; // Reemplaza con tu numero (con código país sin + y sin espacios)
const message = "Hola, quiero un usuario."; // reemplaza el mensaje dentro de las (""), no las borres

function sendWhatsAppMessage() {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${contactNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
}

// Vincular al botón
document.querySelector(".Btn").addEventListener("click", sendWhatsAppMessage);