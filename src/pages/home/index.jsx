import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header }from '../../components/Header'

const Home = () => {
	return	(<>
		<Header/>	
		<Button title={"Teste Supremo!"}/>
		<Button variant='secondary' title={"Teste quase supremo!"}/>
		<Link to='/login'>Clique aqui para fazer login</Link>
		</>)
}

export { Home }
