var audio = new Audio('assets/sentmessage.mp3');

var contactString = "<div class='social'>  <div class='socialItem' id='call'><img class='socialItemI' src='images/gmail.svg'/><label class='number'>atorralba@isdefe.es<br>a.torralba@udc.es</label></div> </a> <a href='mailto:atorralba@isdefe.es'>  </a> <a target='_blank' href='https://github.com/torralba98'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/torraalba'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/alfonso-torralba/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";

var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>CV_Alfonso_Torralba.pdf</label></div><a href='assets/CV_Alfonso_Torralba.pdf' download='CV_Alfonso_Torralba.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "últ. vez hoy a las " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "escribiendo...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Buenas! 👋🏻,<br><br>Mi nombre es <span class='bold'><a class='alink'>Alfonso Torralba Mantiñán</a></span>, aunque me hago llamar <span class='bold'>xFe80</span> en el mundo de las tecnologías 🤓</span><br><br>Soy graduado en Ingeniería Informática y Máster en Ciberseguridad por la <span class='bold'>Universidad de A Coruña 👨🏻‍💻📚</span><br><br>Envía <span class='bold'>'help'</span> para saber más sobre mí!! :).<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Envía la <span class='bold'>'palabra'</span> correspondiente acerca de lo que quieras saber sobre mí 😇😊<br><br><span class='bold'>'about'</span> - más detalles sobre mí<br><span class='bold'>'experiencia'</span> - historial laboral<br><span class='bold'>'estudios'</span> - historial académico<br><span class='bold'>'reconocimientos'</span> - logros académicos y certificaciones<br><span class='bold'>'idiomas'</span> - lenguas que hablo<br><span class='bold'>'colaboraciones'</span> - contribuciones realizadas con entidades<br><span class='bold'>'cursos'</span> - Cursos/webinars a los que asistí<br><span class='bold'>'cv'</span> - descarga de mi CV<br><span class='bold'>'enlaces'</span> - documentos de interés<br><span class='bold'>'contacto'</span> - comunícate conmigo!! 😋<br><span class='bold'>'mensaje'</span> - deja un mensaje en mi libro de visitas<br><span class='bold'>'clear'</span> - vaciar la conversación<br>");
            break;
        case "cv":
            sendTextMessage(resumeString);
            break;
        case "estudios":
            sendTextMessage("<span class='bold'>💻 Grado en Ingeniería Informática</span><br>&nbsp;&nbsp&nbsp;&nbsp⭐ Mención en Tecnologías de la Información<br>&nbsp;&nbsp&nbsp;&nbsp📍 Universidad de A Coruña<br>&nbsp;&nbsp&nbsp;&nbsp⌛ 2016 - 2021<br><br>💻 <span class='bold'>Máster Inter-Universitario en Ciberseguridad</span><br>&nbsp;&nbsp&nbsp;&nbsp📍 Universidad de A Coruña<br>&nbsp;&nbsp&nbsp;&nbsp⌛ 2021- 2023<br>");
            break;

        case "enlaces":
            var nombre = "No especificado.";
            var contacto = "No especificado.";
            var mensaje = "No especificado.";
            sendTextMessage("<span class='bold'>¿Cuál es tu nombre?</span>");
            
            var nombre = inputText;
            sendTextMessage(nombre);
            break;

        case "mensaje":
        sendTextMessage("<span class='bold'>💻 Trabajo Fin de Grado</span><br>&nbsp;&nbsp&nbsp;&nbsp 📄 “Desarrollo de una aplicación web para la gestión fuera de banda de un laboratorio de redes de datos”<br>&nbsp;&nbsp&nbsp;&nbsp⭐ <a class='alink' target='_blank' href='https:\/\/ruc.udc.es/dspace/handle/2183/28657 '><span class='bold'>Enlace</a><br><br><span class='bold'>💻 Trabajo Fin de Máster</span><br>&nbsp;&nbsp&nbsp;&nbsp 📄 “Desarrollo y estudio forense de un ransomware para dispositivos Android 8.1”<br>&nbsp;&nbsp&nbsp;&nbsp⭐ <span class='bold'><span class='alink'>Enlace pendiente...</span></a><br><br><span class='bold'>💻 Trabajo del Grado en Ingeniería Informática</span><br>&nbsp;&nbsp&nbsp;&nbsp 📄 “Gestión de usuarios y grupos en Windows 7 & Active Directory”<br>&nbsp;&nbsp&nbsp;&nbsp⭐ <a class='alink' target='_blank' href='https:\/\/www.dc.fi.udc.es/~afyanez/Docencia/2019/Grado/Trabajos/Win-Users.pdf '>  <span class='bold'>Enlace</a><br>");
        break;

        case "reconocimientos":
            sendTextMessage("<span class='bold'>✅ Bachillerato de Ciencias y Tecnología (Biología y Química)</span><br>&nbsp;&nbsp&nbsp;&nbsp⭐ Media global de 9.14 sobre 10<br><br>✅ <span class='bold'>Administración de Infraestructuras y Sistemas Informáticos (asignatura del Grado en Ingeniería Informática)</span><br>&nbsp;&nbsp&nbsp;&nbsp⭐ Calificación de 10.0, recibiendo una Matrícula de Honor<br><br>✅ <span class='bold'>Trabajo Fin de Grado (“Desarrollo de una aplicación web para la gestión fuera de banda de un laboratorio de redes de datos”)</span><br>&nbsp;&nbsp&nbsp;&nbsp⭐ Calificado con 10.0, recibiendo una Matrícula de Honor<br><br>✅ <span class='bold'>Trabajo Fin de Máster (“Desarrollo y estudio forense de un ransomware para dispositivos Android 8.1”)</span> <br>&nbsp;&nbsp&nbsp;&nbsp⭐ Calificado con 9.7, recibiendo una Matrícula de Honor<br><br>✅ <span class='bold'>Reconocimiento aptitudes en MySQL</span><br>&nbsp;&nbsp&nbsp;&nbsp⭐ Por OpenWebinars, obteniendo un nivel avanzado. Enlace al reconocimiento  <a class='alink' target='_blank' href='https:\/\/openwebinars.net/cert/bQGu'><span class='bold'>aquí</a>.<br>");
            break;

        case "idiomas":
            sendTextMessage("<span class='bold'>✅ Español </span><br>&nbsp;&nbsp&nbsp;&nbsp🔹 Lengua materna<br><br>✅ <span class='bold'>Gallego</span><br>&nbsp;&nbsp&nbsp;&nbsp🔹 Lengua materna<br><br>✅ <span class='bold'>Inglés</span><br>&nbsp;&nbsp&nbsp;&nbsp🔹 “Programa Bilingüe” cursado durante toda la Educación Secundaria Obligatoria<br>&nbsp;&nbsp&nbsp;&nbsp🔹 <a class='alink'>First Certificate</a> in English (B2) de <a class='alink'>Cambridge</a> Assessment English (2016)<br>&nbsp;&nbsp&nbsp;&nbsp🔹 <a class='alink'>GESE Grade 7</a> (B2.1) de <a class='alink'>Trinity</a> College London (2015)<br>");
            break;


        case "colaboraciones":
            sendTextMessage("<span class='bold'>🖥️ Desarrollo de retos para el “Capture The Flag” de <a class='alink' target='_blank' href='https:\/\/ciberseguridadegalicia.gal/gl/cibergal'><span class='bold'>CIBER.gal</a> </span><br>&nbsp;&nbsp&nbsp;&nbsp⏩ Llevado a cabo durante mi estancia en Gradiant. Me encargué sobre todo de implementar los retos de esteganografía.<br><br> <span class='bold'>🖥️ Orador del VI Congreso XoveTIC 2023</span><br>&nbsp;&nbsp&nbsp;&nbsp⏩ En él se trataron diversas comunicaciones orales y pósters dentro del ámbito de las Tecnologías de la Información y las Comunicaciones (TIC). Para mi situación personal, di a conocer un artículo resumen acerca de mi Trabajo Fin de Máster.<br>");
            break;

        case "experiencia":
            sendTextMessage("<span class='bold'>🌐 Ingeniería de Sistemas para la Defensa de España S.A. S.M.E. M.P. (ISDEFE)</span><br>&nbsp;&nbsp&nbsp;&nbsp📍 Madrid, España<br>&nbsp;&nbsp&nbsp;&nbsp⌛ sept. 2023 – actualidad<br>&nbsp;&nbsp&nbsp;&nbsp➡️ Trabajamos en colaboración con el CCN para la revisión de productos a incorporar en el CPSTIC.<br><br><span class='bold'>🌐 Gradiant</span><br>&nbsp;&nbsp&nbsp;&nbsp📍 Vigo, España<br>&nbsp;&nbsp&nbsp;&nbsp⌛ sept. 2022 – dic. 2022<br>&nbsp;&nbsp&nbsp;&nbsp➡️ Prácticas Máster en Ciberseguridad. Trabajé con temas de securización de redes 5G. Concretamente en la investigación de mecanismos de gestión de claves de cifrado, diseño de modulo de respuesta a ataques que involucren el robo de material criptográfico y el desarrollo de un prototipo de respuesta basado en la implementación de un proceso de revocación y renovación de claves para la protección de las comunicaciones.<br><br><span class='bold'>🌐 Odeene Ingeniería</span><br>&nbsp;&nbsp&nbsp;&nbsp📍 A Coruña, España<br>&nbsp;&nbsp&nbsp;&nbsp⌛ abr. 2021 – dic. 2021<br>&nbsp;&nbsp&nbsp;&nbsp➡️ Proyecto ABANCA Seguros. Realicé labores de programación en la parte Core del proyecto. A su vez, era el responsable DevOps de todo el proyecto, encargado de coordinar y realizar los pases de código entre los diferentes entornos de Desarrollo, Pre-Explotación y Producción.<br>");
            break;

        case "clear":
            clearChat();
            break;

        case "about":
            sendTextMessage("Nacido en <a class='alink'>A Coruña</a> (Galicia) el <a class='alink'>17 de enero de 1998</a>.<br><br>Desde muy pequeño me apasiona el mundo de la <a class='alink'>ciberseguridad</a>, habiendo recibido mi primer ordenador a los 12 años. Mis principales intereses son el <a class='alink'>pentesting</a>, los <a class='alink'>malware</a> y el <a class='alink'>análisis forense</a>. Actualmente desempeño mis labores en <a class='alink'>ISDEFE</a> (Ingeniería de Sistemas para la Defensa de España S.A. S.M.E. M.P.)<br><br>A modo de anécdota, mi primera intrusión la hice a la edad de 13 años. Por aquel entonces, mi padre cuando me castigaba ponía contraseña al ordenador (Windows Vista). Yo, con un par de DVDs y ciertas búsquedas por Internet, conseguí elaborar un disco ejecutable desde la BIOS que quitaba dicha contraseña 🫣🤭<br><br>Me considero una persona organizada y con visión de futuro. No soy conformista, me encanta superarme y aprender día a día. Me encantan los retos!! Es más, tengo pendiente obtener alguna que otra certificación relacionada con la ciberseguridad. Tendréis noticias próximamente sobre esto último 😏<br><br>P.D. Me apasiona el mundo del motor! 🚗<br>");

            break;
        case "contacto":
            sendTextMessage(contactString);
            break;

        case "cursos":
            sendTextMessage("Me gusta mucho asistir a <span class='bold'> Webinars</span> o <span class='bold'>cursos</span>, sobre todo aquellos que considere interesantes en relación con la ciberseguridad 🤓<br><br>💻 <span class='bold'><a class='alink'>‟¿Qué es el CPSTIC (CCN-STIC-105) y qué valor aporta?”</a></span><br>&nbsp;&nbsp&nbsp;&nbsp🔎 Sesión liderada por el Departamento de Productos y Tecnologías del CCN (CCN-PYTEC). Se explicó que es el CPSTIC, qué valor aporta, a quién y cómo usarlo<br>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Vaya, no entiendo que me estás pidiendo...😢<br><br>Envía <a class='bold'>'help'</a> para desglosar las diferentes opciones disponibles.<br>");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
