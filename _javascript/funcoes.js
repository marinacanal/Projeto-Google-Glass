function mudaFoto (foto) {
    document.getElementById ("icone").src = foto;
}

function calc_total () {
    var qnt = parseInt (document.getElementById ('cquant').value);
    tot = qnt * 1500;
    document.getElementById ('cpreco').value = tot

}