# Learning Log

A log file to keep track of all essential learning and practice applied to this project.

## Logs (yyyy/mm/dd)

- 2026/10/16 - Learned that leading slashes match at any depth, so I anchored /dist/ and /logs/ as a safer option. Including the lockfile is necessary because `npm ci` needs it for reproducible installs.
- 2026/10/16 - Learned that using the latest version of typescript might not guarantee that the peer-dependencies will work. In this case we use 6.0.x since it's the latest version typescript-eslint supports.
