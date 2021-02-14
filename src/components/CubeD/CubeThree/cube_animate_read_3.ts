//  var scramble = ["R","'","F","'","B","L","U"]

  
function animate_read(scramble,url,cube,but)
{
    var flag = 0;  
    var lay = []


if(url.length > cube.length)
{ 
    for (var i = 0 ; i < scramble.length ; i++ )
    {
        if(i < scramble.length - 1 )
        {

        
        if ((scramble[i] == "R" || scramble[i]=="r"||scramble[i]=="x"||scramble[i] == "F"  || scramble[i]=="f"||scramble[i]=="y" ||scramble[i] == "U"|| scramble[i]=="u"|| scramble[i]=="z"||scramble[i] == "S") && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        
        

            
        if ((scramble[i] == "B" || scramble[i] =="b"||scramble[i] == "L" || scramble[i]=="l"||scramble[i] == "D"|| scramble[i] =="d"||scramble[i] == "M"||scramble[i] == "E") && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_"+scramble[i]+"_1"
            flag = flag + 1
        }
       
        
        
        
        
        else if (scramble[i] == "R" || scramble[i] == "r" || scramble[i] == "x" ||scramble[i] == "F" || scramble[i] == "f" || scramble[i] == "z" ||scramble[i] == "U" || scramble[i] == "u" || scramble[i] == "y"  ||scramble[i] == "S")
        { 
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "-1_"+scramble[i] +"_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "-1_"+scramble[i]+"_2"
                flag = flag + 1

            }  
            
        }
       
        

            
        else if (scramble[i] == "B" || scramble[i] == "b" |scramble[i] == "D"  || scramble[i] == "d"||scramble[i] == "L"  || scramble[i] == "l"||scramble[i] == "M"||scramble[i] == "E")
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "1_"+scramble[i]+"_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "1_"+scramble[i]+"_2"
                flag = flag + 1

            }  
        }
       
        
        
        
        
    
        
        
        }
        if ( i == scramble.length-1 )
        {
            if (scramble[i] == "R" || scramble[i] =="r" || scramble[i] == "x"||scramble[i] == "F" ||scramble[i] == "f" || scramble[i] == "z"||scramble[i] == "U"||scramble[i] == "u" || scramble[i] == "z"||scramble[i] == "S")
        {
            lay[flag] = "1_"+scramble[i]+"_1"
            flag = flag + 1
        }
    
        

            
        if (scramble[i] == "B" ||scramble[i] == "b"||scramble[i] == "L"||scramble[i] == "l"||scramble[i] == "D"|| scramble[i]=="d"||scramble[i] == "M"||scramble[i] == "E")
        {
            
            lay[flag] = "-1_"+scramble[i]+"_1"
            flag = flag + 1
        }
       
      
        
       
        

        }
        
        
    }
}

    return lay
}

export {animate_read};