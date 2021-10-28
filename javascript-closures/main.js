const graduate = credential => fullName => `${fullName}, ${credential}`;

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical School Graduate:', medicalSchool('Joshua Sy Go'));
console.log('Law School Graduate:', lawSchool('Joshua Sy Go'));
