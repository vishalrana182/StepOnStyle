import Shoe from '../Components/shoe-card'

export default function Store(){
    return (
        <div className="flex justify-center gap-7 mt-10">
            <Shoe
                img={'https://www.campusshoes.com/cdn/shop/files/VITALITY_22G-1227_OFF.WHT_D.GRN_2_2_11zon.jpg?v=1756817806'}
                name="VITALITY Off White Men's Sneakers"
                description="Men's Sneakers"
                price="Rs 1,499.00"
            />
        </div>
    )
}