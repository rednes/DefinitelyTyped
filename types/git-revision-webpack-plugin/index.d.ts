// Type definitions for git-revision-webpack-plugin 3.0
// Project: https://github.com/pirelenito/git-revision-webpack-plugin
// Definitions by: Anders Kaseorg <https://github.com/andersk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Compiler, WebpackPluginInstance } from "webpack";

declare namespace GitRevisionPlugin {
    interface Options {
        lightweightTags?: boolean | undefined;
        branch?: boolean | undefined;
        commithashCommand?: string | undefined;
        versionCommand?: string | undefined;
        branchCommand?: string | undefined;
        gitWorkTree?: string | undefined;
    }
}

declare class GitRevisionPlugin implements WebpackPluginInstance {
    constructor(options?: GitRevisionPlugin.Options);
    apply(compiler: Compiler): void;
    version(): string;
    commithash(): string;
    branch(): string;
}

export = GitRevisionPlugin;
