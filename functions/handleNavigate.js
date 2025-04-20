export default function handleNavigate(button){
    const links = ['Accueil', 'Catalogue', 'Obtenir un devis','Contact & localisation']
    if(typeof window !== 'undefined'){
        const small = window.innerWidth < 600
        switch(button){
        case links[0]:
            window.scrollTo({top:0, behavior:'smooth'})
            break;
        case links[1]:
            window.scrollTo({top:small? 1200 : 801, behavior:'smooth'})
            break;
        case links[2]:
            window.scrollTo({top:small? 1950 : 1201, behavior:'smooth'})
            break;

        default:
            window.scrollTo({top:3000, behavior:'smooth'})
        }
    }
}