import React from 'react'

import HTML from '../assets/icons/html.png'
import CSS from '../assets/icons/css.png'
import JavaScript from '../assets/icons/javascript.png'
import ReactImg from '../assets/icons/react.png'
import Node from '../assets/icons/node.png'
import FireBase from '../assets/icons/firebase.png'
import GitHub from '../assets/icons/github.png'
import Tailwind from '../assets/icons/tailwind.png'
import Mongo from '../assets/icons/mongo.png'
import TypeScript from '../assets/icons/typescript.png'
import Mysql from '../assets/icons/mysql.png'
import Python from '../assets/icons/Python.png'

const Skills = () => {
	return (
		<div
			name='skills'
			className='w-full h-screen bg-[#0a192f] text-gray-300'
		>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
						Skills
					</p>
					<p className='py-4'>
						These are the technologies I've worked with
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					{/* Frontend */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={HTML}
							alt='HTML icon'
						/>
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={CSS}
							alt='CSS icon'
						/>
						<p className='my-4'>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={JavaScript}
							alt='JavaScript icon'
						/>
						<p className='my-4'>JavaScript</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={TypeScript}
							alt='TypeScript icon'
						/>
						<p className='my-4'>TypeScript</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={ReactImg}
							alt='React icon'
						/>
						<p className='my-4'>React</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Tailwind}
							alt='Tailwind icon'
						/>
						<p className='my-4'>Tailwind</p>
					</div>

					{/* Backend */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Node}
							alt='Node.js icon'
						/>
						<p className='my-4'>Node.js</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={FireBase}
							alt='Firebase icon'
						/>
						<p className='my-4'>Firebase</p>
					</div>

					{/* Database */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Mongo}
							alt='MongoDB icon'
						/>
						<p className='my-4'>MongoDB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Mysql}
							alt='MySQL icon'
						/>
						<p className='my-4'>MySQL</p>
					</div>

					{/* Tools */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={GitHub}
							alt='GitHub icon'
						/>
						<p className='my-4'>GitHub</p>
					</div>

					{/* Language */}
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto'
							src={Python}
							alt='Python icon'
						/>
						<p className='my-4'>Python</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
