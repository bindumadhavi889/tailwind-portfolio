import aboutsvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section id='about' className='bg-white py-20'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutsvg} className='w-full h-64'/>
        <article>
          <SectionTitle text='Code and Coffee'/>
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About