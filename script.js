function Difference(s, t)
    {
        var i = 0;
        var j = 0;
        var result = "";
        var regExp = /^[a-z]+$/;

        if( ( s.length <= 1000 ) && (t.length == s.length+1 ) && regExp.test(s) && regExp.test(t) ) {
        	while (j < t.length)
	        {
	         if (s[i] != t[j] || i == s.length)
	             result += t[j];
	         else
	             i++;
	         j++;
	        }
	        document.getElementById("Result").innerHTML = result;
	        return result;
        } else {
        	document.getElementById("Result").innerHTML = "Invalid strings!";
        }
    }
    console.log(Difference("abcd", "abcde"));


    


 