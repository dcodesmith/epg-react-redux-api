#!/bin/bash
set -e

rm -rf coverage

# Generate test coverage based on however `npm test` performs the tests.
# nyc --reporter=json npm test

./node_modules/.bin/nyc --reporter=json ./node_modules/.bin/mocha --require tools/.testSetup.js --recursive src/**/*.test.js

mv coverage/coverage-final.json coverage/coverage.json

./node_modules/.bin/remap-istanbul -i coverage/coverage.json -o coverage/coverage.json

./node_modules/.bin/istanbul report lcov text
