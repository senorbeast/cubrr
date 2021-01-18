//  var scramble = ["R","'","F","'","B","L","U"]

  
function scramble_read(scramble,url,cube,but)
{
    var flag = 0;  
    var ar = 0;
    var lay = []
   console.log(but);
if ( but == 1)
{

    url = url.reverse();
    console.log(url);
    for (var i = 0 ; i < url.length ; i++ )
    
    {

        
        
        if (url[i] == "'")
        { 
            console.log("", url[i+1] );
            if (url[i+1] == "R" )
            {
                lay[ar] = "1_R_1"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "F")
            {
                lay[ar] = "1_F_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "B")
            {
                lay[ar] = "-1_B_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "U")
            {
                lay[ar] = "1_U_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "L")
            {
                lay[ar] = "-1_L_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1]== "D")
            {
                lay[ar] = "-1_D_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            
            
        }
        else if (url[i] == "2")
        { 
            console.log("2",url[flag+1]);
            if (url[i+1] == "R" )
            {
                lay[ar] = "-1_R_2"
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "F")
            {
                lay[ar] = "-1_F_2";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "B")
            {
                lay[ar] = "1_B_2";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i+1] == "U")
            {
                lay[ar] = "-1_U_2";
                flag = flag + 1;
                ar = ar + 1; 
            }
            else if (url[i+1] == "L")
            {
                lay[ar] = "1_L_2";
                flag = flag + 1;
                ar = ar + 1; 
             }
            else if (url[i+1]== "D")
            {
                lay[ar] = "1_D_2";
                flag = flag + 1;
                ar = ar + 1; 
            }
            
            
        }
        if (url[i] == "R" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_R_1"
                flag = flag + 1;
                ar = ar + 1           
            }
            else if (url[i] == "F" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_F_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if (url[i] == "B" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_B_1";
                flag = flag + 1;
                ar = ar + 1 ;
            }
            else if (url[i] == "U" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "-1_U_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if (url[i] == "L" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_L_1";
                flag = flag + 1;
                ar = ar + 1 
            }
            else if (url[i]== "D" && url[i-1] != "'" && url[i-1] != "2")
            {
                lay[ar] = "1_D_1";
                flag = flag + 1;
                ar = ar + 1 
            }   
        
       
    
}
}
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

           
        
        if (scramble[i] == "'")
        {
            if ( scramble[i-1] == "L" || scramble[i-1] == "D" || scramble[i-1] == "B" )
            {
                lay[flag] = "-1_" + scramble[i-1] + "_1"
                lay[flag+1] = "-1_" + scramble[i-1] + "_1"
                flag = flag + 2
            }
            else if (scramble[i-1] == "F" || scramble[i-1] == "U" || scramble [i-1] == "R")
            {
                lay[flag] = "1_" + scramble[i-1] + "_1"
                lay[flag+1] = "1_" + scramble[i-1] + "_1"
                flag = flag + 2                
            }
        }
        if (scramble[i] == "2")
        {
            if ( scramble[i-1] == "L" || scramble[i-1] == "D" || scramble[i-1] == "B" )
            {
                lay[flag] = "-1_" + scramble[i-1] + "_1"
                flag = flag + 1
            }
            else if (scramble[i-1] == "F" || scramble[i-1] == "U" || scramble [i-1] == "R")
            {
                lay[flag] = "1_" + scramble[i-1] + "_1"
                flag = flag + 1                
            }
            
            
        }
        if (scramble[0] == "'")
        {
            console.log("imp",url[cube.length-1])
            if ( url[cube.length-1] == "L" || url[cube.length-1] == "D" || url[cube.length-1] == "B" )
            {
                lay[flag] = "-1_" + url[cube.length-1] + "_1"
                lay[flag+1] = "-1_" + url[cube.length-1] + "_1"
                flag = flag + 2
            }
            else if (url[cube.length-1] == "F" || url[cube.length-1] == "U" || url [cube.length-1] == "R")
            {
                lay[flag] = "1_" + url[cube.length-1] + "_1"
                lay[flag+1] = "1_" + url[cube.length-1] + "_1"
                flag = flag + 2                
            }
        }
        if (scramble[0] == "2")
        {
            if ( url[cube.length-1] == "L" || url[cube.length-1] == "D" || url[cube.length-1] == "B" )
            {
                lay[flag] = "-1_" + url[cube.length-1] + "_1"
                flag = flag + 1
            }
            else if (url[cube.length-1] == "F" || url[cube.length-1] == "U" || url[cube.length-1] == "R")
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