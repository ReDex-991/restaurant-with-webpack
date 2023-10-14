import menupage from "./menuPage";
import navBar from "./navBar";

let contactPage = () =>{
    let content = document.getElementById("content");
    let container_contacts = document.createElement('div');
    container_contacts.setAttribute('class','container_contacts');

    let contactMain = document.createElement("div");
    contactMain.setAttribute("class", "contactMain");

    contactMain.innerHTML = `
    
        <form>
            <h1>Contattaci</h1>
            <input id="name" type="text" placeholder="Your name*" required>
            <input id="email" type="email" placeholder="Your email*" required>
            <input id="phone" type="text" placeholder="Your phone">
            <textarea rows="5" columns="5" placeholder="message*"></textarea>
            <button type="submit" >Send message</button>
        </form>
        `;
    
    container_contacts.append(contactMain);
    content.append(navBar(), container_contacts);

    return content
};

export default contactPage;