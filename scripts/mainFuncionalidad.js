
const contenedorSobreMi = document.getElementById("contenedorSobreMi");
const contenedorProyectos = document.getElementById("contenedorProyectos");
const contenedorSFront = document.getElementById("contenedorSFront");
const contenedorSBack = document.getElementById("contenedorSBack");
const contenedorSOtras = document.getElementById("contenedorSOtras");
const contenedorEducacion = document.getElementById("contenedorEduc");
const contenedorExperiencia = document.getElementById("contenedorExp");



function cargarAbout() {
  contenedorSobreMi.innerHTML = dataJLV.sobreMi  
}
cargarAbout()

function cargarProyectos(unArray) {
    let infoProyectos = ""
    unArray.forEach((ev)=>{ infoProyectos +=
      `<div class="col-md-6 col-lg-5"  data-aos="zoom-in">
        <div class="item-proyect">
          <div class="position-relative">
            <img src=${ev.img} class="img-fluid rounded " alt="proyecto${ev.name}" > 
            <div class="text-pro lh-sm d-flex align-items-start align-items-sm-center align-items-md-start align-items-lg-center">
              <p>${ev.descripcion} </p>
            </div>
          </div>
          <div class="detailProyect mt-1">
            <h5>${ev.nombre}</h5>
            
            
            <p class="d-inline" ><b><i>Tecnologías:</i></b></p>
              ${ev.tecnologias.map(tecnologia => `
                <span class="d-inline-block ms-1 tecItem">
                  <img src=${tecnologia.url} height="20px"  data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title=${tecnologia.name} >
                </span>`).join('')}
          </div>
          <div class="links row mt-2">
            <a href=${ev.demo} target="_blank" class="btn btn-outline-info "><i class='bx bx-link-external'></i> Ver sitio</a>
            <a href=${ev.repo} target="_blank" class="btn btn-outline-primary " style="filter:contrast(2)"><i class="bx bxl-github"></i> Repo</a>
          </div>
        </div>
      </div>
      `
    })
    contenedorProyectos.innerHTML = infoProyectos
}
cargarProyectos(dataJLV.proyectos)
//! Configuracion para el funcionamiento de Tooltips de Bootstrap (que se esta usando en las tecnologias en los proyectos) 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// -------------------

function cargarSkills(array, unContenedor) {
  let dataSkills = array.map(skill => {
    return `
    <span class="text-center skillTecItem" style="width: 8rem;">
      <span>
        <img src=${skill.url} height="60px" />
      </span>
      <p>${skill.name}</p>
    </span>`;
  });

  // con join('') para convertir el array de strings en una sola cadena de texto
  unContenedor.innerHTML = dataSkills.join('');
}

cargarSkills(dataJLV.habilidades.frontend, contenedorSFront);
cargarSkills(dataJLV.habilidades.backend, contenedorSBack);
cargarSkills(dataJLV.habilidades.otras, contenedorSOtras);

function cargarEducOExp(unArray, unContenedor){
  let infoACargar = unArray.map((item)=>{
    return `
    <div class="resume-item">
      <h4>${item.titulo}</h4>
      <h5>${item.fecha}</h5>
      <p class="mb-1" ><em><b>${item.instituto}</b></em></p>
      <p class="lh-sm fw-light">${item.descripcion}</p>
    </div>`
  });
  unContenedor.innerHTML = infoACargar.join('')
}
cargarEducOExp(dataJLV.educación, contenedorEducacion);
cargarEducOExp(dataJLV.experiencia, contenedorExperiencia)
