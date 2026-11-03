import "./styles.css";
export default function App() {
/* Lädt CSS-Datei (nur nötig, wenn styles.css existiert) und definiert die Komponente */

  return (
    /* Funktion gibt JSX (Java Script XML - Syntax) zurück */

    <div className="App">
      {/* ----- Aufgabe 1: Button ----- */}
      <h1>Aufgabe 1</h1>
      <button
        id="ButtonElement"
        /* HTML-Attribut mit einem beliebigem String als Wert. */
        onClick={(e) => console.log(e.target.id)}
        /* Event Handler: {} wechseln von JSX zu JavaScript. */
        /* e.target ist das angeklickte Element, .id liest dessen id. */
        onMouseEnter={() => console.log("Mauszeiger auf Button")}
        /* Wird ausgelöst, wenn die Maus in den Button hineinfährt. */
        onMouseLeave={() => console.log("Mauszeiger nicht mehr auf Button")}
        /* Wird ausgelöst, wenn die Maus den Button verlässt. */>     
        Klick mich
      </button>

      <h1>Aufgabe 2</h1>
      {/* ----- Aufgabe 2: Checkbox ----- */}
      <input
        type="checkbox"
        /* Macht aus dem Input ein Kästchen zum Anhaken. */
        onChange={(e) => console.log(e.target.checked)}
        /* onChange statt onClick: meldet genau die Zustandsänderung, auch wenn per Tastatur umgeschaltet wird. (anders als onClick). */
        /* e.target.checked ist ein Boolean: true = angehakt, false = nicht angehakt. */
      ></input>
      
      <h1>Aufgabe 3</h1>
      {/* ----- Aufgabe 3: Textfeld ----- */}
      <input
      /* input ohne "type=" ist ein Textfeld. */
        placeholder="Default wert"
        /* placeholder zeigt ein grauer Hilfetext, solange das Feld leer ist. */  
        onKeyDown={(e) => console.log(e.key)}
        /* onKeyDown wird bei jedem Tastendruck ausgelöst, noch bevor das Zeichen erscheint. */
        /* e.key gibt den Wert der gedrückten Taste zurück (A, B, Shift, Enter, etc.).
          Nützlich, um auf einzelne Tasten zu reagieren (z.B. Enter zum Abschicken). */
      ></input>
      </div>
  );
}