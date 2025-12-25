let csv = document.getElementById('csv');
let json = document.getElementById('json');
let convertToJson = document.getElementById('convertToJson');
let msg = document.getElementById('msg');
let result = [];
let headers = [];
let current_line;

convertToJson.addEventListener('click', () => {

    if((csv.value).trim() == '') {
        msg.style = 'display: block; color: red; font-size: 18px;';
        msg.innerHTML = 'Please enter/paste csv content.';
    }else {

        rowData = (csv.value.trim()).split("\n");
        headers = rowData[0].split(",");

        for(i=1; i<rowData.length; i++) {
            current_line = rowData[i].split(",");
            let obj = {};
            for(j=0; j<headers.length; j++) {
                obj[headers[j]] = current_line[j];
            }
            result.push(obj)
        }

        json.value = JSON.stringify(result, null, 2);

    }
    
});
