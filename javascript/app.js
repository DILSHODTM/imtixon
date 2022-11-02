const xaMir=document.querySelector('#xamir')
const sm_25=document.querySelector('#sm-25')
const sm_30=document.querySelector('#sm-30')
const sm_35=document.querySelector('#sm-35')
const tovuq=document.querySelector('#tovuq')
const qoy=document.querySelector('#qoy')
const mol=document.querySelector('#mol')
const kurka=document.querySelector('#kurka')
const ketchup=document.querySelector('#ketchup')
const mayanez=document.querySelector('#mayanez')
const message=document.querySelector('.message')
const messagb=document.querySelector('.messagb')
const messagbs=document.querySelector('.messagbs')
const messagbt=document.querySelector('.messagbt')
const messagbq=document.querySelector('.messagbq')
const messagbm=document.querySelector('.messagbm')
const messagbk=document.querySelector('.messagbk')
const messagbks=document.querySelector('.messagbks')
const messagbms=document.querySelector('.messagbms')
const message1=document.querySelector('.message1')
const messagb1=document.querySelector('.messagb1')
const messagbs1=document.querySelector('.messagbs1')
const messagbt1=document.querySelector('.messagbt1')
const messagbq1=document.querySelector('.messagbq1')
const messagbm1=document.querySelector('.messagbm1')
const messagbk1=document.querySelector('.messagbk1')
const messagbks1=document.querySelector('.messagbks1')
const messagbms1=document.querySelector('.messagbms1')









xaMir.addEventListener('click', (e) => {
    e.preventDefault()
    const result = xaMir.value

    if (result) {
        message.textContent = result
        message1.textContent = result

    } else {

    }


})



sm_25.addEventListener('click', (e) => {
    e.preventDefault()
    const btns = sm_25.value

    if (btns) {
        messagb.textContent = btns
        messagb1.textContent = btns
        sm_25.classList.add('bg-danger')
        sm_35.classList.remove('bg-danger')
        sm_30.classList.remove('bg-danger')
    } else {

    }


})
sm_30.addEventListener('click', (e) => {
    e.preventDefault()
    const btn30 = sm_30.value

    if (btn30) {
      messagb.textContent=btn30
      messagb1.textContent=btn30
      sm_30.classList.add('bg-danger')
      sm_35.classList.remove('bg-danger')
      sm_25.classList.remove('bg-danger')
    

    } else {
        

    }


})
sm_35.addEventListener('click', (e) => {
    e.preventDefault()
    const btn35 = sm_35.value

    if (btn35) {
        messagb1.textContent=btn35
      messagb.textContent=btn35
      sm_35.classList.add('bg-danger')
      sm_30.classList.remove('bg-danger')
      sm_25.classList.remove('bg-danger')
    

    } else {
        

    }


})
tovuq.addEventListener('change', (e) => {
    e.preventDefault()
    const tovuqs = tovuq.value

    if (tovuqs) {
      messagbt.textContent=tovuqs
      messagbt1.textContent=tovuqs
    messagbt.classList.toggle('d-block')
    

    } else {

    }


})


qoy.addEventListener('change', (e) => {
    e.preventDefault()
    const qoys = qoy.value

    if (qoys) {
      messagbq.textContent=qoys
      messagbq1.textContent=qoys
    messagbq.classList.toggle('d-block')
    

    } else {
          

    }


})
mol.addEventListener('change', (e) => {
    e.preventDefault()
    const mols = mol.value

    if (mols) {
      messagbm.textContent=mols
      messagbm1.textContent=mols
    messagbm.classList.toggle('d-block')
    

    } else {
          

    }


})


kurka.addEventListener('change', (e) => {
    e.preventDefault()
    const kurkas = kurka.value

    if (kurkas) {
      messagbk.textContent=kurkas
      messagbk1.textContent=kurkas
    messagbk.classList.toggle('d-block')
    

    } else {
          

    }


})
ketchup.addEventListener('change', (e) => {
    e.preventDefault()
    const ketchups = ketchup.value

    if (ketchups) {
      messagbks.textContent=ketchups
      messagbks1.textContent=ketchups
    messagbks.classList.toggle('d-block')
    

    } else {
          

    }


})


mayanez.addEventListener('change', (e) => {
    e.preventDefault()
    const mayanezs = mayanez.value

    if (mayanezs) {
      messagbms.textContent=mayanezs
      messagbms1.textContent=mayanezs
    messagbms.classList.toggle('d-block')
    

    } else {
          

    }


})








