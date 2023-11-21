window.onload = function () {
    drawPascal(10);
}

var drawPascal = function (sorSzam) {
    for (var sor = 0; sor < sorSzam; sor++) {
        var new_sor = document.createElement('div');
        new_sor.classList.add('sor');
        var sor_parent = document.getElementById('pascal');
        sor_parent.appendChild(new_sor);
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var new_elem = document.createElement('div');
            new_elem.classList.add('elem');
            new_elem.innerText = faktorialis(sor) / (faktorialis(oszlop) * faktorialis(sor - oszlop));
            new_sor.appendChild(new_elem);
        }
    }
}
function faktorialis(x) {
    if (x == 0)
        return 1;
    else {
        return (x * faktorialis(x - 1));
    }
}