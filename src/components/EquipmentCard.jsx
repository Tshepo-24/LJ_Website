import {Link} from 'react-router-dom'

function EquipmentCard({equipment}){

    return(

        <div className="bg-white border border-slate-200">

            <div className="bg-slate-800 h-56 flex items-center justify-center">
                {equipment.imageUrl ? (

                    <img 
                    src={equipment.imageUrl}
                    alt={equipment.name}
                    className="w-full h-full object-cover"
                    />
                ):(

                    <span className="text-slate-500 uppercase text-sm tracking-widest"> {equipment.category}</span>


                )}

            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {equipment.name}


                </h3>

                <div className="flex justify-between items-baseline mb-4 border-t pt-4">
                    <span className="text-xs text-slate-500 tracking-widest">FROM</span>
                    <span className="text-2xl font-bold text-slate-900">R{equipment.hourlyRate}
                    <span className="text-sm font-normal text-slate-500">/hr</span>
                    </span>

                </div>

                <Link
          to={`/equipment/${equipment.id}`}
          className="block text-center bg-slate-900 text-white font-bold py-3 hover:bg-amber-500 hover:text-slate-900 transition-colors"
        >
          REQUEST HIRE →
        </Link>






            </div>



        </div>



    )
}
export default EquipmentCard