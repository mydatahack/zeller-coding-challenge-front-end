# Mdh Design System with Storybook👁

Mdh Design System with Storybook🤟💀🤟

- TypeScript
- React
- Storybook
- Jest
- Enzyme

# Get started🏄🏽‍♀️

```bash
# Install all
yarn install

# start
yarn storybook

# run unit test
yarn test
yarn test:watch
```

# Build

```bash
# build bundle
yarn build

# build storybook
yarn build-storybook
```

# Deploy Storybook

Commit to master will trigger Github actions to push the artifacts to EstimateOne Git Page repo. No manuall step is required to deploy storybook.

# Change Process

Now you can open [http://localhost:3001](http://localhost:3001) in your browser. Changes in 
components referenced in the styleguide will trigger live reloads thanks to the wonderful 
`webpack-dev-server`

## (1) Adding to this repo

If you wish to introduce changes to this repo, there are a few steps that should be followed.
- Ensure your changes are outlined in CHANGELOG.md as per the 
[changelog guidelines](https://keepachangelog.com/en/1.0.0/#how)
- Learn about [semantic versioning here](https://semver.org/)

## (2) New changes

1. Update the changelog with your changes under `## [Unreleased]`.
2. Create a pull request with your desired changes.

## (3) Add version tag

Use yarn to add version tag.

1. Branch off the latest `master`. Ensure you do not introduce any new changes in this branch. - this doesn't need to be done. we can do it directly to master
2. Update the changelog with the new version heading (eg. `## [2.0.0] - 2020-07-14`). 
   Don't create a commit for this - the next step will do this for you.  
3. Version your changes appropriately [with yarn](https://yarnpkg.com/lang/en/docs/cli/version/#toc-yarn-version-major) (`yarn version [--patch|--minor|--major]`).
   Note: This will create git tags in GitHub as well as locally.
4. Create a pull request.


# Depricated naming conventions

Storybook had a massive change in v6. Some conventions are depricated

## (1) .storybook file name conventions

remove addons.js, it's redundant with main.js's addons field
rename config.js to preview.js which is the new naming convention
move the webpack config into main.js, which is our recommendation

## (2) mdx

We should use mdx instead of storybook-readme addon from version 6.

## (3) Depricated syntax

The story syntax changed significantly. For example, storyOf api is depricated.

## Adding code block

This adds code block.

```typescript
import dedent from 'ts-dedent';
import { Source } from '@storybook/addon-docs/blocks';

<Source
  language='typescript'
  code={dedent`
     <Button
      isDisabled = {false}
      Link = ''
      onClick = {null}
      size = {ButtonSize.Small}
      target = '_self'
      tooltip = 'Hello World'
      variant = {ButtonVariant.Primary}>Small
    </Button>
  `}
/>
```

## Customising control

Just in case we can customise control with this in MD file.

```typescript
<Meta title="Atoms/Button" component={Button} argTypes={{
  isDisabled: {control: 'boolean'}
}}/>
```

## Formatting code block in MDX

Formatting code block in MDX is only supported if we do inline template binding. If we use write component code in the Canvas element, it doesn't render nicely.

This just renders the args => <Button { ...args} >

```typescript
<Meta title="Atoms/Button" component={Button} 
parameters = {{
  docs: {
    source: {
      type: 'code'
    }
  }
}}/>
```

This doesn't work because the elemet name becomes wrong.

```typescript
export const Template = (args) => <Button { ...args } />
<Canvas>
  <Story 
  name="Test2"
  args={{
    isDisabled: false,
    Link: '',
    onClick: null,
    size: ButtonSize.Small,
    target: '_self',
    tooltip: 'Hello World',
    variant: ButtonVariant.Primary,
  }}
  > 
    {Template.bind({})} 
  </Story>
</Canvas>
```

When we don't bind show code looks good.

```typescript
<Canvas>
  <Story 
  name="Test"
  args={{
    isDisabled: false,
    Link: '',
    onClick: null,
    size: ButtonSize.Small,
    target: '_self',
    tooltip: 'Hello World',
    variant: ButtonVariant.Primary,
    children: 'Primary'
  }}
  > 
    {(args) => <Button { ...args } />} 
  </Story>
</Canvas>
```
