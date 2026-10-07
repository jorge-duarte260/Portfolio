console.log("Portfolio carregado com sucesso 🚀");

/*_________________________________PROJETOS DROP_________________________________*/

const botao = document.querySelector(".projetos");
const lista = document.querySelector(".projetos-drop");

botao.addEventListener("click", function () {
  const aberto = lista.classList.toggle("open");
  botao.textContent = aberto ? "↑ Projetos" : "↓ Projetos";
});

/*_________________________________PERSONALIZAR DROP_________________________________*/

const botaop = document.querySelector(".personalizar");
const listap = document.querySelector(".personalizar-drop");

botaop.addEventListener("click", function () {
  const aberto = listap.classList.toggle("open");
  botaop.textContent = aberto ? "↑ Personalizar" : "↓ Personalizar";
});

/*_________________________________MODOS (compacto / médio / extenso)_________________________________*/

const opcoes = document.querySelectorAll(".opcao");

function aplicarModo(modo) {
  document.body.dataset.modo = modo;
  opcoes.forEach(o => o.classList.toggle("ativa", o.dataset.modo === modo));
  try { localStorage.setItem("modo", modo); } catch (e) {}
}

opcoes.forEach(o => o.addEventListener("click", () => aplicarModo(o.dataset.modo)));

// repõe a última escolha ao abrir qualquer página
let guardado = "medio";
try { guardado = localStorage.getItem("modo") || "medio"; } catch (e) {}
aplicarModo(guardado);