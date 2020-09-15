// Mode 
function Switch() {
    var A = document.getElementById('TXT').innerHTML;
    if (A == 'Light Mode') 
    {
        OFF();
    }
    else 
    {
        ON();
    }
}

function ON() {
    document.getElementById('TXT').innerHTML = "Light Mode";
    document.getElementById('LG').src = "ON.png"
    document.getElementById('STL').style.color = "white";
    document.getElementById('STL').style.backgroundColor = "Black";
    document.getElementById('Mat').style.border = "6px solid White";
    document.getElementById('In').style.border = "6px solid White";
    document.getElementById('Bt').style.border = "6px solid White";
    document.getElementById('In').style.backgroundColor = "#2c3e50";

}
function OFF() {
    document.getElementById('TXT').innerHTML = "Dark Mode";
    document.getElementById('LG').src = "OFF.png"
    document.getElementById('STL').style.color = "Black";
    document.getElementById('STL').style.backgroundColor = "white";
    document.getElementById('Mat').style.border = "6px solid #2c3e50";
    document.getElementById('In').style.border = "6px solid #2c3e50";
    document.getElementById('Bt').style.border = "6px solid #2c3e50";
    document.getElementById('In').style.backgroundColor = "grey";
}
// Globle Stuff
var IDs =
    [
        document.getElementById('I1').innerHTML,
        document.getElementById('I2').innerHTML,
        document.getElementById('I3').innerHTML,
        document.getElementById('I4').innerHTML,
        document.getElementById('I5').innerHTML,
        document.getElementById('I6').innerHTML,
        document.getElementById('I7').innerHTML,
        document.getElementById('I8').innerHTML,
        document.getElementById('I9').innerHTML
    ];
var Turn = 1;
var Tries = 0;
// Read Conent
function ReadIDs()
{
    IDs =
        [
        document.getElementById('I1').innerHTML,
        document.getElementById('I2').innerHTML,
        document.getElementById('I3').innerHTML,
        document.getElementById('I4').innerHTML,
        document.getElementById('I5').innerHTML,
        document.getElementById('I6').innerHTML,
        document.getElementById('I7').innerHTML,
        document.getElementById('I8').innerHTML,
        document.getElementById('I9').innerHTML
        ];
}
function TakeTurn(ID)
{
    if (Turn == 1) {
        document.getElementById(ID).innerHTML = 'X';
    }
    else {
        document.getElementById(ID).innerHTML = 'O';
    }
}
function ChangeTurn(pop)
{
    if (Turn == 1) 
    {
        Turn = 2;
        document.getElementById('Displ').innerHTML = 'Player 2 : O Turn';
    }
    else 
    {
        Turn = 1;
        document.getElementById('Displ').innerHTML = 'Player 1 : X Turn';
    }
    Tries = Tries + 1;
}
function IsValidChoice()
{
    if (Turn == 1) 
    {
        document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
    }
    else 
    {
        document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
    }
}
function Winner()
{
    document.getElementById("Mat").style.display = 'none';
}
function Play(BLK)
{
    if (document.getElementById(BLK).innerHTML != 'X' && document.getElementById(BLK).innerHTML != 'O') 
    {
        TakeTurn(BLK);
        if (IsWin() == false) 
        {
            ChangeTurn();
        }
        else 
        {
            if (Turn == 1) 
            {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
                Winner();
            }
            else 
            {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
                Winner();
            }
        }
    }
    else 
    {
        IsValidChoice();    
    }
}
document.getElementById('I1').addEventListener('click', () => { Play('I1'); });
document.getElementById('I2').addEventListener('click', () => { Play('I2'); });
document.getElementById('I3').addEventListener('click', () => { Play('I3'); });
document.getElementById('I4').addEventListener('click', () => { Play('I4'); });
document.getElementById('I5').addEventListener('click', () => { Play('I5'); });
document.getElementById('I6').addEventListener('click', () => { Play('I6'); });
document.getElementById('I7').addEventListener('click', () => { Play('I7'); });
document.getElementById('I8').addEventListener('click', () => { Play('I8'); });
document.getElementById('I9').addEventListener('click', () => { Play('I9'); });



function Hirzon_Check(Player)
{
    if ((IDs[0] == Player) && (IDs[1] == Player) && (IDs[2] == Player) )
        {
            return true;
        }
    else
        if ((IDs[3] == Player) && (IDs[4] == Player) && (IDs[5] == Player)) 
        {
            return true;
        }
    else
        if ((IDs[6] == Player) && (IDs[7] == Player) && (IDs[8] == Player)) 
        {
            return true;
        }
    else{ return false;}
}
function Vertic_Check(Player) 
{
    if ((IDs[0] == Player) && (IDs[3] == Player) && (IDs[6] == Player)) {
        return true;
        }
    else
        if ((IDs[1] == Player) && (IDs[4] == Player) && (IDs[7] == Player)) {
            return true;
        }      
    else
        if ((IDs[2] == Player) && (IDs[5] == Player) && (IDs[8] == Player)) {
            return true;
        }
    else 
        { return false; }
}
function Diagon_Check(Player)
{
    if ((IDs[0] == Player) && (IDs[4] == Player) && (IDs[8] == Player)) {
        return true;
    }
    else
        if ((IDs[6] == Player) && (IDs[4] == Player) && (IDs[2] == Player)) {
            return true;
        }
        else { return false; }
}
function IsWin()
{
    ReadIDs();
    if((Vertic_Check('X') == true) || (Hirzon_Check('X') == true) || (Diagon_Check('X') == true))
    {
        return true;
    }
    else
    if ((Vertic_Check('O') == true) || (Hirzon_Check('O') == true) || (Diagon_Check('O') == true)) 
    {
        return true;
    }
    
    if(Tries == 8)
    {       
        window.alert("Game Draw Between Player 1 and Player 2.");
        setTimeout("MainMenu()",1000);
    }
    return false;
    
}
function MainMenu()
{
    window.location.replace("index.html");
}
document.getElementById('Main').addEventListener('click', () =>{window.location.replace("index.html");});
document.getElementById('Restart').addEventListener('click',()=>{window.location.replace("Main.html");});