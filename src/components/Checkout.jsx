import { useState } from "react"
import { Link } from "react-router-dom"
import PizzaMan from "../assets/PizzaMan.png"

export default function Checkout({ ingredients }) {

    const [success, setSuccess] = useState(false)

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="md:w-1/2 my-auto">
                <div className="flex flex-col items-center mt-20 gap-5">
                    <h1 className="text-4xl font-semibold">Your Ingredients:</h1>
                    <div>
                        {Object.keys(ingredients).map((ingredient) => {
                            return (
                                ingredients[ingredient] &&
                                <p key={ingredient} className="text-2xl font-semibold">
                                    - {ingredient[0].toUpperCase()}{ingredient.substring(1)}
                                </p>
                            )
                        })}
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setSuccess(true)}
                            className="mt-5 py-3 px-6 shadow-lg bg-orange-400 border-none rounded-3xl font-bold cursor-pointer text-lg hover:bg-orange-500"
                        >
                            Confirm
                        </button>
                        <Link to="/">
                            <button className="mt-5 py-3 px-6 shadow-lg bg-orange-400 border-none rounded-3xl font-bold cursor-pointer text-lg hover:bg-orange-500">
                                Go Back
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 my-auto">
                {success && (
                    <div className="flex flex-col items-center py-10">
                        <img src={PizzaMan} alt="PizzaMan" className="mx-auto w-80" />
                        <div className="text-xl md:text-4xl font-bold">
                            We have received your order, Thank you.
                        </div>
                        <div className="text-lg md:text-2xl font-semibold">
                            Order #{Math.round(Math.random() * 100000)}
                        </div>
                        <div className="text-lg md:text-2xl font-semibold">
                            Will be ready in 20-30 mins.
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
