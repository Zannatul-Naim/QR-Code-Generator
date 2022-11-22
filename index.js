
function generateQR() {
    
    var googleapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
    var image_load = document.getElementById("img");
    var size_load = document.getElementById("size").value;
    var text_load = document.getElementById("qr_text").value;

    if(text_load !== "" && size_load == "100") {
        image_load.src = googleapi+"100x100"+"&ch1"+text_load;
    } else if(text_load !== "" && size_load == "150") {
        image_load.src = googleapi+"150x150"+"&ch1"+text_load;
    } else if(text_load !== "" && size_load == "200") {
        image_load.src = googleapi+"200x200"+"&ch1"+text_load;
    } else if(text_load !== "" && size_load == "250") {
        image_load.src = googleapi+"250x250"+"&ch1"+text_load;
    } else if(text_load !== "" && size_load == "300") {
        image_load.src = googleapi+"300x300"+"&ch1"+text_load;
    } else {
        alert("Enter text to generate QR code!")
    }
}