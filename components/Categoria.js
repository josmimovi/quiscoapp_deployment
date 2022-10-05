import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria} = useQuiosco()

    const {nombre, icono, id} = categoria

    return (
        <div className={`${categoriaActual?.id === id ? "bg-amber-400" : ""} flex items-center gap-4 w-full border p-5 hover:bg-amber-400 shadow-md`}>
            <Image
                src={`/assets/img/icono_${icono}.svg`}
                width={100}
                height={100}
                alt={`Imagen de ${nombre}`}
            />
            <button
                onClick={() => handleClickCategoria(id)}
                type="button"
                className="text-2xl font-bold hover:cursor-pointer">
                    {nombre}
            </button>
        </div>
    )
}

export default Categoria