
// BOTÔES DE SELEÇÂO DAS CALCULADORAS

let none = document.querySelector('#none')
let eqseg = document.querySelector('#eqseg')
let pitagoras = document.querySelector('#pitagoras')
let imc = document.querySelector('#imc')

// DIV AGRUPADORA DAS CALCULADORAS

let calcimc = document.querySelector('.imc')
let calceqseg = document.querySelector('.eqseg')
let calcpitagoras = document.querySelector('.pitagoras')

//RES ( DIV ) E RESULTADO ( P )

let res = document.querySelector('.res')
let resultado = document.querySelector('.resultado')
let resh1 = document.querySelector('#resh1')
resh1.classList.add('disable') 


// FUNC DESATIVAR TODOS (Opção Nenhuma Selecionado)
// LET NONE

none.addEventListener('click', desactiveall)
function desactiveall(){

    none.classList.add('btn-active')
    none.classList.remove('desativar')

    imc.classList.add('desativar')
    imc.classList.remove('btn-active')

    eqseg.classList.add('desativar')
    eqseg.classList.remove('btn-active')

    pitagoras.classList.add('desativar')
    pitagoras.classList.remove('btn-active')

    calceqseg.classList.add('disable')
    calcpitagoras.classList.add('disable')
    calcimc.classList.add('disable')

    res.classList.add('disable')

}

// FUNC ATIVAR EQUAÇÂO DO SEGUNDO GRAU, E DESATIVAR TODOS OS OUTROS (Opção EQSEG Selecionado)
// LET EQSEG

eqseg.addEventListener('click', ativareqseg)
function ativareqseg(){

    eqseg.classList.remove('desativar')
    eqseg.classList.add('btn-active') 

    imc.classList.add('desativar')
    imc.classList.remove('btn-active')  

    pitagoras.classList.add('desativar')
    pitagoras.classList.remove('btn-active')

    none.classList.add('desativar')
    none.classList.remove('btn-active')

    calceqseg.classList.remove('disable')
    calcpitagoras.classList.add('disable')
    calcimc.classList.add('disable')

    res.classList.add('disable')

}

//CALCULAR EQSEG

// APÒS SELECIONAR O BOTÂO ("EQUAÇÂO DO SEGUNDO GRAU") 

eqseg.addEventListener('click', calculareqseg)
function calculareqseg(){    

    //CRIAÇÂO DAS VARIAVEIS DOS TERMOS A, B, C ( " AX^2 (+-) BX (+-) C = 0 ")

    let a = document.querySelector('#a')
    let b = document.querySelector('#b')
    let c = document.querySelector('#c')  

    //LIMPANDO CONTEUDO DAS VARIAVEIS E DOS INPUTS

    a.value = ""
    b.value = ""
    c.value = ""

    //APÒS CLICAR EM CALCULAR

    document.querySelector('.btn-submit-eqseg').addEventListener('click', function(){     
        
        // DEFININDO O VALOR DADO NOS INPUTS AS VARIAVEIS

        a = document.querySelector('#a').value
        b = document.querySelector('#b').value
        c = document.querySelector('#c').value

        // VALIDAÇÃO DE DADOS

        //SE A ESTIVER VAZIO  

        if(a == ""){
            alert('Valor de A não encontrado')            
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
        }

        //SE B ESTIVER VAZIO

        if(b == ""){
            alert('Valor de B não encontrado')
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
        }

        //SE C ESTIVER VAZIO

        if(c == ""){
            alert('Valor de C não encontrado')
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
        }

        //APÒS VALIDAÇÂO, CALCULAR DADOS

        if(a != "" && b != "" && c !=""){  
            
            //REMOVENDO O DISABLE DA DIV DE RESPOSTAS, E SEU TITULO

              
            res.classList.remove('disable') 
            
            //CRIANDO VARIAVEIS PARA CALCULAR DELTA
            // DELTA = B^2 - 4*a*c  // (DELTA = (B*B) - (4*A*C))
            let quadradob = b * b
            let delta = quadradob - (4*a*c)

            //CRIANDO VARIVEIS PARA CALCULAR X1 E X2
            // X1 = -B + RAIZ(DELTA)/2a // (X1 = (-B) + (RAIZ(DELTA)) / (2*a))
            // X2 = -B - RAIZ(DELTA)/2a // (X1 = (-B) + (RAIZ(DELTA)) / (2*a))

            let raizdelta = Math.sqrt(delta.toFixed(2))
            let negb = -b

            //CALCULANDO X1 E X2

            let x1 = (negb + raizdelta)/(2*a).toFixed(2)
            let x2 = (negb - raizdelta)/(2*a)
            let valorx1 = x1.toFixed(2)                   
            let valorx2 = x2.toFixed(2)    
            
            //VALIDAÇÂO CASO DELTA SEJA <0

            if(delta < 0){
                alert('Como o valor de delta é negativo, torna os valores incalculaveis')
                resultado.innerHTML = "Como o valor de delta é negativo, torna os valores incalculaveis<br><br><br>"
                resultado.innerHTML += `O valor de delta seria ${delta}`
            }
            
            //RESULTADO
            
            else{
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor de A, B e C são respectivamente : ${a}, ${b}, ${c}. <br> O valor de delta é ${delta}. <br> E os valores de X1 e X2, são ${valorx1} e ${valorx2} `
            }
        }
    })
}


// FUNC ATIVAR PITAGORAS, E DESATIVAR TODOS OS OUTROS (Opção PITAGORAS Selecionado)
// LET PITAGORAS

pitagoras.addEventListener('click', ativarpitagoras)
function ativarpitagoras(){

    pitagoras.classList.add('btn-active')
    pitagoras.classList.remove('desativar')

    imc.classList.add('desativar')
    imc.classList.remove('btn-active')

    none.classList.add('desativar')
    none.classList.remove('btn-active')

    eqseg.classList.remove('btn-active')
    eqseg.classList.add('desativar')    

    calceqseg.classList.add('disable')
    calcpitagoras.classList.remove('disable')
    calcimc.classList.add('disable')

    res.classList.add('disable')

}

// PITAGORAS
//APÒS SELECIONAR A OPÇÂO PITAGORAS

pitagoras.addEventListener('click', calcularpitagora)
function calcularpitagora(){

    //CRIANDO VARIAVEIS PARA SELECIONAR QUAL RESPOSTA QUER

    let catetosad = document.querySelector('#btn-cateto-ad')
    let catetosop = document.querySelector('#btn-cateto-op')
    let hipotenusa =document.querySelector('#btn-hipo')

    //REMOVENDO SELEÇÔES, TIRANDO A CLASS ("btn-calc-active")

    catetosad.classList.remove('btn-calc-active')
    catetosop.classList.remove('btn-calc-active')
    hipotenusa.classList.remove('btn-calc-active')

    //CRIANDO VARIAVEIS DOS VALORES PREVIAMENTE, E LIMPANDO SUAS CAIXAS DE DADOS

    let valorcatetoop = document.querySelector('#catetooposto')
    let valorcatetoad = document.querySelector('#catetoadjacente')
    let valorhipo = document.querySelector('#hipotenusa')
    valorcatetoad.value = ""    
    valorcatetoop.value = ""
    valorhipo.value = "" 

    //CLICAR HIPOTENUSA
    //ESCOLHER A OPÇÂO DE ENCONTRAR HIPOTENUSA
    // H^2 = Ca^2 + Co^2
    // H^2 = X^2

    hipotenusa.addEventListener('click', function(){

        //SELECIONANDO A OPÇÂO HIPOTENUSA E REMOVENDO AS OUTRAS

        catetosad.classList.remove('btn-calc-active')
        catetosop.classList.remove('btn-calc-active')
        hipotenusa.classList.add('btn-calc-active')      
        
        //DEFININDO VALOR NAN PARA AS VARIAVEIS, E 0 PARA HIPOTENUSA

        valorcatetoad.value = ""    
        valorcatetoop.value = ""
        valorhipo.value = "0"         

        //CLICAR CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){  
            
            //PEGANDO DADOS DOS INPUTS

            let valorcatetoop = document.querySelector('#catetooposto').value
            let valorcatetoad = document.querySelector('#catetoadjacente').value 
            
            //VALIDAÇÂO DE DADOS
                 

            //SE CATETO OPOSTO FOR NADA
            if(valorcatetoop == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }

            //SE CATETO ADJACENTE FOR NADA

            if(valorcatetoad == ""){
                alert('Valor do Cateto Adjascente não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }

            //APÒS VALIDAÇÂO

            if(valorcatetoop != "" && valorcatetoad !=""){
                res.classList.remove('disable')

                //VARIAVEIS DE CALCULO
                // H^2 = Ca^2 + Co^2

                let catetoquadop = valorcatetoop * valorcatetoop
                let catetoquadad = valorcatetoad * valorcatetoad
                let catetossoma = catetoquadop + catetoquadad
                let hvalue = Math.sqrt(catetossoma)
                let hipovalue = hvalue.toFixed(2)

                //RESULTADO

                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor da Hipotenusa é ${hipovalue} `
            }
        })        
    }) 

    //CLICAR CATETO ADJASCENTE
    //ESCOLHER A OPÇÂO DE ENCONTRAR CATETO ADJACENTE
    // H^2 = Ca^2 + Co^2
    // Ca^2 = X^2

    catetosad.addEventListener('click', function(){

        //SELECIONANDO A OPÇÂO HIPOTENUSA E REMOVENDO AS OUTRAS

        catetosad.classList.add('btn-calc-active')
        catetosop.classList.remove('btn-calc-active')
        hipotenusa.classList.remove('btn-calc-active')

        //LIMPANDO DADOS E DEFININDO O VALOR 0, PARA O VALOR A SER ENCOTRADO

        valorcatetoad.value = "0"    
        valorcatetoop.value = ""
        valorhipo.value = ""   

        //CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){

            //PEGANDO DADOS DOS INPUTS

            let valuedocatetooposto = document.querySelector('#catetooposto').value
            let valuedahipotenusa = document.querySelector('#hipotenusa').value

            //VALIDAÇÂO DE DADOS

            //SE CATETO OPOSTO FOR NADA
            if(valuedocatetooposto == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }

            //SE HIPOTENUSA FOR NADA
            if(valuedahipotenusa == ""){
                alert('Valor da hipotenusa não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }

            //APÒS VALIDAÇÂO
            if(valuedocatetooposto != "" && valuedahipotenusa !=""){
                res.classList.remove('disable')

                //CRIANDO VARIAVEIS DE CALCULO

                let vhipoquad = valuedahipotenusa * valuedahipotenusa
                let vcopquad = valuedocatetooposto * valuedocatetooposto
                let subvalores = (vhipoquad - vcopquad)
                let vfinal = Math.sqrt(subvalores)
                let final = vfinal.toFixed(2)
                
                //RESULTADO

                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor do Cateto Adjascente é ${final} `
            }
        })              
    })

    //CLICAR CATETO OPOSTO
    //ESCOLHER A OPÇÂO DE ENCONTRAR CATETO OPOSTO
    // H^2 = Ca^2 + Co^2
    // Co^2 = X^2

    catetosop.addEventListener('click', function(){

        //SELECIONANDO A OPÇÂO CATOTO OPOSTO E REMOVENDO AS OUTRAS

        catetosad.classList.remove('btn-calc-active')
        catetosop.classList.add('btn-calc-active')
        hipotenusa.classList.remove('btn-calc-active')   

        //LIMPANDO DADOS E DEFININDO O VALOR 0, PARA O VALOR A SER ENCOTRADO

        valorcatetoad.value = ""    
        valorcatetoop.value = "0"
        valorhipo.value = ""   

        //CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){

            //DEFININDO DADOS PARA INPUTS

            let valuedocatetoadjacente = document.querySelector('#catetoadjacente').value
            let valuedahipotenusa = document.querySelector('#hipotenusa').value

            //SE CATOTOADJACENTE FOR NADA
            if(valuedocatetoadjacente == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }

            //SE HIPOTENUSA FOR NADA
            if(valuedahipotenusa == ""){
                alert('Valor da hipotenusa não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }

            //APÒS VALIDAÇÂO

            if(valuedocatetoadjacente != "" && valuedahipotenusa !=""){
                res.classList.remove('disable')

                //CRIANDO VARIAVEIS DE CALCULO

                let vhipoquad = valuedahipotenusa * valuedahipotenusa
                let vcopquad = valuedocatetoadjacente * valuedocatetoadjacente
                let subvalores = (vhipoquad - vcopquad)
                let vfinal = Math.sqrt(subvalores)
                let final = vfinal.toFixed(2)

                //RESULTADO
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor do Cateto Oposto é ${final} `
            }
        })              
    })  
}
    




// FUNC ATIVAR IMC, E DESATIVAR TODOS OS OUTROS (Opção IMC Selecionado)
// LET IMC

imc.addEventListener('click', ativarimc)
function ativarimc(){

    imc.classList.remove('desativar')
    imc.classList.add('btn-active')

    pitagoras.classList.remove('btn-active')
    pitagoras.classList.remove('desativar')    

    none.classList.add('desativar')
    none.classList.remove('btn-active')

    eqseg.classList.remove('btn-active')
    eqseg.classList.add('desativar')    

    calceqseg.classList.add('disable')
    calcpitagoras.classList.add('disable')
    calcimc.classList.remove('disable')

    res.classList.add('disable')

}

// CALCULAR IMC


imc.addEventListener('click', calcularimc)
function calcularimc(){   

    //CRIANDO VARIAVEIS

    let nome = document.querySelector('#nomeimc')
    let altura = document.querySelector('#alturaimc')
    let peso = document.querySelector('#pesoimc')

    //LIMPANDO SEUS DADOS   

    nome.value =""
    altura.value =""
    peso.value =""

    //CALCULO 

    document.querySelector('.btn-submit-imc').addEventListener('click', function(){

        //SELECIONANDO AOS INPUTS

        nome = document.querySelector('#nomeimc').value
        altura = document.querySelector('#alturaimc').value
        peso = document.querySelector('#pesoimc').value
        
        //VALIDAÇÂO DE DADOS

        //SE NOME FOR NADA
        if (nome == ""){
            alert('Insira seu nome')         
        }   

        //SE ALTURA FOR NADA
        if (altura == ""){    
            alert('Insira seu altura')
        }        
        
        //SE NOME FOR NADA
        if (peso == ""){ 
            alert('Insira seu peso')
        }     

        //APÒS VALIDAÇÂO

        if (nome != "" && altura != "" && peso != ""){

            //LIBERANDO RES E SEU TITULO
            resh1.classList.remove('disable')
            res.classList.remove('disable')

            //CRIANDO VARIAVEIS DE CALCULO E CALCULANDO

            let valorimc = (peso / (altura * altura)).toFixed(1)
            let classificar = ""

            //CLASSIFICAÇÔES

            //ABAIXO DO PESO
            if (valorimc < 18.5){
                classificar = "Abaixo do peso"                
            }

            //PESO IDEAL
            else if(valorimc < 25){
                classificar = "Com peso Ideal. Parabens"
            }

            //LEVEMENTE ACIMA DO PESO
            else if(valorimc <30){
                classificar = "levemente acima do peso."
            }
            
            //OBESIDADE GRAU 1
            else if(valorimc <35){
                classificar = "Obesidade Grau 1"
            }
            
            //OBESIDADE GRAU 2
            else if(valorimc <40){
                classificar = "Obesidade Grau 2"
            }
            
            //OBESIDADE GRAU 3
            else if(valorimc > 40){
                classificar = "Obesidade Grau 3 (Morbita). Cuidado!!"
            }
            
            //ERRO AO ACHAR ALGUM VALOR, OU DEFINI-LO
            else{
                classificar = "Com uma situação impossivel de se calcular"
            }
            resultado.innerHTML = `Olá ${nome}, <br> seu IMC é de ${valorimc} <br> e você está ${classificar}`
        }
                    
    })
}  