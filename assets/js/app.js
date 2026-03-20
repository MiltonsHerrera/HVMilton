// header load
const header = document.getElementById("header");
header.innerHTML = `
<h1>${cv.personalInfo.name}</h1>
<hr>
<h2>${cv.personalInfo.title}</h2>
<h3>${cv.personalInfo.location} 
| <a href="http://wa.me/57${cv.personalInfo.phone}">${cv.personalInfo.phone}</a> 
| <a href="mailto:${cv.personalInfo.email}" target="_blank" rel="noopener noreferrer">${cv.personalInfo.email}</a>
| <a href="downloads/CVMiltonSHerrera.pdf" target="_blank">Descargar CV en PDF</a>
</h3>
`;


// aside load
const aside = document.getElementById("aside");
aside.innerHTML = `<br>
<h2>Perfil Profesional</h2>
<hr>
<p>${cv.professionalProfile}</p>
<br>
<h2>Formación Académica </h2>
<hr>
${cv.education.map(edu => `
    <p>${edu.degree}</p>
    <p>${edu.institution}</p>
     <p>${edu.year}</p>
    `).join("")}
<br>
<h2>Referencia</h2>
<hr>
${cv.references.map(ref => `
     <p>${ref.name}</p>
      <p>${ref.profession}</p>
    `).join("")}
`;

// main load
const main = document.getElementById("main");
main.innerHTML = `
<h2>Experiencia Laboral</h2>
<hr>
${cv.workExperience.map(job =>
    `<div class="card">
    <u><h3>${job.position}</h3></u>
    <h4>${job.company}</h4>
    <h5>${job.location}</h5>
    <h5>${job.period}</h5>
    <ul>
       ${job.responsibilities.map(respontbilities => `
             <li>${respontbilities} </li>
            `).join("")}
    </ul>
    <br>
    </div>`
).join("")}
<div class="card-two">
<h2>Habilidades tecnicas</h2>
<hr>
<u><h3>Sistemas Operativos</h3></u>
<ul>
${cv.technicalSkills.operatingSystems.map(it => `
    <li>${it}</li>
    `).join("")}
</ul>
</div>
<div class="card-two">
<u><h3>Hardware</h3></u>
<ul>
${cv.technicalSkills.hardware.map(it => `
    <li>${it}</li>
    `).join("")}
</ul>
</div>
<div class="card-two">
<u><h3>Redes y Conectividad</h3></u>
<ul>
${cv.technicalSkills.networking.map(it => `
    <li>${it}</li>
    `).join("")}
</ul>
</div>
<div class="card-two">
<u><h3>Seguridad</h3></u>
<ul>
${cv.technicalSkills.security.map(it => `
    <li>${it}</li>
    `).join("")}
</ul>
</div>
<div class="card-two">
<u><h3>Herramientas</h3></u>
<ul>
${cv.technicalSkills.tools.map(it => `
    <li>${it}</li>
    `).join("")}
</ul>
</div>
 `;

//  footer load
const footer = document.getElementById("footer");
footer.innerHTML = `
<p>©${new Date().getFullYear()} | Milton Sarria Herrera | Todos los derechos reservados</p>
`;