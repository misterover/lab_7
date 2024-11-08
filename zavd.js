var arraay = [
    {
        object: "����������",
        data: "09.11.2024",
        room: "342 ������",
        email: "math@example.com"
    },
    {
        object: "���������",
        data: "11.11.2024",
        room: "",
        email: "philosophy@example.com"
    },
    {
        object: "�����������",
        data: "08.11.2024",
        room: "221 ������",
        email: "informatics@example.com"
    },
    {
        object: "�������",
        data: "07.11.2024",
        room: "137 ������",
        email: "ecology@example.com"
    }
];

function ras_diff_Days(text) {
    var currentDate = new Date();
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    return daysDiff;
}

function output(item) {
    var text = item['data'];
    var diffDays = ras_diff_Days(text);
    var rowStyle = "";
    var info = "";


    if (diffDays === 1) {
        info = "������������";
        rowStyle = "background:#FFFF66;";
    } else if (diffDays === 0) {
        rowStyle = "background: #99FF99;";
        info = "�����";
    }

    html += `<tr style="${rowStyle}">`;
    html += `<td>${item.object}</td>`;
    html += `<td>${item.data}</td>`;
    html += `<td>${item.email}</td>`;
    html += `<td>${item.room || "������� ���� ���������� ������������/������"}</td>`;
    html += `<td>${info}</td>`;
    html += "</tr>";

}

function ras() {
    html = "<table border='2', border-radius='40px'>";
    html += "<tr><td>����� ��������</td><td>���� ������</td><td>�����</td><td>��������</td><td>���������� ���� ������</td></tr>";

    arraay.forEach(output);

    html += "</table>";
    document.getElementById('rezult').innerHTML = html;
}


