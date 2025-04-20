export default function handleNavigate(button){
    const links = ['Catalogue', 'Obtenir un devis','Contact & localisation']
    if(typeof window !== 'undefined'){
        const small = window.innerWidth < 600
        switch(button){
        case links[1]:
            window.scrollTo({top:small? 1200 : 900, behavior:'smooth'})
            break;
        case links[0]:
            window.scrollTo({top:small? 1950 : 1200, behavior:'smooth'})
            break;
        case 'Accueil':
            window.scrollTo({top:0, behavior:'smooth'})
            break;
        default:
            window.scrollTo({top:3000, behavior:'smooth'})
        }
    }
}