# personal-website

Simple static personal website.

## Editing content quickly

Most content is in `content.js`:
- Profile text and email
- About cards
- Work/project cards
- Instagram + Strava profile/post links

`index.html` handles layout and styles.
`script.js` renders content from `content.js`.

To show social posts inline, add `embedUrl` values (when the platform supports embedding for that post/activity). If `embedUrl` is blank, the site shows a direct link instead.
