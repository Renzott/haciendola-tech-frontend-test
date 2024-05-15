import { isDevMode } from "@angular/core"


export default {
    apiURL: isDevMode() ? 'http://localhost:3000/api/v1' : 'https://api.example.com',
    publicKey: 'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUExNzJYM2RwTXhXV0RTUmpJNlN6ZApaODF4WFhHZmdrUzNIck40ZTZkRk1VZjd1b1hEcU9qVW0zaUdhWGM5eUtpN3hnZjJMbVdPMHJXSlgzVm1JU0hGClVqQW9RN1poMXFoZjVKSXlBZkRpMnhCeUlTL0xMVHRqTkRhUTZGOHJ3V2NzemJmblZMUytZaDd4Q1E0OW1uTlMKWHVhbU5iMVk4Y0R6aCtXM1RhazJ3K1Urem4zcitUT2cyYXBQR21nNnR4VVAwVlE2ZFJuZEppNWY2WStSeWNmSgpLVlBiTDhkRjRIR1k2ajFtdVQ5TU9vL29aQ3E4K3JIdERvNWVONG8wL3lsTDNCMndPemY4REx6djFNK2pxRGY0Cmk1WnU5d3BaaGlFMWkxRmI4TnFWaVdPUkF3VFZMZXBoZ0QxUFZwMEp0MXluWTc2bUhIelEvbGFKdjBtZUx1YkQKeHdJREFRQUIKLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==',
    descriptionNewDefault: '<h3>Hola, soy un markdown</h3><p>Puedes ver la guía de markdown <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">aquí</a></p>'
}