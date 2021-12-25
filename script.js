let none = document.querySelector('#none')
let eqseg = document.querySelector('#eqseg')
let pitagoras = document.querySelector('#pitagoras')
let imc = document.querySelector('#imc')
let calcimc = document.querySelector('.imc')
let calceqseg = document.querySelector('.eqseg')
let calcpitagoras = document.querySelector('.pitagoras')
let res = document.querySelector('.res')
let resultado = document.querySelector('.resultado')

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
eqseg.addEventListener('click', calculareqseg)
function calculareqseg(){    
    let a = document.querySelector('#a')
    let b = document.querySelector('#b')
    let c = document.querySelector('#c')   
    a.value = ""
    b.value = ""
    c.value = ""
    document.querySelector('.btn-submit-eqseg').addEventListener('click', function(){        
        a = document.querySelector('#a').value
        b = document.querySelector('#b').value
        c = document.querySelector('#c').value
        resh1 = document.querySelector('#resh1')
        resh1.classList.add('disable')     
        if(a == ""){
            alert('Valor de A não encontrado')            
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
        }
        if(b == ""){
            alert('Valor de B não encontrado')
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
        }
        if(c == ""){
            alert('Valor de C não encontrado')
            resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
        }
        if(a != "" && b != "" && c !=""){      
            res.classList.remove('disable')      
            let quadradob = b * b
            let delta = quadradob - (4*a*c)
            let raizdelta = Math.sqrt(delta.toFixed(2))
            let negb = -b
            let x1 = (negb + raizdelta)/(2*a).toFixed(2)
            let x2 = (negb - raizdelta)/(2*a)
            let valorx1 = x1.toFixed(2)                   
            let valorx2 = x2.toFixed(2)                   
            if(delta < 0){
                alert('Como o valor de delta é negativo, torna os valores incalculaveis')
                resultado.innerHTML = "Como o valor de delta é negativo, torna os valores incalculaveis<br><br><br>"
                resultado.innerHTML += `O valor de delta seria ${delta}`
            }else{
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor de A, B e C são respectivamente : ${a}, ${b}, ${c}. <br> O valor de delta é ${delta}. <br> E os valores de X1 e X2, são ${valorx1} e ${valorx2} `
            }
        }
    })
}

// PITAGORAS

//CLICAR EM PITAGORAS
pitagoras.addEventListener('click', calcularpitagora)
function calcularpitagora(){

    let catetosad = document.querySelector('#btn-cateto-ad')
    let catetosop = document.querySelector('#btn-cateto-op')
    let hipotenusa =document.querySelector('#btn-hipo')
    catetosad.classList.remove('btn-calc-active')
    catetosop.classList.remove('btn-calc-active')
    hipotenusa.classList.remove('btn-calc-active')
    let valorcatetoop = document.querySelector('#catetooposto')
    let valorcatetoad = document.querySelector('#catetoadjacente')
    let valorhipo = document.querySelector('#hipotenusa')
    valorcatetoad.value = ""    
    valorcatetoop.value = ""
    valorhipo.value = "" 

    //CLICAR HIPOTENUSA

    hipotenusa.addEventListener('click', function(){
        catetosad.classList.remove('btn-calc-active')
        catetosop.classList.remove('btn-calc-active')
        hipotenusa.classList.add('btn-calc-active')           
        valorcatetoad.value = ""    
        valorcatetoop.value = ""
        valorhipo.value = "0"         

        //CLICAR CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){    
            let valorcatetoop = document.querySelector('#catetooposto').value
            let valorcatetoad = document.querySelector('#catetoadjacente').value               
            resh1 = document.querySelector('#resh1')
            resh1.classList.add('disable')      
            if(valorcatetoop == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }
            if(valorcatetoad == ""){
                alert('Valor do Cateto Adjascente não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }
            if(valorcatetoop != "" && valorcatetoad !=""){
                res.classList.remove('disable')
                let catetoquadop = valorcatetoop * valorcatetoop
                let catetoquadad = valorcatetoad * valorcatetoad
                let catetossoma = catetoquadop + catetoquadad
                let hvalue = Math.sqrt(catetossoma)
                let hipovalue = hvalue.toFixed(2)
                //h*h = co*co + ca*ca
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor da Hipotenusa é ${hipovalue} `
            }
        })        
    }) 

    //CLICAR CATETO ADJASCENTE

    catetosad.addEventListener('click', function(){
        catetosad.classList.add('btn-calc-active')
        catetosop.classList.remove('btn-calc-active')
        hipotenusa.classList.remove('btn-calc-active')
        valorcatetoad.value = "0"    
        valorcatetoop.value = ""
        valorhipo.value = ""   

        //CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){
            let valuedocatetooposto = document.querySelector('#catetooposto').value
            let valuedahipotenusa = document.querySelector('#hipotenusa').value
            if(valuedocatetooposto == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }
            if(valuedahipotenusa == ""){
                alert('Valor da hipotenusa não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }
            if(valuedocatetooposto != "" && valuedahipotenusa !=""){
                res.classList.remove('disable')
                //cad * cad = hipo * hipo - cop * cop
                let vhipoquad = valuedahipotenusa * valuedahipotenusa
                let vcopquad = valuedocatetooposto * valuedocatetooposto
                let subvalores = (vhipoquad - vcopquad)
                let vfinal = Math.sqrt(subvalores)
                let final = vfinal.toFixed(2)
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor do Cateto Adjascente é ${final} `
            }
        })              
    })

    //CLICAR CATETO OPOSTO

    catetosop.addEventListener('click', function(){
        catetosad.classList.remove('btn-calc-active')
        catetosop.classList.add('btn-calc-active')
        hipotenusa.classList.remove('btn-calc-active')   
        valorcatetoad.value = ""    
        valorcatetoop.value = "0"
        valorhipo.value = ""   

        //CALCULAR

        document.querySelector('.btn-submit-pitagoras').addEventListener('click', function(){
            let valuedocatetoadjacente = document.querySelector('#catetoadjacente').value
            let valuedahipotenusa = document.querySelector('#hipotenusa').value
            if(valuedocatetoadjacente == ""){
                alert('Valor do Cateto Oposto não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"   
            }
            if(valuedahipotenusa == ""){
                alert('Valor da hipotenusa não encontrado')
                resultado.innerHTML = "<h2>Dados Invalidos Para efetuar Calculo</h2>"
            }
            if(valuedocatetoadjacente != "" && valuedahipotenusa !=""){
                res.classList.remove('disable')
                //cad * cad = hipo * hipo - cop * cop
                let vhipoquad = valuedahipotenusa * valuedahipotenusa
                let vcopquad = valuedocatetoadjacente * valuedocatetoadjacente
                let subvalores = (vhipoquad - vcopquad)
                let vfinal = Math.sqrt(subvalores)
                let final = vfinal.toFixed(2)
                resh1.classList.remove('disable')  
                resultado.innerHTML = `O valor do Cateto Oposto é ${final} `
            }
        })              
    })  
}
    
// CALCULAR IMC


imc.addEventListener('click', calcularimc)
function calcularimc(){   

    //CALCULO 

    document.querySelector('.btn-submit-imc').addEventListener('click', function(){
        let nome = document.querySelector('#nomeimc').value
        let altura = document.querySelector('#alturaimc').value
        let peso = document.querySelector('#pesoimc').value
        resh1.classList.remove('disable')
        res.classList.remove('disable')
        if (nome == ""){
            alert('Insira seu nome')         
        }   
        if (altura == ""){    
            alert('Insira seu altura')
        }         
        if (peso == ""){ 
            alert('Insira seu peso')
        }               
        if (nome != "" && altura != "" && peso != ""){
            let valorimc = (peso / (altura * altura)).toFixed(1)
            let classificar = ""
            if (valorimc < 18.5){
                classificar = "Abaixo do peso"                
            }else if(valorimc < 25){
                classificar = "Com peso Ideal. Parabens"
            }else if(valorimc <30){
                classificar = "levemente acima do peso."
            }else if(valorimc <35){
                classificar = "Obesidade Grau 1"
            }else if(valorimc <40){
                classificar = "Obesidade Grau 2"
            }else{
                classificar = "Obesidade Grau 3 (Morbita). Cuidado!!"
            }
            resultado.innerHTML = `Olá ${nome}, <br> seu IMC é de ${valorimc} <br> e você está ${classificar}`
        }
                    
    })
}

    