const srcs = ["../../assets/explainedRoles2/M.MEGAMA.png", "../../assets/explainedRoles2/S.M.MEGAMA.png", "../../assets/explainedRoles2/KAHADIT.png"
, "../../assets/explainedRoles2/MASHAD.K.png", "../../assets/explainedRoles2/M.MEGAMA.png", "../../assets/explainedRoles2/RASAP.K.png",
"../../assets/explainedRoles2/OVDIM.png", "../../assets/explainedRoles2/M.HASHLAMA.CIPA.png", "../../assets/explainedRoles2/MADKATZ.CIPA.png",
"../../assets/explainedRoles2/S.M.HASHLAMA.CIPA.png", "../../assets/explainedRoles2/SHALISHA.png", "../../assets/explainedRoles2/M.HASHLAMA.KELA.png",
"../../assets/explainedRoles2/MADKATZ.KELA.png","../../assets/explainedRoles2/M.HASHLAMA.HETZ.png", "../../assets/explainedRoles2/MADKATZ.HETZ.png",
"../../assets/explainedRoles2/-HASHLAMA.Y.png", "../../assets/explainedRoles2/MADKATZ.Y.png","../../assets/explainedRoles2/-MEFAKDIM.png", 
"../../assets/explainedRoles2/MASHAD.png", "../../assets/explainedRoles2/M.TZVATIM.png", "../../assets/explainedRoles2/S.M.MEFAKDIM.png",
"../../assets/explainedRoles2/RASAP.png", "../../assets/explainedRoles2/SAMALIM.png"];

window.addEventListener("load", () => {
    document.getElementById("symbol").addEventListener("click", goToMain);
    document.getElementById("roles-container").addEventListener("click", explainedRole);
    document.getElementById("go-back-to-roles").addEventListener("click", goToRoles);
})

function goToRoles() {
    window.location.href = "../roles/roles.html";
}

function goToMain() {
    window.location.href = "../../index.html";
}

function explainedRole(event) {
    console.log(event.target.id);
    let roleNum = Number(event.target.id)
    console.log(1 + roleNum);
    if(!isNaN(Number(event.target.id))) {
        document.getElementById("explain-container").style.display = "block";
        document.getElementById("explain-card").setAttribute("src", srcs[roleNum])
        document.getElementById("close-btn").addEventListener("click", ()=> {
            document.getElementById("explain-container").style.display = "none";  
        })
    }
}