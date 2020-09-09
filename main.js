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
}
function Block1(){
    
    if (document.getElementById('I1').innerHTML != 'X' && document.getElementById('I1').innerHTML != 'O')
    {
        TakeTurn('I1');
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()",5000);
            if (Turn == 1) 
            {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else 
            {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block2() 
{
   
    if (document.getElementById('I2').innerHTML != 'X' && document.getElementById('I2').innerHTML != 'O')
    {
        TakeTurn('I2');
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block3() 
{
     if (document.getElementById('I3').innerHTML != 'X' && document.getElementById('I3').innerHTML != 'O')
    {
        TakeTurn('I3');
        
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else 
            {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
         }  
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block4() 
{
    if (document.getElementById('I4').innerHTML != 'X' && document.getElementById('I4').innerHTML != 'O')
    {
        TakeTurn('I4');
        
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block5() 
{
    if (document.getElementById('I5').innerHTML != 'X' && document.getElementById('I5').innerHTML != 'O')
    {
        TakeTurn('I5');
        
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block6() 
{
    if (document.getElementById('I6').innerHTML != 'X' && document.getElementById('I6').innerHTML != 'O')
    {
        TakeTurn('I6');
        
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }     
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block7() 
{
    if (document.getElementById('I7').innerHTML != 'X' && document.getElementById('I7').innerHTML != 'O')
    {
        TakeTurn('I7');
        
        if(IsWin() == false)
        {
            ChangeTurn();
        }
        else
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block8() 
{
    if (document.getElementById('I8').innerHTML != 'X' && document.getElementById('I8').innerHTML != 'O')
    {
        TakeTurn('I8');
        if (IsWin() == false) 
        {
            ChangeTurn();
        }
        else 
        {
            setTimeout("MainMenu()", 5000);
            if (Turn == 1) 
            {
                document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
            }
            else 
            {
                document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
            }
        }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
}
function Block9() 
{
     if (document.getElementById('I9').innerHTML != 'X' && document.getElementById('I9').innerHTML != 'O')
    {
         TakeTurn('I9');
         if (IsWin() == false) 
         {
             ChangeTurn();
         }
         else 
         {
             setTimeout("MainMenu()", 5000);
             if (Turn == 1) 
             {
                 document.getElementById('Displ').innerHTML = 'Player 1 (X) Wins.';
             }
             else 
             {
                 document.getElementById('Displ').innerHTML = 'Player 2 (O) Wins.';
             }
         }
    }
    else
    {
        if(Turn == 1)
        {
            document.getElementById('Displ').innerHTML = 'Player 1 : X Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
        else
        {
            document.getElementById('Displ').innerHTML = 'Player 2 : O Turn <br> Sorry Invalid Choice. Choose an Empty Block!';
        }
    }
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