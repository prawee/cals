export default function hello(name: string): string {
    const _name = name ?  name : "world";
    return `hello ${_name}`;
}