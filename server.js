const { google } = require('googleapis');
const keys = require('./keys.json');

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);

client.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('connected!');
    gsrun(client);
  }
});

async function gsrun(cl) {
  const gsapi = google.sheets({ version: 'v4', auth: cl });
  const opt = {
      spreadsheetId: '13cuR6pcc0iSkA-urNSJjWC8KXIi3Fht3OuvGwj9RnjQ',
      range: 'Yeet!A1:D7'
  }

  let data = await gsapi.spreadsheets.values.get(opt);
  let dataArray = data.data.values;
}

// https://www.youtube.com/watch?v=MiPpQzW_ya0
