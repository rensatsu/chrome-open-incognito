# Open in Incognito

![Logotype][logo-icon]

Chrome extension to open current tab or selected link in Incognito Mode.

This extension adds an option to the context menu of the page to open that page
or a selected link to open it in the Incognito mode.
There are no options, no analytics and no tracking.

If you grant "Allow in incognito" permission, tabs will open in the same
Incognito window. Without this permission, all tabs will open in
separate windows.

## Install

[![Install from Chrome Web Store][store-button]][store-link]

## Screenshot

![Screenshot for "Open in Incognito" option][screenshot-page]

Screenshot for "Open in Incognito" option.

## License

Source code of the extension is licensed under [MIT License][license]

[Icon 'Hacker' from loading.io][icon-source]

## Build

Run `!build.bat` to build an extension.

Use this script to generate icons from SVG using imagemagick:
```powershell
foreach ($size in 16, 18, 20, 32, 64, 128, 256) {
    & magick -background none -size "${size}x${size}" `
        src\img\icon.svg src\img\icon${size}.png
}
```

[logo-icon]: ./src/img/icon128.png
[screenshot-page]: ./store/screenshot1.png
[license]: ./LICENSE
[icon-source]: https://loading.io/icon/
[store-button]: ./store/store-button.png
[store-link]: https://chrome.google.com/webstore/detail/open-in-incognito/ekpahhmggidgjdenljpnaifklemdgdbc
