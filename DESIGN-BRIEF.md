# Backdrop pictures for the robot stage — brief for the designer

## English

**What we need:** floor pictures (backdrops) for a small robot that moves one square at a time. The robot always stands in the middle of a square, and the squares must all be exactly the same size.

### 1. Size — one rule
- **Every square is exactly 200 × 200 px.**
- Picture width = number of columns × 200 px. Picture height = number of rows × 200 px.
- Maximum **8 columns × 8 rows** (1600 × 1600 px). The number of columns and rows can be different for each picture.
- The picture takes the shape of the grid, so there is no fixed screen ratio to match. The app shows the picture as large as fits on the tablet screen, and the squares stay square.

| Grid (columns × rows) | Picture size | Ratio |
|---|---|---|
| 8 × 8 | 1600 × 1600 px | 1:1 |
| 8 × 6 | 1600 × 1200 px | 4:3 |
| 8 × 5 | 1600 × 1000 px | 16:10 |
| 6 × 6 | 1200 × 1200 px | 1:1 |
| 5 × 5 | 1000 × 1000 px | 1:1 |
| 4 × 3 | 800 × 600 px | 4:3 |

(Please use the exact sizes. If the width and height are not within about 3 % of a multiple of 200 px, the app will crop the picture instead of reading the grid from it.)

### 2. Layout
- **No margin, frame, border, shadow or bleed.** The artwork fills the canvas from the first pixel to the last, and the grid starts at the top-left corner.
- Square edges fall at multiples of 200 px (200, 400, 600 …).
- **Do not draw grid lines** (the app can draw them on top). Different floor colours or patterns per square are fine.
- Put every important item (start square, goal, obstacle, pieces of a line, pictures) **in the middle of a square**, not on an edge.
- Leave the **bottom row** easy to start from: the robot starts in the bottom-middle square by default (it can be moved).

### 3. File
- PNG or JPG, RGB (sRGB), no transparency, no layers, up to about 3 MB.
- Name: `theme_COLUMNSxROWS.png`, for example `farm_8x6.png`.

### 4. Style
- Flat, bright, simple shapes and strong contrast, because children aged 5–7 will watch it on a tablet or projector. Avoid thin lines and tiny details.
- **If the picture is for the line sensor:** use pure black (#000000) lines on a light background, running through the middle of squares. Start with a line width of about 50 px (a quarter of a square) and we will adjust it after testing with the real robot.

---

## Ελληνικά

**Τι χρειαζόμαστε:** εικόνες δαπέδου (φόντα) για ένα μικρό ρομπότ που κινείται ένα τετράγωνο τη φορά. Το ρομπότ στέκεται πάντα στη μέση ενός τετραγώνου και όλα τα τετράγωνα πρέπει να έχουν ακριβώς το ίδιο μέγεθος.

### 1. Διαστάσεις — ένας κανόνας
- **Κάθε τετράγωνο είναι ακριβώς 200 × 200 px.**
- Πλάτος εικόνας = αριθμός στηλών × 200 px. Ύψος εικόνας = αριθμός γραμμών × 200 px.
- Το πολύ **8 στήλες × 8 γραμμές** (1600 × 1600 px). Οι στήλες και οι γραμμές μπορεί να διαφέρουν από εικόνα σε εικόνα.
- Η εικόνα παίρνει το σχήμα του πλέγματος, άρα δεν χρειάζεται να ταιριάζει σε συγκεκριμένη αναλογία οθόνης. Η εφαρμογή την εμφανίζει όσο πιο μεγάλη χωράει στην οθόνη του tablet και τα τετράγωνα μένουν τετράγωνα.

| Πλέγμα (στήλες × γραμμές) | Μέγεθος εικόνας | Αναλογία |
|---|---|---|
| 8 × 8 | 1600 × 1600 px | 1:1 |
| 8 × 6 | 1600 × 1200 px | 4:3 |
| 8 × 5 | 1600 × 1000 px | 16:10 |
| 6 × 6 | 1200 × 1200 px | 1:1 |
| 5 × 5 | 1000 × 1000 px | 1:1 |
| 4 × 3 | 800 × 600 px | 4:3 |

(Παρακαλούμε χρησιμοποιήστε ακριβώς αυτά τα μεγέθη. Αν το πλάτος και το ύψος δεν είναι μέσα σε περίπου 3 % από πολλαπλάσιο των 200 px, η εφαρμογή θα κόψει την εικόνα αντί να διαβάσει το πλέγμα από αυτήν.)

### 2. Διάταξη
- **Χωρίς περιθώριο, πλαίσιο, περίγραμμα, σκιά ή bleed.** Το σχέδιο γεμίζει όλο το καμβά από το πρώτο ως το τελευταίο pixel και το πλέγμα ξεκινά από την πάνω αριστερή γωνία.
- Οι άκρες των τετραγώνων πέφτουν σε πολλαπλάσια των 200 px (200, 400, 600 …).
- **Μη σχεδιάζετε γραμμές πλέγματος** (η εφαρμογή μπορεί να τις σχεδιάσει από πάνω). Διαφορετικά χρώματα ή μοτίβα ανά τετράγωνο είναι εντάξει.
- Βάλτε κάθε σημαντικό στοιχείο (τετράγωνο εκκίνησης, στόχο, εμπόδιο, κομμάτια γραμμής, εικόνες) **στη μέση ενός τετραγώνου**, όχι στην άκρη.
- Αφήστε την **κάτω γραμμή** εύκολη για εκκίνηση: το ρομπότ ξεκινά από προεπιλογή στο κάτω μεσαίο τετράγωνο (μπορεί να μετακινηθεί).

### 3. Αρχείο
- PNG ή JPG, RGB (sRGB), χωρίς διαφάνεια, χωρίς layers, έως περίπου 3 MB.
- Όνομα: `θέμα_ΣΤΗΛΕΣxΓΡΑΜΜΕΣ.png`, π.χ. `farm_8x6.png`.

### 4. Ύφος
- Επίπεδα, φωτεινά, απλά σχήματα και έντονη αντίθεση, γιατί παιδιά 5–7 ετών θα τα βλέπουν σε tablet ή προβολέα. Αποφύγετε λεπτές γραμμές και μικρές λεπτομέρειες.
- **Αν η εικόνα είναι για τον αισθητήρα γραμμής:** χρησιμοποιήστε καθαρό μαύρο (#000000) σε ανοιχτό φόντο, με τις γραμμές να περνούν από τη μέση των τετραγώνων. Ξεκινήστε με πάχος γραμμής περίπου 50 px (το ένα τέταρτο του τετραγώνου) και θα το προσαρμόσουμε μετά από δοκιμή με το πραγματικό ρομπότ.
