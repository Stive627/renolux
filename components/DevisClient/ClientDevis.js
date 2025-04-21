import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import useWriter from '@/hook/useWriter';
import useScreen from '@/hook/useScreen';

function ClientDevis({title}) {
  function handleContent(){
    if(title === 'Placoplâtre'){
      return `Devis - ${title}|Nous prévoyons l'utilisation des matériaux suivants :|pièces de Vices Placo à 8 000 FCFA l’unité.|rouleaux de Bandes Armées à 8 000 FCFA l’unité| rouleau de Bandes à Joints à 8 000 FCFA.|seau d’Enduit Colle à 19 000 FCFA| Cornières de Bois à 2 000 FCFA l’unité|seau d’Enduit de Lissage à 3 000 FCFA| plaques de Placoplâtre à 12 500 FCFA l’unité|Pour un devis plus approfondis, svp veuillez contacter l'agence au numero +237 6 91 09 80 37 ou |cliquez ici|Merci de nous faire confiance☺️`
    }
    else if(title === 'Peinture'){
      return `Devis - ${title}|Nous prévoyons l'utilisation des matériaux suivants :|pots d'enduit|pots de peinture d'impression|pots de peinture de finition|sacs de ciment,ainsi qu'1 rouleau de papier vert d'une valeur de 25 000 FCFA.|Pour un devis plus approfondis, svp veuillez contacter l'agence au numero +237 6 91 09 80 37 ou |cliquez ici|Merci de nous faire confiance☺️`
    }
    else return "Pour un devis plus approfondis, svp veuillez contacter l'agence au numero +237 6 91 09 80 37 |Merci de nous faire confiance☺️"
  }

  const content = handleContent()
  const writer = useWriter(content)
  const writerArr = writer.split('|')
  const large = useScreen()
  return (
    <div className=' flex justify-center'>
        <div className={`${large && 'w-1/2'}`}>
          <p className=' text-[21px] font-bold'>{writerArr.slice(0,1)[0]}</p>
          <p>{writerArr.slice(1,2)[0]}</p>
          <>{
          title === 'Placoplâtre' ? 
          <>
            <div>
              {writerArr.slice(2, 9).map((elt, indx) => <div className=' flex flex-row gap-2  items-center' key={indx}><div><CheckIcon/></div><p>{elt}</p></div>)}
            </div>
            <p>{writerArr.slice(9,10)[0]}<span><a className=' text-blue-600 underline' target='_blank' href='https://wa.me/237691098037'>{writerArr.slice(10,11)[0]}</a></span></p>
            <p className=' text-center'>{writerArr.slice(11,12)[0]}</p>
          </>:
           <>
           <div>
             {writerArr.slice(2, 6).map((elt, indx) => <div className=' flex flex-row gap-2  items-center' key={indx}><div><CheckIcon/></div><p>{elt}</p></div>)}
           </div>
           <p>{writerArr.slice(6,7)[0]}<span><a className=' text-blue-600 underline' target='_blank' href='https://wa.me/237691098037'>{writerArr.slice(7,8)[0]}</a></span></p>
           <p className=' text-center'>{writerArr.slice(8,9)[0]}</p>
         </>

          }
          </>
        </div>
    </div>
  )
}

export default ClientDevis
