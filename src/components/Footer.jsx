import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-[#260f38] text-gray-300 py-6 border-t border-pink-600 '>
			<div className='max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center pb-16'>
				<p className='text-sm mb-4 md:mb-0'>
					&copy; 2025 Lourdu Radjou. All rights reserved.
				</p>
				<div className='flex space-x-6 text-xl'>
					<a
						href='https://github.com/lourduradjou'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithub className='hover:text-pink-600 transition duration-300' />
					</a>
					<a
						href='https://linkedin.com/in/lourduradjou'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedin className='hover:text-pink-600 transition duration-300' />
					</a>
					<a href='mailto:lourduradjou.a@gmail.com'>
						<FaEnvelope className='hover:text-pink-600 transition duration-300' />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
