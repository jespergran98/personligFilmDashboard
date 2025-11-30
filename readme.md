# Personal Film Dashboard

En enkel og intuitiv webapplikasjon for å organisere og administrere din personlige film- og seriesamling.

## Kom i gang

Åpne `index.html` i nettleseren din for å starte applikasjonen. Klikk på "+ add movie or series" for å legge til ditt første element.

### Eksempeldata for testing:

**The Lord of the Rings: The Fellowship of the Ring**
- Cover: `https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg`
- Genre: Fantasy
- Rating: 5

**Stranger Things Season 5**
- Cover: `https://images.justwatch.com/poster/320429069/s718/season-5.jpg`
- Genre: Sci-Fi
- Rating: 3

**The Shawshank Redemption**
- Cover: `https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg`
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

---

NOTATER:

blank side med header, og et "add film or series" element.

Hvert dataelement i localStorage bør være et JavaScript-objekt med følgende egenskaper:

UUID

Title

image/ cover art

Genre:
Action
Comedy
Drama
Sci-Fi
Horror
Fantasy
Romance
Crime
Western
Musical
Animation
Documentary

rating (1-5)

---

localStorage key: 'movies'
Data struktur: Array av objekter [{id, title, cover, genre, rating}, ...]
Star ratings: Bruker Unicode-tegn ★ (filled) og ☆ (empty)
Form plassering: Forms vises inline i kortet/add-button ved editing
Sortering: Implementert i filter.js med .sort() metoder:
localeCompare() for streng-sammenligning (title, genre)

--

Implementerte funksjoner:
Legge til film/serie med alle påkrevde felter
Lagring i localStorage
Oppdatere eksisterende filmer (edit-funksjon)
Slette enkeltfilmer
Sortering (dropdown i header med filter.js):

Dato lagt til (nyeste først)
Rating (høyeste først)
Alfabetisk (A-Å)
Genre (alfabetisk)
UUID-system (bruker Date.now() som ID)
Form-validering (alle felt må fylles ut)