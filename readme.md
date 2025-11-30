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

Notater:

blank side med header, og et "add film or series" element.

Hvert dataelement (film eller serie) i localStorage bør være et JavaScript-objekt med følgende egenskaper:

UUID
tittel
type (film/serie)
sjanger
forfatter
vurdering
status (brukeren kan velge om dette er en film som allerede er sett, bør sees, anbefalt etc)
dato elementet ble lagt til

type:
film
serie

vurdering (1-5)

Sjangere:
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