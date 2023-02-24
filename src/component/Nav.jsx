import React from "react"

const Nav = () => {
	return (
		
			<nav   className="absolute  right-0  left-0  z-20   text-white">
				<div className="w-9/12 mx-auto py-5 flex justify-between items-center">
					<div>
						<a href="#">Tailwind</a>
					</div>
					<div>            
						<button className="py-2 px-4 border border-amber-500  text-amber-500
                        bg-transparent rounded  hover:bg-amber-500  hover:text-white  transition-all duration-500 ">
							Add Listing
						</button>
					</div>    
					<div className="space-x-10">
						<button>Sign In</button>
						<button>Sign Up</button>
					</div>
				</div>
			</nav>
		
	)
}

export default Nav
