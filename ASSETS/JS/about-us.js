document.addEventListener("DOMContentLoaded", function () {
  // Menu de Navegação
  const menuBtn = document.querySelector(".btn-menu");
  const navigationItems = document.querySelector(".navigation-items");

  function toggleMenu() {
    menuBtn.addEventListener("click", function () {
      navigationItems.classList.toggle("navigation-open");

      if (navigationItems.classList.contains("navigation-open")) {
        menuBtn.src = "/ASSETS/IMAGES/HOME/icone-fechar-menu-hamburguer.svg";
      } else {
        menuBtn.src = "/ASSETS/IMAGES/HOME/icone-menu-hamburguer.svg";
      }
    });
  }

  toggleMenu();

  // Conteúdo Principal
  const aboutUsBtn = document.querySelectorAll(".btn-about-us");
  const borderBottom = document.querySelectorAll(".border-bottom");
  const mainTitle = document.querySelector(".main-title");
  const informativeText = document.querySelector(".informative-text");
  const aboutUsImage = document.querySelector(".about-us-image");

  function showEcoInovareMission() {
    aboutUsBtn[0].addEventListener("click", function () {
      mainTitle.innerHTML = "Nossa Missão";

      informativeText.innerHTML =
        "Nossa <b>missão é capacitar empresas a adotarem práticas sustentáveis</b> que promovam a harmonia entre o crescimento econômico e a preservação do meio ambiente. Acreditamos que o futuro dos negócios depende de ações responsáveis que respeitem os recursos naturais e garantam um legado positivo para as próximas gerações. Trabalhamos para oferecer <b>soluções ecológicas inovadoras e acessíveis</b>, ajudando empresas de todos os tamanhos a minimizar seu impacto ambiental, enquanto maximizam sua eficiência e lucratividade.";

      aboutUsImage.src = "/ASSETS/IMAGES/ABOUT-US/imagem-missao.png";

      aboutUsImage.alt =
        "Imagem de colaboradores de uma empresa reunidos juntando as mãos.";
    });
  }

  showEcoInovareMission();

  function showEcoInovareVision() {
    aboutUsBtn[1].addEventListener("click", function () {
      borderBottom[0].style.display = "block";

      mainTitle.innerHTML = "Nossa Visão";

      informativeText.innerHTML =
        "Ser <b>referência global em soluções ecológicas para empresas</b>, promovendo uma transformação sustentável que impacte positivamente o meio ambiente e a sociedade. Almejamos um futuro onde todas as empresas integrem <b>práticas sustentáveis em suas operações</b>, tornando o desenvolvimento econômico um aliado da preservação ambiental. Queremos liderar essa mudança, inspirando ações conscientes e colaborativas que moldem um mundo mais verde, próspero e equilibrado.";

      aboutUsImage.src = "/ASSETS/IMAGES/ABOUT-US/imagem-visao.png";

      aboutUsImage.alt =
        "Imagem de documentos e materiais de escritório sobre uma mesa.";
    });
  }

  showEcoInovareVision();

  function showEcoInovareValues() {
    aboutUsBtn[2].addEventListener("click", function () {
      borderBottom[1].style.display = "block";

      mainTitle.innerHTML = "Nossos Valores";

      informativeText.innerHTML =
        "Nossos valores refletem o compromisso com a sustentabilidade e a ética em cada passo que damos. Acreditamos na <b>responsabilidade ambiental</b> como princípio fundamental, priorizando soluções que respeitem e protejam o meio ambiente. Valorizamos a <b>inovação</b>, buscando constantemente novas tecnologias e abordagens que promovam práticas sustentáveis e eficientes. Nossa relação com clientes e parceiros é guiada pela <b>transparência</b>, garantindo comunicação aberta e honesta em todas as etapas. Também acreditamos na <b>colaboração</b>, sabendo que o trabalho em conjunto é essencial para gerar mudanças positivas e duradouras.";

      aboutUsImage.src = "/ASSETS/IMAGES/ABOUT-US/imagem-valores.png";

      aboutUsImage.alt =
        "Imagem de colaboradores de uma empresa reunidos juntando as mãos.";
    });
  }

  showEcoInovareValues();
});
