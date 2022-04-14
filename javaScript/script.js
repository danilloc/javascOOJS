function getAdmins(map) {
   
    let admins = [];
    for ([Key, value] of map) {
        if (value === 'admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('luiz', 'admin');
usuarios.set('mariana', 'user')
usuarios.set('fernanda', 'admin')
usuarios.set('danillo', 'admin')

console.log(getAdmins(usuarios));