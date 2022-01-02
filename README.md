# FLATCHR SHARED ICONS 🐙 👍 

This monorepository is the main place for all the __icons__ we wan't to share between our projects (app, app native, theme)

All the icons are made with [react-native-svg](https://github.com/react-native-svg/react-native-svg).

[SVGR](https://react-svgr.com/playground/) is an online tool for helping convert svg to react (any formats)

This project use [rollup.js](https://rollupjs.org/guide/en/) for builiding.

## Git config

```
git config --global user.name "John Doe"
git config --global user.email johndoe@flatchr.io
```

⚠️ This package use `Yarn`

#### __Global installation__

```
npm install -g yarn
```

## Dependencies install

#### `yarn install`

## Storybook

This project has a storybook to see and test your icons.
#### `yarn storybook`

It will be accessible at [http://localhost:6006/](http://localhost:6006/)

## Build the package

#### `yarn build`

## Publish the package

It's __required__ to commit the `/dist` directory.

Commit and push your work, and when your code is on `main` branch, you can launch:

#### `git pull origin main && yarn publish`

⚠️ When your new icons has been published, you will need to create a new branch `update-version-X.X.X`, update the version for the correct version in the package.json at the root directory.


All the published versions are here : https://gitlab.com/flatchr/shared/icons/-/packages

## How add a new icon?

Just add a new directory in `/src/icons`, create your new icon file `MyNewSVG.js` 🐙

If you want to add a dependency to get more efficient, it's possible! Add it as a peer-dependency:
```
yarn add DEPENDENCY_NAME
```

In package.json, copy the line from peer and paste it into __peerDependencies__

Then, you will need to add your icon to Storybook, go to `/src/stories.js` and add the new story for your icon.

You will need to reference your new icon for export, to do that, open `/src/index.js` and add it:
```js
export { default as MyNewSVGIcon } from './icons/MyNewSVG';
```

## How to use the published package?

Before install, you will need to register gitlab repository as available for your device:
```cmd
npm config set @flatchr:registry https://gitlab.com/api/v4/projects/30455429/packages/npm/
```
```cmd
npm config set -- "//gitlab.com/api/v4/projects/30455429/packages/npm/:_authToken=utMhyAKFkJdBKxXGonJe"
```

In the repository you want to use Flatchr icons: 

```cmd
npm i --save @flatchr/icons
```
or
```cmd
yarn add @flatchr/icons
```

🎉 __Enjoy your new icons!__ 🎉

## LINK

- use [`yarn link`](https://classic.yarnpkg.com/en/docs/cli/link/) to test your new icons in an another webapp
