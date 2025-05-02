import React from 'react'

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full min-h-screen bg-[#260f38] flex justify-center items-center p-6 py-12'
		>
			<form
				method='POST'
				className='flex flex-col max-w-[600px] w-full bg-[#1c0c2b] p-8 rounded-lg shadow-xl'
			>
				<div className='pb-6'>
					<h2 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200'>
						Contact
					</h2>
					<p className='text-gray-400 pt-4 text-sm sm:text-base'>
						Submit the form below or shoot me an email —{' '}
						<a
							href='mailto:vutukuri.kumar192st@niituniversity.in'
							className='underline text-pink-500 hover:text-pink-400'
						>
							lourduradjou.a@gmail.com
						</a>
					</p>
				</div>

				<label htmlFor='name' className='text-gray-300 mt-4 mb-1'>
					Name
				</label>
				<input
					id='name'
					className='p-3 rounded bg-[#714e6f] text-black focus:outline-none focus:ring-2 focus:ring-pink-500'
					type='text'
					name='name'
					placeholder='Your full name'
					required
				/>

				<label htmlFor='email' className='text-gray-300 mt-4 mb-1'>
					Email
				</label>
				<input
					id='email'
					className='p-3 rounded bg-[#714e6f] text-black focus:outline-none focus:ring-2 focus:ring-pink-500'
					type='email'
					name='email'
					placeholder='your@email.com'
					required
				/>

				<label htmlFor='message' className='text-gray-300 mt-4 mb-1'>
					Message
				</label>
				<textarea
					id='message'
					name='message'
					rows='6'
					className='p-3 rounded bg-[#714e6f] text-black resize-none focus:outline-none focus:ring-2 focus:ring-pink-500'
					placeholder='Write your message here...'
					required
				></textarea>

				<button
					type='submit'
					className='mt-6 bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-500 transition duration-300 self-center'
				>
					Let’s Collaborate
				</button>
			</form>
		</div>
	)
}

export default Contact
