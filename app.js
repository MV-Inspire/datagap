const dataCategories = [
  {
    id: "spending",
    name: "Spending preferences",
    section: "General user section",
    reward: 50,
    description: "Purchase categories, budget ranges, brand preferences, and shopping frequency.",
  },
  {
    id: "mobility",
    name: "Mobility patterns",
    section: "General user section",
    reward: 60,
    description: "Commute areas, transport choices, trip frequency, and preferred travel times.",
  },
  {
    id: "digital-preferences",
    name: "Digital preferences",
    section: "General user section",
    reward: 40,
    description: "App interests, content preferences, online service habits, and product feedback.",
  },
  {
    id: "food-dining",
    name: "Food and dining habits",
    section: "General user section",
    reward: 48,
    description: "Cuisine preferences, delivery usage, grocery behavior, and dietary needs.",
  },
  {
    id: "health-wellness",
    name: "Health and wellness interests",
    section: "General user section",
    reward: 58,
    description: "Fitness goals, wellness spending, sleep routines, and preventive-care interests.",
  },
  {
    id: "home-utilities",
    name: "Home and utility usage",
    section: "General user section",
    reward: 52,
    description: "Electricity habits, smart-home devices, internet plans, and household needs.",
  },
  {
    id: "education-skills",
    name: "Education and skills",
    section: "General user section",
    reward: 44,
    description: "Learning goals, course interests, language skills, and training preferences.",
  },
  {
    id: "entertainment",
    name: "Entertainment preferences",
    section: "General user section",
    reward: 38,
    description: "Streaming habits, gaming interests, events, sports, and media preferences.",
  },
  {
    id: "local-services",
    name: "Local service needs",
    section: "General user section",
    reward: 46,
    description: "Demand for salons, repairs, childcare, cleaning, delivery, and community services.",
  },
  {
    id: "surveys",
    name: "Sponsored surveys",
    section: "General user section",
    reward: 35,
    description: "Paid questions from brands, researchers, service providers, and local businesses.",
  },
  {
    id: "camel-health",
    name: "Camel health records",
    section: "Camel farmer section",
    reward: 95,
    description: "Symptoms, vaccines, vet visits, and recovery notes.",
  },
  {
    id: "feeding",
    name: "Feeding and supply usage",
    section: "Camel farmer section",
    reward: 70,
    description: "Feed type, quantity, cost, and supplier availability.",
  },
  {
    id: "milk-production",
    name: "Milk production",
    section: "Camel farmer section",
    reward: 90,
    description: "Daily yield, seasonality, and herd productivity.",
  },
  {
    id: "breeding",
    name: "Breeding records",
    section: "Camel farmer section",
    reward: 85,
    description: "Pregnancy status, lineage, age, and breeding outcomes.",
  },
  {
    id: "environment",
    name: "Environment and grazing",
    section: "Camel farmer section",
    reward: 55,
    description: "Heat, water access, grazing patterns, and weather notes.",
  },
  {
    id: "market-prices",
    name: "Camel market prices",
    section: "Camel farmer section",
    reward: 45,
    description: "Feed prices, milk demand, animal sale ranges, and local market changes.",
  },
  {
    id: "farm-equipment",
    name: "Farm equipment usage",
    section: "Camel farmer section",
    reward: 50,
    description: "Water tanks, shade systems, milking tools, maintenance needs, and equipment costs.",
  },
  {
    id: "stargazing-tourism",
    name: "Stargazing visitor demand",
    section: "Camel farmer section",
    reward: 42,
    description: "Visitor needs, farm-tour interest, parking, timing, hospitality, and local tourism demand.",
  },
];

const buyers = [
  { company: "UAE Retail Insights", type: "Consumer research", purchases: 22, value: 2140 },
  { company: "City Mobility Labs", type: "Transport planning", purchases: 17, value: 1680 },
  { company: "Wellness Market Analytics", type: "Health and lifestyle", purchases: 13, value: 1210 },
  { company: "Local Services Index", type: "SME research", purchases: 10, value: 930 },
  { company: "Al Ain Veterinary Research Lab", type: "Research", purchases: 18, value: 1820 },
  { company: "Desert Feed Supply Co.", type: "Feed supplier", purchases: 14, value: 1360 },
  { company: "Oasis AgriTech Analytics", type: "Agri-tech", purchases: 11, value: 1085 },
  { company: "Camel Milk Products UAE", type: "Food production", purchases: 8, value: 760 },
];

const companyRequests = [
  {
    id: "consumer-spending",
    title: "Anonymous spending preference panel",
    buyer: "UAE Retail Insights",
    fields: "Budget range, purchase categories, shopping channel, frequency",
    price: 2800,
    status: "Aggregated only",
    preview: [
      { farmId: "USER-104", area: "Abu Dhabi", herdSize: "N/A", dataPoint: "Monthly grocery range", detail: "AED 1,500-2,000" },
      { farmId: "USER-119", area: "Al Ain", herdSize: "N/A", dataPoint: "Preferred channel", detail: "Delivery apps and hypermarkets" },
      { farmId: "USER-132", area: "Dubai", herdSize: "N/A", dataPoint: "Top category", detail: "Family dining and groceries" },
    ],
  },
  {
    id: "mobility-demand",
    title: "Daily mobility and transport demand",
    buyer: "City Mobility Labs",
    fields: "Commute method, route type, timing, transport pain points",
    price: 3400,
    status: "Anonymized only",
    preview: [
      { farmId: "USER-207", area: "Al Ain", herdSize: "N/A", dataPoint: "Main commute", detail: "Private car, 25-35 minutes" },
      { farmId: "USER-211", area: "Abu Dhabi", herdSize: "N/A", dataPoint: "Pain point", detail: "Parking availability" },
      { farmId: "USER-229", area: "Dubai", herdSize: "N/A", dataPoint: "Preferred option", detail: "Metro plus ride-hailing" },
    ],
  },
  {
    id: "wellness-demand",
    title: "Health and wellness interest dataset",
    buyer: "Wellness Market Analytics",
    fields: "Fitness interests, wellness spending, sleep routines, service demand",
    price: 2600,
    status: "Aggregated only",
    preview: [
      { farmId: "USER-318", area: "Sharjah", herdSize: "N/A", dataPoint: "Fitness interest", detail: "Low-impact gym classes" },
      { farmId: "USER-322", area: "Al Ain", herdSize: "N/A", dataPoint: "Service demand", detail: "Nutrition consultation" },
      { farmId: "USER-337", area: "Abu Dhabi", herdSize: "N/A", dataPoint: "Budget", detail: "AED 300-500 monthly" },
    ],
  },
  {
    id: "health-trends",
    title: "Al Quaa camel health trend dataset",
    buyer: "Al Ain Veterinary Research Lab",
    fields: "Symptoms, vaccine status, age group, recovery time",
    price: 4200,
    status: "Anonymized only",
    preview: [
      { farmId: "FARM-024", area: "Al Quaa", herdSize: "20-40", dataPoint: "Heat stress", detail: "3 mild cases in 7 days" },
      { farmId: "FARM-031", area: "Al Quaa", herdSize: "40-60", dataPoint: "Vaccination", detail: "PPR vaccine up to date" },
      { farmId: "FARM-044", area: "Al Quaa", herdSize: "10-20", dataPoint: "Recovery", detail: "2-day average recovery" },
    ],
  },
  {
    id: "feed-demand",
    title: "Feed demand and price report",
    buyer: "Desert Feed Supply Co.",
    fields: "Feed type, monthly usage, supplier rating, price range",
    price: 3100,
    status: "Aggregated only",
    preview: [
      { farmId: "FARM-018", area: "Al Quaa", herdSize: "20-40", dataPoint: "Main feed", detail: "Barley and hay mix" },
      { farmId: "FARM-027", area: "Al Quaa", herdSize: "40-60", dataPoint: "Price change", detail: "9% monthly increase" },
      { farmId: "FARM-052", area: "Al Quaa", herdSize: "10-20", dataPoint: "Supplier issue", detail: "Delivery delay reported" },
    ],
  },
  {
    id: "milk-benchmark",
    title: "Milk production benchmark",
    buyer: "Camel Milk Products UAE",
    fields: "Daily yield, herd size, season, area",
    price: 3600,
    status: "Subscription report",
    preview: [
      { farmId: "FARM-012", area: "Al Quaa", herdSize: "20-40", dataPoint: "Daily yield", detail: "5.8L average" },
      { farmId: "FARM-039", area: "Al Quaa", herdSize: "40-60", dataPoint: "Shade access", detail: "11% higher yield" },
      { farmId: "FARM-047", area: "Al Quaa", herdSize: "10-20", dataPoint: "Season trend", detail: "Stable this week" },
    ],
  },
];

const submissions = [
  { id: "sub-0", category: "Spending preferences", date: "2026-06-18", summary: "Monthly grocery and dining budget submitted anonymously", reward: 32, status: "Approved", attachments: [{ name: "monthly-spending-summary.csv", size: "18 KB", type: "text/csv" }] },
  { id: "sub-1", category: "Milk production", date: "2026-06-19", summary: "Average 5.8L/day across 12 milking camels", reward: 48, status: "Approved", attachments: [{ name: "milk-yield-june.xlsx", size: "42 KB", type: "spreadsheet" }] },
  { id: "sub-2", category: "Camel health", date: "2026-06-21", summary: "Two mild heat-stress cases reported", reward: 62, status: "Approved", attachments: [{ name: "vet-note-photo.jpg", size: "1.4 MB", type: "image/jpeg" }] },
  { id: "sub-3", category: "Feeding", date: "2026-06-24", summary: "Barley and hay usage rose 9% this week", reward: 39, status: "Approved", attachments: [] },
  { id: "sub-4", category: "Mobility patterns", date: "2026-06-25", summary: "Daily commute method and timing range submitted", reward: 34, status: "Approved", attachments: [] },
];

const sponsoredSurveys = [
  {
    id: "survey-retail",
    title: "Grocery and delivery preference survey",
    company: "UAE Retail Insights",
    reward: 24,
    question: "Which shopping channel do you use most often each week?",
  },
  {
    id: "survey-mobility",
    title: "Daily commute pain-point survey",
    company: "City Mobility Labs",
    reward: 26,
    question: "What is the biggest problem in your daily commute?",
  },
  {
    id: "survey-feed",
    title: "Feed supplier demand survey",
    company: "Desert Feed Supply Co.",
    reward: 28,
    question: "Which feed type became harder to source this month?",
  },
  {
    id: "survey-stargazing",
    title: "Al Quaa visitor services survey",
    company: "Oasis Community Insights",
    reward: 22,
    question: "What service would help stargazing visitors most?",
  },
];

const storageKey = "datagap-demo-state-v3";

const state = {
  role: "farmer",
  activeView: "overview",
  activeTrack: "general",
  activePreviewId: null,
  authenticated: true,
  consent: new Set(["spending", "mobility", "digital-preferences", "food-dining", "surveys", "camel-health", "feeding", "milk-production"]),
  submissions: [...submissions],
  buyers: buyers.map((buyer) => ({ ...buyer })),
  transactions: [
    { id: "txn-0", date: "2026-06-18", source: "Spending preference submission", amount: 32, status: "Paid" },
    { id: "txn-1", date: "2026-06-19", source: "Milk production submission", amount: 48, status: "Paid" },
    { id: "txn-2", date: "2026-06-21", source: "Camel health submission", amount: 62, status: "Paid" },
    { id: "txn-3", date: "2026-06-24", source: "Feeding submission", amount: 39, status: "Paid" },
    { id: "txn-4", date: "2026-06-25", source: "Mobility pattern submission", amount: 34, status: "Paid" },
  ],
  transferRequests: [],
  datasetRequests: [],
  completedSurveys: [],
  consentAudit: [
    { id: "audit-1", date: "2026-06-19", category: "Milk production", action: "Enabled", actor: "Farmer" },
    { id: "audit-2", date: "2026-06-21", category: "Camel health records", action: "Enabled", actor: "Farmer" },
    { id: "audit-3", date: "2026-06-25", category: "Mobility patterns", action: "Enabled", actor: "User" },
  ],
  deleted: false,
  profile: {
    name: "Everyday User",
    email: "user@datagap.app",
    bank: "AED wallet linked",
    location: "Al Quaa, Al Ain",
  },
};

const titles = {
  overview: "Data Control Center",
  permissions: "Data Permissions",
  submit: "Manual Submission",
  wallet: "Wallet",
  buyers: "Buyer Ranking",
  company: "Company Portal",
  admin: "Admin Review",
  ai: "AI Insights",
  profile: "Profile",
  about: "About DataGap",
};

function money(value) {
  return `AED ${value.toLocaleString("en-AE")}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function newId(prefix) {
  return `${prefix}-${Date.now()}-${Math.round(Math.random() * 1000)}`;
}

function serializeState() {
  return {
    ...state,
    consent: [...state.consent],
  };
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(serializeState()));
}

function loadState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;
  try {
    const saved = JSON.parse(raw);
    Object.assign(state, saved, {
      consent: new Set(saved.consent || []),
      buyers: saved.buyers || buyers.map((buyer) => ({ ...buyer })),
      transactions: saved.transactions || [],
      transferRequests: saved.transferRequests || [],
      datasetRequests: saved.datasetRequests || [],
      completedSurveys: saved.completedSurveys || [],
      consentAudit: saved.consentAudit || [],
    });
  } catch {
    localStorage.removeItem(storageKey);
  }
}

function estimatedMonthlyReward() {
  return dataCategories
    .filter((category) => state.consent.has(category.id))
    .reduce((total, category) => total + category.reward, 0);
}

function earnedBalance() {
  return state.transactions.reduce((total, item) => total + item.amount, 0);
}

function addTransaction(source, amount, status = "Paid") {
  state.transactions.unshift({
    id: newId("txn"),
    date: today(),
    source,
    amount,
    status,
  });
}

function categoryName(id) {
  return dataCategories.find((category) => category.id === id)?.name || id;
}

function formatFileSize(bytes) {
  if (!bytes) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function renderAttachments(attachments = []) {
  if (!attachments.length) return "";
  return `
    <div class="attachment-list">
      ${attachments
        .map(
          (file) => `
          <span class="attachment-pill">
            <strong>${file.name}</strong>
            <small>${file.size}</small>
          </span>
        `,
        )
        .join("")}
    </div>
  `;
}

function addConsentAudit(categoryId, action) {
  state.consentAudit.unshift({
    id: newId("audit"),
    date: today(),
    category: categoryName(categoryId),
    action,
    actor: state.role === "company" ? "Company account" : state.role === "admin" ? "Admin reviewer" : "User",
  });
}

function updateConsent(categoryId, enabled, returnView) {
  if (enabled) {
    state.consent.add(categoryId);
    addConsentAudit(categoryId, "Enabled");
  } else {
    state.consent.delete(categoryId);
    addConsentAudit(categoryId, "Disabled");
  }
  state.deleted = false;
  saveState();
  rerender();
  setView(returnView);
  showToast("Sharing preference updated");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function updateScrolledNavigation() {
  document.body.classList.toggle("nav-scrolled", window.scrollY > 48);
  updateNavIndicator();
}

function updateNavIndicator() {
  const nav = document.querySelector("nav");
  const activeItem = document.querySelector(".nav-item.active");
  if (!nav || !activeItem) return;
  const isCollapsed = document.body.classList.contains("nav-scrolled");
  const indicatorWidth = Math.max(18, activeItem.offsetWidth);
  const indicatorHeight = isCollapsed ? activeItem.offsetHeight : 2;
  const indicatorY = isCollapsed ? activeItem.offsetTop : activeItem.offsetTop + activeItem.offsetHeight - 2;
  nav.style.setProperty("--nav-indicator-x", `${activeItem.offsetLeft}px`);
  nav.style.setProperty("--nav-indicator-y", `${indicatorY}px`);
  nav.style.setProperty("--nav-indicator-w", `${indicatorWidth}px`);
  nav.style.setProperty("--nav-indicator-h", `${indicatorHeight}px`);
}

function setView(view) {
  state.activeView = view;
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  document.querySelector(`#${view}`).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  document.querySelector("#pageTitle").textContent = titles[view];
  window.requestAnimationFrame(updateNavIndicator);
}

function setTrack(track) {
  state.activeTrack = track;
  saveState();
  rerender();
  setView(state.activeView);
  showToast(`${track === "general" ? "Personal" : "Farm"} view selected`);
}

function updateHeader() {
  document.querySelector("#walletBalance").textContent = money(earnedBalance());
  document.querySelector("#consentStatus").textContent = state.deleted
    ? "Data deleted"
    : `${state.consent.size} permissions active`;
  const roleLabel = state.role === "farmer" ? "User" : state.role === "admin" ? "Admin" : "Company";
  document.querySelector("#activeRole").textContent = roleLabel;
  const switchRoleButton = document.querySelector("#switchRole");
  switchRoleButton.textContent = "Change";
  switchRoleButton.setAttribute("aria-label", `Change from ${roleLabel} account`);
  document.querySelectorAll(".track-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.track === state.activeTrack);
  });
}

function renderOverview() {
  const activeCategories = dataCategories.filter((category) => state.consent.has(category.id));
  const overviewGroups = {
    general: {
      eyebrow: "Personal",
      title: "Personal data",
      description: "Useful for retailers, mobility teams, service businesses, wellness brands, and local entrepreneurs.",
      ids: ["spending", "mobility", "digital-preferences", "food-dining", "health-wellness", "local-services"],
    },
    camel: {
      eyebrow: "Al Quaa",
      title: "Farm records",
      description: "Useful for vets, feed suppliers, agri-tech companies, tourism operators, and researchers.",
      ids: ["camel-health", "feeding", "milk-production", "environment", "market-prices", "stargazing-tourism"],
    },
  };
  const selectedGroup = overviewGroups[state.activeTrack] || overviewGroups.general;
  const selectedCategories = selectedGroup.ids.map((id) => dataCategories.find((category) => category.id === id)).filter(Boolean);
  const recentSubmissions = state.submissions.slice(0, 4);
  const pendingCount = state.submissions.filter((item) => (item.status || "Pending review") === "Pending review").length;
  const lastTransaction = state.transactions[0];
  document.querySelector("#overview").innerHTML = `
    <div class="home-grid">
      <article class="card control-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Sharing controls</p>
            <h2>Choose what DataGap can use</h2>
            <p class="muted">Currently showing ${selectedGroup.title.toLowerCase()}. Use the View switch to move between personal and farm data.</p>
          </div>
          <button class="secondary shortcut" type="button" data-shortcut="permissions">All categories</button>
        </div>
        <section class="track-panel active-track-panel">
          <div class="track-head">
            <span>${selectedGroup.eyebrow}</span>
            <strong>${selectedGroup.title}</strong>
            <p>${selectedGroup.description}</p>
          </div>
          <div class="share-list featured-list">
            ${selectedCategories
              .map(
                (category) => `
                <label class="share-card ${state.consent.has(category.id) ? "selected" : ""}">
                  <input type="checkbox" data-home-category="${category.id}" ${state.consent.has(category.id) ? "checked" : ""} />
                  <span>
                    <strong>${category.name}</strong>
                  </span>
                  <em>${money(category.reward)}</em>
                </label>
              `,
              )
              .join("")}
          </div>
        </section>
      </article>

      <aside class="home-side">
        <article class="card balance-card">
          <span>Available balance</span>
          <strong>${money(earnedBalance())}</strong>
          <p>${lastTransaction ? `Latest: ${lastTransaction.source}` : "No wallet activity yet."}</p>
          <button class="primary shortcut" type="button" data-shortcut="wallet">View wallet</button>
        </article>
        <article class="card mini-stack">
          <div>
            <span>Monthly estimate</span>
            <strong>${money(estimatedMonthlyReward())}</strong>
          </div>
          <div>
            <span>Active categories</span>
            <strong>${state.consent.size}</strong>
          </div>
          <div>
            <span>Pending review</span>
            <strong>${pendingCount}</strong>
          </div>
        </article>
      </aside>
    </div>

    <div class="task-strip">
      <button class="task-button shortcut" type="button" data-shortcut="submit">
        <span>Submit new record</span>
        <small>General data, farm data, surveys</small>
      </button>
      <button class="task-button shortcut" type="button" data-shortcut="ai">
        <span>Check insights</span>
        <small>Consumer, mobility, health, feed, milk</small>
      </button>
      <button class="task-button shortcut" type="button" data-shortcut="profile">
        <span>Privacy settings</span>
        <small>Profile, delete data, reset account</small>
      </button>
    </div>

    <div class="grid two">
      <article class="card activity-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Recent activity</p>
            <h2>Records and review status</h2>
          </div>
          <button class="secondary shortcut" type="button" data-shortcut="admin">Review queue</button>
        </div>
        <table class="table compact-table">
          <thead><tr><th>Date</th><th>Record</th><th>Status</th></tr></thead>
          <tbody>
            ${recentSubmissions
              .map(
                (item) => `
                <tr>
                  <td>${item.date}</td>
                  <td>${item.category}<br><span class="small">${item.summary}</span></td>
                  <td><span class="status ${String(item.status || "Pending review").toLowerCase().replaceAll(" ", "-")}">${item.status || "Pending review"}</span></td>
                </tr>
              `,
              )
              .join("")}
          </tbody>
        </table>
      </article>
      <article class="card">
        <p class="eyebrow">Safety checks</p>
        <h2>Your controls</h2>
        <div class="check-list">
          <span>Consent is editable anytime</span>
          <span>Company data is anonymized</span>
          <span>Wallet credits are tracked</span>
          <span>Delete-data control is available</span>
        </div>
      </article>
    </div>
  `;

  document.querySelectorAll(".shortcut").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.shortcut));
  });

  document.querySelectorAll("[data-home-category]").forEach((input) => {
    input.addEventListener("change", (event) => {
      updateConsent(event.target.dataset.homeCategory, event.target.checked, "overview");
    });
  });
}

function renderPermissions() {
  const visibleSection = state.activeTrack === "camel" ? "Camel farmer section" : "General user section";
  const grouped = [visibleSection]
    .map((section) => {
      const items = dataCategories.filter((category) => category.section === section);
      const label = section === "General user section" ? "Personal data" : "Al Quaa farm records";
      return `
        <section class="permission-zone">
          <div class="section-head">
            <div>
              <p class="eyebrow">${section === "General user section" ? "Personal" : "Al Quaa farms"}</p>
              <h2>${label}</h2>
            </div>
            <span class="zone-count">${items.filter((category) => state.consent.has(category.id)).length}/${items.length} active</span>
          </div>
          <div class="permission-list">
          ${items
            .map(
              (category) => `
              <label class="permission-item ${state.consent.has(category.id) ? "selected" : ""}">
                <input type="checkbox" data-category="${category.id}" ${state.consent.has(category.id) ? "checked" : ""} />
                <span>
                  <strong>${category.name}</strong><br />
                  <span class="muted">${category.description}</span>
                </span>
                <span class="reward">${money(category.reward)}/mo</span>
              </label>
            `,
            )
            .join("")}
          </div>
        </section>
      `;
    })
    .join("");

  document.querySelector("#permissions").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Consent center</p>
        <h2>Choose exactly what can be shared</h2>
        <p>Currently showing ${state.activeTrack === "camel" ? "Al Quaa farm" : "personal"} categories. Use the View switch above to change tracks.</p>
      </div>
      <aside>
        <span>Estimated monthly value</span>
        <strong>${money(estimatedMonthlyReward())}</strong>
      </aside>
    </div>
    <div class="card consent-shell">
      ${grouped}
    </div>
  `;

  document.querySelectorAll("[data-category]").forEach((input) => {
    input.addEventListener("change", (event) => {
      updateConsent(event.target.dataset.category, event.target.checked, "permissions");
    });
  });
}

function renderSubmit() {
  const availableSurveys = sponsoredSurveys.filter((survey) => !state.completedSurveys.includes(survey.id));
  document.querySelector("#submit").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Capture station</p>
        <h2>Add a record or complete a paid task</h2>
        <p>Submissions go into review first, then become eligible for anonymized reports and revenue share.</p>
      </div>
      <aside>
        <span>Records submitted</span>
        <strong>${state.submissions.length}</strong>
      </aside>
    </div>

    <div class="capture-grid">
      <form class="card composer-card" id="submissionForm">
        <div class="section-head">
          <div>
            <p class="eyebrow">Manual record</p>
            <h2>Submit data</h2>
          </div>
          <span class="status pending-review">Review required</span>
        </div>
        <div class="form-grid">
          <label>Category
            <select name="category">
              <option>General spending preferences</option>
              <option>Mobility patterns</option>
              <option>Digital preferences</option>
              <option>Food and dining habits</option>
              <option>Health and wellness interests</option>
              <option>Home and utility usage</option>
              <option>Education and skills</option>
              <option>Entertainment preferences</option>
              <option>Local service needs</option>
              <option>General survey response</option>
              <option>Camel health</option>
              <option>Feeding</option>
              <option>Milk production</option>
              <option>Breeding</option>
              <option>Environment</option>
              <option>Camel market prices</option>
              <option>Farm equipment usage</option>
              <option>Stargazing visitor demand</option>
              <option>Survey response</option>
            </select>
          </label>
          <label>Date
            <input name="date" type="date" value="2026-06-26" />
          </label>
          <label class="full">Summary
            <textarea name="summary" placeholder="Example: I usually order groceries online twice per week, or 3 camels showed mild heat-stress symptoms after midday grazing."></textarea>
          </label>
          <label class="full file-drop">Attach supporting files
            <input name="attachments" type="file" multiple accept=".csv,.xlsx,.xls,.pdf,.jpg,.jpeg,.png,.webp,.txt" />
            <span>Optional: upload receipts, survey exports, vet notes, photos, spreadsheets, or PDFs.</span>
          </label>
        </div>
        <button class="primary submit-record-button" type="submit">Submit record</button>
      </form>

      <aside class="card task-panel">
        <p class="eyebrow">Sponsored tasks</p>
        <h2>Available surveys</h2>
        ${
          availableSurveys.length
            ? availableSurveys
                .map(
                  (survey) => `
                  <article class="survey-card task-card">
                    <div>
                      <h3>${survey.title}</h3>
                      <p class="muted">${survey.company}</p>
                    </div>
                    <p>${survey.question}</p>
                    <button class="secondary complete-survey" type="button" data-survey="${survey.id}">Earn ${money(survey.reward)}</button>
                  </article>
                `,
                )
                .join("")
            : `<p class="muted">All sponsored surveys are completed for this account.</p>`
        }
      </aside>
    </div>

    <div class="feed-list">
      <div class="section-head">
        <div>
          <p class="eyebrow">Submission feed</p>
          <h2>Recent records</h2>
        </div>
      </div>
      ${state.submissions
        .slice(0, 8)
        .map(
          (item) => `
          <article class="feed-item">
            <div>
              <strong>${item.category}</strong>
              <p>${item.summary}</p>
              ${renderAttachments(item.attachments)}
            </div>
            <div class="feed-meta">
              <span>${item.date}</span>
              <span class="status ${String(item.status || "Pending review").toLowerCase().replaceAll(" ", "-")}">${item.status || "Pending review"}</span>
              <em>${money(item.reward)}</em>
            </div>
          </article>
        `,
        )
        .join("")}
    </div>
  `;

  document.querySelector("#submissionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const category = String(form.get("category"));
    const summary = String(form.get("summary")).trim() || "New approved farm record submitted.";
    const reward = category.includes("health") ? 64 : category.includes("Milk") ? 52 : 38;
    const files = Array.from(event.target.elements.attachments.files || []).map((file) => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type || "file",
    }));
    state.submissions.unshift({
      id: newId("sub"),
      category,
      date: String(form.get("date")),
      summary,
      reward,
      status: "Pending review",
      attachments: files,
    });
    addTransaction(`${category} submission`, reward);
    state.deleted = false;
    saveState();
    rerender();
    setView("submit");
    showToast(`Submission saved. Estimated reward: ${money(reward)}`);
  });

  document.querySelectorAll(".complete-survey").forEach((button) => {
    button.addEventListener("click", () => {
      const survey = sponsoredSurveys.find((item) => item.id === button.dataset.survey);
      if (!survey) return;
      state.completedSurveys.push(survey.id);
      state.submissions.unshift({
        id: newId("sub"),
        category: "Sponsored survey",
        date: today(),
        summary: `${survey.title} completed for ${survey.company}`,
        reward: survey.reward,
        attachments: [],
      });
      addTransaction(`Survey reward: ${survey.title}`, survey.reward);
      state.deleted = false;
      saveState();
      rerender();
      setView("submit");
      showToast(`Survey completed. Reward added: ${money(survey.reward)}`);
    });
  });
}

function renderWallet() {
  const total = earnedBalance();
  document.querySelector("#wallet").innerHTML = `
    <div class="wallet-layout">
      <article class="card balance-card wallet-hero">
        <span>Available balance</span>
        <strong>${money(total)}</strong>
        <p>Credits from submissions, surveys, and company revenue share.</p>
        <button class="secondary" type="button" id="transferFunds">Request transfer</button>
      </article>
      <article class="card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Reward mix</p>
            <h2>Category value</h2>
          </div>
          <span class="zone-count">${state.transferRequests.length} transfer request(s)</span>
        </div>
        ${dataCategories
          .filter((category) => state.consent.has(category.id))
          .map((category) => {
            const width = Math.max(12, Math.round((category.reward / 95) * 100));
            return `<p><strong>${category.name}</strong> <span class="reward">${money(category.reward)}</span></p><div class="bar"><span style="width:${width}%"></span></div>`;
          })
          .join("")}
      </article>
    </div>

    <div class="feed-list">
      <div class="section-head">
        <div>
          <p class="eyebrow">Ledger</p>
          <h2>Money movement</h2>
        </div>
      </div>
      ${state.transactions
        .map(
          (item) => `
          <article class="feed-item money-item">
            <div>
              <strong>${item.source}</strong>
              <p>${item.date} · ${item.status}</p>
            </div>
            <em>${money(item.amount)}</em>
          </article>
        `,
        )
        .join("")}
    </div>

    ${
      state.transferRequests.length
        ? `
          <div class="feed-list">
            <div class="section-head">
              <div>
                <p class="eyebrow">Payouts</p>
                <h2>Transfer requests</h2>
              </div>
            </div>
            ${state.transferRequests
              .map(
                (request) => `
                <article class="feed-item money-item">
                  <div>
                    <strong>Bank transfer request</strong>
                    <p>${request.date} · ${request.status}</p>
                  </div>
                  <em>${money(request.amount)}</em>
                </article>
              `,
              )
              .join("")}
          </div>
        `
        : ""
    }
  `;
  document.querySelector("#transferFunds").addEventListener("click", () => {
    state.transferRequests.unshift({
      id: newId("transfer"),
      date: today(),
      amount: total,
      status: "Pending review",
    });
    saveState();
    rerender();
    setView("wallet");
    showToast("Transfer request recorded");
  });
}

function renderBuyers() {
  document.querySelector("#buyers").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Demand signal</p>
        <h2>Who uses the anonymized data?</h2>
        <p>Buyers are ranked by purchases and value generated for the marketplace.</p>
      </div>
    </div>
    <div class="buyer-grid">
      ${state.buyers
        .sort((a, b) => b.value - a.value)
        .map(
          (buyer, index) => `
          <article class="buyer-card">
            <span>#${index + 1}</span>
            <h2>${buyer.company}</h2>
            <p>${buyer.type}</p>
            <div>
              <strong>${buyer.purchases}</strong><small>purchases</small>
              <strong>${money(buyer.value)}</strong><small>value</small>
            </div>
          </article>
        `,
        )
        .join("")}
    </div>
  `;
}

function renderCompany() {
  const selectedPreview = companyRequests.find((request) => request.id === state.activePreviewId);
  document.querySelector("#company").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Marketplace</p>
        <h2>Buy anonymized local data products</h2>
        <p>Companies see only aggregated or anonymized rows. Direct farmer identity is never shown.</p>
      </div>
      <aside>
        <span>Products</span>
        <strong>${companyRequests.length}</strong>
      </aside>
    </div>

    <div class="dataset-grid">
      ${companyRequests
        .map(
          (request) => `
          <article class="dataset-card ${state.activePreviewId === request.id ? "selected-dataset" : ""}">
            <div>
              <span class="status approved">${request.status}</span>
              <h2>${request.title}</h2>
              <p>${request.fields}</p>
            </div>
            <strong>${money(request.price)}</strong>
            <div class="dataset-actions">
              <button class="secondary preview-product" type="button" data-preview="${request.id}">Preview rows</button>
              <button class="primary request-product" type="button" data-request="${request.id}">Buy access</button>
            </div>
          </article>
        `,
        )
        .join("")}
      <article class="dataset-card subscription-card">
        <div>
          <span class="status pending-review">Subscription</span>
          <h2>Custom insight request</h2>
          <p>Request a consent-based report built from approved anonymized marketplace data, with direct identifiers removed before delivery.</p>
        </div>
        <button class="primary" type="button" id="requestDataset">Request dataset</button>
      </article>
    </div>

    <article class="card dataset-preview" id="datasetPreview">
      <div class="section-head">
        <div>
          <p class="eyebrow">Preview</p>
          <h2>${selectedPreview ? selectedPreview.title : "Anonymized Dataset Preview"}</h2>
          <p class="muted">${selectedPreview ? "Direct identifiers are removed before company access." : "Select a dataset preview to verify that company-facing data hides names, phone numbers, exact locations, and direct personal identifiers."}</p>
        </div>
        ${selectedPreview ? `<span class="status approved">${selectedPreview.status}</span>` : `<span class="status">Waiting</span>`}
      </div>
      ${
        selectedPreview
          ? `
            <div class="table-wrap">
              <table class="table">
                <thead><tr><th>Anonymous ID</th><th>Area</th><th>Segment</th><th>Data Point</th><th>Detail</th></tr></thead>
                <tbody>
                  ${selectedPreview.preview
                    .map(
                      (row) => `
                      <tr>
                        <td>${row.farmId}</td>
                        <td>${row.area}</td>
                        <td>${row.herdSize}</td>
                        <td>${row.dataPoint}</td>
                        <td>${row.detail}</td>
                      </tr>
                    `,
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          `
          : `
            <div class="empty-preview">
              <strong>No preview selected</strong>
              <p>Choose “Preview rows” on any product above. The preview will appear here and remain visible while you inspect it.</p>
            </div>
          `
      }
    </article>

    <div class="feed-list">
      <div class="section-head">
        <div>
          <p class="eyebrow">Request log</p>
          <h2>Company purchases</h2>
        </div>
      </div>
      ${
        state.datasetRequests.length
          ? state.datasetRequests
              .map(
                (item) => `
                <article class="feed-item money-item">
                  <div>
                    <strong>${item.title}</strong>
                    <p>${item.company} · ${item.date}</p>
                  </div>
                  <em>${money(item.farmerShare)}</em>
                </article>
              `,
              )
              .join("")
          : `<article class="feed-item"><p class="muted">No company purchases have been recorded yet.</p></article>`
      }
    </div>
  `;

  document.querySelectorAll(".preview-product").forEach((button) => {
    button.addEventListener("click", () => {
      const request = companyRequests.find((item) => item.id === button.dataset.preview);
      if (!request) return;
      state.activePreviewId = request.id;
      saveState();
      rerender();
      setView("company");
      window.requestAnimationFrame(() => {
        document.querySelector("#datasetPreview")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      showToast("Anonymized preview loaded");
    });
  });

  document.querySelectorAll(".request-product").forEach((button) => {
    button.addEventListener("click", () => {
      const request = companyRequests.find((item) => item.id === button.dataset.request);
      if (!request) return;
      const farmerShare = Math.round(request.price * 0.08);
      const buyer = state.buyers.find((item) => item.company === request.buyer);
      if (buyer) {
        buyer.purchases += 1;
        buyer.value += request.price;
      }
      state.datasetRequests.unshift({
        id: newId("dataset"),
        date: today(),
        company: request.buyer,
        title: request.title,
        farmerShare,
      });
      addTransaction(`Revenue share: ${request.title}`, farmerShare);
      saveState();
      rerender();
      setView("company");
      showToast(`Dataset access sold. Farmer share added: ${money(farmerShare)}`);
    });
  });

  document.querySelector("#requestDataset").addEventListener("click", () => {
    state.datasetRequests.unshift({
      id: newId("dataset"),
      date: today(),
      company: "Company Workspace",
      title: "Custom anonymized insight request",
      farmerShare: 75,
    });
    addTransaction("Revenue share: custom company request", 75);
    saveState();
    rerender();
    setView("company");
    showToast("Custom dataset request recorded");
  });
}

function renderAdmin() {
  const pendingCount = state.submissions.filter((item) => (item.status || "Pending review") === "Pending review").length;
  const approvedCount = state.submissions.filter((item) => item.status === "Approved").length;
  const rejectedCount = state.submissions.filter((item) => item.status === "Rejected").length;
  document.querySelector("#admin").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Trust operations</p>
        <h2>Review data before it enters the marketplace</h2>
        <p>Submitted records are approved or rejected before they can influence anonymized datasets.</p>
      </div>
      <aside>
        <span>Pending</span>
        <strong>${pendingCount}</strong>
      </aside>
    </div>

    <div class="grid three">
      <article class="card metric"><span>Pending review</span><strong>${pendingCount}</strong><p class="muted">Waiting for admin decision.</p></article>
      <article class="card metric"><span>Approved</span><strong>${approvedCount}</strong><p class="muted">Allowed for anonymized insight.</p></article>
      <article class="card metric"><span>Rejected</span><strong>${rejectedCount}</strong><p class="muted">Blocked from marketplace use.</p></article>
    </div>

    <div class="review-board">
      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Queue</p>
            <h2>Submitted records</h2>
          </div>
        </div>
          ${
            state.submissions.length
              ? state.submissions
                  .map(
                    (item) => `
                    <article class="review-card">
                      <div>
                        <span class="small">${item.date}</span>
                        <h3>${item.category}</h3>
                        <p>${item.summary}</p>
                        ${renderAttachments(item.attachments)}
                        <span class="status ${String(item.status || "Pending review").toLowerCase().replaceAll(" ", "-")}">${item.status || "Pending review"}</span>
                      </div>
                      <div class="review-actions">
                        <button class="secondary review-action" type="button" data-id="${item.id}" data-status="Approved">Approve</button>
                        <button class="danger review-action" type="button" data-id="${item.id}" data-status="Rejected">Reject</button>
                      </div>
                    </article>
                  `,
                  )
                  .join("")
              : `<article class="review-card"><p class="muted">No submitted records remain after deletion.</p></article>`
          }
      </section>
      <aside class="card audit-panel">
        <p class="eyebrow">Audit trail</p>
        <h2>Consent changes</h2>
          ${
            state.consentAudit.length
              ? state.consentAudit
                  .slice(0, 8)
                  .map(
                    (item) => `
                    <div class="audit-item">
                      <span>${item.date}</span>
                      <strong>${item.action}</strong>
                      <p>${item.category}<br><small>${item.actor}</small></p>
                    </div>
                  `,
                  )
                  .join("")
              : `<p class="muted">No consent events recorded yet.</p>`
          }
      </aside>
    </div>
  `;

  document.querySelectorAll(".review-action").forEach((button) => {
    button.addEventListener("click", () => {
      const submission = state.submissions.find((item) => item.id === button.dataset.id);
      if (!submission) return;
      submission.status = button.dataset.status;
      saveState();
      rerender();
      setView("admin");
      showToast(`Submission marked ${submission.status.toLowerCase()}`);
    });
  });
}

function renderAI() {
  const milkActive = state.consent.has("milk-production");
  const healthActive = state.consent.has("camel-health");
  const feedingActive = state.consent.has("feeding");
  const spendingActive = state.consent.has("spending");
  const mobilityActive = state.consent.has("mobility");
  const wellnessActive = state.consent.has("health-wellness");
  document.querySelector("#ai").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Intelligence report</p>
        <h2>Signals from both general users and camel farmers</h2>
        <p>Insights are generated from approved consented records and anonymized marketplace activity.</p>
      </div>
    </div>
    <div class="insight-grid">
      <article class="card insight">
        <h3>Consumer Demand Signal</h3>
        <p>${spendingActive ? "Grocery delivery and family dining appear as the strongest weekly spending categories across approved user records." : "Enable spending preferences to generate consumer demand signals."}</p>
      </article>
      <article class="card insight ${mobilityActive ? "warning" : ""}">
        <h3>Mobility Pain Point</h3>
        <p>${mobilityActive ? "Parking availability and peak-hour travel time are the most repeated commute issues in the general user dataset." : "Enable mobility patterns to identify transport pain points."}</p>
      </article>
      <article class="card insight">
        <h3>Wellness Opportunity</h3>
        <p>${wellnessActive ? "Nutrition consultation and low-impact fitness classes show strong interest among health-conscious users." : "Enable health and wellness interests to unlock lifestyle opportunity signals."}</p>
      </article>
      <article class="card insight ${healthActive ? "risk" : ""}">
        <h3>Camel Health Risk</h3>
        <p>${healthActive ? "Heat-stress reports increased in the last 7 days. Recommend earlier grazing and additional water checks." : "Enable camel health records to generate health risk signals."}</p>
      </article>
      <article class="card insight ${feedingActive ? "warning" : ""}">
        <h3>Camel Feed Cost</h3>
        <p>${feedingActive ? "Barley usage is up 9%. Nearby farms report lower cost using mixed hay suppliers." : "Enable feeding data to compare cost efficiency."}</p>
      </article>
      <article class="card insight">
        <h3>Milk Production Trend</h3>
        <p>${milkActive ? "Average yield is stable at 5.8L/day, but two farms with shade access perform 11% better." : "Enable milk production data to calculate yield trends."}</p>
      </article>
    </div>
    <article class="card report-card">
      <p class="eyebrow">Insight coverage</p>
      <h2>Available analysis tools</h2>
      <p>Use demand signals, segmentation, forecasting, anomaly checks, farm benchmarking, and buyer reports to understand approved anonymized datasets.</p>
    </article>
  `;
}

function renderProfile() {
  document.querySelector("#profile").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">Account control</p>
        <h2>Profile, role, wallet identity, and privacy controls</h2>
        <p>Manage your account details, payout status, access type, and privacy controls.</p>
      </div>
      <aside>
        <span>Current role</span>
        <strong>${state.role === "farmer" ? "User" : state.role === "company" ? "Company" : "Admin"}</strong>
      </aside>
    </div>
    <div class="profile-layout">
      <form class="card profile-panel" id="profileForm">
        <div class="section-head">
          <div>
            <p class="eyebrow">Identity</p>
            <h2>Account details</h2>
          </div>
          <span class="status approved">Authenticated</span>
        </div>
        <div class="form-grid">
          <label>Name
            <input name="name" value="${state.profile.name}" />
          </label>
          <label>Email
            <input name="email" type="email" value="${state.profile.email}" />
          </label>
          <label>Account type
            <select name="role">
              <option value="farmer" ${state.role === "farmer" ? "selected" : ""}>Farmer / Customer</option>
              <option value="company" ${state.role === "company" ? "selected" : ""}>Company</option>
              <option value="admin" ${state.role === "admin" ? "selected" : ""}>Admin Reviewer</option>
            </select>
          </label>
          <label>Location
            <input name="location" value="${state.profile.location}" />
          </label>
          <label class="full">Bank / wallet status
            <input name="bank" value="${state.profile.bank}" />
          </label>
        </div>
        <button class="primary" type="submit">Save profile</button>
      </form>
      <aside class="profile-side">
        <article class="card account-card">
          <p class="eyebrow">Access model</p>
          <h2>Access types</h2>
          <div class="check-list">
            <span>User controls consent and earnings.</span>
            <span>Company buys anonymized datasets.</span>
            <span>Admin reviews records before marketplace use.</span>
          </div>
        </article>
        <article class="card danger-zone">
          <p class="eyebrow">Privacy control</p>
          <h2>Delete or reset account data</h2>
          <p class="muted">Delete clears consent, submissions, wallet activity, surveys, and request history. Reset restores the starting account state.</p>
          <div class="privacy-actions">
            <button class="danger" type="button" id="deleteData">Delete all my data</button>
            <button class="secondary" type="button" id="resetDemo">Reset account</button>
          </div>
        </article>
      </aside>
    </div>
  `;

  document.querySelector("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    state.profile = {
      name: String(form.get("name")),
      email: String(form.get("email")),
      location: String(form.get("location")),
      bank: String(form.get("bank")),
    };
    state.role = String(form.get("role"));
    state.authenticated = true;
    saveState();
    rerender();
    setView("profile");
    showToast("Profile saved");
  });

  document.querySelector("#deleteData").addEventListener("click", () => {
    state.consent.clear();
    state.submissions = [];
    state.transactions = [];
    state.transferRequests = [];
    state.datasetRequests = [];
    state.completedSurveys = [];
    state.consentAudit = [];
    state.deleted = true;
    saveState();
    rerender();
    setView("profile");
    showToast("All account data deleted");
  });

  document.querySelector("#resetDemo").addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    window.location.reload();
  });
}

function renderAbout() {
  document.querySelector("#about").innerHTML = `
    <div class="page-intro">
      <div>
        <p class="eyebrow">About</p>
        <h2>DataGap is built around consent, local value, and useful intelligence</h2>
        <p>Choose what to share, understand how your data is used, and keep control of the value created from it.</p>
      </div>
    </div>
    <div class="about-grid">
      <article class="card about-card">
        <span>01</span>
        <h2>Personal Data</h2>
        <p>Users choose which personal categories they are willing to share, see estimated compensation, monitor earnings, complete surveys, and delete their data at any time.</p>
      </article>
      <article class="card about-card featured">
        <span>02</span>
        <h2>Al Quaa Farm Records</h2>
        <p>Farmers can submit and monetize local records such as herd health, feeding, milk production, veterinary visits, heat stress, and market prices.</p>
      </article>
      <article class="card about-card">
        <span>03</span>
        <h2>Why companies use it</h2>
        <p>Companies get cleaner, consented, anonymized datasets and optional AI reports instead of relying on invasive tracking or weak assumptions.</p>
      </article>
    </div>
  `;
}

function rerender() {
  updateHeader();
  renderOverview();
  renderPermissions();
  renderSubmit();
  renderWallet();
  renderBuyers();
  renderCompany();
  renderAdmin();
  renderAI();
  renderProfile();
  renderAbout();
}

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelectorAll(".track-option").forEach((button) => {
  button.addEventListener("click", () => setTrack(button.dataset.track));
});

document.querySelector("#switchRole").addEventListener("click", () => {
  state.role = state.role === "farmer" ? "company" : state.role === "company" ? "admin" : "farmer";
  saveState();
  setView(state.role === "company" ? "company" : state.role === "admin" ? "admin" : "overview");
  rerender();
  showToast(`Switched to ${state.role === "farmer" ? "user" : state.role} account`);
});

window.addEventListener("scroll", updateScrolledNavigation, { passive: true });
window.addEventListener("resize", updateNavIndicator);

loadState();
rerender();
setView("overview");
updateScrolledNavigation();
updateNavIndicator();
