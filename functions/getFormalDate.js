export default function getFormalDate(date){
    return new Intl.DateTimeFormat('fr-FR', {dateStyle:'full'}).format(date)
}