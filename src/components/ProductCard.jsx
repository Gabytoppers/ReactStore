export default function ProductCard({title, image, price, onAdd}){
    return(
        <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
            {/* un alto de 40, margin en el x auto, y que no se salga el contenido*/}
            <img src={image} alt={image} className="h-40 mx-auto object-contain"/>
            <h3 className="font-semibold mt-3 line-clamp-2"> {title} </h3>
            <p className="text-blue-600 font-bold mt-2">${price}</p>

            {/* Este evento dispara la funcion que viene desde products */}
            <button
                onClick={onAdd}
                className="w-full mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >

            </button>
        </div>

    );


}