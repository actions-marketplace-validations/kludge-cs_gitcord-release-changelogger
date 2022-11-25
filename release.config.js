module.exports = {
	branches: [
		"build",
		{
			name: "main",
			prerelease: "source"
		}
	],
	plugins: [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		"@semantic-release/changelog",
		[
			"@semantic-release/npm",
			{npmPublish: false}
		],
		"@semantic-release/github",
		[
			"@semantic-release/git",
			{
				assets: [
					"package.json",
					"package-lock.json",
					"CHANGELOG.md"
				],
				message: "chore: release ${nextRelease.version}\n\n${nextRelease.notes}"
			}
		]
	]
};
