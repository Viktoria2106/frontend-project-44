.PHONY: install brain-games publish
install: 
  npm ci
brain-games: 
  node bin/brain-games.js
publish:
  npm publish --dry-run
brain-even:
  node bin/brain-even.js
brain-calc:
  node bin/brain-calc.js
brain-gdc:
  node bin/brain-gdc.js
brain-progression:
  node bin/brain-progression.js
brain-prime:
  node bin/brain-prime.js