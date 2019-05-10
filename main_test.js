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

import {soma} from '../funcoes';
console.log(soma(1,2,3,4,5));

import subtc from '../sub';
console.log(subtc(5,4));

import * as nFuncoes from '../nFuncoes';
nFuncoes.a();
nFuncoes.b();