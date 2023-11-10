var name = 'k8805'
var letter = 'Dear ' + name + ' \n\
\n\
Lorem ipsum dolor sit amet, consectetur adipisicing elit, \n\
sed do eiusmod tempor incididunt ut labore et dolore magna \n\
aliqua. ' + name + ' Ut enim ad minim veniam, quis nostrud exercitation \n\
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor \n\
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\
Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt \n\
mollit anim id est laborum.'
console.log(letter);

letter = `Dear ${name} 

Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt 
mollit anim id est laborum.`
console.log(letter);
