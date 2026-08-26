# Silent Reading Community

Silent Reading Community is a React web app for discovering outdoor silent-reading groups. The current codebase presents a branded landing page, a searchable map of communities in India, and an informational section that explains the idea behind the movement.

The repository also contains a small Express server for handling contact-form email delivery, although that backend is not currently wired into the visible homepage flow.

## What the App Does Today

- Renders a landing page with the project mission and a "Find Near Me" call to action.
- Shows a searchable Google Map with hardcoded community locations.
- Lets users select a community from search results and navigate to a city-specific route.
- Presents an About section with links to external articles about the reading movement.

## Current State of the Codebase

This repository is still in an early/product-prototype state. A few implementation details are important if you plan to extend or deploy it:

- Community data is hardcoded in [`src/components/FindUs.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/components/FindUs.js).
- The city route in [`src/components/Reads/CityPage.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/components/Reads/CityPage.js) is currently a placeholder page.
- The Google Maps loader is present, but the API key is not configured in the frontend code.
- [`server.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/server.js) starts an Express server on port `5000` and defines a `POST /contact` email endpoint, but it still contains placeholder Gmail credentials and is not connected to the current homepage.
- Mailchimp newsletter components exist in the repository, but they are not mounted in the active UI.
- The default Create React App sample test in [`src/App.test.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/App.test.js) has not been updated to match the current interface.

## Tech Stack

- React 18
- Create React App
- React Router
- React Bootstrap and Bootstrap
- `@react-google-maps/api`
- Express
- Nodemailer

## Project Structure

```text
.
├── public/                Static CRA assets
├── src/
│   ├── components/
│   │   ├── Home.js        Homepage composition
│   │   ├── Info.js        Hero section
│   │   ├── FindUs.js      Search + Google Map + community data
│   │   ├── AboutUs.js     Community background and media links
│   │   └── Reads/
│   │       └── CityPage.js Placeholder city route
│   ├── App.js             Main frontend router
│   └── index.js           Frontend entry point
├── server.js              Optional Express/Nodemailer backend
└── package.json           Frontend dependencies and scripts
```

## Prerequisites

- Node.js 18 or newer is recommended.
- `npm`
- A Google Maps JavaScript API key if you want the map to load in a real deployment.
- A Gmail account or equivalent SMTP configuration if you want to use the contact email server.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the React development server:

   ```bash
   npm start
   ```

3. Open `http://localhost:3000`.

The frontend uses the standard Create React App workflow, so code changes reload automatically during development.

## Running the Contact Server

The backend server is separate from the CRA dev server and is not exposed through an `npm` script yet.

Start it manually with:

```bash
node server.js
```

That launches Express on `http://localhost:5000`.

Before relying on it, review [`server.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/server.js):

- replace the placeholder email address in the Nodemailer transport
- supply valid credentials
- move secrets out of source code and into environment variables
- connect the frontend form flow to `POST /contact` if contact submissions are required

## Configuration Notes

### Google Maps

The map UI in [`src/components/FindUs.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/components/FindUs.js) uses `LoadScript` from `@react-google-maps/api`, but no API key is passed right now. For a working deployment, provide a valid Google Maps JavaScript API key and load it from configuration rather than hardcoding it.

### Mailchimp

[`src/components/MailchimpForm.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/components/MailchimpForm.js) expects these frontend environment variables:

- `REACT_APP_MAILCHIMP_URL`
- `REACT_APP_MAILCHIMP_U`
- `REACT_APP_MAILCHIMP_ID`

Those components are currently unused in the rendered homepage, but the variables will be needed if newsletter signup is re-enabled.

## Available Scripts

From [`package.json`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/package.json):

- `npm start` runs the React development server.
- `npm run build` creates a production build in `build/`.
- `npm test` runs the Jest test runner.
- `npm run eject` ejects the Create React App configuration.

## Testing

The repository includes the default CRA test file, but it does not match the current UI and is expected to fail until updated. For documentation-only changes, a reasonable validation step is:

```bash
npm run build
```

If you continue product development, updating [`src/App.test.js`](/Users/chauhan/.ao/data/worktrees/silentreadingcommunity/silentreadingcommunity-2/src/App.test.js) should be one of the first cleanup tasks.

## Suggested Next Steps

- Replace hardcoded community data with a structured data source or CMS.
- Build out the city detail pages so each route shows real meetup information.
- Move all secrets and API keys into environment-based configuration.
- Add a proper backend start script and document deployment targets.
- Replace the placeholder test suite with assertions against the actual UI.
