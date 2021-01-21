function parser (input)  {
    var scra = "UDRLFBudrlfb'2ESM "
    var parse_scra = input
    var flag = 0 ;
        for (var i = 0; i<input.length;i++)
        {
            if (scra.search(input[i])==-1)
            {
                console.log(input[i]);
                var char = input[i]
                input[i].replace(char,"");
            }
            
        }
    
        return input;
    
   
  
   
}
export{parser};