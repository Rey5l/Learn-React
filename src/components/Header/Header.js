import { DiJava } from 'react-icons/di'
import { useState } from 'react'
import { styled } from 'styled-components'
import './Header.css'

const HeaderContainer = styled.header`
	background: linear-gradient(to right, #ff5722, #ff9800);
	color: #fff;
	text-align: center;
	padding: 20px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const HeaderItems = styled.nav`
	margin: 10px;
	text-decoration: none;
	color: #ffffff;
	transition: all 0.3s ease;

	color: #641902;
`
const HeaderTitle = styled.a`
	color: #fff;
	text-decoration: none;
	font-weight: bold;
	font-size: 24px;
`

export default function Header() {
	const [now, setNow] = useState(new Date())
	setInterval(() => setNow(new Date()), 1000)

	return (
		<HeaderContainer>
			<DiJava className='header__logo' />
			<HeaderTitle>SVOD</HeaderTitle>
			<HeaderItems>
				<a href='/'>Home</a>
				<a href='/about'>About</a>
				<a href='/contact'>Contact</a>
			</HeaderItems>
			<span>
				<strong>Время сейчас:</strong> {now.toLocaleTimeString()}
			</span>
		</HeaderContainer>
	)
}
