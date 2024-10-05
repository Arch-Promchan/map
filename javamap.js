function map() 
{
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var find = "https://www.google.com/maps?q=" + encodeURIComponent(address + ", " + city) + "&output=embed";
    document.getElementById("mapframe").src = find;
}