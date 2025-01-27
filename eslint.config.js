export default [
    {
      files: ["**/*.{js,jsx,ts,tsx}"], // Lint these file types
      ignores: ["node_modules", "dist"], // Ignore these directories
      languageOptions: {
        ecmaVersion: 2021, // ES version
        sourceType: "module",
      },
      rules: {
        // Add your custom rules here
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": "error",
      },
    },
  ];
  