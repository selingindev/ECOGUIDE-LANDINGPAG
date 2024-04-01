document.querySelectorAll(".linksNav li a").forEach(function(item) {
    item.addEventListener("mouseover", function() {
        // Quando o hover é ativado, adiciona uma classe 'not-hover' a todos os outros itens
        document.querySelectorAll(".linksNav a").forEach(function(otherItem) {
            if (otherItem !== item) {
                otherItem.classList.add("notHover");
            }
        });
    });

    item.addEventListener("mouseout", function() {
        // Quando o hover é desativado, remove a classe 'not-hover' de todos os itens
        document.querySelectorAll(".linksNav li a").forEach(function(otherItem) {
            otherItem.classList.remove("notHover");
        });
    });
});