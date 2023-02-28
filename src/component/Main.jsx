import React from "react"

const Main = () => {
	return (
		<div className="">
			{/* Discover by places    */}
			<div className="bg-gray-50 py-32">
				<div className="w-9/12  mx-auto">
					<div className="text-center mb-12 ">
						<p className="text-4xl font-bold text-gray-600  mb-3">
							Popular Spaces
						</p>
						<p className="capitalize  text-gray-600">
							Discover most searched places
						</p>
					</div>
					<div>
						<div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
							{/* Card One */}
							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="Dentist"
										className="w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">309 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Dr.Vick Opiyo
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Kilimani,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											clinic
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											hospital
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											$$
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/8961111/pexels-photo-8961111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="Dentist"
										className=" object-cover w-full"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">197 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Eng. Dickson Onyango
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Hurlingham,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											construction
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											bridges
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											$$
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/4602267/pexels-photo-4602267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="Fruits Vendor"
										className="w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">789 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Hakesh Rajab
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Muthurwa,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											oranges
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											mangoes
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											apples
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="gym and fitness"
										className="w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2 relative">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">352 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Frankie Gym
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Karen,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											fitness
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											healthy living
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											aerobics
										</span>
									</div>
									<div className="absolute bottom-6 right-3  ">
										<svg
											className="w-6 h-6  fill-red-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 448 512">
											<path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
										</svg>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/1540977/pexels-photo-1540977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="photographer"
										className="w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">309 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Karen Photographers
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										CBD,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											videography
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											photography
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											potraits
										</span>
									</div>
								</div>
							</div>
							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className=" h-48  overflow-hidden ">
									<img
										src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="AirBnB"
										className="object-cover w-full"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">1309 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Cozy apartments
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Kileleshwa,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											airbnb
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											urban lifestyle
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											luxury
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="lounge"
										className=" w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">176 Reviews</p>
									</div>

									<p className="text-lg font-bold  text-gray-600">
										Kilimani Treasure Gardens
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Kilimani,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											hang outs
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											outdoors
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											meet ups
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/7234314/pexels-photo-7234314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="cinema"
										className="w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">2267 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										Westalands Cinemax
									</p>
									<p className="text-gray-600  -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Westlands,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											movies
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											series
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											premieres
										</span>
									</div>
								</div>
							</div>

							<div
								className="bg-white shadow rounded-lg max-w-xl overflow-hidden
                           ">
								<div className="h-48 overflow-hidden">
									<img
										src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										alt="cab"
										className="  w-full object-cover"
									/>
								</div>
								<div className="py-6 px-4 space-y-2">
									<div className="flex items-center text-sm  text-amber-500">
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6   fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6 fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
										</svg>
										<svg
											className="w-6 h-6  fill-current"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512">
											<path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
										</svg>
										<p className="text-gray-500">2390 Reviews</p>
									</div>

									<p className="  text-lg font-bold  text-gray-600">
										City Cabs
									</p>
									<p className="text-gray-600   -ml-1">
										<svg
											className=" w-6 h-6 inline-flex fill-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 384 512">
											<path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
										</svg>
										Thika Road,Nairobi
									</p>
									<div className="space-x-2">
										<span className="text-xs px-2  py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											self drives
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											transport
										</span>
										<span className="text-xs px-2 py-0.5 bg-amber-100  border border-amber-200    text-amber-700 rounded-full">
											trips
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-12 text-center">
							<button className="bg-white py-2.5   px-6  rounded-md   border border-gray-100 shadow hover:shadow-lg  text-gray-600 ">
								🚀 Discover More
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Discover by categories*/}

			<div className="bg-sky-50  py-32">
				<div className="w-9/12 mx-auto">
					<div className="text-center mb-12">
						<p className="font-bold text-4xl text-gray-600 mb-3">
							Discover By Categories
						</p>
						<p className="text-gray-600">Discover By Categories </p>
					</div>
					<div>
						<div className="grid place-items-center grid-cols-1  md:grid-cols-2  lg:grid-cols-3   xl:grid-cols-4 gap-10">
							{/* width of a grid item if bigger than the grid width allocated by grid then it extends on the gap  property provided   thus difference btw gap x and y despite same value */}

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="    https://images.pexels.com/photos/2700533/pexels-photo-2700533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="coffee"
									className="w-32 h-32   object-cover rounded-full  mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Coffee & Tea
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="entertainment"
									className="w-32 h-32 object-cover rounded-full  mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Entertainment
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="   https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="travel"
									className="w-32 h-32 object-cover rounded-full  mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Hotel & Travel
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/7578808/pexels-photo-7578808.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="health"
									className="w-32 h-32  object-cover rounded-full mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Health & Medical
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="health"
									className="w-32 h-32  object-cover rounded-full mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Education
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg"
									className="w-32 h-32  object-cover rounded-full mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Automotive
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60 rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/6347553/pexels-photo-6347553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									className="w-32 h-32  object-cover rounded-full mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Home Service
									</p>
								</div>
							</a>

							<a href="#" className="bg-white p-4  w-60  rounded-lg space-y-5 ">
								<img
									src="https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									className="w-32 h-32  object-cover rounded-full mx-auto "
								/>
								<div className="text-center space-y-2">
									<p className="font-semibold  mb-3 text-gray-700 text-lg ">
										Shopping
									</p>
								</div>
							</a>
						</div>
					</div>

					<div className="mt-12 text-center">
						<button className="bg-white py-2.5   px-6  rounded-md   border border-gray-100 shadow hover:shadow-lg  text-gray-600 ">
							🎈 Discover More
						</button>
					</div>
				</div>
			</div>

			{/* Collections*/}
			<div className=" bg-slate-50 py-32 ">
				<div className="w-9/12 mx-auto ">
					<div className="text-center mb-12">
						<p className="font-bold text-4xl text-gray-600 mb-3">
							More Collections
						</p>
						<p className="text-gray-600">
							Discover List of Top Places By Collections
						</p>
					</div>
					<div>
						<div className="grid grid-cols-1    place-items-center sm:grid-cols-2   md:grid-cols-3      lg:grid-cols-4  gap-10 ">
							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
										<p className="text-lg  font-semibold">Newly Opened</p>
										<p className="text-sm">21 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3 text-white">
										<p className="text-lg  font-semibold">
											Traditional Restaurants
										</p>
										<p className="text-sm">13 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src=" https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
										<p className="text-lg  font-semibold">Trending Places</p>
										<p className="text-sm">11 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
										<p className="text-lg  font-semibold">Tasty Dishes</p>
										<p className="text-sm">21 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/5998120/pexels-photo-5998120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
										<p className="text-lg  font-semibold">Fine Living</p>
										<p className="text-sm">38 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3  text-white">
										<p className="text-lg  font-semibold">Fitness</p>
										<p className="text-sm">21 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/12471747/pexels-photo-12471747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded">
									<div className="absolute bottom-2 left-3  text-white">
										<p className="text-lg  font-semibold">Trips Around Town</p>
										<p className="text-sm">21 Places</p>
									</div>
								</div>
							</div>

							<div className="relative w-52 h-64 overflow-hidden shadow-md hover:shadow-lg">
								<img
									src="  https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="dental"
									className=" w-full  h-full object-cover shadow  rounded"
								/>
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
										<p className="text-lg  font-semibold">Games</p>
										<p className="text-sm">7 Places</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<button className="bg-white py-2.5   px-6  rounded-md   border border-gray-100 shadow hover:shadow-lg  text-gray-600 ">
							🎁 More Collections
						</button>
					</div>
				</div>
			</div>

			{/* Teams section*/}
			<div className=" bg-gray-50 py-32 relative">
				<div className="w-8/12 mx-auto">
					<div className="flex  flex-col  lg:flex-row  items-center gap-3">
						<div className="w-full  mx-auto md:w-1/2  order-2 lg:order-1">
							<div className="flex flex-col  md:flex-row  gap-12  ">
								<div className="flex   gap-3  lg:gap-12 w-full">
									<div className="w-1/2 relative overflow-hidden">
										<img      
											src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="ceo"
											className="w-52 h-60  lg:h-52  lg:48 object-cover rounded-md shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className="absolute  bottom-2  left-3 text-white">
											<p className="font-semibold">Malia Opiyo</p>
											<p>CEO</p>
										</div>
									</div>

									<div className="w-1/2  relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-52 h-60  lg:h-52  lg:48 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className=" absolute bottom-2 left-3  text-white">
											<p className="font-semibold">Veek Raed</p>
											<p>Designer</p>
										</div>
									</div>
								</div>

								<div className="flex   gap-12  mt-12 ">
									<div className="  w-1/2 relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-52 h-60  lg:h-52  lg:48 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className="text-white absolute  bottom-2 left-3">
											<p className="font-semibold">Hekima Okoth</p>
											<p>Designer</p>
										</div>
									</div>

									<div className=" w-1/2 relative overflow-hidden ">
										<img
											src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-52 h-60  lg:h-52  lg:48 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className="absolute bottom-2 left-3  text-white ">
											<p className="font-semibold">Rajab Ochieng'</p>
											<p>IT Support</p>
										</div>
									</div>

									<div></div>
								</div>
							</div>
						</div>

						<div className=" w-full  lg:w-1/2 order-1  mb-10">
							<p className="text-sm  text-indigo-600  mb-1 font-bold">
								Our Support Heros
							</p>
							<p className="text-4xl  font-bold  ">Meet the team</p>
							<p className="text-lg mt-3  text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
								consectetur facere illo. Eligendi, inventore! Distinctio, libero
								maiores nesciunt blanditiis, amet repudiandae delectus atque
								dignissimos optio possimus fugiat laudantium ratione non.
							</p>
							<div className="mt-8 flex  items-center">
								<button className="mr-4 py-1 px-2 border-2  text-sm  lg:text-lg lg:py-2  lg:px-3 border-gray-500  font-semibold   text-gray-500   shadow-md   hover:bg-gray-500 hover:text-white rounded-full">
									<svg
										className="w-6 h-6  hidden lg:inline-flex mr-1 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512">
										<path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
									</svg>
									Meet Us
								</button>

								<button className="mr-4  py-1 px-3 lg:py-2  lg:px-3 border-2  text-sm lg:text-lg  bg-blue-400 border-blue-400  font-semibold   text-white  shadow-md hover:bg-blue-500 hover:text-white rounded-full hover:border-blue-500">
									<svg
										className="w-6 h-6 fill-current  hidden   lg:inline-flex mr-1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512">
										<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
									</svg>
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*Testimonials  */}
			<div className="bg-white py-32 relative z-10">
				<div className="-z-10 bg-slate-50 w-9/12 absolute bottom-0 top-16 right-0  rounded-tl-3xl"></div>

				<div className="w-9/12 mx-auto ">
					<div className="mb-10 lg:mb-20">
						<p className="text-4xl font-bold text-gray-600  w-full lg:w-5/12  mb-20">
							What our customers are saying
						</p>
					</div>
					<div className="flex  flex-col items-center md:flex-row">
						<div className="w-1/2">
							<div className="w-10/12 h-72 relative mb-6">
								{/* HERE THE PINK is not showing despite negative index but  it goes behnd the  bg of the whole testimonial section  thus add z-10 in  testimonial div though z-10 on flex item works too*/}
								<div className="bg-pink-600  opacity-80 h-48 w-32 absolute -top-16 -left-12 -z-10"></div>

								<div className="bg-pink-600 opacity-80  h-48 w-32 absolute -bottom-16 -right-12 -z-10"></div>

								<div className="bg-indigo-600  w-16 h-16  absolute rounded-full z-10   flex  items-center  justify-center  -top-6 -right-6">
									<svg
										className="w-6 h-6  fill-white"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
									</svg>

									<div></div>
								</div>

								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt="customer1"
									className="w-full h-full object-cover rounded-md shadow-md"
								/>
							</div>

							<div className="flex gap-3">
								<button className="bg-amber-400 text-white  p-2 rounded-full shadow-md hover:shadow-xl">
									<svg
										className="h-6 w-6  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 320 512">
										<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
									</svg>
								</button>

								<button className="bg-amber-400 text-white rounded-full  p-2 shadow-md hover:shadow-xl">
									<svg
										className="w-6 h-6  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 320 512">
										<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
									</svg>
								</button>
							</div>
						</div>
						<div className="w-1/2 text-gray-600">
							<p className="text-xl font-semibold mb-3 capitalize">
								Help Us improve our productivity
							</p>
							<p className="mb-6">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
								adipisci recusandae inventore in quis, veniam quia optio at
								voluptatum dolorem architecto impedit aut laudantium ex debitis,
								odio aperiam, pariatur laboriosam.
							</p>

							<div>
								<p className="font-bold text-lg">John Doe</p>
								<p>Lead Marketing Manager</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* CONTACT  US    */}

			<div className="bg-sky-50  py-36">
				<div className="w-full lg:w-9/12  mx-auto">
					<div className="shadow-lg rounded-xl relative  h-full">
						<img
							src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt="A Group of people in an office"
							className="w-full  h-[46rem] object-cover rounded-xl"
						/>
						{/*overlay*/}
						<div className="bg-black/70  absolute inset-0 h-full rounded-xl  -z-10 "></div>
						<div className="absolute top-24 right-8 left-8">
							<div className="flex flex-col-reverse  gap-10  z-30 ">
								<div className="w-full lg:w-1/2 text-gray-100">
									<p className="text-2xl  md:text-4xl font-bold mb-5">
										Find Us                   
									</p>
									<div className="flex gap-6">
										<div className="border-r border-white">
											<p className="font-bold text-2xl">Nairobi</p>
											<p>
												6<sup>th</sup> Floor Britam Towers, Nairobi
											</p>
										</div>

										<div className="border-r border-white">
											<p className="font-bold text-2xl">Kisumu</p>
											<p>
												3<sup>th</sup> Floor Alphax Building,Kisumu
											</p>
										</div>

										<div className=" ">
											<p className="font-bold text-2xl">Mombasa</p>
											<p>Ambalal House Building, Mombasa</p>
										</div>
									</div>
								</div>
								<div className="w-full  lg:w-1/2">
									<div className="bg-white  max-w-lg rounded-md shadow p-6 ml-auto space-y-6 text-gray-600">
										<div>
											<p className="text-4xl font-bold mb-4">Get In Touch</p>
											<p>Need help or have some feedback for us?</p>
											<p>Fill out the form below to contact our team</p>
										</div>
										<form action="#" className="space-y-4">
											<div className="flex text-gray-600 gap-10">
												<div>
													<label htmlFor="first_name">First Name</label>
													<input
														type="text"
														id="first_name"
														placeholder="John"
														className="w-full px-2 py-3  text-gray-600  rounded-md focus:outline-none border   mt-1"
													/>
												</div>

												<div>
													<label htmlFor="last_name">Last Name</label>
													<input
														type="text"
														id="last_name"
														placeholder="Doe"
														className="w-full px-2 py-3  text-gray-600  rounded-md focus:outline-none border   mt-1"
													/>
												</div>
											</div>

											<div>
												<label htmlFor="email">Email</label>
												<input
													type="email"
													id="email"
													placeholder="johndoe@gmail.com"
													className="w-full px-2 py-3  text-gray-600  rounded-md focus:outline-none border   mt-1"
												/>
											</div>

											<div>
												<label htmlFor="message">Message</label>
												<textarea
													rows={4}
													type="message"
													id="message"
													placeholder="Write us your question or feedback here..."
													className="w-full px-2 py-3  text-gray-600  rounded-md focus:outline-none border  mt-1   r resize-none   overflow-hidden"></textarea>
											</div>
											<div className="text-center ">
												<button className="px-3 py-3 bg-indigo-600  outline-none  rounded-md  text-white  hover:bg-indigo-500  shadow-lg  ">
													Get In Touch
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*Features Section */}
			<div className="bg-slate-50 py-36">
				<div className="w-9/12  mx-auto">
					<div className="text-center text-gray-600  mb-12 ">
						<p className="text-4xl  font-bold  mb-2">Our Valuable Features</p>
						<p className="text-sm">
							Take a Look at our exceptional features available
						</p>
					</div>
					<div className="grid  grid-cols-1   items-center   sm:grid-cols-2  md:grid-cols-3  gap-16 ">
						<div className="p-4 rounded-mb  hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-6 w-6  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Fastness
							</p>
							<p className="text-gray-500">
								Enjoy super fast feed of our platform
							</p>
						</div>

						<div className="p-4 rounded-mb  hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-8 w-8 fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512">
										<path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Unlimited Chats
							</p>
							<p className="text-gray-500">
								Enjoy unlimitless chat and awesome products we offer
							</p>
						</div>

						<div className="p-4 rounded-mb hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-8 w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Analytics
							</p>
							<p className="text-gray-500">
								Monitor your outtreach with our accurate analytics
							</p>
						</div>

						<div className="p-4 rounded-mb hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-8 w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512">
										<path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Multiple Agent
							</p>
							<p className="text-gray-500">
								Access our 24/7 Agents on standby to help you out
							</p>
						</div>

						<div className="p-4 rounded-mb hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-8 w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512">
										<path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Detail Log
							</p>
							<p className="text-gray-500">
								Retrieve any information from your activities
							</p>
						</div>

						<div className="p-4 rounded-mb hover:bg-white  hover:shadow-lg hover:rounded-lg ">
							<button className="text-gray-600 bg-slate-100 p-2 rounded-md shadow-md">
								<div className="text-indigo-500">
									<svg
										className="h-8 w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
									</svg>
								</div>
							</button>
							<p className="text-xl  font-bold mt-3 mb-2 text-gray-600">
								Departments
							</p>
							<p className="text-gray-500">
								Different department handles different issues
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Loading Section  when fetching data from backend*/}

			<div className="bg-sky-100 py-36">
				<div className="w-9/12 mx-auto">
					<div className="text-gray-600 text-center mb-12">
						<p className="text-4xl  font-bold  mb-2">Blog Posts</p>
						<p className="text-sm ">Read some of our posts and blogs</p>
					</div>
					<div className="grid grid-cols-1   md:grid-cols-2  lg:grid-cols-3 gap-10">
						<div className="bg-white rounded-md shadow p-5 flex  flex-col gap-5  items-center justify-center ">
							{/* Animate-pulse is the effect seen on cards when loading information from the backend.Mostly used in linkedin,facebook and insta apps */}

							<div className="w-32 h-32 rounded-full bg-gray-200  mx-auto  animate-pulse"></div>
							<div className="space-y-2">
								<div className="w-32 h-6 rounded-full bg-gray-200  shadow-sm  mx-auto    animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-52 h-5 rounded-full bg-gray-200  shadow-sm  mx-auto   animate-pulse"></div>
									<div className="w-44 h-5 rounded-full bg-gray-200  shadow-sm   mx-auto    animate-pulse"></div>
								</div>
								<div className="w-20 h-6 rounded-full bg-gray-200  mx-auto"></div>
							</div>
						</div>

						<div className="bg-white rounded-md shadow p-5 flex  flex-col gap-5  items-center justify-center">
							<div className="w-32 h-32 rounded-full bg-gray-200  mx-auto    animate-pulse"></div>
							<div className="space-y-2">
								<div className="w-32 h-6 rounded-full bg-gray-200  shadow-sm  mx-auto   animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-52 h-5 rounded-full bg-gray-200  shadow-sm  mx-auto    animate-pulse"></div>
									<div className="w-44 h-5 rounded-full bg-gray-200  shadow-sm   mx-auto    animate-pulse"></div>
								</div>
								<div className="w-20 h-6 rounded-full bg-gray-200  mx-auto animate-pulse"></div>
							</div>
						</div>

						<div className="bg-white rounded-md shadow p-5 flex  flex-col gap-5  items-center justify-center">
							<div className="w-32 h-32 rounded-full bg-gray-200  mx-auto   animate-pulse"></div>
							<div className="space-y-2">
								<div className="w-32 h-6 rounded-full bg-gray-200  shadow-sm mx-auto  animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-52 h-5 rounded-full bg-gray-200  shadow-sm  mx-auto   animate-pulse"></div>
									<div className="w-44 h-5 rounded-full bg-gray-200  shadow-sm   mx-auto    animate-pulse"></div>
								</div>
								<div className="w-20 h-6 rounded-full bg-gray-200  mx-auto  animate-pulse"></div>
							</div>
						</div>
						<div className="bg-white rounded-md shadow p-5 space-y-3 ">
							<div className="h-44 w-full bg-gray-200    animate-pulse"></div>
							<div className="space-y-3">
								<div className="w-9/12 h-5 rounded-full shadow bg-gray-200    animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-full h-5 bg-gray-200 rounded-full shadow   animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow  animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow    animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow   animate-pulse"></div>
									<div className="w-7/12 h-5 bg-gray-200 rounded-full shadow   animate-pulse"></div>
								</div>
								<div className="flex gap-2">
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow   animate-pulse"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow    animate-pulse"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow    animate-pulse"></div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-md shadow p-5 space-y-3 ">
							<div className="h-44 w-full bg-gray-200     animate-pulse"></div>
							<div className="space-y-3">
								<div className="w-9/12 h-5 rounded-full shadow bg-gray-200    animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-full h-5 bg-gray-200 rounded-full shadow   animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow    animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow    animate-pulse"></div>
									<div className="w-full h-5 bg-gray-200 rounded-full shadow    animate-pulse"></div>
									<div className="w-7/12 h-5 bg-gray-200 rounded-full shadow    animate-pulse"></div>
								</div>
								<div className="flex gap-2">
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow   animate-pulse"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow    animate-pulse"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200 shadow   animate-pulse"></div>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-md shadow p-5 space-y-3 ">
							<div className="h-44 w-full bg-gray-200 animate-pulse"></div>
							<div className="space-y-3">
								<div className="w-9/12 h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
								<div className="space-y-1">
									<div className="w-full h-5 bg-gray-200  animate-pulse rounded-full shadow"></div>
									<div className="w-full h-5 bg-gray-200   animate-pulse rounded-full shadow"></div>
									<div className="w-full h-5 bg-gray-200   animate-pulse rounded-full shadow"></div>
									<div className="w-full h-5 bg-gray-200   animate-pulse  rounded-full shadow"></div>
									<div className="w-7/12 h-5 bg-gray-200  animate-pulse rounded-full shadow"></div>
								</div>
								<div className="flex gap-2">
									<div className="w-44 h-5  rounded-full  bg-gray-200   animate-pulse shadow"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200   animate-pulse shadow"></div>
									<div className="w-44 h-5  rounded-full  bg-gray-200   animate-pulse shadow"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer  Section*/}

			<footer className="bg-white py-14  border-t">
				<div className="w-9/12 mx-auto">
					<div className="flex  flex-col  md:flex-row  md:justify-between py-12">
						<div className="">
							<p className="uppercase font-bold  mb-2 text-gray-600">
								Dala Ventures
							</p>
							<ul className="text-gray-500">
								<li>Who we are</li>
								<li>Contact Us</li>
								<li>Support</li>
							</ul>
						</div>

						<div className="">
							<p className="uppercase font-bold  mb-2 text-gray-600">
								Partners
							</p>
							<ul className="text-gray-500">
								<li>Seka Ventures</li>
								<li>Suba Logistics</li>
							</ul>
						</div>

						<div className="">
							<p className="uppercase font-bold  mb-2 text-gray-600">
								Business
							</p>
							<ul className="text-gray-500">
								<li>Who we are</li>
								<li>Contact Us</li>
								<li>Support</li>
								<li>T & C</li>
							</ul>
						</div>

						<div className="">
							<p className="mb-2   uppercase  font-bold text-gray-600">
								Let's Connect
							</p>
							<ul className="text-gray-500   flex  gap-10 justify-center ">
								<li className="text-sky-600  cursor-pointer ">
									<svg
										className="h-8 w-8   fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
									</svg>
								</li>
								<li className="text-blue-600  cursor-pointer">
									<svg
										className="h-8 w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512">
										<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
									</svg>
								</li>
								<li className="text-blue-800 cursor-pointer">
									<svg
										className="h-8  w-8  fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
									</svg>
								</li>
							</ul>
						</div>
					</div>
					<div className="pt-12">
						<p className="text-sm ">
							2023 Dala Ventures.All rights are reserved.
						</p>
					</div>
				</div>
			</footer>

			<div className="fixed bottom-0 z-50  bg-green-500  opacity-70  text-white  text-xl px-2 shadow-md ">
				<span className="sm:hidden">default</span>
				<span className="hidden  sm:inline  md:hidden">sm</span>
				<span className="hidden  md:inline   lg:hidden">md</span>
				<span className="hidden  lg:inline xl:hidden">lg</span>
				<span className="hidden  xl:inline  2xl:hidden">xl</span>
			</div>
		</div>
	)
}

export default Main
