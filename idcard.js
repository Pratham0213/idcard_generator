const header = document.createElement('header');

const title = document.createElement('h2');
title.innerText = 'ID Card Generator';
title.className = 'title';

header.appendChild(title);
document.body.appendChild(header);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';
const formContent = document.createElement('div');
const cardContent = document.createElement('div');

mainContent.appendChild(formContent);
mainContent.appendChild(cardContent);
document.body.appendChild(mainContent);

const formTitle = document.createElement('p');
formTitle.innerText = 'Enter Student Details';
formTitle.className = 'form-title';
formContent.appendChild(formTitle);

const form = document.createElement('form');
form.name = 'id-card';
formContent.appendChild(form);

const formInputs = [{
    label: 'Enter Name:',
    name: 'name',
  },
  {
    label: 'Enter College Name:',
    name: 'college',
  },
  {
    label: 'Enter Location:',
    name: 'location',
  },
];

for (let formInput of formInputs) {
  const label = document.createElement('label');
  label.innerText = formInput.label;
  const lineBreak = document.createElement('br');
  const input = document.createElement('input');
  input.name = formInput.name;
  form.append(label, lineBreak, input, lineBreak);
}

const label = document.createElement('label');
label.innerText = "Enter student's picture";
const lineBreak = document.createElement('br');
const input = document.createElement('input');
input.name = 'picture';
input.type = 'file';
form.append(label, lineBreak, input, lineBreak);

const generateCard = document.createElement('button');
generateCard.type = 'submit';
generateCard.innerText = 'Generate Card';
generateCard.className = 'generate-card';

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const cardTitle = document.createElement('p');
  cardTitle.innerText = 'Generated ID Card';
  cardTitle.style.textAlign = 'center';
  cardContent.appendChild(cardTitle);

  const card = document.createElement('div');
  card.className = 'card';

  const stdImg = document.createElement('div');
  
  
  const stdDet = document.createElement('div');
	const name = document.createElement('p');
  console.log(...(new FormData(evt.target).entries()));
  name.innerText = `Name: `;
	const college = document.createElement('p');
	const location = document.createElement('p');
  
  

  card.appendChild(stdImg);
  card.appendChild(stdDet);
  cardContent.appendChild(card);
});
form.append(generateCard);
