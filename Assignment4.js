function MenuChoice()
{
    if (document.getElementById("menu").value == "Team Marvel")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Team DC Universe")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";     }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
     }
}