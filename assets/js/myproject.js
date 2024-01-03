const myProjects = [];

function myProject (e) {
    e.preventDefault()
    
    const projectName = document.getElementById('projectName').value;
    let startDate = new Date(document.getElementById('startDate').value);
    let endDate = new Date(document.getElementById('endDate').value);
    const description = document.getElementById('description').value;
    let nodejs = document.getElementById('nodejs').checked;
    let reactjs = document.getElementById('reactjs').checked;
    let nextjs = document.getElementById('nextjs').checked;
    let typescript = document.getElementById('typescript').checked;
    let image = document.getElementById('image').files;
    image= URL.createObjectURL(image[0]);
    

    // Calculation duration
    let minDate = endDate - startDate;
    let minMonth = minDate / (1000 * 60 * 60 * 24 * 30);
    let totalMonth = Math.floor(minMonth)

    const myProject = {
        projectName,
        startDate,
        endDate,
        nodejs,
        reactjs,
        nextjs,
        typescript,
        image,
        totalMonth,
        description
    }

    myProjects.unshift(myProject)
    renderMyProject ()


}

// Delete 1 card
function deleteProject(index) {
    myProjects.splice(index, 1);
    renderMyProject(); 
}


function renderMyProject () {

    let html = ''

 
    for(let i = 0 ; i < myProjects.length ; i++) {
       
        html += `<div class="container-card">
        <div class="container-card-2">
            <div class="container-content">
                <img src="${myProjects[i].image}" alt="smartphone" class="image-1">
                <h4>${myProjects[i].projectName}</h4>
                <span  id="totalMonth">${myProjects[i].totalMonth} bulan</span>
                <p>${myProjects[i].description}</p>
            </div>
            <div class="container-logo">
                <img src="${myProjects[i].nodejs ? 'assets/img/nodejs.png' : ''}" alt="logo-nodejs" class="logo-nodejs" id="logoNodejs" style="${!myProjects[i].nodejs ? 'display: none;' : ''}">
                <img src="${myProjects[i].reactjs ? "assets/img/reactjs.png" : "" }" alt="logo-reactjs" class="logo-reactjs"  id="logoReactjs" style="${!myProjects[i].reactjs ? 'display: none;' : ''}">
                <img src="${myProjects[i].nextjs ? "assets/img/nextjs.png" : "" }"  alt="logo-nextjs" class="logo-nextjs" id="logoNextjs" style="${!myProjects[i].nextjs ? 'display: none;' : ''}">
                <img src="${myProjects[i].typescript ? "assets/img/typescript.png" : "" }"  alt="logo-typescript" class="logo-typescript" id="logoTypescript" style="${!myProjects[i].typescript ? 'display: none;' : ''}">
            </div>
            <div class="container-button">
                <button onclick="window.location.href='detail.html?id=${i}'" class="edit-button">edit</button>
                <button class="delete-button" onclick="deleteProject(${i})">delete</button>
            </div>
        </div>
      
    </div>`
    }

    document.getElementById('container').innerHTML = html

    const container = document.querySelector('.container-master');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(380px, 1fr))';
    container.style.gridGap = '20px';
    container.style.padding = '20px';

}

renderMyProject ()
