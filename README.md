# DataGap

**Challenge:** Challenge 3 - The data gap for local entrepreneurs  
**Track:** Solutions for rural communities  
**Community focus:** Al Quaa, Al Ain, UAE  
**Prototype type:** Fully working demo simulation

## Problem

Local entrepreneurs often make decisions without reliable local data. They may not know what people need, what customers are asking for, what products are in demand, or which problems are common in their own community.

In Al Quaa, this matters because many families run camel farms as a source of income. Camel farmers generate useful data every day, including health issues, feed demand, milk production, breeding records, environmental conditions, and market prices. That data could help entrepreneurs, vets, feed suppliers, researchers, and agri-tech companies make better decisions, but it is currently scattered and informal.

## Solution

DataGap is an ethical data marketplace and insight platform. Users choose what data they want to share, see estimated rewards, submit records or surveys, and can delete their data. Companies and entrepreneurs access anonymized or aggregated insights instead of private user identities.

The prototype has two connected sections:

1. **Personal Data** - for everyday users who share optional categories such as spending preferences, mobility patterns, digital preferences, local service needs, and surveys.
2. **Al Quaa Farm Records** - a dedicated local section for camel farmers, focused on camel health, feeding, milk production, breeding, environment, market prices, and local visitor demand.

This keeps the idea scalable while making the hackathon solution feel built for Al Quaa and its people.

## Target Users

- Camel farmers in Al Quaa.
- Local entrepreneurs deciding what to sell, build, or improve.
- Feed suppliers, veterinarians, camel milk companies, agri-tech startups, and researchers.
- Everyday users who want control over their data and rewards.

## Impact Claims

These claims are testable in the prototype:

| Claim | How to verify |
|---|---|
| Users can control what data they share. | Open **Permissions** and toggle categories. |
| Reward estimates react to consent choices. | Toggle permissions and watch the estimate change. |
| Users can submit data and earn rewards. | Open **Submit**, submit a record, then check **Wallet**. |
| Companies can buy anonymized data products. | Switch to the company account, open **Marketplace**, and click **Buy access**. |
| Companies can preview anonymized data safely. | Switch to the company account, open **Marketplace**, and click **Preview rows**. |
| Farmer revenue share is recorded. | After a company purchase, open **Wallet Ledger**. |
| Buyer rankings update after purchases. | Open **Buyers** after company activity. |
| Admins can review submitted records. | Switch to the admin account, open **Review**, and approve/reject a submission. |
| Consent changes are auditable. | Toggle permissions, then switch to the admin account and check the audit log in **Review**. |
| Users can delete their data. | Open **Profile** and click **Delete all my data**. |
| Demo state persists after refresh. | Perform an action, refresh the page, and check the state remains. |

## Implemented Demo Behaviors

- Role-based simulation for user/farmer, company, and admin accounts.
- Role-specific navigation so each account sees only the pages relevant to it.
- Two-section product model: personal data and Al Quaa farm records.
- Consent management with live reward estimates.
- Manual data submissions that create wallet credits.
- Sponsored surveys that add rewards.
- Company dataset purchases.
- Anonymized dataset preview.
- Admin review workflow.
- Consent audit log.
- Buyer ranking updates after purchases.
- Farmer revenue share from company purchases.
- Wallet ledger showing submissions, surveys, and revenue share.
- Transfer request simulation.
- Rule-based AI insight simulation.
- Delete-all-data control.
- Reset demo account control.
- Local persistence using browser storage.

## What Is Simulated

This is intentionally a polished demonstration build, not a production deployment.

Simulated:

- Banking and wallet transfer processing.
- Real company payments.
- Real data marketplace contracts.
- Production authentication.
- Real AI model/API calls.
- Real anonymization pipelines.

Working in the demo:

- All major screens.
- State changes.
- Reward calculations.
- Wallet ledger.
- Company purchase flow.
- Anonymized dataset previews.
- Consent audit log.
- Admin approval/rejection workflow.
- Survey rewards.
- Buyer ranking updates.
- Privacy/delete flow.
- Persistence after refresh.

## Feasibility and Deployment

DataGap is feasible as a staged rural deployment because the first version does not require complex automation, sensors, or expensive infrastructure. The most realistic pilot is a small web app operated with manual review and controlled onboarding.

### Pilot Plan

1. **Pilot group:** start with 10 to 20 Al Quaa camel farmers and 3 to 5 local data buyers such as feed suppliers, veterinarians, camel milk businesses, agri-tech teams, or local entrepreneurs.
2. **Data collection:** begin with manual submissions, short surveys, and optional file uploads rather than automatic tracking. This keeps the product simple, understandable, and safer for early users.
3. **Human review:** every submitted record is reviewed before it becomes part of any company-facing dataset or report.
4. **Anonymized outputs:** companies receive aggregated insights, anonymized rows, and summary reports rather than direct personal or farm identities.
5. **Reward handling:** early rewards can be handled as approved wallet credits or manual payouts before integrating a real payment gateway.
6. **Feedback loop:** farmers and buyers review whether the insights are useful, then the team improves categories, pricing, and reports.

### Deployment Requirements

| Area | Practical Approach |
|---|---|
| Hosting | A low-cost web app hosted on a standard cloud platform or university-supported server. |
| Database | PostgreSQL or Firebase/Supabase to store users, consent records, submissions, transactions, and dataset requests. |
| Authentication | Email/password or phone-based login, with separate roles for users/farmers, companies, and admins. |
| Admin operations | One admin reviewer can manually approve early submissions and handle deletion requests. |
| Data privacy | Store consent per category, keep audit logs, and expose only anonymized or aggregated outputs to companies. |
| Payments | Start with manual payout records; add payment integration only after legal and compliance review. |
| AI | Start with rule-based reports and simple statistical summaries; later connect a real AI analytics service. |

### Cost and Maintenance Assumptions

For a small pilot, the technical cost can remain low. A basic hosted web app, database, and storage layer can be operated with limited monthly cost. The larger cost is operational: onboarding farmers, reviewing submissions, validating data quality, and maintaining trust. This is manageable at pilot scale because the system intentionally starts with manual review instead of fully automated data trading.

Main maintenance tasks:

- verify submitted records before using them in reports,
- handle consent changes and data deletion requests,
- monitor dataset quality and remove unreliable submissions,
- update reward estimates based on buyer demand,
- support companies when they request or purchase datasets.

### Key Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Users may not trust the platform with data. | Use clear consent controls, show exactly what is shared, and allow deletion at any time. |
| Companies may worry about data quality. | Use admin review, category rules, and minimum dataset sizes before selling insights. |
| Privacy expectations may be misunderstood. | Show only aggregated/anonymized data and keep direct identities hidden from companies. |
| Payments may create legal complexity. | Begin with simulated/manual credits, then add real payouts only after compliance review. |
| Rural adoption may be slow. | Start with a small farmer group and demonstrate direct value through useful reports and rewards. |

This deployment path avoids the biggest early risks while still creating measurable value quickly.

## Scalability

DataGap can scale in two ways:

- **More users:** expand from Al Quaa farmers to more residents, local businesses, and entrepreneurs.
- **More domains:** add specialized sections for tourism, stargazing services, local events, agriculture, household services, and other rural needs.
- **More communities:** reuse the same consent, submission, marketplace, and AI-report structure in other rural communities after adapting the data categories.
- **More buyers:** allow vetted companies, researchers, suppliers, and public-sector partners to access approved aggregated insights.

The product is designed as one general consent platform with specialized local modules. Al Quaa camel farming is the first local module, but the same structure can support other communities and sectors.

## How to Run

No installation is required.

Open:

```text
index.html
```

Optional syntax check:

```bash
npm run check
```

## Recommended Demo Flow

1. Open **Home** and explain the two systems: personal data and Al Quaa farm records.
2. Open **Permissions** and toggle categories.
3. Open **Submit** and submit a camel farm record.
4. Complete a sponsored survey.
5. Switch to the company account and open **Marketplace**, preview anonymized rows, then buy dataset access.
6. Switch to the admin account and open **Review** to approve or reject a submitted record.
7. Open **Wallet** and show the ledger updated.
8. Open **Buyers** and show buyer ranking.
9. Open **Insights / AI Reports** and explain the simulated AI reports.
10. Open **Profile** and show delete-data and reset-demo controls.

## Tools Used

- HTML
- CSS
- JavaScript
- Browser localStorage for demo persistence
- Rule-based simulated AI insights

## Repository Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── package.json
└── README.md
```

Assets such as screenshots or demo video may be added before final submission, but the current application runs from the files above.

## Evidence and Validation

- `npm run check` validates JavaScript syntax.
- Browser testing confirmed:
  - submission creates wallet credit,
  - survey completion adds reward,
  - company purchase creates revenue share,
  - wallet ledger updates,
  - state persists after reload,
  - no console errors appeared during tested flows.

## Future Work

- Real backend API.
- PostgreSQL database.
- Real authentication and role-based access.
- Proper anonymization pipeline.
- Real AI analytics service.
- Legal review for payments and data sharing.
