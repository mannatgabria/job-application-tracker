const STORAGE_KEY = "jobApplications";

function getApplicationsFromStorage() {
  const applications = localStorage.getItem(STORAGE_KEY);
  return applications ? JSON.parse(applications) : [];
}

function saveApplicationsToStorage(applications) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
}
