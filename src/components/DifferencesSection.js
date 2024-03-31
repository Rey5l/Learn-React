import Button from './Button/Button'
import { useState } from 'react'
import { differences } from '../data'
import './Button/Button.module.css'

export default function DifferencesSection() {
	const [contentType, setContentType] = useState(null)

	function handleClick(type) {
		setContentType(type)
	}

	return (
		<section>
			<h3>Чем мы отличаемся от других?</h3>
			<Button
				isActive={contentType === 'way'}
				onClick={() => handleClick('way')}
			>
				Подход
			</Button>
			<Button
				isActive={contentType === 'easy'}
				onClick={() => handleClick('easy')}
			>
				Доступность
			</Button>
			<Button
				isActive={contentType === 'program'}
				onClick={() => handleClick('program')}
			>
				Концентрация
			</Button>

			{!contentType && <p className='differences'>Нажми на кнопку</p>}
			{contentType && <p className='differences'>{differences[contentType]}</p>}
		</section>
	)
}
