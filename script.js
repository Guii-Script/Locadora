// Função para trocar a imagem do carro com animação
document.getElementById("vehicleSelect").addEventListener("change", function() {
    var vehicle = this.value;
    var carImage = document.getElementById("carImage");

    // Antes de trocar a imagem, reiniciar a animação (fade-in)
    carImage.style.opacity = 0; // Tornar invisível
    carImage.style.animation = 'none'; // Remover a animação

    // Após 0.1s, reiniciar a animação
    setTimeout(function() {
        // Trocar a imagem com base na seleção
        if (vehicle === "basico") {
            carImage.src = "Imagem/basico.png";  // Caminho para a imagem do carro básico
        } else if (vehicle === "familia") {
            carImage.src = "Imagem/familia.png";  // Caminho para a imagem do carro de família
        } else if (vehicle === "luxo") {
            carImage.src = "Imagem/luxo.png";  // Caminho para a imagem do carro de luxo
        }

        // Agora, adicionar novamente a animação
        carImage.style.animation = 'fadeIn 1s forwards'; // Aplicando a animação de fade-in
        carImage.style.opacity = 1; // Tornar a imagem visível
    }, 100); // Atraso muito curto antes de reiniciar a animação
});