function getMarks() {
	var maths= Number(document.getElementById("maths").value);
	var physics=Number(document.getElementById("physics").value);
	var chemistry=Number(document.getElementById("chemistry").value);
	var marks=maths+physics+chemistry;
	//console.log(marks)
	var percentage=(marks)/3;
    document.getElementById("percent").innerHTML = percentage+"%";
    var grade="";
    if(percentage>=90) {
    	grade="A+";
    }
    else if(percentage>=80 && percentage<90) {
    	grade="A";
    }
    else if(percentage>=75 && percentage<80) {
    	grade="B+";
    }
    else if(percentage>=70 && percentage<75) {
    	grade="B";
    }
    else if(percentage>=65 && percentage<70) {
    	grade="C+";
    }
    else if(percentage>=60 && percentage<65) {
    	grade="C";
    }
    else if(percentage>=55 && percentage<60) {
    	grade="D+";
    }
    else if(percentage>=50 && percentage<55) {
    	grade="D";
    }
    else if(percentage>=40 && percentage<50) {
    	grade="E";
    }
    else {
    	grade="F";
    }
    document.getElementById("grade").innerHTML=grade;
    if(grade=='F') {
    	document.getElementById("pass").innerHTML="Sorry You failed, Try again!";
    }
    else {
    	document.getElementById("pass").innerHTML="Congratulations! You passed";
    }
}