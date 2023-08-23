import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Prop {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
    title: string
    text: string
}

const ProductCard: React.FC<Prop> = ({ icon: IconComponent, title, text }) => {
    return (
        <div className="m-5 flex flex-col items-center text-center">
            <IconComponent className="mb-4" sx={{ color: 'var(--primaryColor)', fontSize: "40px" }} />
            <h2 className="text-2xl font-bold mb-2 color_terciary">{title}</h2>
            <p className="text-gray-600 whitespace-normal max-w-md">{text}</p>
        </div>
    )
}

export default ProductCard