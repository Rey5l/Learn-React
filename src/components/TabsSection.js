import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
	return (
		<section style={{ marginBottom: '10px' }}>
			<Button isActive={active === 'main'} onClick={() => onChange('main')}>
				Главная
			</Button>
			<Button
				isActive={active === 'feedback'}
				onClick={() => onChange('feedback')}
			>
				О нас
			</Button>
		</section>
	)
}
