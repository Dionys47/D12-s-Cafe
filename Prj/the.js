//rezervim//

function submitForm() {
    var op1 = document.querySelector('input[name="madhesia"]:checked');
    var op2 = document.querySelector('input[name="porosia"]:checked');
    var op3 = document.querySelector('input[name="opsione"]:checked');
  
    var mad = op1 ? op1.value : '';
    var po = op2 ? op2.value : '';
    var op = op3 ? op3.value : '';
  
    
    window.location.href = '1 re_2.html?mad=' + mad + '&po=' + po + '&op=' + op;
  }
  


//muzik live//

var audio = new Audio('img/jz.mp3');

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        }