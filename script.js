



function Difference(s, t)
    {
        var i = 0;
        var j = 0;
        var result = "";

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

    }
    console.log(Difference("mary", "maryam"));


     


 