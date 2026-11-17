# Tracks · Πίστες

Shared floor pictures ("tracks") for the robot coding app. Teachers and schools can add their own, and every track appears in the app's **Tracks** library and on the gallery page.

Κοινές εικόνες δαπέδου («πίστες») για την εφαρμογή προγραμματισμού ρομπότ. Εκπαιδευτικοί και σχολεία μπορούν να προσθέσουν τις δικές τους· κάθε πίστα εμφανίζεται στη βιβλιοθήκη **Πίστες** της εφαρμογής και στη σελίδα της συλλογής.

- Gallery · Συλλογή: `https://robotrails.github.io/tracks/`
- The app · Η εφαρμογή: `https://robotrails.github.io/app/`

## How it works · Πώς λειτουργεί

Every track is a folder, and `library/` has two collections:

- `library/official/` – tracks made by us (the maintainers). Only maintainers can change it.
- `library/public/` – tracks uploaded by teachers, schools and anybody else, after a maintainer has read and approved them.

```
library/
  official/
    line-oval-8x6/
  public/
    farm-8x6/
      track.jpg      the picture (or track.png)
      track.json     title, author, licence, start square, targets, traps
```

A track name must be unique across both collections. The app and the gallery show the two collections separately (Official / Community).

When a track is merged into `main`, a GitHub Action checks it, makes a thumbnail, rebuilds `index.json` and publishes everything to GitHub Pages. The app reads `index.json`, so a new track shows up for everybody within a few minutes. Nothing has to be changed in the app.

Ο φάκελος `library/` έχει δύο συλλογές: `library/official/` (πίστες των διαχειριστών· μόνο εκείνοι τις αλλάζουν) και `library/public/` (πίστες που ανεβάζουν εκπαιδευτικοί, σχολεία και οποιοσδήποτε άλλος, αφού τις εγκρίνει διαχειριστής). Το όνομα μιας πίστας πρέπει να είναι μοναδικό και στις δύο συλλογές.

Όταν μια πίστα εγκρίνεται (merge στο `main`), μια GitHub Action την ελέγχει, φτιάχνει μικρογραφία, ξαναχτίζει το `index.json` και δημοσιεύει τα πάντα στο GitHub Pages. Η εφαρμογή διαβάζει το `index.json`, οπότε η νέα πίστα εμφανίζεται σε όλους μέσα σε λίγα λεπτά.

## The one rule · Ο ένας κανόνας

**Every square is 200 × 200 px.** The picture is *columns × 200* wide and *rows × 200* high, with at most 8 × 8 squares. Examples: 8 × 6 squares = 1600 × 1200 px, 6 × 6 squares = 1200 × 1200 px. See [DESIGN-BRIEF.md](DESIGN-BRIEF.md).

**Κάθε τετράγωνο είναι 200 × 200 px.** Η εικόνα έχει πλάτος *στήλες × 200* και ύψος *γραμμές × 200*, με το πολύ 8 × 8 τετράγωνα. Παραδείγματα: 8 × 6 τετράγωνα = 1600 × 1200 px, 6 × 6 τετράγωνα = 1200 × 1200 px.

## Add a track · Προσθέστε μια πίστα

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: save your track from the app (two files), put them in a folder, upload the folder with *Add file → Upload files*.

Δείτε το [CONTRIBUTING.md](CONTRIBUTING.md). Σύντομα: αποθηκεύστε την πίστα από την εφαρμογή (δύο αρχεία), βάλτε τα σε έναν φάκελο και ανεβάστε τον με *Add file → Upload files*.

## For the maintainers · Για τους διαχειριστές

- Official tracks go in `library/official/`. In Settings → Branches add a rule for `main` with **Require a pull request** and **Require review from Code Owners**; `.github/CODEOWNERS` already points `library/official/` at you. Even without that rule, the check fails a pull request from an outsider that touches `library/official/`.
- Settings → Pages → Source: **GitHub Actions** (once).
- Check on your own computer: `npm ci` then `npm run check`; build the site into `_site/` with `npm run build`.
- Pull requests are checked automatically (`scripts/build.mjs --check`); only merged tracks are published.
- Licences accepted: CC0-1.0, CC-BY-4.0, CC-BY-SA-4.0, CC-BY-NC-4.0, CC-BY-NC-SA-4.0. Read each pull request before merging: no photos of identifiable people, no personal data, and the author must have the right to share the picture.
- The two sample tracks are released under CC0 (no restrictions).
