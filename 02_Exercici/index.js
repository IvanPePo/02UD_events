window.onload = function () {

    const btn1 = document.querySelector("#nivell1");
    const btn2 = document.querySelector("#nivell2");
    const btn3 = document.querySelector("#nivell3");
    const btn4 = document.querySelector("#nivell4");

    const banderasAndCapitales = [
        {
            pais: "🇪🇦",
            capital: "Madrid"
        },
        {
            pais: "🇨🇳",
            capital: "Beijing"
        },
        {
            pais: "🇮🇹",
            capital: "Roma"
        },
        {
            pais: "🇷🇺",
            capital: "Moscú"
        },
        {
            pais: "🇳🇴",
            capital: "Oslo"

        },
        {
            pais: "🇲🇽",
            capital: "Ciudad de México"
        },
        {
            pais: "🇸🇰",
            capital: "Bratislava"
        },
        {
            pais: "🇵🇷",
            capital: "La Habana"
        },
        {
            pais: "🇺🇸",
            capital: "Washington D. C."
        }


    ]

    const bgColor = ["green", "yellow", "white", "gray", "red", "pink"]

    const randomBandera = (array) => {
        let randomBandera = Math.floor(Math.random() * array.length);
        return randomBandera;
    }

    const randomColor = (array) => {
        let randomColor = Math.floor(Math.random() * array.length);
        return randomColor;
    }

    const createTable = (rows, columns) => {

        const body = document.getElementsByTagName("body")[0];
        const table = document.createElement("table");
        table.setAttribute('class', 'table');
        const tblBody = document.createElement("tbody");



        for (let i = 0; i < rows; i++) {
            // Crea las filas de la tabla
            let hilera = document.createElement("tr");

            for (let j = 0; j < columns; j++) {
                // Crea un elemento <td> 
                let celda = document.createElement("td");
                celda.setAttribute('style', `background:${bgColor[randomColor(bgColor)]};`)
                
                let textoCelda = document.createTextNode(
                    banderasAndCapitales[ randomBandera( banderasAndCapitales )].pais,
                );

                celda.addEventListener('mousemove', () => {
                    celda.setAttribute('style', `background:${bgColor[randomColor(bgColor)]};`)
                });

                celda.addEventListener('click', () => {
                    let pais = celda.textContent;
                    const resultado  = banderasAndCapitales.find(( elemento )=>{
                        return elemento.pais === pais;
                    } )

                    alert( `La bandera ${ resultado.pais } su capital es ${ resultado.capital }`);
                });

                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }

            tblBody.appendChild(hilera);
        }

        table.appendChild(tblBody);
        body.appendChild(table);
        table.setAttribute("border", "1");


    }

    btn1.addEventListener('click', () => console.log("btn1", createTable(1, 1)));
    btn2.addEventListener('click', () => console.log("btn2", createTable(2, 2)));
    btn3.addEventListener('click', () => console.log("btn3", createTable(3, 3)));
    btn4.addEventListener('click', () => console.log("btn4", createTable(4, 4)));


}