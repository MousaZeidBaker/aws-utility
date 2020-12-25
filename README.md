# Welcome to AWS Utility!

## Getting started

### Prerequisites

* Install Docker, make sure proxy settings are configured
* Install AWS CLI on your system and configure your credentials

### Setup

* Install dependencies

`yarn install`

* Compile TypeScript to JavaScript

`yarn run build`

* Done! Use CDK to list all stacks

`yarn run cdk list "*"`

* You may override the name of the app

`yarn run cdk list --context appName=MyName`

## Scripts

### ESLint

* Automatically fix problems

`yarn run lint`

* Print problems to stdout

`yarn run lint-dry-run`