# TypeScript Tutorial

This repository is the result of going through a tutorial on [egghead.io](https://egghead.io/lessons/typescript-setup-a-typescript-project). 

Each lesson corresponds to a branch. The master branch just has the basic configuration:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx parcel index.html",
    "start:node": "node dist/index.js",
    "build-node": "npx parcel index.ts --target=node"
  },
```

To execute the code in node, use `npm run build-node ; npm run start:node`. To execute the code in the browser, use `npm run start`.

## Branch Details
Showing usefulness of js-doc and @ts-check