import React from "react";
import { Button } from "../Button";
import logo from "../../assets/índice.png"

import {BuscarInputContainer,
		Column,
		Container,
		Input,
		Menu,
		MenuRight,
		UserPicture,
		Wrapper,
		Row,
		Img
} from "./styles.js";


const  Header = () => {
	return(
	<Wrapper>
		<Container>
			<Row>
				<Img src={logo} alt="Logo da DIO"></Img>
				<BuscarInputContainer>
					<Input placeholder="Buscar..."/>
				</BuscarInputContainer>
				<Menu>LiveCode</Menu>
				<Menu>Global</Menu>
			</Row>
			<Row>
				<MenuRight href="#">Home</MenuRight>
				<Button title={"Entrar"}/>
				<Button title={"Cadastrar"}/>
			</Row>
		</Container>
	</Wrapper>
	)
}

export { Header }
