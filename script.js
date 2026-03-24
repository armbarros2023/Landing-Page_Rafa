const defaultContent = {
  brandName: "Nova Classe",
  heroEyebrow: "MATRÍCULAS ABERTAS PARA A NOVA TURMA",
  heroTitle: "Transforme conhecimento em carreira com cursos que vendem evolução real.",
  heroLead:
    "Uma plataforma de formação intensiva para profissionais que querem aprender com método, prática guiada e comunidade de alto nível.",
  trust: [
    { value: "8.700+", label: "alunos formados" },
    { value: "4,9/5", label: "avaliação média" },
    { value: "67%", label: "relatam retorno em até 90 dias" },
  ],
  logos: ["ORBITA", "HUB9", "ATLAS", "MODULARE", "PULSE"],
  featured: {
    badge: "Curso em destaque",
    title: "Academia de Performance Digital",
    description:
      "Formação completa para dominar posicionamento, vendas, produto digital e execução com consistência.",
    bullets: [
      "12 módulos liberados em trilhas práticas",
      "Mentorias ao vivo com especialistas do mercado",
      "Templates, roteiros e plano de ação em 8 semanas",
    ],
  },
  sideCards: [
    {
      label: "Formato",
      title: "Online + Ao vivo",
      description: "Aulas gravadas, encontros semanais e comunidade privada.",
    },
    {
      label: "Próxima turma",
      title: "22 de abril",
      description: "Inscrições com bônus disponíveis até o encerramento do lote atual.",
    },
  ],
  methodTitle: "Você não compra só aulas. Compra direção, ritmo e clareza.",
  methodCards: [
    {
      title: "Estrutura sem excesso",
      description:
        "O conteúdo foi desenhado para eliminar ruído e acelerar aplicação prática desde a primeira semana.",
    },
    {
      title: "Aprendizado com entrega",
      description:
        "Cada módulo termina com uma entrega real para consolidar repertório e gerar portfólio.",
    },
    {
      title: "Comunidade que puxa para cima",
      description:
        "Networking qualificado, grupos de accountability e acesso a profissionais em plena operação.",
    },
  ],
  programTitle:
    "Um programa pensado para sair do consumo passivo e entrar em execução guiada.",
  programModules: [
    {
      label: "Semana 1-2",
      title: "Base estratégica",
      description: "Posicionamento, diagnóstico de mercado, oferta e proposta de valor.",
    },
    {
      label: "Semana 3-4",
      title: "Produto e comunicação",
      description:
        "Arquitetura de curso, copy essencial, narrativa e construção de autoridade.",
    },
    {
      label: "Semana 5-6",
      title: "Venda e aquisição",
      description: "Landing pages, funis, campanhas, páginas de checkout e objeções.",
    },
    {
      label: "Semana 7-8",
      title: "Escala com processo",
      description: "Métricas, rotina, automação e plano operacional para manter consistência.",
    },
  ],
  includes: [
    "Certificado de conclusão",
    "Biblioteca de templates premium",
    "Mentorias em grupo",
    "Acesso por 12 meses",
    "Atualizações do conteúdo sem custo",
  ],
  testimonialsTitle: "Histórias de quem saiu da intenção e entrou em movimento.",
  testimonials: [
    {
      quote:
        "“Entrei para organizar meu conhecimento e saí com uma oferta validada. Fechei meus primeiros clientes antes do curso acabar.”",
      name: "Larissa M.",
      role: "Consultora e aluna da turma 05",
    },
    {
      quote:
        "“A maior diferença foi o método. Em vez de assistir sem aplicar, eu segui uma trilha que me fez produzir uma página, uma oferta e uma campanha em poucas semanas.”",
      name: "Renato S.",
      role: "Especialista em infoprodutos",
    },
    {
      quote:
        "“O investimento se pagou rápido. As mentorias ajudaram a refinar meu posicionamento e destravar a venda.”",
      name: "Camila T.",
      role: "Empreendedora digital",
    },
  ],
  pricingEyebrow: "OFERTA DE LANÇAMENTO",
  pricingTitle: "Entre na próxima turma com bônus liberados até o fim do lote.",
  pricingDescription:
    "Ideal para quem quer construir uma presença profissional forte, vender conhecimento e operar com mais confiança.",
  pricingPlanName: "Plano Formação Completa",
  pricingOldPrice: "de R$ 1.497",
  pricingInstallments: "12x de R$ 97",
  pricingCash: "ou R$ 997 à vista",
  pricingBenefits: [
    "Acesso imediato ao curso completo",
    "4 mentorias ao vivo por mês",
    "Templates de páginas, ofertas e campanhas",
    "Comunidade fechada com networking ativo",
    "Garantia incondicional de 7 dias",
  ],
  enrollmentEyebrow: "MATRÍCULA ASSISTIDA",
  enrollmentTitle: "Escolha seu plano e siga direto para o pagamento em menos de 1 minuto.",
  enrollmentDescription:
    "Uma experiência pensada para converter com clareza: plano, dados essenciais e redirecionamento imediato para checkout.",
  plans: {
    completa: {
      name: "Formação Completa",
      installments: "12x de R$ 97",
      cash: "R$ 997 à vista",
      copy: "Curso + mentorias + templates + comunidade.",
      description:
        "A trilha mais escolhida para quem quer entrar com estrutura completa e apoio ao vivo.",
      checkoutUrl: "CONFIGURE_AQUI_URL_DO_CHECKOUT_COMPLETA",
      benefits: [
        "Acesso imediato ao curso completo",
        "4 mentorias ao vivo por mês",
        "Templates de páginas, ofertas e campanhas",
        "Comunidade fechada com networking ativo",
      ],
    },
    essencial: {
      name: "Essencial",
      installments: "12x de R$ 67",
      cash: "R$ 697 à vista",
      copy: "Curso gravado e materiais principais.",
      description:
        "Para quem quer dominar a base, acessar as aulas gravadas e avançar no próprio ritmo.",
      checkoutUrl: "CONFIGURE_AQUI_URL_DO_CHECKOUT_ESSENCIAL",
      benefits: [
        "Curso completo em versão gravada",
        "Materiais de apoio e exercícios práticos",
        "Acesso por 12 meses",
        "Atualizações principais incluídas",
      ],
    },
    mentoria: {
      name: "Mentoria Pro",
      installments: "12x de R$ 147",
      cash: "R$ 1.497 à vista",
      copy: "Tudo da formação com encontros estratégicos extras.",
      description:
        "A opção premium para quem quer execução assistida, revisão estratégica e mais proximidade.",
      checkoutUrl: "CONFIGURE_AQUI_URL_DO_CHECKOUT_MENTORIA",
      benefits: [
        "Tudo da Formação Completa",
        "2 encontros estratégicos extras por mês",
        "Revisão guiada de oferta e página",
        "Prioridade no suporte da comunidade",
      ],
    },
  },
  faqTitle: "O essencial para tomar sua decisão com segurança.",
  faqs: [
    {
      question: "Preciso ter experiência para aproveitar o curso?",
      answer:
        "Não. O curso foi estruturado para atender quem está começando e também quem já atua, mas precisa organizar método, posicionamento e vendas.",
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer:
        "O acesso fica liberado por 12 meses, incluindo futuras atualizações das aulas gravadas dentro desse período.",
    },
    {
      question: "As mentorias ficam gravadas?",
      answer:
        "Sim. Quem não puder participar ao vivo recebe o replay dentro da área do aluno, junto com materiais complementares.",
    },
  ],
  footerDescription: "Formação online para transformar conhecimento em resultado.",
  floatingCta: "Matricule-se",
};

const contentStorageKey = "nova-classe-content";
const leadStorageKey = "nova-classe-lead";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const editorForm = document.querySelector("#content-editor-form");
const resetContentButton = document.querySelector("#reset-content");
const enrollmentForm = document.querySelector("#enrollment-form");
const formFeedbackElement = document.querySelector("[data-form-feedback]");
const planNameElement = document.querySelector("[data-plan-name]");
const planDescriptionElement = document.querySelector("[data-plan-description]");
const planInstallmentsElement = document.querySelector("[data-plan-installments]");
const planCashElement = document.querySelector("[data-plan-cash]");
const planBenefitsElement = document.querySelector("[data-plan-benefits]");
const summaryConfirmationElement = document.querySelector("[data-summary-confirmation]");
const countdownElement = document.querySelector("[data-countdown]");
const deadline = new Date();

deadline.setDate(deadline.getDate() + 3);
deadline.setHours(deadline.getHours() + 14);
deadline.setMinutes(deadline.getMinutes() + 29);

const dom = {
  brandTexts: [...document.querySelectorAll(".brand-text")],
  heroEyebrow: document.querySelector(".hero-copy .eyebrow"),
  heroTitle: document.querySelector(".hero-copy h1"),
  heroLead: document.querySelector(".hero-copy .lead"),
  trustCards: [...document.querySelectorAll(".trust-row > div")],
  logos: document.querySelector(".logo-strip"),
  featuredBadge: document.querySelector(".panel-primary .pill"),
  featuredTitle: document.querySelector(".panel-primary h2"),
  featuredDescription: document.querySelector(".panel-primary p"),
  featuredBullets: document.querySelector(".panel-primary .feature-list"),
  sideCards: [...document.querySelectorAll(".panel-grid .panel-card")],
  methodTitle: document.querySelector("#metodo .section-intro h2"),
  methodCards: [...document.querySelectorAll(".story-card")],
  programTitle: document.querySelector("#programa .section-intro h2"),
  programModules: [...document.querySelectorAll(".program-timeline article")],
  includes: document.querySelector(".program-aside .check-list"),
  testimonialsTitle: document.querySelector("#prova-social .section-intro h2"),
  testimonialCards: [...document.querySelectorAll(".testimonial-grid .testimonial-card")],
  pricingEyebrow: document.querySelector("#oferta .pricing-copy .eyebrow"),
  pricingTitle: document.querySelector("#oferta .pricing-copy h2"),
  pricingDescription: document.querySelector("#oferta .pricing-copy p:not(.eyebrow)"),
  pricingPlanName: document.querySelector("#oferta .pricing-header h3"),
  pricingOldPrice: document.querySelector("#oferta .price-line small"),
  pricingInstallments: document.querySelector("#oferta .price-line strong"),
  pricingCash: document.querySelector("#oferta .pricing-header p"),
  pricingBenefits: document.querySelector("#oferta .pricing-card > .check-list"),
  enrollmentEyebrow: document.querySelector("#inscricao .section-intro .eyebrow"),
  enrollmentTitle: document.querySelector("#inscricao .section-intro h2"),
  enrollmentDescription: document.querySelector("#inscricao .section-intro p:not(.eyebrow)"),
  planOptions: {
    completa: document.querySelector('.plan-option input[value="completa"]')?.closest(".plan-option"),
    essencial: document.querySelector('.plan-option input[value="essencial"]')?.closest(".plan-option"),
    mentoria: document.querySelector('.plan-option input[value="mentoria"]')?.closest(".plan-option"),
  },
  faqTitle: document.querySelector(".faq .section-intro h2"),
  faqItems: [...document.querySelectorAll(".faq-item")],
  footerDescription: document.querySelector(".footer p"),
  floatingCta: document.querySelector(".floating-cta"),
};

function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeDeep(base, override) {
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) {
      return deepClone(base);
    }

    return base.map((item, index) => mergeDeep(item, override[index]));
  }

  if (isPlainObject(base)) {
    const result = {};

    Object.keys(base).forEach((key) => {
      result[key] = mergeDeep(base[key], override?.[key]);
    });

    return result;
  }

  return override ?? base;
}

function getByPath(source, path) {
  return path.split(".").reduce((accumulator, segment) => accumulator?.[segment], source);
}

function setByPath(target, path, value) {
  const segments = path.split(".");
  const lastSegment = segments.pop();
  const parent = segments.reduce((accumulator, segment) => accumulator?.[segment], target);

  if (parent && lastSegment) {
    parent[lastSegment] = value;
  }
}

function createListItem(text) {
  const item = document.createElement("li");
  item.textContent = text;
  return item;
}

function renderList(container, items, tagName = "li") {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement(tagName);
    item.textContent = text;
    container.appendChild(item);
  });
}

function renderInlineList(container, items) {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("span");
    item.textContent = text;
    container.appendChild(item);
  });
}

function normalizeLines(value) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeCsv(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function saveContent() {
  localStorage.setItem(contentStorageKey, JSON.stringify(content));
}

function parseEditorFieldValue(input) {
  if (input.dataset.format === "lines") {
    return normalizeLines(input.value);
  }

  if (input.dataset.format === "csv") {
    return normalizeCsv(input.value);
  }

  return input.value;
}

function formatEditorFieldValue(value, format) {
  if (format === "lines") {
    return Array.isArray(value) ? value.join("\n") : "";
  }

  if (format === "csv") {
    return Array.isArray(value) ? value.join(", ") : "";
  }

  return value ?? "";
}

function populateEditorForm() {
  if (!editorForm) {
    return;
  }

  editorForm.querySelectorAll("[data-path]").forEach((field) => {
    field.value = formatEditorFieldValue(getByPath(content, field.dataset.path), field.dataset.format);
  });
}

function getSelectedPlanKey() {
  return document.querySelector('input[name="plan"]:checked')?.value ?? "completa";
}

function buildCheckoutUrl(checkoutUrl, payload) {
  const hasRealUrl = /^https?:\/\//i.test(checkoutUrl);

  if (!hasRealUrl) {
    return null;
  }

  const url = new URL(checkoutUrl);

  Object.entries(payload).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

function renderPlanOptions() {
  Object.entries(dom.planOptions).forEach(([key, option]) => {
    const plan = content.plans[key];

    if (!option || !plan) {
      return;
    }

    const strong = option.querySelector(".plan-header strong");
    const small = option.querySelector(".plan-header small");
    const copy = option.querySelector(".plan-copy");

    if (strong) {
      strong.textContent = plan.name;
    }

    if (small) {
      small.textContent = plan.installments;
    }

    if (copy) {
      copy.textContent = plan.copy;
    }
  });
}

function renderPlan(planKey) {
  const plan = content.plans[planKey];

  if (!plan) {
    return;
  }

  if (planNameElement) {
    planNameElement.textContent = plan.name;
  }

  if (planDescriptionElement) {
    planDescriptionElement.textContent = plan.description;
  }

  if (planInstallmentsElement) {
    planInstallmentsElement.textContent = plan.installments;
  }

  if (planCashElement) {
    planCashElement.textContent = plan.cash;
  }

  if (planBenefitsElement) {
    planBenefitsElement.innerHTML = "";
    plan.benefits.forEach((benefit) => {
      planBenefitsElement.appendChild(createListItem(benefit));
    });
  }

  Object.entries(dom.planOptions).forEach(([key, option]) => {
    option?.classList.toggle("active", key === planKey);
  });
}

function applyContent() {
  document.title = `${content.brandName} | Landing Page de Cursos`;

  dom.brandTexts.forEach((element) => {
    element.textContent = content.brandName;
  });

  if (dom.heroEyebrow) {
    dom.heroEyebrow.textContent = content.heroEyebrow;
  }

  if (dom.heroTitle) {
    dom.heroTitle.textContent = content.heroTitle;
  }

  if (dom.heroLead) {
    dom.heroLead.textContent = content.heroLead;
  }

  dom.trustCards.forEach((card, index) => {
    const stat = content.trust[index];

    if (!stat) {
      return;
    }

    const value = card.querySelector("strong");
    const label = card.querySelector("span");

    if (value) {
      value.textContent = stat.value;
    }

    if (label) {
      label.textContent = stat.label;
    }
  });

  renderInlineList(dom.logos, content.logos);

  if (dom.featuredBadge) {
    dom.featuredBadge.textContent = content.featured.badge;
  }

  if (dom.featuredTitle) {
    dom.featuredTitle.textContent = content.featured.title;
  }

  if (dom.featuredDescription) {
    dom.featuredDescription.textContent = content.featured.description;
  }

  renderList(dom.featuredBullets, content.featured.bullets);

  dom.sideCards.forEach((card, index) => {
    const item = content.sideCards[index];

    if (!item) {
      return;
    }

    const label = card.querySelector(".mini-label");
    const title = card.querySelector("strong");
    const description = card.querySelector("p");

    if (label) {
      label.textContent = item.label;
    }

    if (title) {
      title.textContent = item.title;
    }

    if (description) {
      description.textContent = item.description;
    }
  });

  if (dom.methodTitle) {
    dom.methodTitle.textContent = content.methodTitle;
  }

  dom.methodCards.forEach((card, index) => {
    const item = content.methodCards[index];

    if (!item) {
      return;
    }

    const title = card.querySelector("h3");
    const description = card.querySelector("p");

    if (title) {
      title.textContent = item.title;
    }

    if (description) {
      description.textContent = item.description;
    }
  });

  if (dom.programTitle) {
    dom.programTitle.textContent = content.programTitle;
  }

  dom.programModules.forEach((moduleElement, index) => {
    const item = content.programModules[index];

    if (!item) {
      return;
    }

    const label = moduleElement.querySelector("span");
    const title = moduleElement.querySelector("h3");
    const description = moduleElement.querySelector("p");

    if (label) {
      label.textContent = item.label;
    }

    if (title) {
      title.textContent = item.title;
    }

    if (description) {
      description.textContent = item.description;
    }
  });

  renderList(dom.includes, content.includes);

  if (dom.testimonialsTitle) {
    dom.testimonialsTitle.textContent = content.testimonialsTitle;
  }

  dom.testimonialCards.forEach((card, index) => {
    const item = content.testimonials[index];

    if (!item) {
      return;
    }

    const quote = card.querySelector("p");
    const name = card.querySelector("strong");
    const role = card.querySelector("span");

    if (quote) {
      quote.textContent = item.quote;
    }

    if (name) {
      name.textContent = item.name;
    }

    if (role) {
      role.textContent = item.role;
    }
  });

  if (dom.pricingEyebrow) {
    dom.pricingEyebrow.textContent = content.pricingEyebrow;
  }

  if (dom.pricingTitle) {
    dom.pricingTitle.textContent = content.pricingTitle;
  }

  if (dom.pricingDescription) {
    dom.pricingDescription.textContent = content.pricingDescription;
  }

  if (dom.pricingPlanName) {
    dom.pricingPlanName.textContent = content.pricingPlanName;
  }

  if (dom.pricingOldPrice) {
    dom.pricingOldPrice.textContent = content.pricingOldPrice;
  }

  if (dom.pricingInstallments) {
    dom.pricingInstallments.textContent = content.pricingInstallments;
  }

  if (dom.pricingCash) {
    dom.pricingCash.textContent = content.pricingCash;
  }

  renderList(dom.pricingBenefits, content.pricingBenefits);

  if (dom.enrollmentEyebrow) {
    dom.enrollmentEyebrow.textContent = content.enrollmentEyebrow;
  }

  if (dom.enrollmentTitle) {
    dom.enrollmentTitle.textContent = content.enrollmentTitle;
  }

  if (dom.enrollmentDescription) {
    dom.enrollmentDescription.textContent = content.enrollmentDescription;
  }

  renderPlanOptions();
  renderPlan(getSelectedPlanKey());

  if (dom.faqTitle) {
    dom.faqTitle.textContent = content.faqTitle;
  }

  dom.faqItems.forEach((item, index) => {
    const faq = content.faqs[index];

    if (!faq) {
      return;
    }

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer p");

    if (question) {
      question.textContent = faq.question;
    }

    if (answer) {
      answer.textContent = faq.answer;
    }
  });

  if (dom.footerDescription) {
    dom.footerDescription.textContent = content.footerDescription;
  }

  if (dom.floatingCta) {
    dom.floatingCta.textContent = content.floatingCta;
  }
}

function updateCountdown() {
  if (!countdownElement) {
    return;
  }

  const now = new Date();
  const difference = deadline - now;

  if (difference <= 0) {
    countdownElement.textContent = "encerrado";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  countdownElement.textContent =
    `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}min`;
}

function loadSavedContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(contentStorageKey) || "null");
    return mergeDeep(defaultContent, saved);
  } catch {
    return deepClone(defaultContent);
  }
}

let content = loadSavedContent();

if (editorForm) {
  populateEditorForm();

  const handleEditorUpdate = (event) => {
    const input = event.target.closest("[data-path]");

    if (!input) {
      return;
    }

    setByPath(content, input.dataset.path, parseEditorFieldValue(input));
    saveContent();
    applyContent();
  };

  editorForm.addEventListener("input", handleEditorUpdate);
  editorForm.addEventListener("change", handleEditorUpdate);
}

if (resetContentButton) {
  resetContentButton.addEventListener("click", () => {
    content = deepClone(defaultContent);
    localStorage.removeItem(contentStorageKey);
    populateEditorForm();
    applyContent();

    if (summaryConfirmationElement) {
      summaryConfirmationElement.textContent =
        "Conteúdo restaurado para o texto-base. Edite os campos acima para montar sua versão.";
      summaryConfirmationElement.classList.remove("is-success");
    }
  });
}

document.querySelectorAll('input[name="plan"]').forEach((input) => {
  input.addEventListener("change", () => {
    renderPlan(input.value);
  });
});

if (enrollmentForm) {
  enrollmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!enrollmentForm.reportValidity()) {
      if (formFeedbackElement) {
        formFeedbackElement.textContent = "Preencha os campos obrigatórios para continuar.";
        formFeedbackElement.className = "status-message is-error";
      }

      return;
    }

    const formData = new FormData(enrollmentForm);
    const planKey = String(formData.get("plan") || "completa");
    const selectedPlan = content.plans[planKey];
    const fullName = String(formData.get("name") || "").trim();
    const firstName = fullName.split(" ")[0] || "Aluno";
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const level = String(formData.get("level") || "").trim();
    const goal = String(formData.get("goal") || "").trim();
    const checkoutUrl = buildCheckoutUrl(selectedPlan?.checkoutUrl, {
      name: fullName,
      email,
      phone,
      level,
      plan: selectedPlan?.name,
    });

    localStorage.setItem(
      leadStorageKey,
      JSON.stringify({
        name: fullName,
        email,
        phone,
        level,
        goal,
        plan: planKey,
        submittedAt: new Date().toISOString(),
      })
    );

    if (formFeedbackElement) {
      if (checkoutUrl) {
        formFeedbackElement.textContent =
          `${firstName}, seus dados foram registrados. Redirecionando para o pagamento...`;
        formFeedbackElement.className = "status-message is-success";
      } else {
        formFeedbackElement.textContent =
          "Integração pronta, mas falta substituir a URL do checkout no editor de conteúdo.";
        formFeedbackElement.className = "status-message is-error";
      }
    }

    if (summaryConfirmationElement && selectedPlan) {
      if (checkoutUrl) {
        summaryConfirmationElement.textContent =
          `${firstName}, sua vaga no plano ${selectedPlan.name} foi iniciada. Você será levado agora para o checkout seguro.`;
        summaryConfirmationElement.classList.add("is-success");
      } else {
        summaryConfirmationElement.textContent =
          `${firstName}, o fluxo do plano ${selectedPlan.name} está pronto, mas ainda falta inserir a URL real do checkout no formulário acima.`;
        summaryConfirmationElement.classList.remove("is-success");
      }
    }

    ["name", "email", "phone", "goal"].forEach((fieldName) => {
      const field = enrollmentForm.elements[fieldName];

      if (field) {
        field.value = "";
      }
    });

    enrollmentForm.elements.level.value = "";

    if (checkoutUrl) {
      window.setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 1200);
    }
  });
}

applyContent();
updateCountdown();
setInterval(updateCountdown, 60000);
