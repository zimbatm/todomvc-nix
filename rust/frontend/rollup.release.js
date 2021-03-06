import rust from "@wasm-tool/rollup-plugin-rust";

export default {
    input: {
        index: "./Cargo.toml",
    },
    output: {
        dir: "devhtml/js",
        format: "iife",
        sourcemap: true,
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "assets/[name]-[extname]",
    },
    plugins: [
        rust({
            serverPath: "/js/",
            debug: true,
            cargoArgs: ["--features", "develop"],
        }),
    ],
};
