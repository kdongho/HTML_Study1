var Links = {
    setColor: function(color) {
        var alist = document.querySelectorAll("a");
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i += 1;
        }
    }
};

var Body = {
    setColor: function(color) {
        document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function(color) {
        document.querySelector("body").style.backgroundColor = color;
    }
};
// Body Object를 만들고, 해당 object내에 setColor key에 기존 BodySetColor를 대체함.

//function BodySetColor(color) {
//document.querySelector("body").style.color = color;
//}W

//function BodySetBackgroundColor(color) {
//document.querySelector("body").style.backgroundColor = color;
//}

function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "night") {
        Body.setBackgroundColor("black");
        Body.setColor("white");
        self.value = "day";
        Links.setColor("yellow");
    } else if (self.value === "day") {
        Body.setBackgroundColor("white");
        Body.setColor("black");
        self.value = "night";
        Links.setColor("red");
    }
}
