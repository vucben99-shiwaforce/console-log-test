console.log('OUTSIDE SCRIPT')

const documentsNodes = document.getElementsByClassName('documents');
const documents = [...documentsNodes]
console.log(documents)
documents.forEach((doc) => {doc.innerHTML = `<span>KÓDDOBOZ MEGFUT A DOKURA</span>`});
