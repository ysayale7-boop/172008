onload = () =>{
    document.body.classList.remove("container");
};
// Activar audio en móviles al primer toque
document.addEventListener("touchstart", function () {
  var audio = document.getElementById("audio");
  if (audio && audio.paused) {
    audio.play().catch(function (e) {
      console.log("No se pudo reproducir automáticamente:", e);
    });
  }
}, { once: true }); // Solo se activa una vez