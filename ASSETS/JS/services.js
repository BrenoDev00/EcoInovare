document.addEventListener("DOMContentLoaded", function () {
  const btnServiceCard = document.querySelectorAll(".btn-service-card");
  const serviceModal = document.getElementById("service-modal");
  let serviceName = document.querySelector(".service-name");
  let serviceDescription = document.querySelector(".service-description");
  const btnCloseModal = document.querySelector(".btn-close-modal");

  for (let i = 0; i < btnServiceCard.length; i++) {
    btnServiceCard[i].addEventListener("click", function () {
      switch (i) {
        case 0:
          serviceName.textContent = "Certificação Ambiental";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Assistência na
                  obtenção de certificações ambientais reconhecidas
                  internacionalmente, como ISO 14001, LEED (Liderança em Energia e
                  Design Ambiental) e outras certificações específicas da indústria.`;
          break;

        case 1:
          serviceName.textContent = "Compensação de Carbono";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Um serviço voltado para
            compensar as emissões de carbono das empresas por meio de
            iniciativas como o plantio de árvores ou apoio a projetos de energia limpa.`;
          break;

        case 2:
          serviceName.textContent = "Gestão de Resíduos";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Desenvolvimento e implementação
             de programas de gestão de resíduos, incluindo avaliação de resíduos, otimização de
            processos e educação da equipe sobre práticas de reciclagem.`;
          break;

        case 3:
          serviceName.textContent = "Eficiência Energética";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Soluções para reduzir o
             consumo de energia, como auditorias energéticas, implementação de sistemas de iluminação e
             recomendação de fontes renováveis.`;
          break;

        case 4:
          serviceName.textContent = "Consultoria em Sustentabilidade";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Ajudar empresas a desenvolver e
             implementar estratégias sustentáveis personalizadas, incluindo avaliação de pegada de carbono, desenvolvimento
             de planos de sustentabilidade e treinamento em equipe.`;
          break;

        case 5:
          serviceName.textContent = "Monitoramento Sustentável";
          serviceDescription.innerHTML = `<span class="text-highlight">Descrição</span>: Realizamos monitoramento contínuo
             das práticas sustentáveis e do impacto ambiental das operações da empresa. Através de relatórios detalhados e
             dashboards personalizados, ajudamos a acompanhar o consumo de recursos, emissões de carbono e eficiência energética. `;
          break;
      }

      serviceModal.showModal();
    });
  }

  btnCloseModal.addEventListener("click", function () {
    serviceModal.close();
  });
});
