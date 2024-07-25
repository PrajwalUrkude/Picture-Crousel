(function () {
    const pictures = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let counter = 0;
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".imgcontainer");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if(button.classList.contains("btnleft")){
                counter--
                if(counter < 0){
                    counter = pictures.length-1
                }
                imgDiv.style.background = `url('Img/${pictures[counter]}.jpg')`;
            }else if(button.classList.contains("btnright")){
                counter++
                if(counter > pictures.length-1){
                    counter = 0
                  
                }
                imgDiv.style.background = `url('Img/${pictures[counter]}.jpg')`;
            }
        })
    })
}) ()
