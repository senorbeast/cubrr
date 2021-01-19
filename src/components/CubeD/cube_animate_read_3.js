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
        if (scramble[i] == "r" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_r_1"
            flag = flag + 1
        }
        if (scramble[i] == "f" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_f_1";
            flag = flag + 1
        }
        

            
        if (scramble[i] == "b" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_b_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "d" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_d_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "l" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "-1_l_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "u" && ( scramble[i+1] != "'" && scramble[i+1] != "2") )
        {
            lay[flag] = "1_u_1"
            flag = flag + 1
        }
        if (scramble[i] == "x" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_x_1"
            flag = flag + 1
        }
        if (scramble[i] == "z" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_z_1";
            flag = flag + 1
        }
        if (scramble[i] == "y" && ( scramble[i+1] != "'" && scramble[i+1] != "2"))
        {
            lay[flag] = "1_y_1";
            flag = flag + 1
        }
        else if (scramble[i] == "R" || scramble[i] == "r" || scramble[i] == "x" )
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
        else if (scramble[i] == "F" || scramble[i] == "f" || scramble[i] == "z" )
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
        

            
        else if (scramble[i] == "B" || scramble[i] == "b" )
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
       
        else if (scramble[i] == "D"  || scramble[i] == "d" )
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
        
        else if (scramble[i] == "L"  || scramble[i] == "l")
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
        
        else if (scramble[i] == "U" || scramble[i] == "u" || scramble[i] == "y" )
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
        
        
        }
        if ( i == scramble.length-1 )
        {
            if (scramble[i] == "R" || scramble[i] =="r" || scramble[i] == "x")
        {
            lay[flag] = "1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        if (scramble[i] == "F" ||scramble[i] == "f" || scramble[i] == "z")
        {
            lay[flag] = "1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        

            
        if (scramble[i] == "B" ||scramble[i] == "b")
        {
            
            lay[flag] = "-1_"+scramble[i]+"_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "D"|| scramble[i]=="d")
        {
          
            lay[flag] = "-1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "L"||scramble[i] == "l")
        {
            lay[flag] = "-1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "U"||scramble[i] == "f" || scramble[i] == "z")
        {
            lay[flag] = "1_"+scramble[i]+"_1"
            flag = flag + 1
        }
        

        }
        
        
    }
}

    return lay
}

export {animate_read};