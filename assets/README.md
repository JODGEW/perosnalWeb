# assets

Source images kept in the repo but deliberately outside `public/`.

`next.config.ts` sets `output: 'export'`, which copies all of `public/` into `out/`
verbatim — so anything parked there ships to the CDN whether a page references it
or not. These files are retired or superseded, so they live here instead: still
version-controlled, never deployed.

| File | Why it's here |
| --- | --- |
| `profile.png` | Original white-ground headshot. The site uses `public/images/profile-cutout.png`, the background-removed version derived from it. |
| `movie-recommendation-system.png` | Card image for the Movie Recommendation System project, dropped from Selected work. |
| `CV.png` | Card image for the Fruit / Vegetable Detection project, dropped from Selected work. |

To publish one again, move it back into `public/images/` and reference it from
`src/data/`.
