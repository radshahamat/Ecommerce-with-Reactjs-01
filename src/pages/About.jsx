import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quae, voluptas voluptatum nihil enim laboriosam corrupti voluptatibus quaerat beatae maiores totam vitae numquam amet aliquid dolorum cumque inventore nobis, ut nostrum! Officiis quaerat nihil magni, recusandae repellendus quod distinctio ut facilis consectetur aliquid eos quisquam inventore. Ipsa soluta, quod harum minus dicta dolorum quibusdam velit facilis. Mollitia, facilis aut, necessitatibus, enim corporis reiciendis rem sed nobis suscipit cum modi tenetur!</p>

              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus dolorem facilis sit enim totam temporibus, deleniti, voluptate doloremque numquam delectus sequi? Facere atque quasi, qui nemo similique cumque a exercitationem, dignissimos labore nostrum quae, obcaecati possimus ea dolorum molestias animi eius veniam ullam? Accusantium exercitationem dolorum accusamus excepturi qui. Vel!!</p>

              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ducimus voluptate aut iste neque officia numquam dicta pariatur delectus. Totam!</p>
          </div>
      </div>

      <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, officiis?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam omnis ut culpa quia cupiditate officiis!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam omnis ut culpa quia cupiditate officiis!</p>
          </div>
      </div>

      <NewsLetterBox />

      
    </div>
  )
}

export default About
