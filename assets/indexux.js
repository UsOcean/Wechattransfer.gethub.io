// 更改Wifi图标
function changeCellular(path) {
    document.getElementById("displayCellular").src = "/assets/svg/Cellular" + path + ".svg"
}

// 更改未充电状态点亮与颜色
function CGBattery(value) {
    var circle = document.getElementById("myCircle");
    if (value < 20) {
        circle.style.fill = "#FF3B30";
    }else if (value > 20) {
        circle.style.fill = "#FFFFFF";
    }
    circle.width.baseVal.value = value * 0.18;
}

//充电状态下进度
function NGBattery(value) {
    var circle = document.getElementById("NmyCircle");
    circle.width.baseVal.value = value * 0.18;
}


// 更换充电状态，切换图标与元素显示
function switchForm(currentFormId, targetFormId) {
    console.log(document.getElementById(currentFormId))
    var currentForm = document.getElementById(currentFormId);
    var targetForm = document.getElementById(targetFormId);
    currentForm.style.display = 'none';
    targetForm.style.display = 'block';
    var currentForm1 = document.getElementById(currentFormId+'1');
    var targetForm1 = document.getElementById(targetFormId+'1');
    currentForm1.style.display = 'none';
    targetForm1.style.display = 'block';
}



// 更改信号图标
function changeWifi(path) {
    document.getElementById("displayWifi").src = "/assets/svg/Wifi" + path + ".svg"
}


document.getElementById('inputuit').addEventListener('input', function() {
    document.getElementById('displayuit').textContent = this.value;
});

document.getElementById('inputwho').addEventListener('input', function() {
    document.getElementById('displaywho').textContent = this.value;
});

document.getElementById('inputmoney').addEventListener('input', function() {
    document.getElementById('displaymoney').textContent = this.value;
});

document.getElementById('inputtime1-may').addEventListener('input', function() {
    document.getElementById('displaytime1-may').textContent = this.value;
});

document.getElementById('inputtime1-day').addEventListener('input', function() {
    document.getElementById('displaytime1-day').textContent = this.value;
});

document.getElementById('inputtime1-t').addEventListener('input', function() {
    document.getElementById('displaytime1-t').textContent = this.value;
});

document.getElementById('inputtime2-may').addEventListener('input', function() {
    document.getElementById('displaytime2-may').textContent = this.value;
});

document.getElementById('inputtime2-day').addEventListener('input', function() {
    document.getElementById('displaytime2-day').textContent = this.value;
});

document.getElementById('inputtime2-t').addEventListener('input', function() {
    document.getElementById('displaytime2-t').textContent = this.value;
});

document.getElementById('inputnumber').addEventListener('input', function() {
    document.getElementById('displaynumber').textContent = this.value;
});

document.getElementById('imageInput').addEventListener('change', function() {
    var file = this.files[0];
    var reader = new FileReader();

    if (file) {
        reader.onload = function(e) {
            document.getElementById('imagePreview1').src = e.target.result;
            document.getElementById('imagePreview2').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


function exportAsImage() {
    html2canvas(document.querySelector("#content")).then(canvas => {
        // 创建一个图片元素
        var img = canvas.toDataURL("image/png");

        // 创建一个链接元素
        var link = document.createElement('a');
        link.href = img;
        link.download = 'exported-image.png';
        link.click();
    });
}