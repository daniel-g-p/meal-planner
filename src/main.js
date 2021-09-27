import { createApp } from "vue";
import App from "./App.vue";

import BaseNotification from "./components/BaseNotification";
import BaseHelpIcon from "./components/BaseHelpIcon";
import BaseRadioField from "./components/BaseRadioField";

const app = createApp(App);

app.component("notification-box", BaseNotification);
app.component("help-icon", BaseHelpIcon);
app.component("radio-field", BaseRadioField);

app.mount("#app");
