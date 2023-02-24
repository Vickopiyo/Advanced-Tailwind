import React from "react"

const Hero = () => {
	return (
		<div className="relative h-screen">
			<div className="w-full h-full">
				<img
					src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Hero Pic"
					className="w-full h-full  object-cover"
				/>
			</div>
			{/* Absolute position prevents normal flow of text and makes it moveable with parent div  by default is body tag in the html or just  div with class  relative.Futhermore, inset-0 means  the item absolutely postioned is available in all corners of the parent div  */}
			<div className="absolute inset-0 bg-black/50"></div>

			<div className="absolute  h-full w-full inset-0">
				<div className="min-h-full w-full flex items-center justify-center">
					<div    className="space-y-4">
						<div className="text-white  text-center">
							<p className="text-4xl capitalize  font-bold mb-4 ">
								Discover the Places you love?
							</p>
							<p className="text-lg">
								We are here to help you find the best places in the world
							</p>
						</div>
						{/* Gap provides space between each child of the flex item.It acts like  gap in  grid.There is a diffence between it and mx which affects both sides of the flex item  */}
						<div className="flex  gap-5 ">
							<div>
								<input
									type="text"
									placeholder="Location"
									className=" rounded-md w-80   bg-white   text-gray-600 py-3 px-4   focus:outline-none"
								/>
							</div>

							<div>
								<input
									type="text"
									placeholder="Tell us what you looking for..."
									className=" rounded-md w-80   bg-white  text-gray-600 py-3 px-4   focus:outline-none"
								/>
							</div>

							<div  className="">
								<button className="py-2.5 px-6 rounded  bg-amber-500   hover:bg-amber-600 text-lg text-white">  
								
								<svg className="w-4  h-4 fill-current  inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
									Search     
								</button>
							</div>
						</div>
						<div>
							<ul className="flex gap-5  justify-center  text-sm  text-white ">
								<li className="capatilize    text-white hover:text-amber-500">
									<svg
										className="w-6 h-6  fill-current  align-middle hidden  md:inline-flex"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512">
										<path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
									</svg>
									<a href="#" className=" hover:text-amber-500">
										Restaurant
									</a>
								</li>

								<li className="capatilize  text-white hover:text-amber-500">
									<svg
										className="w-6 h-6 fill-current   align-middle  hidden  md:inline-flex"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512">
										<path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
									</svg>
									<a href="#" className=" hover:text-amber-500">
										Local Cafe
									</a>
								</li>

								<li className="capatilize  text-white hover:text-amber-500">
									<svg
										className="w-6 h-6 fill-current align-middle  hidden md:inline-flex"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512">
										<path d="M112 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V224v64V416c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32h48V96zm416 0v32h48c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H528v32c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 96c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z" />
									</svg>
									<a href="#" className="hover:text-amber-500">
										Gym
									</a>
								</li>
								<li className="capatilize   text-white  hover:text-amber-500">
									<svg    className="w-6 h-6 fill-current  align-middle   md:inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
									<a href="#" className=" hover:text-amber-500">
										School  
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
