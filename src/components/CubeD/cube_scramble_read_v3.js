//  var scramble = ["R","'","F","'","B","L","U"]

  
function scramble_read(scramble,url,cube,but)
{
    var flag = 0;  
    var ar = 0;
    var lay = []
   console.log(but);
   /***********USED FOR GENERATING ARRAY FOR INVERSING MOVES *************/
if ( but == 1)
{

    url = url.reverse();
    console.log(url);
    for (var i = 0 ; i < url.length ; i++ )
    
    {

        
        
        if (url[i] == "'")
        { 
            console.log("", url[i+1] );
            if (url[i+1] == "R" ||url[i+1] == "r" || url[i+1] == "x"  )
            {
                lay[ar] = "1_"+url[i+1]+"_1"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "F"||url[i+1] == "f" || url[i+1] == "z")
            {
                lay[ar] = "1_"+url[i+1]+"_1"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "B"||url[i+1] == "b")
            {
                lay[ar] = "-1_"+url[i+1]+"_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "U"||url[i+1] == "u" || url[i+1] == "y")
            {
                lay[ar] = "1_"+url[i+1]+"_1"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "L"||url[i+1] == "l")
            {
                lay[ar] = "-1_"+url[i+1]+"_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1]== "D"||url[i+1] == "d")
            {
                lay[ar] = "-1_"+url[i+1]+"_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            
            
        }
        else if (url[i] == "2")
        { 
            console.log("2",url[flag+1]);
            if (url[i+1] == "R" || url[i+1] == "r" || url[i+1] == "x" )
            {
                lay[ar] = "-1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "F"|| url[i+1] == "f" || url[i+1] == "z")
            {
                lay[ar] = "-1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "B"|| url[i+1] == "b" )
            {
                lay[ar] = "1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "U"|| url[i+1] == "u" || url[i+1] == "y")
            {
                lay[ar] = "-1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1; 
            }
            else if (url[i+1] == "L"|| url[i+1] == "l" )
            {
                lay[ar] = "1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1; 
             }
            else if (url[i+1]== "D"|| url[i+1] == "d" )
            {
                lay[ar] = "1_"+url[i+1]+"_2"
                flag = flag + 1;
                ar = ar + 1; 
            }
            
            
            
        }
        if ((url[i] == "R" ||url[i] == "r" || url[i] == "x" )&& url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_"+url[i]+"_1"
                flag = flag + 1;
                ar = ar + 1           
            }
            else if ((url[i] == "F"||url[i] == "f" || url[i] == "z") && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_"+url[i]+"_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if ((url[i] == "B" ||url[i] == "b")&& url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_"+url[i]+"_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if ((url[i] == "U"||url[i] == "u"||url[i] == "y") && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_"+url[i]+"_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if ((url[i] == "L" ||url[i] == "l")&& url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_"+url[i]+"_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if ((url[i]== "D"||url[i] == "d") && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_"+url[i]+"_1";
                flag = flag + 1;
                ar = ar + 1 
            }   
         
       
    
}
}
 /***********USED FOR GENERATING ARRAY FOR LEGAL MOVES *************/
if (but == 0)
{
if(url.length > cube.length)
{ 
    for (var i = 0 ; i < scramble.length ; i++ )
    {
        if (scramble[i] == "R")
        {
            lay[flag] = "1_R_1"
            flag = flag + 1
        }
        if (scramble[i] == "r")
        {
            lay[flag] = "1_r_1"
            flag = flag + 1
        }
        if (scramble[i] == "F")
        {
            lay[flag] = "1_F_1";
            flag = flag + 1
        }
        if (scramble[i] == "f")
        {
            lay[flag] = "1_f_1"
            flag = flag + 1
        }        

            
        if (scramble[i] == "B")
        {
            lay[flag] = "-1_B_1"
            flag = flag + 1
        }
        if (scramble[i] == "b")
        {
            lay[flag] = "-1_b_1"
            flag = flag + 1
        }
       
        if (scramble[i] == "D")
        {
            lay[flag] = "-1_D_1"
            flag = flag + 1
        }
        if (scramble[i] == "d")
        {
            lay[flag] = "-1_d_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "L")
        {
            lay[flag] = "-1_L_1"
            flag = flag + 1
        }
        if (scramble[i] == "l")
        {
            lay[flag] = "-1_l_1"
            flag = flag + 1
        }
        
        if (scramble[i] == "U")
        {
            lay[flag] = "1_U_1"
            flag = flag + 1
        }
        if (scramble[i] == "u")
        {
            lay[flag] = "1_u_1"
            flag = flag + 1
        }
        if (scramble[i] == "x")
        {
            lay[flag] = "1_x_1"
            flag = flag + 1
        }
        if (scramble[i] == "y")
        {
            lay[flag] = "1_y_1"
            flag = flag + 1
        }
        if (scramble[i] == "z")
        {
            lay[flag] = "1_z_1"
            flag = flag + 1
        }
           
        
        if (scramble[i] == "'")
        {
            if ( scramble[i-1] == "L" || scramble[i-1] == "D" || scramble[i-1] == "B" || scramble[i-1] == "l" || scramble[i-1] == "d" || scramble[i-1] == "b" )
            {
                lay[flag] = "-1_" + scramble[i-1] + "_1"
                lay[flag+1] = "-1_" + scramble[i-1] + "_1"
                flag = flag + 2
            }
            else if (scramble[i-1] == "F" || scramble[i-1] == "U" || scramble [i-1] == "R" ||scramble[i-1] == "f" || scramble[i-1] == "u" || scramble [i-1] == "r" || scramble [i-1] == "x"|| scramble [i-1] == "y" ||scramble [i-1] == "z")
            {
                lay[flag] = "1_" + scramble[i-1] + "_1"
                lay[flag+1] = "1_" + scramble[i-1] + "_1"
                flag = flag + 2                
            }
        }
        if (scramble[i] == "2")
        {
            if ( scramble[i-1] == "L" || scramble[i-1] == "D" || scramble[i-1] == "B" || scramble[i-1] == "l" || scramble[i-1] == "d" || scramble[i-1] == "b" )
            {
                lay[flag] = "-1_" + scramble[i-1] + "_1"
                flag = flag + 1
            }
            else if (scramble[i-1] == "F" || scramble[i-1] == "U" || scramble [i-1] == "R" || scramble[i-1] == "f"|| scramble[i-1] == "u" || scramble [i-1] == "r" || scramble [i-1] == "x"|| scramble [i-1] == "y" ||scramble [i-1] == "z")
            {
                lay[flag] = "1_" + scramble[i-1] + "_1"
                flag = flag + 1                
            }
            
            
        }
        if (scramble[0] == "'")
        {
            console.log("imp",url[cube.length-1])
            if ( url[cube.length-1] == "L" || url[cube.length-1] == "D" || url[cube.length-1] == "B" || url[cube.length-1] == "l" || url[cube.length-1] == "d" || url[cube.length-1] == "b" )
            {
                lay[flag] = "-1_" + url[cube.length-1] + "_1"
                lay[flag+1] = "-1_" + url[cube.length-1] + "_1"
                flag = flag + 2
            }
            else if (url[cube.length-1] == "F" || url[cube.length-1] == "U" || url [cube.length-1] == "R" || url[cube.length-1] == "f" || url[cube.length-1] == "u" || url [cube.length-1] == "r" || url [cube.length-1] == "x"|| url [cube.length-1] == "y" ||url [cube.length-1] == "z")
            {
                lay[flag] = "1_" + url[cube.length-1] + "_1"
                lay[flag+1] = "1_" + url[cube.length-1] + "_1"
                flag = flag + 2                
            }
        }
        if (scramble[0] == "2")
        {
            if ( url[cube.length-1] == "L" || url[cube.length-1] == "D" || url[cube.length-1] == "B" || url[cube.length-1] == "l" || url[cube.length-1] == "d" || url[cube.length-1] == "b" )
            {
                lay[flag] = "-1_" + url[cube.length-1] + "_1"
                flag = flag + 1
            }
            else if (url[cube.length-1] == "F" || url[cube.length-1] == "U" || url[cube.length-1] == "R" || url[cube.length-1] == "f" || url[cube.length-1] == "u" || url[cube.length-1] == "r"|| url [cube.length-1] == "x"|| url [cube.length-1]== "y" ||url [cube.length-1] == "z")
            {
                lay[flag] = "1_" + url[cube.length-1] + "_1"
                flag = flag + 1                
            }
            
            
        }
    }
}
}
    return lay
}

export {scramble_read};