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
function ChangeTurn()
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
                setTimeout("MainMenu()", 1000);
                window.alert('Player 1 (X) Wins.');
            }
            else 
            {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
                setTimeout("MainMenu()", 1000);
                window.alert('Player 2 (O) Wins.');
            }
        }
    }
    else 
    {
        IsValidChoice();    
    }
}

function Block1()
{
    Play('I1');
}
function Block2() 
{
    Play('I2');
}
function Block3() 
{
    Play('I3');
}
function Block4() 
{
    Play('I4');
}
function Block5() 
{
    Play('I5');
}
function Block6() 
{
    Play('I6');
}
function Block7() 
{
    Play('I7');
}
function Block8() 
{
    Play('I8');
}
function Block9() 
{
    Play('I9');
}
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
    3   }
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
console.log(Tries);
    
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
function Restart()
{
    window.location.replace("Main.html");
}
