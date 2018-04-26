# lerna-storybook-react
testing things out

to start:
`lerna bootstrap --hoist` - basically yarn install on all packages plus manage dependencies on local packages. --hoist so we can put shared libraries in the root package.json and have them available to the packages.


based off of:
https://www.nearform.com/blog/sharing-react-components-with-lerna/

with tips from:
https://hackernoon.com/the-highs-and-lows-of-using-lerna-to-manage-your-javascript-projects-ff5c5cd82a99