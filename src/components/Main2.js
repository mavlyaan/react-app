import '../assets/style/Main2.scss'
import MiniBlock from './MiniBlock'
import grogu from '../assets/image/grogu.jpeg'
import mandalorian from '../assets/image/mandalorian.jpeg'

function Main2(){
    return(
    <section className='main3'>
        <MiniBlock title="это первый мини-блок" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img={grogu} />
        <MiniBlock title="это второй мини-блок" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img={mandalorian}/>
        <MiniBlock title="это третий мини-блок" paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." img={grogu} /> 
    </section>



    )
}
export default Main2