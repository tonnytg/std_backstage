# Backstage Test V2

This I test `backstage-cli new` to create new Custom Action for Template


doc: https://backstage.io/docs/features/software-templates/writing-custom-actions/

```
    $ yarn backstage-cli new
? What do you want to create?
  plugin-common - A new isomorphic common plugin package
  plugin-node - A new Node.js library plugin package
  plugin-react - A new web library plugin package
> scaffolder-module - An module exporting custom actions for @backstage/plugin-scaffolder-backend

```

Add in Template:


```
      - id: acme:example
         name: test
         action: acme:example
         input:
           myParameter: Test
```
