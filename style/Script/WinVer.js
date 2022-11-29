var vers={
    "5.0":2000,
    "5.1":"XP",
    "5.2":"Server 2003",
    "6.0":"Vista",
    "6.1":7,
    "6.2":8,
    "6.3":"8.1",
    "10.0":"10/11"
};
navigator.userAgent.replace(/windows nt (\d+\.\d+)/gi,function(str,ver){
    document.write("Текущая ваша ОС: Windows "+vers[ver]+" ")
    return str
})

