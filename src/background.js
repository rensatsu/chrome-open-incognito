const MENU_ID_PAGE = "ren-open-in-incognito:page";
const MENU_ID_LINK = "ren-open-in-incognito:link";

function clickAction(info) {
  const url = info.linkUrl || info.pageUrl;

  chrome.windows.getAll(
    {
      windowTypes: ["normal"],
    },
    (windows) => {
      const incognitoWin = windows.find((w) => w.incognito === true);
      const incognitoId = incognitoWin ? incognitoWin.id : null;

      if (incognitoId !== null) {
        chrome.tabs.create(
          {
            windowId: incognitoId,
            url: url,
          },
          (tab) => {
            chrome.tabs.update(tab.id, {
              active: true,
            });
          }
        );
      } else {
        chrome.windows.create({
          url: url,
          incognito: true,
        });
      }
    }
  );
}

chrome.contextMenus.removeAll(() => {
  chrome.contextMenus.create({
    id: MENU_ID_PAGE,
    title: "Open in Incognito",
    contexts: ["page"],
  });

  chrome.contextMenus.create({
    id: MENU_ID_LINK,
    title: "Open Link in Incognito",
    contexts: ["link"],
  });
});

chrome.contextMenus.onClicked.addListener(clickAction);
