function submit()
{
        var r11 = document.getElementById("r11").innerHTML;
        var r11 = parseInt(r11); 
        var r12 = document.getElementById("r12").innerHTML;
        var r12 = parseInt(r12); 
        var r13 = document.getElementById("r13").innerHTML;
      var r13 = parseInt(r13);    
        var r21 = document.getElementById("r21").innerHTML;
      var r21 = parseInt(r21); 
        var r22 = document.getElementById("r22").innerHTML;
      var r22 = parseInt(r22); 
        var r23 = document.getElementById("r23").innerHTML;
      var r23 = parseInt(r23);    
        var r31 = document.getElementById("r31").innerHTML;
      var r31 = parseInt(r31);    
        var r32 = document.getElementById("r32").innerHTML;
      var r32 = parseInt(r32);   
        var r33 = document.getElementById("r33").innerHTML;
      var r33 = parseInt(r33); 
        var input = [r11, r12, r13, r21, r22, r23, r31, r32, r33];
//        input.toString();
//        document.getElementById("demo").innerHTML = input;
    
        
        
        var k=3;
        var n=9;
        var count=0;
        var adj = new Array;
        var invalid=0;
        var array = new Array;
        for(var i=0;i<n;i++)
        {
            if(input[i]>0 && input[i]<=k)
            {
                invalid++;
                array.push(input[i]);
            }
        }
        array.toString();
        document.getElementById("demo").innerHTML = invalid;
        if(invalid < n)
            window.alert("please enter values between 1 and "+k+" only");
    
for ( var i = 0; i < n; i++ ) {
    adj.push([0,0,0,0,0,0,0,0,0]); 
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
       
        for(var i=0;i<n;i++)
        {
	       for(var j=0;j<n;j++)
	       {
		      if(j!=i && adj[i][j]==1 && input[i]==input[j])
		      count = 1;
	       }
        }
        if(invalid!=9)
         document.getElementById("demo2").innerHTML = "";
        else if(count==0)
            document.getElementById("demo2").innerHTML = "correct solution";
        else
            document.getElementById("demo2").innerHTML = "incorrect solution";

}