let age = Number(prompt("Quel est votre âge"));
let nationnalite = prompt("Quel est votre nationnalité");

if(age >= 18 && nationnalite === "française"){
  console.log("Eligible");
  } else {
    console.log("non eligible");
}