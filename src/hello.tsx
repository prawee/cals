export default function hello(name: string) {
    const _name = name ?  name : "world";
    return <div>{`hello ${_name}`}</div>;
}