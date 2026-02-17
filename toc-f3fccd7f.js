// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="quick-start.html"><strong aria-hidden="true">2.</strong> Quick Start</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/index.html"><strong aria-hidden="true">3.</strong> Installation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/supported-platforms.html"><strong aria-hidden="true">3.1.</strong> Supported Platforms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/installing-binary.html"><strong aria-hidden="true">3.2.</strong> Installing a Binary Distribution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/installing-source.html"><strong aria-hidden="true">3.3.</strong> Installing Nix from Source</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/prerequisites-source.html"><strong aria-hidden="true">3.3.1.</strong> Prerequisites</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/obtaining-source.html"><strong aria-hidden="true">3.3.2.</strong> Obtaining a Source Distribution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/building-source.html"><strong aria-hidden="true">3.3.3.</strong> Building Nix from Source</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/installing-docker.html"><strong aria-hidden="true">3.4.</strong> Using Nix within Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/nix-security.html"><strong aria-hidden="true">3.5.</strong> Security</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/single-user.html"><strong aria-hidden="true">3.5.1.</strong> Single-User Mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/multi-user.html"><strong aria-hidden="true">3.5.2.</strong> Multi-User Mode</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/env-variables.html"><strong aria-hidden="true">3.6.</strong> Environment Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/upgrading.html"><strong aria-hidden="true">3.7.</strong> Upgrading Nix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="installation/uninstall.html"><strong aria-hidden="true">3.8.</strong> Uninstalling Nix</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/index.html"><strong aria-hidden="true">4.</strong> Nix Store</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/file-system-object.html"><strong aria-hidden="true">4.1.</strong> File System Object</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/file-system-object/content-address.html"><strong aria-hidden="true">4.1.1.</strong> Content-Addressing File System Objects</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/store-object.html"><strong aria-hidden="true">4.2.</strong> Store Object</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/store-object/content-address.html"><strong aria-hidden="true">4.2.1.</strong> Content-Addressing Store Objects</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/store-path.html"><strong aria-hidden="true">4.3.</strong> Store Path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/derivation/index.html"><strong aria-hidden="true">4.4.</strong> Store Derivation and Deriving Path</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/derivation/outputs/index.html"><strong aria-hidden="true">4.4.1.</strong> Derivation Outputs and Types of Derivations</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/derivation/outputs/content-address.html"><strong aria-hidden="true">4.4.1.1.</strong> Content-addressing derivation outputs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/derivation/outputs/input-address.html"><strong aria-hidden="true">4.4.1.2.</strong> Input-addressing derivation outputs</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/building.html"><strong aria-hidden="true">4.5.</strong> Building</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/index.html"><strong aria-hidden="true">4.6.</strong> Store Types</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/dummy-store.html"><strong aria-hidden="true">4.6.1.</strong> Dummy Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/experimental-local-overlay-store.html"><strong aria-hidden="true">4.6.2.</strong> Experimental Local Overlay Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/experimental-ssh-store.html"><strong aria-hidden="true">4.6.3.</strong> Experimental SSH Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/experimental-ssh-store-with-filesystem-mounted.html"><strong aria-hidden="true">4.6.4.</strong> Experimental SSH Store with filesystem mounted</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/http-binary-cache-store.html"><strong aria-hidden="true">4.6.5.</strong> HTTP Binary Cache Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/local-binary-cache-store.html"><strong aria-hidden="true">4.6.6.</strong> Local Binary Cache Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/local-daemon-store.html"><strong aria-hidden="true">4.6.7.</strong> Local Daemon Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/local-store.html"><strong aria-hidden="true">4.6.8.</strong> Local Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/s3-binary-cache-store.html"><strong aria-hidden="true">4.6.9.</strong> S3 Binary Cache Store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="store/types/ssh-store.html"><strong aria-hidden="true">4.6.10.</strong> SSH Store</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/index.html"><strong aria-hidden="true">5.</strong> Nix Language</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/types.html"><strong aria-hidden="true">5.1.</strong> Data Types</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/string-context.html"><strong aria-hidden="true">5.1.1.</strong> String context</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/syntax.html"><strong aria-hidden="true">5.2.</strong> Syntax and semantics</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/evaluation.html"><strong aria-hidden="true">5.2.1.</strong> Evaluation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/variables.html"><strong aria-hidden="true">5.2.2.</strong> Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/string-literals.html"><strong aria-hidden="true">5.2.3.</strong> String literals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/identifiers.html"><strong aria-hidden="true">5.2.4.</strong> Identifiers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/scope.html"><strong aria-hidden="true">5.2.5.</strong> Scoping rules</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/string-interpolation.html"><strong aria-hidden="true">5.2.6.</strong> String interpolation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/constructs/lookup-path.html"><strong aria-hidden="true">5.2.7.</strong> Lookup path</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/operators.html"><strong aria-hidden="true">5.3.</strong> Operators</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/builtins.html"><strong aria-hidden="true">5.4.</strong> Built-ins</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/derivations.html"><strong aria-hidden="true">5.4.1.</strong> Derivations</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/advanced-attributes.html"><strong aria-hidden="true">5.4.1.1.</strong> Advanced Attributes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="language/import-from-derivation.html"><strong aria-hidden="true">5.4.1.2.</strong> Import From Derivation</a></span></li></ol></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/index.html"><strong aria-hidden="true">6.</strong> Package Management</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/profiles.html"><strong aria-hidden="true">6.1.</strong> Profiles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/garbage-collection.html"><strong aria-hidden="true">6.2.</strong> Garbage Collection</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/garbage-collector-roots.html"><strong aria-hidden="true">6.2.1.</strong> Garbage Collector Roots</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/index.html"><strong aria-hidden="true">7.</strong> Advanced Topics</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/sharing-packages.html"><strong aria-hidden="true">7.1.</strong> Sharing Packages Between Machines</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/binary-cache-substituter.html"><strong aria-hidden="true">7.1.1.</strong> Serving a Nix store via HTTP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="package-management/ssh-substituter.html"><strong aria-hidden="true">7.1.2.</strong> Serving a Nix store via SSH</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/distributed-builds.html"><strong aria-hidden="true">7.2.</strong> Remote Builds</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/cores-vs-jobs.html"><strong aria-hidden="true">7.3.</strong> Tuning Cores and Jobs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/diff-hook.html"><strong aria-hidden="true">7.4.</strong> Verifying Build Reproducibility</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/post-build-hook.html"><strong aria-hidden="true">7.5.</strong> Using the post-build-hook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="advanced-topics/eval-profiler.html"><strong aria-hidden="true">7.6.</strong> Evaluation profiler</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/index.html"><strong aria-hidden="true">8.</strong> Command Reference</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/opt-common.html"><strong aria-hidden="true">8.1.</strong> Common Options</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/env-common.html"><strong aria-hidden="true">8.2.</strong> Common Environment Variables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/main-commands.html"><strong aria-hidden="true">8.3.</strong> Main Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-build.html"><strong aria-hidden="true">8.3.1.</strong> nix-build</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-shell.html"><strong aria-hidden="true">8.3.2.</strong> nix-shell</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store.html"><strong aria-hidden="true">8.3.3.</strong> nix-store</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/add-fixed.html"><strong aria-hidden="true">8.3.3.1.</strong> nix-store --add-fixed</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/add.html"><strong aria-hidden="true">8.3.3.2.</strong> nix-store --add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/delete.html"><strong aria-hidden="true">8.3.3.3.</strong> nix-store --delete</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/dump-db.html"><strong aria-hidden="true">8.3.3.4.</strong> nix-store --dump-db</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/dump.html"><strong aria-hidden="true">8.3.3.5.</strong> nix-store --dump</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/export.html"><strong aria-hidden="true">8.3.3.6.</strong> nix-store --export</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/gc.html"><strong aria-hidden="true">8.3.3.7.</strong> nix-store --gc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/generate-binary-cache-key.html"><strong aria-hidden="true">8.3.3.8.</strong> nix-store --generate-binary-cache-key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/import.html"><strong aria-hidden="true">8.3.3.9.</strong> nix-store --import</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/load-db.html"><strong aria-hidden="true">8.3.3.10.</strong> nix-store --load-db</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/optimise.html"><strong aria-hidden="true">8.3.3.11.</strong> nix-store --optimise</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/print-env.html"><strong aria-hidden="true">8.3.3.12.</strong> nix-store --print-env</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/query.html"><strong aria-hidden="true">8.3.3.13.</strong> nix-store --query</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/read-log.html"><strong aria-hidden="true">8.3.3.14.</strong> nix-store --read-log</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/realise.html"><strong aria-hidden="true">8.3.3.15.</strong> nix-store --realise</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/repair-path.html"><strong aria-hidden="true">8.3.3.16.</strong> nix-store --repair-path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/restore.html"><strong aria-hidden="true">8.3.3.17.</strong> nix-store --restore</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/serve.html"><strong aria-hidden="true">8.3.3.18.</strong> nix-store --serve</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/verify-path.html"><strong aria-hidden="true">8.3.3.19.</strong> nix-store --verify-path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-store/verify.html"><strong aria-hidden="true">8.3.3.20.</strong> nix-store --verify</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env.html"><strong aria-hidden="true">8.3.4.</strong> nix-env</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/delete-generations.html"><strong aria-hidden="true">8.3.4.1.</strong> nix-env --delete-generations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/install.html"><strong aria-hidden="true">8.3.4.2.</strong> nix-env --install</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/list-generations.html"><strong aria-hidden="true">8.3.4.3.</strong> nix-env --list-generations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/query.html"><strong aria-hidden="true">8.3.4.4.</strong> nix-env --query</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/rollback.html"><strong aria-hidden="true">8.3.4.5.</strong> nix-env --rollback</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/set-flag.html"><strong aria-hidden="true">8.3.4.6.</strong> nix-env --set-flag</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/set.html"><strong aria-hidden="true">8.3.4.7.</strong> nix-env --set</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/switch-generation.html"><strong aria-hidden="true">8.3.4.8.</strong> nix-env --switch-generation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/switch-profile.html"><strong aria-hidden="true">8.3.4.9.</strong> nix-env --switch-profile</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/uninstall.html"><strong aria-hidden="true">8.3.4.10.</strong> nix-env --uninstall</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-env/upgrade.html"><strong aria-hidden="true">8.3.4.11.</strong> nix-env --upgrade</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/utilities.html"><strong aria-hidden="true">8.4.</strong> Utilities</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-channel.html"><strong aria-hidden="true">8.4.1.</strong> nix-channel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-collect-garbage.html"><strong aria-hidden="true">8.4.2.</strong> nix-collect-garbage</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-copy-closure.html"><strong aria-hidden="true">8.4.3.</strong> nix-copy-closure</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-daemon.html"><strong aria-hidden="true">8.4.4.</strong> nix-daemon</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-hash.html"><strong aria-hidden="true">8.4.5.</strong> nix-hash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-instantiate.html"><strong aria-hidden="true">8.4.6.</strong> nix-instantiate</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/nix-prefetch-url.html"><strong aria-hidden="true">8.4.7.</strong> nix-prefetch-url</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/experimental-commands.html"><strong aria-hidden="true">8.5.</strong> Experimental Commands</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix.html"><strong aria-hidden="true">8.5.1.</strong> nix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-build.html"><strong aria-hidden="true">8.5.2.</strong> nix build</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-bundle.html"><strong aria-hidden="true">8.5.3.</strong> nix bundle</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-config.html"><strong aria-hidden="true">8.5.4.</strong> nix config</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-config-check.html"><strong aria-hidden="true">8.5.5.</strong> nix config check</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-config-show.html"><strong aria-hidden="true">8.5.6.</strong> nix config show</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-copy.html"><strong aria-hidden="true">8.5.7.</strong> nix copy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-daemon.html"><strong aria-hidden="true">8.5.8.</strong> nix daemon</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-derivation.html"><strong aria-hidden="true">8.5.9.</strong> nix derivation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-derivation-add.html"><strong aria-hidden="true">8.5.10.</strong> nix derivation add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-derivation-show.html"><strong aria-hidden="true">8.5.11.</strong> nix derivation show</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-develop.html"><strong aria-hidden="true">8.5.12.</strong> nix develop</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-edit.html"><strong aria-hidden="true">8.5.13.</strong> nix edit</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-env.html"><strong aria-hidden="true">8.5.14.</strong> nix env</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-env-shell.html"><strong aria-hidden="true">8.5.15.</strong> nix env shell</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-eval.html"><strong aria-hidden="true">8.5.16.</strong> nix eval</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake.html"><strong aria-hidden="true">8.5.17.</strong> nix flake</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-archive.html"><strong aria-hidden="true">8.5.18.</strong> nix flake archive</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-check.html"><strong aria-hidden="true">8.5.19.</strong> nix flake check</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-clone.html"><strong aria-hidden="true">8.5.20.</strong> nix flake clone</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-info.html"><strong aria-hidden="true">8.5.21.</strong> nix flake info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-init.html"><strong aria-hidden="true">8.5.22.</strong> nix flake init</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-lock.html"><strong aria-hidden="true">8.5.23.</strong> nix flake lock</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-metadata.html"><strong aria-hidden="true">8.5.24.</strong> nix flake metadata</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-new.html"><strong aria-hidden="true">8.5.25.</strong> nix flake new</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-prefetch.html"><strong aria-hidden="true">8.5.26.</strong> nix flake prefetch</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-prefetch-inputs.html"><strong aria-hidden="true">8.5.27.</strong> nix flake prefetch-inputs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-show.html"><strong aria-hidden="true">8.5.28.</strong> nix flake show</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-flake-update.html"><strong aria-hidden="true">8.5.29.</strong> nix flake update</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-fmt.html"><strong aria-hidden="true">8.5.30.</strong> nix fmt</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-formatter.html"><strong aria-hidden="true">8.5.31.</strong> nix formatter</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-formatter-build.html"><strong aria-hidden="true">8.5.32.</strong> nix formatter build</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-formatter-run.html"><strong aria-hidden="true">8.5.33.</strong> nix formatter run</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash.html"><strong aria-hidden="true">8.5.34.</strong> nix hash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-convert.html"><strong aria-hidden="true">8.5.35.</strong> nix hash convert</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-file.html"><strong aria-hidden="true">8.5.36.</strong> nix hash file</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-path.html"><strong aria-hidden="true">8.5.37.</strong> nix hash path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-to-base16.html"><strong aria-hidden="true">8.5.38.</strong> nix hash to-base16</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-to-base32.html"><strong aria-hidden="true">8.5.39.</strong> nix hash to-base32</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-to-base64.html"><strong aria-hidden="true">8.5.40.</strong> nix hash to-base64</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-hash-to-sri.html"><strong aria-hidden="true">8.5.41.</strong> nix hash to-sri</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-help.html"><strong aria-hidden="true">8.5.42.</strong> nix help</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-help-stores.html"><strong aria-hidden="true">8.5.43.</strong> nix help-stores</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-key.html"><strong aria-hidden="true">8.5.44.</strong> nix key</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-key-convert-secret-to-public.html"><strong aria-hidden="true">8.5.45.</strong> nix key convert-secret-to-public</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-key-generate-secret.html"><strong aria-hidden="true">8.5.46.</strong> nix key generate-secret</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-log.html"><strong aria-hidden="true">8.5.47.</strong> nix log</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-nar.html"><strong aria-hidden="true">8.5.48.</strong> nix nar</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-nar-cat.html"><strong aria-hidden="true">8.5.49.</strong> nix nar cat</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-nar-dump-path.html"><strong aria-hidden="true">8.5.50.</strong> nix nar dump-path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-nar-ls.html"><strong aria-hidden="true">8.5.51.</strong> nix nar ls</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-nar-pack.html"><strong aria-hidden="true">8.5.52.</strong> nix nar pack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-path-info.html"><strong aria-hidden="true">8.5.53.</strong> nix path-info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-print-dev-env.html"><strong aria-hidden="true">8.5.54.</strong> nix print-dev-env</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile.html"><strong aria-hidden="true">8.5.55.</strong> nix profile</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-add.html"><strong aria-hidden="true">8.5.56.</strong> nix profile add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-diff-closures.html"><strong aria-hidden="true">8.5.57.</strong> nix profile diff-closures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-history.html"><strong aria-hidden="true">8.5.58.</strong> nix profile history</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-list.html"><strong aria-hidden="true">8.5.59.</strong> nix profile list</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-remove.html"><strong aria-hidden="true">8.5.60.</strong> nix profile remove</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-rollback.html"><strong aria-hidden="true">8.5.61.</strong> nix profile rollback</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-upgrade.html"><strong aria-hidden="true">8.5.62.</strong> nix profile upgrade</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-profile-wipe-history.html"><strong aria-hidden="true">8.5.63.</strong> nix profile wipe-history</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-realisation.html"><strong aria-hidden="true">8.5.64.</strong> nix realisation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-realisation-info.html"><strong aria-hidden="true">8.5.65.</strong> nix realisation info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-registry.html"><strong aria-hidden="true">8.5.66.</strong> nix registry</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-registry-add.html"><strong aria-hidden="true">8.5.67.</strong> nix registry add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-registry-list.html"><strong aria-hidden="true">8.5.68.</strong> nix registry list</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-registry-pin.html"><strong aria-hidden="true">8.5.69.</strong> nix registry pin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-registry-remove.html"><strong aria-hidden="true">8.5.70.</strong> nix registry remove</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-repl.html"><strong aria-hidden="true">8.5.71.</strong> nix repl</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-run.html"><strong aria-hidden="true">8.5.72.</strong> nix run</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-search.html"><strong aria-hidden="true">8.5.73.</strong> nix search</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store.html"><strong aria-hidden="true">8.5.74.</strong> nix store</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-add.html"><strong aria-hidden="true">8.5.75.</strong> nix store add</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-add-file.html"><strong aria-hidden="true">8.5.76.</strong> nix store add-file</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-add-path.html"><strong aria-hidden="true">8.5.77.</strong> nix store add-path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-cat.html"><strong aria-hidden="true">8.5.78.</strong> nix store cat</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-copy-log.html"><strong aria-hidden="true">8.5.79.</strong> nix store copy-log</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-copy-sigs.html"><strong aria-hidden="true">8.5.80.</strong> nix store copy-sigs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-delete.html"><strong aria-hidden="true">8.5.81.</strong> nix store delete</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-diff-closures.html"><strong aria-hidden="true">8.5.82.</strong> nix store diff-closures</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-dump-path.html"><strong aria-hidden="true">8.5.83.</strong> nix store dump-path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-gc.html"><strong aria-hidden="true">8.5.84.</strong> nix store gc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-info.html"><strong aria-hidden="true">8.5.85.</strong> nix store info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-ls.html"><strong aria-hidden="true">8.5.86.</strong> nix store ls</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-make-content-addressed.html"><strong aria-hidden="true">8.5.87.</strong> nix store make-content-addressed</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-optimise.html"><strong aria-hidden="true">8.5.88.</strong> nix store optimise</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-path-from-hash-part.html"><strong aria-hidden="true">8.5.89.</strong> nix store path-from-hash-part</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-prefetch-file.html"><strong aria-hidden="true">8.5.90.</strong> nix store prefetch-file</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-repair.html"><strong aria-hidden="true">8.5.91.</strong> nix store repair</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-sign.html"><strong aria-hidden="true">8.5.92.</strong> nix store sign</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-store-verify.html"><strong aria-hidden="true">8.5.93.</strong> nix store verify</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-upgrade-nix.html"><strong aria-hidden="true">8.5.94.</strong> nix upgrade-nix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/new-cli/nix3-why-depends.html"><strong aria-hidden="true">8.5.95.</strong> nix why-depends</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files.html"><strong aria-hidden="true">8.6.</strong> Files</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/conf-file.html"><strong aria-hidden="true">8.6.1.</strong> nix.conf</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files/profiles.html"><strong aria-hidden="true">8.6.2.</strong> Profiles</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files/manifest.nix.html"><strong aria-hidden="true">8.6.2.1.</strong> manifest.nix</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files/manifest.json.html"><strong aria-hidden="true">8.6.2.2.</strong> manifest.json</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files/channels.html"><strong aria-hidden="true">8.6.3.</strong> Channels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="command-ref/files/default-nix-expression.html"><strong aria-hidden="true">8.6.4.</strong> Default Nix expression</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="architecture/architecture.html"><strong aria-hidden="true">9.</strong> Architecture and Design</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/index.html"><strong aria-hidden="true">10.</strong> Formats and Protocols</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/json/index.html"><strong aria-hidden="true">10.1.</strong> JSON Formats</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/json/store-object-info.html"><strong aria-hidden="true">10.1.1.</strong> Store Object Info</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/json/derivation.html"><strong aria-hidden="true">10.1.2.</strong> Derivation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/tarball-fetcher.html"><strong aria-hidden="true">10.2.</strong> Serving Tarball Flakes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/store-path.html"><strong aria-hidden="true">10.3.</strong> Store Path Specification</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/nix-archive.html"><strong aria-hidden="true">10.4.</strong> Nix Archive (NAR) Format</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="protocols/derivation-aterm.html"><strong aria-hidden="true">10.5.</strong> Derivation &quot;ATerm&quot; file format</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="c-api.html"><strong aria-hidden="true">11.</strong> C API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">12.</strong> Glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/index.html"><strong aria-hidden="true">13.</strong> Development</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/building.html"><strong aria-hidden="true">13.1.</strong> Building</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/testing.html"><strong aria-hidden="true">13.2.</strong> Testing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/benchmarking.html"><strong aria-hidden="true">13.3.</strong> Benchmarking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/debugging.html"><strong aria-hidden="true">13.4.</strong> Debugging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/documentation.html"><strong aria-hidden="true">13.5.</strong> Documentation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/cli-guideline.html"><strong aria-hidden="true">13.6.</strong> CLI guideline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/json-guideline.html"><strong aria-hidden="true">13.7.</strong> JSON guideline</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/cxx.html"><strong aria-hidden="true">13.8.</strong> C++ style guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/experimental-features.html"><strong aria-hidden="true">13.9.</strong> Experimental Features</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="development/contributing.html"><strong aria-hidden="true">13.10.</strong> Contributing</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/index.html"><strong aria-hidden="true">14.</strong> Releases</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-next.html"><strong aria-hidden="true">14.1.</strong> Upcoming release</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.31.html"><strong aria-hidden="true">14.2.</strong> Release 2.31 (2025-08-21)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.30.html"><strong aria-hidden="true">14.3.</strong> Release 2.30 (2025-07-07)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.29.html"><strong aria-hidden="true">14.4.</strong> Release 2.29 (2025-05-14)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.28.html"><strong aria-hidden="true">14.5.</strong> Release 2.28 (2025-04-02)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.27.html"><strong aria-hidden="true">14.6.</strong> Release 2.27 (2025-03-03)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.26.html"><strong aria-hidden="true">14.7.</strong> Release 2.26 (2025-01-22)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.25.html"><strong aria-hidden="true">14.8.</strong> Release 2.25 (2024-11-07)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.24.html"><strong aria-hidden="true">14.9.</strong> Release 2.24 (2024-07-31)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.23.html"><strong aria-hidden="true">14.10.</strong> Release 2.23 (2024-06-03)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.22.html"><strong aria-hidden="true">14.11.</strong> Release 2.22 (2024-04-23)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.21.html"><strong aria-hidden="true">14.12.</strong> Release 2.21 (2024-03-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.20.html"><strong aria-hidden="true">14.13.</strong> Release 2.20 (2024-01-29)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.19.html"><strong aria-hidden="true">14.14.</strong> Release 2.19 (2023-11-17)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.18.html"><strong aria-hidden="true">14.15.</strong> Release 2.18 (2023-09-20)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.17.html"><strong aria-hidden="true">14.16.</strong> Release 2.17 (2023-07-24)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.16.html"><strong aria-hidden="true">14.17.</strong> Release 2.16 (2023-05-31)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.15.html"><strong aria-hidden="true">14.18.</strong> Release 2.15 (2023-04-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.14.html"><strong aria-hidden="true">14.19.</strong> Release 2.14 (2023-02-28)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.13.html"><strong aria-hidden="true">14.20.</strong> Release 2.13 (2023-01-17)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.12.html"><strong aria-hidden="true">14.21.</strong> Release 2.12 (2022-12-06)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.11.html"><strong aria-hidden="true">14.22.</strong> Release 2.11 (2022-08-25)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.10.html"><strong aria-hidden="true">14.23.</strong> Release 2.10 (2022-07-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.9.html"><strong aria-hidden="true">14.24.</strong> Release 2.9 (2022-05-30)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.8.html"><strong aria-hidden="true">14.25.</strong> Release 2.8 (2022-04-19)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.7.html"><strong aria-hidden="true">14.26.</strong> Release 2.7 (2022-03-07)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.6.html"><strong aria-hidden="true">14.27.</strong> Release 2.6 (2022-01-24)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.5.html"><strong aria-hidden="true">14.28.</strong> Release 2.5 (2021-12-13)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.4.html"><strong aria-hidden="true">14.29.</strong> Release 2.4 (2021-11-01)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.3.html"><strong aria-hidden="true">14.30.</strong> Release 2.3 (2019-09-04)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.2.html"><strong aria-hidden="true">14.31.</strong> Release 2.2 (2019-01-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.1.html"><strong aria-hidden="true">14.32.</strong> Release 2.1 (2018-09-02)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-2.0.html"><strong aria-hidden="true">14.33.</strong> Release 2.0 (2018-02-22)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.11.10.html"><strong aria-hidden="true">14.34.</strong> Release 1.11.10 (2017-06-12)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.11.html"><strong aria-hidden="true">14.35.</strong> Release 1.11 (2016-01-19)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.10.html"><strong aria-hidden="true">14.36.</strong> Release 1.10 (2015-09-03)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.9.html"><strong aria-hidden="true">14.37.</strong> Release 1.9 (2015-06-12)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.8.html"><strong aria-hidden="true">14.38.</strong> Release 1.8 (2014-12-14)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.7.html"><strong aria-hidden="true">14.39.</strong> Release 1.7 (2014-04-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.6.1.html"><strong aria-hidden="true">14.40.</strong> Release 1.6.1 (2013-10-28)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.6.html"><strong aria-hidden="true">14.41.</strong> Release 1.6 (2013-09-10)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.5.2.html"><strong aria-hidden="true">14.42.</strong> Release 1.5.2 (2013-05-13)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.5.html"><strong aria-hidden="true">14.43.</strong> Release 1.5 (2013-02-27)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.4.html"><strong aria-hidden="true">14.44.</strong> Release 1.4 (2013-02-26)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.3.html"><strong aria-hidden="true">14.45.</strong> Release 1.3 (2013-01-04)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.2.html"><strong aria-hidden="true">14.46.</strong> Release 1.2 (2012-12-06)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.1.html"><strong aria-hidden="true">14.47.</strong> Release 1.1 (2012-07-18)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-1.0.html"><strong aria-hidden="true">14.48.</strong> Release 1.0 (2012-05-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.16.html"><strong aria-hidden="true">14.49.</strong> Release 0.16 (2010-08-17)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.15.html"><strong aria-hidden="true">14.50.</strong> Release 0.15 (2010-03-17)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.14.html"><strong aria-hidden="true">14.51.</strong> Release 0.14 (2010-02-04)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.13.html"><strong aria-hidden="true">14.52.</strong> Release 0.13 (2009-11-05)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.12.html"><strong aria-hidden="true">14.53.</strong> Release 0.12 (2008-11-20)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.11.html"><strong aria-hidden="true">14.54.</strong> Release 0.11 (2007-12-31)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.10.1.html"><strong aria-hidden="true">14.55.</strong> Release 0.10.1 (2006-10-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.10.html"><strong aria-hidden="true">14.56.</strong> Release 0.10 (2006-10-06)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.9.2.html"><strong aria-hidden="true">14.57.</strong> Release 0.9.2 (2005-09-21)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.9.1.html"><strong aria-hidden="true">14.58.</strong> Release 0.9.1 (2005-09-20)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.9.html"><strong aria-hidden="true">14.59.</strong> Release 0.9 (2005-09-16)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.8.1.html"><strong aria-hidden="true">14.60.</strong> Release 0.8.1 (2005-04-13)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.8.html"><strong aria-hidden="true">14.61.</strong> Release 0.8 (2005-04-11)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.7.html"><strong aria-hidden="true">14.62.</strong> Release 0.7 (2005-01-12)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.6.html"><strong aria-hidden="true">14.63.</strong> Release 0.6 (2004-11-14)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="release-notes/rl-0.5.html"><strong aria-hidden="true">14.64.</strong> Release 0.5 and earlier</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

