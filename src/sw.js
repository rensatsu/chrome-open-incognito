const MENU_ID_PAGE = "ren-open-in-incognito:page";
const MENU_ID_LINK = "ren-open-in-incognito:link";

function clickAction(info) {
  const url = info.linkUrl ?? info.pageUrl;

  chrome.windows.getAll({ windowTypes: ["normal"] }).then((windows) => {
    const incognitoWin = windows.find((w) => w.incognito === true);
    const incognitoId = incognitoWin?.id ?? null;

    if (incognitoId !== null) {
      chrome.tabs.create({ windowId: incognitoId, url: url }).then((tab) => {
        chrome.tabs.update(tab.id, { active: true });
      });
    } else {
      chrome.windows.create({ url: url, incognito: true });
    }
  });
}

chrome.contextMenus.removeAll(() => {
  const docPatterns = ["http://*/*", "https://*/*"];

  chrome.contextMenus.create({
    id: MENU_ID_PAGE,
    title: "Open in Incognito",
    contexts: ["page"],
    documentUrlPatterns: docPatterns,
  });

  chrome.contextMenus.create({
    id: MENU_ID_LINK,
    title: "Open Link in Incognito",
    contexts: ["link"],
    documentUrlPatterns: docPatterns,
  });
});

chrome.contextMenus.onClicked.addListener(clickAction);
