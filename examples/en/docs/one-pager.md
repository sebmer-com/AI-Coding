# One-pager: Request board

## 1. Users, problem, benefit

The service coordination team (15 people) searches for internal requests in chats and emails today. A shared board makes open requests visible and shows who is working on what.

## 2. Core flow

Capture request > save > find it in the list > change status > filter by status

## 3. Scope and non-goals

- **In version 1:** capture, list, change status, filter by status.
- **Not in version 1:** email notifications, roles and permissions, attachments, assignment to people, mobile app.

## 4. Data and constraints

- Fields: title (required, max. 120 characters), description (optional), status, created date.
- Test data only, no personal data of customers.
- Web app in the browser; version 1 stores locally, version 2 uses a database with sign-in.

## 5. Success criteria (observable)

- A new request appears immediately with status "open" at the top of the list.
- An empty title is rejected with an explanation.
- The "open" filter shows only open requests; with no matches an empty state appears.

## 6. Assumptions and next evidence

- **Assumption:** The team keeps statuses up to date if it takes only one click.
- **Evidence:** Two colleagues use the prototype for one week; we count requests made outside the board.
