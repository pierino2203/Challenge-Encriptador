(() => {
    const textAreaEncriptar = document.getElementById('textEncriptar');
    const textArea = document.getElementById('msj_encriptado');
    const encriptarBtn = document.getElementById('encriptar');
    const desencriptarBtn = document.getElementById('desencriptar');
    const copy = document.getElementById('copiar')
    const divMensaje = document.querySelector('.div__mensaje');
    const divMensaje2 = document.querySelector('.div__mensaje2');

    encriptarBtn.addEventListener('click', () => {
        const msj = textAreaEncriptar.value;
        textArea.value = encriptar(msj);;
        textAreaEncriptar.value = ''
        divMensaje.style.display = 'none'; // Ocultar div_mensaje
        divMensaje2.style.display = 'flex';
    });

    desencriptarBtn.addEventListener('click', () => {
        const msj = textAreaEncriptar.value;
        textArea.value = desEncriptar(msj);
        textAreaEncriptar.value = ''
    });

    copy.addEventListener('click', e => {
        textArea.select();
        document.execCommand('copy');
    })
    function encriptar(msj) {
        var mensajeEncriptado = "";
        for (let i = 0; i < msj.length; i++) {
            if (msj[i] !== 'a' && msj[i] !== 'e' && msj[i] !== 'i' && msj[i] !== 'o' && msj[i] !== 'u') {
                mensajeEncriptado = mensajeEncriptado.concat(msj[i]);
            }
            else {
                if (msj[i] === 'a') {
                    mensajeEncriptado = mensajeEncriptado.concat("ai")
                }
                if (msj[i] === 'e') {
                    mensajeEncriptado = mensajeEncriptado.concat("enter")
                }
                if (msj[i] === 'i') {
                    mensajeEncriptado = mensajeEncriptado.concat("imes")
                }
                if (msj[i] === 'o') {
                    mensajeEncriptado = mensajeEncriptado.concat("ober")
                }
                if (msj[i] === 'u') {
                    mensajeEncriptado = mensajeEncriptado.concat("ufat")
                }
            }
        }
        return mensajeEncriptado;
    }
    function desEncriptar(msj) {
        var msjDesEncriptado = "";
        for (var i = 0; i < msj.length; i++) {
            if (msj[i] !== 'a' && msj[i] !== 'e' && msj[i] !== 'i' && msj[i] !== 'o' && msj[i] !== 'u') {
                msjDesEncriptado = msjDesEncriptado.concat(msj[i]);
            }
            else {
                if (msj[i] == 'a') {
                    msjDesEncriptado = msjDesEncriptado.concat("a");
                    i = i + 1;
                }
                else {
                    if (msj[i] == 'e') {
                        msjDesEncriptado = msjDesEncriptado.concat("e");
                        i = i + 4;
                    } else {
                        if (msj[i] == 'i') {
                            msjDesEncriptado = msjDesEncriptado.concat("i");
                            i = i + 3;
                        } else {
                            if (msj[i] == 'o') {
                                msjDesEncriptado = msjDesEncriptado.concat("o");
                                i = i + 3;
                            } else {
                                if (msj[i] == 'u') {
                                    msjDesEncriptado = msjDesEncriptado.concat("u");
                                    i = i + 3;
                                }
                            }
                        }
                    }
                }
            }
        }
        return msjDesEncriptado;
    }
})();