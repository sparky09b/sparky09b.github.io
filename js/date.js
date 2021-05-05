<<<<<<< HEAD
/* let d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear(); */

/* Retrieve current year - use Date object */
let oLastModif = new Date(document.lastModified);
document.querySelector("#currentyear").textContent = oLastModif.getFullYear();

=======
/* let d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear(); */

/* Retrieve current year - use Date object */
let oLastModif = new Date(document.lastModified);
document.querySelector("#currentyear").textContent = oLastModif.getFullYear();

>>>>>>> 1f21ae5585b0aabd930c83e471edeb5a91a4c2c9
document.querySelector("#lastupdated").textContent = document.lastModified;