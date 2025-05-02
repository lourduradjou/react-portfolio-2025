import React from 'react'

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen bg-[#260f38] text-gray-300'
		>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi. I'm Lourdu Radjou, nice to meet you.</p>
					</div>
					<div>
						<p>
							I’m a passionate Computer Science undergraduate who
							loves building impactful and intelligent software
							solutions. From crafting sleek, responsive web and
							mobile apps to training custom ML models, I enjoy
							turning ideas into real-world tools that solve
							problems. Whether it's a startup prototype or a
							research-driven project, I bring a blend of
							technical skill and creativity to the table. What
							would you build if you had someone who could go from
							pixel-perfect UI to AI-powered backend—all in one
							sprint?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
