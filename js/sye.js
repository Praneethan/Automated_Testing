var arr=[1,2,3]
var m=0;
        var n=arr.length;
        for(let i=n-1;i>=0;i--)
        {
        while(m<=n)
            {
                arr[m]=arr[i];
            }
            m+=1;
        }
        console.log(arr);