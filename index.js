var todoList = [
    { tennhiemvu: 'baocao', ngayhethan: '12-12-2024', douutien: 'cao', tinhtrang: 'hoanthien' },
    { tennhiemvu: 'thuctap', ngayhethan: '30-12-2024', douutien: 'trungbinh', tinhtrang: 'chothuchien' },
    { tennhiemvu: 'baocao', ngayhethan: '25-11-2024', douutien: 'thap', tinhtrang: 'dangthuchien' }

];
const todo_List = document.getElementById("todo_List");

function renderScreen() {
    todo_List.innerHTML = "";
    todoList.forEach(function(todo, i) {
        var row = `
        <tr>
        <td>${todo.tennhiemvu}</td>
        <td>${todo.ngayhethan}</td>
        <td>${todo.douutien}</td>
        <button onclick = xoa(${i})>xóa</button>
        <button onclick = sua(${i})>sửa</button>
        
        </tr>
        
        `;
        todo_List.innerHTML += row;
    })
}

// thêm
function valForm(event) {
    event.preventDefault();
    var tennhiemvu = document.getElementById("tennhiemvu").value;
    var ngayhethan = document.getElementById("ngayhethan").value;
    var douutien = document.getElementById("douutien").value;
    var add_todoList = { tennhiemvu: tennhiemvu, ngayhethan: ngayhethan, douutien: douutien };
    todoList.push(add_todoList);
    alert("thêm sản phẩm thành cônng");
    renderScreen();

}

// xóa
function xoa(index) {
    var connfirmDelete = confirm("Bạn có chắc muốn xóa không");
    if (connfirmDelete) {
        todoList.splice(index, 1);
        renderScreen();

        alert("xóa thành công");

    }
}

function sua(index) {
    var todo = todoList[index];
    var ngayhethanParts = todo.ngayhethan.split("-");
    var ngayhethanFormatted = `${ngayhethanParts[2]}-${ngayhethanParts[1]}-${ngayhethanParts[0]}`;
    document.getElementById("tennhiemvu").value = todo.tennhiemvu;
    document.getElementById("ngayhethan").value = ngayhethanFormatted;
    document.getElementById("douutien").value = todo.douutien;

    var submitBtn = document.getElementById("submitBtn");
    submitBtn.innerText = "Cập nhật"; // Thay đổi nội dung nút thành "Cập nhật"

    submitBtn.setAttribute("data-index", index); // Lưu chỉ mục vào thuộc tính của nút
}


renderScreen();