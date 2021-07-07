$(document).ready(()=>{
    $.get("./public/json/paises.json", (data)=>{
        const country = data.map((objet)=>{
            return {"name": objet.name}
        });
        $("#country").fuzzyComplete(country);
    });
    $.get("./public/json/estados.json", (data)=>{
        const state = data.map((objet)=>{
            return {"name": objet.name}
        });
        $("#state").fuzzyComplete(state);
    });  
})