import { isDevMode } from "@angular/core"

export default {
    apiURL: isDevMode() ? process.env["NG_APP_API_URL"] : 'http://localhost:3000/api/v1',
    descriptionNewDefault: '<h3>Hola! Soy un markdown</h3><p>Puedes ver la guía de markdown <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">aquí</a></p>'
}