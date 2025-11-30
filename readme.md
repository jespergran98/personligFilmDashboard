# Personal Film Dashboard

En enkel og intuitiv webapplikasjon for å organisere og administrere din personlige film- og seriesamling.

### Eksempeldata for testing (COPY PASTE):

**The Lord of the Rings: The Fellowship of the Ring**
- Cover: `https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`
- Author/Director: Peter Jackson
- Year: 2001
- Genre: Fantasy
- Rating: 5

**Stranger Things Season 5**
- Cover: `https://images.justwatch.com/poster/320429069/s718/season-5.jpg`
- Author/Director: The Duffer Brothers
- Year: 2025
- Genre: Sci-Fi
- Rating: 3

**The Shawshank Redemption**
- Cover: `https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg`
- Author/Director: Frank Darabont
- Year: 1994
- Genre: Drama
- Rating: 4

---

OPPGAVE:

Film og serieliste: Et system for å logge hvilke filmer og serier som er sett, samt gi vurderinger.

I denne oppgaven skal du bygge en applikasjon som håndterer og manipulerer brukerdata ved hjelp av localStorage. Applikasjonen skal kunne lagre, filtrere, sortere og analysere data på en effektiv måte.

Du skal lage et personlig data dashboard hvor brukeren kan lagre og organisere informasjon relatert til en bestemt hobby, et prosjekt eller en personlig interesse.

---

Krav til funksjonalitet:

Legge til data:
Brukeren skal kunne legge inn nye dataelementer med relevant informasjon.
Dataene lagres i localStorage.

Oppdatering og markering:
Brukeren skal kunne oppdatere eller endre et eksisterende dataelement.
Eventuelt markere elementer som favoritt, anbefalt eller en annen passende status.

Sletting av data:
Brukeren skal kunne slette et enkelt dataelement eller alle elementer.

Filtrering og sortering:
Bruk filter() for å la brukeren filtrere elementer basert på spesifikke kriterier.
Bruk sort() for å gi brukeren muligheten til å sortere dataene, for eksempel alfabetisk, etter dato eller annen relevant kategori.

Statistikk og analyse (Bonusoppgave):
Bruk reduce() for å generere en oppsummering av dataene, for eksempel total tid brukt på trening eller antall bøker lest per sjanger.
Bruk av destructuring:
Bruk destructuring for å hente ut data fra objekter og arrays.

---

Tekniske krav:
Bruk localStorage til å lagre.
Bruk map(), filter(), sort(), reduce() til å manipulere dataene.
Bruk destructuring for enklere datahåndtering.
Bruk event listeners for å håndtere input.
Lag en enkel, men intuitiv UI der data kan legges til, vises, filtreres og slettes.

---

## NOTATER:

Blank side med header, og et "add film or series" element.

Hvert dataelement i localStorage bør være et JavaScript-objekt med følgende egenskaper:

- UUID
- Title
- Author/Director
- Year (release year)
- Image/cover art
- Genre:
  - Action, Comedy, Drama, Sci-Fi, Horror, Fantasy, Romance, Crime, Western, Musical, Animation, Documentary
- Rating (1-5)

---

**localStorage key:** `'movies'`

**Data struktur:** Array av objekter `[{id, title, cover, author, year, genre, rating}, ...]`

**Star ratings:** Bruker Unicode-tegn ★ (filled) og ☆ (empty)

**Form plassering:** Forms vises inline i kortet/add-button ved editing

**Sortering:** Implementert i filter.js med .sort() metoder:
- `localeCompare()` for streng-sammenligning (title, genre, author)
- Numerisk sammenligning for rating og year

---

### Implementerte funksjoner:
- Legge til film/serie med alle påkrevde felter (title, cover, author, year, genre, rating)
- Lagring i localStorage
- Oppdatere eksisterende filmer (edit-funksjon)
- Slette enkeltfilmer
- Sortering (dropdown i header med filter.js):
  - Dato lagt til (nyeste først)
  - Rating (høyeste først)
  - Alfabetisk (A-Å)
  - Genre (alfabetisk)
  - Utgivelsesår (nyeste først)
  - Forfatter/Regissør (alfabetisk)
- UUID-system (bruker Date.now() som ID)
- Form-validering (alle felt må fylles ut)