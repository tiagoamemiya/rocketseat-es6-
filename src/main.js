class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data);
    }

    showData() {
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'Teste';
    }

    static showUser() {
        console.log('estático');
    }
}

const MinhaLista = new TodoList();
document.getElementById('add-todo').onclick = function () {
    MinhaLista.add('New');
    MinhaLista.showData();
    TodoList.showUser();
}


const a = 1; //imutável
var b = 1;
b = 2;

const obj = {user:'amemiya'}
obj.user = 'mimia';

import ClassUser from './functions';
import { age as idade } from './functions';

console.log(idade);
ClassUser.info();