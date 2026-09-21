let applications = getApplicationsFromStorage();
let editingApplicationId = null;

const form = document.getElementById("application-form");
const applicationsList = document.getElementById("applications-list");
const searchInput = document.getElementById("search");
const statusFilter = document.getElementById("status-filter");
const submitButton = document.getElementById("submit-btn");
const cancelEditButton = document.getElementById("cancel-edit-btn");

function getCurrentLanguage() {
  return localStorage.getItem("language") || "no";
}

function getButtonText(type) {
  const language = getCurrentLanguage();

  const buttonTexts = {
    no: {
      edit: "Rediger",
      delete: "Slett",
      noApplications: "Ingen søknader funnet.",
      type: "Type",
      status: "Status",
      deadline: "Frist",
      contact: "Kontakt",
      email: "E-post",
      notes: "Notater",
      notSet: "Ikke satt",
      noNotes: "Ingen notater",
      save: "Lagre søknad",
      update: "Oppdater søknad"
    },
    en: {
      edit: "Edit",
      delete: "Delete",
      noApplications: "No applications found.",
      type: "Type",
      status: "Status",
      deadline: "Deadline",
      contact: "Contact",
      email: "Email",
      notes: "Notes",
      notSet: "Not set",
      noNotes: "No notes",
      save: "Save application",
      update: "Update application"
    }
  };

  return buttonTexts[language][type];
}

function getStatusClass(status) {
  if (status === "Ikke sendt") {
    return "status-not-sent";
  }

  if (status === "Sendt") {
    return "status-sent";
  }

  if (status === "Venter på svar") {
    return "status-waiting";
  }

  if (status === "Intervju") {
    return "status-interview";
  }

  if (status === "Avslag") {
    return "status-rejected";
  }

  if (status === "Tilbud") {
    return "status-offer";
  }

  return "";
}

function getFormData() {
  return {
    company: document.getElementById("company").value.trim(),
    position: document.getElementById("position").value.trim(),
    type: document.getElementById("type").value,
    status: document.getElementById("status").value,
    deadline: document.getElementById("deadline").value,
    contact: document.getElementById("contact").value.trim(),
    email: document.getElementById("email").value.trim(),
    link: document.getElementById("link").value.trim(),
    notes: document.getElementById("notes").value.trim()
  };
}

function createApplicationFromForm() {
  return {
    id: Date.now(),
    ...getFormData(),
    dateApplied: new Date().toISOString().split("T")[0]
  };
}

function fillForm(application) {
  document.getElementById("company").value = application.company;
  document.getElementById("position").value = application.position;
  document.getElementById("type").value = application.type;
  document.getElementById("status").value = application.status;
  document.getElementById("deadline").value = application.deadline;
  document.getElementById("contact").value = application.contact;
  document.getElementById("email").value = application.email;
  document.getElementById("link").value = application.link;
  document.getElementById("notes").value = application.notes;
}

function clearForm() {
  form.reset();
  editingApplicationId = null;
  submitButton.textContent = getButtonText("save");
  cancelEditButton.classList.add("hidden");
}

function renderApplications() {
  const searchText = searchInput.value.toLowerCase();
  const selectedStatus = statusFilter.value;

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(searchText) ||
      application.position.toLowerCase().includes(searchText);

    const matchesStatus =
      selectedStatus === "Alle" || application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  applicationsList.innerHTML = "";

  if (filteredApplications.length === 0) {
    applicationsList.innerHTML = `<p class="empty-message">${getButtonText("noApplications")}</p>`;
    return;
  }

  filteredApplications.forEach((application) => {
    const card = document.createElement("div");
    card.className = "application-card";

    card.innerHTML = `
      <div class="application-header">
        <h3>${application.company} - ${application.position}</h3>
        <span class="status-badge ${getStatusClass(application.status)}">${application.status}</span>
      </div>

      <p><strong>${getButtonText("type")}:</strong> ${application.type}</p>
      <p><strong>${getButtonText("deadline")}:</strong> ${application.deadline || getButtonText("notSet")}</p>
      <p><strong>${getButtonText("contact")}:</strong> ${application.contact || getButtonText("notSet")}</p>
      <p><strong>${getButtonText("email")}:</strong> ${application.email || getButtonText("notSet")}</p>
      <p><strong>${getButtonText("notes")}:</strong> ${application.notes || getButtonText("noNotes")}</p>

      <div class="card-actions">
        <button class="edit-btn" onclick="editApplication(${application.id})">${getButtonText("edit")}</button>
        <button class="delete-btn" onclick="deleteApplication(${application.id})">${getButtonText("delete")}</button>
      </div>
    `;

    applicationsList.appendChild(card);
  });
}

function updateDashboard() {
  document.getElementById("total-count").textContent = applications.length;

  document.getElementById("waiting-count").textContent = applications.filter(
    (application) => application.status === "Venter på svar"
  ).length;

  document.getElementById("interview-count").textContent = applications.filter(
    (application) => application.status === "Intervju"
  ).length;

  document.getElementById("rejected-count").textContent = applications.filter(
    (application) => application.status === "Avslag"
  ).length;
}

function editApplication(id) {
  const application = applications.find((application) => application.id === id);

  if (!application) {
    return;
  }

  editingApplicationId = id;
  fillForm(application);

  submitButton.textContent = getButtonText("update");
  cancelEditButton.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateApplication() {
  applications = applications.map((application) => {
    if (application.id === editingApplicationId) {
      return {
        ...application,
        ...getFormData()
      };
    }

    return application;
  });

  saveApplicationsToStorage(applications);
  clearForm();
  updateDashboard();
  renderApplications();
}

function deleteApplication(id) {
  applications = applications.filter((application) => application.id !== id);

  saveApplicationsToStorage(applications);
  updateDashboard();
  renderApplications();

  if (editingApplicationId === id) {
    clearForm();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (editingApplicationId) {
    updateApplication();
  } else {
    const newApplication = createApplicationFromForm();
    applications.push(newApplication);

    saveApplicationsToStorage(applications);
    clearForm();
    updateDashboard();
    renderApplications();
  }
});

cancelEditButton.addEventListener("click", () => {
  clearForm();
});

searchInput.addEventListener("input", renderApplications);
statusFilter.addEventListener("change", renderApplications);

submitButton.textContent = getButtonText("save");
updateDashboard();
renderApplications();