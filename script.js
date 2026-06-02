function mostrarInicio() {
    document.getElementById("titulo").innerText = "Inicio";

    document.getElementById("contenido").innerHTML = `
        <p>Bienvenido a Liga Las Ladys.</p>
        <p>Aquí aparecerán las novedades de la competición.</p>
    `;
}

function mostrarClasificacion() {
    document.getElementById("contenido").innerHTML = `
    <table>
        <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>Pts</th>
        </tr>

        <tr>
            <td>1</td>
            <td>Las Ladys FC</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>1</td>
            <td>12</td>
        </tr>

        <tr>
            <td>2</td>
            <td>Equipo B</td>
            <td>5</td>
            <td>3</td>
            <td>1</td>
            <td>1</td>
            <td>10</td>
        </tr>

        <tr>
            <td>3</td>
            <td>Equipo C</td>
            <td>5</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>8</td>
        </tr>
    </table>
`;
}

function mostrarClub() {
    document.getElementById("titulo").innerText = "Club";

    document.getElementById("contenido").innerHTML = `
        <h3>Las Ladys FC</h3>

        <p>💰 Monedas: 3000</p>

        <p>🎁 Sobres:</p>
        <ul>
            <li>Sobre Oro x2</li>
            <li>Sobre Plata x1</li>
        </ul>

        <p>👥 Jugadores:</p>
        <ul>
            <li>Mbappé</li>
            <li>Rodri</li>
            <li>Pedri</li>
            <li>Theo Hernández</li>
            <li>Saliba</li>
        </ul>
    `;
}

function mostrarMercado() {
    document.getElementById("titulo").innerText = "Mercado";

    document.getElementById("contenido").innerHTML = `
        <p>Pedri - 12000 monedas</p>
        <p>Rodri - 15000 monedas</p>
    `;
}

function mostrarSobres() {
    document.getElementById("titulo").innerText = "Sobres";

    document.getElementById("contenido").innerHTML = `
        <p>Sobre Oro x2</p>
        <p>Sobre Plata x1</p>
    `;
}