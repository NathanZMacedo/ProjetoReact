import React from 'react'
import { generateAtualDate } from '../helpers/generateAtualDate';

export const mockNotes = [
    {
        id: 1,
        title: 'Nota 1 teste',
        descrption: 'Teste 1',
        date: generateAtualDate()
    },
    {
        id: 2,
        title: 'Nota 2 teste',
        descrption: 'Teste 2',
        date: generateAtualDate()
    },
    {
        id: 3,
        title: 'Nota 3 teste',
        descrption: 'Teste 3',
        date: generateAtualDate()
    }
];
