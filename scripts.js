document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Extraemos los datos de forma limpia
        const formData = new FormData(orderForm);
        const data = {
            name: formData.get('name'),
            address: formData.get('address')
        };

        // Feedback al usuario
        const btn = orderForm.querySelector('button');
        btn.innerText = "¡Procesando pedido...";
        btn.disabled = true;

        setTimeout(() => {
            alert(`¡Gracias ${data.name}! Tu pedido va en camino a: ${data.address}`);
            orderForm.reset();
            btn.innerText = "Confirmar y Pagar";
            btn.disabled = false;
        }, 1500);
    });
});