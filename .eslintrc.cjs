module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	// plugins:['react','@typescript-eslint'],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/react-in-jsx-scope": 0,
		semi: 0, // 关闭语句末尾分号
		"prefer-const": 2, // 开启不变的变量一定要使用const
		"no-unused-vars": error,
	},
};
