# 🌦️ React + Vite Weerapplicatie

Deze applicatie maakt gebruik van React en Vite om actuele weergegevens op te halen op basis van de stad die de gebruiker invoert. De gegevens worden opgehaald van de **OpenWeatherMap API** en omvatten informatie zoals temperatuur, luchtvochtigheid en windsnelheid.

---

## 📦 Projectstructuur

### Belangrijke onderdelen:

- **React Hooks**: `useState` om de state van de applicatie te beheren.
- **`App.css`**: Bevat de stijlen voor de app.
- **`react-icons`**: Iconen voor UI-elementen zoals temperatuur, luchtvochtigheid, stad en wind.
- **`axios`**: Gebruikt om HTTP-verzoeken te doen en weergegevens op te halen van de OpenWeatherMap API.

---

## 📊 State en Variabelen

### `useState` Hooks:

- **`city`**: Houdt de naam van de ingevoerde stad bij.
- **`setCity`**: Functie om de waarde van `city` bij te werken.
- **`data`**: Bevat de weergegevens na het ophalen via de API. Standaard ingesteld op `null`.
- **`isLoading`**: Een boolean die aangeeft of de app momenteel bezig is met het ophalen van gegevens.

### API Configuratie:

- **`API_KEY`** en **`BASE_URL`**: Deze worden opgehaald uit de `.env` omgeving van de applicatie en bevatten respectievelijk de API-sleutel en de basis-URL voor de weer-API.

---

## ⚙️ Functies

### 1. `handleCity`

- **Doel**: Slaat de ingevoerde stad op in de `city` state.
- **Gebruikt door**: Het tekstveld waarin de gebruiker de stad invoert.


