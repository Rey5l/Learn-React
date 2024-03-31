import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import { Fragment, useState } from 'react'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'


function App() {
	const [tab, setTab] = useState('main')

	return (
		<Fragment>
			<Header />
			<main className='container'>
				<Main />
				<TabsSection active={tab} onChange={current => setTab(current)} />

				{tab === 'main' && (
					<>
						<TeachingSection />
						<DifferencesSection />
					</>
				)}

				{tab === 'feedback' && (
					<>
						<FeedbackSection />
					</>
				)}
			</main>
		</Fragment>
	)
}

export default App
