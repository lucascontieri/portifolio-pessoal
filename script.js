let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top => offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}



menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão

  const nome = encodeURIComponent(document.getElementById("nome").value);
  const telefone = encodeURIComponent(document.getElementById("telefone").value);
  const assunto = encodeURIComponent(document.getElementById("assunto").value);
  const mensagem = encodeURIComponent(document.getElementById("mensagem").value);

  const destinatario = "lucascontieri@gmail.com"; // meu endereço de gmail
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}&su=${assunto}&body=Nome:%20${nome}%0ATelefone:%20${telefone}%0AMensagem:%0A${mensagem}`;

  window.open(mailtoLink, '_blank');
});