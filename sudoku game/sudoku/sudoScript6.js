function submit()
{
        var r11 = document.getElementById("r11").innerHTML;
        var r11 = parseInt(r11); 
        var r12 = document.getElementById("r12").innerHTML;
        var r12 = parseInt(r12); 
        var r13 = document.getElementById("r13").innerHTML;
      var r13 = parseInt(r13);    
        var r14 = document.getElementById("r14").innerHTML;
        var r14 = parseInt(r14); 
        var r15 = document.getElementById("r15").innerHTML;
        var r15 = parseInt(r15); 
        var r16 = document.getElementById("r16").innerHTML;
        var r16 = parseInt(r16); 
        
        var r21 = document.getElementById("r21").innerHTML;
      var r21 = parseInt(r21); 
        var r22 = document.getElementById("r22").innerHTML;
      var r22 = parseInt(r22); 
        var r23 = document.getElementById("r23").innerHTML;
      var r23 = parseInt(r23); 
        var r24 = document.getElementById("r24").innerHTML;
      var r24 = parseInt(r24); 
        var r25 = document.getElementById("r25").innerHTML;
      var r25 = parseInt(r25); 
        var r26 = document.getElementById("r26").innerHTML;
      var r26 = parseInt(r26); 
        
        var r31 = document.getElementById("r31").innerHTML;
      var r31 = parseInt(r31);    
        var r32 = document.getElementById("r32").innerHTML;
      var r32 = parseInt(r32);   
        var r33 = document.getElementById("r33").innerHTML;
      var r33 = parseInt(r33); 
        var r34 = document.getElementById("r34").innerHTML;
      var r34 = parseInt(r34); 
        var r35 = document.getElementById("r35").innerHTML;
      var r35 = parseInt(r35); 
        var r36 = document.getElementById("r36").innerHTML;
      var r36 = parseInt(r36); 
        
        var r41 = document.getElementById("r41").innerHTML;
      var r41 = parseInt(r41);    
        var r42 = document.getElementById("r42").innerHTML;
      var r42 = parseInt(r42);   
        var r43 = document.getElementById("r43").innerHTML;
      var r43 = parseInt(r43); 
        var r44 = document.getElementById("r44").innerHTML;
      var r44 = parseInt(r44); 
        var r45 = document.getElementById("r45").innerHTML;
      var r45 = parseInt(r45); 
        var r46 = document.getElementById("r46").innerHTML;
      var r46 = parseInt(r46); 
        
        var r51 = document.getElementById("r51").innerHTML;
      var r51 = parseInt(r51);    
        var r52 = document.getElementById("r52").innerHTML;
      var r52 = parseInt(r52);   
        var r53 = document.getElementById("r53").innerHTML;
      var r53 = parseInt(r53); 
        var r54 = document.getElementById("r54").innerHTML;
      var r54 = parseInt(r54); 
        var r55 = document.getElementById("r55").innerHTML;
      var r55 = parseInt(r55); 
        var r56 = document.getElementById("r56").innerHTML;
      var r56 = parseInt(r56); 
        
        var r61 = document.getElementById("r61").innerHTML;
      var r61 = parseInt(r61);    
        var r62 = document.getElementById("r62").innerHTML;
      var r62 = parseInt(r62);   
        var r63 = document.getElementById("r63").innerHTML;
      var r63 = parseInt(r63); 
        var r64 = document.getElementById("r64").innerHTML;
      var r64 = parseInt(r64); 
        var r65 = document.getElementById("r65").innerHTML;
      var r65 = parseInt(r65); 
        var r66 = document.getElementById("r66").innerHTML;
      var r66 = parseInt(r66); 
        var input = [r11, r12, r13, r14, r15, r16, r21, r22, r23, r24, r25, r26, r31, r32, r33, r34, r35, r36, r41, r42, r43, r44, r45, r46, r51, r52, r53, r54, r55, r56, r61, r62, r63, r64, r65, r66];
        //input.toString();
        //document.getElementById("demo").innerHTML = input;  
        
        var k=6;
        var n=36;
        var count=0;
        var adj = new Array;
        var invalid=0;
        for(var i=0;i<n;i++)
        {
            if(input[i]>0 && input[i]<=k)
            {
                invalid++;
            }
        }
//        array.toString();
//        document.getElementById("demo").innerHTML = invalid;
        if(invalid < n)
            window.alert("please enter values between 1 and "+k+" only");
    
        
for ( var i = 0; i < n; i++ ) {
    adj.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]); 
}
        
        for(var i=0;i<n;i++)
        {
	       for(var j=(i-(i%k));j<(i-(i%k)+k);j++)
	       {
		      if(i==j)
			     adj[i][j] = 0;
		      else
			     adj[i][j] = 1;
	       }
            for(var j=0;j<n;j++)
            {
                if((j-i)%k == 0 && i!=j)
                adj[i][j] = 1;
            }
        }
       //document.getElementById("demo").innerHTML = adj;
        for(var i=0;i<n;i++)
        {
	       for(var j=0;j<n;j++)
	       {
		      if(j!=i && adj[i][j]==1 && input[i]==input[j])
		      count = 1;
	       }
        }
        if(invalid!=36)
         document.getElementById("demo2").innerHTML = "";
        else if(count==0)
         document.getElementById("demo2").innerHTML = "correct solution";
        else
            document.getElementById("demo2").innerHTML = "incorrect solution";


    }