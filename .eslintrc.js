module.exports = {
    "globals": { "angular": false, "module": false, "inject": false, "document": false },
    "env": {
        "jest":true,
        "browser": true,
        "es6": true,
        "amd":true,
        "node":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-mixed-spaces-and-tabs": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};