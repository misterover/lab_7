window.onload = function () {
    var divElements = document.querySelectorAll('.b-div-div-zavd');

    divElements.forEach(function (div) {
        var text = div.textContent.trim();
        if (text.length > 10) {
            div.textContent = text.substring(0, 10) + '...';
        }
    });
};

function convertTableToList() {
    let table = document.getElementById("b-table");
    let outputDiv = document.getElementById("list-output");
    
    let mainList = document.createElement("ol");
    
    for (let i = 0; i < table.rows.length; i++) {
        let rowList = document.createElement("ul");
        
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            let listItem = document.createElement("li");
            listItem.textContent = table.rows[i].cells[j].innerHTML;
            rowList.appendChild(listItem);
        }
        
        let rowListItem = document.createElement("li");
        rowListItem.appendChild(rowList);
        mainList.appendChild(rowListItem);
    }
    
    outputDiv.appendChild(mainList);
}




