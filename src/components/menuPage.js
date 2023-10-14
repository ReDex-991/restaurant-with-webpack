import navBar from "./navBar";

let menupage = () =>{
    let content = document.getElementById('content');

    let container = document.createElement('div');
    container.setAttribute('class','container-menu');


    let div_menu1 = document.createElement('div');
    div_menu1.setAttribute('class','menu1');

    let div_menu2 = document.createElement('div');
    div_menu2.setAttribute('class','menu2');

    div_menu1.innerHTML = `
        <h1 class="menu1-title">PIZZE</h1>
        <ul class="menu1-list">
            <li>Pizza Margherita</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Pizza Marinara</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Pizza 4 stagioni</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Pizza Diavola</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Pizza Capricciosa</li>
            <li>Lorem ipsum dolor sit amet.</li>

        </ul>
    `;
    div_menu2.innerHTML = `
        <h1 class="menu2-title">DOLCI</h1>
        <ul class="menu2-list">
            <li>Bombolone</li>
            <li>Lorem ipsum dolor sit amet.</li>
            
            <li>Muffin alla Nutella</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Canederli</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Crostata di Fragole</li>
            <li>Lorem ipsum dolor sit amet.</li>

            <li>Tiramisú</li>
            <li>Lorem ipsum dolor sit amet.</li>

        </ul>`;

    container.append(div_menu1,div_menu2);
    content.append(navBar(),container);

    return content
};

export default menupage;