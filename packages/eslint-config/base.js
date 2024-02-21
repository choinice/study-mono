module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["react", "@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
    settings: {
        "react": {
        "version": "detect"
        }
    },
    env: {
        "browser": true,
        "es2021": true,
        "node": true
   }
}