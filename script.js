//buttons variables
const btnHome = document.getElementById('btnone')
const btnProjects = document.getElementById('btntwo')
const btnContact = document.getElementById('btnthree')
//content-section variables
const content = document.getElementById('content');
const contentTwo = document.getElementById('contentTwo');
const contentThree = document.getElementById('contentThree')
//contact variables
const submit = document.getElementById('input-submit')
const emailInput = document.getElementById('input-email')

function showContent () {
  btnHome.addEventListener('click',() => {

    content.classList.add('content-one-showing');
    contentTwo.classList.add('content-two-hidden');
    contentThree.classList.add('content-three-hidden');
      });

  btnProjects.addEventListener('click', () => {
    contentTwo.classList.add('content-two-showing');
    content.classList.add('content-one-hidden');
    contentThree.classList.add('content-three-hidden');

    });

  btnContact.addEventListener('click', () => {
    contentThree.classList.add('content-three-showing');
    content.classList.add('content-one-hidden');
    contentThree.classList.add('content-two-hidden');
    })
}
showContent();

submit.addEventListener('click', (msg) => {
  window.alert('your message has been successfully delivered')
  if(emailInput.value == ''){
    msg.preventDefaul()
  }
})

