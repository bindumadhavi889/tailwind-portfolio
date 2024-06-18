import {FaGithubSquare} from 'react-icons/fa'
import {TbWorldWww} from 'react-icons/tb'
const ProjectsCard = ({url,img,github,title,text}) => {
  return (
    <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64'/>
      <div className='capitalize p-8'>
        <h2 className='text-xl font-medium tracking-wide'>{title}</h2>
        <p className='mt-4 leading-loose text-slate-700'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='icon'/>
          </a>
          <a href={github}>
            <FaGithubSquare className='icon'/>
          </a>
        </div>
      </div>
    </article>
  )
}
export default ProjectsCard