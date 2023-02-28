import React from "react"

const Nav = () => {
	return (    


		<div  className="sticky z-50 top-0 ">
			<nav className="absolute  right-0 left-0  z-20 text-white  bg-indigo-700   backdrop-filter   backdrop-blur  opacity-90">
				<div className="w-11/12 lg:w-9/12 mx-auto py-5 flex  justify-between  items-center">
					<div>
						<a href="#" className="text-sm lg:text-lg">Tailwind</a>
					</div>
					<div>
						<button
							className="py-2 px-4 border border-amber-500  text-amber-500  text-sm  lg:text-lg 
                        bg-transparent rounded  hover:bg-amber-500  hover:text-white  transition-all duration-500 ">
							Add Listing
						</button>
					</div>
					<div className="space-x-4    lg:space-x-10">
						<button  className="text-sm  lg:text-lg">Sign In</button>
						<button  className="text-sm  lg:text-lg">Sign Up</button>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Nav
