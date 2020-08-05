import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars2.githubusercontent.com/u/49625292?s=460&u=dd8dff940f5621d64414a0b840ff4aec6d24953c&v=4" alt="Nexus NX"/>
				<div>
					<strong>Nexus NX</strong>
					<span>Programação</span>
				</div>
			</header>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. 
				<br/><br/>
				Possimus aut perspiciatis placeat temporibus non sed! Quo ad sequi nostrum iusto id natus debitis, est laboriosam ex reiciendis odio placeat aspernatur!
			</p>

			<footer>
				<p>
					Preço/Hora
					<strong>R$ 70,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;