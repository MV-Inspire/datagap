<div align="center">

# 🚀 DataGap

### Ethical Data Marketplace & Insight Platform

**Challenge 3 – The Data Gap for Local Entrepreneurs**

*Solutions for Rural Communities • Al Quaa, Al Ain, UAE*

<br>

![Prototype](https://img.shields.io/badge/Prototype-Working-success?style=for-the-badge)
![Frontend](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-blue?style=for-the-badge)
![Storage](https://img.shields.io/badge/Storage-localStorage-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Demo-green?style=for-the-badge)

</div>

---

> [!NOTE]
> **DataGap** is an ethical data marketplace where users voluntarily share data, receive rewards, and retain full control over their privacy. Companies purchase anonymized insights instead of personal information.

---

# 🔴 Challenge

**Challenge:** Challenge 3 - The data gap for local entrepreneurs

**Track:** Solutions for rural communities

**Community Focus:** Al Quaa, Al Ain, UAE

**Prototype Type:** Fully working demo simulation

---

# 🌍 Problem

Local entrepreneurs often make decisions without reliable local data. They may not know what people need, what customers are asking for, what products are in demand, or which problems are common in their own community.

In Al Quaa, this matters because many families run camel farms as a source of income. Camel farmers generate useful data every day, including health issues, feed demand, milk production, breeding records, environmental conditions, and market prices. That data could help entrepreneurs, vets, feed suppliers, researchers, and agri-tech companies make better decisions, but it is currently scattered and informal.

---

# 💡 Solution

DataGap is an ethical data marketplace and insight platform. Users choose what data they want to share, see estimated rewards, submit records or surveys, and can delete their data. Companies and entrepreneurs access anonymized or aggregated insights instead of private user identities.

The prototype has two connected sections:

## 🌐 1. General Life DataGap

For everyday users who share optional general data such as:

- Spending preferences
- Mobility patterns
- Digital preferences
- Market signals
- Community surveys

---

## 🐪 2. Al Quaa Camel Farming DataGap

A dedicated local section for camel farmers focused on:

- Camel health
- Feeding
- Milk production
- Breeding
- Environmental conditions
- Market prices
- Agricultural surveys

This keeps the idea scalable while making the hackathon solution feel built specifically for Al Quaa and its people.

---

# 👥 Target Users

- 🐪 Camel farmers in Al Quaa
- 💼 Local entrepreneurs deciding what to sell, build, or improve
- 🌾 Feed suppliers
- 🩺 Veterinarians
- 🥛 Camel milk companies
- 🌱 Agri-tech startups
- 🎓 Researchers
- 📱 Everyday users who want control over their data and rewards

---

# ✅ Impact Claims

| ✅ Claim | 🔍 How to Verify |
|----------|------------------|
| Users can control what data they share | Open **Data Permissions** and toggle categories |
| Reward estimates react to consent choices | Toggle permissions and watch the estimate change |
| Users can submit data and earn rewards | Submit a record and check **Wallet** |
| Companies can buy anonymized datasets | Open **Company Portal** → **Buy Access** |
| Companies can preview anonymized data | Click **Preview Rows** |
| Farmer revenue share is recorded | Open **Wallet Ledger** |
| Buyer rankings update | Open **Buyers** |
| Admins review submissions | Open **Admin Review** |
| Consent changes are auditable | Check the **Audit Log** |
| Users can delete their data | Open **Profile** |
| Demo state persists | Refresh the browser |




---

# 📋 System Requirements

The following functional and non-functional requirements define the expected behaviour and quality attributes of the **DataGap** prototype. Together, they provide a measurable specification against which the implementation can be evaluated.

---

## ✅ Functional Requirements

| ID    | Requirement                                         |   Status   |
| ----- | --------------------------------------------------- | :--------: |
| FR-01 | User registration and login (demo simulation)       |   🟡 Demo  |
| FR-02 | Role-based dashboards and user experience           |      ✅     |
| FR-03 | Display available data-sharing categories           |      ✅     |
| FR-04 | Enable and disable data-sharing permissions         |      ✅     |
| FR-05 | Live reward estimation based on selected categories |      ✅     |
| FR-06 | Manual structured data submission                   |      ✅     |
| FR-07 | Display submission history                          |      ✅     |
| FR-08 | Display wallet balance                              |      ✅     |
| FR-09 | Display reward contribution by category             | 🟡 Partial |
| FR-10 | Wallet transfer request simulation                  |      ✅     |
| FR-11 | Buyer ranking                                       |      ✅     |
| FR-12 | Company data marketplace                            |      ✅     |
| FR-13 | Dataset request / purchase simulation               |      ✅     |
| FR-14 | Rule-based AI insight generation                    |      ✅     |
| FR-15 | Farmer/User profile                                 |      ✅     |
| FR-16 | Delete all user data                                |      ✅     |
| FR-17 | About page describing DataGap and Al Quaa           |      ✅     |
| FR-18 | Active consent status indicator                     |      ✅     |
| FR-19 | Camel farming specific datasets and insights        |      ✅     |
| FR-20 | Confirmation messages after user actions            |      ✅     |
| FR-21 | General Life DataGap section                        |      ✅     |
| FR-22 | Specialized Al Quaa Camel Farming section           |      ✅     |
| FR-23 | Community context highlighting Al Quaa              |      ✅     |

---

## ⚙️ Non-Functional Requirements

| ID     | Requirement                                |   Status   |
| ------ | ------------------------------------------ | :--------: |
| NFR-01 | Privacy by design                          |      ✅     |
| NFR-02 | Transparent consent and reward explanation |      ✅     |
| NFR-03 | Data minimization                          |   🟡 Demo  |
| NFR-04 | Anonymized company-facing data             |   🟡 Demo  |
| NFR-05 | User control over permissions and deletion |      ✅     |
| NFR-06 | Secure production architecture             |  🔵 Future |
| NFR-07 | Fast and responsive interface              |      ✅     |
| NFR-08 | Simple and intuitive user experience       |      ✅     |
| NFR-09 | Basic accessibility support                | 🟡 Partial |
| NFR-10 | Reliable demo operation                    |      ✅     |
| NFR-11 | Maintainable frontend architecture         |      ✅     |
| NFR-12 | Scalable platform architecture             |      ✅     |
| NFR-13 | Audit logging of user actions              |   🟡 Demo  |
| NFR-14 | Compliance readiness                       |  🔵 Future |
| NFR-15 | Explainable AI recommendations             |   🟡 Demo  |
| NFR-16 | Strong local relevance to Al Quaa          |      ✅     |
| NFR-17 | Extensible architecture for future domains |      ✅     |

> [!NOTE]
> **Legend**
>
> * ✅ **Implemented** – Fully implemented in the working prototype.
> * 🟡 **Demo / Partial** – Implemented as part of the frontend demonstration or simplified for the hackathon.
> * 🔵 **Future** – Planned for a production deployment.

> [!TIP]
> **Requirement Coverage**
>
> * **23 Functional Requirements** defined
> * **20 Fully Implemented**
> * **3 Implemented as Demo/Partial Features**
> * **17 Non-Functional Requirements** defined
> * **Most production-focused requirements are intentionally deferred to Future Work**

---

# ⚙️ Implemented Demo Behaviors

<details>

<summary><strong>Click to expand</strong></summary>

- ✅ Profile/login simulation
- ✅ Farmer & Company roles
- ✅ General + Camel Farming modules
- ✅ Consent management
- ✅ Live reward estimation
- ✅ Manual submissions
- ✅ Sponsored surveys
- ✅ Company dataset purchases
- ✅ Dataset previews
- ✅ Admin review workflow
- ✅ Consent audit log
- ✅ Buyer rankings
- ✅ Revenue sharing
- ✅ Wallet ledger
- ✅ Transfer request simulation
- ✅ AI insight simulation
- ✅ Delete-all-data
- ✅ Reset demo account
- ✅ Browser persistence

</details>

---

# 🧪 What Is Simulated

> [!IMPORTANT]
> This prototype is intentionally a polished **frontend demonstration**, not a production deployment.

### Simulated

- Banking and wallet transfers
- Real company payments
- Marketplace contracts
- Production authentication
- AI APIs
- Enterprise anonymization pipelines

### Fully Functional in the Demo

- All major screens
- State changes
- Reward calculations
- Wallet ledger
- Company purchase flow
- Dataset previews
- Consent audit log
- Admin approval workflow
- Survey rewards
- Buyer rankings
- Delete flow
- Persistence after refresh

---

# 🚀 Feasibility & Deployment

The first real deployment can remain intentionally lightweight.

1. Launch as a web application for a pilot group of Al Quaa farmers.
2. Review submissions manually before publishing.
3. Store consent, submissions, wallet credits, and company requests in a database.
4. Share only anonymized or aggregated reports.
5. Integrate payments after legal and compliance review.

---

# 📈 Scalability

DataGap grows in two directions.

### 👥 More Users

- Al Quaa
- Additional rural communities
- National deployment

### 🌍 More Domains

- Tourism
- Stargazing
- Agriculture
- Local events
- Other rural ecosystems

The architecture supports one general marketplace with unlimited specialized community modules.

---

# 🎬 Recommended Demo Flow

> [!TIP]
> Judges can verify every major feature in under **5 minutes** by following this sequence.

1. 🏠 Overview
2. 🔒 Data Permissions
3. 📝 Manual Submission
4. 📋 Sponsored Survey
5. 🏢 Company Portal
6. 👀 Dataset Preview
7. 💳 Buy Dataset
8. 🛡️ Admin Review
9. 💰 Wallet
10. 🏆 Buyers
11. 🤖 AI Insights
12. 👤 Profile
13. 📖 Demo Guide

---

# 🛠️ Tools Used

- HTML
- CSS
- JavaScript
- Browser localStorage
- Rule-based AI insight engine

---

# 📁 Repository Structure

```text
.
├── 📄 index.html
├── 🎨 styles.css
├── ⚙️ app.js
├── 📦 package.json
├── 📂 docs
│   └── 📄 project-brief.md
└── 📂 output
    └── 📂 doc
        └── 📄 DataGap_Team_Distribution.docx
```

---

# 🚧 Future Work

- Backend API
- PostgreSQL
- Authentication
- Role-based access
- AI analytics
- Real anonymization
- Payment integration
- Legal & compliance review

---

<div align="center">

### 🌟 DataGap

**Empowering rural communities through ethical, user-controlled data sharing.**

Built for Hackathon 2026.

</div>
