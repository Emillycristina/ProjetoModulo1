function  calcularResp  ( ) {
    var  resposta  =  prompt( "Digite o número da alternativa escolhida:" )
    if  ( resposta  ==  2 ) {
        alert  ( "Você mostrou para que veio, hora de ir para próxima etapa do percurso!" )
        location.replace ( "jogoparte2.html" )
    }  else  if  ( resposta  ==  1  ) {
        alert  ( "Ops a floresta pode ser muito perigosa, as cobras te picaram e você perdeu!" )
    }  else  {
        alert  ( "Insira um número válido!" )
    }
  
  
  }
  
 function calculoresult  ( ) {
      var  resultado  =  prompt( "Digite o número da alternativa escolhida:" )
      if  ( resultado  ==  2 ) {
          alert ( "Ótima escolha, logo chegaremos ao destino!." )
          location.replace ( "jogoparte3.html" )
      }  else if ( resultado  ==  1  ) {
          alert  ( "Você escolheu a arma errada e o zumbi te pegou, até a próxima!" )
      }  else  {
          alert  ( "Insira um número válido!" )
      }
    
    
    }
  
  
   function  calculaEscolha  ( ) {
      var  escolha  =  prompt( "Digite o número da alternativa escolhida:" )
      if  ( escolha  ==  2 ) {
          alert ( "Você completou a missão, Parabéns!" )
          location.replace ( "final.html" )
      }  else  if ( escolha  ==  1  ) {
          alert  ( "Você nadou, nadou e morreu antes da praia.Boa sorte na próxima vez!" )
      } else {
          alert  ( "Insira um número válido!" )
      }
    
    
    }
  