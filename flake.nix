{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    hercules-ci-effects.url = "github:hercules-ci/hercules-ci-effects";
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.hercules-ci-effects.flakeModule
      ];
      systems = [ "x86_64-linux" "aarch64-darwin" ];

      hercules-ci.github-pages.branch = "main";

      hercules-ci.flake-update.enable = true;
      hercules-ci.flake-update.when.dayOfMonth = 17;
      hercules-ci.flake-update.autoMergeMethod = "merge";

      perSystem = { config, self', inputs', pkgs, system, ... }: {
        packages.default = pkgs.nix.doc;

        hercules-ci.github-pages.settings.contents = config.packages.default + "/share/doc/nix/manual";
      };
    };
}
