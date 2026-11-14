# Add your track · Προσθέστε την πίστα σας

## English

### 1. Make the picture
- **Every square is 200 × 200 px.** Width = columns × 200, height = rows × 200. At most 8 × 8 squares. Examples: 8 × 6 → 1600 × 1200 px; 6 × 6 → 1200 × 1200 px.
- No margin, frame or grid lines in the artwork (the app draws the grid when you want it). Put every important item (start, goal, a piece of line) in the middle of a square.
- PNG or JPG, up to 4 MB. Use flat, bright colours: children aged 5–7 will look at it on a tablet.
- Line-following tracks: pure black (#000000) line on a light floor, about 50 px wide, running through the middle of the squares.
- Read the [design brief](DESIGN-BRIEF.md) for details.

You do not need to draw the grid or the numbers: if you have a photo or a scan of a mat, the app can crop it to the right shape (but a picture that already has the right size is cleaner).

### 2. Save it from the app (two files)
1. Open the app and load your picture (button with the picture icon).
2. Tap a square to choose where the robot starts, and use the star and hole buttons to place the target and trap squares, if your track has them.
3. Open the **Tracks** library (the four-squares button) and press **Save my track to share it**. Two files download: `track.jpg` and `track.json`.

### 3. Fill in `track.json`
Open it in any text editor and fill in:

```json
{
  "title": { "el": "Η φάρμα", "en": "The farm" },
  "description": { "el": "…", "en": "…" },
  "author": "Name of your school or yourself",
  "license": "CC-BY-4.0",
  "tags": ["target-and-trap"],
  "robots": ["tpbot-edu", "tpbot"]
}
```

- `title.en` and `author` are required. `license` must be one of `CC0-1.0`, `CC-BY-4.0`, `CC-BY-SA-4.0`, `CC-BY-NC-4.0`, `CC-BY-NC-SA-4.0`.
- Leave `start`, `targets` and `traps` exactly as the app wrote them.

### 4. Upload
1. Make a folder named after your track, using only lowercase letters, numbers and dashes, for example `farm-8x6`. Put `track.jpg` and `track.json` inside. The name must not already be used by another track.
2. On GitHub open the folder **library → public** in this repository → **Add file → Upload files**, and drag the whole folder into the page. Always use `library/public/`: `library/official/` is only for the maintainers. (GitHub will offer to make a copy of the repository for you and then to open a *pull request*. Accept both.)
3. Write the name of the track in the title and tick the boxes of the checklist.

### 5. The automatic check
A few seconds after you open the pull request, a check runs. A green tick means it is fine. A red cross opens a list that says in plain words what to fix (for example "the picture is 1500 × 1100 px; both sizes must be a multiple of 200"). Fix it by uploading the corrected file to the same folder.

When a maintainer approves the pull request, the track appears in the gallery and in the app within a few minutes.

---

## Ελληνικά

### 1. Φτιάξτε την εικόνα
- **Κάθε τετράγωνο είναι 200 × 200 px.** Πλάτος = στήλες × 200, ύψος = γραμμές × 200. Το πολύ 8 × 8 τετράγωνα. Παραδείγματα: 8 × 6 → 1600 × 1200 px· 6 × 6 → 1200 × 1200 px.
- Χωρίς περιθώριο, πλαίσιο ή γραμμές πλέγματος στο σχέδιο (η εφαρμογή σχεδιάζει το πλέγμα όταν το θέλετε). Βάλτε κάθε σημαντικό στοιχείο (αφετηρία, στόχο, κομμάτι γραμμής) στη μέση ενός τετραγώνου.
- PNG ή JPG, έως 4 MB. Επίπεδα, φωτεινά χρώματα: παιδιά 5–7 ετών θα τη βλέπουν σε tablet.
- Πίστες ακολούθησης γραμμής: καθαρό μαύρο (#000000) σε ανοιχτό φόντο, πλάτος περίπου 50 px, με τη γραμμή να περνά από τη μέση των τετραγώνων.
- Περισσότερα στον [οδηγό σχεδίασης](DESIGN-BRIEF.md).

### 2. Αποθηκεύστε την από την εφαρμογή (δύο αρχεία)
1. Ανοίξτε την εφαρμογή και φορτώστε την εικόνα σας (το κουμπί με το εικονίδιο εικόνας).
2. Πατήστε ένα τετράγωνο για να ορίσετε πού ξεκινά το ρομπότ και χρησιμοποιήστε τα κουμπιά με το αστέρι και την τρύπα για τα τετράγωνα στόχου και παγίδας, αν η πίστα σας τα έχει.
3. Ανοίξτε τη βιβλιοθήκη **Πίστες** (το κουμπί με τα τέσσερα τετράγωνα) και πατήστε **Αποθήκευση της πίστας μου για κοινοποίηση**. Θα κατεβούν δύο αρχεία: `track.jpg` και `track.json`.

### 3. Συμπληρώστε το `track.json`
Ανοίξτε το σε οποιονδήποτε επεξεργαστή κειμένου και συμπληρώστε τα πεδία (δείτε το παράδειγμα παραπάνω). Απαραίτητα: `title.en` (και καλό είναι το `title.el`), `author` και `license`. Μην αλλάξετε τα `start`, `targets` και `traps`.

### 4. Ανεβάστε την
1. Φτιάξτε έναν φάκελο με το όνομα της πίστας, μόνο με μικρά λατινικά γράμματα, αριθμούς και παύλες, π.χ. `farm-8x6`, και βάλτε μέσα τα `track.jpg` και `track.json`. Το όνομα δεν πρέπει να το χρησιμοποιεί ήδη άλλη πίστα.
2. Στο GitHub ανοίξτε στο repository τον φάκελο **library → public** → **Add file → Upload files** και σύρτε ολόκληρο τον φάκελο στη σελίδα. Χρησιμοποιείτε πάντα το `library/public/`: το `library/official/` είναι μόνο για τους διαχειριστές. (Το GitHub θα προτείνει να φτιάξει αντίγραφο του repository και μετά να ανοίξει ένα *pull request*· αποδεχτείτε και τα δύο.)
3. Γράψτε το όνομα της πίστας στον τίτλο και σημειώστε τα κουτιά της λίστας ελέγχου.

### 5. Ο αυτόματος έλεγχος
Λίγα δευτερόλεπτα μετά το άνοιγμα του pull request τρέχει ένας έλεγχος. Ένα πράσινο ✓ σημαίνει ότι όλα είναι εντάξει. Ένα κόκκινο ✗ ανοίγει μια λίστα που εξηγεί με απλά λόγια τι πρέπει να διορθωθεί. Όταν ένας διαχειριστής εγκρίνει το pull request, η πίστα εμφανίζεται στη συλλογή και στην εφαρμογή μέσα σε λίγα λεπτά.

---

### Rules for every track · Κανόνες για κάθε πίστα
- You made the picture or you have permission to share it. / Έχετε φτιάξει την εικόνα ή έχετε άδεια να τη μοιραστείτε.
- No photos of identifiable people (especially children), no personal data. / Χωρίς φωτογραφίες αναγνωρίσιμων προσώπων (ιδίως παιδιών) και προσωπικά δεδομένα.
- Choose a licence that lets others use the track in class. / Επιλέξτε άδεια που επιτρέπει σε άλλους να χρησιμοποιούν την πίστα στην τάξη.
