export interface Task {
    id?: number, // el ? indica que el atributo puede ser null
    text: string,
    date: string,
    reminder: boolean;
}