const bookList = autores.livros

function sortItems(array, attr) {
    return array.sort((a, b) => {
        if (a[attr].toLowerCase() < b[attr].toLowerCase()) {
            return -1
        } if (a[attr].toLowerCase() > b[attr].toLowerCase()) {
            return 1
        }
        return 0
    })

}

function insertTitle(array, title) {
    return `
        <th>
            ${title} disponíveis
            <button id="sort-${title}"><i class="fas fa-chevron-down"></i></button>
            <input id="input-search" class="input-search"type="text">
            <input id="btn-search" class="btn btn-info" type="submit" value="Buscar">
        </th>

    `
}

function insertRows(list, attr) {
    let table = ""
    list.forEach(livro => {
        table += `
        <tr>
            <td>${livro[attr]}</td>
        </tr>
       
                             
        
        `
    });
    return table
}

function showItems(array, title, item) {
    document.getElementById("table-head").innerHTML = insertTitle(array, title)
    document.getElementById("table-body").innerHTML = insertRows(array, item);
    const sortAuthors = document.getElementById(`sort-${title}`);
    sortAuthors.addEventListener("click", function () {
        document.getElementById("table-body").innerHTML = insertRows(sortItems(array, item), item);
    })
}


const showAuthors = document.getElementById('autor');
const showBooks = document.getElementById('livro');
const showGen = document.getElementById('genero');

document.getElementById('total').innerHTML += ` ${bookList.length}`

// add autores 
showAuthors.addEventListener('click', function () {
    showItems(bookList, "Autores", "autor")
    
});

// add livros
showBooks.addEventListener("click", function () {
    showItems(bookList, "Livros", "livro")
    
});

// add genero 
showGen.addEventListener("click", function () {
    showItems(bookList, "Gênero", "genero")
    
});


