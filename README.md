This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To run: `SKIP_PREFLIGHT_CHECK=true npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The spreadsheet `https://docs.google.com/spreadsheets/d/111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio/edit#gid=0`

- If I use the the key `111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio` and the sheets has been "published on the web" and I grab the id from the url.

```
Uncaught TypeError: Cannot read property 'length' of undefined
    at Tabletop.loadSheets (tabletop.js:358)
    at XMLHttpRequest.xhr.onload (tabletop.js:219)
```

- If I remove the publish on the web and the sheet is still accessible from outside.

```
Access to XMLHttpRequest at 'https://accounts.google.com/ServiceLogin?service=wise&passive=1209600&continue=https://spreadsheets.google.com/feeds/worksheets/111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio/public/basic?alt%3Djson&followup=https://spreadsheets.google.com/feeds/worksheets/111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio/public/basic?alt%3Djson&ltmpl=sheets' (redirected from 'https://spreadsheets.google.com/feeds/worksheets/111_7rU2qfo73sna0_ZcFt9QLFqTPl9LqevS3FIfHlio/public/basic?alt=json') from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
