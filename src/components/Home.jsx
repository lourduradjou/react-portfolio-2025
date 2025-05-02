import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { ReactTyped } from 'react-typed'

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-[#301147]'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-pink-500'>Hi, my name is</p>
				<h1 className='text-5xl sm:text-7xl font-bold text-[#ccd6f6]'>
					Lourdu Radjou
				</h1>
				<h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>
					<ReactTyped
						strings={[
							"I'm a Full Stack Developer.",
							"I'm interested in Data Science.",
							"I'm exploring Web3.",
							'I love building products.',
						]}
						typeSpeed={50}
						backSpeed={30}
						loop
					/>
				</h2>

				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					I’m a full-stack developer specializing in building robust
					and scalable webapps Currently, I’m focused on building
					responsive full-stack web applications and learning WEB3 &
					ML !!.
				</p>
				<div>
					<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
						View Work
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3' />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
