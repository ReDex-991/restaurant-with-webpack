import navBar from "./navBar";
import pizza from "../assets/pizza.png";

let homePage = () =>{
    let content = document.getElementById('content');

    let container = document.createElement('div');
    container.setAttribute('class','container-home');

    let hero =  document.createElement('div');
    hero.setAttribute('class','hero');


    let img = document.createElement('img');
    img.src = pizza;
    img.alt = 'pizza';
    img.style.height = "200px";

    let p = document.createElement('p');
    p.textContent = "La miglior pizzeria del mondo!"

    let btn_container = document.createElement('div');
    btn_container.setAttribute('class','btn_container');




    let btn1 = document.createElement('div');
    btn1.setAttribute('class','prenota');
    btn1.innerHTML = "<p/>PRENOTA</p>";

    let btn2 = document.createElement('div');
    btn2.setAttribute('class','online-order');
    btn2.innerHTML = "<p/>ORDINA ONLINE</p>";

    btn_container.append(btn1,btn2);
    hero.append(img,p);

    container.append(hero,btn_container);
    content.append(navBar(),container);

    return content
};

export default homePage;