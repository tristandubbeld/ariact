# ARIACT

This is a really quick setup for a project with Next.js, Typescript, MDX and stitches.

## How to use it?

Install the necessary packages by running

```bash
yarn
```

And run the project with

```bash
yarn dev
```

### Creating a new page

Right now you can't do too much. The root url automatically redirects to `/test/test`. When you want to create a new page for you only have to create a `slug.mdx` file in the `data/test` folder. That page will then be available on `/test/slug`.

## Notes

When you're using Visual Studio Code it's recommended to use the [VSCode MDX plugin](https://marketplace.visualstudio.com/items?itemName=JounQin.vscode-mdx) for syntax highlighting in `.mdx` files.
