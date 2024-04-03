document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("#submitModal");
    const forms = document.querySelector('#formsColeta')
    btn.addEventListener("click", function() {

        if (forms.checkValidity()) {
            alert('Requisição enviada com sucesso, muito obrigado por ajudar a tornar o mundo um lugar melhor!');
        } else {
            forms.reportValidity();
        }
    });
});
