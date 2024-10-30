# Contribution

## Package Manager: PNPM

Always use `pnpm` when contributing to this project.

## Release

To release a new version of the package we use the following workflow. The repository must be in a clean state, meaning all code commited and pushed to the origin.

**Create a new Changeset**

```
pnpm exec changeset
```

**Run the CI Pipeline**

```
pnpm run ci
```

**Release a new Version**

```
pn local-release
```

_Afterwards push again_.
