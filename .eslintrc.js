module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression'],
			},
		],
		semi: ['error', 'never'],
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
	},

	plugins: ['import'],
}
