import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const handleClick = () => setNav(!nav)

	return (
		<div className='fixed w-full  h-[80px] flex justify-between items-center md:px-12 px-12 bg-[#130627] text-gray-300'>
			<div>
				<h2 className='font-bold text-4xl tracking-widest font-mono hover:text-pink-800 duration-300'>
					LR
				</h2>
			</div>

			{/* menu */}
			<ul className='hidden md:flex '>
				<li className='underLight'>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='underLight'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='underLight'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='underLight'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='underLight'>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<button onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
			</button>

			{/* Mobile menu */}
			<ul
				className={`md:hidden fixed top-0 right-0 h-screen tracking-widest bg-[#200a30] flex flex-col pt-12 items-center z-0 transition-all duration-300 ${
					nav ? 'w-[70%] right-0' : 'w-[70%] -right-[100%]'
				}`}
			>
				<li className='py-6 text-2xl border-b-2 border-b-slate-50 w-full text-center border-opacity-30'>
					<Link
						onClick={handleClick}
						to='home'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='py-6 text-2xl border-b-2 border-b-slate-50 w-full text-center border-opacity-30'>
					<Link
						onClick={handleClick}
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-6 text-2xl border-b-2 border-b-slate-50 w-full text-center border-opacity-30'>
					<Link
						onClick={handleClick}
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-6 text-2xl border-b-2 border-b-slate-50 w-full text-center border-opacity-30'>
					<Link
						onClick={handleClick}
						to='work'
						smooth={true}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className='py-6 text-2xl border-b-2 border-b-slate-50 w-full text-center border-opacity-30'>
					<Link
						onClick={handleClick}
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://linkedin.com/in/lourduradjou'
							target='_blank'
							rel='noreferrer'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://github.com/lourduradjou'
							target='_blank'
							rel='noreferrer'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='mailto:lourduradjou.a@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://drive.google.com/file/d/1i5OD2z3H1PBNVp_hPZk2Hc6B1gpvR0eu/view?usp=sharing'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
