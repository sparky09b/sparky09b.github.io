/* Retrieve current year - use Date object */
let oLastModif = new Date(document.lastModified);
document.querySelector("#currentyear").textContent = oLastModif.getFullYear();
document.querySelector("#lastupdated").textContent = document.lastModified;