const translations = {
  no: {
    appTitle: "Søknadsoversikt",
    appSubtitle: "Hold oversikt over jobber, praksisplasser og studentstillinger.",
    total: "Totalt",
    waiting: "Venter",
    interview: "Intervju",
    rejected: "Avslag",
    addApplication: "Legg til søknad",
    save: "Lagre søknad",
    applications: "Mine søknader",

    companyPlaceholder: "Bedrift",
    positionPlaceholder: "Stilling",
    contactPlaceholder: "Kontaktperson",
    emailPlaceholder: "E-post",
    linkPlaceholder: "Lenke til stilling",
    notesPlaceholder: "Notater",
    searchPlaceholder: "Søk etter bedrift eller stilling...",

    typeOptions: ["Jobb", "Praksis", "Studentstilling", "Trainee"],
    statusOptions: ["Ikke sendt", "Sendt", "Venter på svar", "Intervju", "Avslag", "Tilbud"],
    allStatuses: "Alle statuser"
  },

  en: {
    appTitle: "Job Application Tracker",
    appSubtitle: "Keep track of jobs, internships and student positions.",
    total: "Total",
    waiting: "Waiting",
    interview: "Interview",
    rejected: "Rejected",
    addApplication: "Add application",
    save: "Save application",
    applications: "My applications",

    companyPlaceholder: "Company",
    positionPlaceholder: "Position",
    contactPlaceholder: "Contact person",
    emailPlaceholder: "Email",
    linkPlaceholder: "Job link",
    notesPlaceholder: "Notes",
    searchPlaceholder: "Search by company or position...",

    typeOptions: ["Job", "Internship", "Student position", "Trainee"],
    statusOptions: ["Not sent", "Sent", "Waiting for response", "Interview", "Rejected", "Offer"],
    allStatuses: "All statuses"
  }
};

function setLanguage(language) {
  const text = translations[language];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = text[key];
  });

  document.getElementById("company").placeholder = text.companyPlaceholder;
  document.getElementById("position").placeholder = text.positionPlaceholder;
  document.getElementById("contact").placeholder = text.contactPlaceholder;
  document.getElementById("email").placeholder = text.emailPlaceholder;
  document.getElementById("link").placeholder = text.linkPlaceholder;
  document.getElementById("notes").placeholder = text.notesPlaceholder;
  document.getElementById("search").placeholder = text.searchPlaceholder;

  const typeSelect = document.getElementById("type");
  for (let i = 0; i < typeSelect.options.length; i++) {
    typeSelect.options[i].textContent = text.typeOptions[i];
  }

  const statusSelect = document.getElementById("status");
  for (let i = 0; i < statusSelect.options.length; i++) {
    statusSelect.options[i].textContent = text.statusOptions[i];
  }

  const statusFilter = document.getElementById("status-filter");
  statusFilter.options[0].textContent = text.allStatuses;

  for (let i = 1; i < statusFilter.options.length; i++) {
    statusFilter.options[i].textContent = text.statusOptions[i - 1];
  }

  document.getElementById("btn-no").classList.toggle("active", language === "no");
  document.getElementById("btn-en").classList.toggle("active", language === "en");

  localStorage.setItem("language", language);

  if (typeof renderApplications === "function") {
    renderApplications();
  }

  const submitButton = document.getElementById("submit-btn");
  if (submitButton && typeof getButtonText === "function") {
    submitButton.textContent = getButtonText("save");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "no";

  setLanguage(savedLanguage);

  document.getElementById("btn-no").addEventListener("click", () => {
    setLanguage("no");
  });

  document.getElementById("btn-en").addEventListener("click", () => {
    setLanguage("en");
  });
});