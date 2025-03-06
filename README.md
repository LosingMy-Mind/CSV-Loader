# CSV-Loader

A JS script that loads  a CSV value and loads it into HTML content  
-----------------------------------------------------------------------------------
Created by Violet-Dev  
3.5.2025  
The initial Prototype for a CSV-to-HTML script
-----------------------------------------------------------------------------------
Using values in links (ex: “index.html?choice=1\&input=2”), you can load a   
Comma-Separated Value file and arrange it as an array  
Then it stores the specific line you want based on the second URL/link value  
and stores that index or line of the original array as a new array  
From there, it breaks the newArray/line into different values that can then  
be loaded into an HTML doc  
-----------------------------------------------------------------------------------
Due to using fetch(), the script cannot be run as a local file. To get around  
this, you can:

- Use LiveServer Extension  
- Upload to a domain or subdomain  
- Use the Neflify app to upload a site for free  
- Run “python -m http.server 8000” in terminal
-----------------------------------------------------------------------------------
Version-Log  
1.1.0 - Red