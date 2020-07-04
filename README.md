# Open in Incognito

![Logotype](./src/img/icon128.png)

Chrome extension to open current tab or selected link in Incognito Mode.

This extension adds an option to the context menu of the page to open that page
or a selected link to open it in the Incognito mode.
There are no options, no analytics and no tracking.

If you grant "Allow in incognito" permission, tabs will open in the same
Incognito window. Without this permission, all tabs will open in
separate windows.

## Screenshot

![Screenshot for "Open in Incognito" option](./store/screenshot1.png)

Screenshot for "Open in Incognito" option.

## License

Source code of the extension is licensed under [MIT License](./LICENSE)

[Icon 'Hacker' from loading.io](https://loading.io/icon/)

## Build

Run `!build.bat` to build an extension.

Use this script to generate icons from SVG using imagemagick:
```powershell
foreach ($size in 16, 18, 20, 32, 64, 128, 256) {
    & magick -background none -size "${size}x${size}" `
        src\img\icon.svg src\img\icon${size}.png
}
```
