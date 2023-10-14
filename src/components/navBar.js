import homePage from "./homePage";
import menupage from "./menuPage";
import contactPage from "./contactPage";

import icon from "../assets/icon.png"

let navBar = () =>{
    let header = document.createElement("header");
    header.setAttribute('class','header');
    
    let img = document.createElement('img');
    img.setAttribute('class','logo');
    img.style.width = '100px';
    img.alt = 'logo';
    img.src = icon;

    let navLinks = document.createElement('ul');
    navLinks.setAttribute('class','navlinks');
    navLinks.innerHTML = `
        <li id='home'>HOME</li>
        <li id='menu'>MENU</li>
        <li id='contact'>CONTACTS</li>
        `;

    img.addEventListener('click', (e)=>{
        content.innerHTML = ""
        document.body.appendChild(homePage());
    });

    navLinks.addEventListener('click', (e)=>{
        switch(e.target.id){
            case 'home':
                content.innerHTML = ""
                document.body.appendChild(homePage());
                break;
            case 'menu':
                content.innerHTML = ""
                document.body.appendChild(menupage());
                break;
            case 'contact':
                content.innerHTML = ""
                document.body.appendChild(contactPage());
                break;
        };  

    });


    header.append(img,navLinks);
    return header;
};

export default navBar;
