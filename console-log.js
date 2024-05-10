console.log('OUTSIDE SCRIPT')

const documents = document.getElementsByClassName('documents');
console.log(documents)
documents.forEach((doc) => {doc.innerHTML = `<span>KÓDDOBOZ MEGFUT A DOKURA</span>`});
