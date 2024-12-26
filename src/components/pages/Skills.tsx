import SkillBox from '../ui/SkillBox'
import HTMLimg from "../../../public/html-5-removebg-preview.png";
import CSSimg from "../../../public/CSS3_logo.svg.png";
import ReactImg from "../../../public/ReactLogo.png";
import NextjsImg from "../../../public/nextjs.png";
import JavaScriptImg from "../../../public/JavaScript-logo.png";
import ExpressJsImg from "../../../public/express_logo-removebg-preview.png";
import NodeJsImg from "../../../public/Node.js_logo.svg.png";
import MongoDBImg from "../../../public/mongodb logo.png";
import PythonImg from "../../../public/python_logo-removebg-preview.png";

const Skills = () => {
    const HTML: string = HTMLimg.src;
    const CSS: string = CSSimg.src;
    const React: string = ReactImg.src;
    const Nextjs: string = NextjsImg.src;
    const JavaScript: string = JavaScriptImg.src;
    const ExpressJs: string = ExpressJsImg.src;
    const NodeJs: string = NodeJsImg.src;
    const MongoDB: string = MongoDBImg.src;
    const Python: string = PythonImg.src;
  return (
    <div className='flex flex-col select-none'>
        <h1 className='nunito text-2xl font-bold mb-8 max-sm:text-center'>
            My Skills
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-y-8 place-items-center'>
            <SkillBox text='HTML' icon={HTML} start='red' end='yellow'/>
            <SkillBox text='CSS' icon={CSS} start='purple' end='blue'/>
            <SkillBox text='JavaScript' icon={JavaScript} start='yellow' end='orange'/>
            <SkillBox text='React' icon={React} start='lightblue' end='lightblue'/>
            <SkillBox text='Next Js' icon={Nextjs} start='white' end='zinc'/>
            <SkillBox text='Express js' icon={ExpressJs} start='lightgray' end='zinc'/>
            <SkillBox text='Node js' icon={NodeJs} start='green' end='zinc'/>
            <SkillBox text='Mongo DB' icon={MongoDB} start='green' end='white'/>
            <SkillBox text='Python' icon={Python} start='blue' end='yellow'/>
        </div>
    </div>
  )
}

export default Skills