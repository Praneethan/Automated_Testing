var n=5;
for(let i=1;i<=n;i++)
        {
            var str="";
            for(let j=1;j<=i;j++)
            {
                for(let s=0;s<j;s++)
                {
                str+=String(j);
                }
            }
            console.log(str);
        }