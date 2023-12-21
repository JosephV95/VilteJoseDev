
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
          <img src=${ev.img} class="img-fluid rounded " alt="proyecto${ev.name}" > 
          <div class="detailProyect mt-1">
            <h5>${ev.nombre}</h5>
            <div class="text-pro">
              <p>${ev.descripcion} </p>
            </div>
            
            <p class="d-inline" ><b><i>Tecnologías:</i></b></p>
              ${ev.tecnologias.map(tecnologia => `
                <span class="d-inline-block ms-1 tecItem">
                  <img src=${tecnologia.url} height="20px" />  <!-- <p class="d-inline pt-0">${tecnologia.name}</p> -->
                </span>`).join('')}
          </div>
          <div class="links row mt-2">
            <a href=${ev.demo} target="_blank" class="btn btn-outline-warning "><i class="bx bx-link"></i> Demo</a>
            <a href=${ev.repo} target="_blank" class="btn btn-outline-primary "><i class="bx bxl-github"></i> Repo</a>
          </div>
        </div>
      </div>
      `
    })
    contenedorProyectos.innerHTML = infoProyectos
}
cargarProyectos(dataJLV.proyectos)

function cargarSkills(array, unContenedor) {
  let dataSkills = array.map(skill => {
    return `
    <span class="text-center " style="width: 8rem;">
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
