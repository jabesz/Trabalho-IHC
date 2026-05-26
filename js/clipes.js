function mudarJogoClipes(jogoId) {
  document.querySelectorAll('.game-tab').forEach(btn => {
    btn.classList.remove('active');
  });

  const abaSelecionada = document.getElementById(`tab-${jogoId}`);
  if (abaSelecionada) {
    abaSelecionada.classList.add('active');
  }

  document.querySelectorAll('.clips-section').forEach(secao => {
    secao.classList.remove('active');
  });

  const secaoAlvo = document.getElementById(`section-${jogoId}`);
  if (secaoAlvo) {
    secaoAlvo.classList.add('active');
  }
}