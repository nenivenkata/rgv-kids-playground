# RGV: online AI teacher setup

This patch replaces the cartoon Alphabet Teacher inside the same Study tab with a streamed Azure Speech avatar, personalized name entry, and AI pronunciation assessment. Your other games remain local and unchanged. The avatar is synthetic; it is not a human tutor. This is a guided alphabet class with assessed feedback, not an open-ended chatbot.

## 1. Install the patch

Download rgv-ai-teacher-patch.zip into Downloads, extract it with the default folder name, stop the current server using Ctrl+C, and run:

```cmd
cd /d "C:\Users\veera\Downloads\rgv-kids-playground-20-games\rgv-kids-playground"
node "C:\Users\veera\Downloads\rgv-ai-teacher-patch\install-ai-teacher.js"
npm install
npm test
```

The installer adds the Microsoft Speech SDK dependency pinned to 1.52.0. `npm install` installs it and writes/updates package-lock.json. The SDK browser file is served locally from node_modules; no CDN script is loaded at class time. Tests use simulated provider responses and do not start a paid class.

## 2. Create/configure your Azure Speech resource

Use the [Azure portal](https://portal.azure.com/) to create an Azure AI Speech resource. This requires an Azure subscription. Choose a region supporting real-time avatars; current Microsoft documentation lists **West US 2 (`westus2`)** and **East US (`eastus`)**, among others. Use **Standard S0** for avatar access. Verify availability and pricing in your account before starting a class. This patch does not provision resources or guarantee any free allowance.

Open the resource's **Keys and Endpoint** page. You need:

- One Speech key.
- Its exact region identifier, matching that key.
- Its resource-specific HTTPS endpoint, like `https://YOUR-RESOURCE.cognitiveservices.azure.com`.

The endpoint must be the resource's custom subdomain, not the portal URL and not a generic regional URL. If your resource does not show one, configure its custom subdomain following Microsoft's resource guidance. The code uses a regional short-lived Speech token and the resource endpoint for the avatar relay.

## 3. Put secrets in your LOCAL .env file

From the MAIN PROJECT folder:

```cmd
copy .env.example .env
notepad .env
```

If `.env.example` was already used for another purpose, add the following settings to `.env` yourself. Replace the placeholder values with your own resource's values:

```dotenv
AZURE_SPEECH_KEY=YOUR_PRIVATE_KEY
AZURE_SPEECH_REGION=westus2
AZURE_SPEECH_ENDPOINT=https://YOUR-RESOURCE.cognitiveservices.azure.com
TEACHER_VOICE=en-US-JennyNeural
TEACHER_AVATAR=lisa
TEACHER_AVATAR_STYLE=casual-sitting
```

Save and close Notepad. **Do not paste the key into chat, browser JavaScript, GitHub, or screenshots.** `.env` is ignored by Git and is outside the public web folder. It is read by the local server when it starts. Never force-add it. `.env.example` contains placeholders only and may be committed. If a key is ever exposed, rotate it in Azure.

## 4. Run and join

```cmd
npm start
```

Open http://localhost:3001 in current Microsoft Edge or Chrome. Press Ctrl+F5. Choose **Study → Alphabet Teacher**. Enter the child's first name or nickname, then Join my class. The online teacher greets that name. If the audio is blocked, select **Enable teacher sound**.

Choose a letter. Teach this letter models the letter, example word, and sound. Model the sound uses Azure SSML phoneme synthesis. Listen to my pronunciation first gives a prompt, then requests microphone permission and listens once. Allow the microphone when prompted. Each recording ends after one utterance or a 15-second timeout. The teacher is stopped before listening, so its audio should not be assessed as the child's attempt; headphones can further reduce echo.

The app evaluates spoken **example words**, obtaining word and phoneme accuracy from Speech pronunciation assessment. It does not grade isolated letter sounds or arbitrary conversation. Feedback uses the name and a sound-specific coaching tip when a suitable low-scoring phoneme exists. There is no pretend scoring when Speech returns no usable result. The app avoids negative judgments about the child and says what can be practised instead. Parent view shows actual returned scores, recognized text, and phoneme estimates.

## 5. End class and manage costs

Select **End class** when finished. The app disconnects the avatar and microphone, automatically ends after two inactive minutes, ends on leaving/hiding the page, and caps a session at 25 minutes. These timers are app controls, not spending limits in Azure. Connections can incur avatar charges while idle. Set an Azure budget/alert if appropriate and review actual usage. No fixed cost estimate or free usage is promised.

## Data and limitations

- The name is kept in browser session memory and is included in text sent to Microsoft for spoken greetings/feedback. The local app does not save it.
- Microphone audio goes directly to Microsoft Speech during chosen pronunciation practice. Azure's terms and data-processing policies apply; this app's lack of recording storage does not mean cloud processing never occurs.
- The Speech key stays on the local server. The browser receives short-lived bearer and relay credentials for the connected session.
- Scores depend on the voice, accent, microphone, word length, and the service model. They are automated practice estimates, especially imperfect for young children's voices. Thresholds 70/80 are simple app practice thresholds, not a validated diagnostic standard. Parent supervision is appropriate.
- Real-time video needs WebRTC network access. Firewalls/VPNs may block the relay. A setup/network error is shown rather than a fake online teacher.
- The server still binds only to 127.0.0.1. Do not expose this token service publicly. Public hosting would need authentication, abuse limits, stronger privacy controls, and HTTPS.
- Live avatar and real-microphone verification require YOUR configured Speech resource. They could not be run in the build environment without credentials. Automated tests check SDK packaging, provider contracts with mocks, names, scoring logic, connection lifecycle, and existing game behavior.

## 6. Commit to the same GitHub repository

In a second Command Prompt:

```cmd
cd /d "C:\Users\veera\Downloads\rgv-kids-playground-20-games\rgv-kids-playground"
git status
git add .
git commit -m "Upgrade Alphabet Teacher with online avatar and pronunciation assessment"
git push
```

Check that `.env` does NOT appear in git status. Commit package.json, package-lock.json, server helpers, new tests, and frontend files. node_modules and update-backups stay ignored. The installer updates the standard GitHub workflow to install dependencies before running tests; no live service key is needed for CI.

## Official documentation

- [Real-time talking avatar, S0 prerequisite, WebRTC, and closing connections](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech-avatar/real-time-synthesis-avatar)
- [Pronunciation assessment and phoneme scores](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/how-to-pronunciation-assessment)
- [Supported avatar regions](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/regions#text-to-speech-avatar)
- [SSML pronunciation and phonemes](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-pronunciation)
