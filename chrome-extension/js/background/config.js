//----------------------------------------------------------------------------------------------------------------------------------------------------
// Darkness Configuration
//----------------------------------------------------------------------------------------------------------------------------------------------------

var GOOGLE_HOST_REGEXP = '^(www|encrypted)\.google\.(com|[a-z][a-z]|co\.[a-z][a-z]|com\.[a-z][a-z])$';

var CONFIG = {
	defaultTheme: 'iceberg',

	// List of Darkness themes
	themes: {
		'iceberg': {
			key: 'iceberg',
			name: 'Iceberg'
		},
		'base16tomorrow': {
			key: 'base16tomorrow',
			name: 'Base16 Tomorrow'
		},
		'material': {
			key: 'material',
			name: 'Material Design'
		}
	},

	// List of websites supported by Darkness
	sites: {
		'google': {
			key: 'google', // Must be the same as the object key
			name: 'Google',
			support: 'full',
			hostRegExp: new RegExp(GOOGLE_HOST_REGEXP, 'i'),
			pathRegExp: new RegExp('^/(search|webhp)?$'), // pathRegExp is optional and unnecessary for most websites
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Lior Grossman', link: 'http://liorgrossman.com' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Itay Klein', link: 'http://itiktech.blogspot.co.il/' },
				{ name: 'Arseny Gurevich', link: 'https://www.facebook.com/Arseny.Gurevich' }
			]
		},
		'facebook': {
			key: 'facebook', // Must be the same as the object key
			name: 'Facebook',
			support: 'full',
			hostRegExp: new RegExp('^(www|web|beta)\.facebook\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Marco Cazzaro', link: 'http://www.marcocazzaro.com/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Itamar Ostricher', link: 'http://www.ostricher.com/' },
				{ name: 'Oded Noam', link: 'http://www.odednoam.com/' },
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			]
		},
		'gmail': {
			key: 'gmail', // Must be the same as the object key
			name: 'Gmail',
			support: 'full',
			hostRegExp: new RegExp('^mail\.google\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Damian Schmidt', link: 'http://iristormdesign.com/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Alon Diamant', link: 'http://www.alondiamant.com/' },
				{ name: 'Gilad Sasson', link: 'http://www.nekuda.co.il/en/' },
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			]
		},
		'inbox': {
			key: 'inbox', // Must be the same as the object key
			name: 'Inbox',
			support: 'full',
			hostRegExp: new RegExp('^inbox\.google\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
			]
		},
		'youtube': {
			key: 'youtube', // Must be the same as the object key
			name: 'YouTube',
			support: 'full',
			hostRegExp: new RegExp('^www\.youtube\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Kevin Mata' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Mayrun Digmi', link: 'http://www.mayrundigmi.com/' },
				{ name: 'Lior Grossman', link: 'http://liorgrossman.com' },
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			]
		},
		'github': {
			key: 'github', // Must be the same as the object key
			name: 'GitHub',
			support: 'full',
			hostRegExp: new RegExp('^(gist\.|)github\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' },
				{ name: 'Nicolas Botello', link: 'http://nicolasbotello.com/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Lior Grossman', link: 'http://liorgrossman.com' }
			]
		},
		'sharelatex': {
			key: 'sharelatex', // Must be the same as the object key
			name: 'ShareLaTeX',
			support: 'full',
			hostRegExp: new RegExp('\.sharelatex\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
			]
		},
		'twitter': {
			key: 'twitter', // Must be the same as the object key
			name: 'Twitter',
			support: 'full',
			hostRegExp: new RegExp('^twitter\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
				{ name: 'Lior Grossman', link: 'http://liorgrossman.com' }
			]
		},
		'amazon': {
			key: 'amazon', // Must be the same as the object key
			name: 'Amazon',
			support: 'in-development', // This skin still requires further improvement, help us by improving it! 
			hostRegExp: new RegExp('\.amazon\.(co.uk|com|es|de|co.jp)$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Guillermo Muela', link: 'https://github.com/Gmuela' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
			]
		},
		'serverfault': {
			key: 'serverfault', // Must be the same as the object key
			name: 'ServerFault',
			support: 'ask-developers',
			hostRegExp: new RegExp('^serverfault\.com$', 'i')
		},
		'stackoverflow': {
			key: 'stackoverflow', // Must be the same as the object key
			name: 'StackOverflow',
			support: 'ask-developers', // Show a call to action for developers to join our community (don't show it in dev mode)
			hostRegExp: new RegExp('^stackoverflow\.com$', 'i')
		},
		'askUbuntu': {
			key: 'askUbuntu', // Must be the same as the object key
			name: 'askUbuntu',
			support: 'ask-developers',
			hostRegExp: new RegExp('^askubuntu\.com$', 'i')
		},
		'trello': {
			key: 'trello', // Must be the same as the object key
			name: 'Trello',
			support: 'ask-developers', // Show a call to action for developers to join our community (don't show it in dev mode)
			hostRegExp: new RegExp('^trello\.com$', 'i')
		},
		'dropbox': {
			key: 'dropbox', // Must be the same as the object key
			name: 'Dropbox',
			support: 'full',
			hostRegExp: new RegExp('^www\.dropbox\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
			]
		},
		'reddit': {
			key: 'reddit', // Must be the same as the object key
			name: 'Reddit',
			support: 'full',
			hostRegExp: new RegExp('^www\.reddit\.com$', 'i'),
			creators: [ // Who wrote the 80%+ of the skin?
				{ name: 'Theis Villumsen', link: 'https://folkmann.it/' }
			],
			topContributors: [ // Top 3 contributors of fixes & improvements, excluding the creator
			]
		}
	}
};