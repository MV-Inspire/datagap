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

1. **General Life DataGap** - for everyday users who share optional general data such as spending preferences, mobility patterns, digital preferences, market signals, and surveys.
2. **Al Quaa Camel Farming DataGap** - a dedicated local section for camel farmers, focused on camel health, feeding, milk production, breeding, environment, market prices, and surveys.

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
| Users can control what data they share. | Open **Data Permissions** and toggle categories. |
| Reward estimates react to consent choices. | Toggle permissions and watch the estimate change. |
| Users can submit data and earn rewards. | Open **Manual Submission**, submit a record, then check **Wallet**. |
| Companies can buy anonymized data products. | Open **Company Portal** and click **Buy access**. |
| Companies can preview anonymized data safely. | Open **Company Portal** and click **Preview rows**. |
| Farmer revenue share is recorded. | After a company purchase, open **Wallet Ledger**. |
| Buyer rankings update after purchases. | Open **Buyers** after company activity. |
| Admins can review submitted records. | Open **Admin Review** and approve/reject a submission. |
| Consent changes are auditable. | Toggle permissions, then open **Admin Review** and check the audit log. |
| Users can delete their data. | Open **Profile** and click **Delete all my data**. |
| Demo state persists after refresh. | Perform an action, refresh the page, and check the state remains. |

## Implemented Demo Behaviors

- Profile/login simulation with farmer/customer and company roles.
- Two-section product model: general users and Al Quaa camel farmers.
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

The first real deployment can be lightweight:

1. Start as a web app for a small group of Al Quaa farmers.
2. Use manual review before any data is approved for company-facing reports.
3. Store consent records, submissions, wallet credits, and company requests in a database.
4. Share only aggregated or anonymized reports.
5. Add real payment integration only after legal and compliance review.

This avoids the biggest early risks while still creating value quickly.

## Scalability

DataGap can scale in two ways:

- **More users:** expand from Al Quaa farmers to more residents and entrepreneurs.
- **More domains:** add specialized sections for tourism, stargazing services, local events, agriculture, and other rural communities.

The two-section structure supports this: one general platform plus specialized local modules.

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

1. Open **Overview** and explain the two systems: general life data and Al Quaa camel farming.
2. Open **Data Permissions** and toggle categories.
3. Open **Manual Submission** and submit a camel farm record.
4. Complete a sponsored survey.
5. Open **Company Portal**, preview anonymized rows, then buy dataset access.
6. Open **Admin Review** and approve/reject a submitted record.
7. Open **Wallet** and show the ledger updated.
8. Open **Buyers** and show buyer ranking.
9. Open **AI Insights** and explain the simulated AI reports.
10. Open **Profile** and show delete-data and reset-demo controls.
11. Open **Demo Guide** for the judge checklist.

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
├── docs/
│   └── project-brief.md
└── output/
    └── doc/
        └── DataGap_Team_Distribution.docx
```

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
