### Purpose
This sample is using MomentJs node package via npm in order to demostrate how ity can be achieved (this is just node develkopmen) using Google Cloud Functions 

### Using the emulator

- npm install -g @google-cloud/functions-emulator
- functions start
- functions deploy helloWorld --trigger-http
- navigate to function url (it is shown after we start the emulator)
- stop the emulator: functions stop 

### Uploading to Google using a zip package

Just create a zip package including index.js and package.json and uopload to Google Cloud console