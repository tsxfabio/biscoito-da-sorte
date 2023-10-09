let motivation;
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const messageContainer = document.querySelector("#message-container");
const closedCookie = document.querySelector("#closed-cookie");
const openedCookie = document.querySelector("#opened-cookie");
const btnOpenAgain = document.querySelector("#btn-open-again");

async function openCookie() {
  await getMotivations();
  toggleHiddenAttribute();
  title.textContent = "Aqui está a sua sorte de hoje!";
  getRandomMotivation();
}

function openAgain() {
  toggleHiddenAttribute();
  title.textContent = "Qual é a sua sorte de hoje?";
}

function toggleHiddenAttribute() {
  subtitle.toggleAttribute("hidden");
  messageContainer.toggleAttribute("hidden");
  closedCookie.toggleAttribute("hidden");
  openedCookie.toggleAttribute("hidden");
  btnOpenAgain.toggleAttribute("hidden");
}

async function getMotivations() {
  try {
    let response = await fetch("../motivacional.json");
    if (!response.ok) {
      throw new Error(
        "Erro ao executar a requisição, status " + response.status
      );
    }
    motivation = await response.json();
  } catch (error) {
    console.log(error);
  }
}

function getRandomMotivation() {
  let index = Math.floor(Math.random() * motivation.motivacoes.length);
  return (messageContainer.textContent =
    motivation.motivacoes[index].descricao);
}
