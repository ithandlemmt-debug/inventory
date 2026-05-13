# TODO - Fix logo display issue (200x200)

- [ ] Identify all places where logo image is rendered (navbar/header, login screen, dashboard, etc.)
- [ ] Update CSS rules for `.logo` and add a dedicated 200x200 logo class with no padding/margin and `object-fit: cover`
- [x] Update the JSX/TSX `img` usages to use the dedicated class and ensure wrapper has no padding/margins affecting the render

- [x] If the source PNG has excessive transparent/blank bounds, run an image-cropping step (ImageMagick) and replace/commit the cropped asset while keeping final file size 200x200

- [ ] Run app build/lint and verify the logo visually on login + navbar across responsive breakpoints


