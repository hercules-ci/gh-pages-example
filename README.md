
# gh-pages example

This repository demonstrates a deployment of GitHub Pages using Hercules CI.

You are free to reuse this code in your own projects; see [CC0 license](./LICENSE).

# How this was written

This section is for educational purposes and future reference. This repository already contains a complete example.

## 1. Use flake-parts

```console
nix flake init -t flake-parts
nix flake lock
```

## 2. Package a documentation site

For this example, we'll use Nix's documentation.

`flake.nix`
```diff
-        packages.default = pkgs.hello;
+        packages.default = pkgs.nix.doc;
```
