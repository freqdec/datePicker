var fdLocale = {
fullMonths:["Janu\u00E1r", "Febru\u00E1r", "Marec", "Apr\u00EDl", "M\u00E1j", "J\u00FAn", "J\u00FAl", "August", "September", "Okt\u00F3ber", "November", "December"],
monthAbbrs:["Jan", "Feb", "Mar", "Apr", "M\u00E1j", "J\u00FAn", "J\u00FAl", "Aug", "Sep", "Okt", "Nov", "Dec"],
fullDays:["Pondelok", "Utorok", "Streda", "\u0160tvrtok", "Piatok", "Sobota", "Nede\u013Ea"],
dayAbbrs:["Pon", "Uto", "Str", "\u0160tv", "Pia", "Sob", "Ned"],
titles:["Minul\u00FD mesiac", "\u010Eal\u0161\u00ED mesiac", "Minul\u00FD rok", "\u010Eal\u0161\u00ED rok", "Dnes", "Uk\u00E1za\u0165 kalend\u00E1r", "t\u00FD\u017E", "T\u00FD\u017Ede\u0148 [[%0%]] z [[%1%]]", "T\u00FD\u017Ede\u0148", "Vyberte d\u00E1tum", "Kliknite a potiahnite pre presum", "Uk\u00E1\u017E \u0022[[%0%]]\u0022 prv\u00FD", "Dnes", "Nepovolen\u00FD d\u00E1tum\u003A"]};
try { 
        if("datePickerController" in window) { 
                datePickerController.loadLanguage(); 
        }; 
} catch(err) {};