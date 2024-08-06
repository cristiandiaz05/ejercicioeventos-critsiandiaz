
let cambio = 4164.62;

let usdInput = document.getElementById('usd');
let pesosInput = document.getElementById('pesos');
let error = document.getElementById('error');

function ConvertirAPesos(usd) {
    return usd * cambio;
}
function ConvertirAUsd(pesos) {
    return pesos / cambio;
}
usdInput.addEventListener('input', () => {
    let usdValor = parseFloat(usdInput.value);

    if (!isNaN(usdValor) && usdValor >= 0) {
        let pesosValor = ConvertirAPesos(usdValor);
        
        pesosInput.value = pesosValor.toFixed(2);
        error.style.display = 'none';
    } else {
        pesosInput.value = '';
        error.style.display = 'block';
    }
});
pesosInput.addEventListener('input', () => {
    let pesosValor = parseFloat(pesosInput.value);

    if (!isNaN(pesosValor) && pesosValor >= 0) {
        let usdValor = ConvertirAUsd(pesosValor);
        usdInput.value = usdValor.toFixed(2);
        error.style.display = 'none';
    } else {
        usdInput.value = '';
        error.style.display = 'block';
    }
});