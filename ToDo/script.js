let exc = 0
function FL() {
    let texto = document.getElementById('texto').value;
    let hora = document.getElementById('hora').value;
    let div = document.getElementById('div')

    div.innerHTML = `${div.innerHTML}
    <h4 id="${exc}">
        Tarefa: <input value="${texto}" class="input1"> <br>
        As: <input value="${hora}" class="input2"> <br>
        <div class="botao">
            <input value="excluir" 
                   class="submit" 
                   type="submit"onclick="document.getElementById('${exc}').remove()">
        </div>
    </h4>`

    exc = exc+1
    console.log(div.innerHTML);
}