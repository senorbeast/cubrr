//  var scramble = ["R","'","F","'","B","L","U"]

  
function animate_read(scramble,url,cube,but)
{
    var flag = 0;  
    var lay = []

if ( but == 1)
{
    for (var i = 0 ; i < scramble.length ; i++ )
    {
        if (scramble[i] == "R")
        {
            lay[flag] = "1_R_1"
            flag = flag + 1
        }
        if (scramble[i] == "F")
        {
            lay[flag] = "1_F_1";
            flag = flag + 1
        }
        

            
        if (scramble[i] == "B")
        {
            lay[flag] = "-1_B_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "D")
        {
            lay[flag] = "-1_D_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "L")
        {
            lay[flag] = "-1_L_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "U")
        {
            lay[flag] = "1_U_1"
            flag = flag + 1
        }

        if (scramble[i] == "R'")
        {
            lay[flag] = "1_R_1"
        }
        if (scramble[i] == "F'")
        {
            lay[flag] = "1_F_1"
        }
        if (scramble[i] == "U'")
        {
            lay[flag] = "1_U_1"
        }
        if (scramble[i] == "B'")
        {
            lay[flag] = "-1_B_1"
        }
        if (scramble[i] == "L'")
        {
            lay[flag] = "-1_L_1"
        }
        if (scramble[i] == "D'")
        {
            lay[flag] = "-1_D_1"
        }
        if(scramble[i] == "R2")
        {
            lay[flag] = "1_R_2"
        }

        if(scramble[i] == "U2")
        {
            lay[flag] = "1_U_2"
        }

        if(scramble[i] == "F2")
        {
            lay[flag] = "1_F_2"
        }

        if(scramble[i] == "D2")
        {
            lay[flag] = "1_D_2"
        }

        if(scramble[i] == "L2")
        {
            lay[flag] = "1_L_2"
        }

        if(scramble[i] == "B2")
        {
            lay[flag] = "1_B_2"
        }
        
    
}
}
if(url.length > cube.length)
{ 
    for (var i = 0 ; i < scramble.length ; i++ )
    {
        if(i < scramble.length - 1 )
        {

        
        if (scramble[i] == "R" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_R_1"
            flag = flag + 1
        }
        if (scramble[i] == "F" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_F_1";
            flag = flag + 1
        }
        

            
        if (scramble[i] == "B" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_B_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "D" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_D_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "L" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_L_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "U" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "1_U_1"
            flag = flag + 1
        }
        else if (scramble[i] == "R"  )
        { 
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "-1_R_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "-1_R_2"
                flag = flag + 1

            }  
            
        }
        else if (scramble[i] == "F" )
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "-1_F_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "-1_F_2"
                flag = flag + 1

            }  
        }
        

            
        else if (scramble[i] == "B" )
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "1_B_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "1_B_2"
                flag = flag + 1

            }  
        }
       
        else if (scramble[i] == "D"  )
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "1_D_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "1_D_2"
                flag = flag + 1

            }  
        }
        
        else if (scramble[i] == "L" )
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "1_L_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "1_L_2"
                flag = flag + 1

            }  
        }
        
        else if (scramble[i] == "U" )
        {
            if ( scramble[i+1] == "'")
            {
                lay[flag] = "-1_U_1"
                flag = flag + 1

            }      
            else if (scramble[i+1] == "2")
            {
                lay[flag] = "-1_U_2"
                flag = flag + 1

            }  
        }
        
        }
        if ( i == scramble.length-1 )
        {
            if (scramble[i] == "R")
        {
            lay[flag] = "1_R_1"
            flag = flag + 1
        }
        if (scramble[i] == "F")
        {
            lay[flag] = "1_F_1";
            flag = flag + 1
        }
        

            
        if (scramble[i] == "B")
        {
            lay[flag] = "-1_B_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "D")
        {
            lay[flag] = "-1_D_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "L")
        {
            lay[flag] = "-1_L_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "U")
        {
            lay[flag] = "1_U_1"
            flag = flag + 1
        }
        

        }
        
        
    }
}

    return lay
}

export {animate_read};