import Base from "../assets/PizzaBase.png"
import Cheese from "../assets/BaseCheese.png"
import Olive from "../assets/Olive.png"
import Pepperoni from "../assets/Pepperoni.png"
import Mushroom from "../assets/Mushroom.png"
import Basil from "../assets/Basil.png"
import Tomato from "../assets/Tomato.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Customize({ ingredients, setIngredients }) {

    const changeIngredients = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients))
        // Toggle the ingredient
        newIngredients[name] = event
        setIngredients(newIngredients)
        localStorage.setItem("ingredients", JSON.stringify(newIngredients))
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <div className="md:w-1/2 my-auto px-4 py-8 md:p-0">
                <div className="max-h-[500px] max-w-[500px] relative mx-auto">
                    <img src={Base} alt="Pizza Base" className="h-auto max-w-full" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["cheese"] ? 100 : -100,
                            opacity: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-10"
                    >
                        <img src={Cheese} alt="Cheese" className="h-auto max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["pepperoni"] ? 100 : -100,
                            opacity: ingredients["pepperoni"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-20"
                    >
                        <img src={Pepperoni} alt="Pepperoni" className="h-auto max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["tomato"] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-30"
                    >
                        <img src={Tomato} alt="Tomato" className="h-auto max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["mushroom"] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-40"
                    >
                        <img src={Mushroom} alt="Mushroom" className="h-auto max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["basil"] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-50"
                    >
                        <img src={Basil} alt="Basil" className="h-auto max-w-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["olive"] ? 100 : -100,
                            opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className="absolute -mt-[600px] z-50"
                    >
                        <img src={Olive} alt="Olive" className="h-auto max-w-full" />
                    </motion.div>
                </div>
            </div>

            <div className="md:w-1/2 my-auto mx-auto py-10 md:py-0 md:px-36">
                <label className="container-checkbox">
                    Cheese
                    <input
                        type="checkbox"
                        checked={ingredients["cheese"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "cheese")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Pepperoni
                    <input
                        type="checkbox"
                        checked={ingredients["pepperoni"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "pepperoni")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Tomato
                    <input
                        type="checkbox"
                        checked={ingredients["tomato"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "tomato")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Mushroom
                    <input
                        type="checkbox"
                        checked={ingredients["mushroom"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "mushroom")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Basil
                    <input
                        type="checkbox"
                        checked={ingredients["basil"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "basil")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Olive
                    <input
                        type="checkbox"
                        checked={ingredients["olive"]}
                        onChange={(event) => changeIngredients(event.currentTarget.checked, "olive")}
                    />
                    <span className="checkmark"></span>
                </label>
                <Link to="/checkout">
                    <button className="mt-5 py-3 px-6 shadow-lg bg-orange-400 border-none rounded-3xl font-semibold cursor-pointer text-lg hover:bg-orange-500">
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}
