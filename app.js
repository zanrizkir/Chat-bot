function talk() {
    var know = {
        "Haii" : "Hallo Salam kenal",
        "Who are you" : "Hello, Im grodd",
        "How are you" : "Im Good",
        "What can you do" : "Ngeroasting sampai kena mental",
        "Mabar" : "Bro Hayyyyuk Mabar Bro yahahahaha",
        "oke" : "Arigato",
        "Bye" : "Sayonara"
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatlog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatlog").innerHTML = know[user] + "<br>";
    }else{
        document.getElementById("chatlog").innerHTML = "Sorry, I don`t understand <br>";
    }
}