function clickAction(info) {
    const url = info.linkUrl || info.pageUrl;

    chrome.windows.getAll({
        windowTypes: ['normal']
    }, windows => {
        const incognitoWin = windows.find(w => w.incognito === true);
        const incognitoId = incognitoWin ? incognitoWin.id : null;

        if (incognitoId !== null) {
            chrome.tabs.create({
                windowId: incognitoId,
                url: url
            }, tab => {
                chrome.tabs.update(
                    tab.id,
                    {
                        active: true
                    }
                );
            });
        } else {
            chrome.windows.create({
                url: url,
                incognito: true
            });
        }
    });
}

chrome.contextMenus.create({
    "title": "Open in Incognito",
    "contexts": ["page"],
    "onclick": clickAction
});

chrome.contextMenus.create({
    "title": "Open Link in Incognito",
    "contexts": ["link"],
    "onclick": clickAction
});
