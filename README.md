
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

## 3. Add hercules-ci-effects

See [the hercules-ci-effects docs](https://docs.hercules-ci.com/hercules-ci-effects/guide/import-or-pin#_flakes_with_flake_parts).

`flake.nix`
```diff
   inputs = {
+    hercules-ci-effects.url = "github:hercules-ci/hercules-ci-effects";
```

```diff
       imports = [
+        hercules-ci-effects.flakeModule
       ];
```

## 4. Configure `hercules-ci.github-pages`

`flake.nix`
```diff
+  hercules-ci.github-pages.branch = "main";

   perSystem = { config, ... }: {
     packages.default = pkgs.nix.doc;

+    hercules-ci.github-pages.settings.contents = config.packages.default + "/share/doc/nix/manual";
   };
```
