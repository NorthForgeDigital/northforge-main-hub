# NorthForge n8n Dental Appointment Automation — Construction Manual v1

## Purpose

This manual teaches a non-programmer how to design, build, test, debug, demonstrate, customize, and maintain a practical dental-clinic appointment automation in n8n.

The learning method for every module is:

**Build → Test → Break It Deliberately → Diagnose → Fix → Document**

The goal is not merely to import a workflow. The goal is to understand why every node exists and what to inspect when it fails.

---

## 1. What We Are Building

MVP lifecycle:

Patient inquiry → capture data → validate → store lead → classify appointment → check availability → offer/confirm slot → create appointment → update CRM → send confirmation → reminders → appointment outcome → follow-up / reschedule / cancel / no-show recovery → reporting.

### Initial stack

- n8n: automation engine
- n8n Form Trigger or Webhook: intake
- Google Sheets: beginner CRM / test database
- Google Calendar: availability and appointment events
- Gmail: confirmations and reminders
- Optional later: Twilio/WhatsApp, Airtable/PostgreSQL/Supabase, Slack/Teams, AI classification

### Development rule

Use fake test patients only while learning. Do not place unnecessary clinical or sensitive patient information in Google Sheets, calendars, logs, or test workflows.

---

# PHASE A — FOUNDATION

## Lesson 1 — Learn the n8n Canvas

### Objective
Understand triggers, actions, data, connections, executions, and credentials.

### Build
1. Create a new workflow.
2. Name it `DENTAL-01 Lead Intake MVP`.
3. Add a **Manual Trigger**.
4. Add an **Edit Fields / Set** node.
5. Create fields:
   - `first_name = Test`
   - `last_name = Patient`
   - `email = test@example.com`
   - `phone = +15550000000`
   - `appointment_type = Cleaning`
6. Connect Manual Trigger → Edit Fields.
7. Execute the workflow.
8. Open the node output and inspect the JSON-like data.

### Understand
Each node receives items, performs an operation, then produces output for the next node.

### Break It
Delete one field and execute again.

### Diagnose
Open the Edit Fields output and compare expected vs actual fields.

### Fix
Restore the missing field.

### Debugging skill learned
**Inspect node input/output before blaming the next integration.**

---

## Lesson 2 — Create the Dental Appointment Request Form

### Objective
Replace test data with actual form submissions.

### Build
1. Create workflow `DENTAL-02 Appointment Intake`.
2. Add **Form Trigger**.
3. Configure fields:
   - Full Name — required
   - Email — required
   - Phone — required
   - New or Existing Patient — required
   - Appointment Type — required dropdown
   - Preferred Date — required
   - Preferred Time — required
   - Preferred Dentist — optional
   - Message — optional
   - Contact consent — required checkbox
4. Appointment Type options for the MVP:
   - General Consultation
   - Cleaning / Checkup
   - Cosmetic Consultation
   - Orthodontic Consultation
   - Follow-Up
   - Urgent Appointment Request
5. Save and open the test form URL.
6. Submit a fake patient.
7. Inspect Form Trigger output.

### Test
Verify every visible form field becomes a usable n8n field.

### Break It
Submit with unusual capitalization or spaces in the phone field.

### Diagnose
Inspect the raw trigger output.

### Fix
Do not fix the form yet. We will normalize data in the next lesson.

### Debugging skill learned
**Separate raw input from normalized internal data.**

---

## Lesson 3 — Normalize Patient Data

### Objective
Create one predictable internal schema regardless of how the patient types information.

### Node chain
Form Trigger → Edit Fields: Normalize Intake

### Standard internal fields
- `lead_id`
- `created_at`
- `first_name`
- `last_name`
- `full_name`
- `email`
- `phone`
- `patient_type`
- `appointment_type`
- `preferred_date`
- `preferred_time`
- `preferred_dentist`
- `message`
- `source`
- `lead_status`

### Rules
- email: trim whitespace and lowercase
- phone: preserve country code when provided
- source: `website_form`
- lead_status: `NEW`
- created_at: current workflow time

### Test
Submit three fake patients with differently formatted names, emails, and phone numbers.

### Break It
Rename one form field but not the normalization mapping.

### Diagnose
The normalization node will show a blank or missing mapped value. Trace the value backward into Form Trigger output.

### Fix
Update the mapping.

### Debugging skill learned
**Most workflow failures are data-contract failures: field name, type, format, or missing value.**

---

## Lesson 4 — Validate Required Information

### Objective
Stop invalid records before they reach the calendar or CRM.

### Node chain
Normalize Intake → IF: Required Data Present?

### Required for MVP
- name
- email
- phone
- appointment type
- preferred date
- preferred time
- consent

### True branch
Continue to lead storage.

### False branch
Send to `Missing Information` handling. During development, use Edit Fields to produce:
- `status = NEEDS_INFORMATION`
- `missing_reason`

### Test cases
1. Complete record → true
2. Missing phone → false
3. Missing appointment type → false

### Break It
Change the IF node from AND to OR.

### Diagnose
A record with missing information will incorrectly pass.

### Fix
Restore required AND conditions.

### Debugging skill learned
**Test decision nodes with both positive and negative cases.**

---

# PHASE B — CRM / LEAD STORAGE

## Lesson 5 — Build a Beginner CRM in Google Sheets

Create spreadsheet `Dental Automation Test CRM` with tabs:

### Leads
`lead_id | created_at | full_name | email | phone | patient_type | appointment_type | preferred_date | preferred_time | assigned_staff | status | booking_id | last_contact_at | source | notes`

### Appointments
`booking_id | lead_id | calendar_event_id | appointment_type | staff | start | end | timezone | status | created_at | updated_at`

### Communications
`communication_id | lead_id | booking_id | channel | message_type | sent_at | delivery_status`

### Automation_Log
`execution_id | workflow | record_id | action | status | timestamp | error`

### n8n build
Valid Intake → Google Sheets: Append Lead

Connect Google credentials using n8n Credentials. Do not place account passwords or OAuth tokens in fields.

### Test
Submit one fake patient and confirm exactly one row appears.

### Break It
Rename a sheet column.

### Diagnose
Inspect the Google Sheets node error and compare mapped columns with spreadsheet headers.

### Fix
Restore header or remap the field.

### Debugging skill learned
**External systems fail when schemas drift. Keep field names documented.**

---

## Lesson 6 — Duplicate Detection

### Objective
Do not create a new patient lead every time the same person submits again.

### Logic
Normalize Intake → Search Leads by Email → IF Existing? → Update Existing / Create New

If no email match, optionally search phone.

### Existing record behavior
Update:
- latest appointment request
- last contact time
- lead status
- latest source

### New record behavior
Append new lead.

### Test
Submit the same fake email twice.

### Expected
One customer/lead identity is reused or explicitly linked; duplicate rows should not silently proliferate.

### Break It
Use case-sensitive comparison if available, then submit `TEST@example.com` and `test@example.com`.

### Diagnose
Observe duplicate creation.

### Fix
Normalize email to lowercase before search.

### Debugging skill learned
**Normalize before deduplicating.**

---

# PHASE C — DENTAL ROUTING

## Lesson 7 — Route by Appointment Type

### Objective
Translate patient intent into the correct staff/service path.

### Node
Switch: Appointment Type

### Example routes
- Cleaning / Checkup → Hygienist or general provider
- General Consultation → Dentist
- Cosmetic Consultation → Cosmetic-capable dentist
- Orthodontic Consultation → Orthodontic provider
- Follow-Up → original/assigned provider when known
- Urgent Appointment Request → Human Review

### Safety rule
Automation may classify and route an urgent request, but must not diagnose or generate treatment advice.

### Test
Create one fake submission for every route.

### Break It
Submit an unexpected appointment label.

### Diagnose
Check whether the Switch has a fallback path.

### Fix
Add `Other / Human Review` fallback.

### Debugging skill learned
**Every Switch needs a safe default branch.**

---

## Lesson 8 — Create Service Configuration

Create a `Services_Config` sheet:

`service_id | appointment_type | duration_minutes | buffer_before | buffer_after | staff_role | active`

Example:
- CLEANING | Cleaning / Checkup | 60 | 0 | 15 | HYGIENIST | TRUE
- GENERAL | General Consultation | 30 | 0 | 15 | DENTIST | TRUE
- COSMETIC | Cosmetic Consultation | 45 | 0 | 15 | COSMETIC_DENTIST | TRUE
- ORTHO | Orthodontic Consultation | 45 | 0 | 15 | ORTHO_PROVIDER | TRUE

### Why configuration matters
Do not hardcode durations inside five different workflow branches. Change the configuration once.

### Debugging skill learned
**Configuration errors and workflow errors are different. Check configuration before rewriting logic.**

---

# PHASE D — CALENDAR & BOOKING

## Lesson 9 — Connect Google Calendar

### Objective
Allow n8n to read and create appointments using the clinic's test calendar.

### Development setup
Create a separate Google Calendar named `Dental Automation TEST`.

### n8n
Connect Google Calendar credential.

Create a simple test event first before building availability logic.

### Test
Create a 30-minute fake event from n8n.

### Break It
Select an incorrect calendar.

### Diagnose
Execution may succeed but the event appears in the wrong calendar. Inspect calendar ID/configuration.

### Fix
Use the configured calendar ID.

### Debugging skill learned
**A successful API call can still be a business failure if it targets the wrong resource.**

---

## Lesson 10 — Availability Check

### Objective
Confirm that the requested slot is free before offering it.

### Inputs
- requested start
- service duration
- buffer
- assigned staff calendar
- clinic timezone

### Logic
Load Service Config → Build Start/End → Check Calendar Availability → IF Available?

### Available
Return requested slot.

### Not available
Return alternative-slot path.

### Business checks before calendar
- clinic open?
- holiday/closure?
- minimum notice?
- service offered that day?
- correct provider?

### Test
1. Free slot
2. Existing event conflict
3. Outside clinic hours
4. Wrong day

### Break It
Remove timezone handling and test around a date/time where timezone conversion changes the displayed hour.

### Diagnose
Compare patient-entered time, clinic timezone, and calendar event time.

### Fix
Store and convert timezone explicitly.

### Debugging skill learned
**Timezones are data, not assumptions.**

---

## Lesson 11 — Offer Alternatives

For an unavailable requested slot, search a controlled window and return 3–5 acceptable alternatives.

Do not automatically move the patient to a different time.

Expected output:
- requested slot unavailable
- alternative slot 1
- alternative slot 2
- alternative slot 3

### Debugging skill learned
**Automation should preserve user intent instead of silently changing it.**

---

## Lesson 12 — Final Booking Workflow

Create separate workflow `DENTAL-05 Book Appointment`.

### Node chain
Booking Trigger → Retrieve Lead → Retrieve Selected Slot → Validate → Re-check Calendar → IF Still Free → Generate Booking ID → Create Calendar Event → Save Appointment → Update Lead = BOOKED

### Critical rule
Availability must be checked a second time immediately before event creation.

### If slot was taken
Return to alternatives. Never silently double-book or move the patient.

### Calendar event
Title: `[Appointment Type] — [Patient Name]`

Keep event description minimal. Avoid unnecessary clinical data.

### Test
Use two browser sessions to attempt the same slot.

### Expected
Only one booking succeeds.

### Debugging skill learned
**Re-check mutable resources immediately before writing.**

---

# PHASE E — COMMUNICATION

## Lesson 13 — Send Confirmation Email

### Node chain
Successful Booking → Gmail Send Message → Log Communication

### Include
- patient name
- clinic name
- appointment type
- date/time
- clinic timezone
- location
- contact instructions
- reschedule/cancel method when implemented

### Test
Send only to your own test email.

### Break It
Use a blank recipient mapping.

### Diagnose
Inspect the Gmail node input and the upstream email field.

### Fix
Correct mapping and add validation before send.

### Debugging skill learned
**When a communication node fails, inspect recipient, credentials, content, then provider response—in that order.**

---

## Lesson 14 — Reminder Workflow

Create separate workflow `DENTAL-07 Appointment Reminders`.

### Basic sequence
Booking confirmed → Wait until 24h before → retrieve appointment → IF status CONFIRMED → send reminder → Wait until 2h before → retrieve appointment → IF status CONFIRMED → send reminder

### Critical rule
Never trust the booking status captured days earlier. Re-read current status before each message.

### Stop for
- CANCELLED
- COMPLETED
- NO_SHOW

### Test
During development, use short waits such as 2 minutes and 1 minute.

### Break It
Cancel the test appointment after the first wait begins.

### Expected
The workflow should re-check status and suppress the reminder.

### Debugging skill learned
**Long-running workflows need state revalidation after waiting.**

---

# PHASE F — RESCHEDULE / CANCEL / OUTCOMES

## Lesson 15 — Reschedule

Secure reschedule request → retrieve booking → check new availability → re-check selected new slot → update calendar event → update appointment record → send new confirmation → restart reminders.

Maintain:
- original appointment time
- new appointment time
- rescheduled_at
- reschedule_count

Never erase history.

---

## Lesson 16 — Cancellation

Cancellation request → validate booking → apply clinic policy → cancel/update event → status CANCELLED → send confirmation → stop reminders → notify staff.

Optional later: waitlist fill.

---

## Lesson 17 — Appointment Outcome

After the scheduled time, staff/system marks:
- COMPLETED
- NO_SHOW
- RESCHEDULED
- CANCELLED

### COMPLETED
Thank-you → feedback/review → optional recall scheduling.

### NO_SHOW
Update count → staff notice → courteous rebooking invitation.

Do not automatically generate punitive or medical statements.

---

# PHASE G — LEAD FOLLOW-UP

## Lesson 18 — Inquiry Did Not Book

Qualified lead → wait → re-read lead status.

If BOOKED or DO_NOT_CONTACT: stop.

If still open: follow-up #1 → wait → re-check → follow-up #2.

Every follow-up begins with a current-status lookup.

---

# PHASE H — ERROR HANDLING & DEBUGGING

## Lesson 19 — Error Workflow

Create `DENTAL-99 Error Handler` using n8n's error-workflow mechanism.

Capture:
- workflow
- execution ID
- node
- lead/booking reference when available
- timestamp
- error summary

Classify:
- RETRYABLE
- CONFIGURATION
- DATA_VALIDATION
- AUTHENTICATION
- HUMAN_REVIEW

Never send raw stack traces or credentials to customers.

---

## Lesson 20 — The NorthForge Debugging Ladder

When a workflow fails, debug in this order:

1. **Trigger** — Did the workflow execute?
2. **Input** — Did the expected data arrive?
3. **Schema** — Are field names/types/formats correct?
4. **Decision** — Did IF/Switch choose the expected branch?
5. **Configuration** — Correct service, calendar, staff, timezone, destination?
6. **Credential** — Is authentication valid and authorized?
7. **External system** — Is Google/API/service available and responding?
8. **Write result** — Did the external action actually create/update the intended record?
9. **Downstream state** — Did CRM/status/logging update after success?
10. **Business outcome** — Did the workflow accomplish what the clinic expected, not merely return HTTP success?

### Diagnostic discipline
For any failure:
- reproduce with test data
- identify the first node where actual output differs from expected
- fix the smallest cause
- retest the failing case
- retest neighboring cases
- record the root cause and fix

---

# PHASE I — TEST MATRIX

Before calling the automation client-ready, test:

### Intake
- normal patient
- missing required field
- unusual name characters
- malformed email
- malformed phone
- duplicate patient

### Routing
- every appointment type
- unknown type
- urgent request

### Calendar
- free slot
- occupied slot
- simultaneous booking attempt
- clinic closed
- holiday
- staff unavailable
- timezone conversion

### Communication
- confirmation success
- invalid email
- provider/credential failure
- cancelled appointment during wait

### Outcomes
- complete
- no-show
- reschedule
- cancel

### Recovery
- temporary API failure
- expired credential
- renamed spreadsheet column
- wrong calendar configuration

---

# PHASE J — CLIENT DEMONSTRATION SCRIPT

Demonstrate the outcome, not n8n complexity.

1. Submit a fake appointment request.
2. Show the lead appearing in the CRM.
3. Show service routing.
4. Attempt a busy slot and show alternatives.
5. Select a free slot.
6. Show the calendar appointment.
7. Show confirmation email.
8. Demonstrate cancellation/rescheduling.
9. Show reminders stop after cancellation.
10. Show logs/reporting.
11. Explain human handoff and failure monitoring.

---

# PHASE K — CLIENT DISCOVERY CHECKLIST

Before customizing a clinic deployment, document:

- locations
- timezone
- business hours
- holidays/closures
- appointment types
- duration by service
- buffers
- dentists/hygienists/providers
- provider capabilities
- calendars
- booking notice rules
- cancellation/reschedule policy
- communication channels
- reminder schedule
- staff alert method
- CRM/system of record
- existing booking software
- website/form source
- escalation rules
- privacy/compliance requirements
- reporting needs

---

# PHASE L — COMMERCIAL PRODUCT BOUNDARY

Sell the deployment and business outcome, not unrestricted ownership of the reusable NorthForge master architecture by default.

Suggested deliverables:
- process discovery
- workflow map
- configured client deployment
- integrations
- test plan and acceptance testing
- staff handoff guide
- monitoring/error logging
- agreed support period

Optional recurring services:
- workflow monitoring
- credential/integration maintenance
- troubleshooting
- monthly optimization
- reporting
- new automation modules

---

## Graduation Standard

You are ready to sell the MVP only when you can, without guessing:

1. explain every node's purpose;
2. trace a patient record through the entire workflow;
3. identify which system owns each piece of data;
4. reproduce and fix common failures;
5. prevent duplicate bookings;
6. explain timezone behavior;
7. recover from expired credentials;
8. stop reminders after cancellation;
9. safely route exceptions to a human;
10. demonstrate the system using fake data from start to finish.
