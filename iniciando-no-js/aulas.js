var filho = 'keven'
var pai = 'luiz'

if ('keven2' == filho){
    console.log ("sim é filho");
}else  if('luiz2' == pai){
    console.log("sim é pai")
}else{
    console.log("não é")
}
    
switch(pai){
    case 'keven':
        console.log('é o filho pô');
        break;
    case 'outro':
        console.log('é outro');
        break;
    case 'luiz':  
        console.log('é o pai');
        break  
    default:
        console.log('olha, nenhum viu');
        break;
}