export default function handleDate(date){
    const arr = date.slice(0,10).split('-')
    return `${arr[2]}.${arr[1]}.${arr[0]}`
}