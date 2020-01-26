let totalMarks=80;
let message;

if(totalMarks>=0 && totalMarks<100)
{
    if(totalMarks<35)
    {
        message="fail";
    }
    else
    {
        if(totalMarks>=35 && totalMarks<50)
        {
            message="pass";
        }
        else if(totalMarks>=50 && totalMarks<65)
        {
            message="second class";
        }
        else if(totalMarks>=65 && totalMarks<75)
        {
            message="first class";
        }
        else{
            message="distinction";
        }
    }
}
else{
    message="TotalMarks should be between 0 and 100";
}
console.log(message);