# Bundlewharf

This small repository bundles [wharfkit](https://wharfkit.com/) into a single JavaScript file, making it usable in web apps without Node.js or other JavaScript frameworks. No optimizations are performed; it uses a minimal [Vite](https://vite.dev/) configuration.

## Requirements
 - Node.js (tested with `v23.1.0`)

> [!NOTE]  
> It's recommended to use [nvm](https://github.com/nvm-sh/nvm) for the installation of `Node.js`. In case you use `fish` as your shell, you may need additional steps to make `nvm` work, for instance the installation of [fish-nvm](https://github.com/FabioAntunes/fish-nvm).

## How to use

```sh
npm update
npx vite build
```

The output will be in the `dist/assets` folder, named `whartfkit.js`.