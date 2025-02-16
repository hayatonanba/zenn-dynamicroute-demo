type Prop = {
  params: { animalId: string }
 }
 
 export default function Page({ params }:Prop) {
     return (
         <div>
             <h1>アニマル一覧</h1>
             <h2>{ params.animalId }</h2>
         </div>
     );
 }