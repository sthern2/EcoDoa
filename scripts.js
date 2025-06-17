 // Alerta ao clicar no botão "Quero doar"
const botaoDoar = document.querySelector('.botao-doar');
botaoDoar.addEventListener('click', () => {
  alert('Obrigado por querer ajudar! Em breve, você será direcionado para as campanhas disponíveis.');
});

// Mensagem ao clicar no ícone de perfil
const iconePerfil = document.querySelector('.icone-perfil');
iconePerfil.addEventListener('click', () => {
  alert('Faça login ou cadastre-se para acompanhar suas doações.');
});
