//skilss function
function skillsefect(){
    var skills=document.getElementById("skills");
    var skills_distance=window.innerHeight- skills.getBoundingClientRect().top;
    if(skills_distance>=300){
        let skills=document.getElementsByClassName("progress");
        skills.[0].classList.add("javascript");
        skills.[1].classList.add("HTML-CSS");
        skills.[2].classList.add("ilustrator");
        skills.[3].classList.add("indesign");
        skills.[4].classList.add("photoshop");
        skills.[5].classList.add("r");
        skills.[6].classList.add("a");
        skills.[7].classList.add("d");
        skills.[8].classList.add("t");
        skills.[9].classList.add("p");
        skills.[10].classList.add("c");
        skills.[11].classList.add("res");
  }
}

window.onscroll= function(){
    skillsefect();


}