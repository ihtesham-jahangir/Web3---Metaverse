export function sum(a: number, b: number): number {
    return a + b;
}
export function sub(a: number, b: number): number {
    return a - b;
}
export function mul(a: number, b: number): number {
    return a * b;
}
export function div(a: number, b: number) {
    if(b==0)
    {
        console.log(`Error: Cannot divide by zero`);
    }
    else 
    {
        return a / b;
    }
}
export const car:{[index:string]:string } = 
{
    type: "",
}