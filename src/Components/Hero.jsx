import vineyardHero from '../assets/vineyard-hero.jpg'

export default function Hero() {

    return (
        <>
        <div className="relative left-1/2 -translate-x-1/2 w-4/5 h-50">
                <img className="object-center" src={vineyardHero} alt="Vineyard" />
        </div>
        </>
    )
    }    