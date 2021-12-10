function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
  window.addEventListener("offline", onOffline, false);
};

function onOffline() {
  navigator.notification.alert(
    'Vous êtes hors ligne',  // message
    alertDismissed,         // callback
    'Deconnexion',            // title
    'Done'                  // buttonName
);
}