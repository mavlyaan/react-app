import '../assets/style/Main.scss'
import Block from './Block'

function Main (){
    return(
        <section className='container'>
            <div className='main-container'>
                <Block title="Это заголовок блока с текстом" paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
            <div className='main-container2'>
                <Block title="Это второй заголовок второго блока с текстом" paragraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
            </div>
        </section>
    )
}

export default Main