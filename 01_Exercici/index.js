window.onload = function () {

    const images = [
        "images/lechuga.png",
        "images/salsaTomate.png",
        "images/burguer.png",
        "images/manzana.png",
        "images/platano.png",
        "images/pasta.png",
    ];

    const divContent = document.querySelector(".container");
    const startButton = document.querySelector(".startButton");

    const createButton = (buttonName, className = "") => {
        const button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = buttonName;
        button.setAttribute("class", className);

        return button;

    }

    const isImg= () => {
        const containImgs = divContent.getElementsByTagName('img')
        let isImg = false;
        isImg = ( containImgs.length > 0 ? true : false )
        let src = ""
        if( isImg ){
            for( let i = 0; i < containImgs.length; i++){
                src = containImgs[i].src;
                src =  src.substring(34, src.length );
            }
        }

        console.log( "IsImg, ", { isImg, src });

        return {
            isImg,
            src
        }
    }

    const addImageToDiv = (arrayImages) =>{

        let randomPosition = Math.floor(Math.random() * arrayImages.length);
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', arrayImages[randomPosition]);
        imgElement.setAttribute('class', 'img');
        divContent.append(imgElement);

        deleteImage( imgElement );

    }

    const createImg = ( callback) => {

        const  { isImg, src } = callback();

        if(  (!isImg )&& ( !images.includes( src )) ){
            console.log("IF")
            addImageToDiv( images );

        } else if( ( isImg ) && ( images.includes(src))){
            console.log("else")
            const imgReplace = document.getElementsByClassName('img')
            imgReplace[0].remove();  
            addImageToDiv(images)
        }

    }

    const resetImage = () => {
        const imgReset = document.getElementsByClassName('img')     
        imgReset[0].remove();
    }

    const deleteImage = ( img ) =>{   
        img.addEventListener('dblclick', resetImage );
    }

    startButton.addEventListener("click", () => {
        divContent.innerHTML = ""

        const btnAfegirVerdolaga    = createButton('Afegir Verdolaga');
        const btnAfegirProteines    = createButton('Afegir Proteines ');
        const btnAfegirAlinyament   = createButton('Afegir Alinyament');
        const btnReset              = createButton('Reset', 'btn-reset');

        divContent.append(btnAfegirVerdolaga, btnAfegirProteines, btnAfegirAlinyament, btnReset);

        // Eventos de añadir
        btnAfegirAlinyament.addEventListener('click', ()    => { createImg(isImg) });
        btnAfegirProteines.addEventListener('click', ()     => { createImg(isImg) });
        btnAfegirVerdolaga.addEventListener('click', ()     => { createImg(isImg) });
        // Evento de borrar
        btnReset.addEventListener('click', resetImage );

   
    })


}