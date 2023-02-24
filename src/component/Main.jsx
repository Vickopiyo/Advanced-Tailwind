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
						<div className="grid grid-cols-3 gap-6 mx-auto">
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
						<div className="grid grid-cols-4 gap-10">
							{/* widhth of a grid item if bigger than the grid width allocated by grid then it extends on the gap  property provided   thus difference btw gap x and y despite same value */}

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
						<div className="grid grid-cols-4 gap-10 ">
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
									<div className="absolute bottom-2 left-3   text-white">
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
								<div className="bg-gradient-to-tr from-black   via-transparent inset-0  absolute rounded  ">
									<div className="absolute bottom-2 left-3   text-white">
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
			<div className=" bg-gray-50 py-32  relative">
				<div className="w-8/12 mx-auto">
					<div className="flex items-center gap-3">
						<div className="w-1/2">
							<div className="flex gap-12">
								<div className="flex flex-col gap-12">
									<div className="relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="ceo"
											className="w-48 h-60 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className="absolute  bottom-2  left-3 text-white">
											<p className="font-semibold">Malia Opiyo</p>
											<p>CEO</p>
										</div>
									</div>

									<div className="relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-48 h-60 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className=" absolute bottom-2 left-3  text-white">
											<p className="font-semibold">Veek Raed</p>
											<p>Designer</p>
										</div>
									</div>

									<div></div>
								</div>

								<div className="flex flex-col  gap-12  mt-12 ">
									<div className="relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-48 h-60 object-cover rounded-md  shadow-md"
										/>

										<div className="absolute bg-gradient-to-t from-black via-transparent inset-0  rounded-md "></div>

										<div className="text-white absolute  bottom-2 left-3">
											<p className="font-semibold">Hekima Okoth</p>
											<p>Designer</p>
										</div>
									</div>

									<div className="relative overflow-hidden">
										<img
											src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
											alt="team"
											className="w-48 h-60 object-cover rounded-md  shadow-md"
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

						<div className="w-1/2">
							<p className="text-sm  text-indigo-600  mb-1 font-bold">
								Our Support Heros
							</p>
							<p className="text-4xl  font-bold  ">Meet the team</p>
							<p className="  text-lg mt-3  text-gray-500">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
								consectetur facere illo. Eligendi, inventore! Distinctio, libero
								maiores nesciunt blanditiis, amet repudiandae delectus atque
								dignissimos optio possimus fugiat laudantium ratione non.
							</p>
							<div className="mt-8">
								<button className="mr-4 py-2 px-3 border-2  border-gray-500  font-semibold   text-gray-500   shadow-md   hover:bg-gray-500 hover:text-white rounded-full">
									<svg
										className="w-6 h-6  inline-flex mr-2   fill-current"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512">
										<path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
									</svg>
									Meet Us
								</button>

								<button className="mr-4 py-2 px-3 border-2  bg-blue-400 border-blue-400  font-semibold   text-white  shadow-md hover:bg-blue-500 hover:text-white rounded-full hover:border-blue-500">
									<svg
										className="w-6 h-6 fill-current  inline-flex mr-1"
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
			     
                <div  className="-z-10 bg-slate-50 w-9/12   absolute bottom-0 top-16 right-0  rounded-tl-3xl"></div>
                                    
				<div className="w-9/12 mx-auto ">
					<div className="mb-20">
						<p className="text-4xl font-bold text-gray-600  w-5/12">
							What our customers are saying
						</p>
					</div>
					<div className="flex">
						<div className="w-1/2">
							<div className="w-10/12 h-72 relative mb-6">
								{/* HERE THE PINK is not showing despite negative index but  it goes behnd the  bg of the whole testimonial section  thus add z-10 in  testimonial div though z-10 on flex item works too*/}
								<div className="bg-pink-600  opacity-80 h-48 w-32 absolute -top-16 -left-12 -z-10"></div>

								<div className="bg-pink-600 opacity-80  h-48 w-32 absolute -bottom-16 -right-12 -z-10"></div>
                                   
                                 <div className="bg-indigo-600  w-16 h-16  absolute rounded-full z-10   flex  items-center  justify-center  -top-6 -right-6">    
                                         <svg   className="w-6 h-6  fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
								       
									<div>

									</div>
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
		</div>
	)
}

export default Main
