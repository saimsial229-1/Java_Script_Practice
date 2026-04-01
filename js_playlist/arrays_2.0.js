const first_name = ['Saim' , 'Zain' , 'Hamza'];
const last_name = ['Hussain' , 'Ali' , 'Khan']

const fullName= first_name.map((val,index) => val + ' ' + last_name[index]);

console.log(fullName);